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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idCBkIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiI+CiAgPHRpdGxlIGlkPSJ0Ij5LZXJuYXJvIEFJIEh1YiDigJMgYXJjaGl0ZWt0w7pyYTwvdGl0bGU+CiAgPGRlc2MgaWQ9ImQiPldpbmRvd3MgU2VydmVyIHMgS2VybmFybyBBSSBIdWIgKEFJLCBTeW5jIGEgTWFuYWdlbWVudCBwb3J0KSBhIFBvc3RncmVTUUwgcyBwZ3ZlY3RvcjsgRUEga2xpZW50aSBzYSBwcmlww6FqYWrDuiBjZXogTEFOLjwvZGVzYz4KICA8ZGVmcz4KICAgIDxtYXJrZXIgaWQ9ImEiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOCIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjciIG1hcmtlckhlaWdodD0iNyIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDBMMTAgNUwwIDEweiIgZmlsbD0iIzQ3NTU2OSIvPjwvbWFya2VyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ3MCIgZmlsbD0iI2ZmZmZmZiIvPgogIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSIyNzAiIHJ4PSIxMiIgZmlsbD0iI2YxZjVmOSIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjQwIiB5PSI0OCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBmMTcyYSI+V2luZG93cyBTZXJ2ZXIgMjAxOSs8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjYyIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjIxMCIgcng9IjEwIiBmaWxsPSIjZGJlYWZlIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNTgiIHk9Ijg4IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMWUzYThhIj5LZXJuYXJvIEFJIEh1YjwvdGV4dD4KICA8cmVjdCB4PSI1OCIgeT0iMTAyIiB3aWR0aD0iNDQ0IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iNzQiIHk9IjEyMyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzBmMTcyYSI+S2VybmFybyBBSSBQb3J0PC90ZXh0PgogIDx0ZXh0IHg9Ijc0IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMzMzQxNTUiPkFJIGVuZ2luZTwvdGV4dD4KICA8cmVjdCB4PSI1OCIgeT0iMTYwIiB3aWR0aD0iNDQ0IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iNzQiIHk9IjE4MSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzBmMTcyYSI+S2VybmFybyBTeW5jIFBvcnQ8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjE5OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+c3luY2hyb25pesOhY2lhIHMgRUEgcmVwb3ppdMOhcm9tPC90ZXh0PgogIDxyZWN0IHg9IjU4IiB5PSIyMTgiIHdpZHRoPSI0NDQiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSI3NCIgeT0iMjM5IiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMGYxNzJhIj5NYW5hZ2VtZW50IFBvcnQ8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjI1NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+QWRtaW4gcG9ydMOhbDwvdGV4dD4KICA8cmVjdCB4PSI1NjAiIHk9IjYyIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIxMCIgcng9IjEwIiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiMxNmEzNGEiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNjYwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxNDUzMmQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBvc3RncmVTUUwgMTYvMTc8L3RleHQ+CiAgPHRleHQgeD0iNjYwIiB5PSIxNzIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNDUzMmQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPisgcGd2ZWN0b3I8L3RleHQ+CiAgPHBhdGggZD0iTTUwMiAxMjZINTU4IiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMS41IiBtYXJrZXItZW5kPSJ1cmwoI2EpIi8+CiAgPHBhdGggZD0iTTQwMCAyOTBWMzUwIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLXN0YXJ0PSJ1cmwoI2EpIiBtYXJrZXItZW5kPSJ1cmwoI2EpIi8+CiAgPHRleHQgeD0iNDE0IiB5PSIzMjUiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzMzNDE1NSI+TEFOIC8gaW50cmFuZXQ8L3RleHQ+CiAgPHJlY3QgeD0iMjAiIHk9IjM1MCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMiIgZmlsbD0iI2ZlZjNjNyIgc3Ryb2tlPSIjZDk3NzA2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjQwIiB5PSIzNzgiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM3ODM1MGYiPkVBIGtsaWVudCAoa2HFvmTDvSDFoXR1ZGVudCk8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM5MiIgd2lkdGg9IjcyMCIgaGVpZ2h0PSI0NCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2Q5NzcwNiIvPgogIDx0ZXh0IHg9IjU2IiB5PSI0MjAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwZjE3MmEiPktlcm5hcm8gQXNzaXN0IHBsdWdpbiDihpIgcHJpaGzDoXNlbmllIG5hIEh1YiDihpIgQUkgZnVua2NpZTwvdGV4dD4KPC9zdmc+Cg==");

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
const site_docs_sk_knifes_k_000121_kernaro_ai_hub_index_md_f22_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000121-Kernaro-AI-Hub/K000121","title":"K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím","description":"Ako nasadiť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu: architektúra, prerekvizity, pridelenie licencií, monitoring relácií. Pre správcov EA prostredia, vrátane akademického nasadenia (65 študentov).","source":"@site/docs/sk/knifes/K000121-Kernaro-AI-Hub/index.md","sourceDirName":"sk/knifes/K000121-Kernaro-AI-Hub","slug":"/sk/knifes/K000121-Kernaro-AI-Hub/","permalink":"/sk/knifes/K000121-Kernaro-AI-Hub/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"kernaro","permalink":"/doc-tags/kernaro"},{"inline":true,"label":"ea","permalink":"/doc-tags/ea"},{"inline":true,"label":"ai-hub","permalink":"/doc-tags/ai-hub"},{"inline":true,"label":"licensing","permalink":"/doc-tags/licensing"},{"inline":true,"label":"windows-server","permalink":"/doc-tags/windows-server"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-18T12:24:05.506055+00:00","fm_version_comment":"","id":"K000121","guid":"0c6a9ff5-8fe2-40ec-8e2f-d32f9172455c","dao":"knife","title":"K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím","description":"Ako nasadiť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu: architektúra, prerekvizity, pridelenie licencií, monitoring relácií. Pre správcov EA prostredia, vrátane akademického nasadenia (65 študentov).","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"","tags":["kernaro","ea","ai-hub","licensing","windows-server"],"locale":"sk","created":"2026-10-18 14:24","modified":"2026-10-18 14:24","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000119 – Ako si vytvoriť čistý klon triedneho repozitára","permalink":"/sk/knifes/K000119-klon-triedneho-repozitara/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
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
	description: 'Ako nasadiť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu: architektúra, prerekvizity, pridelenie licencií, monitoring relácií. Pre správcov EA prostredia, vrátane akademického nasadenia (65 študentov).',
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
		'windows-server'
	],
	locale: 'sk',
	created: '2026-10-18 14:24',
	modified: '2026-10-18 14:24',
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
  "value": "Prerekvizity inštalácie (server)",
  "id": "prerekvizity-inštalácie-server",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Správa používateľov",
  "id": "správa-používateľov",
  "level": 3
}, {
  "value": "Monitoring sessions",
  "id": "monitoring-sessions",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
          children: "sprava-pouzivatelov"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "windows-server"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verzia:"
      }), " 1.0 | ", (0,jsx_runtime.jsx)(_components.strong, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro AI existuje v dvoch modeloch nasadenia:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kde beží AI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pre koho"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro Assist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin na každom EA klientovi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 licencia = 1 stroj"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro AI Hub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centrálny server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 server = N používateľov"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento KNIFE pokrýva ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hub model"
      }), " — vhodný pre tímové alebo akademické prostredie. Kontext použitia Kernaro v SDLC nájdeš v K000104."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI beží na jednom serveri; EA klienti sa naň prihlasujú cez plugin Kernaro Assist a Hub rozdeľuje licenčné miesta (seats) a sleduje relácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Kernaro AI Hub – architektúra",
        src: (__webpack_require__(29406)/* ["default"] */ .A) + "",
        width: "800",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerekvizity-inštalácie-server",
      children: "Prerekvizity inštalácie (server)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Komponent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zdroj"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Server 2019+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL 16 alebo 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "postgresql.org"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub: pgvector/pgvector (build cez VS C++ x64)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "git-scm.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visual Studio Community (C++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visualstudio.microsoft.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EA Graphlink"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["inštalovať ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "pred"
            }), " Kernaro Hub"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KernaroAI-Setup.exe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vyžiadať od Sparx Systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠️ Inštalátor nie je voľne dostupný — vyžiadaj ho cez „Request Kernaro Hub Installer\" na sparxsystems.com/kernaro."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "správa-používateľov",
      children: "Správa používateľov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dva typy účtov: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin"
      }), " (plný prístup) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular"
      }), " (obmedzený prístup)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tok pridelenia licencie:"
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
      children: "Limited License zobrazuje počítadlá seats. Unlimited License ich skrýva; správa funguje rovnako."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring-sessions",
      children: "Monitoring sessions"
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
        children: "Overiť pred spustením: LAN alebo VPN? → ovplyvní konfiguráciu firewallu a portov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session History = evidencia aktivity študentov (pedagogická hodnota)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jeden server namiesto N inštalácií AI: centrálna správa licencií, prehľad o aktívnych reláciách a auditná stopa. Pre tím alebo triedu je to jednoduchšie ako licencovať každý stroj zvlášť."
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