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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idCBkIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiI+CiAgPHRpdGxlIGlkPSJ0Ij5LZXJuYXJvIEFJIEh1YiDigJMgYXJjaGl0ZWN0dXJlPC90aXRsZT4KICA8ZGVzYyBpZD0iZCI+V2luZG93cyBTZXJ2ZXIgcnVubmluZyBLZXJuYXJvIEFJIEh1YiAoQUksIFN5bmMgYW5kIE1hbmFnZW1lbnQgcG9ydHMpIGFuZCBQb3N0Z3JlU1FMIHdpdGggcGd2ZWN0b3I7IEVBIGNsaWVudHMgY29ubmVjdCBvdmVyIHRoZSBMQU4uPC9kZXNjPgogIDxkZWZzPgogICAgPG1hcmtlciBpZD0iYSIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI4IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNyIgbWFya2VySGVpZ2h0PSI3IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+PHBhdGggZD0iTTAgMEwxMCA1TDAgMTB6IiBmaWxsPSIjNDc1NTY5Ii8+PC9tYXJrZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDcwIiBmaWxsPSIjZmZmZmZmIi8+CiAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjI3MCIgcng9IjEyIiBmaWxsPSIjZjFmNWY5IiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNDAiIHk9IjQ4IiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMGYxNzJhIj5XaW5kb3dzIFNlcnZlciAyMDE5KzwvdGV4dD4KICA8cmVjdCB4PSI0MCIgeT0iNjIiIHdpZHRoPSI0ODAiIGhlaWdodD0iMjEwIiByeD0iMTAiIGZpbGw9IiNkYmVhZmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8dGV4dCB4PSI1OCIgeT0iODgiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxZTNhOGEiPktlcm5hcm8gQUkgSHViPC90ZXh0PgogIDxyZWN0IHg9IjU4IiB5PSIxMDIiIHdpZHRoPSI0NDQiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSI3NCIgeT0iMTIzIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMGYxNzJhIj5LZXJuYXJvIEFJIFBvcnQ8L3RleHQ+CiAgPHRleHQgeD0iNzQiIHk9IjE0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzNDE1NSI+QUkgZW5naW5lPC90ZXh0PgogIDxyZWN0IHg9IjU4IiB5PSIxNjAiIHdpZHRoPSI0NDQiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSI3NCIgeT0iMTgxIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMGYxNzJhIj5LZXJuYXJvIFN5bmMgUG9ydDwvdGV4dD4KICA8dGV4dCB4PSI3NCIgeT0iMTk4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzM0MTU1Ij5zeW5jIHdpdGggdGhlIEVBIHJlcG9zaXRvcnk8L3RleHQ+CiAgPHJlY3QgeD0iNTgiIHk9IjIxOCIgd2lkdGg9IjQ0NCIgaGVpZ2h0PSI0OCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzI1NjNlYiIvPgogIDx0ZXh0IHg9Ijc0IiB5PSIyMzkiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMwZjE3MmEiPk1hbmFnZW1lbnQgUG9ydDwvdGV4dD4KICA8dGV4dCB4PSI3NCIgeT0iMjU2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzM0MTU1Ij5BZG1pbiBwb3J0YWw8L3RleHQ+CiAgPHJlY3QgeD0iNTYwIiB5PSI2MiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMTAiIHJ4PSIxMCIgZmlsbD0iI2RjZmNlNyIgc3Ryb2tlPSIjMTZhMzRhIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjY2MCIgeT0iMTUwIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMTQ1MzJkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qb3N0Z3JlU1FMIDE2LzE3PC90ZXh0PgogIDx0ZXh0IHg9IjY2MCIgeT0iMTcyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTQ1MzJkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4rIHBndmVjdG9yPC90ZXh0PgogIDxwYXRoIGQ9Ik01MDIgMTI2SDU1OCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLWVuZD0idXJsKCNhKSIvPgogIDxwYXRoIGQ9Ik00MDAgMjkwVjM1MCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1zdGFydD0idXJsKCNhKSIgbWFya2VyLWVuZD0idXJsKCNhKSIvPgogIDx0ZXh0IHg9IjQxNCIgeT0iMzI1IiBmb250LXNpemU9IjEzIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMzMzQxNTUiPkxBTiAvIGludHJhbmV0PC90ZXh0PgogIDxyZWN0IHg9IjIwIiB5PSIzNTAiIHdpZHRoPSI3NjAiIGhlaWdodD0iMTAwIiByeD0iMTIiIGZpbGw9IiNmZWYzYzciIHN0cm9rZT0iI2Q5NzcwNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8dGV4dCB4PSI0MCIgeT0iMzc4IiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjNzgzNTBmIj5FQSBjbGllbnQgKGVhY2ggc3R1ZGVudCk8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM5MiIgd2lkdGg9IjcyMCIgaGVpZ2h0PSI0NCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2Q5NzcwNiIvPgogIDx0ZXh0IHg9IjU2IiB5PSI0MjAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwZjE3MmEiPktlcm5hcm8gQXNzaXN0IHBsdWdpbiDihpIgc2lnbiBpbiB0byBIdWIg4oaSIEFJIGZlYXR1cmVzPC90ZXh0Pgo8L3N2Zz4K");

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
const site_docs_en_knifes_k_000121_kernaro_ai_hub_index_md_3aa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000121-Kernaro-AI-Hub/K000121_EN","title":"K000121 – Kernaro AI Hub: centralized AI access for teams","description":"How to deploy Kernaro AI Hub as a central AI server for a team or class: architecture, prerequisites, license assignment and session monitoring. For EA environment admins, including academic deployments (65 students).","source":"@site/docs/en/knifes/K000121-Kernaro-AI-Hub/index.md","sourceDirName":"en/knifes/K000121-Kernaro-AI-Hub","slug":"/en/knifes/K000121-Kernaro-AI-Hub/","permalink":"/en/knifes/K000121-Kernaro-AI-Hub/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"kernaro","permalink":"/doc-tags/kernaro"},{"inline":true,"label":"ea","permalink":"/doc-tags/ea"},{"inline":true,"label":"ai-hub","permalink":"/doc-tags/ai-hub"},{"inline":true,"label":"licensing","permalink":"/doc-tags/licensing"},{"inline":true,"label":"windows-server","permalink":"/doc-tags/windows-server"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-18T12:24:05.538730+00:00","fm_version_comment":"","id":"K000121_EN","guid":"9773f99f-da26-407c-8822-9150d1eb027a","dao":"knife","title":"K000121 – Kernaro AI Hub: centralized AI access for teams","description":"How to deploy Kernaro AI Hub as a central AI server for a team or class: architecture, prerequisites, license assignment and session monitoring. For EA environment admins, including academic deployments (65 students).","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"","tags":["kernaro","ea","ai-hub","licensing","windows-server"],"locale":"en","created":"2026-10-18 14:24","modified":"2026-10-18 14:24","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000119 – How to create a clean clone of a class repository","permalink":"/en/knifes/K000119-clean-clone-of-a-class-repository/"},"next":{"title":"KNIFE – Knowledge In Friendly Examples","permalink":"/en/knifes/"}}');
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
	description: 'How to deploy Kernaro AI Hub as a central AI server for a team or class: architecture, prerequisites, license assignment and session monitoring. For EA environment admins, including academic deployments (65 students).',
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
	locale: 'en',
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
  "value": "Server installation prerequisites",
  "id": "server-installation-prerequisites",
  "level": 3
}, {
  "value": "🧪 How to use it (application)",
  "id": "-how-to-use-it-application",
  "level": 2
}, {
  "value": "User management",
  "id": "user-management",
  "level": 3
}, {
  "value": "Session monitoring",
  "id": "session-monitoring",
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
          children: "user-management"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "windows-server"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0 | ", (0,jsx_runtime.jsx)(_components.strong, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro AI has two deployment models:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where AI runs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "For whom"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro Assist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin on each EA client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 license = 1 machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernaro AI Hub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 server = N users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This KNIFE covers the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hub model"
      }), " — suitable for team or academic environments. For Kernaro use in an SDLC context see K000104."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it-principle",
      children: "🧩 How it solves it (principle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI runs on a single server; EA clients sign in through the Kernaro Assist plugin, and the Hub allocates license seats and tracks sessions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Kernaro AI Hub – architecture",
        src: (__webpack_require__(59979)/* ["default"] */ .A) + "",
        width: "800",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-installation-prerequisites",
      children: "Server installation prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
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
            children: "PostgreSQL 16 or 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "postgresql.org"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub: pgvector/pgvector (build via VS C++ x64)"
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
            children: ["install ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "before"
            }), " Kernaro Hub"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KernaroAI-Setup.exe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request from Sparx Systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠️ The installer is not publicly downloadable — request it via \"Request Kernaro Hub Installer\" at sparxsystems.com/kernaro."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it-application",
      children: "🧪 How to use it (application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-management",
      children: "User management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two account types: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin"
      }), " (full access) | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular"
      }), " (restricted access)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "License assignment flow:"
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
      children: "Limited License displays seat counters. Unlimited License hides them; management works identically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-monitoring",
      children: "Session monitoring"
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
        children: "Verify before launch: LAN or VPN? → affects firewall / port configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session History = student activity log (pedagogical value)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-value--summary",
      children: "✅ Value / Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One server instead of N separate AI installations: central license management, an overview of active sessions and an audit trail. For a team or a class this is simpler than licensing each machine separately."
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