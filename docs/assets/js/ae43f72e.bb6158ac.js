"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[10116],{

/***/ 18522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_b_2_document_generation_kernaro_chat_b_2_document_generation_md_ae4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-04-kernaro-chat-b-2-document-generation-kernaro-chat-b-2-document-generation-md-ae4.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_b_2_document_generation_kernaro_chat_b_2_document_generation_md_ae4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2","title":"B2 – Document Generation","description":"Kernaro Chat – Word document generation from an EA model, including context injection behaviour and stop generation.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B2-document-generation/kernaro-chat-B2-document-generation.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B2-document-generation","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-04-chat-b2","guid":"b4c9e3d2-5c0f-6a7b-8d9e-0f1a2b3c4d5e","dao":"knife","title":"B2 – Document Generation","description":"Kernaro Chat – Word document generation from an EA model, including context injection behaviour and stop generation.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-04 00:00","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"B1 – Model Statistics","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B1-model-statistics/K000104-04-chat-b1"},"next":{"title":"B3 – TOC Generation","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B2-document-generation/kernaro-chat-B2-document-generation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-04-chat-b2',
	guid: 'b4c9e3d2-5c0f-6a7b-8d9e-0f1a2b3c4d5e',
	dao: 'knife',
	title: 'B2 – Document Generation',
	description: 'Kernaro Chat – Word document generation from an EA model, including context injection behaviour and stop generation.',
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
const contentTitle = 'B2 – Document Generation';

const assets = {

};



const toc = [{
  "value": "B3 · Document generation – Coffee Machine Use Case",
  "id": "b3--document-generation--coffee-machine-use-case",
  "level": 2
}, {
  "value": "B3.1 · Stop generation",
  "id": "b31--stop-generation",
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
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "b2--document-generation",
        children: "B2 – Document Generation"
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
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B1-model-statistics/K000104-04-chat-b1",
        children: "B1 – Model Statistics"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3",
        children: "B3 – TOC Generation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b3--document-generation--coffee-machine-use-case",
      children: "B3 · Document generation – Coffee Machine Use Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Create a Use Case specification for a Coffee Machine system including functional requirements, Status diagram, and Activity diagram. Generate a Word document from the result."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test model:"
      }), " Empty QEA (SQLite) file, populated during the test session."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ✅ Document was generated and was usable for stakeholder communication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro's planned approach (presented before execution):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script Agent exports the package/diagram structure to JSON"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document Agent uses Python + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python-docx"
        }), " to build the Word document with TOC, H1/H2 headings per package level, and diagram names"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b31--stop-generation",
      children: "B3.1 · Stop generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "product-links",
      children: "Product links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] Anthropic Console – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.anthropic.com",
        children: "https://console.anthropic.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B1-model-statistics/K000104-04-chat-b1",
        children: "B1 – Model Statistics"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3",
        children: "B3 – TOC Generation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-01"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(61344)/* ["default"] */ .A),
      alt: "img/11-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-02"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-02]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(74757)/* ["default"] */ .A),
      alt: "img/12-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-03"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-03]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(86142)/* ["default"] */ .A),
      alt: "img/13-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-04"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-04]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(58243)/* ["default"] */ .A),
      alt: "img/14-KERNARO-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-05"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-05]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(52131)/* ["default"] */ .A),
      alt: "img/15-CLAUDE-Tokens-Chat.png",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-06"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-06]"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(40886)/* ["default"] */ .A),
      alt: "img/16-STOP-KERNARO-Chat.png",
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

/***/ 40886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16-STOP-KERNARO-Chat-7dd1b65aa2234e96d70d0d963b692544.png");

/***/ }),

/***/ 52131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15-CLAUDE-Tokens-Chat-0cef7acdb32b83ee413eb20008a339ad.png");

/***/ }),

/***/ 58243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14-KERNARO-Chat-e9e9be091b1b0dc0f174d3176066007d.png");

/***/ }),

/***/ 61344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11-KERNARO-Chat-0dc87ed3798c79cc4d3dc45337c1e5ef.png");

/***/ }),

/***/ 74757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12-KERNARO-Chat-58fb757bbb13744996727a4f8942adf5.png");

/***/ }),

/***/ 86142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13-KERNARO-Chat-4ea07e7bdc1ed232a9432f2a13fc580a.png");

/***/ })

}]);