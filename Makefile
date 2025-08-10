# Makefile pre manuálny Docusaurus deploy na GitHub Pages

# názov deploy vetvy
DEPLOY_BRANCH = gh-pages-docusaurus

# cesta k worktree s deploy výstupom
WORKTREE_DIR = ../$(DEPLOY_BRANCH)

# hlavný build príkaz
build:
	npm run build

# vytvorenie worktree (len pri prvom použití)
init-worktree:
	git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH) || git branch $(DEPLOY_BRANCH) && git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH)

# skopírovanie build výstupu do worktree
copy-build:
	rsync -av --delete build/ $(WORKTREE_DIR)/

# commit + push z worktree
commit-deploy:
	cd $(WORKTREE_DIR) && git add . && git commit -m "Manual Docusaurus deploy" && git push origin $(DEPLOY_BRANCH)

# hlavný deploy príkaz – voláš len keď chceš publikovať
deploy: build copy-build commit-deploy
	@echo "✅ Deploy hotový na vetve $(DEPLOY_BRANCH)"

# ak chceš úplne odpojiť worktree
remove-worktree:
	git worktree remove $(WORKTREE_DIR)