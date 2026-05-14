"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[12336],{

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

/***/ 41024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000101_cynefin_framework_index_mdx_ae3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000101-cynefin-framework-index-mdx-ae3.json
const site_docs_en_knifes_k_000101_cynefin_framework_index_mdx_ae3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000101-CYNEFIN_Framework/K000101","title":"K000101 – CYNEFIN Framework","description":"Sense-making framework for decision-making in complex domains. Cynefin helps classify a situation according to the nature of cause-and-effect relationships and choose the appropriate course of action.","source":"@site/docs/en/knifes/K000101-CYNEFIN_Framework/index.mdx","sourceDirName":"en/knifes/K000101-CYNEFIN_Framework","slug":"/en/knifes/K000101-CYNEFIN_Framework/","permalink":"/en/knifes/K000101-CYNEFIN_Framework/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"cynefin","permalink":"/doc-tags/cynefin"},{"inline":true,"label":"sense-making","permalink":"/doc-tags/sense-making"},{"inline":true,"label":"complexity","permalink":"/doc-tags/complexity"},{"inline":true,"label":"decision-making","permalink":"/doc-tags/decision-making"},{"inline":true,"label":"agile","permalink":"/doc-tags/agile"},{"inline":true,"label":"systems-thinking","permalink":"/doc-tags/systems-thinking"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-23T21:03:29.254689+00:00","fm_version_comment":"","id":"K000101","guid":"ba6374cd-3f7d-4451-95e3-2312ef23a25a","dao":"knife","title":"K000101 – CYNEFIN Framework","description":"Sense-making framework for decision-making in complex domains. Cynefin helps classify a situation according to the nature of cause-and-effect relationships and choose the appropriate course of action.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"","tags":["cynefin","sense-making","complexity","decision-making","agile","systems-thinking"],"locale":"en","created":"2026-04-23 23:03","modified":"2026-04-23 23:03","status":"draft","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/en/help/release-notes"},"next":{"title":"K000103 – Context Aware Approach in SDLC","permalink":"/en/knifes/K000103-CAA_IN_SDLC/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./docs/en/knifes/K000101-CYNEFIN_Framework/img/cynefin_overview.svg
var _defs, _rect, _text, _text2, _text3, _text4, _text5, _rect2, _text6, _text7, _text8, _text9, _text0, _rect3, _text1, _text10, _text11, _text12, _text13, _rect4, _text14, _text15, _text16, _text17, _text18, _rect5, _text19, _path, _path2, _path3, _text20;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgCynefinOverview = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 760 500",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react.createElement("title", {
  id: titleId
}, title) : null, _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("marker", {
  id: "a",
  markerHeight: 7,
  markerWidth: 7,
  orient: "auto-start-reverse",
  refX: 8,
  refY: 5,
  viewBox: "0 0 10 10"
}, /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#736e6c",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m2 1 6 4-6 4"
})))), _rect || (_rect = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 170,
  x: 20,
  y: 20,
  fill: "#f1efe8",
  stroke: "#5f5e5a",
  strokeWidth: 0.5,
  rx: 12
})), _text || (_text = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 55,
  fill: "#444441",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Clear (obvious)")), _text2 || (_text2 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 88,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Cause-effect is clear")), _text3 || (_text3 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 110,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Best practices apply")), _text4 || (_text4 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 140,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Sense \u2192 Categorize \u2192 Respond")), _text5 || (_text5 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 163,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Example: routine support ticket")), _rect2 || (_rect2 = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 170,
  x: 480,
  y: 20,
  fill: "#e1f5ee",
  stroke: "#0f6e56",
  strokeWidth: 0.5,
  rx: 12
})), _text6 || (_text6 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 55,
  fill: "#085041",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Complicated")), _text7 || (_text7 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 88,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Expertise required")), _text8 || (_text8 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 110,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Good practices, multiple solutions")), _text9 || (_text9 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 140,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Sense \u2192 Analyze \u2192 Respond")), _text0 || (_text0 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 163,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Example: jet engine")), _rect3 || (_rect3 = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 170,
  x: 20,
  y: 310,
  fill: "#eeedfe",
  stroke: "#534ab7",
  strokeWidth: 0.5,
  rx: 12
})), _text1 || (_text1 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 345,
  fill: "#3c3489",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Complex")), _text10 || (_text10 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 378,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Patterns emerge over time")), _text11 || (_text11 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 400,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Emergent behaviour")), _text12 || (_text12 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 430,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Probe \u2192 Sense \u2192 Respond")), _text13 || (_text13 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 453,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Example: startup, software")), _rect4 || (_rect4 = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 170,
  x: 480,
  y: 310,
  fill: "#faece7",
  stroke: "#993c1d",
  strokeWidth: 0.5,
  rx: 12
})), _text14 || (_text14 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 345,
  fill: "#712b13",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Chaotic")), _text15 || (_text15 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 378,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "No patterns, urgency")), _text16 || (_text16 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 400,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Immediate action required")), _text17 || (_text17 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 430,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Act \u2192 Sense \u2192 Respond")), _text18 || (_text18 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 453,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Example: system outage")), _rect5 || (_rect5 = /*#__PURE__*/react.createElement("rect", {
  width: 140,
  height: 52,
  x: 310,
  y: 224,
  fill: "#faeeda",
  stroke: "#854f0b",
  strokeWidth: 0.8,
  rx: 26
})), _text19 || (_text19 = /*#__PURE__*/react.createElement("text", {
  x: 380,
  y: 250,
  fill: "#633806",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Disorder")), _path || (_path = /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#736e6c",
  strokeDasharray: "5 3",
  strokeWidth: 1.5,
  markerEnd: "url(#a)",
  d: "M355 248h-72"
})), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#736e6c",
  strokeDasharray: "5 3",
  strokeWidth: 1.5,
  markerEnd: "url(#a)",
  d: "m405 240 72-30"
})), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#736e6c",
  strokeDasharray: "5 3",
  strokeWidth: 1.5,
  markerEnd: "url(#a)",
  d: "m345 265-62 42"
})), _text20 || (_text20 = /*#__PURE__*/react.createElement("text", {
  x: 380,
  y: 494,
  fill: "#3d3d3a",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Cynefin Framework \u2013 5 domains for sense-making")));
/* harmony default export */ const cynefin_overview = (SvgCynefinOverview);
;// ./docs/en/knifes/K000101-CYNEFIN_Framework/img/cynefin_detail.svg
var cynefin_detail_defs, cynefin_detail_rect, cynefin_detail_text, cynefin_detail_text2, cynefin_detail_rect2, cynefin_detail_text3, cynefin_detail_rect3, cynefin_detail_text4, cynefin_detail_rect4, cynefin_detail_text5, cynefin_detail_text6, cynefin_detail_rect5, cynefin_detail_text7, cynefin_detail_text8, _rect6, cynefin_detail_text9, _rect7, cynefin_detail_text0, _rect8, cynefin_detail_text1, cynefin_detail_text10, cynefin_detail_path, cynefin_detail_text11, _rect9, cynefin_detail_text12, cynefin_detail_text13, _rect0, cynefin_detail_text14, _rect1, cynefin_detail_text15, _rect10, cynefin_detail_text16, cynefin_detail_text17, _rect11, cynefin_detail_text18, cynefin_detail_text19, _rect12, cynefin_detail_text20, _rect13, _text21, _rect14, _text22, _text23, cynefin_detail_path2, _text24;
function cynefin_detail_extends() { return cynefin_detail_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, cynefin_detail_extends.apply(null, arguments); }

const SvgCynefinDetail = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react.createElement("svg", cynefin_detail_extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 760 620",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react.createElement("title", {
  id: titleId
}, title) : null, cynefin_detail_defs || (cynefin_detail_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("marker", {
  id: "a",
  markerHeight: 7,
  markerWidth: 7,
  orient: "auto-start-reverse",
  refX: 8,
  refY: 5,
  viewBox: "0 0 10 10"
}, /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "#736e6c",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m2 1 6 4-6 4"
})))), cynefin_detail_rect || (cynefin_detail_rect = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 200,
  x: 20,
  y: 20,
  fill: "#f1efe8",
  stroke: "#5f5e5a",
  strokeWidth: 0.5,
  rx: 12
})), cynefin_detail_text || (cynefin_detail_text = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 50,
  fill: "#444441",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Clear")), cynefin_detail_text2 || (cynefin_detail_text2 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 76,
  fill: "#5f5e5a",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Sense \u2192 Categorize \u2192 Respond")), cynefin_detail_rect2 || (cynefin_detail_rect2 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 45,
  y: 92,
  fill: "#f1efe8",
  stroke: "#5f5e5a",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text3 || (cynefin_detail_text3 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 105,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Best practices")), cynefin_detail_rect3 || (cynefin_detail_rect3 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 45,
  y: 126,
  fill: "#f1efe8",
  stroke: "#5f5e5a",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text4 || (cynefin_detail_text4 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 139,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Routine processes, SOP")), cynefin_detail_rect4 || (cynefin_detail_rect4 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 45,
  y: 160,
  fill: "#f1efe8",
  stroke: "#5f5e5a",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text5 || (cynefin_detail_text5 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 173,
  fill: "#5f5e5a",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Risk: complacency \u2192 cliff edge")), cynefin_detail_text6 || (cynefin_detail_text6 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 208,
  fill: "#5f5e5a",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "\u26A0 Overconfidence \u2192 jump to Chaotic")), cynefin_detail_rect5 || (cynefin_detail_rect5 = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 200,
  x: 480,
  y: 20,
  fill: "#e1f5ee",
  stroke: "#0f6e56",
  strokeWidth: 0.5,
  rx: 12
})), cynefin_detail_text7 || (cynefin_detail_text7 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 50,
  fill: "#085041",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Complicated")), cynefin_detail_text8 || (cynefin_detail_text8 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 76,
  fill: "#0f6e56",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Sense \u2192 Analyze \u2192 Respond")), _rect6 || (_rect6 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 505,
  y: 92,
  fill: "#e1f5ee",
  stroke: "#0f6e56",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text9 || (cynefin_detail_text9 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 105,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Good practices (multiple solutions)")), _rect7 || (_rect7 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 505,
  y: 126,
  fill: "#e1f5ee",
  stroke: "#0f6e56",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text0 || (cynefin_detail_text0 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 139,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Expert needed")), _rect8 || (_rect8 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 505,
  y: 160,
  fill: "#e1f5ee",
  stroke: "#0f6e56",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text1 || (cynefin_detail_text1 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 173,
  fill: "#0f6e56",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Analysis reveals solution")), cynefin_detail_text10 || (cynefin_detail_text10 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 208,
  fill: "#0f6e56",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Jet engine, infrastructure")), cynefin_detail_path || (cynefin_detail_path = /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "rgba(31,30,29,0.45)",
  strokeDasharray: "5 4",
  strokeWidth: 1.5,
  markerEnd: "url(#a)",
  d: "M320 278q60 32 120 0"
})), cynefin_detail_text11 || (cynefin_detail_text11 = /*#__PURE__*/react.createElement("text", {
  x: 380,
  y: 322,
  fill: "#5a4a1a",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 13,
  fontWeight: 500,
  textAnchor: "middle"
}, "Disorder")), _rect9 || (_rect9 = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 200,
  x: 20,
  y: 380,
  fill: "#eeedfe",
  stroke: "#534ab7",
  strokeWidth: 0.5,
  rx: 12
})), cynefin_detail_text12 || (cynefin_detail_text12 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 410,
  fill: "#3c3489",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Complex")), cynefin_detail_text13 || (cynefin_detail_text13 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 436,
  fill: "#534ab7",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Probe \u2192 Sense \u2192 Respond")), _rect0 || (_rect0 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 45,
  y: 452,
  fill: "#eeedfe",
  stroke: "#534ab7",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text14 || (cynefin_detail_text14 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 465,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Probe = MVP, spike, prototype")), _rect1 || (_rect1 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 45,
  y: 486,
  fill: "#eeedfe",
  stroke: "#534ab7",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text15 || (cynefin_detail_text15 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 499,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Sense = retro, GAP review")), _rect10 || (_rect10 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 45,
  y: 520,
  fill: "#eeedfe",
  stroke: "#534ab7",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text16 || (cynefin_detail_text16 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 533,
  fill: "#534ab7",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Respond = refactoring")), cynefin_detail_text17 || (cynefin_detail_text17 = /*#__PURE__*/react.createElement("text", {
  x: 150,
  y: 566,
  fill: "#534ab7",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Skipping Respond = tech. debt \u2192 Chaotic")), _rect11 || (_rect11 = /*#__PURE__*/react.createElement("rect", {
  width: 260,
  height: 200,
  x: 480,
  y: 380,
  fill: "#faece7",
  stroke: "#993c1d",
  strokeWidth: 0.5,
  rx: 12
})), cynefin_detail_text18 || (cynefin_detail_text18 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 410,
  fill: "#712b13",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textAnchor: "middle"
}, "Chaotic")), cynefin_detail_text19 || (cynefin_detail_text19 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 436,
  fill: "#993c1d",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Act \u2192 Sense \u2192 Respond")), _rect12 || (_rect12 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 505,
  y: 452,
  fill: "#faece7",
  stroke: "#993c1d",
  strokeWidth: 0.3,
  rx: 5
})), cynefin_detail_text20 || (cynefin_detail_text20 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 465,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Act: stop the bleeding")), _rect13 || (_rect13 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 505,
  y: 486,
  fill: "#faece7",
  stroke: "#993c1d",
  strokeWidth: 0.3,
  rx: 5
})), _text21 || (_text21 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 499,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Sense: what is happening?")), _rect14 || (_rect14 = /*#__PURE__*/react.createElement("rect", {
  width: 210,
  height: 26,
  x: 505,
  y: 520,
  fill: "#faece7",
  stroke: "#993c1d",
  strokeWidth: 0.3,
  rx: 5
})), _text22 || (_text22 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 533,
  fill: "#993c1d",
  dominantBaseline: "central",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Respond: stabilize \u2192 Complex")), _text23 || (_text23 = /*#__PURE__*/react.createElement("text", {
  x: 610,
  y: 566,
  fill: "#993c1d",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 12,
  textAnchor: "middle"
}, "Goal: move to Complex or Complicated")), cynefin_detail_path2 || (cynefin_detail_path2 = /*#__PURE__*/react.createElement("path", {
  fill: "none",
  stroke: "rgba(31,30,29,0.4)",
  strokeDasharray: "4 3",
  strokeWidth: 1.5,
  markerEnd: "url(#a)",
  d: "M610 588q-230 20-460 0"
})), _text24 || (_text24 = /*#__PURE__*/react.createElement("text", {
  x: 380,
  y: 617,
  fill: "#3d3d3a",
  fontFamily: "-apple-system,'Segoe UI',sans-serif",
  fontSize: 11,
  textAnchor: "middle"
}, "Stabilization: Chaotic \u2192 Complex \u2192 Complicated")));
/* harmony default export */ const cynefin_detail = (SvgCynefinDetail);
;// ./docs/en/knifes/K000101-CYNEFIN_Framework/index.mdx


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-23T21:03:29.254689+00:00',
	fm_version_comment: '',
	id: 'K000101',
	guid: 'ba6374cd-3f7d-4451-95e3-2312ef23a25a',
	dao: 'knife',
	title: 'K000101 – CYNEFIN Framework',
	description: 'Sense-making framework for decision-making in complex domains. Cynefin helps classify a situation according to the nature of cause-and-effect relationships and choose the appropriate course of action.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: 'guide',
	priority: '',
	tags: [
		'cynefin',
		'sense-making',
		'complexity',
		'decision-making',
		'agile',
		'systems-thinking'
	],
	locale: 'en',
	created: '2026-04-23 23:03',
	modified: '2026-04-23 23:03',
	status: 'draft',
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
const contentTitle = undefined;

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
  "value": "Domains in detail",
  "id": "domains-in-detail",
  "level": 3
}, {
  "value": "Clear (Obvious)",
  "id": "clear-obvious",
  "level": 4
}, {
  "value": "Complicated",
  "id": "complicated",
  "level": 4
}, {
  "value": "Complex",
  "id": "complex",
  "level": 4
}, {
  "value": "Chaotic",
  "id": "chaotic",
  "level": 4
}, {
  "value": "Disorder",
  "id": "disorder",
  "level": 4
}, {
  "value": "🧪 How to use it (application)",
  "id": "-how-to-use-it-application",
  "level": 2
}, {
  "value": "Domain classification procedure",
  "id": "domain-classification-procedure",
  "level": 3
}, {
  "value": "Application in SDLC / Agile",
  "id": "application-in-sdlc--agile",
  "level": 3
}, {
  "value": "⚡ Quick guide (Top)",
  "id": "-quick-guide-top",
  "level": 2
}, {
  "value": "📜 Detailed article",
  "id": "-detailed-article",
  "level": 2
}, {
  "value": "Origin and context",
  "id": "origin-and-context",
  "level": 3
}, {
  "value": "Why Complex is different from Complicated",
  "id": "why-complex-is-different-from-complicated",
  "level": 3
}, {
  "value": "Probe → Sense → Respond in a software project",
  "id": "probe--sense--respond-in-a-software-project",
  "level": 3
}, {
  "value": "Cynefin and technical debt",
  "id": "cynefin-and-technical-debt",
  "level": 3
}, {
  "value": "Cynefin in practice – KnowMyself / BaZi",
  "id": "cynefin-in-practice--knowmyself--bazi",
  "level": 3
}, {
  "value": "💡 Tips and notes",
  "id": "-tips-and-notes",
  "level": 2
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
    h4: "h4",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "cynefin--sense-making-framework-for-decision-making-in-complex-domains",
      children: "Cynefin – Sense-making framework for decision-making in complex domains"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ba6374cd-3f7d-4451-95e3-2312ef23a25a"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "draft"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazicka · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves-purpose-goal",
      children: "🎯 What it solves (purpose, goal)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cynefin helps correctly ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "classify a situation"
      }), " based on how well we understand the cause-and-effect relationship.\nWithout this classification, there is a risk of applying the wrong approach – for example, planning a waterfall project\nin a domain where patterns only emerge as work progresses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The key question Cynefin asks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "In which domain am I – and what approach does that imply?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it-principle",
      children: "🧩 How it solves it (principle)"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)(cynefin_overview, {
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cynefin defines five domains based on the nature of cause-and-effect relationships [1]:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Clear"
            }), " (Obvious)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cause–effect is obvious"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense → Categorize → Respond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complicated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cause exists, requires expertise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense → Analyze → Respond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns only emerge retrospectively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Probe → Sense → Respond"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaotic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No patterns, urgent action needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Act → Sense → Respond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disorder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You don't know which domain you're in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification is the first step"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Most software and knowledge projects are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex"
      }), ", not Complicated.\nComplicated would mean there is an expert who knows the solution in advance.\nComplex means the solution must emerge through interaction with the system [2]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domains-in-detail",
      children: "Domains in detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "clear-obvious",
      children: "Clear (Obvious)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clear"
      }), " is the domain where the cause-and-effect relationship is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "obvious to everyone"
      }), " – it requires no analysis or expertise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approach: Sense → Categorize → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " – perceive facts without interpretation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorize"
        }), " – fit into a known category, recognise the pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond"
        }), " – apply best practice, no improvisation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples: routine support ticket, regular backup, onboarding by checklist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common mistake: the team starts analysing where it isn't needed. If the situation requires analysis – you are probably in Complicated, not Clear."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠ Cliff edge:"
        }), " From Clear you can fall ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "directly into Chaotic"
        }), " – not gradually, but as a sudden drop.\nComplacency after a long period without incidents is the primary risk.\nRemedy: periodically verify whether the situation still belongs in Clear."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complicated",
      children: "Complicated"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complicated"
      }), " is the domain where the cause-and-effect relationship ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exists and is knowable"
      }), " – but requires expertise or analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approach: Sense → Analyze → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " – collect facts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze"
        }), " – consult an expert, measure, diagnose, compare options"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond"
        }), " – apply good practice selected for this context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best practice (Clear)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Good practice (Complicated)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Several good ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Who decides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anyone following SOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert with judgement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples: aircraft engine, tax optimisation, system architecture, surgical procedure."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Risks: expert trap, analysis paralysis, confusion with Complex."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical test:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"If I call the best expert – can they tell us the solution in advance?\""
        }), "\nYes → Complicated. No, we need to try it → Complex."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complex",
      children: "Complex"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex"
      }), " is the domain where the cause-and-effect relationship ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot be known in advance"
      }), " – it only emerges retrospectively from interaction with the system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approach: Probe → Sense → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What you do"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Probe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe experiment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVP, spike, prototype, A/B test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sense"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe what emerged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrospective, GAP review, feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Respond"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React based on learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refactoring, pivot, redesign"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A plan in the Complex domain is not a map of reality. It is a hypothesis to be tested."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agile is designed ", (0,jsx_runtime.jsx)(_components.em, {
        children: "for"
      }), " the Complex domain: Sprint = Probe, Retrospective = Sense, Refactoring = Respond.\nWithout Respond, Agile is just fast waterfall with a different name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chaotic",
      children: "Chaotic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaotic"
      }), " is the domain where ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no cause-and-effect relationship exists"
      }), " – the system has broken down; every second without action is worse than an imperfect action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approach: Act → Sense → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What you do"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Act"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop the bleeding immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback, shutdown, isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sense"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What did the action cause?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What stabilised, what is still on fire"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Respond"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move to another domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident review, stabilisation plan"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Chaotic, one person decides – consensus is a luxury of stable domains.\nThe goal is not to solve the problem – it is to move the system from Chaotic into Complex or Complicated."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠ Most dangerous pattern:"
        }), "\nCrisis → Act → stabilisation → relief → forgetting → next crisis.\nTeams that do not execute Respond after a crisis guarantee the next one – usually worse."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "disorder",
      children: "Disorder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Disorder"
      }), " is the state when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "you don't know which domain you're in"
      }), ". Classification is the first and only step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most conflicts in teams arise when everyone perceives the situation through a different domain – one sees Complicated, another sees Complex."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it-application",
      children: "🧪 How to use it (application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-classification-procedure",
      children: "Domain classification procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the situation in one sentence."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ask the question: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Do I know the cause and effect in advance?\""
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Yes, it is trivial → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clear"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Yes, but expertise is required → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complicated"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No, it will become clear later → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Not at all, the system has broken down → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaotic"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the approach that corresponds to the domain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-in-sdlc--agile",
      children: "Application in SDLC / Agile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Complex domain:\n  Probe    →  MVP, spike, prototype\n  Sense    →  retrospective, GAP review, analysis of results\n  Respond  →  refactoring, redesign, plan adjustment\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most organisations perform Probe and Sense. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "They skip Respond (refactoring)"
      }), " under\nbusiness pressure – and in doing so the system gradually shifts towards Chaotic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-guide-top",
      children: "⚡ Quick guide (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the domain"
        }), " – Clear / Complicated / Complex / Chaotic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the corresponding approach"
        }), " – not every situation calls for analysis, and not every situation calls for experimentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Complex domains:"
        }), " Probe → Sense → Respond (iteratively, not as a one-off)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical debt = accumulated Respond that was not executed"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactoring is not a punishment – it is proof that Probe worked"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailed-article",
      children: "📜 Detailed article"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)(cynefin_detail, {
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "origin-and-context",
      children: "Origin and context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cynefin was created by Dave Snowden (IBM Institute for Knowledge Management) around 1999,\noriginally for knowledge management in organisations [1].\nThe word ", (0,jsx_runtime.jsx)(_components.em, {
        children: "cynefin"
      }), " comes from Welsh and means roughly \"habitat\" or \"the place where you belong\" –\na place that shapes who you are, even when you are not fully aware of it [3]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snowden later developed it further through his company Cognitive Edge and published it in the Harvard Business Review (2007) [2]."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-complex-is-different-from-complicated",
      children: "Why Complex is different from Complicated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This distinction is the most important practical output of Cynefin:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complicated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An aircraft engine is complicated – but experts exist who understand it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can hire an expert who will produce a plan in advance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices work."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ecosystem, startup, software product in a new domain, BaZi implementation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No expert can know in advance how the behaviour of the system will manifest in a specific context."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good practices replace best practices – what works elsewhere may not work here."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patterns only emerge from interaction [2]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "probe--sense--respond-in-a-software-project",
      children: "Probe → Sense → Respond in a software project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe – experiment safely:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MVP          →  minimal version for real users\nSpike        →  time-boxed technical experiment (1–2 days)\nPrototype    →  throwaway code to validate a concept\nFeature flag →  new functionality for 5% of users\nA/B test     →  two versions, measuring which one works better\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sense – observe what emerged:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Retrospective  →  what worked, what didn't, why\nGAP review     →  difference between plan and reality\nUser feedback  →  what users actually do\nMonitoring     →  logs, metrics, error rates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Respond – integrate what you learned:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Refactoring    →  code produced quickly is reworked properly\nPivot          →  we change direction based on user feedback\nRedesign       →  architecture that doesn't fit is rewritten\nDocumentation  →  knowledge is recorded (KNIFE item)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Respond must be executed ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " the next Probe. Otherwise every sprint adds a layer on top of an untreated foundation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cynefin-and-technical-debt",
      children: "Cynefin and technical debt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Technical debt is not just \"bad code\". Through Cynefin it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accumulated Respond\nthat was not executed"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Probe  ✓   MVP was launched\nSense  ✓   problems are identified (GAP_REVIEW, DryRun outputs)\nRespond ✗  business pressure, we move on without refactoring\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every skipped Respond increases system entropy. The system does not move into Chaotic all at once –\nit erodes gradually, with every sprint without refactoring."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Business argument: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Technical debt is interest. The longer we don't repay it, the more expensive\nevery further extension becomes.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cynefin-in-practice--knowmyself--bazi",
      children: "Cynefin in practice – KnowMyself / BaZi"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BaZi is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex domain"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Even after reading all the books, you cannot know how the nuances of the domain will manifest in implementation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The GAP in NR names only appeared through real work, not during analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The naming convention evolved iteratively – it was not fully defined upfront."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The entire DAY refactoring cycle is an example of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Probe → Sense → Respond"
      }), " in practice:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Probe    =  implementation of the first pillar (DAY)\nSense    =  GAP_REVIEW revealed inconsistencies\nRespond  =  systematic refactoring with DryRun → Apply → Verify audit trail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes",
      children: "💡 Tips and notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disorder is a dangerous domain"
        }), " – most team conflicts arise when everyone\nperceives the situation through a different domain (one sees Complicated, another Complex)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cynefin is not static"
        }), " – a situation can move between domains.\nUnmanaged chaos can stabilise into Complex, or Complex can erode into Chaotic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For agile teams:"
        }), " Retrospective = Sense. Refactoring sprint = Respond.\nWithout Respond, Agile is just fast waterfall with a different name."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cliff edge effect"
        }), " – Cynefin warns that from the Clear domain you can fall directly into Chaotic\n(not through Complicated/Complex) if you start to overestimate the system. Complacency is a risk."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-value--summary",
      children: "✅ Value / Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cynefin gives a name to something you intuitively feel when working with complex domains:\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not everything can be planned in advance – and that is not a flaw, it is a property of the domain."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key takeaways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The distinction between Complex and Complicated is the most important practical tool of the framework."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Probe → Sense → Respond"
        }), " is the only epistemically honest approach for complex domains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refactoring is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond"
        }), " – not a correction of a mistake, but part of the learning cycle."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt = accumulated Respond that was not executed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping Respond under business pressure is a systematic cause of system erosion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cynefin.io/wiki/Cynefin",
        children: "https://cynefin.io/wiki/Cynefin"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hbr.org/2007/11/a-leaders-framework-for-decision-making",
        children: "https://hbr.org/2007/11/a-leaders-framework-for-decision-making"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://thecynefin.co/about-us/about-cynefin-framework/",
        children: "https://thecynefin.co/about-us/about-cynefin-framework/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
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