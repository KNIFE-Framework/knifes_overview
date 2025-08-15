#### 2) `Makefile-README.md` (do koreňa repozitára)

# Makefile – Central Panel for Git (Worktree + Actions)

Tento Makefile je „single point of control“: build, link-check, deploy, sandbox, obnova z histórie.

## Režimy nasadenia
- **Cesta 1 – Worktree (manuálny push z lokálu)**
  - prvé nastavenie: `make check-worktree`
  - nasadenie: `make full-deploy` (pushne do `gh-pages-docusaurus`)
- **Cesta 2 – GitHub Actions (CI/CD)**
  - workflow: `.github/workflows/deploy.yml`
  - nasadenie: `git add -A && git commit -m "msg" && git push`
  - preskočiť CI pre daný push: commit obsahuje `[noactions]`
  - toggles: `make actions-disable` / `make actions-enable`

## Najčastejší denný flow

make quickstart     # pripomenie 3 kroky
make dev            # lokálny server
#kód a obsah…

## Worktree: make full-deploy

## Actions:  git add -A && git commit -m "update" && git push





## Užitočné príklady
### Contoll flow
make mode           # povie, či ideš Worktree/Actions a čo ďalej
make doctor         # diagnostika (node/git/remote/worktree/workflow)
make check-links    # DRY-RUN link checker
make build && make serve

### Worktree
make check-worktree # vytvorí/oprava worktree
make deploy         # build + copy + commit/push do worktree
make remove-worktree
make worktree-status

### Actions
make actions-status
make actions-disable
make actions-enable

# Autentikácia (len pre Worktree)

	•	HTTPS (macOS odporúčané):
	•	git config --global credential.helper osxkeychain
	•	prvý git push si vypýta PAT a uloží do Keychain
	•	SSH alternatíva:
	•	ssh-keygen -t ed25519 -C "email"
	•	ssh-add ~/.ssh/id_ed25519 a verejný kľúč nahrať do GitHubu