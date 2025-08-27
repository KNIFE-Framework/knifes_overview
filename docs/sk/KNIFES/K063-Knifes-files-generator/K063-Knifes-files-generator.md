# KNIFES generator (CSV → MD)

## Quick start
1. Put your CSV here: `data/KNIFE-OVERVIEW-ONLY.csv` (create the `data/` folder in your repo).
2. Copy `scripts/` folder to your repo root.
3. Add to `package.json`:
```json
{
  "scripts": {
    "knifes:gen": "node scripts/build_knifes.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root .",
    "knife:new": "node scripts/new_knife.mjs"
  }
}
```
4. Run:
```bash
npm run knifes:gen
```
It will:
- create missing `docs/sk/KNIFES/<FolderName>/<FolderName>.md`
- write/overwrite overview files at repo root: `KNIFEsOverview.md`, `KNIFE_Overview_List.md`, `KNIFE_Overview_Details.md`

## CSV headers expected
`ID,ShortTitle,Category,Status,Priority,Type,Date,FolderName,SidebarLabel,LinkSlug,Tags,Description,Context`

- If **FolderName** is empty → generated as `ID-kebab(ShortTitle)`
- If **LinkSlug** is empty → `/KNIFES/<FolderName>/`
- If **SidebarLabel** is empty → `ID – ShortTitle`

> Slug is published at default locale root (sk) with `routeBasePath: '/'`. Your final URL is:
> `https://knife-framework.github.io/knifes_overview/` + `<slug>`
