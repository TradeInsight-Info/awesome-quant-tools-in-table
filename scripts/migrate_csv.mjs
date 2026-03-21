#!/usr/bin/env node
// One-time migration: split 'section' column into 'language' + 'section'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CSV_PATH = resolve(__dirname, '../projects.csv')

const raw = readFileSync(CSV_PATH, 'utf-8')
const lines = raw.split('\n')

// Validate header
const header = lines[0]
if (!header.startsWith('project,section,')) {
  console.error('ERROR: Unexpected header:', header)
  process.exit(1)
}

// Replace header
lines[0] = 'project,language,section,url,description,github,cran'

// Process data rows
// Format: project,section,url,"description possibly quoted",github,cran
// The section field is between the 1st and 2nd commas (never quoted)
const result = [lines[0]]
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim()
  if (!line) continue

  const firstComma = line.indexOf(',')
  const rest = line.slice(firstComma + 1)
  const secondComma = rest.indexOf(',')

  const project = line.slice(0, firstComma)
  const oldSection = rest.slice(0, secondComma)
  const remainder = rest.slice(secondComma + 1) // url,description,github,cran

  // Split oldSection on ' > '
  const gtIdx = oldSection.indexOf(' > ')
  let language = ''
  let section = ''
  if (gtIdx !== -1) {
    language = oldSection.slice(0, gtIdx).trim()
    section = oldSection.slice(gtIdx + 3).trim()
  } else {
    section = oldSection.trim()
  }

  result.push(`${project},${language},${section},${remainder}`)
}

writeFileSync(CSV_PATH, result.join('\n') + '\n', 'utf-8')
console.log(`Migrated ${result.length - 1} rows. New header: ${result[0]}`)
