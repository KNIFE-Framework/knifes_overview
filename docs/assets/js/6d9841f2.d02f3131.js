"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[53635],{

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

/***/ 44404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_article_map_md_6d9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-article-map-md-6d9.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_article_map_md_6d9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/K000104-map","title":"K000104 – Article Map","description":"Interactive site map of all K000104 articles with clickable navigation.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/article-map.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/K000104-map","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/K000104-map","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-map","guid":"e8f2b3a1-9d4c-5e6f-7a8b-9c0d1e2f3a4b","dao":"knife","title":"K000104 – Article Map","description":"Interactive site map of all K000104 articles with clickable navigation.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-04 00:00","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"G – Conclusions & How This Was Made","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-TEST-Conclusion/K000104-10-conclusion"},"next":{"title":"KNIFE – Overview (EN)","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/_article-map-partial.mdx
var _article_map_partial = __webpack_require__(80361);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/article-map.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-map',
	guid: 'e8f2b3a1-9d4c-5e6f-7a8b-9c0d1e2f3a4b',
	dao: 'knife',
	title: 'K000104 – Article Map',
	description: 'Interactive site map of all K000104 articles with clickable navigation.',
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
	created: '2026-05-04 00:00',
	modified: '2026-05-04 00:00',
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
const contentTitle = 'Article Map – K000104';

const assets = {

};




const toc = [..._article_map_partial/* toc */.RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "article-map--k000104",
        children: "Article Map – K000104"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Interactive overview of all sections and sub-pages in this KNIFE article.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Click any node to navigate directly to that page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_article_map_partial/* default */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      })]
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

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*Auto-generated by knife_article_map_generate.py — do not edit manually*/


const toc = [];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 572 610",
      style: {
        width: '100%',
        fontFamily: 'Arial,sans-serif',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        display: 'block'
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 42 218 42",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 99 218 99",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 158 218 158",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 251 218 251",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 342 218 342",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 384 218 384",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 428 218 428",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 472 218 472",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 516 218 516",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 170 301 C 194 301 194 560 218 560",
        stroke: "#AA4400",
        strokeWidth: "1.5",
        fill: "none",
        opacity: "0.45"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 42 C 386 42 386 42 412 42",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 99 C 386 99 386 82 412 82",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 99 C 386 99 386 116 412 116",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 251 C 386 251 386 200 412 200",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 251 C 386 251 386 234 412 234",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 251 C 386 251 386 268 412 268",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 251 C 386 251 386 302 412 302",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 360 342 C 386 342 386 342 412 342",
        stroke: "#AA4400",
        strokeWidth: "1",
        fill: "none",
        opacity: "0.35"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "10",
          y: "282",
          width: "160",
          height: "38",
          rx: "8",
          fill: "#7A1800"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "90",
          y: "296",
          textAnchor: "middle",
          fill: "white",
          fontSize: "12",
          fontWeight: "bold",
          children: "K000104"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "90",
          y: "311",
          textAnchor: "middle",
          fill: "#FFCCAA",
          fontSize: "9",
          children: "index"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "28",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#CC3800"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "46",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "AI-Supported SDLC"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/AI_ThreadOrOpportunity/K000104-01-ai-threat",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "30",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "46",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "AI: Threat or Opport…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/K000104-02-configuration",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "85",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#CC3800"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "103",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "A – Configuration"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A1-kernaro/K000104-02-kernaro-config",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "70",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "86",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "A – Configuration"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A2-claude/K000104-02-claude-prep",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "104",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "120",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "CLAUDE Platform Prep…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Testing_Strategy/K000104-03-testing-strategy",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "144",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#E04000"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "162",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "Testing Strategy"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "237",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#CC3800"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "255",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "B – Chat"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B1-model-statistics/K000104-04-chat-b1",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "188",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "204",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "B1 – Model Statistic…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "222",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "238",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "B2 – Document Genera…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "256",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "272",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "B3 – TOC Generation"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "290",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "306",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "B4 – Coffee Machine …"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "328",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#CC3800"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "346",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "C – Agents"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-python-execution",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "412",
          y: "330",
          width: "140",
          height: "24",
          rx: "4",
          fill: "#E87020"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "482",
          y: "346",
          textAnchor: "middle",
          fill: "white",
          fontSize: "10",
          fontWeight: "bold",
          children: "C3 – Python Executio…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "370",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#E04000"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "388",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "D – JavaScript in EA…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "414",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#E04000"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "432",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "E – Findings & Recom…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Claude-Console-Dashboards/K000104-08-claude-dashboards",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "458",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#E04000"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "476",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "Claude Console Dashb…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Sparxsystems-Ecosystem/K000104-09-sparx-ecosystem",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "502",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#E04000"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "520",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "F – Sparx AI Ecosyst…"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-TEST-Conclusion/K000104-10-conclusion",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
          x: "218",
          y: "546",
          width: "142",
          height: "28",
          rx: "5",
          fill: "#E04000"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
          x: "289",
          y: "564",
          textAnchor: "middle",
          fill: "white",
          fontSize: "11",
          fontWeight: "bold",
          children: "G – Conclusions & Ho…"
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);