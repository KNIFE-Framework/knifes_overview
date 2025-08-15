# -------------------------
# 📄 Makefile – Docusaurus + Git Utils (unified)
# Date: 20250815-0950 (patched)
# Description: Inštalácia, build, testy, validácia a WorkTree deploy.
# CESTA 2 (Actions) doplníme neskôr – tento Makefile je zámerne jednotný.
#
# ❗ Dôležité: pri deployi do worktree NIKDY nemaž priečinok .git.
# Ak je worktree „rozbité“, použij:  make check-worktree
# Ten worktree znovu vytvorí/opravu vykoná korektne.
# -------------------------

# ❗ Worktree deploy vyžaduje lokálnu GIT autentikáciu k GitHubu.
#    Bez platného HTTPS tokenu (osxkeychain) alebo SSH kľúča `git push` zlyhá.
#    Rýchla pomoc: `make help-auth`

SHELL := /bin/bash
NODE := node
NPM  := npm

DOCS_DIR  := docs
BUILD_DIR := build

# 🌿 Worktree deploy
DEPLOY_BRANCH = gh-pages-docusaurus
WORKTREE_DIR  = ../$(DEPLOY_BRANCH)
PAGES_DIR     = $(WORKTREE_DIR)/docs   # <- GH Pages „/docs“ režim

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
        delete-dotpages worktree-status \
		help-auth help-actions  \
		actions-status actions-disable actions-enable


# -------------------------
# 📌 Help
# -------------------------
help:
	@echo "# #########################################################################"
	@echo "#.                                        KNIFE Makefile v2 from 20250815 #"
	@echo "# 📄 Makefile – Docusaurus + Git Utils (unified)                          #"
	@echo "# Date: 20250815-0950 (patched)                                           #"
	@echo "# Description: Inštalácia, build, testy, validácia a WorkTree deploy.     #"
	@echo "# CESTA 2 (Actions) doplníme neskôr – tento Makefile je zámerne jednotný. #"
	@echo "#                                                                         #"
	@echo "# ❗ Dôležité: pri deployi do worktree NIKDY nemaž priečinok .git.        #"
	@echo "# Ak je worktree „rozbité“, použij:  make check-worktree                  #"
	@echo "# Ten worktree znovu vytvorí/opravu vykoná korektne.                      #"
	@echo "# #########################################################################"
	@echo "===== ⚙️ Actions toggles Prepínač medzi spôsobmi deploymentu Worktree a Action Based ====="
	@echo "  actions-status      - Zobrazí, či je workflow zapnutý/ vypnutý"
	@echo "  actions-disable     - Dočasne vypne Actions (premenuje deploy.yml)"
	@echo "  actions-enable      - Znovu zapne Actions"
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
	@echo "  init-worktree       - Alias na check-worktree (založí/opraví worktree)"
	@echo "  check-worktree      - Overí/Vytvorí worktree (bezpečne, self-healing)"
	@echo "  copy-build          - Rsync build/ -> $(PAGES_DIR)/  (chráni .git)"
	@echo "  commit-deploy       - Commit & push z worktree"
	@echo "  remove-worktree     - Odpojí worktree (bez mazania .git ručne!)"
	@echo "  worktree-status     - Debug: git status + zoznam worktrees"
	@echo "  push-main           - Bezpečný push mainu (zastaví ak máš zmeny)"
	@echo "  deploy              - build + copy-build + commit-deploy"
	@echo "  full-deploy         - check-worktree + push-main + build + copy + commit"
	@echo ""
	@echo "===== 🧪 Sandbox & Stash ====="
	@echo "  sandbox-from-main name=<branch>"
	@echo "  sandbox-from-worktree name=<branch> base=<branch>"
	@echo "  stash-save m='msg' | stash-list | stash-apply id=<n> | stash-drop id=<n>"
	@echo ""
	@echo "===== 🎯 Restore from History ====="
	@echo "  restore-folder commit=<hash> path=<dir>"
	@echo "  restore-file   commit=<hash> path=<file>"
	@echo "  restore-path   commit=<hash> path=<file-or-dir>"
	@echo "  restore-from-stash-file stash=stash@{N} file=<path>"
	@echo ""
	@echo "===== 🧹 Čistenie pozostatkov ====="
	@echo "  delete-dotpages     - Zmaže všetky '.pages' (legacy MkDocs)"
	@echo "=========================================================== Special info for WorkTree Deplyment"
	@echo "                                                           "
	@echo "                                                           "
	
# help-auth:
	@echo "===== 🔐 Autentikácia pre Worktree deploy ====="
	@echo "Lokálny deploy = lokálny 'git push' -> musíš byť prihlásený:"
	@echo "  HTTPS (odporúčané na macOS):"
	@echo "    1) git remote -v           # skontroluj, že používaš https://..."
	@echo "    2) git config --global credential.helper osxkeychain"
	@echo "    3) Prvý 'git push' si vypýta PAT (Personal Access Token) -> uloží sa do Keychain"
	@echo "    4) Test: git push --dry-run"
	@echo ""
	@echo "  SSH (alternatíva):"
	@echo "    1) ssh-keygen -t ed25519 -C 'tvoj@email'"
	@echo "    2) eval \"$$(ssh-agent -s)\" && ssh-add $$HOME/.ssh/id_ed25519"
	@echo "    3) Nahraj verejný kľúč do GitHub (Settings -> SSH and GPG keys)"
	@echo "    4) git remote set-url origin git@github.com:ORG/REPO.git"
	@echo "    5) Test: ssh -T git@github.com"
	@echo ""
	@echo "Tip: Ak máš podozrenie na zlý/cudzí cache:"
	@echo "  macOS: 'git credential-osxkeychain erase' a zadaj znovu pri najbližšom push-i."
	@echo ""
	@echo "Po funkčnom teste spustíš Worktree deploy:"
	@echo "  make check-worktree && make deploy    # prípadne make full-deploy"
	@echo "                                                           "
	@echo "                                                           "
	@echo "===== >>>>>>>>>>>>>>>>>>>>>⚙️  CI/CD (Cesta 2 – GitHub Actions) ===== <<<<<<<<<<<<<<<"
	@echo "                                                           "
	@echo "================ Last changed:20250815"
	@echo "1) Do repo pridaj .github/workflows/deploy.yml (viď nižšie)."
	@echo "2) V Settings -> Pages nastav 'Build and deployment' = GitHub Actions."
	@echo "3) V docusaurus.config nastav baseUrl (napr. '/knifes_overview/')."
	@echo "4) Workflow sa spustí po pushi do main a zverejní 'build/' na Pages."
	@echo ""
	@echo "Minimálne workflow (oficiálne Actions):"
	@echo "---------------------------------------"
	@echo "name: Deploy Docusaurus to GitHub Pages"
	@echo "on:"
	@echo "  push:"
	@echo "    branches: [ main ]"
	@echo "permissions:"
	@echo "  contents: read"
	@echo "  pages: write"
	@echo "  id-token: write"
	@echo "concurrency:"
	@echo "  group: pages"
	@echo "  cancel-in-progress: true"
	@echo "jobs:"
	@echo "  build:"
	@echo "    runs-on: ubuntu-latest"
	@echo "    steps:"
	@echo "      - uses: actions/checkout@v4"
	@echo "      - uses: actions/setup-node@v4"
	@echo "        with:"
	@echo "          node-version: 20"
	@echo "      - run: npm ci"
	@echo "      - run: npm run build"
	@echo "      - uses: actions/upload-pages-artifact@v3"
	@echo "        with:"
	@echo "          path: build"
	@echo "  deploy:"
	@echo "    environment:"
	@echo "      name: github-pages"
	@echo "      url: \$$\{steps.deployment.outputs.page_url}"
	@echo "    runs-on: ubuntu-latest"
	@echo "    needs: build"
	@echo "    steps:"
	@echo "      - id: deployment"
	@echo "        uses: actions/deploy-pages@v4"

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
	@grep -RInE '\]\(((\.\.\/|\.\/)+)[^)#]+/index(\.md)?\)' $(DOCS_DIR) --include "*.md" --include "*.mdx" || echo "  ✓ nič nenašiel"
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
# 🌿 Worktree Deploy – Self-healing + ochrany
# -------------------------

# Alias (nech help sedí)
init-worktree: check-worktree

## check-worktree: overí alebo vytvorí worktree pre $(DEPLOY_BRANCH); opraví ak je rozbitá
check-worktree:
	@if [ -d "$(WORKTREE_DIR)" ] && [ ! -d "$(WORKTREE_DIR)/.git" ]; then \
		echo "⚠️  $(WORKTREE_DIR) existuje, ale nie je git repozitár. Mažem a resetujem…"; \
		rm -rf "$(WORKTREE_DIR)"; \
		git worktree prune; \
		git branch -D $(DEPLOY_BRANCH) || true; \
	fi
	@if ! git worktree list | grep -q "$(WORKTREE_DIR)"; then \
		echo "ℹ️  Worktree pre $(DEPLOY_BRANCH) neexistuje. Vytváram…"; \
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

# Bezpečné kopírovanie buildu – vždy do /docs a len ak existuje .git v worktree
copy-build:
	@if [ ! -d "$(WORKTREE_DIR)/.git" ]; then \
		echo "❌ $(WORKTREE_DIR) nie je git worktree (chýba .git)."; \
		echo "   NIKDY nerob 'rm -rf $(WORKTREE_DIR)/.git'!"; \
		echo "   Oprava: make check-worktree"; \
		exit 1; \
	fi
	mkdir -p "$(PAGES_DIR)"
	rsync -a --delete \
	  --exclude ".git" --exclude ".gitignore" \
	  "$(BUILD_DIR)/" "$(PAGES_DIR)/"

commit-deploy:
	@if [ ! -d "$(WORKTREE_DIR)/.git" ]; then \
		echo "❌ $(WORKTREE_DIR) nie je git worktree (chýba .git). Spusť make check-worktree"; \
		exit 1; \
	fi
	cd $(WORKTREE_DIR) && git add -A && git commit -m "Deploy $$(date -u +'%Y-%m-%d %H:%M:%S UTC')" || echo "⚠️ Žiadne zmeny na commit."
	cd $(WORKTREE_DIR) && git push origin $(DEPLOY_BRANCH)

# Rýchly lokálny deploy (alias na build + copy + commit)
deploy: build copy-build commit-deploy

# Plný scenár: kontrola worktree + push main + build + deploy
full-deploy: check-worktree push-main build copy-build commit-deploy
	@echo "🎉 Full deploy úspešný → $(DEPLOY_BRANCH)"

remove-worktree:
	# Bezpečné odpojenie cez git (NEmaž .git ručne!)
	git worktree remove $(WORKTREE_DIR) || true
	git worktree prune || true

worktree-status:
	@git worktree list
	@echo "----"
	@git -C $(WORKTREE_DIR) status -sb || true

## push-main: Bezpečný push mainu
push-main:
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "❌ Máš necommitnuté zmeny na main! Najprv commitni/stashni."; \
		exit 1; \
	fi
	git push origin main
	@echo "✅ main pushnutý."

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
# ⚠️ Každý riadok pod targetom MUSÍ začínať TABom (nie medzerami)!
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

restore-path:
	@echo "⚠️  Pozor: recepty v Makefile MÚSIA začínať TABom!"
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



	# -------------------------
# ⚙️ GitHub Actions – enable/disable by renaming workflow file
# -------------------------
WF_DIR := .github/workflows
WF_FILE := $(WF_DIR)/deploy.yml
WF_DISABLED := $(WF_FILE).disabled

.PHONY: actions-status actions-disable actions-enable

actions-status:
	@if [ -f "$(WF_FILE)" ]; then \
	  echo "Actions workflow: ENABLED ($(WF_FILE))"; \
	elif [ -f "$(WF_DISABLED)" ]; then \
	  echo "Actions workflow: DISABLED ($(WF_DISABLED))"; \
	else \
	  echo "Actions workflow: NOT FOUND"; \
	fi

actions-disable:
	@mkdir -p $(WF_DIR)
	@if [ -f "$(WF_FILE)" ]; then \
	  mv "$(WF_FILE)" "$(WF_DISABLED)"; \
	  git add -A && git commit -m "ci: disable Actions deploy [noactions]" || true; \
	  echo "✅ Actions deaktivované (workflow súbor premenovaný)."; \
	else \
	  echo "ℹ️ Actions už vyzerá byť vypnuté (nenašiel som $(WF_FILE))."; \
	fi

actions-enable:
	@if [ -f "$(WF_DISABLED)" ]; then \
	  mv "$(WF_DISABLED)" "$(WF_FILE)"; \
	  git add -A && git commit -m "ci: enable Actions deploy"; \
	  echo "✅ Actions aktivované (workflow súbor obnovený)."; \
	else \
	  echo "ℹ️ Actions už vyzerá byť zapnuté (nenašiel som $(WF_DISABLED))."; \
	fi