"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[96170],{

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-CFG_KERNARO_AGENT-34aca72609ecc21733d382c667c1f3b2.png");

/***/ }),

/***/ 8144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-KERNARO-Settings-a1f2692e7329f268b53f07254b0573d3.png");

/***/ }),

/***/ 9033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-CFG_KERNARO_AGENT-966993379318cf2b51e8003d8d40d92a.png");

/***/ }),

/***/ 10285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-KERNARO-Settings-b7d1a9828bde09ee7d68893ed334c4fd.png");

/***/ }),

/***/ 10880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-CFG_KERNARO_AGENT-26cd568fb8cf792b80e67676972b4462.png");

/***/ }),

/***/ 12125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-KERNARO-Settings-Python-5dd4ceea3e70648c76e1d7227d77eac6.png");

/***/ }),

/***/ 12145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-KERNARO-Settings-Logging-eded9360f5272e87ee5a7139ba08cfec.png");

/***/ }),

/***/ 16774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-INSTALL_KERNARO-59fc41ed27f517cdac5c90cbebb97ffb.png");

/***/ }),

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

/***/ 29111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10-INSTALL_KERNARO-23d5a7dcc231270c3eede85fc1889e44.png");

/***/ }),

/***/ 30207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-KERNARO-Settings-Workspace-c3d2575c00af666f96f6c0715ad12f36.png");

/***/ }),

/***/ 32196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A2-python-312-installed-37fb9b3e5b91b9c08453e4f288076eda.png");

/***/ }),

/***/ 32593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12-INSTALL_KERNARO-6c1cdae4cba7e3dac21aa8eb95a646fd.png");

/***/ }),

/***/ 33468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-KERNARO-Settings-ChatAgent-64cd719a7a06065f3ffd7c631b2df18c.png");

/***/ }),

/***/ 37708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A5-python-execution-empty2-0d3d7b5918ae6b00a687835be8a43a03.png");

/***/ }),

/***/ 39996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08-INSTALL_KERNARO-2dd9778bf2b7a398c3858b460d646013.png");

/***/ }),

/***/ 41683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-CFG_KERNARO_AGENT-477f31264de1cb99432f144fa76b3166.png");

/***/ }),

/***/ 42145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A2-python-installing-312-db842edbe7596886824ced50eaecf171.png");

/***/ }),

/***/ 43656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-INSTALL_KERNARO-496cdb4aa84caf9fc3af446435a4db23.png");

/***/ }),

/***/ 45234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11-INSTALL_KERNARO-8acf6a991c291e1e4f4f2b1dc196f1f2.png");

/***/ }),

/***/ 49154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-INSTALL_KERNARO-3a96d1e35ac07a0f2b664d8defefff47.png");

/***/ }),

/***/ 49614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A4-chat-agent-settings-76e45eeac00837c54f7115764ac32ff4.png");

/***/ }),

/***/ 50295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-KERNARO-Settings-772e36ef60382c6fc50345a8b8e7e742.png");

/***/ }),

/***/ 50809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/09-INSTALL_KERNARO-a376a0ed2161b6e7da5262831cf27cfc.png");

/***/ }),

/***/ 51567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01CFG_KERNARO_AGENT-ef690fd8b469df619e32f06f93130df6.png");

/***/ }),

/***/ 55300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-KERNARO-Settings-529daddafee33cdb053e38d5e676f0f8.png");

/***/ }),

/***/ 59266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_02_configuration_a_1_kernaro_kernaro_a_configuration_md_6e9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-02-configuration-a-1-kernaro-kernaro-a-configuration-md-6e9.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_02_configuration_a_1_kernaro_kernaro_a_configuration_md_6e9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A1-kernaro/K000104-02-kernaro-config","title":"A – Configuration","description":"Enterprise Architect and Kernaro Beta setup: prerequisites, installation steps, and initial configuration checklist.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/A1-kernaro/kernaro-A-configuration.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/A1-kernaro","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A1-kernaro/K000104-02-kernaro-config","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A1-kernaro/K000104-02-kernaro-config","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-02-kernaro-config","guid":"fbf94131-51ff-4334-bcac-fcaa4132db7d","dao":"knife","title":"A – Configuration","description":"Enterprise Architect and Kernaro Beta setup: prerequisites, installation steps, and initial configuration checklist.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-04-29 08:56","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"A – Configuration","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/"},"next":{"title":"CLAUDE Platform Preparation","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A2-claude/K000104-02-claude-prep"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/A1-kernaro/kernaro-A-configuration.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-02-kernaro-config',
	guid: 'fbf94131-51ff-4334-bcac-fcaa4132db7d',
	dao: 'knife',
	title: 'A – Configuration',
	description: 'Enterprise Architect and Kernaro Beta setup: prerequisites, installation steps, and initial configuration checklist.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: '',
	priority: '',
	tags: [
		'SDLC',
		'AI',
		'KERNARO'
	],
	locale: 'en',
	created: '2026-04-29 08:56',
	modified: '2026-04-29 08:56',
	status: 'inProgress',
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
const contentTitle = 'A – Configuration';

const assets = {

};



const toc = [{
  "value": "A1 · Prerequisites",
  "id": "a1--prerequisites",
  "level": 2
}, {
  "value": "A2 · Installation",
  "id": "a2--installation",
  "level": 2
}, {
  "value": "A3 · API Key – Claude Sonnet 4.6",
  "id": "a3--api-key--claude-sonnet-46",
  "level": 2
}, {
  "value": "A4 · Chat Agent Settings",
  "id": "a4--chat-agent-settings",
  "level": 2
}, {
  "value": "A5 · Python Execution",
  "id": "a5--python-execution",
  "level": 2
}, {
  "value": "A6 · First run – /instructions",
  "id": "a6--first-run--instructions",
  "level": 2
}, {
  "value": "Product links",
  "id": "product-links",
  "level": 2
}, {
  "value": "Images",
  "id": "images",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "a--configuration",
        children: "A – Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This article is being actively worked on. Content may be incomplete or subject to change."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/",
        children: "A – Configuration"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a1--prerequisites",
      children: "A1 · Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version / Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise Architect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.1 Build 1716 (64-bit, ULTIMATE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 11 (VM – VMware Fusion on macOS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MariaDB (~800 MB) + QEA SQLite (test model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".NET Desktop Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.0.5 or newer (required before install)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.12.10 (for Python Execution feature)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note on Python version:"
        }), " Windows Python Install Manager installs 3.14 by default. Install 3.12 explicitly – ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pywin32"
        }), " (EA COM interface) is not yet verified for Python 3.14."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a2--installation",
      children: "A2 · Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Download: ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".msi"
      }), " installer from Kernaro Beta link (email from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:kernaro@sparxsystems.com",
        children: "kernaro@sparxsystems.com"
      }), ", valid 3 days)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Installation path: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C:\\Program Files\\Sparx Systems\\Kernaro AI for EA\\"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Port: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "9090"
      }), " on localhost (configurable during setup)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Publisher verified in Windows UAC:"
      }), " Sixth Force Solutions Pty Ltd."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After installation, EA must be restarted. Kernaro appears in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Add-Ins"
      }), " ribbon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a3--api-key--claude-sonnet-46",
      children: "A3 · API Key – Claude Sonnet 4.6"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create account at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://console.anthropic.com"
        }), " [1]"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purchase API credits (minimum $5, prepaid model)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate API key: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Account Settings → API Keys"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In EA: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Add-Ins → Kernaro AI (Beta) → Configuration → Models → + Add New"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provider: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic"
        }), ", Model: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Claude Sonnet 4.6"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paste API key → Save"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key is stored encrypted locally. No server-side setup required on Kernaro side."
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/knifes/kernaro-beta/img/A3-model-configured.png",
        width: "600",
        alt: "Kernaro Models – Claude Sonnet 4.6 active"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "./img/A3-model-configured.png",
        alt: "Kernaro Models – Claude Sonnet 4.6 active"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost model:"
        }), " Pay-as-you-go, prepaid credits. Real-time usage visible in Anthropic Console dashboard. Set a spend limit to prevent surprises on large repositories."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a4--chat-agent-settings",
      children: "A4 · Chat Agent Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Settings → Chat Agent Settings"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Toggle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Script Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegates EA scripting tasks to Script Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ ON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Document Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File and document operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ ON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Layout Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagram layout tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ON for layout tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Visual Verification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Analyses diagram screenshots – ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "consumes additional tokens"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ OFF by default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a5--python-execution",
      children: "A5 · Python Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Settings → Python Execution"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable toggle: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Enable Python Execution"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enter interpreter path:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C:\\Users\\Roman\\AppData\\Local\\Python\\pythoncore-3.12-64\\python.exe\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Validate"
        }), " → confirm ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Verified successfully – Python 3.12.10"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Save Changes"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Python packages"
      }), " (if using external scripts alongside Kernaro):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cmd",
        children: "py -3.12 -m pip install pywin32 python-docx\npy -3.12 C:\\...\\Scripts\\pywin32_postinstall.py -install\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Important:"
        }), " External Python scripts calling EA via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "win32com.client"
        }), " will deadlock if Kernaro add-in is active simultaneously. EA is single-threaded COM – Kernaro holds the main thread. Use Kernaro Python Execution (internal) instead. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts",
          children: "D – JavaScript"
        }), " for details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a6--first-run--instructions",
      children: "A6 · First run – /instructions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After configuration, run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/instructions"
      }), " in Kernaro Chat. Kernaro will:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the full repository (element types, naming patterns, package structure, stereotypes, tags)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a rulebook as persistent system context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load it automatically at the start of every future chat session"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a one-time setup. Re-run if modelling standards change significantly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token cost:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/instructions"
        }), " on a large repository (~800 MB) can consume several thousand tokens. Run it once on the production model, then work primarily on scoped packages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "product-links",
      children: "Product links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] Anthropic Console – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.anthropic.com",
        children: "https://console.anthropic.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[2] Kernaro AI for EA – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://kernaro.sparxsystems.com",
        children: "https://kernaro.sparxsystems.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/",
        children: "A – Configuration"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-01"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(51567)/* ["default"] */ .A),
      alt: "img/KERNARO-AGENTS/01CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-02"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-02]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(9033)/* ["default"] */ .A),
      alt: "img/KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-03"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-03]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(10880)/* ["default"] */ .A),
      alt: "img/KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-04"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-04]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(41683)/* ["default"] */ .A),
      alt: "img/KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-05"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-05]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(2754)/* ["default"] */ .A),
      alt: "img/KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-06"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-06]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(87841)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/01-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-07"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-07]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(49154)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/02-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-08"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-08]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(68903)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/03-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-09"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-09]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(43656)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/04-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-10]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(97205)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/05-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-11"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-11]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(16774)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/06-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-12"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-12]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(68955)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/07-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-13"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-13]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(39996)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/08-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-14"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-14]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(50809)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/09-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-15"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-15]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(29111)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/10-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-16]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(45234)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/11-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-17"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-17]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(32593)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/12-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-18"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-18]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(88820)/* ["default"] */ .A),
      alt: "img/KERNARO-Installation/13-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-19"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-19]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(33468)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-20"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-20]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(30207)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-21"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-21]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(12125)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-22"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-22]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(12145)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-23"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-23]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(55300)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/01-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-24"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-24]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(69953)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/02-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-25"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-25]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(73042)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/03-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-26"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-26]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(50295)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/04-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-27"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-27]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(8144)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/05-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-28"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-28]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(10285)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/06-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-29"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-29]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(62814)/* ["default"] */ .A),
      alt: "img/KERNARO-Settings/07-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-30"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-30]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(32196)/* ["default"] */ .A),
      alt: "img/Python/A2-python-312-installed.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-31"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-31]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(99464)/* ["default"] */ .A),
      alt: "img/Python/A2-python-install-manager.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-32]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(42145)/* ["default"] */ .A),
      alt: "img/Python/A2-python-installing-312.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-33"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-33]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(49614)/* ["default"] */ .A),
      alt: "img/Python/A4-chat-agent-settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-34"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-34]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(82820)/* ["default"] */ .A),
      alt: "img/Python/A5-python-execution-empty.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-35"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-35]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(37708)/* ["default"] */ .A),
      alt: "img/Python/A5-python-execution-empty2.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-36"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-36]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(76816)/* ["default"] */ .A),
      alt: "img/Python/A5-python-verified.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
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



/***/ }),

/***/ 62814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-KERNARO-Settings-8e8bb76f19d4e2f6b7ab07a951b7af21.png");

/***/ }),

/***/ 68903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-INSTALL_KERNARO-ee32fb4e7644b60e9ede7b6c7062a77f.png");

/***/ }),

/***/ 68955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-INSTALL_KERNARO-93c86c8125118531a233ac3f3812b6cb.png");

/***/ }),

/***/ 69953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-KERNARO-Settings-1c515d98531b6ef071cc32bc3f76b919.png");

/***/ }),

/***/ 73042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-KERNARO-Settings-db0b4bacf1226f2d2644e34f6a947fcc.png");

/***/ }),

/***/ 76816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A5-python-verified-68b9920f4d07eb764cd0c90922557529.png");

/***/ }),

/***/ 82820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A5-python-execution-empty-0d3d7b5918ae6b00a687835be8a43a03.png");

/***/ }),

/***/ 87841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-INSTALL_KERNARO-17c82dbcb030deb28c6d4a2da8a344cf.png");

/***/ }),

/***/ 88820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13-INSTALL_KERNARO-460b965c518fb07f78570e9e5ea63eb7.png");

/***/ }),

/***/ 97205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-INSTALL_KERNARO-f948faf72fa62e97d5b4e708c4f2f27e.png");

/***/ }),

/***/ 99464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A2-python-install-manager-3f7f11e868a86759f4d103e53272bc0a.png");

/***/ })

}]);