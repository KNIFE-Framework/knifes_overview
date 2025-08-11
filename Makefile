# -------------------------
# 📄 Makefile – Docusaurus + Git Utils (unified)
# -------------------------

SHELL := /bin/bash
NODE := node
NPM  := npm

DOCS_DIR := docs
BUILD_DIR := build

# 🌿 Worktree deploy
DEPLOY_BRANCH = gh-pages-docusaurus
WORKTREE_DIR  = ../$(DEPLOY_BRANCH)

# macOS sed (BSD) potrebuje -i ''
SED_INPLACE := sed -E -i ''
FIND_MD := find $(DOCS_DIR) -type f \( -name "*.md" -o -name "*.mdx" \)

.PHONY: help \
        dev clean build serve \
        check-links check-links-hard check-links-full fix-links \
        init-worktree check-worktree copy-build commit-deploy remove-worktree \
        push-main deploy full-deploy \
        sandbox-from-main sandbox-from-worktree \
        stash-save stash-list stash-apply stash-drop \
        restore-folder restore-file restore-path restore-from-stash-file \
        delete-dotpages

# -------------------------
# 📌 Help
# -------------------------
help:
	@echo "===== 📚 Docusaurus ====="
	@echo "  dev                 - Spusti dev server"
	@echo "  clean               - Vyčisti cache a build adresáre"
	@echo "  build               - Striktný build (onBrokenLinks: throw)"
	@echo "  serve               - Lokálne naservíruj statický build"
	@echo ""
	@echo "===== 🔍 Link Checker ====="
	@echo "  check-links         - DRY-RUN kontrola odkazov v docs/"
	@echo "  check-links-hard    - Striktná kontrola: spustí build"
	@echo "  check-links-full    - Full kontrola (docs + config + témy)"
	@echo "  fix-links           - Oprava …/index -> …/"
	@echo ""
	@echo "===== 🌿 Worktree Deploy ====="
	@echo "  init-worktree       - Pridá worktree pre $(DEPLOY_BRANCH)"
	@echo "  check-worktree      - Overí/Vytvorí worktree (bezpečne)"
	@echo "  copy-build          - Rsync build/ -> $(WORKTREE_DIR)/"
	@echo "  commit-deploy       - Commit & push z worktree"
	@echo "  remove-worktree     - Odpojí worktree"
	@echo "  push-main           - Bezpečný push mainu (zastaví ak máš zmeny)"
	@echo "  deploy              - build + copy-build + commit-deploy"
	@echo "  full-deploy         - check-worktree + push-main + build + copy + commit"
	@echo ""
	@echo "===== 🧪 Sandbox & Stash ====="
	@echo "  sandbox-from-main name=<branch>            - Sandbox z main"
	@echo "  sandbox-from-worktree name=<branch> base=<branch> - Sandbox z base"
	@echo "  stash-save m='msg'   - Ulož aktuálne zmeny do stash"
	@echo "  stash-list           - Zobraz stash záznamy"
	@echo "  stash-apply id=<n>   - Aplikuj stash podľa ID"
	@echo "  stash-drop  id=<n>   - Zmaž stash podľa ID"
	@echo ""
	@echo "===== 🎯 Restore from History ====="
	@echo "  restore-folder commit=<hash> path=<dir>    - Obnov adresár z commitu"
	@echo "  restore-file   commit=<hash> path=<file>   - Obnov súbor z commitu"
	@echo "  restore-path   commit=<hash> path=<path>   - Obnov súbor/priečinok z commitu (s diffom)"
	@echo "  restore-from-stash-file stash=stash@{N} file=<path> - Obnov súbor zo stasha"
	@echo ""
	@echo "===== 🧹 Čistenie pozostatkov ====="
	@echo "  delete-dotpages     - Zmaže všetky '.pages' súbory (pozostatok MkDocs)"

# -------------------------
# 🚀 Docusaurus Commands
# -------------------------
dev:
	$(NPM) start

clean:
	$(NPM) run clear || true
	rm -rf $(BUILD_DIR) .docusaurus

build: clean
	$(NPM) run build

serve:
	$(NPM) run serve

# -------------------------
# 🔍 Link Checker
# -------------------------
check-links:
	@echo ">>> DRY-RUN: hľadám odkazy s '/index' a chýbajúce lokálne súbory"
	@grep -RIn "\(/index\)|(\.\./index)|(\.\./\.\./index)" $(DOCS_DIR) --include "*.md" --include "*.mdx" || echo "  ✓ nič nenašiel"
	@echo
	@grep -Roh '\]\(([^)]+)\)' $(DOCS_DIR) --include "*.md" --include "*.mdx" \
	| sed 's/.*](\(.*\))/\1/' \
	| grep -vE '^(http|https|#|mailto:)' \
	| sort -u \
	| while read -r link; do \
		path="$(DOCS_DIR)/$${link#./}"; \
		if [[ ! -e "$$path" && ! -e "$${path%/}/index.md" ]]; then \
			echo "  ✗ $$link"; \
		fi; \
	done || true
	@echo "DRY-RUN done."

check-links-hard:
	@echo ">>> STRICT: validujem odkazy…"
	$(NPM) run build || { echo "❌ Build failed"; exit 1; }

check-links-full:
	@echo ">>> FULL CHECK: kontrolujem odkazy v docs + configu + témach"
	@$(MAKE) check-links
	@grep -RIn "to: '/docs" docusaurus.config.ts || true
	@node scripts/check_config_paths.js || true

fix-links:
	@echo ">>> Opravujem odkazy …/index -> …/"
	@$(FIND_MD) -print0 | xargs -0 $(SED_INPLACE) \
	  -e 's#\]\(\.\.\/index\)#](../)#g' \
	  -e 's#\]\(\.\.\/\.\.\/index\)#](../../)#g'

# -------------------------
# 🌿 Worktree Deploy
# -------------------------
init-worktree:
	git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH) || git branch $(DEPLOY_BRANCH) && git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH)

## check-worktree: Overí alebo vytvorí worktree pre $(DEPLOY_BRANCH)
check-worktree:
	@if ! git worktree list | grep -q "$(WORKTREE_DIR)"; then \
		echo "⚠️  Worktree pre $(DEPLOY_BRANCH) neexistuje. Vytváram..."; \
		git fetch origin || true; \
		if git ls-remote --exit-code --heads origin $(DEPLOY_BRANCH) >/dev/null 2>&1; then \
			git worktree add -B $(DEPLOY_BRANCH) $(WORKTREE_DIR) origin/$(DEPLOY_BRANCH); \
		else \
			echo "ℹ️  Vetva $(DEPLOY_BRANCH) na remote neexistuje, zakladám lokálne…"; \
			git branch -f $(DEPLOY_BRANCH) || true; \
			git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH); \
			cd $(WORKTREE_DIR) && git commit --allow-empty -m "init $(DEPLOY_BRANCH)" && git push -u origin $(DEPLOY_BRANCH); \
		fi; \
	fi
	@echo "✅ Worktree OK: $(WORKTREE_DIR) → $(DEPLOY_BRANCH)"

copy-build:
	rsync -av --delete $(BUILD_DIR)/ $(WORKTREE_DIR)/

commit-deploy:
	cd $(WORKTREE_DIR) && git add . && git commit -m "Manual Docusaurus deploy" || echo "⚠️  Žiadne zmeny na commit."
	cd $(WORKTREE_DIR) && git push origin $(DEPLOY_BRANCH)

remove-worktree:
	git worktree remove $(WORKTREE_DIR)

## push-main: Bezpečný push mainu
push-main:
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "❌ Máš necommitnuté zmeny na main! Najprv commitni/stashni."; \
		exit 1; \
	fi
	git push origin main
	@echo "✅ main pushnutý."

## deploy: build → copy-build → commit-deploy
deploy: build copy-build commit-deploy
	@echo "✅ Deploy hotový na vetve $(DEPLOY_BRANCH)"

## full-deploy: check-worktree → push-main → build → copy → commit
full-deploy: check-worktree push-main build copy-build commit-deploy
	@echo "🎉 Full deploy úspešný → $(DEPLOY_BRANCH)"

# -------------------------
# 🧪 Sandbox Commands
# -------------------------
sandbox-from-main:
	@if [ -z "$$name" ]; then echo "Použi: make sandbox-from-main name=<branch>"; exit 1; fi
	git checkout -b $$name main

sandbox-from-worktree:
	@if [ -z "$$name" ] || [ -z "$$base" ]; then echo "Použi: make sandbox-from-worktree name=<branch> base=<branch>"; exit 1; fi
	git checkout -b $$name $$base

# -------------------------
# 📦 Stash Commands
# -------------------------
stash-save:
	@if [ -z "$$m" ]; then echo "Použi: make stash-save m='správa'"; exit 1; fi
	git stash push -m "$$m"

stash-list:
	git stash list

stash-apply:
	@if [ -z "$$id" ]; then echo "Použi: make stash-apply id=<n>"; exit 1; fi
	git stash apply stash@{$$id}

stash-drop:
	@if [ -z "$$id" ]; then echo "Použi: make stash-drop id=<n>"; exit 1; fi
	git stash drop stash@{$$id}

# -------------------------
# 🎯 Restore from History
# -------------------------
# ⚠️ POZOR: Každý riadok pod targetom musí začínať TABOM, nie medzerami!
restore-folder:
	@if [ -z "$$commit" ] || [ -z "$$path" ]; then \
		echo "❌ Použi: make restore-folder commit=<hash> path=<folder>"; \
		exit 1; \
	fi
	@git checkout $$commit -- $$path
	@echo "✅ Obnovené: $(path) z commitu $(commit)"
	@git status --short
	@echo "--- Zmenené súbory ---"
	@git diff --stat

restore-file:
	@if [ -z "$$commit" ] || [ -z "$$path" ]; then echo "Použi: make restore-file commit=<hash> path=<file>"; exit 1; fi
	git checkout $$commit -- $$path
	@echo "✅ Obnovené: $(path) z commitu $(commit)"
	@git status --short

# Obnov súbor/priečinok z konkrétneho commitu + diff pred/po
# Použitie: make restore-path commit=<hash> path=<file-or-dir>
restore-path:
	@echo "⚠️  Pozor: recepty v Makefile MÚSIA začínať TABom (nie medzerami)!"
	@if [ -z "$$commit" ] || [ -z "$$path" ]; then \
		echo "Použi: make restore-path commit=<hash> path=<file-or-dir>"; exit 1; \
	fi
	@echo "🔎 Pred zmenou (diff vs HEAD) pre '$$path':"
	@git diff --name-status -- $$path || true
	@echo "↩️  Obnovujem '$$path' z commitu $$commit…"
	@git checkout $$commit -- $$path
	@echo "✅ Hotovo. Zmenené súbory:"
	@git status --short -- $$path
	@echo "🔎 Po obnove (diff vs HEAD) pre '$$path':"
	@git diff --name-status -- $$path || true
	@echo "💡 Ak je to ono: git add $$path && git commit -m \"restore: $$path from $$commit\""
	@echo "✅ Obnovené: $(path) z commitu $(commit)"

# Obnoví konkrétny súbor zo zvoleného stasha
# Použitie:
#   make restore-from-stash-file stash=stash@{0} file=scripts/check_config_paths.js
restore-from-stash-file:
	@if [ -z "$(stash)" ] || [ -z "$(file)" ]; then \
		echo "Použi: make restore-from-stash-file stash=stash@{N} file=<path>"; \
		exit 1; \
	fi
	@git restore --source=$(stash) -- $(file)
	@echo "✅ Súbor '$(file)' obnovený zo stasha '$(stash)'"
	@git status --short

# -------------------------
# 🧹 Delete legacy MkDocs .pages
# -------------------------
delete-dotpages:
	@echo ">>> Odstraňujem všetky '.pages' súbory..."
	@find . -type f -name ".pages" -exec rm -f {} +
	@echo "✅ Hotovo. Súbory '.pages' boli zmazané."
	@echo "💡 Commitni: git add -A && git commit -m 'Remove .pages files'"