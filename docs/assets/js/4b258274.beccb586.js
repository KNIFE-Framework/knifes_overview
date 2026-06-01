"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[79445],{

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

/***/ 36798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000108_qrm_index_md_4b2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000108-qrm-index-md-4b2.json
const site_docs_en_knifes_k_000108_qrm_index_md_4b2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000108-QRM/K000108_EN","title":"K000108 – Quick Response Manufacturing (QRM)","description":"QRM is a company-wide strategy for reducing lead times — invented by Rajan Suri in the 1990s. Originally designed for manufacturing, QRM explicitly extends to office and knowledge work processes, making it directly relevant to SDLC and IT delivery.","source":"@site/docs/en/knifes/K000108-QRM/index.md","sourceDirName":"en/knifes/K000108-QRM","slug":"/en/knifes/K000108-QRM/","permalink":"/en/knifes/K000108-QRM/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"QRM","permalink":"/doc-tags/qrm"},{"inline":true,"label":"LeadTime","permalink":"/doc-tags/lead-time"},{"inline":true,"label":"Manufacturing","permalink":"/doc-tags/manufacturing"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"KnowledgeWork","permalink":"/doc-tags/knowledge-work"},{"inline":true,"label":"Lean","permalink":"/doc-tags/lean"},{"inline":true,"label":"SixSigma","permalink":"/doc-tags/six-sigma"},{"inline":true,"label":"MCT","permalink":"/doc-tags/mct"},{"inline":true,"label":"QROC","permalink":"/doc-tags/qroc"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-01T00:00:00.000000+00:00","fm_version_comment":"","id":"K000108_EN","guid":"","dao":"knife","title":"K000108 – Quick Response Manufacturing (QRM)","description":"QRM is a company-wide strategy for reducing lead times — invented by Rajan Suri in the 1990s. Originally designed for manufacturing, QRM explicitly extends to office and knowledge work processes, making it directly relevant to SDLC and IT delivery.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["QRM","LeadTime","Manufacturing","SDLC","KnowledgeWork","Lean","SixSigma","MCT","QROC","CAA"],"locale":"en","created":"2026-06-01 00:00","modified":"2026-06-01 00:00","status":"draft","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000107 – TBM: Technology Business Management","permalink":"/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-TBM-index"},"next":{"title":"KNIFE – Knowledge In Friendly Examples","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./docs/en/knifes/K000108-QRM/img/00-mct-timeline.svg
var _desc, _defs, _text, _text2, _text3, _rect, _text4, _text5, _rect2, _rect3, _text6, _text7, _path, _text8, _path2, _text9, _text0, _text1, _text10, _text11, _text12, _text13, _rect4, _rect5, _text14, _text15, _text16, _rect6, _rect7, _rect8, _text17, _text18, _text19, _path3, _text20, _path4, _path5, _text21, _text22, _rect9, _text23, _rect0, _text24, _rect1, _text25, _text26;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const Svg00MctTimeline = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 680 385",
  "aria-labelledby": titleId
}, props), title === undefined ? /*#__PURE__*/react.createElement("title", {
  id: titleId
}, "MCT \u2013 calendar time vs. actual work needed") : title ? /*#__PURE__*/react.createElement("title", {
  id: titleId
}, title) : null, _desc || (_desc = /*#__PURE__*/react.createElement("desc", null, "Three horizontal bars comparing current state (1 week), work needed (2 hours), and QRM target (1 day).")), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("marker", {
  id: "a",
  markerHeight: 6,
  markerWidth: 6,
  orient: "auto-start-reverse",
  refX: 8,
  refY: 5,
  viewBox: "0 0 10 10"
}, /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#73726c",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m2 1 6 4-6 4"
})))), _text || (_text = /*#__PURE__*/react.createElement("text", {
  x: 340,
  y: 30,
  fill: "#3d3d3a",
  fontFamily: "sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "MCT: calendar time vs. actual work")), _text2 || (_text2 = /*#__PURE__*/react.createElement("text", {
  x: 120,
  y: 76,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "end"
}, "Without")), _text3 || (_text3 = /*#__PURE__*/react.createElement("text", {
  x: 120,
  y: 90,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "end"
}, "QRM")), _rect || (_rect = /*#__PURE__*/react.createElement("rect", {
  width: 200,
  height: 44,
  x: 130,
  y: 60,
  fill: "#F1EFE8",
  stroke: "#5F5E5A",
  strokeWidth: 0.5,
  rx: 4
})), _text4 || (_text4 = /*#__PURE__*/react.createElement("text", {
  x: 230,
  y: 78,
  fill: "#444441",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "In queue")), _text5 || (_text5 = /*#__PURE__*/react.createElement("text", {
  x: 230,
  y: 94,
  fill: "#444441",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Mon \u2013 Tue")), _rect2 || (_rect2 = /*#__PURE__*/react.createElement("rect", {
  width: 24,
  height: 52,
  x: 330,
  y: 56,
  fill: "#E1F5EE",
  stroke: "#0F6E56",
  strokeWidth: 0.5,
  rx: 4
})), _rect3 || (_rect3 = /*#__PURE__*/react.createElement("rect", {
  width: 276,
  height: 44,
  x: 354,
  y: 60,
  fill: "#FAEEDA",
  stroke: "#854F0B",
  strokeWidth: 0.5,
  rx: 4
})), _text6 || (_text6 = /*#__PURE__*/react.createElement("text", {
  x: 492,
  y: 78,
  fill: "#633806",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Awaiting approval")), _text7 || (_text7 = /*#__PURE__*/react.createElement("text", {
  x: 492,
  y: 94,
  fill: "#633806",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Wed \u2013 Fri")), _path || (_path = /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#B4B2A9",
  d: "M330 114v6h24v-6"
})), _text8 || (_text8 = /*#__PURE__*/react.createElement("text", {
  x: 342,
  y: 133,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "~2h \xB7 5%")), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
  stroke: "#B4B2A9",
  d: "M130 144v4M230 144v4M330 144v4M430 144v4M530 144v4M630 144v4"
})), _text9 || (_text9 = /*#__PURE__*/react.createElement("text", {
  x: 130,
  y: 160,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Mon")), _text0 || (_text0 = /*#__PURE__*/react.createElement("text", {
  x: 230,
  y: 160,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Tue")), _text1 || (_text1 = /*#__PURE__*/react.createElement("text", {
  x: 330,
  y: 160,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Wed")), _text10 || (_text10 = /*#__PURE__*/react.createElement("text", {
  x: 430,
  y: 160,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Thu")), _text11 || (_text11 = /*#__PURE__*/react.createElement("text", {
  x: 530,
  y: 160,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Fri")), _text12 || (_text12 = /*#__PURE__*/react.createElement("text", {
  x: 120,
  y: 192,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "end"
}, "Work")), _text13 || (_text13 = /*#__PURE__*/react.createElement("text", {
  x: 120,
  y: 206,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "end"
}, "needed")), _rect4 || (_rect4 = /*#__PURE__*/react.createElement("rect", {
  width: 24,
  height: 44,
  x: 130,
  y: 178,
  fill: "#E1F5EE",
  stroke: "#0F6E56",
  strokeWidth: 0.5,
  rx: 4
})), _rect5 || (_rect5 = /*#__PURE__*/react.createElement("rect", {
  width: 476,
  height: 44,
  x: 154,
  y: 178,
  fill: "none",
  stroke: "#B4B2A9",
  strokeDasharray: "6 3",
  rx: 4
})), _text14 || (_text14 = /*#__PURE__*/react.createElement("text", {
  x: 392,
  y: 200,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "95% queue and waiting time")), _text15 || (_text15 = /*#__PURE__*/react.createElement("text", {
  x: 120,
  y: 271,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "end"
}, "With")), _text16 || (_text16 = /*#__PURE__*/react.createElement("text", {
  x: 120,
  y: 285,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "end"
}, "QRM")), _rect6 || (_rect6 = /*#__PURE__*/react.createElement("rect", {
  width: 18,
  height: 44,
  x: 130,
  y: 258,
  fill: "#F1EFE8",
  stroke: "#5F5E5A",
  strokeWidth: 0.5,
  rx: 4
})), _rect7 || (_rect7 = /*#__PURE__*/react.createElement("rect", {
  width: 24,
  height: 44,
  x: 148,
  y: 258,
  fill: "#E1F5EE",
  stroke: "#0F6E56",
  strokeWidth: 0.5,
  rx: 4
})), _rect8 || (_rect8 = /*#__PURE__*/react.createElement("rect", {
  width: 56,
  height: 44,
  x: 172,
  y: 258,
  fill: "#FAEEDA",
  stroke: "#854F0B",
  strokeWidth: 0.5,
  rx: 4
})), _text17 || (_text17 = /*#__PURE__*/react.createElement("text", {
  x: 200,
  y: 276,
  fill: "#633806",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Fast")), _text18 || (_text18 = /*#__PURE__*/react.createElement("text", {
  x: 200,
  y: 290,
  fill: "#633806",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "sign-off")), _text19 || (_text19 = /*#__PURE__*/react.createElement("text", {
  x: 240,
  y: 275,
  fill: "#3d3d3a",
  fontFamily: "sans-serif",
  fontSize: 12
}, "~1 day")), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
  stroke: "#B4B2A9",
  strokeDasharray: "4 3",
  d: "M240 314h388"
})), _text20 || (_text20 = /*#__PURE__*/react.createElement("text", {
  x: 434,
  y: 310,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "original 1-week boundary")), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
  stroke: "#B4B2A9",
  d: "M240 308v12M630 308v12"
})), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
  stroke: "#73726c",
  strokeWidth: 1.5,
  markerEnd: "url(#a)",
  markerStart: "url(#a)",
  d: "M130 337h110"
})), _text21 || (_text21 = /*#__PURE__*/react.createElement("text", {
  x: 185,
  y: 352,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "lead time")), _text22 || (_text22 = /*#__PURE__*/react.createElement("text", {
  x: 185,
  y: 364,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "\u201380\u201390%")), _rect9 || (_rect9 = /*#__PURE__*/react.createElement("rect", {
  width: 10,
  height: 10,
  x: 310,
  y: 330,
  fill: "#F1EFE8",
  stroke: "#5F5E5A",
  strokeWidth: 0.5,
  rx: 2
})), _text23 || (_text23 = /*#__PURE__*/react.createElement("text", {
  x: 326,
  y: 340,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12
}, "Queue")), _rect0 || (_rect0 = /*#__PURE__*/react.createElement("rect", {
  width: 10,
  height: 10,
  x: 390,
  y: 330,
  fill: "#E1F5EE",
  stroke: "#0F6E56",
  strokeWidth: 0.5,
  rx: 2
})), _text24 || (_text24 = /*#__PURE__*/react.createElement("text", {
  x: 406,
  y: 340,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12
}, "Active work")), _rect1 || (_rect1 = /*#__PURE__*/react.createElement("rect", {
  width: 10,
  height: 10,
  x: 490,
  y: 330,
  fill: "#FAEEDA",
  stroke: "#854F0B",
  strokeWidth: 0.5,
  rx: 2
})), _text25 || (_text25 = /*#__PURE__*/react.createElement("text", {
  x: 506,
  y: 340,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12
}, "Approval")), _text26 || (_text26 = /*#__PURE__*/react.createElement("text", {
  x: 340,
  y: 375,
  fill: "#73726c",
  fontFamily: "sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Touch time = 1\u20135% of total lead time \xB7 Rajan Suri, Quick Response Manufacturing")));
/* harmony default export */ const _00_mct_timeline = (Svg00MctTimeline);
;// ./docs/en/knifes/K000108-QRM/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-01T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000108_EN',
	guid: '',
	dao: 'knife',
	title: 'K000108 – Quick Response Manufacturing (QRM)',
	description: 'QRM is a company-wide strategy for reducing lead times — invented by Rajan Suri in the 1990s. Originally designed for manufacturing, QRM explicitly extends to office and knowledge work processes, making it directly relevant to SDLC and IT delivery.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'QRM',
		'LeadTime',
		'Manufacturing',
		'SDLC',
		'KnowledgeWork',
		'Lean',
		'SixSigma',
		'MCT',
		'QROC',
		'CAA'
	],
	locale: 'en',
	created: '2026-06-01 00:00',
	modified: '2026-06-01 00:00',
	status: 'draft',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Roman Kazicka',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka'
};
const contentTitle = 'KNIFE – Quick Response Manufacturing (QRM)';

const assets = {

};




const toc = [{
  "value": "Is your SDLC suffering from the same problem that nearly killed high-mix manufacturing?",
  "id": "is-your-sdlc-suffering-from-the-same-problem-that-nearly-killed-high-mix-manufacturing",
  "level": 2
}, {
  "value": "🎯 What it solves",
  "id": "-what-it-solves",
  "level": 2
}, {
  "value": "🧩 How it solves it",
  "id": "-how-it-solves-it",
  "level": 2
}, {
  "value": "Core principle: one metric to rule them all",
  "id": "core-principle-one-metric-to-rule-them-all",
  "level": 3
}, {
  "value": "Four core QRM concepts",
  "id": "four-core-qrm-concepts",
  "level": 3
}, {
  "value": "🧪 How to use it",
  "id": "-how-to-use-it",
  "level": 2
}, {
  "value": "Step 1 – Map your current MCT",
  "id": "step-1--map-your-current-mct",
  "level": 3
}, {
  "value": "Step 2 – Identify the Response Time Spiral",
  "id": "step-2--identify-the-response-time-spiral",
  "level": 3
}, {
  "value": "Step 3 – Design a Q-ROC for your SDLC phase",
  "id": "step-3--design-a-q-roc-for-your-sdlc-phase",
  "level": 3
}, {
  "value": "Step 4 – Reduce dysfunctional variability",
  "id": "step-4--reduce-dysfunctional-variability",
  "level": 3
}, {
  "value": "⚡ Quick Guide",
  "id": "-quick-guide",
  "level": 2
}, {
  "value": "📜 Detailed Article",
  "id": "-detailed-article",
  "level": 2
}, {
  "value": "Why QRM complements Lean and Six Sigma — not replaces them",
  "id": "why-qrm-complements-lean-and-six-sigma--not-replaces-them",
  "level": 3
}, {
  "value": "The utilisation trap",
  "id": "the-utilisation-trap",
  "level": 3
}, {
  "value": "Virupa case: Q-ROC in practice",
  "id": "virupa-case-q-roc-in-practice",
  "level": 3
}, {
  "value": "The taxonomy connection",
  "id": "the-taxonomy-connection",
  "level": 3
}, {
  "value": "💡 Tips and Notes",
  "id": "-tips-and-notes",
  "level": 2
}, {
  "value": "✅ Summary",
  "id": "-summary",
  "level": 2
}, {
  "value": "Further reading",
  "id": "further-reading",
  "level": 3
}, {
  "value": "Sources",
  "id": "sources",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "knife--quick-response-manufacturing-qrm",
        children: "KNIFE – Quick Response Manufacturing (QRM)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "is-your-sdlc-suffering-from-the-same-problem-that-nearly-killed-high-mix-manufacturing",
      children: "Is your SDLC suffering from the same problem that nearly killed high-mix manufacturing?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves",
      children: "🎯 What it solves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM was invented by Rajan Suri in the 1990s. The primary goal is relentless reduction of lead time — internal process flow times. Application of these concepts enables a company to compete on speed, flexibility, and agility."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In IT and SDLC terms: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lead time is the time from a requirement entering a phase to a verified output leaving it."
      }), " Every handoff, every queue, every \"it's in review\" is lead time waste."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "The SDLC parallel",
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "SDLC projects fail for the same reasons manufacturing failed before QRM:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Functional silos that create handoff delays"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"Utilisation traps\" — keeping people 100% busy creates bottlenecks"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Batching work instead of flowing it"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No shared metric for how long things actually take"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it",
      children: "🧩 How it solves it"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-principle-one-metric-to-rule-them-all",
      children: "Core principle: one metric to rule them all"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lead time reduction can be used to drive other performance improvements. Focusing on the reduction of lead time (MCT) within a company's internal processes can result in a wide array of other beneficial outcomes, including better quality (due to faster feedback loops, cross-trained workers, and small batch flow), improved on-time delivery, and lower operational costs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MCT – Manufacturing Critical-path Time"
      }), " is the key metric. It measures the wall-clock time from start to finish of a process, not just the \"touch time\" when someone is actively working."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "The shocking ratio",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "On average, actual touch time represents only 1–5% of total MCT.\nThe remaining 95–99% is waiting, queuing, handoffs, and rework.\nThis applies equally to software development phases, document reviews, and approval chains."
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)(_00_mct_timeline, {
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "four-core-qrm-concepts",
      children: "Four core QRM concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Time as the primary lens"
      }), "\nStop optimising for cost or utilisation. Optimise for speed. When lead time drops, costs follow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Dysfunctional vs strategic variability"
      }), "\nDysfunctional variability arises from operational problems — rework, errors, machine downtime, long setup times. Strategic variability exists to make customers happy — different product options, custom configurations. QRM's aim: eliminate dysfunctional variability and exploit strategic variability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In SDLC: rework from misunderstood requirements = dysfunctional. Customised solutions for different clients = strategic."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. QRM Cells — organisational restructuring"
      }), "\nInstead of functional departments (Analysis Dept → Design Dept → Dev Dept → Test Dept), form cross-functional cells focused on a product or service family. Each cell owns the full flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Q-ROC – Quick Response Office Cells"
      }), "\nCell restructuring works in the office too. Office activities like quoting and order processing can account for more than 50% of lead time and more than 25% of costs. Quick Response Office Cells (Q-ROCs) can be established to focus on a product family. The resources are co-located and accomplish a sequence of activities. The workers are cross-trained and given authority to make decisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the direct bridge to IT delivery — a Q-ROC for an SDLC phase is a cross-functional team with full authority to complete their stage without handoffs."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it",
      children: "🧪 How to use it"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1--map-your-current-mct",
      children: "Step 1 – Map your current MCT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Draw the current state: from requirement arrival to phase output. Mark:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where does work sit waiting? (queue time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where does it get batched? (batch delay)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where does it go back? (rework loop)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the actual touch time vs total elapsed time?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2--identify-the-response-time-spiral",
      children: "Step 2 – Identify the Response Time Spiral"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Response Time Spiral occurs when compartmentalised function-based departments result in increasing work in progress, backlogs and rush orders."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Signs in SDLC: every sprint ends with carry-over, requirements reviews take weeks, \"urgent\" always jumps the queue."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3--design-a-q-roc-for-your-sdlc-phase",
      children: "Step 3 – Design a Q-ROC for your SDLC phase"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify one SDLC phase or flow (e.g. requirements → design)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Form a cross-functional cell: BA + architect + lead dev + test rep"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Co-locate (physically or virtually with dedicated channels)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give them authority to complete without escalation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure MCT before and after"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4--reduce-dysfunctional-variability",
      children: "Step 4 – Reduce dysfunctional variability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardise inputs (what a \"ready requirement\" looks like — taxonomy!)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce batch sizes (one story at a time, not a sprint's worth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish pull signals (team pulls work when ready, not when pushed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-guide",
      children: "⚡ Quick Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "QRM concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SDLC equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCT (Manufacturing Critical-path Time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase lead time: requirement in → output verified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dysfunctional variability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rework from unclear requirements, missing definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strategic variability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom solutions for different client contexts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QRM Cell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-functional SDLC team (BA + Arch + Dev + Test)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q-ROC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge work cell for a specific SDLC phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response Time Spiral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sprint carry-over, backlog growth, \"always urgent\" culture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POLCA (card-based flow control)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban, WIP limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Touch time ratio (1–5%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% of sprint actually working vs waiting/in review"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailed-article",
      children: "📜 Detailed Article"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-qrm-complements-lean-and-six-sigma--not-replaces-them",
      children: "Why QRM complements Lean and Six Sigma — not replaces them"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many companies have successfully used QRM alongside Lean, Six Sigma, and other improvement methods, finding that QRM's unique time-reduction tools complement and enhance these efforts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM is particularly effective for companies making low-volume, high-variability or custom-engineered products. Some Lean concepts, such as takt time, Kanban, and production smoothing do not work well in these contexts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IT delivery is inherently high-variability, custom-engineered. This is why pure Lean struggles in software — and why QRM's approach to variability is more relevant."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-utilisation-trap",
      children: "The utilisation trap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of QRM's most counterintuitive insights: pushing resources to 100% utilisation ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "increases"
      }), " lead time. When everyone is always busy, no capacity exists to absorb variability. Every new request waits in queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In SDLC: the architect who is always 100% booked becomes the bottleneck that slows every project."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "virupa-case-q-roc-in-practice",
      children: "Virupa case: Q-ROC in practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Virupa Visual Solutions experienced significant growth but keeping up the level of turnover was taking increasingly more energy. The root cause was the business processes, which had been compartmentalised into function-based departments. To break this, Virupa disbanded the office departments and replaced them with four Quick Response Office Cells. In each Q-ROC a multidisciplinary team deals with all the processes and administration for a specific group of customers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The principle translates directly: instead of Requirements Dept → Architecture Dept → Development Dept, form a Q-ROC that handles all phases for a specific solution type or client segment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-taxonomy-connection",
      children: "The taxonomy connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM cannot function without a shared vocabulary."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCT mapping requires that every participant understands the same definition of \"start\" and \"end\" for each process step. Without taxonomy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different people measure different things"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCT improvements cannot be validated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q-ROC teams cannot communicate across boundaries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is why QRM and taxonomy (K107) are related — not competing — methodologies."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes",
      children: "💡 Tips and Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Start with MCT mapping, not restructuring",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Before designing cells, map current MCT for one flow.\nThe map alone creates shared understanding and reveals obvious quick wins.\nTeams often find 40–60% of lead time sitting in a single handoff or approval step."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Q-ROC for knowledge work",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "A major advantage of applying Q-ROC to office work over shop floor cells: moving people and desks is much less costly than moving machines.\nStart with one team. Prove it works. Then expand."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "QRM ≠ just doing things faster",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "QRM is not about rushing. It is about removing the time that adds no value.\nSpeed comes from eliminating queues and rework — not from working harder."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-summary",
      children: "✅ Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM reframes the question from \"how do we reduce cost?\" to \"how do we reduce time?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When lead time drops:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improves (faster feedback loops, smaller batches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost follows (less rework, less WIP, lower overhead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer satisfaction increases (faster, more reliable delivery)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For SDLC practitioners: QRM provides a time-based lens that complements Lean, Six Sigma, and Agile — especially for high-variability, custom-solution environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Q-ROC model for office and knowledge work is the direct bridge from manufacturing to IT delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Related KNIFE articles",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "../K000107_EN-TaxonomyAndOntology/",
            children: "K000107 – Taxonomy and Ontology in SDLC"
          }), " — the vocabulary foundation that enables QRM measurement"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "../K000103-CAA_IN_SDLC/",
            children: "K000103 – Context Aware Approach in SDLC"
          }), " — CAA provides the contextual layer for QRM implementation"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "further-reading",
      children: "Further reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rajan Suri – QRM origin and consulting: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://rajansuri.com",
          children: "https://rajansuri.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Center for QRM – University of Wisconsin: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://qrm.engr.wisc.edu",
          children: "https://qrm.engr.wisc.edu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["QRM Institute (Europe): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://qrminstitute.org",
          children: "https://qrminstitute.org"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"It's About Time\" – Rajan Suri (2010, Productivity Press) — the foundational book on QRM for office and knowledge work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://rajansuri.com",
          children: "https://rajansuri.com"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://interpro.wisc.edu/ten-things-you-should-know-about-quick-response-manufacturing/",
          children: "https://interpro.wisc.edu/ten-things-you-should-know-about-quick-response-manufacturing/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://qrm.engr.wisc.edu/blog/ten-things-you-should-know-about-quick-response-manufacturing/",
          children: "https://qrm.engr.wisc.edu/blog/ten-things-you-should-know-about-quick-response-manufacturing/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://qrminstitute.org/working-in-teams-qrm-and-work-cells-q-rocs/",
          children: "https://qrminstitute.org/working-in-teams-qrm-and-work-cells-q-rocs/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.business-improvement.eu/qrm/Virupa_QRM.php",
          children: "https://www.business-improvement.eu/qrm/Virupa_QRM.php"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://interpro.wisc.edu/courses/qrm-business-process-optimization-improving-support-operations-with-advanced-cell-design/",
          children: "https://interpro.wisc.edu/courses/qrm-business-process-optimization-improving-support-operations-with-advanced-cell-design/"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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