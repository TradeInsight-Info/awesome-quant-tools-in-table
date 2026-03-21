## Adding a New Tool

To contribute, fork this repo and add a new row to the bottom of `data/projects.csv`, then open this PR.

**Checklist:**

- [ ] Forked this repo and created a branch
- [ ] Appended a new row at the **bottom** of `data/projects.csv` (order doesn't matter)
- [ ] Filled in the `project` column — tool name
- [ ] Filled in the `section` column — use `Language > Category` format (e.g. `Python > Backtesting`), just a language name (e.g. `Julia`), or just a category if language doesn't apply
- [ ] Filled in the `url` column — full URL including `https://`
- [ ] Filled in the `description` column — one concise sentence describing the tool
- [ ] Set `github` to `True` if the URL is a GitHub repo, `False` otherwise
- [ ] Set `cran` to `True` if it is a CRAN package, `False` otherwise
- [ ] Verified the CSV row is correctly formatted (wrap values containing commas in double quotes)
