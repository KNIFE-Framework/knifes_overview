"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[24747],{

/***/ 3809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-KERNARO-Settings-Logging-eded9360f5272e87ee5a7139ba08cfec.png");

/***/ }),

/***/ 5897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-Claude-paltform-config-596f6b9bd287cadaf7525d348161b425.png");

/***/ }),

/***/ 9105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11-Claude-paltform-config-7bd281844ea1bc2ee932f64df194bcbd.png");

/***/ }),

/***/ 9842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-CFG_KERNARO_AGENT-34aca72609ecc21733d382c667c1f3b2.png");

/***/ }),

/***/ 10473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/09-INSTALL_KERNARO-a376a0ed2161b6e7da5262831cf27cfc.png");

/***/ }),

/***/ 17280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-KERNARO-Settings-a1f2692e7329f268b53f07254b0573d3.png");

/***/ }),

/***/ 22776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A2-python-install-manager-3f7f11e868a86759f4d103e53272bc0a.png");

/***/ }),

/***/ 25334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-INSTALL_KERNARO-59fc41ed27f517cdac5c90cbebb97ffb.png");

/***/ }),

/***/ 26439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-Claude-paltform-config-9dc64c740fe882ed34e243a9f320df41.png");

/***/ }),

/***/ 27115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-INSTALL_KERNARO-93c86c8125118531a233ac3f3812b6cb.png");

/***/ }),

/***/ 28397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-KERNARO-Settings-Python-5dd4ceea3e70648c76e1d7227d77eac6.png");

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

/***/ 30606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-KERNARO-Settings-8e8bb76f19d4e2f6b7ab07a951b7af21.png");

/***/ }),

/***/ 31280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-CFG_KERNARO_AGENT-26cd568fb8cf792b80e67676972b4462.png");

/***/ }),

/***/ 32498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-INSTALL_KERNARO-3a96d1e35ac07a0f2b664d8defefff47.png");

/***/ }),

/***/ 32993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12-INSTALL_KERNARO-6c1cdae4cba7e3dac21aa8eb95a646fd.png");

/***/ }),

/***/ 33104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12-Claude-paltform-config-5a78ecd8fb304c19bb7d2d3cf424819a.png");

/***/ }),

/***/ 33556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A2-python-312-installed-37fb9b3e5b91b9c08453e4f288076eda.png");

/***/ }),

/***/ 34993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A2-python-installing-312-db842edbe7596886824ced50eaecf171.png");

/***/ }),

/***/ 35205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-INSTALL_KERNARO-f948faf72fa62e97d5b4e708c4f2f27e.png");

/***/ }),

/***/ 37700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13-INSTALL_KERNARO-460b965c518fb07f78570e9e5ea63eb7.png");

/***/ }),

/***/ 41944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1-Claude-paltform-config-b238d1c512fec29f809da97af8ac9b47.png");

/***/ }),

/***/ 42403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-CFG_KERNARO_AGENT-477f31264de1cb99432f144fa76b3166.png");

/***/ }),

/***/ 46808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-INSTALL_KERNARO-496cdb4aa84caf9fc3af446435a4db23.png");

/***/ }),

/***/ 48090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10-Claude-paltform-config-9cfee559e542b96aa62599309f6c7893.png");

/***/ }),

/***/ 49012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-KERNARO-Settings-529daddafee33cdb053e38d5e676f0f8.png");

/***/ }),

/***/ 52232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-Claude-paltform-config-6e650777fbaa12dc387ebff315d0d1cd.png");

/***/ }),

/***/ 54692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16-Claude-paltform-config-b238d1c512fec29f809da97af8ac9b47.png");

/***/ }),

/***/ 56439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-INSTALL_KERNARO-ee32fb4e7644b60e9ede7b6c7062a77f.png");

/***/ }),

/***/ 58270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A4-chat-agent-settings-76e45eeac00837c54f7115764ac32ff4.png");

/***/ }),

/***/ 58292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/09-Claude-paltform-config-ac6785463fd24eb74402e11e437f7c0d.png");

/***/ }),

/***/ 59599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-KERNARO-Settings-Workspace-c3d2575c00af666f96f6c0715ad12f36.png");

/***/ }),

/***/ 61223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-KERNARO-Settings-772e36ef60382c6fc50345a8b8e7e742.png");

/***/ }),

/***/ 62018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11-INSTALL_KERNARO-8acf6a991c291e1e4f4f2b1dc196f1f2.png");

/***/ }),

/***/ 63286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-Claude-paltform-config-7721df7685263e4d924d1e80af8cc81e.png");

/***/ }),

/***/ 66333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-KERNARO-Settings-b7d1a9828bde09ee7d68893ed334c4fd.png");

/***/ }),

/***/ 67682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-KERNARO-Settings-db0b4bacf1226f2d2644e34f6a947fcc.png");

/***/ }),

/***/ 67815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10-INSTALL_KERNARO-23d5a7dcc231270c3eede85fc1889e44.png");

/***/ }),

/***/ 69438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14-Claude-paltform-config-425104cdf2d59ffaf10dc000e2e8a5b0.png");

/***/ }),

/***/ 69916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-Claude-paltform-config-0831301e2d121f75f2ff6961b32291b4.png");

/***/ }),

/***/ 70085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15-Claude-paltform-config-82cc0ac053dae555797730e4dd2af4c5.png");

/***/ }),

/***/ 71097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-CFG_KERNARO_AGENT-966993379318cf2b51e8003d8d40d92a.png");

/***/ }),

/***/ 72163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08-Claude-paltform-config-4c3cc41d023c4482404af61b0ba257b5.png");

/***/ }),

/***/ 72924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A5-python-execution-empty2-0d3d7b5918ae6b00a687835be8a43a03.png");

/***/ }),

/***/ 74976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A5-python-verified-68b9920f4d07eb764cd0c90922557529.png");

/***/ }),

/***/ 80607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01CFG_KERNARO_AGENT-ef690fd8b469df619e32f06f93130df6.png");

/***/ }),

/***/ 81912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CAA-Approach-In-SDLC-7accf2bc14eafc1191ccf1e6998ce14a.png");

/***/ }),

/***/ 83087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13-Claude-paltform-config-33359c3b45ee13f97ec8906f6222c2a7.png");

/***/ }),

/***/ 85036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08-INSTALL_KERNARO-2dd9778bf2b7a398c3858b460d646013.png");

/***/ }),

/***/ 85881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_index_md_479_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-index-md-479.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_index_md_479_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/K000104","title":"K000104 – SPARX-AI KERNARO in context of SDLC support","description":"Hands-on evaluation of Kernaro AI Beta – an Enterprise Architect add-in that integrates AI into SDLC modeling workflows. Covers configuration, chat, agent automation, JavaScript generation, and test findings.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/index.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T09:59:04.931588+00:00","fm_version_comment":"","id":"K000104","guid":"2168d5cc-1465-40f4-8743-c666ab4a3d70","dao":"knife","title":"K000104 – SPARX-AI KERNARO in context of SDLC support","description":"Hands-on evaluation of Kernaro AI Beta – an Enterprise Architect add-in that integrates AI into SDLC modeling workflows. Covers configuration, chat, agent automation, JavaScript generation, and test findings.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 11:59","modified":"2026-04-29 11:59","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000103 – Context Aware Approach in SDLC","permalink":"/en/knifes/K000103-CAA_IN_SDLC/"},"next":{"title":"AI-Supported SDLC","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T09:59:04.931588+00:00',
	fm_version_comment: '',
	id: 'K000104',
	guid: '2168d5cc-1465-40f4-8743-c666ab4a3d70',
	dao: 'knife',
	title: 'K000104 – SPARX-AI KERNARO in context of SDLC support',
	description: 'Hands-on evaluation of Kernaro AI Beta – an Enterprise Architect add-in that integrates AI into SDLC modeling workflows. Covers configuration, chat, agent automation, JavaScript generation, and test findings.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'SDLC',
		'AI',
		'KERNARO'
	],
	locale: 'en',
	created: '2026-04-29 11:59',
	modified: '2026-04-29 11:59',
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
const contentTitle = 'Kernaro AI Beta – Test Report';

const assets = {

};



const toc = [{
  "value": "AI-Driven Modeling in Enterprise Architect – First Contact",
  "id": "ai-driven-modeling-in-enterprise-architect--first-contact",
  "level": 3
}, {
  "value": "Contents",
  "id": "contents",
  "level": 2
}, {
  "value": "Test Models",
  "id": "test-models",
  "level": 2
}, {
  "value": "Key Observation",
  "id": "key-observation",
  "level": 2
}, {
  "value": "Cost Overview",
  "id": "cost-overview",
  "level": 2
}, {
  "value": "Related KNIFE Articles",
  "id": "related-knife-articles",
  "level": 2
}, {
  "value": "<em>KNIFE repository: knifes.systemthinking.sk</em>",
  "id": "knife-repository-knifessystemthinkingsk",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
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
        id: "kernaro-ai-beta--test-report",
        children: "Kernaro AI Beta – Test Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-driven-modeling-in-enterprise-architect--first-contact",
      children: "AI-Driven Modeling in Enterprise Architect – First Contact"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This article is being actively worked on. Content may be incomplete or subject to change."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička, Knowledge Management Enterprise Architect KMEA", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Company:"
        }), " SystemThinking spol. s r.o., Bratislava", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Period:"
        }), " April 8–30, 2026", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment:"
        }), " EA 17.1 Build 1716 (64-bit, ULTIMATE) · MariaDB (~800 MB) + QEA (SQLite) · Claude Sonnet 4.6"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contents",
      children: "Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc",
              children: "01 - Introduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Genral ideas about AI in SDLC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/K000104-02-kernaro-config",
              children: "02 - Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installation, API setup, Python Execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Testing_Strategy/K000104-03-testing-strategy",
              children: "03 – Testing Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing straegy in SDLC context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
              children: "04 – KERNARO-Chat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model exploration, token cost, document generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
              children: "05 - KERNARO-AI-Agents"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing Notes agent, APV integrity check (UC-01)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
              children: "06 - KERNARO-JavaScripts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script generation, EA API syntax, debugging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings",
              children: "07 - KERNARO-TEST-Findings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues summary, what worked, recommendations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Claude-Console-Dashboards/K000104-08-claude-dashboards",
              children: "08 - CLAUDE Console - Dashboards"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA native AI, Prolaborate, JP MCP Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Sparxsystems-Ecosystem/K000104-09-sparx-ecosystem",
              children: "09 - Sparxsystems Ecosystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA native AI, Prolaborate, JP MCP Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-TEST-Conclusion/K000104-10-conclusion",
              children: "10 – KERNARO Tests Conclusions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overall assessment, SDLC context, next steps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-models",
      children: "Test Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two models were used:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model 1 – Production repository"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "~800 MB, MariaDB backend [1]. Used for initial Chat tests and document generation exploration. Demonstrated high token consumption with full-context queries (~6M tokens for 4,734 diagrams)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model 2 – Test QEA file"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Empty SQLite (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".qea"
      }), ") file, created for agent and JavaScript testing. Populated with a Coffee Machine requirement specification including Use Case functional requirements, Status diagram, and Activity diagram. This allowed controlled testing without exposing production data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-observation",
      children: "Key Observation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["AI has the ability to communicate in natural language, but draws data from what is available.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Poor-quality inputs produce poor-quality outputs.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Understanding requires ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TAXONOMY"
        }), " (shared vocabulary) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ONTOLOGY"
        }), " (role-based perspective).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Only when these two layers exist can the system provide meaningful ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VIEWS"
        }), " – with or without AI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI is not a shortcut. It is a catalyst – for those who are prepared."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cost-overview",
      children: "Cost Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Period"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apr 15–17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial chat + document generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$5.50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apr 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agentic exploration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.46"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apr 24–27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent + JavaScript + APV testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$1.57"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Month to date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~$7.53 USD"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remaining API credits: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$12.47 USD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Note: This report covers only Claude Console API token costs. Kernaro product licensing costs were not evaluated in this test – Beta access was provided free of charge. From a superficial comparison, the cost of the Sparx ecosystem relative to competing products (e.g. Bizzdesign [2]) is a fraction of the price while supporting the entire SDLC lifecycle."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-knife-articles",
      children: "Related KNIFE Articles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This report is part of a broader knowledge framework. Related topics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "KNIFE (planned)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "**[1]Reality mapping into digital world – Why and how"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "../K000103-CAA_IN_SDLC/",
              children: "KNIFE_103"
            }), "Why we digitise reality, SDLC context, role-based understanding, CAA approach, tooling landscape. The Coffee Machine model used in this test is a practical example."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "[2]MCP Transport – STDIO vs SSE vs Streamable HTTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision tree for enterprise AI integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "[3]Prompt Engineering for  AI Agents"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist: role, tool constraints, failure handling, output format, forbidden actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "**[4]TRERADO - AML **"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture Lifecycle management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "[5]TAXONMY and Ontology in modeling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assets -Perspectives -View methodology"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] MariaDB – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://mariadb.org",
        children: "https://mariadb.org"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[2] Bizzdesign Horizzon – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://bizzdesign.com",
        children: "https://bizzdesign.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[3] Kernaro AI for EA – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://kernaro.sparxsystems.com",
        children: "https://kernaro.sparxsystems.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[4] Anthropic Console – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.anthropic.com",
        children: "https://console.anthropic.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[5] Sparx Systems EA – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sparxsystems.com/products/ea/",
        children: "https://sparxsystems.com/products/ea/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[6] Sparx Systems Japan MCP Server – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.sparxsystems.jp/en/MCP/",
        children: "https://www.sparxsystems.jp/en/MCP/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[7] EA AI Assist (native, build 1715+) – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://genie.sparxsystems.com/ai-assist-for-ea/",
        children: "https://genie.sparxsystems.com/ai-assist-for-ea/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[8] Prolaborate + Genie – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://prolaborate.sparxsystems.com",
        children: "https://prolaborate.sparxsystems.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[9] Trerado (EAM, SaaS) – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://trerado.sparxsystems.com",
        children: "https://trerado.sparxsystems.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[10] EVOLVIntel EA GraphLink – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.evolvintel.com",
        children: "https://www.evolvintel.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[11] Claude Desktop – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://claude.ai/download",
        children: "https://claude.ai/download"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knife-repository-knifessystemthinkingsk",
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["KNIFE repository: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://knifes.systemthinking.sk",
          children: "knifes.systemthinking.sk"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(98383)/* ["default"] */ .A),
      alt: "01-Intoduction/AI_ThreadOrOpportunity/CAA-Approach-In-SDLC.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-02]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(81912)/* ["default"] */ .A),
      alt: "01-Intoduction/CAA_In_SDLC/CAA-Approach-In-SDLC.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-03]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(69916)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-04]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(88637)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-05]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(63286)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-06]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(26439)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-07]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(52232)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-08]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(5897)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-09]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(97714)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-10]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(72163)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-11]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(58292)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-12]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(41944)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-13]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(48090)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-14]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(9105)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-15]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(33104)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-16]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(83087)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-17]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(69438)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-18]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(70085)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-19]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(54692)/* ["default"] */ .A),
      alt: "02-Configuration/CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-20]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(80607)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-AGENTS/01CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-21]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(71097)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-22]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(31280)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-23]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(42403)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-24]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(9842)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-25]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(97713)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/01-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-26]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(32498)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/02-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-27]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(56439)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/03-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-28]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(46808)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/04-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-29]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(35205)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/05-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-30]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(25334)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/06-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-31]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(27115)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/07-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-32]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(85036)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/08-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-33]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(10473)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/09-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-34]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(67815)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/10-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-35]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(62018)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/11-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-36]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(32993)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/12-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-37]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(37700)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Installation/13-INSTALL_KERNARO.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-38]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(91404)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-39]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(59599)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-40]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(28397)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-41]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(3809)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-42]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(49012)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/01-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-43]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(92657)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/02-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-44]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(67682)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/03-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-45]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(61223)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/04-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-46]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(17280)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/05-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-47]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(66333)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/06-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-48]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(30606)/* ["default"] */ .A),
      alt: "02-Configuration/KERNARO-Settings/07-KERNARO-Settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-49]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(33556)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A2-python-312-installed.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-50]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(22776)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A2-python-install-manager.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-51]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(34993)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A2-python-installing-312.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-52]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(58270)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A4-chat-agent-settings.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-53]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(94644)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A5-python-execution-empty.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-54]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(72924)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A5-python-execution-empty2.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-55]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(74976)/* ["default"] */ .A),
      alt: "02-Configuration/Python/A5-python-verified.png",
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

/***/ 88637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-Claude-paltform-config-ff20696bf3c5c3c87342f4d2fd32c81c.png");

/***/ }),

/***/ 91404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-KERNARO-Settings-ChatAgent-64cd719a7a06065f3ffd7c631b2df18c.png");

/***/ }),

/***/ 92657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-KERNARO-Settings-1c515d98531b6ef071cc32bc3f76b919.png");

/***/ }),

/***/ 94644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A5-python-execution-empty-0d3d7b5918ae6b00a687835be8a43a03.png");

/***/ }),

/***/ 97713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-INSTALL_KERNARO-17c82dbcb030deb28c6d4a2da8a344cf.png");

/***/ }),

/***/ 97714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-Claude-paltform-config-639151c3384e324915c486f639b50a42.png");

/***/ }),

/***/ 98383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CAA-Approach-In-SDLC-7accf2bc14eafc1191ccf1e6998ce14a.png");

/***/ })

}]);