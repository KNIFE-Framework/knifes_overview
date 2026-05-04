"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[85326],{

/***/ 6207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/28-KERNARO-TOC-Chat-58afe9e9564a39da130300bcfd01e485.png");

/***/ }),

/***/ 12601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/21-CLAUDE-DASHBOARD-31b66aab8ebf65c4061261b0ed06fdd1.png");

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

/***/ 43358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27-KERNARO-TOC-Chat-07af0689e9c10c185be0e27d13844d10.png");

/***/ }),

/***/ 46110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17-KERNARO-Chat-1a8ab85580251dec7b111901a01fc835.png");

/***/ }),

/***/ 49355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/18-KERNARO-Chat-093c1740c1e4e5dfe1d1e742d6bee0bc.png");

/***/ }),

/***/ 56451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/24-KERNARO-TOC-Chat-7748bb2ca4439adcd3053c29ad41ea17.png");

/***/ }),

/***/ 59921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26-KERNARO-TOC-Chat-9e57a7789e68b52000d23ed53d91528b.png");

/***/ }),

/***/ 60656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25-KERNARO-TOC-Chat-ac4a9f7ba1830bc7729acc3da234162d.png");

/***/ }),

/***/ 70194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/23-KERNARO-TOC-Chat-88aac41098e1f672b3cbc681df70e596.png");

/***/ }),

/***/ 71276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29-KERNARO-TOC-Chat-f9262d105a11f7663d6f4db7fb8aff29.png");

/***/ }),

/***/ 71920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20-KERNARO-Chat-d2d0ffd5b1e83556cc8154913aa7f8f5.png");

/***/ }),

/***/ 74547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/30-CLAUDE-Dashboard-407382bca9d5ba364668d0ee6a04502c.png");

/***/ }),

/***/ 80876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_b_3_toc_generation_kernaro_chat_b_3_toc_md_3d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-04-kernaro-chat-b-3-toc-generation-kernaro-chat-b-3-toc-md-3d3.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_b_3_toc_generation_kernaro_chat_b_3_toc_md_3d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3","title":"B3 – TOC Generation","description":"Kernaro Chat – generating a Table of Contents from an EA model up to L2 package level.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B3-toc-generation/kernaro-chat-B3-toc.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B3-toc-generation","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-04-chat-b3","guid":"c5d0f4e3-6d1a-7b8c-9e0f-1a2b3c4d5e6f","dao":"knife","title":"B3 – TOC Generation","description":"Kernaro Chat – generating a Table of Contents from an EA model up to L2 package level.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-04 00:00","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"B2 – Document Generation","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2"},"next":{"title":"B4 – Coffee Machine Functional Specification","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B3-toc-generation/kernaro-chat-B3-toc.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-04-chat-b3',
	guid: 'c5d0f4e3-6d1a-7b8c-9e0f-1a2b3c4d5e6f',
	dao: 'knife',
	title: 'B3 – TOC Generation',
	description: 'Kernaro Chat – generating a Table of Contents from an EA model up to L2 package level.',
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
const contentTitle = 'B3 – TOC Generation';

const assets = {

};



const toc = [{
  "value": "B3 · TOC from model – up to L2 level",
  "id": "b3--toc-from-model--up-to-l2-level",
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
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "b3--toc-generation",
        children: "B3 – TOC Generation"
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
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2",
        children: "B2 – Document Generation"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4",
        children: "B4 – Coffee Machine Spec"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b3--toc-from-model--up-to-l2-level",
      children: "B3 · TOC from model – up to L2 level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(95688)/* ["default"] */ .A) + "",
        children: "Generated and manual added TOC"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Generate a Table of Contents from the EA model, limited to package hierarchy up to Level 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2",
        children: "B2 – Document Generation"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4",
        children: "B4 – Coffee Machine Spec"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-01"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(46110)/* ["default"] */ .A),
      alt: "img/17-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-02"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-02]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(49355)/* ["default"] */ .A),
      alt: "img/18-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-03"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-03]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(86956)/* ["default"] */ .A),
      alt: "img/19-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-04"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-04]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(71920)/* ["default"] */ .A),
      alt: "img/20-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-05"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-05]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(12601)/* ["default"] */ .A),
      alt: "img/21-CLAUDE-DASHBOARD.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-06"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-06]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(85861)/* ["default"] */ .A),
      alt: "img/22-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-07"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-07]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(70194)/* ["default"] */ .A),
      alt: "img/23-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-08"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-08]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(56451)/* ["default"] */ .A),
      alt: "img/24-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-09"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-09]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(60656)/* ["default"] */ .A),
      alt: "img/25-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-10]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(59921)/* ["default"] */ .A),
      alt: "img/26-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-11"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-11]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(43358)/* ["default"] */ .A),
      alt: "img/27-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-12"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-12]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(6207)/* ["default"] */ .A),
      alt: "img/28-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-13"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-13]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(71276)/* ["default"] */ .A),
      alt: "img/29-KERNARO-TOC-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-14"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-14]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(74547)/* ["default"] */ .A),
      alt: "img/30-CLAUDE-Dashboard.png",
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

/***/ 85861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22-KERNARO-TOC-Chat-528ba0b17f094037179abe99cd88bc5c.png");

/***/ }),

/***/ 86956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/19-KERNARO-Chat-926a33f8b181225945494da32425b3af.png");

/***/ }),

/***/ 95688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/EA_Repository_TOC-430782f025380ed73951b0bbcf6898bb.docx");

/***/ })

}]);