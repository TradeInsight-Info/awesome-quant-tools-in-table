# Design: React SPA + Data Refresh for Awesome Quant Tools

**Date:** 2026-03-20
**Status:** Approved
**Repo name:** `awesome-quant-tools-in-table`

---

## Overview

Transform the existing Quarto/R-based site into a React SPA deployed to GitHub Pages, backed by a clean CSV data source and an automated weekly script to fetch GitHub last commit times. Simultaneously simplify the repository to remove all legacy tooling.

Three scopes, executed in order: **Scope 3 (simplify) → Scope 2 (data refresh) → Scope 1 (React SPA)**.

---

## Scope 3 — Repository Simplification

### Goal
Strip the repo down to only what matters: `site/projects.csv`, `README.md`, and the new `web/` app.

### Files to Delete
- `parse.py` — legacy GitHub scraper (replaced by Scope 2 shell script)
- `cranscrape.py` — CRAN scraper (no longer needed)
- `poetry.lock`, `pyproject.toml` — Python dependency files
- `topic.py`, `recommendation.ipynb` — unused analysis scripts
- `quants.md`, `legacy.txt`, `styles.css`, `cran.csv` — legacy artifacts
- `site/_quarto.yml`, `site/index.qmd`, `site/projects.qmd` — Quarto site
- `site/CODE_OF_CONDUCT.qmd`, `site/about.qmd`, `site/.gitignore` — Quarto extras
- `.nojekyll` — Jekyll suppression file (no longer relevant)
- `.github/workflows/build.yml` — replaced by two new workflows

### `site/projects.csv` — Column Change

**Remove the `last_commit` column entirely.** Some rows currently have values in this column (e.g., `quantdsl: 2017-10-26`) — discard all of these values; going forward, last commit times are fetched automatically by the Scope 2 script.

**Final authoritative column order (6 columns):**
```
project, section, url, description, github, cran
```

The `repo` column is removed entirely — `owner/name` can always be derived from `url` by stripping `https://github.com/` for GitHub projects.

The `github` and `cran` columns store the string values `'True'` or `'False'` (not JSON booleans). This must be preserved exactly as-is in the CSV.

### `README.md` — Update

Keep `README.md` but make two changes:
1. Add a prominent link to the GitHub Pages SPA near the top
2. Add sentinel comment markers around the project list section so the Scope 2 script can regenerate it:

```markdown
<!-- PROJECT-LIST-START -->
...auto-generated content...
<!-- PROJECT-LIST-END -->
```

The Scope 2 script replaces everything between these markers on each run.

### `.gitignore` — Update

Add all three of these entries:
```
web/node_modules/
web/dist/
web/public/projects.json
```

`last_commit_times.csv` is NOT gitignored — it is tracked in git and committed by the Scope 2 workflow on each weekly run.

### New File: `.github/PULL_REQUEST_TEMPLATE.md`

```markdown
## Adding a New Tool

Please fill in all fields below when adding a new row to `site/projects.csv`.

- **Name:**
- **Description:**
- **Section:** (e.g. `Python > Financial Instruments and Pricing`)
- **Site URL:**
- **GitHub Link:** (if applicable, full URL e.g. `https://github.com/owner/repo`)
```

### One-Time Repository Setup

Before the deploy workflow will work, GitHub Pages must be configured to use **GitHub Actions** as the source (not "Deploy from a branch"). Go to: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

---

## Scope 2 — Data Refresh Script

### Goal
Automatically fetch the last GitHub commit time for each project whose `url` is a GitHub URL, write results to a standalone CSV, and regenerate the README project list. Runs weekly via GitHub Actions.

### Output File: `last_commit_times.csv` (repo root)

**Canonical path:** `<repo-root>/last_commit_times.csv`

Columns: `url, last_commit`

- `url` matches the `url` column in `site/projects.csv` (the join key)
- Only rows where `url` starts with `https://github.com/` are included
- Projects with a non-GitHub `url` (e.g., numpy at numpy.org) are excluded — only the `url` column drives inclusion. These tools show no last commit in the SPA (blank cell).
- This file IS tracked in git. The Actions workflow commits and pushes it after each run.

### Script: `scripts/fetch_last_commits.sh`

**Dependencies:** `bash`, `curl`, `jq`, `python3` (stdlib `csv` module only — no pip installs required)

**Logic:**

**Step 1 — Parse CSV**
Use `python3 -c "import csv, sys; ..."` to parse `site/projects.csv`. Filter rows where the `url` field starts with `https://github.com/`.

**Step 2 — Extract `owner/repo`**
For each GitHub URL, extract `owner/repo` using this regex: `^https://github\.com/([^/]+/[^/?#]+)`. Strip trailing `.git` if present. Discard anything after the second path segment (sub-paths like `/tree/main` are ignored). If extraction fails, skip the row and log a warning to stderr.

**Step 3 — Fetch with batching and error handling**
Process in batches of 10. After each batch, `sleep 2` (authenticated limit is 5,000 req/hour; this is a safety margin).

For each repo, call:
```
GET https://api.github.com/repos/{owner}/{repo}/commits?per_page=1
Authorization: Bearer $GITHUB_TOKEN
Accept: application/vnd.github+json
```

On non-200 response: log `WARN: {url} → HTTP {status}` to stderr and write an empty string for `last_commit` (do not exit). This handles private, deleted, renamed, or rate-limited repos gracefully.

On success: parse `.[0].commit.author.date` with `jq`, truncate to `YYYY-MM-DD`.

**Step 4 — Write `last_commit_times.csv`**
Write to repo root with header `url,last_commit`. Rows with failed fetches get an empty `last_commit` value.

**Step 5 — Regenerate README.md project list**
Replace everything between `<!-- PROJECT-LIST-START -->` and `<!-- PROJECT-LIST-END -->` in `README.md` with content generated from `site/projects.csv`:

- Sort sections alphabetically
- Within each section, sort entries alphabetically by project name
- Format:

```markdown
<!-- PROJECT-LIST-START -->

### Python > Financial Instruments and Pricing

- [ffn](https://github.com/pmorissette/ffn) — A financial function library for Python.
- [FinancePy](https://github.com/domokane/FinancePy) — A Python Finance Library...

### Python > Numerical Libraries & Data Structures

- [numpy](https://www.numpy.org) — NumPy is the fundamental package...

<!-- PROJECT-LIST-END -->
```

One blank line after `<!-- PROJECT-LIST-START -->`, one blank line between each section block, no trailing blank line before `<!-- PROJECT-LIST-END -->`.

**Step 6 — Commit and push**
```bash
git config user.email "github-actions[bot]@users.noreply.github.com"
git config user.name "github-actions[bot]"
git add last_commit_times.csv README.md
git diff --cached --quiet || git commit -m "chore: update last commit times and README [skip ci]"
git push
```

The `[skip ci]` in the commit message suppresses the `push`-triggered deploy workflow run for this auto-commit. The `git diff --cached --quiet ||` guard avoids an empty commit when nothing changed.

### Workflow: `.github/workflows/fetch-commits.yml`

```yaml
name: Fetch Last Commit Times

on:
  schedule:
    - cron: '0 0 * * 1'   # Every Monday 00:00 UTC
  workflow_dispatch:        # Manual trigger

permissions:
  contents: write           # Required to commit and push

jobs:
  fetch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - name: Fetch last commit times
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: bash scripts/fetch_last_commits.sh
```

---

## Scope 1 — React SPA

### Goal
A fast, filterable, sortable table of all quant tools, deployed to GitHub Pages. Replaces the Quarto site entirely.

### Stack
- **Vite** + **React** + **TypeScript** — build tooling
- **Shadcn/ui** — component library (Table, Input, Badge, Command, Popover)
- **TanStack Table (react-table v8)** — table state (sorting, filtering)
- **papaparse** — CSV parsing; used only in `build-data.mjs` at build time (listed as `devDependency`)

### Data Pipeline (Build-Time)

```
site/projects.csv  +  last_commit_times.csv (repo root)
          ↓
  web/scripts/build-data.mjs   (Node.js ESM, uses papaparse from node_modules)
          ↓  join on url; parse 'True'/'False' strings to booleans
  web/public/projects.json
          ↓
  vite build  →  web/dist/
```

`build-data.mjs` runs **after** `npm ci` so that `papaparse` is available in `node_modules`.

**`build-data.mjs` — path resolution**

Because the workflow invokes the script as `node web/scripts/build-data.mjs` from the repo root, Node.js resolves `fs` relative paths against the process CWD (repo root), not the script file location. The script must use `import.meta.url` / `fileURLToPath` to resolve paths relative to the script file:

```js
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsCsv = resolve(__dirname, '../../site/projects.csv');
const commitsCsv  = resolve(__dirname, '../../last_commit_times.csv');
```

**`build-data.mjs` — merge logic:**
1. Read `projectsCsv` (6 columns after Scope 3 cleanup)
2. Read `commitsCsv` — handle file-not-found gracefully (treat as empty map; log a warning)
3. Build a `Map<url, last_commit>` from the commits CSV
4. For each project row:
   - Convert `github` field: `'True' → true`, `'False' → false` (boolean)
   - Convert `cran` field: same
   - Add `last_commit: map.get(row.url) ?? null`
5. Write the merged array to `web/public/projects.json`

### TypeScript Project Type

```typescript
// src/types.ts
export interface Project {
  project: string;
  section: string;
  url: string;
  description: string;
  github: boolean;
  cran: boolean;
  last_commit: string | null;  // 'YYYY-MM-DD' or null
}
```

### Table Columns

| Column | Notes |
|---|---|
| Name | Linked to `url`, opens in new tab |
| Section | Plain text |
| Description | Plain text, truncated with tooltip on overflow |
| GitHub | Icon link using `url` directly (which is already the GitHub URL) shown only when `github === true`; blank cell otherwise |
| Last Commit | Formatted date (`YYYY-MM-DD`), sortable chronologically; blank cell when `null`. `null` values sort last in both ascending and descending order. |

The `cran` column is **not displayed in the UI** — it is retained in the CSV and JSON for potential future use but has no visual representation in the table.

### Controls

**Search input** — filters by project name or description (case-insensitive substring).

**Section filter** — a multi-select implemented using Shadcn/ui's `Command` + `Popover` primitives (not the single-select `Select` component, which doesn't support multi-select). Renders as a button showing selected count; clicking opens a popover with a searchable checklist of all unique sections derived from `projects.json`. When no sections are selected, all rows are shown.

**Column headers** — clickable to sort ascending/descending. Last Commit sorts chronologically (`null` values sort last regardless of direction).

All filtering and sorting is client-side. Single `fetch('/awesome-quant-tools-in-table/projects.json')` at startup.

### `vite.config.ts` — Base Path

```ts
base: '/awesome-quant-tools-in-table/'
```

This is **required** for GitHub Pages deployment under a repository subpath. Without it, all asset references (`/assets/index.js`, etc.) would 404 because GitHub Pages serves the site at `https://<org>.github.io/awesome-quant-tools-in-table/`, not at the domain root. The value must exactly match the repository name.

### `web/` Directory Structure

```
web/
  scripts/
    build-data.mjs            ← merges CSVs → public/projects.json
  src/
    components/
      ToolsTable.tsx           ← TanStack Table with Shadcn Table primitives
      Filters.tsx              ← Search input + Section multi-select (Command+Popover)
    App.tsx
    main.tsx
    types.ts                   ← Project interface
  public/
    projects.json              ← generated at build time (gitignored)
  package.json                 ← papaparse in devDependencies
  vite.config.ts               ← base: '/awesome-quant-tools-in-table/'
  tsconfig.json
  components.json              ← Shadcn config
```

### GitHub Actions Workflow: `.github/workflows/deploy-spa.yml`

```yaml
name: Deploy SPA

on:
  push:
    branches: [master]
    # [skip ci] in commit message from fetch-commits.yml suppresses this trigger
    # for auto-commits. GitHub Actions honors [skip ci] on push events.
  workflow_run:
    workflows: ["Fetch Last Commit Times"]
    types: [completed]
    # Note: 'completed' fires on any conclusion (success OR failure).
    # The job-level 'if' below gates execution to success-only.

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    # For push events: always run.
    # For workflow_run events: only run if upstream succeeded.
    if: >
      github.event_name == 'push' ||
      github.event.workflow_run.conclusion == 'success'
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: cd web && npm ci
      - name: Build data (merge CSVs → projects.json)
        run: node web/scripts/build-data.mjs
      - name: Build SPA
        run: cd web && npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: web/dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

**Prerequisite:** GitHub Pages source must be set to **GitHub Actions** in repository settings before this workflow will succeed (Settings → Pages → Source → GitHub Actions).

---

## Data Flow Summary

```
Contributor adds row to site/projects.csv via PR
        ↓
Weekly Action (fetch-commits.yml, Monday 00:00 UTC)
  → scripts/fetch_last_commits.sh
  → writes last_commit_times.csv (repo root, tracked in git)
  → regenerates README.md list between sentinel comments
  → commits "[skip ci]" → push
        ↓
Deploy Action (deploy-spa.yml)
  fires on: manual push to master (human changes)
         OR: after fetch-commits.yml completes successfully (workflow_run)
  → npm ci  (installs papaparse + all deps)
  → node web/scripts/build-data.mjs  (merges CSVs → web/public/projects.json)
  → vite build  (→ web/dist/)
  → deploy web/dist/ to GitHub Pages at:
    https://<org>.github.io/awesome-quant-tools-in-table/
```

---

## Out of Scope
- Server-side rendering or API backend
- Authentication / user accounts
- `cran` column UI representation (column retained in data, not shown in table)
- Pagination (client-side filtering is sufficient for ~500 rows)
- Fetching last commit for projects with a non-GitHub `url`
