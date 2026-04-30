# Session Log – KNIFE Docusaurus: Audit, SEO, GA4, Draft Workflow

**Dátum:** 2026-04-30  
**Projekt:** knifes_overview-03 / knifes.systemthinking.sk  
**Nástroj:** Claude Code (VSCode extension)  
**Autor:** Roman Kazicka

---

## Kontext

Pracovná session zameraná na opravu Docusaurus buildu, zavedenie analytiky a GEO/SEO infraštruktúry, a definovanie workflow pre publikovanie rozpracovaných príspevkov.

---

## Rozhodnutia

### 1. Frontmatter schema – K000104 ako referencia

**Problém:** 10 z 13 MD súborov v K000104 malo duplicitné `id: "K000104"` a prázdne `guid: ""`, čo spôsobovalo chyby pri Docusaurus build.

**Riešenie:**
- `id`: unikátny per súbor, vzor `K000XXX` (root) + `K000XXX-NN-slug` (child)
- `guid`: UUID v4, generovaný raz, nikdy nemenený
- `title`: sekcia-špecifický názov, nie duplikát rodiča
- `description`: 1–2 vety, povinné
- `tags`: 2–3 relevantné tagy
- `locale`: `"en"` alebo `"sk"` podľa adresárovej štruktúry

**Stav:** ✅ Implementované (všetkých 13 súborov K000104)

---

### 2. GA4 Analytics

**Rozhodnutie:** Aktivovať existujúci stream `Knifes-Overview.systemthinking.sk`.

- GA4 Measurement ID: `G-LV31TWZZK6`
- Plugin: `@docusaurus/plugin-google-gtag` (bol nainštalovaný ale neaktívny)
- `anonymizeIP: true` (GDPR)
- UTM parametre: od teraz použiť pre všetky LI posty a kampane

**Stav:** ✅ Implementované v `docusaurus.config.ts`

---

### 3. SEO + GEO infraštruktúra

**Rozhodnutie:** Pridať štandardné súbory pre vyhľadávače aj AI crawlery.

| Súbor | Účel |
|-------|------|
| `static/robots.txt` | Povolenie pre všetkých crawlerov vr. GPTBot, ClaudeBot, PerplexityBot |
| `static/llms.txt` | AI-čitateľný index obsahu (GEO štandard) |
| `themeConfig.metadata` | Open Graph + Twitter card meta tagy |

**Stav:** ✅ Implementované

**Poznámka:** `llms.txt` treba aktualizovať pri každom novom publikovanom EN príspevku.

---

### 4. Lifecycle stavov príspevkov

**Rozhodnutie:** Definovať 4-stavový lifecycle:

| Status | Meaning | Vizuálny znak |
|--------|---------|---------------|
| `backlog` | Plánované, nezačaté | žiadny |
| `inProgress` | Aktívne rozpracované | `:::caution In Progress` |
| `done` | Hotové, pred publikáciou | voliteľne `:::note` |
| `published` | Finálne, bez upozornenia | žiadny |

**Stav:** ✅ Implementované (všetkých 13 súborov K000104 nastavené na `inProgress`)

**Workflow pre dokončenie príspevku:**
1. Zmeň `status: "inProgress"` → `"published"`
2. Odstráň `:::caution ... :::` blok

---

### 5. Draft indikátor – Phase 1

**Rozhodnutie:** Použiť natívny Docusaurus admonition namiesto `draft: true`.

**Dôvod:** `draft: true` stránku úplne skryje z produkčného buildu — to nie je zámer. Cieľom je stránka viditeľná, ale vizuálne označená.

```markdown
:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::
```

**Phase 2 (plánovaná):** React `DraftBanner` komponent, ktorý číta `status` z frontmatter — bez manuálnych blokov.

**Stav:** ✅ Phase 1 implementovaná

---

### 6. MDX a ko-lokácia obrázkov

**Rozhodnutie:** Migrovať obrázky z `static/knifes/K000XXX.../` vedľa MD súborov.

**Dôvod:** Single-folder package princíp — obsah a assets pohromade. Docusaurus 3.x to podporuje natívne.

**Cieľová syntax:**
```jsx
<img src={require('./img/image.png').default}
     style={{maxWidth: '800px', width: '100%'}} />
```

**Poznámka:** `.md` súbory v Docusaurus 3.x sú spracovávané ako MDX automaticky — JSX syntax funguje bez prípony `.mdx`.

**Stav:** 🔄 Rozhodnuté, implementácia pending (čaká na test buildu)

---

### 7. Oprava images-auto-reference.sh

**Problém 1:** `"\n"` v bash double-quotes = literálny string, nie nový riadok → obrázky sa renderovali ako text.  
**Oprava:** Zmenené na `$'\n'`

**Problém 2:** Pre `index.md` (root) bol `rel_to_root` = plná absolútna cesta → broken src path.  
**Oprava:** Pridaný `if [ "$md_dir" = "$KNIFE_ROOT" ]` check.

**Stav:** ✅ Opravené. Spustiť skript po oprave:
```bash
cd content/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC
bash images-auto-reference.sh
```

---

## Ďalšie kroky (backlog)

- [ ] Spustiť `images-auto-reference.sh` po oprave, otestovať render obrázkov
- [ ] Build + deploy, overiť GA4 Realtime
- [ ] Migrácia obrázkov K000104 do ko-lokácie (`img/` vedľa MD)
- [ ] React `DraftBanner` komponent (Phase 2 draft indikátoru)
- [ ] Aktualizovať `llms.txt` pri nových EN príspevkoch
- [ ] Automatizovať EN prehľadové MD súbory (ako má SK)

---

*Zapísané Claude Code (claude-sonnet-4-6) | 2026-04-30*
