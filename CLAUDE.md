# knifes_overview-03 — CLAUDE.md
> Permanent context for Claude Code when working in this repository.
> Last updated: 2026-09-15 (by Claude, session with Roman Kazicka).

## What this repo is

Public KNIFE-Framework content repo. "KNIFE" = Knowledge In Friendly
Examples — short, standalone knowledge write-ups, each its own folder
under `content/docs/{locale}/knifes/K000XXX-slug/`. This repo is
**shared across subjects/courses** — KNIFEs about BaZi, EA, payments,
Docker, LinkedIn automation, and "Systemic Thinking in IT & Digital
Fabrication" all live here side by side (see `Séria:` field below).
Whatever project/course you're working from (KnowMyself, STHDF,
whatever comes next), **KNIFEs about it still get authored and
committed in this repo**, not copied into the source project.

Docusaurus 3.x site at `publishing/docusaurus/`. Deployed to
`knifes.systemthinking.sk`.

## Frontmatter template

Every `index.md` (and child section file) starts with this YAML block
— copy an existing one (K000116, K000117) rather than typing from
scratch, the comments explain what's auto-filled vs manual:

```yaml
---
fm_version: "1.0.0"              # versioning, tool fills in
fm_build: "2026-09-15T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000118"                    # unique, K000XXX (root) or K000XXX-NN-slug (child)
guid: "<uuid4>"                  # generate once, never change

dao: "knife"                     # domain: knife | sdlc | q12 | 7ds ...
title: "K000118 – <title>"
description: "1-2 sentences, what problem this solves and for whom."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: "guide"                    # guide | case | tutorial ...
# ... priority/tags/locale/created/modified/status/privacy/license/
#     disclaimer/copyright/origin_* — copy from K000116 or K000117,
#     same shape every time.
---
```

Scaffold tool instead of hand-typing: `core/scripts/tools/new_item_instance.py`
```bash
python3 core/scripts/tools/new_item_instance.py \
  --type knife --config config/knifes/knifes_config.yml \
  --id K000118 --name slug-without-the-id-prefix --locale sk --dry-run
```
**`--name` must NOT repeat the `--id`** — the tool prepends `--id` to
`--name` itself to build the folder name. Passing `--name K000118-slug`
produces a wrong doubled folder like `K000118-K000118-slug`; pass just
`slug` (or `Slug-Words`) and it becomes `K000118-Slug-Words`. Also note
the config path is `config/knifes/knifes_config.yml` (plural
"knifes"), not `config/knife/...`. Drop `--dry-run` once the output
looks right. `--exists {error,skip,replace}` controls what happens if
the folder already exists. The scaffolded `index.md` also drops an
unused `index_en.md` stub next to it — delete that, English
translations live in the separate `content/docs/en/knifes/` tree, not
as a sibling file (verified: K000116, K000117 have no such sibling).

## Body structure convention

After the frontmatter, open with:
```markdown
> **KNIFE** – Knowledge In Friendly Examples
> **Séria:** <course/series name, e.g. "Systemic Thinking in IT & Digital Fabrication">
> **Úroveň:** Beginner|Intermediate|Advanced
> **Tagy:** `tag1` `tag2` `tag3`
```
Then standard sections (exact headings vary but this shape repeats):
`## 🎯 Čo rieši (účel, cieľ)` → `## 🧩 Ako to rieši (princíp)` →
`## 🧪 Ako to použiť (aplikácia)` → `## ✅ Hodnota / Zhrnutie` →
`## Zdroje` (note: `##`, not `###`).

If content is actively being worked on (not final), add right under
the header block:
```markdown
:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::
```
Remove it when done. Status lifecycle (from a prior session, still
valid): `backlog` → `inProgress` → `done` → `published`, tracked in
frontmatter `status`.

Close every file with the same nav footer (copy verbatim, only the
relative path depth changes if you're nested deeper):
```markdown
<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
```

## Local assets (images, interactive HTML) — hard-won lesson

**Use plain Markdown image syntax, always:**
```markdown
![Alt text](./img/my-image.png)
```
Put the file in an `img/` subfolder next to that KNIFE's `index.md`.

**Do NOT use raw HTML (`<img>`, `<a>`, `<iframe>`) for local assets.**
This was tried and empirically failed in production (K000117,
2026-09-10, 3 separate CI build/runtime iterations before landing on
the rule above):

1. `style="border:1px solid #ddd"` (a CSS **string**) fails the build
   outright — Docusaurus 3.x compiles `.md` through MDX/React, and
   raw HTML `style` must be a JS object: `style={{border: '1px solid #ddd'}}`.
2. Even after fixing that, raw `<a>/<img>/<iframe>` with a relative
   `src`/`href` **still 404s on the live site**, even though the
   build itself succeeds — only assets referenced via real Markdown
   syntax (`![]()`) get picked up by Docusaurus's asset pipeline and
   copied into the build. Raw HTML relative paths are invisible to it.
3. **Fix that actually works**: plain `![alt](./img/file.png)`, same
   pattern as `K000111-Vzor-Planovaneho-Agenta/index.md` (the earlier,
   already-proven reference). If you have an interactive HTML source
   behind a static screenshot, mention its path as inline code, not a
   real link: `` `img/my-interactive.html` `` — do not `<a href>` it.

Note: an earlier session (`20260430-session-decisions-knife-docusaurus.md`
at repo root) had *planned* `<img src={require('./img/x.png').default}
style={{...}} />` (JSX require) as the target syntax for co-located
images, but marked it "decided, implementation pending — awaiting
build test." That test never happened before K000117 hit the same
problem area from a different angle and found raw HTML broken outright
(see above). **Treat this file's guidance as current; treat that
April note's image-syntax section as superseded.** Its other decisions
(frontmatter schema, GA4, lifecycle states, robots.txt/llms.txt) are
still valid.

If you need a screenshot of an interactive HTML file rather than
linking it live, render one locally, e.g.:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,2280 --screenshot=img/my-file-light.png \
  img/my-interactive.html
```

## Deploy

Two independent, non-overlapping GitHub Actions workflows:
- `.github/workflows/deploy.yml` — **push to `main`** auto-triggers a
  Docusaurus build (`make build`), deploys to the `gh-pages-docusaurus`
  branch (`/docs`). This is the one that matters for this site.
- `.github/workflows/pages.yml` — push to `dev` triggers a **separate,
  legacy MkDocs** pipeline. Different tool, different branch, not
  related to the Docusaurus site above — don't confuse the two.

So: commit + push to `main` is enough to go live. No need to also run
the `make deploy` Makefile target (that's for the custom-domain path
with its own `W30-commit-deploy` step — redundant with the auto CI,
avoid double-deploying).

Watch a run with `gh run list --workflow=deploy.yml --limit 1` /
`gh run view --log-failed` if it fails.

## Search

`@easyops-cn/docusaurus-search-local` is already configured in
`publishing/docusaurus/docusaurus.config.ts` — local full-text search,
no separate service needed. If a "how will this scale past N KNIFEs"
question comes up, this is already the answer; verify it's working on
the live build rather than assuming.

## Reference KNIFEs worth reading before writing a new one

- `K000111-Vzor-Planovaneho-Agenta/index.md` — original proven local-asset
  pattern (markdown image syntax).
- `K000116-Dual-Stack-AI-Compliance/index.md` — clean frontmatter +
  body structure reference, no images.
- `K000117-Platba-Online-Payment-Gateway-Zaklady/index.md` — most
  recent, includes the corrected local-asset pattern in practice plus
  the `Séria: Systemic Thinking in IT & Digital Fabrication` tag —
  reuse that exact Séria string for further KNIFEs in the same course.

## Working philosophy (carries over regardless of subject)

- **Low-friction capture**: the point of a KNIFE is sharing interim
  knowledge with minimal overhead/delay — don't over-engineer a
  write-up chasing completeness. Draft → ground it against real
  source material or a working example → publish. Validated flow:
  ideate in Claude.ai, then Claude Code grounds it in this repo and
  publishes.
- **5-minute rule**: if 5+ minutes went into figuring something out
  (a bug, a gotcha, a non-obvious decision), it's worth capturing as
  a KNIFE — proactively suggest it rather than waiting to be asked.
- Overview files (`content/docs/{sk,en}/knifes/knifes_overview/
  KNIFE_Overview_{Blog,List,Details}.md`) are **auto-generated**, not
  hand-edited — driven by `core/scripts/tools/knife_overview_generate.py`
  + CSV pipeline in `config/inputs/`/`config/outputs/`. Exists per
  locale (sk and en; no cz as of this writing).
