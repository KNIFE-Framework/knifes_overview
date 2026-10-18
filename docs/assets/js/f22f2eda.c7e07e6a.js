"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[21741],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 29406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idCBkIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiI+CiAgPHRpdGxlIGlkPSJ0Ij5LZXJuYXJvIEFJIEh1YiDigJMgYXJjaGl0ZWt0w7pyYTwvdGl0bGU+CiAgPGRlc2MgaWQ9ImQiPldpbmRvd3MgU2VydmVyIHMgS2VybmFybyBBSSBIdWIgKEFJLCBTeW5jIGEgTWFuYWdlbWVudCBwb3J0KSwgUG9zdGdyZVNRTCBzIHBndmVjdG9yIGEgRUEgR3JhcGhMaW5rOyBFQSBrbGllbnRpIHMgcGx1Z2lub20gQXNzaXN0IGEgd2Vib3bDqSBwcmVobGlhZGHEjWUgc2EgcHJpcMOhamFqw7ogY2V6IHNpZcWlLjwvZGVzYz4KICA8ZGVmcz4KICAgIDxtYXJrZXIgaWQ9ImEiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOCIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjciIG1hcmtlckhlaWdodD0iNyIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDBMMTAgNUwwIDEweiIgZmlsbD0iIzQ3NTU2OSIvPjwvbWFya2VyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ3MCIgZmlsbD0iI2ZmZmZmZiIvPgogIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSIyNzAiIHJ4PSIxMiIgZmlsbD0iI2YxZjVmOSIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjQwIiB5PSI0OCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBmMTcyYSI+V2luZG93cyBTZXJ2ZXIgMjAxOSs8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjYyIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjIxMCIgcng9IjEwIiBmaWxsPSIjZGJlYWZlIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNTgiIHk9Ijg4IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMWUzYThhIj5LZXJuYXJvIEFJIEh1YjwvdGV4dD4KICA8cmVjdCB4PSI1OCIgeT0iMTAyIiB3aWR0aD0iNDQ0IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iNzQiIHk9IjEyMyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzBmMTcyYSI+S2VybmFybyBBSSBQb3J0IDo4MDAwPC90ZXh0PgogIDx0ZXh0IHg9Ijc0IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMzMzQxNTUiPkFJIGVuZ2luZTwvdGV4dD4KICA8cmVjdCB4PSI1OCIgeT0iMTYwIiB3aWR0aD0iNDQ0IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iNzQiIHk9IjE4MSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzBmMTcyYSI+S2VybmFybyBTeW5jIFBvcnQgOjgwMDE8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjE5OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+c3luY2hyb25pesOhY2lhIHMgRUEgcmVwb3ppdMOhcm9tPC90ZXh0PgogIDxyZWN0IHg9IjU4IiB5PSIyMTgiIHdpZHRoPSI0NDQiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSI3NCIgeT0iMjM5IiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMGYxNzJhIj5NYW5hZ2VtZW50IFBvcnQgOjgwMDI8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjI1NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+YWRtaW4gcG9ydMOhbDwvdGV4dD4KICA8cmVjdCB4PSI1NjAiIHk9IjYyIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiMxNmEzNGEiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNjYwIiB5PSIxMDQiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxNDUzMmQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBvc3RncmVTUUwgMTc8L3RleHQ+CiAgPHRleHQgeD0iNjYwIiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNDUzMmQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPisgcGd2ZWN0b3I8L3RleHQ+CiAgPHJlY3QgeD0iNTYwIiB5PSIxNzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iOTYiIHJ4PSIxMCIgZmlsbD0iI2VkZTlmZSIgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjY2MCIgeT0iMjE4IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjNGMxZDk1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FQSBHcmFwaExpbms8L3RleHQ+CiAgPHRleHQgeD0iNjYwIiB5PSIyNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM0YzFkOTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmxvY2FsaG9zdDo4MDkwPC90ZXh0PgogIDxwYXRoIGQ9Ik01MDIgMTI2SDU1OCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLWVuZD0idXJsKCNhKSIvPgogIDxwYXRoIGQ9Ik01MDIgMTkwTDU1OCAyMjAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1lbmQ9InVybCgjYSkiLz4KICA8cGF0aCBkPSJNMjAwIDI5MFYzNTAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIiBtYXJrZXItZW5kPSJ1cmwoI2EpIi8+CiAgPHBhdGggZD0iTTYwMCAyOTBWMzUwIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhKSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzI1IiBmb250LXNpemU9IjEzIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMzMzQxNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxBTiAvIFZQTiAoSFRUUCk8L3RleHQ+CiAgPHJlY3QgeD0iMjAiIHk9IjM1MCIgd2lkdGg9IjM3MCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMiIgZmlsbD0iI2ZlZjNjNyIgc3Ryb2tlPSIjZDk3NzA2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjQwIiB5PSIzNzgiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM3ODM1MGYiPkVBIGtsaWVudCDigJMgS2VybmFybyBBc3Npc3Q8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjQwOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzBmMTcyYSI+cGx1Z2luIOKGkiBwcmlobMOhc2VuaWUgbmEgSHViPC90ZXh0PgogIDxyZWN0IHg9IjQxMCIgeT0iMzUwIiB3aWR0aD0iMzcwIiBoZWlnaHQ9IjEwMCIgcng9IjEyIiBmaWxsPSIjZmNlN2YzIiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNDMwIiB5PSIzNzgiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM4MzE4NDMiPldlYm92w70gcHJlaGxpYWRhxI08L3RleHQ+CiAgPHRleHQgeD0iNDMwIiB5PSI0MDgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMwZjE3MmEiPmxlbiBVUkwgSHVidSwgYmV6IGluxaF0YWzDoWNpZTwvdGV4dD4KPC9zdmc+Cg==");

/***/ }),

/***/ 39739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000121_kernaro_ai_hub_index_md_f22_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000121-kernaro-ai-hub-index-md-f22.json
const site_docs_sk_knifes_k_000121_kernaro_ai_hub_index_md_f22_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000121-Kernaro-AI-Hub/K000121","title":"K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím","description":"Ako postaviť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu na Windows Serveri: poradie inštalácie, pgvector, príprava databázy, licencia, používateľia a čo nie je zrejmé z návodov (HTTP vs HTTPS, porty, DNS). Študenti môžu AI používať aj z prehliadača bez inštalácie.","source":"@site/docs/sk/knifes/K000121-Kernaro-AI-Hub/index.md","sourceDirName":"sk/knifes/K000121-Kernaro-AI-Hub","slug":"/sk/knifes/K000121-Kernaro-AI-Hub/","permalink":"/sk/knifes/K000121-Kernaro-AI-Hub/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"kernaro","permalink":"/doc-tags/kernaro"},{"inline":true,"label":"ea","permalink":"/doc-tags/ea"},{"inline":true,"label":"ai-hub","permalink":"/doc-tags/ai-hub"},{"inline":true,"label":"licensing","permalink":"/doc-tags/licensing"},{"inline":true,"label":"windows-server","permalink":"/doc-tags/windows-server"},{"inline":true,"label":"postgresql","permalink":"/doc-tags/postgresql"},{"inline":true,"label":"pgvector","permalink":"/doc-tags/pgvector"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-18T12:24:05.506055+00:00","fm_version_comment":"","id":"K000121","guid":"0c6a9ff5-8fe2-40ec-8e2f-d32f9172455c","dao":"knife","title":"K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím","description":"Ako postaviť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu na Windows Serveri: poradie inštalácie, pgvector, príprava databázy, licencia, používateľia a čo nie je zrejmé z návodov (HTTP vs HTTPS, porty, DNS). Študenti môžu AI používať aj z prehliadača bez inštalácie.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"","tags":["kernaro","ea","ai-hub","licensing","windows-server","postgresql","pgvector"],"locale":"sk","created":"2026-10-18 14:24","modified":"2026-10-18 20:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000119 – Ako si vytvoriť čistý klon triedneho repozitára","permalink":"/sk/knifes/K000119-klon-triedneho-repozitara/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000121-Kernaro-AI-Hub/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-18T12:24:05.506055+00:00',
	fm_version_comment: '',
	id: 'K000121',
	guid: '0c6a9ff5-8fe2-40ec-8e2f-d32f9172455c',
	dao: 'knife',
	title: 'K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím',
	description: 'Ako postaviť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu na Windows Serveri: poradie inštalácie, pgvector, príprava databázy, licencia, používateľia a čo nie je zrejmé z návodov (HTTP vs HTTPS, porty, DNS). Študenti môžu AI používať aj z prehliadača bez inštalácie.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: 'guide',
	priority: '',
	tags: [
		'kernaro',
		'ea',
		'ai-hub',
		'licensing',
		'windows-server',
		'postgresql',
		'pgvector'
	],
	locale: 'sk',
	created: '2026-10-18 14:24',
	modified: '2026-10-18 20:00',
	status: 'published',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím';

const assets = {

};



const toc = [{
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "1. PostgreSQL 17",
  "id": "1-postgresql-17",
  "level": 3
}, {
  "value": "2. pgvector (build na Windows)",
  "id": "2-pgvector-build-na-windows",
  "level": 3
}, {
  "value": "3. EA GraphLink",
  "id": "3-ea-graphlink",
  "level": 3
}, {
  "value": "4. Príprava databázy",
  "id": "4-príprava-databázy",
  "level": 3
}, {
  "value": "5. Kernaro AI Hub (inštalátor)",
  "id": "5-kernaro-ai-hub-inštalátor",
  "level": 3
}, {
  "value": "6. Prvé spustenie a licencia",
  "id": "6-prvé-spustenie-a-licencia",
  "level": 3
}, {
  "value": "7. Správa používateľov",
  "id": "7-správa-používateľov",
  "level": 3
}, {
  "value": "8. Monitoring sessions",
  "id": "8-monitoring-sessions",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky — čo nie je zrejmé",
  "id": "-tipy-a-poznámky--čo-nie-je-zrejmé",
  "level": 2
}, {
  "value": "Port a protokol — kto je zodpovedný za HTTPS?",
  "id": "port-a-protokol--kto-je-zodpovedný-za-https",
  "level": 3
}, {
  "value": "Diagnostika: timeout, chyba TLS alebo firewall?",
  "id": "diagnostika-timeout-chyba-tls-alebo-firewall",
  "level": 3
}, {
  "value": "Firewall po reinštalácii / upgrade servera",
  "id": "firewall-po-reinštalácii--upgrade-servera",
  "level": 3
}, {
  "value": "Certifikát cez win-acme (Let&#39;s Encrypt)",
  "id": "certifikát-cez-win-acme-lets-encrypt",
  "level": 3
}, {
  "value": "Bezpečnosť",
  "id": "bezpečnosť",
  "level": 3
}, {
  "value": "Poznámky pre akademické nasadenie",
  "id": "poznámky-pre-akademické-nasadenie",
  "level": 3
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "Zdroje",
  "id": "zdroje",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "k000121--kernaro-ai-hub-centralizovaný-prístup-k-ai-pre-tím",
        children: "K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Intermediate\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kernaro"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ea"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-hub"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "licencovanie"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "windows-server"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "postgresql"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pgvector"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verzia:"
      }), " 1.2 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dátum:"
      }), " 2026-10-18 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Súvisí s:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "K000104 – SPARX AI Kernaro v SDLC"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ako postaviť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernaro AI Hub"
      }), " — jeden centrálny server s AI pre tím alebo triedu — a čo pri tom nie je zrejmé z návodov. Poznatky nižšie pochádzajú z reálnej inštalácie (Windows Server 2019, 2026-10-18, Management v1.1.0.1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro AI sa používa dvoma spôsobmi, ktoré sa dajú kombinovať:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Spôsob"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pre koho / kde"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo potrebuje"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro Assist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Študent pracuje priamo v Sparx Enterprise Architect; AI mu pomáha vytvárať a upravovať prvky modelu v prirodzenom jazyku"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inštalátor Assist, adresa Hubu, pridelený seat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro AI Hub – web"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Študent používa AI v ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "prehliadači"
            }), " cez centrálnu adresu Hubu — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "bez inštalácie"
            }), " na vlastnom počítači"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Len URL Hubu a pridelené oprávnenia"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hub tiež slúži ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "správca licencií Assist"
      }), " (License Manager): prideľuješ seats a sleduješ relácie. Kontext použitia Kernaro v SDLC nájdeš v K000104."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI a správa bežia na jednom serveri; klienti (Assist v EA aj webový prehliadač) sa k nemu pripájajú po sieti."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Kernaro AI Hub – architektúra",
        src: (__webpack_require__(29406)/* ["default"] */ .A) + "",
        width: "800",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenty, ktoré treba nainštalovať v tomto poradí:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Komponent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Poznámka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Server 2019+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "admin práva"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL 16 alebo 17"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nie 18 — Sparx uvádza 16/17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "build zo zdrojov (Git + VS Build Tools)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA GraphLink"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "pred"
            }), " Hubom, v ZIP-e s Hubom"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro AI Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "KernaroAI-Setup"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Licenčný súbor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "podľa Machine ID servera"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro Assist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "až na klientoch, samostatný inštalátor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ℹ️ Inštalátory poskytuje Sparx Systems po schválení (akademická licencia Workgroup). Hub aj GraphLink sú v jednom ZIP-e, Assist v druhom. Pýtaj si ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "najnovšie verzie"
        }), " — Hub a Assist majú mať zhodné verzie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-postgresql-17",
      children: "1. PostgreSQL 17"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inštalátor z postgresql.org (EDB), port ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5432"
      }), ", predvolená locale, Stack Builder netreba. Zapíš si heslo používateľa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "postgres"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pozor na verziu:"
      }), " najnovší inštalátor môže byť 18. Hub vyžaduje 16/17, preto sťahuj 17."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-pgvector-build-na-windows",
      children: "2. pgvector (build na Windows)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build potrebuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Visual Studio Build Tools 2022"
      }), " (workload ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Desktop development with C++"
      }), "; stačí MSVC v143 x64/x86 a Windows SDK, približne 7 GB) a Git."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cl"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nmake"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nie sú v PATH"
        }), " v obyčajnom PowerShelli. Otvor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "x64 Native Tools Command Prompt for VS 2022"
        }), " ako administrátor. Overenie: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cl"
        }), " aj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nmake /?"
        }), " musia vypísať verziu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "set \"PGROOT=C:\\Program Files\\PostgreSQL\\17\"\ncd %TEMP%\ngit clone --branch v0.8.7 https://github.com/pgvector/pgvector.git\ncd pgvector\nnmake /F Makefile.win\nnmake /F Makefile.win install\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Aktuálny tag nájdeš na github.com/pgvector/pgvector (tu v0.8.7). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rozšírenie v databáze nezapínaj ručne"
      }), " — urobí to inštalátor Hubu (viď nižšie)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-ea-graphlink",
      children: "3. EA GraphLink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inštalátor sa pýta na host a port. Pri Hube na tom istom serveri nechaj ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), " a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "8090"
      }), ". Overenie: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "netstat -ano | findstr :8090"
      }), " musí ukázať ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LISTENING"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-príprava-databázy",
      children: "4. Príprava databázy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inštalátor Hubu databázu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nevytvára"
      }), " a vyžaduje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prázdnu"
      }), " databázu (hlásenie ", (0,jsx_runtime.jsx)(_components.em, {
        children: "database does not exist"
      }), ", resp. ", (0,jsx_runtime.jsx)(_components.em, {
        children: "extension already exists in this database"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE DATABASE kernaro;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Používateľ: superuser (", (0,jsx_runtime.jsx)(_components.code, {
        children: "postgres"
      }), "), schéma ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kernaroschema"
      }), ". Ak si omylom zapol ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE EXTENSION vector"
      }), ", databázu zahoď a vytvor znova prázdnu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-kernaro-ai-hub-inštalátor",
      children: "5. Kernaro AI Hub (inštalátor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Obrazovky v poradí: licenčná zmluva → cieľový priečinok → ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Run Schema"
      }), " → pripojenie na PostgreSQL → ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Service Configuration"
      }), " → súhrn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Service Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pole"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Host"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS názov servera"
            }), ", napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kernaro.example.org"
            }), " (nie ", (0,jsx_runtime.jsx)(_components.code, {
              children: "localhost"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Port / Sync Port / Management Port"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "8000"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "8001"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "8002"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Super admin"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "admin"
            }), " + silné heslo (min. 8 znakov, veľké, malé, číslo, špeciálny znak)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pred inštaláciou over, že porty sú voľné (pozor, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-ano"
      }), " s pomlčkou, nie s lomkou):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "netstat -ano | findstr \":8000 :8001 :8002\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prázdny výstup = voľné."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS:"
      }), " ak server nemá DNS záznam, vytvor A záznam (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kernaro"
      }), " → IP servera, TTL 300) a over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nslookup kernaro.example.org"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-prvé-spustenie-a-licencia",
      children: "6. Prvé spustenie a licencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po inštalácii sa otvorí portál ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://<host>:8002"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stránka ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Administrator Account"
        }), " — dokonči ju ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hneď"
        }), ". Kým účet nevznikne, môže ho vytvoriť ktokoľvek, kto dosiahne port 8002."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prihlás sa; v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License Configuration"
        }), " nájdeš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine ID"
        }), " servera."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pošli Machine ID Sparxu (kontakt z akademickej licencie). Vrátia licenčný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "súbor"
        }), " pre Kernaro AI aj EA GraphLink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V portáli: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Upload license file → Activate License"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-správa-používateľov",
      children: "7. Správa používateľov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dva typy účtov: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin"
      }), " (plný prístup) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular"
      }), " (obmedzený prístup)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Configuration → User Management → Add User"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "User & Access Control → Assist Access → Assign Users to Kernaro Assist"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nastav ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Access"
        }), " (Enabled = tvorba obsahu; Disabled = len čítanie)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hub sleduje počty seats: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Available / Assigned / Total"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limited License zobrazuje počítadlá seats; Unlimited License ich skrýva, správa funguje rovnako."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-monitoring-sessions",
      children: "8. Monitoring sessions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "User & Access Control → Assist Active Sessions"
        }), " — User, Machine, Last Used, IP Address, Status. Admin môže revokovať jednotlivú session alebo všetky naraz."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit log:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Assist Session History"
        }), " — Sign-In, Sign-Out, Session Refresh, Revocation, Access Denied, Expiration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky--čo-nie-je-zrejmé",
      children: "💡 Tipy a poznámky — čo nie je zrejmé"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problém"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Príčina / riešenie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cl"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nmake"
            }), " neexistujú"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Si v PowerShelli. Použi ", (0,jsx_runtime.jsx)(_components.em, {
              children: "x64 Native Tools Command Prompt for VS 2022"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "database \"kernaro\" does not exist"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hub databázu nevytvára. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE DATABASE kernaro;"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extension(s) already exist … 'vector'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databáza nesmie byť „použitá“. Zahoď ju, vytvor prázdnu, rozšírenie nechaj na inštalátor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub vyžaduje 16/17. Odinštaluj, nainštaluj 17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prázdny výsledok ", (0,jsx_runtime.jsx)(_components.code, {
              children: "netstat /ano"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Správne je ", (0,jsx_runtime.jsx)(_components.code, {
              children: "netstat -ano"
            }), "; s lomkou vypíše len nápovedu"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://host:8002"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SSL_ERROR_RX_RECORD_TOO_LONG"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hub na 8000–8002 hovorí ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "len HTTP"
            }), ". Prehliadač neprepisuj na HTTPS"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL počúva na všetkých rozhraniach"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hub je lokálny. V ", (0,jsx_runtime.jsx)(_components.code, {
              children: "postgresql.conf"
            }), " nastav ", (0,jsx_runtime.jsx)(_components.code, {
              children: "listen_addresses = 'localhost'"
            }), " a reštartuj službu"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "port-a-protokol--kto-je-zodpovedný-za-https",
      children: "Port a protokol — kto je zodpovedný za HTTPS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Port nerozhoduje o protokole: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "443"
      }), " je len konvencia. To, či spojenie na porte je šifrované, určuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "program, ktorý na ňom počúva"
      }), ". Hub počúva po HTTP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certifikát pre názov servera nestačí."
        }), " Musí ho predložiť program na porte: buď Hub (ak natívne podporuje TLS — ", (0,jsx_runtime.jsx)(_components.em, {
          children: "otvorená otázka na Sparx"
        }), "), alebo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reverzný proxy"
        }), " pred Hubom (IIS, nginx, Caddy), ktorý TLS ukončí a prepošle na ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:8002"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak na serveri už 80/443 používa iná služba (napr. Pro Cloud Server, Prolaborate), proxy musí bežať na inom porte (napr. 8443)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Po zapnutí HTTPS treba prepísať adresy v Assist klientoch a overiť, či Hub neposiela klientom pôvodné ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://"
        }), " URL."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Certifikát sa obnovuje (60–90 dní); po obnove treba službu reloadnúť."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diagnostika-timeout-chyba-tls-alebo-firewall",
      children: "Diagnostika: timeout, chyba TLS alebo firewall?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podľa chyby v prehliadači vieš, kde hľadať:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Chyba"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo znamená"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kde hľadať"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ERR_CONNECTION_TIMED_OUT"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nc"
            }), " timeout"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spojenie sa ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "vôbec nenadviazalo"
            }), " (nikto neodpovedá)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall (Windows alebo sieťový), nie certifikát"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ERR_CONNECTION_REFUSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Na porte nikto nepočúva"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Služba nebeží alebo počúva inde"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ERR_CERT_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SSL_ERROR_*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spojenie je, zlyhalo šifrovanie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certifikát, HTTP vs HTTPS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Certifikát nikdy nespôsobí timeout."
      }), " Ak stránka „prestala fungovať“ krátko po vydaní certifikátu, ide o náhodu v čase — najprv skontroluj sieť."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postup, ktorý to rozhodne:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Na serveri over, že služba počúva a čo ju drží: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netstat -ano | findstr \":443\""
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tasklist /fi \"pid eq <PID>\""
        }), ". Lokálne spojenie (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Test-NetConnection localhost -Port 443"
        }), ") prejde aj keď firewall blokuje zvonku, preto nič nedokazuje."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skús zvonku z inej siete (mobil cez dáta, nie Wi-Fi) a pomocou ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nc -vz -w 5 <ip> <port>"
        }), ". Ak iný port (napr. RDP 3389) prejde a web porty nie, filtruje sa konkrétne port."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zapni logovanie zahodených spojení vo Windows firewalle a zopakuj pokus:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "netsh advfirewall set allprofiles logging droppedconnections enable\nSelect-String -Path \"$env:SystemRoot\\System32\\LogFiles\\Firewall\\pfirewall.log\" -Pattern \"DROP.* 443 \" | Select -Last 10\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Riadky ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DROP ... RECEIVE"
            }), " s tvojou zdrojovou adresou = blokuje ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows firewall"
            }), " na serveri."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Žiadne riadky = pakety na server nedorazia, zahadzuje ich firewall pred ním (škola, hosting)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Po teste logovanie vypni: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netsh advfirewall set allprofiles logging droppedconnections disable"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "firewall-po-reinštalácii--upgrade-servera",
      children: "Firewall po reinštalácii / upgrade servera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows firewall blokuje všetko prichádzajúce, čo nemá pravidlo. Po ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "upgrade alebo reinštalácii operačného systému"
      }), " sa pravidlá pre služby (webové aplikácie, Pro Cloud Server a pod.) môžu stratiť, hoci služby bežia a počúvajú. Z vnútra servera všetko funguje, zvonku timeout."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skontroluj profil siete (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-NetConnectionProfile"
        }), ") a pravidlá viazané na programy (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-NetFirewallApplicationFilter | ..."
        }), "). Prázdny výsledok = žiadne pravidlá."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Obnov pravidlá pre porty, ktoré majú byť verejné:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "New-NetFirewallRule -DisplayName \"Web HTTPS 443\" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow -Profile Any\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Porty Hubu (8000–8002) pridávaj osobitne a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "s obmedzeným zdrojom"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-RemoteAddress"
        }), "), kým Hub nehovorí HTTPS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Po každej zmene OS si otestuj všetky služby ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zvonku"
        }), ", nielen lokálne."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "certifikát-cez-win-acme-lets-encrypt",
      children: "Certifikát cez win-acme (Let's Encrypt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak už na serveri bežíte certifikáty cez ", (0,jsx_runtime.jsx)(_components.code, {
        children: "win-acme"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "wacs"
      }), "), názov Hubu stačí pridať do zoznamu domén."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zoznam ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--host"
        }), " je ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jeden certifikát pre všetky domény"
        }), ". Chybný názov (preklep v koncovke) zhodí celý beh: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authorization result: invalid"
        }), ", žiaden nový certifikát sa nevydá, starý ostane."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Overenie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "selfhosting"
        }), " ide cez ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP na port 80"
        }), " servera. DNS záznam musí existovať a port 80 musí byť zvonku dosiahnuteľný (pozri firewall vyššie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vydaný certifikát ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hub nepoužije sám"
        }), " — musí ho predložiť Hub (ak podporuje TLS) alebo reverzný proxy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Heslo k PFX ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nepatrí do skriptu"
        }), " v čistom texte. Ulož ho zašifrované pre konkrétny účet (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-Credential | Export-Clixml"
        }), ", načítať cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Import-Clixml"
        }), ") a súbor ochráň oprávneniami (", (0,jsx_runtime.jsx)(_components.code, {
          children: "icacls"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Úloha v Plánovači bežiaca „naprázdno“ býva zablokovaná príkazom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pause"
        }), " v skripte, nesprávnym účtom alebo chýbajúcim ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Run with highest privileges"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak plánovač nefunguje, obnovu treba robiť ručne a mať v kalendári dátum vypršania."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bezpečnosť",
      children: "Bezpečnosť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Porty 8000/8001 povoľ len pre cieľovú sieť (študenti, VPN), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "8002 (Management) len pre administrátora"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bez HTTPS idú heslá po sieti čitateľne. Mimo lokálnej siete HTTPS najprv vyrieš."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heslá (PostgreSQL, Hub admin, PFX) nepatria do skriptov ani do dokumentácie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "poznámky-pre-akademické-nasadenie",
      children: "Poznámky pre akademické nasadenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "65 študentov = licencia na 65 Assist seats (Limited License)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Odporúčam Write Access ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zapnúť"
        }), " — aktívna AI interakcia má vzdelávaciu hodnotu"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Webové rozhranie Hubu znižuje bariéru: študent nepotrebuje inštaláciu, len URL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overiť pred spustením: LAN alebo VPN? → firewall a porty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session History = evidencia aktivity študentov (pedagogická hodnota)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jeden server namiesto N inštalácií AI, centrálna správa licencií a prístupu, prehľad relácií a auditná stopa; študenti môžu AI používať aj z prehliadača bez inštalácie. Najdrahšie kroky inštalácie sú pgvector a príprava prázdnej databázy — poznámky vyššie ušetria hodiny skúšania."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-user-management-user-guide/",
        children: "https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-user-management-user-guide/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-installation-guide/",
        children: "https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-installation-guide/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sparxsystems.com/kernaro/kernaro-ai-hub/",
        children: "https://sparxsystems.com/kernaro/kernaro-ai-hub/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[4] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/pgvector/pgvector",
        children: "https://github.com/pgvector/pgvector"
      }), " (sekcia Windows)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);