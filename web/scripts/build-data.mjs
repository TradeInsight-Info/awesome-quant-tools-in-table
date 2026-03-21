import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import Papa from 'papaparse'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Resolve a path relative to this script file (not the process CWD).
 * Required because the workflow runs: node web/scripts/build-data.mjs from repo root.
 */
function rel(...parts) {
  return resolve(__dirname, ...parts)
}

const PROJECTS_CSV    = rel('../../projects.csv')
const GITHUB_DATA_CSV = rel('../../github_data.csv')
const OUTPUT_JSON     = rel('../public/projects.json')

// --- Parse projects.csv ---
const projectsRaw = readFileSync(PROJECTS_CSV, 'utf-8')
const { data: projects, errors: pErrors } = Papa.parse(projectsRaw, { header: true, skipEmptyLines: true })
if (pErrors.length) {
  console.error('projects.csv parse errors:', pErrors)
  process.exit(1)
}

// --- Parse github_data.csv (optional) ---
let commitMap = new Map()   // url -> { last_commit, stars }
if (existsSync(GITHUB_DATA_CSV)) {
  const raw = readFileSync(GITHUB_DATA_CSV, 'utf-8')
  const { data } = Papa.parse(raw, { header: true, skipEmptyLines: true })
  for (const row of data) {
    if (row.url) {
      commitMap.set(row.url.trim(), {
        last_commit: row.last_commit?.trim() || null,
        stars: row.stars?.trim() ? parseInt(row.stars.trim(), 10) : null,
      })
    }
  }
  console.log(`Loaded ${commitMap.size} github data entries`)
} else {
  console.warn(`WARN: github_data.csv not found — last_commit and stars will be null`)
}

// --- Merge ---
const merged = projects.map(row => {
  // Split section "Python > Numerical Libraries" into language + section
  const rawSection = row.section?.trim() ?? ''
  const gtIdx = rawSection.indexOf(' > ')
  const language = gtIdx !== -1 ? rawSection.slice(0, gtIdx).trim() : ''
  const section  = gtIdx !== -1 ? rawSection.slice(gtIdx + 3).trim() : rawSection

  const ghData = commitMap.get(row.url?.trim())
  return {
    project:     row.project?.trim() ?? '',
    language:    language,
    section:     section,
    url:         row.url?.trim() ?? '',
    description: row.description?.trim() ?? '',
    github:      row.github?.trim() === 'True',
    cran:        row.cran?.trim() === 'True',
    last_commit: ghData?.last_commit ?? null,
    stars:       ghData?.stars ?? null,
  }
})

// --- Write output ---
writeFileSync(OUTPUT_JSON, JSON.stringify(merged, null, 2))
console.log(`Wrote ${merged.length} projects to ${OUTPUT_JSON}`)
