#!/usr/bin/env node
/**
 * Fetches GitHub data (last commit date + star count) for each repo in projects.csv.
 * Uses GET /repos/{owner}/{repo} — one call per repo, gets both fields.
 * Requires: GITHUB_TOKEN env var, Node.js 18+
 * Output: github_data.csv (url,last_commit,stars)
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const CSV_PATH = resolve(ROOT, 'data/projects.csv')
const OUTPUT_PATH = resolve(ROOT, 'data/github_data.csv')
const NOT_FOUND_PATH = resolve(ROOT, 'data/404.csv')
const BATCH_SIZE = 10
const DELAY_MS = 2000

const token = process.env.GITHUB_TOKEN
if (!token) {
  console.error('ERROR: GITHUB_TOKEN is not set')
  process.exit(1)
}

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

function extractOwnerRepo(url) {
  const m = url.match(/^https:\/\/github\.com\/([^/]+\/[^/?#]+?)(?:\.git)?\/?$/)
  return m ? m[1] : null
}

async function fetchRepoData(ownerRepo, url) {
  const apiUrl = `https://api.github.com/repos/${ownerRepo}`
  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'awesome-quant-fetch',
    },
  })
  if (res.status === 404) {
    console.warn(`NOT FOUND (404): ${ownerRepo}`)
    return { url, last_commit: '', stars: '', notFound: true }
  }
  if (!res.ok) {
    console.warn(`WARN: ${res.status} for ${ownerRepo}`)
    return { url, last_commit: '', stars: '' }
  }
  const data = await res.json()
  const pushed = data.pushed_at ?? ''
  return {
    url,
    last_commit: pushed ? pushed.slice(0, 10) : '',
    stars: data.stargazers_count ?? '',
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function main() {
  const raw = readFileSync(CSV_PATH, 'utf-8')
  const projects = parseCSV(raw)
  const githubProjects = projects.filter(p => p.url?.startsWith('https://github.com/'))
  console.log(`Found ${githubProjects.length} GitHub repos`)

  // Load existing 404s to avoid re-fetching known dead repos
  const existing404s = new Set(
    existsSync(NOT_FOUND_PATH)
      ? readFileSync(NOT_FOUND_PATH, 'utf-8').trim().split('\n').slice(1).map(l => l.replace(/"/g, '').trim())
      : []
  )

  const toFetch = githubProjects.filter(p => !existing404s.has(p.url))
  const skipped404 = githubProjects.length - toFetch.length
  if (skipped404 > 0) console.log(`Skipping ${skipped404} known 404 repos`)
  console.log(`Found ${toFetch.length} GitHub repos to fetch`)

  const results = []
  const newNotFound = []
  const totalBatches = Math.ceil(toFetch.length / BATCH_SIZE)

  for (let i = 0; i < toFetch.length; i += BATCH_SIZE) {
    const batch = toFetch.slice(i, i + BATCH_SIZE)
    console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}/${totalBatches}`)
    const batchResults = await Promise.all(
      batch.map(p => {
        const ownerRepo = extractOwnerRepo(p.url)
        if (!ownerRepo) {
          console.warn(`WARN: cannot parse ${p.url}`)
          return Promise.resolve({ url: p.url, last_commit: '', stars: '' })
        }
        return fetchRepoData(ownerRepo, p.url)
      })
    )
    for (const r of batchResults) {
      if (r.notFound) {
        newNotFound.push(r.url)
      } else {
        results.push(r)
      }
    }
    if (i + BATCH_SIZE < toFetch.length) await sleep(DELAY_MS)
  }

  const csv = [
    'url,last_commit,stars',
    ...results.map(r => `"${r.url}","${r.last_commit}","${r.stars}"`),
  ].join('\n') + '\n'
  writeFileSync(OUTPUT_PATH, csv, 'utf-8')
  console.log(`Wrote ${results.length} entries to data/github_data.csv`)

  // Append new 404s (deduplicated with existing)
  if (newNotFound.length > 0) {
    const allNotFound = [...existing404s, ...newNotFound]
    const notFoundCsv = ['url', ...allNotFound.map(u => `"${u}"`)].join('\n') + '\n'
    writeFileSync(NOT_FOUND_PATH, notFoundCsv, 'utf-8')
    console.log(`Recorded ${newNotFound.length} new 404s → data/404.csv (${allNotFound.length} total)`)
  }
}

main().catch(err => { console.error(err); process.exit(1) })
