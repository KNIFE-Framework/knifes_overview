"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[85521],{

/***/ 3579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14-PYTHON-ff77b6595186c492c9f17cc6d96786b3.png");

/***/ }),

/***/ 5485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/34-PYTHON-55b535ee937bc152db14db0684c38a14.png");

/***/ }),

/***/ 10096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/42-PYTHON-762c35433b0c3ad1eb23528ae9d96f29.png");

/***/ }),

/***/ 10489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12-PYTHON-e3ccc35c5571ff3c6c3afc3d3bb9a2a7.png");

/***/ }),

/***/ 13545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/38-PYTHON-50d7cda88950a98626aa56f7ac8f7355.png");

/***/ }),

/***/ 13842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/39-PYTHON-c149f0d2efa05146d65330fcea861cc1.png");

/***/ }),

/***/ 17858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40-PYTHON-64f4a8a79fb60d6533a2232d4e136f1a.png");

/***/ }),

/***/ 18912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-PYTHON-0b7809547283f53d9e82757ff0869808.png");

/***/ }),

/***/ 20225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/23-PYTHON-b201b63ee77fd209197df4c7afc4fdb1.png");

/***/ }),

/***/ 21574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26-PYTHON-f9e61affa8bec48e38773c1559a1f837.png");

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

/***/ 30728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/33-PYTHON-7541bb62a8d91cee493003dd2e2ac0a9.png");

/***/ }),

/***/ 31414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35-PYTHON-bdaeb2250a2859ac90cb7dcc094c6798.png");

/***/ }),

/***/ 31540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/24-PYTHON-dd3f72bd85298b41a567fda87c291c58.png");

/***/ }),

/***/ 33395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/36-PYTHON-c98a634ab4624f1aa0d46c75f6ace9c0.png");

/***/ }),

/***/ 34558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17-PYTHON-f58f9a3f11a2d64d88a4b6b1c156acca.png");

/***/ }),

/***/ 35197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27-PYTHON-0a2f5602eafc6cf8ac8849e2cb1229fc.png");

/***/ }),

/***/ 41863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32-PYTHON-e15adbd7f05d9b3da7c64151cc6f1055.png");

/***/ }),

/***/ 42275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25-PYTHON-5d6f296555fb79c9a82713f218f49a26.png");

/***/ }),

/***/ 46008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/19-PYTHON-53cba5a67fef96c0db55a041c0d2ea17.png");

/***/ }),

/***/ 50192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11-PYTHON-faa7decfe8f5d222de5a503e66c6cd12.png");

/***/ }),

/***/ 51263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-PYTHON-d9bf258296c0943997524cda97c4e033.png");

/***/ }),

/***/ 51439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10-PYTHON-c25733c4c88d9a4b30daaf4690eddd3c.png");

/***/ }),

/***/ 51834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/31-PYTHON-4a82e4e5bef6ec26b384e8d476da1a94.png");

/***/ }),

/***/ 53783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/21-PYTHON-377dba9c34f5aa616463f8ea4d18641c.png");

/***/ }),

/***/ 56139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-PYTHON-86e12b740f771872d050ff9eb066f1be.png");

/***/ }),

/***/ 58617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41-PYTHON-924c1298f59281a058f0323fdf807ddf.png");

/***/ }),

/***/ 66582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08-PYTHON-327c0c4823a57682c0a819d58a960007.png");

/***/ }),

/***/ 68204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15-PYTHON-e7791f270cd372d052071e2bc84c2fbf.png");

/***/ }),

/***/ 69410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13-PYTHON-d0821602929f28b9e06bbf252aed0f2b.png");

/***/ }),

/***/ 69513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-PYTHON-8b2b617ddb80fc37fd8191d7331fecdd.png");

/***/ }),

/***/ 74829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/09-PYTHON-96eb21358cf4eeb0de38d195b3b9c498.png");

/***/ }),

/***/ 77226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22-PYTHON-239804c44b37816e0eb259a2719fd083.png");

/***/ }),

/***/ 81530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_c_3_python_execution_kernaro_c_3_python_execution_md_5c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-05-kernaro-ai-agent-kernaro-c-3-python-execution-kernaro-c-3-python-execution-md-5c3.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_c_3_python_execution_kernaro_c_3_python_execution_md_5c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-c3-python-execution/K000104-05-python-execution","title":"C3 – Python Execution","description":"Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-c3-python-execution/kernaro-c3-python-execution.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-c3-python-execution","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-c3-python-execution/","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-c3-python-execution/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-05-python-execution","guid":"b3f7a2d1-9c04-4e8b-a1f5-2d6e8c3b0f94","dao":"knife","title":"C3 – Python Execution","description":"Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-04 00:00","modified":"2026-05-04 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"C2 – APV Integrity Check","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c2-apv-check/"},"next":{"title":"D – JavaScript in EA Script Manager","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-c3-python-execution/kernaro-c3-python-execution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-05-python-execution',
	guid: 'b3f7a2d1-9c04-4e8b-a1f5-2d6e8c3b0f94',
	dao: 'knife',
	title: 'C3 – Python Execution',
	description: 'Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects.',
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
const contentTitle = 'C3 – Python Execution';

const assets = {

};



const toc = [{
  "value": "Attempt 1 – Basic Python Role + Prompt",
  "id": "attempt-1--basic-python-role--prompt",
  "level": 2
}, {
  "value": "Attempt 2 – CRITICAL RULES (Force execute_python)",
  "id": "attempt-2--critical-rules-force-execute_python",
  "level": 2
}, {
  "value": "Attempt 3 – Agent 04 on EA_OnPostCloseDiagram",
  "id": "attempt-3--agent-04-on-ea_onpostclosediagram",
  "level": 2
}, {
  "value": "Test run 1 – Coffee Machine Activity diagram",
  "id": "test-run-1--coffee-machine-activity-diagram",
  "level": 3
}, {
  "value": "Test run 2 – Starter Use Case Model",
  "id": "test-run-2--starter-use-case-model",
  "level": 3
}, {
  "value": "Side Effect 1 – Event Collision on EA_OnPostCloseDiagram",
  "id": "side-effect-1--event-collision-on-ea_onpostclosediagram",
  "level": 2
}, {
  "value": "Side Effect 2 – Parallel Agent Execution (Observed Once)",
  "id": "side-effect-2--parallel-agent-execution-observed-once",
  "level": 2
}, {
  "value": "Observations",
  "id": "observations",
  "level": 2
}, {
  "value": "Images",
  "id": "images",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "c3--python-execution",
        children: "C3 – Python Execution"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C – Agents"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c2-apv-check/",
        children: "C2 – APV Integrity Check"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Session:"
      }), " 2026-04-30 · 12:23–14:39", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Detect elements with empty Notes on the current diagram — same as C1, but via Python execution instead of built-in EA tools.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Does Kernaro invoke ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute_python"
      }), ", or does it always fall back to built-in EA tools?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attempt-1--basic-python-role--prompt",
      children: "Attempt 1 – Basic Python Role + Prompt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are an Enterprise Architect modeling assistant with access to the EA repository via Python scripting.\nYour task is to analyze the currently open diagram and find all elements where the Notes field is empty or contains only whitespace.\nRules:\n- Work only with elements visible on the current diagram\n- Use EA Python API (ea_tools) available in Kernaro\n- Return results as a structured list: Element Name | Element Type | GUID\n- Do not modify any elements\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Kernaro called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Get Diagram By Guid"
      }), " (built-in EA tool) and analyzed data via LLM text — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute_python"
      }), " was never invoked."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " The output looked like a clean AI text report, not raw Python stdout. Built-in EA tools returned correct data; LLM composed the report."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attempt-2--critical-rules-force-execute_python",
      children: "Attempt 2 – CRITICAL RULES (Force execute_python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Role rewritten with explicit bans:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are an Enterprise Architect Python automation expert.\nCRITICAL RULES - NO EXCEPTIONS:\n- You MUST use execute_python tool to run actual Python code\n- You MUST NOT use Get Diagram, Get Element, or any other EA built-in tools\n- You MUST NOT analyze data from memory or previous context\n- If execute_python tool is not available, report error and stop\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Script template in prompt used ", (0,jsx_runtime.jsx)(_components.code, {
        children: "win32com.client.GetActiveObject(\"EA.App\")"
      }), " as the correct entry point for Python→EA COM automation on Windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python configuration:"
      }), " Python 3.12.10 ✅ installed and verified in Kernaro settings.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Agent still called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Get Diagram By Guid"
      }), ". CRITICAL RULES were ignored."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " LLM chose built-in EA tools even when the prompt explicitly prohibited them. When built-in tools are available and sufficient, the LLM prefers them regardless of prompt constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attempt-3--agent-04-on-ea_onpostclosediagram",
      children: "Attempt 3 – Agent 04 on EA_OnPostCloseDiagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agent: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "04-ElementsOnCurrentDiagramwithEmptyNotes"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Trigger: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EA_OnPostCloseDiagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-run-1--coffee-machine-activity-diagram",
      children: "Test run 1 – Coffee Machine Activity diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Coffee Machine - Activity"
      }), " (ID: 3)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total elements:"
      }), " 8", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty Notes:"
      }), " 0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✅ All elements documented. No action required."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Power On"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Heat Water"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Select Drink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Brew"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Dispense Coffee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Power Off"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "End"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-run-2--starter-use-case-model",
      children: "Test run 2 – Starter Use Case Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Starter Use Case Model"
      }), " (ID: 1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total elements:"
      }), " 8", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty Notes:"
      }), " 3"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Element ID"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Customer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Customer1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "405"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Customer2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "406"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Note: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Customer1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Customer2"
        }), " appear to be duplicate or test elements. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Coffee Machine"
        }), " (Boundary) had only a placeholder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Description of the System]"
        }), " — flagged in earlier runs as pseudo-empty."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Correct results on both diagrams. Still via built-in tools, not Python execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "side-effect-1--event-collision-on-ea_onpostclosediagram",
      children: "Side Effect 1 – Event Collision on EA_OnPostCloseDiagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each new agent in this session targeted the same trigger: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EA_OnPostCloseDiagram"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Kernaro does not allow multiple agents to share one event directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution applied:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority escalated incrementally → reached 4 (lowest available)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Previous agents set to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inactive"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " Priority + inactive flag is the workaround — not native multi-agent event support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "side-effect-2--parallel-agent-execution-observed-once",
      children: "Side Effect 2 – Parallel Agent Execution (Observed Once)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At one point during the session, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two agents ran simultaneously"
      }), " on the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EA_OnPostCloseDiagram"
      }), " trigger — with different execution durations visible in the Agent Executions log."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This occurred before the inactive flag was applied to the previous agent."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠ Input/output details were captured but not fully analyzed. The behavior suggests Kernaro may allow brief parallel execution during the transition period between agent configurations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observations",
      children: "Observations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Classification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Python 3.12 configured ✅, but ", (0,jsx_runtime.jsx)(_components.code, {
              children: "execute_python"
            }), " never invoked — LLM chose built-in EA tools in all 3 attempts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curiosity, not a bug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in EA tools returned correct results — the outcome was functionally equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prompt constraints (", (0,jsx_runtime.jsx)(_components.code, {
              children: "MUST NOT use..."
            }), ") did not override LLM tool preference when built-ins were available"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM behavior characteristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EA_OnPostCloseDiagram"
            }), " event = one active agent at a time"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brief parallel execution observed during agent transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unanalyzed — needs screenshot review"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C – Agents"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c2-apv-check/",
        children: "C2 – APV Integrity Check"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-01"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(84284)/* ["default"] */ .A),
        alt: "img/02-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-02"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-02]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(56139)/* ["default"] */ .A),
        alt: "img/03-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-03"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-03]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(87090)/* ["default"] */ .A),
        alt: "img/04-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-04"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-04]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(88374)/* ["default"] */ .A),
        alt: "img/04-javascripts.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-05"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-05]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(69513)/* ["default"] */ .A),
        alt: "img/05-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-06"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-06]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(18912)/* ["default"] */ .A),
        alt: "img/06-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-07"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-07]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(51263)/* ["default"] */ .A),
        alt: "img/07-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-08"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-08]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(66582)/* ["default"] */ .A),
        alt: "img/08-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-09"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-09]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(74829)/* ["default"] */ .A),
        alt: "img/09-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-10]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(51439)/* ["default"] */ .A),
        alt: "img/10-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-11"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-11]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(50192)/* ["default"] */ .A),
        alt: "img/11-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-12"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-12]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(10489)/* ["default"] */ .A),
        alt: "img/12-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-13"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-13]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(69410)/* ["default"] */ .A),
        alt: "img/13-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-14"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-14]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(3579)/* ["default"] */ .A),
        alt: "img/14-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-15"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-15]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(68204)/* ["default"] */ .A),
        alt: "img/15-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-16]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(90773)/* ["default"] */ .A),
        alt: "img/16-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-17"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-17]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(34558)/* ["default"] */ .A),
        alt: "img/17-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-18"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-18]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(99927)/* ["default"] */ .A),
        alt: "img/18-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-19"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-19]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(46008)/* ["default"] */ .A),
        alt: "img/19-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-20"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-20]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(91704)/* ["default"] */ .A),
        alt: "img/20-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-21"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-21]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(53783)/* ["default"] */ .A),
        alt: "img/21-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-22"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-22]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(77226)/* ["default"] */ .A),
        alt: "img/22-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-23"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-23]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(20225)/* ["default"] */ .A),
        alt: "img/23-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-24"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-24]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(31540)/* ["default"] */ .A),
        alt: "img/24-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-25"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-25]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(42275)/* ["default"] */ .A),
        alt: "img/25-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-26"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-26]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(21574)/* ["default"] */ .A),
        alt: "img/26-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-27"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-27]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(35197)/* ["default"] */ .A),
        alt: "img/27-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-28"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-28]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(92144)/* ["default"] */ .A),
        alt: "img/28-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-29"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-29]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(86383)/* ["default"] */ .A),
        alt: "img/29-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-30"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-30]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(89297)/* ["default"] */ .A),
        alt: "img/30-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-31"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-31]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(51834)/* ["default"] */ .A),
        alt: "img/31-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-32]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(41863)/* ["default"] */ .A),
        alt: "img/32-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-33"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-33]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(30728)/* ["default"] */ .A),
        alt: "img/33-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-34"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-34]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(5485)/* ["default"] */ .A),
        alt: "img/34-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-35"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-35]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(31414)/* ["default"] */ .A),
        alt: "img/35-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-36"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-36]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(33395)/* ["default"] */ .A),
        alt: "img/36-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-37"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-37]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(87556)/* ["default"] */ .A),
        alt: "img/37-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-38"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-38]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(13545)/* ["default"] */ .A),
        alt: "img/38-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-39"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-39]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(13842)/* ["default"] */ .A),
        alt: "img/39-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-40"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-40]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(17858)/* ["default"] */ .A),
        alt: "img/40-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-41"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-41]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(58617)/* ["default"] */ .A),
        alt: "img/41-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-42"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-42]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(10096)/* ["default"] */ .A),
        alt: "img/42-PYTHON.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
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

/***/ 84284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-PYTHON-84bc82399b4ccc172f6a0087e399221d.png");

/***/ }),

/***/ 86383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29-PYTHON-8e82b4588d2920b197f4452a6b7c9c65.png");

/***/ }),

/***/ 87090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-PYTHON-82961b41fd46f0d5319704bcc333e6c5.png");

/***/ }),

/***/ 87556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/37-PYTHON-3a260d9c81e14254f55cbbf1864172e0.png");

/***/ }),

/***/ 88374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-javascripts-88f904cecde30cbbf12dd58c85bded95.png");

/***/ }),

/***/ 89297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/30-PYTHON-d5657c3c43893d81f752f9707ace7afb.png");

/***/ }),

/***/ 90773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16-PYTHON-1b507737199c4b20f2a516a454ce24be.png");

/***/ }),

/***/ 91704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20-PYTHON-f885e6f5e87d2f70de1af7aa8f51700f.png");

/***/ }),

/***/ 92144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/28-PYTHON-9d2eb6a5ecaa202c0f4f9f58ff664966.png");

/***/ }),

/***/ 99927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/18-PYTHON-371d6e85ca57bc7d1c6b09124ea56c61.png");

/***/ })

}]);