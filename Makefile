# ─────────────────────────────────────────────────────────
# KNIFE / Docusaurus – Makefile (greenfield 2025-11-05)
# Čistý základ pre: build, deploy (worktree), KNIFE, FM, 7Ds
# ─────────────────────────────────────────────────────────

.DEFAULT_GOAL := help
SHELL := /bin/bash
NODE  := node
NPM   := npm

# ── Cesty (zostávajú kompatibilné s tvojou štruktúrou)
CONTENT_DOCS_DIR := content/docs
PUB_DOCUS_DIR    := publishing/docusaurus
PUB_DOCS_DIR     := $(PUB_DOCUS_DIR)/docs
PUB_BUILD_DIR    := $(PUB_DOCUS_DIR)/build

# i18n (voliteľne: DS_LOCALE=sk|en)
DS_LOCALE ?=
BUILD_LOCALE_OPT :=
ifneq ($(strip $(DS_LOCALE)),)
  BUILD_LOCALE_OPT := --locale $(DS_LOCALE)
endif

# Build voľby
BUILD_DATE := $(shell date -u '+%Y-%m-%d %H:%M:%S UTC')
MINIFY ?= 1
BUILD_EXTRA :=
ifeq ($(MINIFY),0)
  BUILD_EXTRA := --no-minify
endif

# Worktree deploy → gh-pages-docusaurus:/docs
DEPLOY_BRANCH := gh-pages-docusaurus
WORKTREE_DIR  := ../$(DEPLOY_BRANCH)
PAGES_DIR     := $(WORKTREE_DIR)/docs

# KNIFE / FM / 7Ds skripty
SCRIPTS_DIR            := core/scripts/tools
FM_TOOL                := core/scripts/tools/fix_frontmatter.py
FM_LINT                := core/scripts/tools/frontmatter_lint.py

SEVENDS_ROOT            = content/docs/$(LOCALE)/7Ds
SEVENDS_FM_CORE         := core/templates/system/FM-Core.md
SEVENDS_SCRIPT_CLONE    := core/scripts/tools/7ds_clone_from_template.py
SEVENDS_SCRIPT_FM_APPLY := core/scripts/tools/fm_apply_from_core_7ds.py
INSTANCE ?=

# KNIFES – CSV config
CONFIG_JSON   := config/knifes_config.json
CSV_DEFAULT   := $(shell node -p "try{require('./$(CONFIG_JSON)').csv||''}catch(e){''}")
ifeq ($(strip $(CSV_DEFAULT)),)
CSV_DEFAULT   := config/data/KNIFES-OVERVIEW-INPUTs.csv
endif
CSV_OVERVIEW ?= $(CSV_DEFAULT)
LOCALE       ?= sk
KNIFES_DIR   ?= content/docs/$(LOCALE)/knifes

# ─────────────────────────────────────────────────────────
# HELP (autogenerovaný z „##“ popisov)
# ─────────────────────────────────────────────────────────
.PHONY: help
help: ## Zobrazí prehľad príkazov
	@printf "\n\033[1mKNIFE Makefile (clean)\033[0m\n\n"
	@awk 'BEGIN{FS=":.*## "};/^[a-zA-Z0-9_.-]+:.*## /{printf "  \033[36m%-24s\033[0m %s\n",$$1,$$2}' $(MAKEFILE_LIST) | sort

# ─────────────────────────────────────────────────────────
# CORE: SYNC / DEV / BUILD / SERVE
# ─────────────────────────────────────────────────────────
.PHONY: SY01-sync-content dev build build-fast serve
SY01-sync-content: ## Sync SSOT content → publishing/docusaurus/docs (hard, delete)
	@if [ ! -d "$(CONTENT_DOCS_DIR)" ]; then echo "❌ Missing $(CONTENT_DOCS_DIR)"; exit 1; fi
	@mkdir -p "$(PUB_DOCS_DIR)"
	rsync -av --delete --checksum "$(CONTENT_DOCS_DIR)/" "$(PUB_DOCS_DIR)/"
	@echo "✅ Synced: $(CONTENT_DOCS_DIR) → $(PUB_DOCS_DIR)"

dev: ## Spustí lokálny dev server Docusaurusu
	cd "$(PUB_DOCUS_DIR)" && BUILD_DATE="$(BUILD_DATE)" NODE_OPTIONS=--max-old-space-size=16384 $(NPM) start -- $(BUILD_LOCALE_OPT)

build: SY01-sync-content ## Production build (MINIFY=1|0, DS_LOCALE=sk|en)
	cd "$(PUB_DOCUS_DIR)" && BUILD_DATE="$(BUILD_DATE)" NODE_OPTIONS=--max-old-space-size=16384 $(NPM) run build -- $(BUILD_EXTRA) $(BUILD_LOCALE_OPT)

build-fast: ## Build bez minifikácie (rýchly test)
	$(MAKE) build MINIFY=0

serve: ## Naservíruje statický build lokálne
	cd "$(PUB_DOCUS_DIR)" && $(NPM) run serve

# ─────────────────────────────────────────────────────────
# WORKTREE DEPLOY (Cesta 1) – bezpečné, stručné
# ─────────────────────────────────────────────────────────
.PHONY: W10-check-worktree W20-copy-build W30-commit-deploy W40-deploy W50-full-deploy W60-worktree-status
W10-check-worktree: ## Vytvorí/overí worktree ../gh-pages-docusaurus → /docs
	@if [ -d "$(WORKTREE_DIR)" ] && ! git -C "$(WORKTREE_DIR)" rev-parse --is-inside-work-tree >/dev/null 2>&1; then \
	  echo "⚠️  $(WORKTREE_DIR) existuje, ale nie je git worktree – čistím…"; rm -rf "$(WORKTREE_DIR)"; git worktree prune; \
	fi; \
	if ! git worktree list | grep -q "$(WORKTREE_DIR)"; then \
	  echo "ℹ️  Zakladám worktree pre $(DEPLOY_BRANCH)…"; \
	  git fetch origin || true; \
	  if git ls-remote --exit-code --heads origin $(DEPLOY_BRANCH) >/dev/null 2>&1; then \
	    git worktree add -B $(DEPLOY_BRANCH) "$(WORKTREE_DIR)" origin/$(DEPLOY_BRANCH); \
	  else \
	    git worktree add "$(WORKTREE_DIR)" -B $(DEPLOY_BRANCH); \
	    cd "$(WORKTREE_DIR)" && git commit --allow-empty -m "init $(DEPLOY_BRANCH)" && git push -u origin $(DEPLOY_BRANCH); \
	  fi; \
	fi; \
	echo "✅ Worktree OK: $(WORKTREE_DIR) → $(DEPLOY_BRANCH)"

W20-copy-build: ## Rsync build/ → worktree /docs (bezpečné, chráni .git)
	@if ! git -C "$(WORKTREE_DIR)" rev-parse --is-inside-work-tree >/dev/null 2>&1; then echo "❌ Spusť najprv W10-check-worktree"; exit 1; fi
	@if [ -z "$(PUB_BUILD_DIR)" ] || [ ! -d "$(PUB_BUILD_DIR)" ]; then echo "❌ Najprv make build (chýba $(PUB_BUILD_DIR))"; exit 1; fi
	@mkdir -p "$(PAGES_DIR)"
	@echo "🔁 rsync: '$(PUB_BUILD_DIR)/' → '$(PAGES_DIR)/'"
	rsync -av --delete --filter='P .git' --filter='P .gitignore' "$(PUB_BUILD_DIR)/" "$(PAGES_DIR)/"

W30-commit-deploy: ## Commit & push worktree (deploy)
	@if ! git -C "$(WORKTREE_DIR)" rev-parse --is-inside-work-tree >/dev/null 2>&1; then echo "❌ Worktree nie je pripravený"; exit 1; fi
	cd "$(WORKTREE_DIR)" && git add -A
	cd "$(WORKTREE_DIR)" && ts=$$(date -u +'%Y-%m-%d %H:%M:%S UTC'); git commit -m "Deploy $$ts" || echo "ℹ️  Žiadne zmeny"
	cd "$(WORKTREE_DIR)" && git push origin $(DEPLOY_BRANCH)
	@echo "✅ Deploy pushnutý → $(DEPLOY_BRANCH)"

W40-deploy: ## Rýchly deploy: W10 + build + W20 + W30
	$(MAKE) W10-check-worktree
	$(MAKE) build
	$(MAKE) W20-copy-build
	$(MAKE) W30-commit-deploy
	@echo "🎉 Full deploy hotový."

W50-full-deploy: ## Plný scenár: push main + build + stage + commit
	@if [ -n "$$(git status --porcelain)" ]; then echo "❌ Máš necommitnuté zmeny na main!"; exit 1; fi
	git push origin main
	$(MAKE) W40-deploy

W60-worktree-status: ## Status worktree (debug)
	@git worktree list
	@echo "----"
	@git -C "$(WORKTREE_DIR)" status -sb || true

# ─────────────────────────────────────────────────────────
# FRONT MATTER – audit / lint / fix
# ─────────────────────────────────────────────────────────
.PHONY: FM10-audit FM11-lint FM20-fix-dry FM20-fix-apply
FM10-audit: ## Audit Front Matter (read-only) – root=content/docs (OPTS=--root dir)
	@python3 $(FM_TOOL) --root "$(CONTENT_DOCS_DIR)" --dry-run $(OPTS) || true

FM11-lint: ## Lint Front Matter (read-only) – root=content/docs
	@python3 $(FM_LINT) --root "$(CONTENT_DOCS_DIR)" || true

FM20-fix-dry: ## DRY: normalizácia Front Matter (no writes)
	@python3 $(FM_TOOL) --root "$(CONTENT_DOCS_DIR)" --dry-run $(OPTS)

FM20-fix-apply: ## APPLY: normalizácia Front Matter (writes)
	@python3 $(FM_TOOL) --root "$(CONTENT_DOCS_DIR)" --apply $(OPTS)

# ─────────────────────────────────────────────────────────
# 7Ds – scaffold + FM-Core merge
# ─────────────────────────────────────────────────────────
.PHONY: D10-7ds-print-root D11-7ds-dry D12-7ds-apply FM71-7ds-dry-from-core FM70-7ds-apply-from-core

D10-7ds-print-root: ## Debug: vypíše cieľový root pre 7Ds (berie ohľad na INSTANCE a LOCALE)
	@ROOT_BASE="content/docs/$(LOCALE)/7Ds"; \
	if [ -n "$(INSTANCE)" ]; then ROOT_PATH="content/docs/$(LOCALE)/$(INSTANCE)"; else ROOT_PATH="$$ROOT_BASE"; fi; \
	echo "[LOCALE]      = $(LOCALE)"; \
	echo "[INSTANCE]    = $(INSTANCE)"; \
	echo "[TARGET ROOT] = $$ROOT_PATH"

D11-7ds-dry: ## DRY: Scaffold 7Ds z templatu (iba plán; bez zápisu FM)
	@ROOT_BASE="content/docs/$(LOCALE)/7Ds"; \
	if [ -n "$(INSTANCE)" ]; then ROOT_PATH="content/docs/$(LOCALE)/$(INSTANCE)"; else ROOT_PATH="$$ROOT_BASE"; fi; \
	echo "🧪 7Ds DRY scaffold → $$ROOT_PATH"; \
	python3 "$(SEVENDS_SCRIPT_CLONE)" \
	  --instance "$${ROOT_PATH##*/}" \
	  --template-root core/templates/content/7ds \
	  --header-template core/templates/7ds/header/7ds_user_header.md \
	  --fm-core "$(SEVENDS_FM_CORE)" \
	  --dry

D12-7ds-apply: ## APPLY: Scaffold 7Ds + apply FM-Core (idempotentné)
	@set -e; \
	ROOT_BASE="content/docs/$(LOCALE)/7Ds"; \
	if [ -n "$(INSTANCE)" ]; then ROOT_PATH="content/docs/$(LOCALE)/$(INSTANCE)"; else ROOT_PATH="$$ROOT_BASE"; fi; \
	echo "⚙️  7Ds APPLY scaffold → $$ROOT_PATH"; \
	python3 "$(SEVENDS_SCRIPT_CLONE)" \
	  --instance "$${ROOT_PATH##*/}" \
	  --template-root core/templates/content/7ds \
	  --header-template core/templates/7ds/header/7ds_user_header.md \
	  --fm-core "$(SEVENDS_FM_CORE)" \
	  --apply; \
	echo "🛠  Merge FM-Core → $$ROOT_PATH"; \
	python3 "$(SEVENDS_SCRIPT_FM_APPLY)" \
	  --root  "$$ROOT_PATH" \
	  --fm-core "$(SEVENDS_FM_CORE)" \
	  --apply \
	  --instance-tag "$${ROOT_PATH##*/}"; \
	echo "✅ DONE: $$ROOT_PATH"

FM71-7ds-dry-from-core: ## DRY: Merge FM-Core → 7Ds (berie ohľad na INSTANCE)
	@ROOT_BASE="content/docs/$(LOCALE)/7Ds"; \
	if [ -n "$(INSTANCE)" ]; then ROOT_PATH="content/docs/$(LOCALE)/$(INSTANCE)"; else ROOT_PATH="$$ROOT_BASE"; fi; \
	echo "🧪 DRY merge FM-Core → $$ROOT_PATH"; \
	python3 "$(SEVENDS_SCRIPT_FM_APPLY)" \
	  --root  "$$ROOT_PATH" \
	  --fm-core "$(SEVENDS_FM_CORE)" \
	  --dry-run \
	  --instance-tag "$${ROOT_PATH##*/}"

FM70-7ds-apply-from-core: ## APPLY: Merge FM-Core → 7Ds (berie ohľad na INSTANCE)
	@set -e; \
	ROOT_BASE="content/docs/$(LOCALE)/7Ds"; \
	if [ -n "$(INSTANCE)" ]; then ROOT_PATH="content/docs/$(LOCALE)/$(INSTANCE)"; else ROOT_PATH="$$ROOT_BASE"; fi; \
	echo "🛠 APPLY merge FM-Core → $$ROOT_PATH"; \
	python3 "$(SEVENDS_SCRIPT_FM_APPLY)" \
	  --root  "$$ROOT_PATH" \
	  --fm-core "$(SEVENDS_FM_CORE)" \
	  --apply \
	  --instance-tag "$${ROOT_PATH##*/}"; \
	echo "✅ FM-Core applied to $$ROOT_PATH"

# ─────────────────────────────────────────────────────────
# KNIFES – validate / generate / verify
# ─────────────────────────────────────────────────────────
.PHONY: knifes-build-dry knifes-build-apply knifes-verify knifes-new knifes-overview
knifes-build-dry: ## DRY: CSV→MD build podľa configu (nič nezapisuje)
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(strip $(CSV_OVERVIEW))"; fi; \
	echo "🧪 DRY: KNIFES build CSV='$$CSV' locale=$(LOCALE)"; \
	node "$(SCRIPTS_DIR)/knifes-build.mjs" --csv "$$CSV" --root . --locale $(LOCALE) --dry-run

knifes-build-apply: ## APPLY: CSV→MD build podľa configu (zapíše)
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(strip $(CSV_OVERVIEW))"; fi; \
	echo "🛠 APPLY: KNIFES build CSV='$$CSV' locale=$(LOCALE)"; \
	node "$(SCRIPTS_DIR)/knifes-build.mjs" --csv "$$CSV" --root . --locale $(LOCALE)

knifes-verify: ## Verify: CSV/docs + FM (smart)
	@CSV_ARG="$(strip $(CSV_OVERVIEW))"; \
	LOCALE_ARG="$(LOCALE)"; \
	DOCS_DIR_ARG="$(CONTENT_DOCS_DIR)"; \
	if [ -f "$(CONFIG_JSON)" ]; then \
	  CSV_FROM_CFG=$$(node -p "try{require('./$(CONFIG_JSON)').csv||''}catch(e){''}"); \
	  if [ -n "$$CSV_FROM_CFG" ]; then CSV_ARG="$$CSV_FROM_CFG"; fi; \
	fi; \
	node scripts/knifes-verify.mjs --csv "$$CSV_ARG" --root . --locale "$$LOCALE_ARG" --section "knifes" --docs-dir "$$DOCS_DIR_ARG"

# „new“ + „overview“ volajú tvoje existujúce Python skripty
id ?=
name ?=
title ?=
KNIFE_DRY   ?=
KNIFE_FORCE ?=
CONFIG_GLOBAL     ?= config/global.yml
CONFIG_KNIFE      ?= config/knifes/knife_config.yml
KNIFE_OVERVIEW_SCRIPT ?= core/scripts/tools/knife_overview_generate.py
KNIFE_OVERVIEW_ROOT   ?= content/docs/$(LOCALE)/knifes
KNIFE_OVERVIEW_OUT    ?= content/docs/$(LOCALE)/knifes/knifes_overview
KNIFE_OVERVIEW_FM     ?= core/templates/system/FM-Core.md
KNIFE_OVERVIEW_LOCALE ?= $(LOCALE)

knifes-new: ## Vytvorí novú KNIFE (id=K000123 name="..." title="...")
	@echo "🚀 Generujem KNIFE…"
	python3 core/scripts/tools/knife_new.py \
	  --id "$(id)" \
	  --name "$(name)" \
	  $(if $(title),--title "$(title)",) \
	  --config-global "$(CONFIG_GLOBAL)" \
	  --config-knife "$(CONFIG_KNIFE)" \
	  --outroot "content/docs/$(LOCALE)/knifes" \
	  $(if $(KNIFE_DRY),--dry,) \
	  $(if $(KNIFE_FORCE),--force,)
	@echo "✅ Hotovo: content/docs/$(LOCALE)/knifes/$(id)-$(name)/index.md"

knifes-overview: ## Zregeneruje KNIFE prehľady (Blog/List/Details)
	@mkdir -p "$(KNIFE_OVERVIEW_OUT)"
	python3 "$(KNIFE_OVERVIEW_SCRIPT)" \
	  --root "$(KNIFE_OVERVIEW_ROOT)" \
	  --fm-core "$(KNIFE_OVERVIEW_FM)" \
	  --out-dir "$(KNIFE_OVERVIEW_OUT)" \
	  --locale "$(KNIFE_OVERVIEW_LOCALE)"

# ─────────────────────────────────────────────────────────
# UTIL: diagnostika
# ─────────────────────────────────────────────────────────
.PHONY: mode doctor print-vars
mode: ## Zobrazí deploy režim (worktree dostupnosť)
	@echo "🔎 Deploy mode:"
	@if [ -d "$(WORKTREE_DIR)/.git" ]; then echo " • Worktree: ENABLED ($(WORKTREE_DIR))"; else echo " • Worktree: disabled"; fi

doctor: ## Rýchla diagnostika prostredia
	@echo "🩺 Node:  $$(node -v 2>/dev/null || echo n/a)"
	@echo "🩺 NPM:   $$(npm -v 2>/dev/null || echo n/a)"
	@echo "🩺 Git:   $$(git --version 2>/dev/null || echo n/a)"
	@echo "🩺 Origin: $$(git remote -v | awk 'NR==1{print $$2}')"
	@echo "🩺 Branch: $$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo n/a)"

.PHONY: print-vars
print-vars: ## Vypíše kľúčové premenné
	@echo "[CONTENT_DOCS_DIR] = $(CONTENT_DOCS_DIR)"
	@echo "[PUB_DOCUS_DIR]    = $(PUB_DOCUS_DIR)"
	@echo "[PUB_DOCS_DIR]     = $(PUB_DOCS_DIR)"
	@echo "[PUB_BUILD_DIR]    = $(PUB_BUILD_DIR)"
	@echo "[WORKTREE_DIR]     = $(WORKTREE_DIR)"
	@echo "[PAGES_DIR]        = $(PAGES_DIR)"
	@echo "[DS_LOCALE]        = $(DS_LOCALE)"
	@echo "[BUILD_EXTRA]      = $(BUILD_EXTRA)"

# Helper: Print current LOCALE and DS_LOCALE
.PHONY: print-locale
print-locale: ## Vypíše aktuálne LOCALE a DS_LOCALE
	@echo "[LOCALE]    = $(LOCALE)"
	@echo "[DS_LOCALE] = $(DS_LOCALE)"
# ─────────────────────────────────────────────────────────
# HELP+: praktické príklady (copy‑paste)
# ─────────────────────────────────────────────────────────
.PHONY: help-examples help+
help-examples: ## Ukáže príklady použitia (copy-paste)
	@printf "%s\n" \
	"" \
	"# --- DEV / BUILD ---" \
	"make dev" \
	"make build" \
	"make build DS_LOCALE=sk" \
	"make build DS_LOCALE=en" \
	"make build-fast" \
	"" \
	"# --- DEPLOY (worktree) ---" \
	"make W10-check-worktree" \
	"make W40-deploy" \
	"make W50-full-deploy" \
	"" \
	"# --- FRONT MATTER (celé content/docs) ---" \
	"make FM10-audit" \
	"make FM11-lint" \
	"make FM20-fix-dry" \
	"make FM20-fix-apply" \
	"" \
	"# --- KNIFE ---" \
	"# Vytvor novú KNIFE (zmeň id/name/title podľa potreby):" \
	'make knifes-new id=K000123 name="my-new-knife" title="Môj nový KNIFE"' \
	"# Zregeneruj prehľady (Blog/List/Details) pre KNIFE:" \
	"make knifes-overview" \
	"# CSV→MD build (DRY/WRITE) – načíta CSV z configu, ale môžeš prepísať:" \
	"make knifes-build-dry" \
	"make knifes-build-apply" \
	'make knifes-build-apply csv="config/data/KNIFES-OVERVIEW-INPUTs.csv"' \
	"" \
	"# --- 7Ds ---" \
	"# Vytvor inštanciu 7Ds (DRY → bez zápisu FM; APPLY → s uplatnením FM-Core):" \
	'make D11-7ds-dry   INSTANCE=7ds-jahody' \
	'make D12-7ds-apply INSTANCE=7ds-jahody' \
	"# Dodatočne uplatni FM‑Core na existujúci strom:" \
	'make FM71-7ds-dry-from-core   INSTANCE=7ds-jahody' \
	'make FM70-7ds-apply-from-core INSTANCE=7ds-jahody' \
	"" \
	"# --- DIAGNOSTIKA ---" \
	"make doctor" \
	"make print-vars" \
	"make print-locale" \
	"make mode"

help+: help-examples


# ─────────────────────────────────────────────────────────
# ROADMAP / TODO – placeholdery (neblokujú CI)
# ─────────────────────────────────────────────────────────
.PHONY: S11-sdlc-dry S12-sdlc-apply T11-thesis-dry T12-thesis-apply \
        I10-i18n-extract I20-i18n-merge \
        NAV10-rebuild-sidebars NAV20-rewrite-links \
        ADMIN-ui

S11-sdlc-dry: ## 🚧 SDLC scaffold (DRY) – zatiaľ neimplementované
	@echo "🚧 SDLC scaffold (DRY) – zatiaľ neimplementované"

S12-sdlc-apply: ## 🚧 SDLC scaffold (APPLY) – zatiaľ neimplementované
	@echo "🚧 SDLC scaffold (APPLY) – zatiaľ neimplementované"

T11-thesis-dry: ## 🚧 Thesis scaffold (DRY) – zatiaľ neimplementované
	@echo "🚧 Thesis scaffold (DRY) – zatiaľ neimplementované"

T12-thesis-apply: ## 🚧 Thesis scaffold (APPLY) – zatiaľ neimplementované
	@echo "🚧 Thesis scaffold (APPLY) – zatiaľ neimplementované"

I10-i18n-extract: ## 🚧 i18n extract – zatiaľ neimplementované
	@echo "🚧 i18n extract – zatiaľ neimplementované"

I20-i18n-merge: ## 🚧 i18n merge – zatiaľ neimplementované
	@echo "🚧 i18n merge – zatiaľ neimplementované"

NAV10-rebuild-sidebars: ## 🚧 Rebuild sidebars – zatiaľ neimplementované
	@echo "🚧 Rebuild sidebars – zatiaľ neimplementované"

NAV20-rewrite-links: ## 🚧 Rewrite internal links – zatiaľ neimplementované
	@echo "🚧 Rewrite internal links – zatiaľ neimplementované"

ADMIN-ui: ## 🚧 Webová admin konzola – zatiaľ neimplementované
	@echo "🚧 Webová admin konzola – zatiaľ neimplementované"