"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[27345],{

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

/***/ 59007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_01_intoduction_ai_thread_or_opportunity_ai_thread_or_opportunity_md_9c9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-01-intoduction-ai-thread-or-opportunity-ai-thread-or-opportunity-md-9c9.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_01_intoduction_ai_thread_or_opportunity_ai_thread_or_opportunity_md_9c9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/AI_ThreadOrOpportunity/K000104-01-ai-threat","title":"AI: Threat or Opportunity?","description":"A framing perspective on artificial intelligence in enterprise architecture — is it a risk or a catalyst for better SDLC practices?","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/01-Intoduction/AI_ThreadOrOpportunity/AI_ThreadOrOpportunity.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/01-Intoduction/AI_ThreadOrOpportunity","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/AI_ThreadOrOpportunity/","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/AI_ThreadOrOpportunity/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-01-ai-threat","guid":"2dbdb0a3-a004-4f58-8fb4-e51a6f7ffd73","dao":"knife","title":"AI: Threat or Opportunity?","description":"A framing perspective on artificial intelligence in enterprise architecture — is it a risk or a catalyst for better SDLC practices?","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-05-06 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"AI-Supported SDLC","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc"},"next":{"title":"A – Configuration","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Configuration/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/01-Intoduction/AI_ThreadOrOpportunity/AI_ThreadOrOpportunity.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-01-ai-threat',
	guid: '2dbdb0a3-a004-4f58-8fb4-e51a6f7ffd73',
	dao: 'knife',
	title: 'AI: Threat or Opportunity?',
	description: 'A framing perspective on artificial intelligence in enterprise architecture — is it a risk or a catalyst for better SDLC practices?',
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
	modified: '2026-05-06 00:00',
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
const contentTitle = 'AI: Threat or Opportunity?';

const assets = {

};



const toc = [{
  "value": "AI in SDLC context",
  "id": "ai-in-sdlc-context",
  "level": 2
}, {
  "value": "Quality gate",
  "id": "quality-gate",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ai-threat-or-opportunity",
        children: "AI: Threat or Opportunity?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc",
        children: "Introduction"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The narrative ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"AI will replace people\""
      }), " is repeated often — but without precise context, it generates more anxiety than insight."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The moment context is defined, the picture becomes more nuanced. The relevant question is not ", (0,jsx_runtime.jsx)(_components.em, {
        children: "whether"
      }), " AI changes roles in the SDLC, but ", (0,jsx_runtime.jsx)(_components.em, {
        children: "which activities"
      }), " within each role are affected, and in which direction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-in-sdlc-context",
      children: "AI in SDLC context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Roles whose activities are focused on routine, repeatable work are already being augmented or replaced. This is observable, not theoretical. The more important question is whether freed capacity is redirected toward higher-quality work — or simply eliminated."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["From the perspective of Enterprise Architecture and SDLC practice, AI tools such as Kernaro shift the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how"
      }), " of modelling work:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Routine documentation tasks (Notes completeness, tag validation, report generation) can be delegated to agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex structural decisions, methodology governance, and cross-domain communication remain human responsibilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The boundary between the two is moving — and context-specific"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quality-gate",
      children: "Quality gate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Quality output from AI assumes quality input from humans and systems.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Quality input assumes systematic work — taxonomy, ontology, consistent modelling conventions — which most organisations are only beginning to address."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI is not a shortcut. It is a catalyst — for those who are prepared."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Intoduction/K000104-01-ai-sdlc",
        children: "Introduction"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        src: (__webpack_require__(98383)/* ["default"] */ .A),
        alt: "CAA-Approach-In-SDLC.png",
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

/***/ 98383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CAA-Approach-In-SDLC-7accf2bc14eafc1191ccf1e6998ce14a.png");

/***/ })

}]);