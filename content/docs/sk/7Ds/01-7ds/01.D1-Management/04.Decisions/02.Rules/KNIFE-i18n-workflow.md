---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "KNIFE-i18n-workflow"
guid: "d7313c93-71af-4357-8c45-6f4afa70f726"

dao: "7ds"
title: "Pravidlá: KNIFE i18n workflow (EN → SK preklad)"
description: "Overené pravidlá a postup pre preklad KNIFE článkov z EN do SK. Vzniklo na základe praktických skúseností z 2026-06-02."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

tags: [KNIFE, i18n, Docusaurus, workflow, translation]

locale: "sk"

created: "2026-06-02 00:00"
modified: "2026-06-02 00:00"
status: "published"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
copyright: "© 2026 Roman Kazicka"

origin_system: "CAA"
origin_author: "Roman Kazicka"
---

# Pravidlá: KNIFE i18n workflow (EN → SK preklad)

Overené pravidlá a postup pre tvorbu SK (alebo iných jazykových) verzií KNIFE článkov.
Vzniklo na základe praktických skúseností z 2026-06-02 (preklady K103, K106, K107, K108).

---

## Postup prekladu

### 1. Krok — kopírovanie štruktúry

```bash
cp -r content/docs/en/knifes/K000XXX-NazovArticlu \
      content/docs/sk/knifes/K000XXX-NazovArticlu
```

- Kopíruje **všetky súbory** vrátane obrázkov (`img/`)
- Obrázky sa **neprekladajú** — sú identické v oboch jazykoch
- Nikdy nevytváraj len `.gitkeep` — kopíruj hneď

### 2. Krok — preklad MD súborov

Pre každý `.md` súbor v SK priečinku:

1. Zmeň frontmatter (viď pravidlá nižšie)
2. Prelož text do slovenčiny
3. Zachovaj technické pojmy v EN (MCT, SDLC, APV, SFIA, TBM, Agile, Lean, ...)
4. Zachovaj všetky image `require()` paths — sú identické v EN aj SK
5. Zachovaj všetky URL zdroje

### 3. Krok — build overenie

```bash
make knifes-overview LOCALE=sk
make build   # alebo make build-sk
```

---

## Pravidlá frontmatter

### Pre `index.md` súbory (hlavné stránky priečinka)

| Pole | Pravidlo |
|---|---|
| `id` | `K000XXX_SK` — s `_SK` postfixom (uppercase) |
| `guid` | Nové UUID — `uuidgen \| tr '[:upper:]' '[:lower:]'` |
| `locale` | `"sk"` |
| `fm_build` | Aktuálny dátum ISO |
| `status` | Zachovaj z EN (published/draft) |

Príklad: `id: "K000106_SK"`, `guid: "c37927c6-..."`, `locale: "sk"`

### Pre non-index súbory (sub-stránky v priečinku)

:::caution[Kľúčové pravidlo Docusaurus]
Pre non-index `.md` súbory (napr. `K000107-APV-index.md`) Docusaurus používa **`id` ako URL slug**.
Preto `id` musí byť **presne zhodný s názvom súboru** (bez `.md` a bez `_SK` postfixu).
:::

| Pole | Pravidlo |
|---|---|
| `id` | `K000107-APV-index` — **rovnaké ako názov súboru**, bez `_SK` |
| `guid` | Nové UUID |
| `locale` | `"sk"` |

Dôvod: `id: "K000107-APV-index_SK"` vytvorí route `/K000107-APV-index_SK`, ale linky
v texte smerujú na `./K000107-APV-index` → broken link error.

Pre `index.md` toto neplatí — route je vždy folder URL bez ohľadu na `id`.

---

## Pravidlá pre obrázky

- Obrázky **nekopíruj manuálne** — `cp -r` ich skopíruje automaticky
- Priečinok je vždy `img/` (lowercase) — pri premenúvaní z `IMG/` použiť `mv`
- Názvy súborov obrázkov **nemeniť** — identické v EN aj SK
- Problematické znaky v názvoch (medzery, `&`) opraviť raz v EN, SK dostane správnu verziu cez `cp -r`

---

## Pravidlá pre Sources / Zdroje

Markdown `[1] url` na jednom riadku = **vyrenderuje sa inline** (všetky za sebou).
Správny formát pre SK aj EN:

```markdown
### Zdroje / Sources

1. https://...
2. https://...
```

Číslovaný zoznam `1.` zabezpečí každý zdroj na vlastnom riadku.

---

## Pravidlá pre SK overview generátor

```bash
make knifes-overview LOCALE=sk
```

Skript zbiera **len `index.md` a `index.mdx` súbory** — sub-stránky (napr. `K000107-APV-index.md`) sa do overview nedostanú automaticky.
To je žiaduce správanie.

---

## Poznámky k architektúre viacjazyčnosti

- Každý jazyk je **samostatný svet** — `content/docs/en/` a `content/docs/sk/` sú nezávislé
- Rovnaká štruktúra priečinkov (rovnaké folder mená) v oboch jazykoch
- **Single source of truth pre obsah** = EN; SK je preklad
- Ďalšie jazyky (ZH, DE, ...) = rovnaký postup, stačí pridať `content/docs/zh/` a locale do `docusaurus.config.js`
- Governance risk: bez CI kontroly začnú EN a SK divergovať do 3 mesiacov — zvážiť `status: "translated"` + dátum prekladu ako tracking

---

## Kontrolný zoznam pred commitom

- [ ] `cp -r` prebehol (obrázky sú skopírované)
- [ ] Všetky MD súbory majú `locale: "sk"`
- [ ] `index.md` súbory majú `id` s `_SK` postfixom a nové GUID
- [ ] Non-index súbory majú `id` zhodný s názvom súboru (bez `_SK`)
- [ ] `make knifes-overview LOCALE=sk` prebehol bez chýb
- [ ] `make build` prebehol bez broken links
