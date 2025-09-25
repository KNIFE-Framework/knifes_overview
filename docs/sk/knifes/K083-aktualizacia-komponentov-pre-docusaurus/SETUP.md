# Rýchla cesta k Node 22 (vyber si 1 možnosť)

## A) Homebrew (najjednoduchšie na Macu)
```bash
# skontroluj, že máš brew
brew --version

# nainštaluj Node 22
brew install node@22

# nastav do PATH (Apple Silicon vs Intel)
# Apple Silicon (M1/M2/M3)
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc
# Intel
# echo 'export PATH="/usr/local/opt/node@22/bin:$PATH"' >> ~/.zshrc

source ~/.zshrc
node -v   # očakávaj v22.x
npm -v
```

## B) NVM (flexibilný správca verzií)
```bash
# inštalácia nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# aktivácia v zsh
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"' >> ~/.zshrc
source ~/.zshrc

# Node 22
nvm install 22
nvm use 22

# pripni verziu do repozitára
echo "22" > .nvmrc

node -v
```

## C) Volta (rýchly per-user manager)
```bash
curl https://get.volta.sh | bash
source ~/.zshrc
volta install node@22 npm@latest
node -v
```
