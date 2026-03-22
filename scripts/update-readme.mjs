#!/usr/bin/env node
/**
 * Regenerates the tools tables in README.md from projects.csv + github_data.csv.
 * Replaces content between <!-- TOOLS-START --> and <!-- TOOLS-END --> markers.
 * Generates one ## section per language, with ### subcategory subheadings.
 * Projects sorted alphabetically within each subcategory.
 * Language sections ordered by project count descending; non-language groups pinned last.
 *
 * Run: node scripts/update-readme.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PROJECTS_CSV    = resolve(ROOT, 'data/projects.csv')
const GITHUB_DATA_CSV = resolve(ROOT, 'data/github_data.csv')
const README_PATH     = resolve(ROOT, 'README.md')
const START_MARKER    = '<!-- TOOLS-START -->'
const END_MARKER      = '<!-- TOOLS-END -->'

// Groups that are not programming languages — pinned to the end of the README
const META_GROUPS = new Set(['Frameworks', 'Reproducing Works, Training & Books'])

// Hand-rolled CSV field parser — handles quoted fields with embedded commas
function parseCSVLine(line) {
  const fields = []
  let i = 0, inQuote = false, field = ''
  while (i <= line.length) {
    const ch = line[i]
    if (ch === '"') {
      inQuote = !inQuote
    } else if ((ch === ',' || i === line.length) && !inQuote) {
      fields.push(field)
      field = ''
    } else {
      field += (ch ?? '')
    }
    i++
  }
  return fields
}

function parseCSV(raw) {
  const lines = raw.trim().split('\n')
  const headers = parseCSVLine(lines[0]).map(h => h.trim())
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const fields = parseCSVLine(line)
    const row = {}
    for (let i = 0; i < headers.length; i++) {
      row[headers[i]] = fields[i]?.trim() ?? ''
    }
    return row
  })
}

function loadGitHubData() {
  if (!existsSync(GITHUB_DATA_CSV)) return new Map()
  const rows = parseCSV(readFileSync(GITHUB_DATA_CSV, 'utf-8'))
  const map = new Map()
  for (const row of rows) {
    if (row.url) {
      map.set(row.url.trim(), {
        stars: row.stars?.trim() ? parseInt(row.stars.trim(), 10) : null,
      })
    }
  }
  return map
}

/** Escape pipe characters so they don't break markdown table cells. */
function escapeCell(str) {
  return (str ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

function formatStars(n) {
  if (n == null || isNaN(n)) return '—'
  return '★\u00a0' + n.toLocaleString('en-US')
}

function formatGitHub(githubUrl) {
  if (!githubUrl?.startsWith('https://github.com/')) return '—'
  const slug = githubUrl.replace('https://github.com/', '').replace(/\/$/, '')
  return `[${slug}](${githubUrl})`
}

/** Derive a GitHub-compatible heading anchor from a heading string. */
function toAnchor(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')
}

function generateContent(projects, ghData) {
  // Group: top-level group -> subcategory -> Project[]
  // Section format: "Language > Subcategory" or bare "Language"/"GroupName"
  const groups = new Map()
  for (const row of projects) {
    const raw = row.section?.trim() ?? ''
    const gtIdx = raw.indexOf(' > ')
    const group = gtIdx !== -1 ? raw.slice(0, gtIdx).trim() : (raw || 'Other')
    const sub   = gtIdx !== -1 ? raw.slice(gtIdx + 3).trim() : ''

    if (!groups.has(group)) groups.set(group, new Map())
    const subs = groups.get(group)
    if (!subs.has(sub)) subs.set(sub, [])
    subs.get(sub).push(row)
  }

  // Sort projects within each subcategory alphabetically (case-insensitive)
  for (const subs of groups.values()) {
    for (const items of subs.values()) {
      items.sort((a, b) => a.project.toLowerCase().localeCompare(b.project.toLowerCase()))
    }
  }

  // Split into language groups vs meta groups, then order each by count desc
  const langGroups = []
  const metaGroups = []
  for (const [group, subs] of groups.entries()) {
    const count = [...subs.values()].reduce((sum, arr) => sum + arr.length, 0)
    ;(META_GROUPS.has(group) ? metaGroups : langGroups).push([group, subs, count])
  }
  const byCountDesc = (a, b) => b[2] - a[2] || a[0].localeCompare(b[0])
  langGroups.sort(byCountDesc)
  metaGroups.sort(byCountDesc)

  const ordered = [...langGroups, ...metaGroups]

  const lines = []
  lines.push('## Table of Contents')
  lines.push('')
  for (const [group, , count] of ordered) {
    lines.push(`- [${group}](#${toAnchor(group)}) (${count})`)
  }
  lines.push('')

  for (const [group, subs] of ordered) {
    lines.push(`## ${group}`)
    lines.push('')

    // Subcategories sorted alphabetically; empty-string sub (no subcategory) goes first
    const sortedSubs = [...subs.entries()].sort((a, b) => {
      if (a[0] === '') return -1
      if (b[0] === '') return 1
      return a[0].localeCompare(b[0])
    })

    for (const [sub, items] of sortedSubs) {
      if (sub) {
        lines.push(`### ${sub}`)
        lines.push('')
      }
      lines.push('| # | Name | Description | GitHub | Stars |')
      lines.push('|--:|------|-------------|--------|------:|')
      items.forEach((row, idx) => {
        const ghEntry = ghData.get(row.url?.trim())
        const name    = row.url ? `[${escapeCell(row.project)}](${row.url})` : escapeCell(row.project)
        const desc    = escapeCell(row.description)
        const gh      = formatGitHub(row.github)
        const stars   = formatStars(ghEntry?.stars ?? null)
        lines.push(`| ${idx + 1} | ${name} | ${desc} | ${gh} | ${stars} |`)
      })
      lines.push('')
    }
  }

  return lines.join('\n').trimEnd()
}

function main() {
  const projects = parseCSV(readFileSync(PROJECTS_CSV, 'utf-8'))
  const ghData   = loadGitHubData()
  console.log(`Loaded ${projects.length} projects, ${ghData.size} GitHub data entries`)

  const readme   = readFileSync(README_PATH, 'utf-8')
  const startIdx = readme.indexOf(START_MARKER)
  const endIdx   = readme.indexOf(END_MARKER)

  if (startIdx === -1 || endIdx === -1) {
    console.error('ERROR: <!-- TOOLS-START --> / <!-- TOOLS-END --> markers not found in README.md')
    process.exit(1)
  }

  const before  = readme.slice(0, startIdx + START_MARKER.length)
  const after   = readme.slice(endIdx)
  const content = generateContent(projects, ghData)
  writeFileSync(README_PATH, `${before}\n\n${content}\n\n${after}`, 'utf-8')
  console.log(`Updated README.md`)
}

main()
