"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[9536],{

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

/***/ 67309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_01_intoduction_ai_supported_sdlc_md_5ed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-01-intoduction-ai-supported-sdlc-md-5ed.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_01_intoduction_ai_supported_sdlc_md_5ed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc","title":"AI-Supported SDLC","description":"Introduction to AI-supported Software Development Lifecycle in the context of KERNARO and the CAA approach.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/01-Intoduction/AI-Supported_SDLC.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/01-Intoduction","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-01-ai-sdlc","guid":"a5f9f55b-0fec-4e28-b87f-aec7603d2037","dao":"knife","title":"AI-Supported SDLC","description":"Introduction to AI-supported Software Development Lifecycle in the context of KERNARO and the CAA approach.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000104 – SPARX-AI KERNARO in context of SDLC support","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/"},"next":{"title":"AI: Threat or Opportunity?","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/AI_ThreadOrOpportunity/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/01-Intoduction/AI-Supported_SDLC.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-01-ai-sdlc',
	guid: 'a5f9f55b-0fec-4e28-b87f-aec7603d2037',
	dao: 'knife',
	title: 'AI-Supported SDLC',
	description: 'Introduction to AI-supported Software Development Lifecycle in the context of KERNARO and the CAA approach.',
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
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Images",
  "id": "images",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This article is being actively worked on. Content may be incomplete or subject to change."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From practice, I have come to understand that a large part of my creative activities can be generally described using the principles defined in the V-model. In practice, the term Software Development Life Cycle (SDLC) is now commonly used."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Another principle I have understood and explicitly work with is CAA – Context Aware Approach. There is no solution without multiple contexts. Understanding the key contexts has a fundamental impact on the outcome. At the same time, I am aware that there are contexts unknown to me that are of fundamental significance to any solution."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even when writing this article, I followed these basic principles. The subject in my context for this article is testing AI-Kernaro."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "My contexts are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long-term knowledge of Sparx Systems technologies (25+ years) – Enterprise Architect, ProCloud Server, PROLABORATE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Several years of experience with LieberLieber technology for Git support in parallel modelling – LemonTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular use of AI in professional and personal solutions across the SDLC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long-term personal experience across all SDLC phases: from business and top-level architecture (TOGAF) – concepts and purpose – through testing (ISTQB), operations, and change management (ITIL)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The image highlights the context-aware approach, the division of SDLC into individual phases, and the perspective of Sparx Systems technologies in supporting each phase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This perspective also defined my testing strategy for AI-Kernaro, described in the next chapter."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-01"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(98383)/* ["default"] */ .A),
      alt: "AI_ThreadOrOpportunity/CAA-Approach-In-SDLC.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-02"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-02]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(81912)/* ["default"] */ .A),
      alt: "CAA_In_SDLC/CAA-Approach-In-SDLC.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/A1-kernaro/K000104-02-kernaro-config",
        children: "A – Configuration"
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

/***/ 81912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CAA-Approach-In-SDLC-7accf2bc14eafc1191ccf1e6998ce14a.png");

/***/ }),

/***/ 98383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CAA-Approach-In-SDLC-7accf2bc14eafc1191ccf1e6998ce14a.png");

/***/ })

}]);