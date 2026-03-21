#!/usr/bin/env node
/**
 * Regenerates the tools list in README.md from projects.csv.
 * Replaces content between <!-- TOOLS-START --> and <!-- TOOLS-END --> markers.
 * Run: node scripts/update_readme.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const CSV_PATH = resolve(ROOT, 'data/projects.csv')
const README_PATH = resolve(ROOT, 'README.md')
const START_MARKER = '<!-- TOOLS-START -->'
const END_MARKER = '<!-- TOOLS-END -->'

// Minimal CSV parser — handles quoted fields
function parseCSV(raw) {
  const lines = raw.trim().split('\n')
  const headers = lines[0].split(',').map(h => h.trim())
  return lines.slice(1).map(line => {
    const row = {}
    let i = 0, col = 0, inQuote = false, field = ''
    while (i <= line.length) {
      const ch = line[i]
      if (ch === '"') {
        inQuote = !inQuote
      } else if ((ch === ',' || i === line.length) && !inQuote) {
        row[headers[col]?.trim()] = field.trim()
        field = ''
        col++
      } else {
        field += (ch ?? '')
      }
      i++
    }
    return row
  })
}

function generateToolsList(projects) {
  // Split section into language + subcategory
  const parsed = projects.map(p => {
    const raw = p.section?.trim() ?? ''
    const idx = raw.indexOf(' > ')
    return {
      ...p,
      language: idx !== -1 ? raw.slice(0, idx).trim() : 'Other',
      sub: idx !== -1 ? raw.slice(idx + 3).trim() : raw,
    }
  })

  // Group: language -> subcategory -> projects[]
  const byLang = new Map()
  for (const p of parsed) {
    if (!byLang.has(p.language)) byLang.set(p.language, new Map())
    const langMap = byLang.get(p.language)
    const sub = p.sub || 'General'
    if (!langMap.has(sub)) langMap.set(sub, [])
    langMap.get(sub).push(p)
  }

  const lines = []
  for (const [lang, sections] of [...byLang.entries()].sort()) {
    lines.push(`## ${lang}`)
    lines.push('')
    for (const [sect, items] of [...sections.entries()].sort()) {
      lines.push(`### ${sect}`)
      lines.push('')
      for (const p of items) {
        const desc = p.description ? ` — ${p.description}` : ''
        lines.push(`- [${p.project}](${p.url})${desc}`)
      }
      lines.push('')
    }
  }
  return lines.join('\n')
}

function main() {
  const raw = readFileSync(CSV_PATH, 'utf-8')
  const projects = parseCSV(raw)
  console.log(`Loaded ${projects.length} projects`)

  const readme = readFileSync(README_PATH, 'utf-8')
  const startIdx = readme.indexOf(START_MARKER)
  const endIdx = readme.indexOf(END_MARKER)

  if (startIdx === -1 || endIdx === -1) {
    console.error(`ERROR: markers not found in README.md`)
    console.error(`Add <!-- TOOLS-START --> and <!-- TOOLS-END --> to README.md`)
    process.exit(1)
  }

  const before = readme.slice(0, startIdx + START_MARKER.length)
  const after = readme.slice(endIdx)
  const toolsList = generateToolsList(projects)
  writeFileSync(README_PATH, `${before}\n\n${toolsList}\n${after}`, 'utf-8')
  console.log(`Updated README.md with ${projects.length} tools`)
}

main()
