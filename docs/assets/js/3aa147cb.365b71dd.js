"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[33725],{

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

/***/ 59979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idCBkIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiI+CiAgPHRpdGxlIGlkPSJ0Ij5LZXJuYXJvIEFJIEh1YiDigJMgYXJjaGl0ZWN0dXJlPC90aXRsZT4KICA8ZGVzYyBpZD0iZCI+V2luZG93cyBTZXJ2ZXIgcnVubmluZyBLZXJuYXJvIEFJIEh1YiAoQUksIFN5bmMgYW5kIE1hbmFnZW1lbnQgcG9ydHMpLCBQb3N0Z3JlU1FMIHdpdGggcGd2ZWN0b3IgYW5kIEVBIEdyYXBoTGluazsgRUEgY2xpZW50cyB3aXRoIHRoZSBBc3Npc3QgcGx1Z2luIGFuZCB3ZWIgYnJvd3NlcnMgY29ubmVjdCBvdmVyIHRoZSBuZXR3b3JrLjwvZGVzYz4KICA8ZGVmcz4KICAgIDxtYXJrZXIgaWQ9ImEiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOCIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjciIG1hcmtlckhlaWdodD0iNyIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDBMMTAgNUwwIDEweiIgZmlsbD0iIzQ3NTU2OSIvPjwvbWFya2VyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ3MCIgZmlsbD0iI2ZmZmZmZiIvPgogIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSIyNzAiIHJ4PSIxMiIgZmlsbD0iI2YxZjVmOSIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjQwIiB5PSI0OCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBmMTcyYSI+V2luZG93cyBTZXJ2ZXIgMjAxOSs8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjYyIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjIxMCIgcng9IjEwIiBmaWxsPSIjZGJlYWZlIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNTgiIHk9Ijg4IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMWUzYThhIj5LZXJuYXJvIEFJIEh1YjwvdGV4dD4KICA8cmVjdCB4PSI1OCIgeT0iMTAyIiB3aWR0aD0iNDQ0IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iNzQiIHk9IjEyMyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzBmMTcyYSI+S2VybmFybyBBSSBQb3J0IDo4MDAwPC90ZXh0PgogIDx0ZXh0IHg9Ijc0IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMzMzQxNTUiPkFJIGVuZ2luZTwvdGV4dD4KICA8cmVjdCB4PSI1OCIgeT0iMTYwIiB3aWR0aD0iNDQ0IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iNzQiIHk9IjE4MSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzBmMTcyYSI+S2VybmFybyBTeW5jIFBvcnQgOjgwMDE8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjE5OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+c3luYyB3aXRoIHRoZSBFQSByZXBvc2l0b3J5PC90ZXh0PgogIDxyZWN0IHg9IjU4IiB5PSIyMTgiIHdpZHRoPSI0NDQiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSI3NCIgeT0iMjM5IiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMGYxNzJhIj5NYW5hZ2VtZW50IFBvcnQgOjgwMDI8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjI1NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+YWRtaW4gcG9ydGFsPC90ZXh0PgogIDxyZWN0IHg9IjU2MCIgeT0iNjIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNkY2ZjZTciIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8dGV4dCB4PSI2NjAiIHk9IjEwNCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzE0NTMyZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UG9zdGdyZVNRTCAxNzwvdGV4dD4KICA8dGV4dCB4PSI2NjAiIHk9IjEyNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE0NTMyZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+KyBwZ3ZlY3RvcjwvdGV4dD4KICA8cmVjdCB4PSI1NjAiIHk9IjE3NiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI5NiIgcng9IjEwIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNjYwIiB5PSIyMTgiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM0YzFkOTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVBIEdyYXBoTGluazwvdGV4dD4KICA8dGV4dCB4PSI2NjAiIHk9IjI0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzRjMWQ5NSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bG9jYWxob3N0OjgwOTA8L3RleHQ+CiAgPHBhdGggZD0iTTUwMiAxMjZINTU4IiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMS41IiBtYXJrZXItZW5kPSJ1cmwoI2EpIi8+CiAgPHBhdGggZD0iTTUwMiAxOTBMNTU4IDIyMCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLWVuZD0idXJsKCNhKSIvPgogIDxwYXRoIGQ9Ik0yMDAgMjkwVjM1MCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYSkiLz4KICA8cGF0aCBkPSJNNjAwIDI5MFYzNTAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIiBtYXJrZXItZW5kPSJ1cmwoI2EpIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjUiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzMzNDE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TEFOIC8gVlBOIChIVFRQKTwvdGV4dD4KICA8cmVjdCB4PSIyMCIgeT0iMzUwIiB3aWR0aD0iMzcwIiBoZWlnaHQ9IjEwMCIgcng9IjEyIiBmaWxsPSIjZmVmM2M3IiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNDAiIHk9IjM3OCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzc4MzUwZiI+RUEgY2xpZW50IOKAkyBLZXJuYXJvIEFzc2lzdDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDA4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMGYxNzJhIj5wbHVnaW4g4oaSIHNpZ24gaW4gdG8gSHViPC90ZXh0PgogIDxyZWN0IHg9IjQxMCIgeT0iMzUwIiB3aWR0aD0iMzcwIiBoZWlnaHQ9IjEwMCIgcng9IjEyIiBmaWxsPSIjZmNlN2YzIiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNDMwIiB5PSIzNzgiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM4MzE4NDMiPldlYiBicm93c2VyPC90ZXh0PgogIDx0ZXh0IHg9IjQzMCIgeT0iNDA4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMGYxNzJhIj5qdXN0IHRoZSBIdWIgVVJMLCBubyBpbnN0YWxsYXRpb248L3RleHQ+Cjwvc3ZnPgo=");

/***/ }),

/***/ 65231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000121_kernaro_ai_hub_index_md_3aa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000121-kernaro-ai-hub-index-md-3aa.json
const site_docs_en_knifes_k_000121_kernaro_ai_hub_index_md_3aa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000121-Kernaro-AI-Hub/K000121_EN","title":"K000121 – Kernaro AI Hub: centralized AI access for teams","description":"How to build Kernaro AI Hub as a central AI server for a team or class on Windows Server: installation order, pgvector, preparing the database, license, users and what the guides do not make obvious (HTTP vs HTTPS, ports, DNS). Students can also use AI from a browser without installing anything.","source":"@site/docs/en/knifes/K000121-Kernaro-AI-Hub/index.md","sourceDirName":"en/knifes/K000121-Kernaro-AI-Hub","slug":"/en/knifes/K000121-Kernaro-AI-Hub/","permalink":"/en/knifes/K000121-Kernaro-AI-Hub/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"kernaro","permalink":"/doc-tags/kernaro"},{"inline":true,"label":"ea","permalink":"/doc-tags/ea"},{"inline":true,"label":"ai-hub","permalink":"/doc-tags/ai-hub"},{"inline":true,"label":"licensing","permalink":"/doc-tags/licensing"},{"inline":true,"label":"windows-server","permalink":"/doc-tags/windows-server"},{"inline":true,"label":"postgresql","permalink":"/doc-tags/postgresql"},{"inline":true,"label":"pgvector","permalink":"/doc-tags/pgvector"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-18T12:24:05.538730+00:00","fm_version_comment":"","id":"K000121_EN","guid":"9773f99f-da26-407c-8822-9150d1eb027a","dao":"knife","title":"K000121 – Kernaro AI Hub: centralized AI access for teams","description":"How to build Kernaro AI Hub as a central AI server for a team or class on Windows Server: installation order, pgvector, preparing the database, license, users and what the guides do not make obvious (HTTP vs HTTPS, ports, DNS). Students can also use AI from a browser without installing anything.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"","tags":["kernaro","ea","ai-hub","licensing","windows-server","postgresql","pgvector"],"locale":"en","created":"2026-10-18 14:24","modified":"2026-10-18 20:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000119 – How to create a clean clone of a class repository","permalink":"/en/knifes/K000119-clean-clone-of-a-class-repository/"},"next":{"title":"KNIFE – Knowledge In Friendly Examples","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000121-Kernaro-AI-Hub/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-18T12:24:05.538730+00:00',
	fm_version_comment: '',
	id: 'K000121_EN',
	guid: '9773f99f-da26-407c-8822-9150d1eb027a',
	dao: 'knife',
	title: 'K000121 – Kernaro AI Hub: centralized AI access for teams',
	description: 'How to build Kernaro AI Hub as a central AI server for a team or class on Windows Server: installation order, pgvector, preparing the database, license, users and what the guides do not make obvious (HTTP vs HTTPS, ports, DNS). Students can also use AI from a browser without installing anything.',
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
	locale: 'en',
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
const contentTitle = 'K000121 – Kernaro AI Hub: centralized AI access for teams';

const assets = {

};



const toc = [{
  "value": "🎯 What it solves (purpose, goal)",
  "id": "-what-it-solves-purpose-goal",
  "level": 2
}, {
  "value": "🧩 How it solves it (principle)",
  "id": "-how-it-solves-it-principle",
  "level": 2
}, {
  "value": "🧪 How to use it (application)",
  "id": "-how-to-use-it-application",
  "level": 2
}, {
  "value": "1. PostgreSQL 17",
  "id": "1-postgresql-17",
  "level": 3
}, {
  "value": "2. pgvector (build on Windows)",
  "id": "2-pgvector-build-on-windows",
  "level": 3
}, {
  "value": "3. EA GraphLink",
  "id": "3-ea-graphlink",
  "level": 3
}, {
  "value": "4. Preparing the database",
  "id": "4-preparing-the-database",
  "level": 3
}, {
  "value": "5. Kernaro AI Hub (installer)",
  "id": "5-kernaro-ai-hub-installer",
  "level": 3
}, {
  "value": "6. First start and license",
  "id": "6-first-start-and-license",
  "level": 3
}, {
  "value": "7. User management",
  "id": "7-user-management",
  "level": 3
}, {
  "value": "8. Session monitoring",
  "id": "8-session-monitoring",
  "level": 3
}, {
  "value": "💡 Tips and notes — what is not obvious",
  "id": "-tips-and-notes--what-is-not-obvious",
  "level": 2
}, {
  "value": "Port and protocol — who is responsible for HTTPS?",
  "id": "port-and-protocol--who-is-responsible-for-https",
  "level": 3
}, {
  "value": "Diagnostics: timeout, TLS error or firewall?",
  "id": "diagnostics-timeout-tls-error-or-firewall",
  "level": 3
}, {
  "value": "Firewall after an OS reinstall / upgrade",
  "id": "firewall-after-an-os-reinstall--upgrade",
  "level": 3
}, {
  "value": "Certificate via win-acme (Let&#39;s Encrypt)",
  "id": "certificate-via-win-acme-lets-encrypt",
  "level": 3
}, {
  "value": "Pro Cloud Server (PCS) over HTTPS",
  "id": "pro-cloud-server-pcs-over-https",
  "level": 3
}, {
  "value": "Service ports: table and testing",
  "id": "service-ports-table-and-testing",
  "level": 3
}, {
  "value": "Security",
  "id": "security",
  "level": 3
}, {
  "value": "Notes for academic deployment",
  "id": "notes-for-academic-deployment",
  "level": 3
}, {
  "value": "✅ Value / Summary",
  "id": "-value--summary",
  "level": 2
}, {
  "value": "Sources",
  "id": "sources",
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
        id: "k000121--kernaro-ai-hub-centralized-ai-access-for-teams",
        children: "K000121 – Kernaro AI Hub: centralized AI access for teams"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Series:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level:"
        }), " Intermediate\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kernaro"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ea"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-hub"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "licensing"
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
        children: "Version:"
      }), " 1.4 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-10-18 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "K000104 – SPARX AI Kernaro in SDLC"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves-purpose-goal",
      children: "🎯 What it solves (purpose, goal)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["How to build ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernaro AI Hub"
      }), " — one central AI server for a team or class — and what the guides do not make obvious. The findings below come from a real installation (Windows Server 2019, 2026-10-18, Management v1.1.0.1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro AI is used in two ways that can be combined:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "For whom / where"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it needs"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro Assist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The student works directly inside Sparx Enterprise Architect; AI helps create and update model elements in natural language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assist installer, Hub address, an assigned seat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro AI Hub – web"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The student uses AI in a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "browser"
            }), " via the Hub's central address — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no installation"
            }), " on their own computer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just the Hub URL and assigned permissions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Hub also acts as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assist license manager"
      }), " (License Manager): you assign seats and monitor sessions. For Kernaro in an SDLC context see K000104."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it-principle",
      children: "🧩 How it solves it (principle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI and administration run on one server; clients (Assist in EA and a web browser) connect to it over the network."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Kernaro AI Hub – architecture",
        src: (__webpack_require__(59979)/* ["default"] */ .A) + "",
        width: "800",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Components, to be installed in this order:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Server 2019+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "admin rights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL 16 or 17"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not 18 — Sparx specifies 16/17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "built from source (Git + VS Build Tools)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA GraphLink"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "before"
            }), " the Hub, shipped in the Hub ZIP"]
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
            children: "License file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "issued for the server's Machine ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro Assist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "only on clients, separate installer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ℹ️ Installers are provided by Sparx Systems after approval (academic Workgroup license). Hub and GraphLink come in one ZIP, Assist in another. Ask for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "latest versions"
        }), " — Hub and Assist versions should match."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it-application",
      children: "🧪 How to use it (application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-postgresql-17",
      children: "1. PostgreSQL 17"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Installer from postgresql.org (EDB), port ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5432"
      }), ", default locale, Stack Builder not needed. Write down the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "postgres"
      }), " user's password."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Watch the version:"
      }), " the newest installer may be 18. The Hub requires 16/17, so download 17."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-pgvector-build-on-windows",
      children: "2. pgvector (build on Windows)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The build needs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Visual Studio Build Tools 2022"
      }), " (workload ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Desktop development with C++"
      }), "; MSVC v143 x64/x86 and the Windows SDK are enough, about 7 GB) and Git."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cl"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nmake"
        }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not in PATH"
        }), " in a plain PowerShell. Open ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "x64 Native Tools Command Prompt for VS 2022"
        }), " as administrator. Check: both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cl"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nmake /?"
        }), " must print a version."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "set \"PGROOT=C:\\Program Files\\PostgreSQL\\17\"\ncd %TEMP%\ngit clone --branch v0.8.7 https://github.com/pgvector/pgvector.git\ncd pgvector\nnmake /F Makefile.win\nnmake /F Makefile.win install\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Find the current tag at github.com/pgvector/pgvector (here v0.8.7). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Do not enable the extension in the database by hand"
      }), " — the Hub installer does it (see below)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-ea-graphlink",
      children: "3. EA GraphLink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The installer asks for a host and port. With the Hub on the same server keep ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "8090"
      }), ". Check: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "netstat -ano | findstr :8090"
      }), " must show ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LISTENING"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-preparing-the-database",
      children: "4. Preparing the database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Hub installer does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " create the database and requires an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "empty"
      }), " one (errors ", (0,jsx_runtime.jsx)(_components.em, {
        children: "database does not exist"
      }), " / ", (0,jsx_runtime.jsx)(_components.em, {
        children: "extension already exists in this database"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE DATABASE kernaro;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["User: superuser (", (0,jsx_runtime.jsx)(_components.code, {
        children: "postgres"
      }), "), schema ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kernaroschema"
      }), ". If you enabled ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE EXTENSION vector"
      }), " by mistake, drop the database and recreate it empty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-kernaro-ai-hub-installer",
      children: "5. Kernaro AI Hub (installer)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Screens in order: license agreement → destination folder → ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Run Schema"
      }), " → PostgreSQL connection → ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Service Configuration"
      }), " → summary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Service Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Host"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["the server's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS name"
            }), ", e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kernaro.example.org"
            }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
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
            }), " + strong password (min. 8 chars, upper, lower, digit, special)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before installing, check the ports are free:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "netstat -ano | findstr \":8000 :8001 :8002\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Empty output = free."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS:"
      }), " if the server has no DNS record, create an A record (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kernaro"
      }), " → server IP, TTL 300) and verify with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nslookup kernaro.example.org"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-first-start-and-license",
      children: "6. First start and license"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After installation the portal opens at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://<host>:8002"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Administrator Account"
        }), " page — finish it ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "immediately"
        }), ". Until the account exists, anyone who can reach port 8002 can create it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Log in; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License Configuration"
        }), " shows the server's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine ID"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Send the Machine ID to Sparx (the contact from the academic license). They return a license ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "file"
        }), " for Kernaro AI and EA GraphLink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the portal: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Upload license file → Activate License"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-user-management",
      children: "7. User management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two account types: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin"
      }), " (full access) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular"
      }), " (restricted access)."]
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
        children: ["Set ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Access"
        }), " (Enabled = create/edit content; Disabled = read only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hub tracks seats: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Available / Assigned / Total"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limited License shows seat counters; Unlimited License hides them; management works identically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-session-monitoring",
      children: "8. Session monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "User & Access Control → Assist Active Sessions"
        }), " — User, Machine, Last Used, IP Address, Status. Admin can revoke individual or all sessions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit log:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Assist Session History"
        }), " — Sign-In, Sign-Out, Session Refresh, Revocation, Access Denied, Expiration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes--what-is-not-obvious",
      children: "💡 Tips and notes — what is not obvious"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause / solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cl"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nmake"
            }), " not found"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["You are in PowerShell. Use ", (0,jsx_runtime.jsx)(_components.em, {
              children: "x64 Native Tools Command Prompt for VS 2022"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "database \"kernaro\" does not exist"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The Hub does not create it. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE DATABASE kernaro;"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extension(s) already exist … 'vector'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The database must be unused. Drop it, create an empty one, leave the extension to the installer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Hub requires 16/17. Uninstall, install 17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://host:8002"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SSL_ERROR_RX_RECORD_TOO_LONG"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The Hub on 8000–8002 speaks ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTP only"
            }), ". Do not let the browser upgrade to HTTPS"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL listens on all interfaces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The Hub is local. Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "listen_addresses = 'localhost'"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "postgresql.conf"
            }), " and restart the service"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "port-and-protocol--who-is-responsible-for-https",
      children: "Port and protocol — who is responsible for HTTPS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A port does not decide the protocol: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "443"
      }), " is just a convention. Whether a connection on a port is encrypted is decided by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the program listening on it"
      }), ". The Hub listens on HTTP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A certificate for the server name is not enough."
        }), " The program on the port has to present it: either the Hub (if it supports TLS natively — ", (0,jsx_runtime.jsx)(_components.em, {
          children: "open question for Sparx"
        }), "), or a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reverse proxy"
        }), " in front of the Hub (IIS, nginx, Caddy) that terminates TLS and forwards to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:8002"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If 80/443 are already used by another service on the server (e.g. Pro Cloud Server, Prolaborate), the proxy has to run on another port (e.g. 8443)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After enabling HTTPS, update the addresses in Assist clients and check that the Hub does not hand the original ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://"
        }), " URLs to clients."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The certificate renews (every 60–90 days); the service must be reloaded after renewal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diagnostics-timeout-tls-error-or-firewall",
      children: "Diagnostics: timeout, TLS error or firewall?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The browser error tells you where to look:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where to look"
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
            children: ["The connection was ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "never established"
            }), " (nobody answers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall (Windows or network), not the certificate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ERR_CONNECTION_REFUSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing is listening on the port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service not running or listening elsewhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ERR_CERT_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SSL_ERROR_*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The connection exists, encryption failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate, HTTP vs HTTPS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A certificate never causes a timeout."
      }), " If a site \"stopped working\" shortly after a certificate was issued, the timing is a coincidence — check the network first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The procedure that settles it:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On the server confirm the service listens and which process holds the port: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netstat -ano | findstr \":443\""
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tasklist /fi \"pid eq <PID>\""
        }), ". A local connection (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Test-NetConnection localhost -Port 443"
        }), ") succeeds even when the firewall blocks external traffic, so it proves nothing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try from outside from another network (mobile data, not Wi-Fi) and with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nc -vz -w 5 <ip> <port>"
        }), ". If another port (e.g. RDP 3389) works and web ports do not, one specific port is being filtered."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Turn on dropped-connection logging in Windows Firewall and repeat the attempt:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "netsh advfirewall set allprofiles logging droppedconnections enable\nSelect-String -Path \"$env:SystemRoot\\System32\\LogFiles\\Firewall\\pfirewall.log\" -Pattern \"DROP.* 443 \" | Select -Last 10\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DROP ... RECEIVE"
            }), " lines with your source address = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows Firewall"
            }), " on the server is blocking."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No lines = packets never reach the server; a firewall in front of it (campus, hosting) drops them."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Turn logging off afterwards: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netsh advfirewall set allprofiles logging droppedconnections disable"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "firewall-after-an-os-reinstall--upgrade",
      children: "Firewall after an OS reinstall / upgrade"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows Firewall blocks everything inbound that has no rule. After an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OS upgrade or reinstall"
      }), ", the rules for services (web applications, Pro Cloud Server etc.) can be lost although the services run and listen. Everything works from inside the server, but times out from outside."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check the network profile (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-NetConnectionProfile"
        }), ") and program-bound rules (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-NetFirewallApplicationFilter | ..."
        }), "). An empty result = no rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Restore rules for ports that should be public:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "New-NetFirewallRule -DisplayName \"Web HTTPS 443\" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow -Profile Any\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the Hub ports (8000–8002) separately and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "restrict the source"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-RemoteAddress"
        }), ") as long as the Hub speaks plain HTTP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After every OS change, test all services ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "from outside"
        }), ", not just locally."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "certificate-via-win-acme-lets-encrypt",
      children: "Certificate via win-acme (Let's Encrypt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you already run certificates with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "win-acme"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "wacs"
      }), "), just add the Hub's name to the host list."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--host"
        }), " list is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one certificate for all domains"
        }), ". A wrong name (typo in the TLD) fails the whole run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authorization result: invalid"
        }), ", no new certificate is issued, the old one stays."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "selfhosting"
        }), " validation goes over ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP on the server's port 80"
        }), ". The DNS record must exist and port 80 must be reachable from outside (see the firewall above)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The issued certificate is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not picked up by the Hub on its own"
        }), " — the Hub (if it supports TLS) or a reverse proxy has to present it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The PFX password does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not belong in the script"
        }), " in plain text. Store it encrypted for a specific account (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get-Credential | Export-Clixml"
        }), ", read it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Import-Clixml"
        }), ") and protect the file with permissions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "icacls"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A scheduled task that \"runs idle\" is often blocked by a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pause"
        }), " in the script, the wrong account, or a missing ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Run with highest privileges"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the scheduler does not work, renewal must be done by hand — keep the expiry date in a calendar."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pro-cloud-server-pcs-over-https",
      children: "Pro Cloud Server (PCS) over HTTPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If Sparx Pro Cloud Server (EA cloud connection) runs on the same server, its HTTPS port needs its own certificate in a different format than the Hub."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Files:"
        }), " PCS reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server.pem"
        }), " (private key and certificate) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cacert.pem"
        }), " (shipped, trust path) ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["from the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Service"
          }), " folder"]
        }), " of its installation. A port with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRE_SSL=1"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SSProCloud.config"
        }), " does not start without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server.pem"
        }), ". Nothing else is configured."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PFX → PEM conversion"
        }), " (the win-acme certificate is a PFX). Newer OpenSSL 3 rejects an old PFX with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC2-40-CBC ... unsupported"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-legacy"
        }), " helps if the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "legacy.dll"
        }), " module is available. It usually ships in Git for Windows (look for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "legacy.dll"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "openssl.exe"
        }), " in the same tree, e.g. under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ucrt64"
        }), "):", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "set \"PFXPASS=<password>\"\nopenssl pkcs12 -legacy -in cert.pfx -passin env:PFXPASS -nodes -out server.pem\nset \"PFXPASS=\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "env:"
        }), " takes the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "variable name"
        }), ", not the password itself. Do not put the password on the command line. The resulting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server.pem"
        }), " holds an unencrypted key — restrict access to it and delete working copies after copying."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart"
        }), " the PCS service, then verify: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "netstat -ano | findstr \":<port>\""
        }), ". After the restart PCS starts listening on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all other HTTPS ports"
        }), " in its configuration too."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beware of a clash with a web app:"
        }), " if PCS also has port ", (0,jsx_runtime.jsx)(_components.code, {
          children: "443"
        }), " configured and another application (e.g. Prolaborate) already uses it, adding ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server.pem"
        }), " makes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "both"
        }), " bind it. A 443 definition with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MODEL_AUTHENTICATION=0"
        }), " would also expose HTTPS without model authentication. Remove ports you do not need from the configuration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After every certificate renewal regenerate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server.pem"
        }), " and restart PCS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connecting in EA (Cloud Connection):"
      }), " the protocol must match the port — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http"
      }), " for HTTP ports, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https"
      }), " for the HTTPS port. Switching the protocol in the dialog ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "overwrites the port automatically"
      }), " (e.g. to 80), so check the port after every change. Enter the server as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name from the certificate"
      }), ", not an IP. The model name must match the alias in ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Database Managers"
      }), " exactly; otherwise you get ", (0,jsx_runtime.jsx)(_components.code, {
        children: "There is no database manager configured for the requested repository"
      }), ". A port with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Model"
      }), " authentication triggers two sign-in prompts after connecting (HTTP and EA)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Error ", (0,jsx_runtime.jsx)(_components.code, {
          children: "12029"
        })]
      }), " (\"The attempt to connect to the server failed\") means the connection failed at the TCP/TLS level. If the URL works in a browser on the server but not from another computer, and Windows Firewall's log shows no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DROP"
      }), ", the port is being dropped by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the network in front of the server"
      }), " (campus or hosting firewall) and its administrator has to open it. Non-standard ports (e.g. 1805) are often filtered this way, 80 and 443 usually are not. A hosting often allows only selected ports or a range (in our case 8000–10000), so choose the PCS HTTPS port from the allowed range (e.g. 8443), not 1805."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-ports-table-and-testing",
      children: "Service ports: table and testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When deploying on a server that also hosts other services, write the ports down in one table (also for the request to the network administrator and as a basis for next year):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "From outside"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pro Cloud Server (HTTP, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Model"
            }), " authentication)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA cloud connection, certificate validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "another web application (HTTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "web application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3389"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remote administration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro AI Hub (AI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI for students"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro AI Hub (Sync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "document processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro AI Hub (management)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub administration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes (admin only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pro Cloud Server (HTTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encrypted EA cloud connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5432"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "server only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "805"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "server only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MariaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "model databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "server only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA GraphLink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service for the Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1803"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "server only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pro Cloud Server (configuration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCS administration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3306, 80, 443"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "databases at the hosting, internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "models, certificates, updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n/a"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two layers must allow a port:"
      }), " Windows Firewall on the server and, possibly, a firewall or ", (0,jsx_runtime.jsx)(_components.em, {
        children: "security group"
      }), " of the hosting in front of it. The Windows Firewall log only shows what it dropped itself. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DROP"
      }), " in the log means Windows Firewall is the culprit; if the log is empty and the connection times out, the network in front of the server drops the port and its administrator has to allow it. Send the administrator the list of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ports you actually need"
      }), " (not a whole range) and remove broad temporary rules after testing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to test a port properly from outside."
      }), " From another computer: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nc -vz -w 5 <host> <port>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "succeeded"
        }), " — the path is open and something listens on the port."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Operation timed out"
        }), " — nobody acknowledged the packets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Careful: on a port where ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nothing listens"
      }), " on the server, Windows often does not answer at all, so you get ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Operation timed out"
      }), " even when everything is allowed (and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connection refused"
      }), " never arrives). Test a closed port with a temporary listener on the server:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "$l = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, 9000); $l.Start()\n# test from the other computer: nc -vz -w 5 <host> 9000\n$l.Stop()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nc"
      }), " reports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "succeeded"
      }), ", the path is open. Do not close the PowerShell window during the test."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security",
      children: "Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ports 8000/8001 only to the target network (students, VPN), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "8002 (Management) only to the administrator"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Without HTTPS passwords travel readable over the network. Solve HTTPS first before exposing outside the local network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Passwords (PostgreSQL, Hub admin, PFX) do not belong in scripts or documentation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notes-for-academic-deployment",
      children: "Notes for academic deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "65 students = license for 65 Assist seats (Limited License)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write Access recommended ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enabled"
        }), " — active AI interaction has educational value"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Hub's web interface lowers the barrier: students need no installation, only a URL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify before launch: LAN or VPN? → firewall and ports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session History = student activity log (pedagogical value)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-value--summary",
      children: "✅ Value / Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One server instead of N AI installations, central license and access management, an overview of sessions and an audit trail; students can also use AI from a browser without installing anything. The costliest installation steps are pgvector and preparing an empty database — the notes above save hours of trial and error."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
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
      }), " (Windows section)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG_EN",
          children: "⬅ KNIFES – Overview"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_LIST_EN",
          children: "List"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS_EN",
          children: "Details"
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