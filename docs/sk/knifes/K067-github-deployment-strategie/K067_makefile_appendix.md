---
id: K067_makefile_appendix
title: "K067 Appendix – Makefile pre GitHub Pages (A/B režimy)"
status: draft
---

# K067 Appendix – Makefile pre GitHub Pages (A/B režimy)

Tento appendix obsahuje **kompletný Makefile** pre šablónu `git_class_template_v1` s dvomi nasadzovacími režimami:

- **A – Branch deploy (default pre triedy)**: používa vstavané `docusaurus deploy` → push na `gh-pages`.
- **B – Actions deploy (oficiálny Pages workflow)**: build v CI → `deploy-pages@v4` → environment `github-pages`.

> Hlavný článok a kritériá výberu nájdeš v **K067 – GitHub Pages – stratégie nasadzovania (A/B/C)**.

---

## Predpoklady
- Node.js 20 (pozri `.nvmrc`)
- NPM (alebo pnpm/yarn – prispôsob príkazy)
- Pre režim B: povolené GitHub Actions a Pages v repozitári

---

## `package.json` – minimálne skripty

```json
{
  "scripts": {
    "start": "docusaurus start",
    "build": "CUSTOM_DOMAIN=${CUSTOM_DOMAIN:-} docusaurus build",
    "deploy": "docusaurus deploy"
  }
}
```

> `docusaurus deploy` automaticky pushuje na vetvu `gh-pages`.

---

## Makefile (kompletný)

> Vlož do koreňa repozitára ako `Makefile`.

```make
# =========================
# Makefile – Docusaurus + GitHub Pages (A/B)
# =========================
SHELL := /bin/bash
NODE  := node
NPM   := npm

# Režim (len informačný – skutočný prepínač robia ciele use-branch/use-actions)
MODE ?= branch     # branch | actions
DOMAIN ?=          # pre custom doménu (CNAME)

.PHONY: install dev build serve mode \
        set-domain unset-domain \
        use-branch use-actions \
        init-pages-branch deploy-branch \
        init-pages-actions deploy-actions \
        gh-init-pages gh-pages-status

# -------------------------
# Základ
# -------------------------
install: ; $(NPM) ci

dev: ; $(NPM) start

build: ; $(NPM) run build

serve: ; $(NPM) run serve

mode:
	@echo "MODE=$(MODE)"; \
	if [ "$(MODE)" = "branch" ]; then \
	  echo "→ Branch deploy (gh-pages)"; \
	else \
	  echo "→ Actions deploy (GitHub Pages workflow)"; \
	fi

# -------------------------
# Custom domain helper (CNAME)
# -------------------------
set-domain:
	@if [ -z "$(DOMAIN)" ]; then echo "Použitie: make set-domain DOMAIN=sub.domain.tld"; exit 1; fi
	mkdir -p static && echo "$(DOMAIN)" > static/CNAME
	git add static/CNAME && git commit -m "chore: set CNAME $(DOMAIN)" || true
	@echo "✅ CNAME uložený. Nezabudni DNS CNAME → <org>.github.io"

unset-domain:
	rm -f static/CNAME || true
	git add -A && git commit -m "chore: unset CNAME" || true
	@echo "✅ CNAME odstránený"

# -------------------------
# A) Branch deploy (jednoduchý)
# -------------------------
use-branch:
	@[ -f .github/workflows/deploy.yml ] && mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled || true
	git add -A && git commit -m "ci: use Branch deploy (disable Actions)" || true
	@echo "🔧 ENABLED Branch deploy. Teraz nastav v UI: Settings → Pages → Source: gh-pages (root)."

init-pages-branch:
	@echo "➡️  V UI nastav: Settings → Pages → Build and deployment = Deploy from branch" \
	      "→ branch: gh-pages, folder: /(root)"

# Vstavané v Docusauruse – push na gh-pages
deploy-branch:
	$(NPM) run deploy

# -------------------------
# B) Actions deploy (oficiálny)
# -------------------------
use-actions:
	@mkdir -p .github/workflows
	@[ -f .github/workflows/deploy.yml.disabled ] && mv .github/workflows/deploy.yml.disabled .github/workflows/deploy.yml || true
	git add -A && git commit -m "ci: enable Actions deploy" || true
	@echo "🔧 ENABLED Actions workflow. Spusť: make init-pages-actions"

# Manuálny init – ak nechceš používať gh CLI
init-pages-actions:
	@echo "➡️  Settings → Pages → Source = GitHub Actions (uložiť)"; \
	echo "➡️  Settings → Environments → create 'github-pages' (bez reviewers/wait timer)"; \
	echo "➡️  Settings → Actions → Workflow permissions: Read & write";

# V CI stačí push do main alebo Run workflow
deploy-actions:
	@echo "Pushni do main alebo spusti workflow ručne (Run workflow v Actions)."

# -------------------------
# (Voliteľné) Automatizovaný init cez gh CLI
# -------------------------
# Požiadavky: gh auth login; práva na repo
ORG ?= $(shell git config --get remote.origin.url | sed -E 's#.*/([^/]+)/[^/]+(\.git)?#\1#')
REPO ?= $(shell basename -s .git `git rev-parse --show-toplevel`)

# Vytvorí env, zapne Pages=Actions, nastaví permissions
gh-init-pages:
	@echo "🔧 gh-init-pages pre $(ORG)/$(REPO)…"; \
	gh api -X PUT repos/$(ORG)/$(REPO)/environments/github-pages >/dev/null; \
	gh api -X POST repos/$(ORG)/$(REPO)/pages -f build_type=workflow >/dev/null 2>&1 || true; \
	gh api -X PUT  repos/$(ORG)/$(REPO)/pages -F build_type=workflow >/dev/null; \
	gh api -X PUT repos/$(ORG)/$(REPO)/actions/permissions -f enabled=true -f allowed_actions=all >/dev/null; \
	echo "✅ Hotovo. Teraz pushni do main a sleduj Actions."

gh-pages-status:
	@gh api repos/$(ORG)/$(REPO)/pages | jq '{status, cname, https_enforced, build_type}' || echo "⚠️ Pages ešte nie sú inicializované"
```

---

## Poznámky k použitiu
- **Default pre triedy**: použi `use-branch` + `deploy-branch` a raz nastav Pages na `gh-pages (root)`.
- **Actions režim**: používaj tam, kde chceš audit/deploymenty a pravidlá. Iniciuj cez `use-actions` + `init-pages-actions` (alebo `gh-init-pages`).
- **Custom doména**: `make set-domain DOMAIN=…` + DNS CNAME. V `docusaurus.config.ts` nech rozhoduje `CUSTOM_DOMAIN` (pozri súbor *K067_docusaurus_configuration.md*).

---

## Hromadný init (pre desiatky repozitárov)

```bash
# vyžaduje: gh auth login
ORG="06-STH-Projects"
for REPO in $(gh repo list $ORG --limit 200 --json name -q '.[].name' | grep '^class_'); do
  echo ">>> $ORG/$REPO"
  gh api -X PUT repos/$ORG/$REPO/environments/github-pages >/dev/null
  gh api -X POST repos/$ORG/$REPO/pages -f build_type=workflow >/dev/null 2>&1 || true
  gh api -X PUT  repos/$ORG/$REPO/pages -F build_type=workflow >/dev/null
  gh api -X PUT repos/$ORG/$REPO/actions/permissions -f enabled=true -f allowed_actions=all >/dev/null
  echo "OK"
done
```

---

## Troubleshooting (skratka)
- **404: Ensure GitHub Pages has been enabled** → chýba env `github-pages` alebo Pages=Actions (init podľa vyššie).
- **Chýba `pages-build-deployment`** → objaví sa až po prvom úspešnom `deploy-pages@v4`.
- **Žltý banner o `baseUrl`** → zlá kombinácia `url/baseUrl`; pozri *K067_docusaurus_configuration.md*.
- **HTTPS nejde na custom doméne** → invalid CNAME (napr. podčiarkovník) alebo čakáš na DNS.

---

## Súvisiace
- *K067 – GitHub Pages – stratégie nasadzovania (A/B/C)*
- *K067_docusaurus_configuration.md* – univerzálny `docusaurus.config.ts` (ENV-driven)
---
