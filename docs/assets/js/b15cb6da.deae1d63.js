"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[32637],{

/***/ 3245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-02-Conceptual_TBM_Model-dc05914f3a509e56ce72e9dd4b4672ff.png");

/***/ }),

/***/ 4120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-07-Taxonomy_Solutions_Hierarchy_exam-e225e8363cd172f3a018bfee95795c7b.png");

/***/ }),

/***/ 17507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-01-Taxonomy_5_0_Summary_View-068519b368ac0afdce19fec17130c5a1.png");

/***/ }),

/***/ 24939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-03-Taxonomy_Tower_and_Sub-Towers-90c6f37e0b9272bd0292661e20c036ef.png");

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

/***/ 28937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-04-Taxonomy_Cost_Pools_and_Sub-Pools-c153e5aa8d1359597c63ad975e2379a4.png");

/***/ }),

/***/ 60734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-08-Taxonomy_Solution_Consumers-29464a3f1e3eef2beb405e148cd77d92.png");

/***/ }),

/***/ 72628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000107_en_taxonomy_and_ontology_k_000107_tbm_index_md_b15_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000107-en-taxonomy-and-ontology-k-000107-tbm-index-md-b15.json
const site_docs_en_knifes_k_000107_en_taxonomy_and_ontology_k_000107_tbm_index_md_b15_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000107_EN-TaxonomyAndOntology/K000107-TBM-index","title":"K000107 – TBM: Technology Business Management","description":"TBM Taxonomy connects technology spending to business value. How TBM Council formalised the vocabulary of IT costs — and how platforms like Yärken implement it at scale.","source":"@site/docs/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-TBM-index.md","sourceDirName":"en/knifes/K000107_EN-TaxonomyAndOntology","slug":"/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-TBM-index","permalink":"/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-TBM-index","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"TBM","permalink":"/doc-tags/tbm"},{"inline":true,"label":"Taxonomy","permalink":"/doc-tags/taxonomy"},{"inline":true,"label":"FinOps","permalink":"/doc-tags/fin-ops"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"Yarken","permalink":"/doc-tags/yarken"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-01T00:00:00.000000+00:00","fm_version_comment":"","id":"K000107-TBM-index","guid":"","dao":"knife","title":"K000107 – TBM: Technology Business Management","description":"TBM Taxonomy connects technology spending to business value. How TBM Council formalised the vocabulary of IT costs — and how platforms like Yärken implement it at scale.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["TBM","Taxonomy","FinOps","SDLC","EnterpriseArchitecture","CAA","Yarken"],"locale":"en","created":"2026-06-01 00:00","modified":"2026-06-01 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000107 – SFIA: Skills Framework for the Information Age","permalink":"/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-SFIA-index"},"next":{"title":"K000108 – Quick Response Manufacturing (QRM)","permalink":"/en/knifes/K000108-QRM/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-TBM-index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-01T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000107-TBM-index',
	guid: '',
	dao: 'knife',
	title: 'K000107 – TBM: Technology Business Management',
	description: 'TBM Taxonomy connects technology spending to business value. How TBM Council formalised the vocabulary of IT costs — and how platforms like Yärken implement it at scale.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'TBM',
		'Taxonomy',
		'FinOps',
		'SDLC',
		'EnterpriseArchitecture',
		'CAA',
		'Yarken'
	],
	locale: 'en',
	created: '2026-06-01 00:00',
	modified: '2026-06-01 00:00',
	status: 'published',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Roman Kazicka',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka'
};
const contentTitle = 'TBM – Technology Business Management';

const assets = {

};



const toc = [{
  "value": "🧩 The vocabulary of IT costs",
  "id": "-the-vocabulary-of-it-costs",
  "level": 2
}, {
  "value": "TBM Taxonomy 5.0",
  "id": "tbm-taxonomy-50",
  "level": 2
}, {
  "value": "TBM Taxonomy 5.0 Summary View – Technology Consumers, Solutions, Resource Towers, Cost Pools",
  "id": "tbm-taxonomy-50-summary-view--technology-consumers-solutions-resource-towers-cost-pools",
  "level": 3
}, {
  "value": "TBM Conceptual Model – how the taxonomy layers connect",
  "id": "tbm-conceptual-model--how-the-taxonomy-layers-connect",
  "level": 3
}, {
  "value": "Technology Resource Towers",
  "id": "technology-resource-towers",
  "level": 2
}, {
  "value": "Cost Pools",
  "id": "cost-pools",
  "level": 2
}, {
  "value": "Solutions",
  "id": "solutions",
  "level": 2
}, {
  "value": "Technology Consumers",
  "id": "technology-consumers",
  "level": 2
}, {
  "value": "TBM Technology Consumers – Business Functions, Value Streams, Partners, External",
  "id": "tbm-technology-consumers--business-functions-value-streams-partners-external",
  "level": 3
}, {
  "value": "Yärken – TBM in practice",
  "id": "yärken--tbm-in-practice",
  "level": 2
}, {
  "value": "Yärken – Sankey diagram of IT cost flows",
  "id": "yärken--sankey-diagram-of-it-cost-flows",
  "level": 3
}, {
  "value": "Yärken – Dashboard detail view",
  "id": "yärken--dashboard-detail-view",
  "level": 3
}, {
  "value": "TBM in practice",
  "id": "tbm-in-practice",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "tbm--technology-business-management",
        children: "TBM – Technology Business Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Part of ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./",
          children: "K000107 – Taxonomy and Ontology in SDLC"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-the-vocabulary-of-it-costs",
      children: "🧩 The vocabulary of IT costs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TBM addresses the vocabulary of IT costs — connecting technology spending to business value."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Founded in 2012, the TBM Council formalised a discipline that helps organisations link technology costs, consumption, and performance to business outcomes. TBM Taxonomy provides a common language across Finance, IT, and Business."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key principle: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "if you cannot name it consistently, you cannot measure it. If you cannot measure it, you cannot manage it."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tbm-taxonomy-50",
      children: "TBM Taxonomy 5.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tbm-taxonomy-50-summary-view--technology-consumers-solutions-resource-towers-cost-pools",
      children: "TBM Taxonomy 5.0 Summary View – Technology Consumers, Solutions, Resource Towers, Cost Pools"
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
        src: (__webpack_require__(17507)/* ["default"] */ .A),
        alt: "TBM Taxonomy 5.0 Summary View – Technology Consumers, Solutions, Resource Towers, Cost Pools",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tbm-conceptual-model--how-the-taxonomy-layers-connect",
      children: "TBM Conceptual Model – how the taxonomy layers connect"
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
        src: (__webpack_require__(3245)/* ["default"] */ .A),
        alt: "TBM Conceptual Model – how the taxonomy layers connect",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technology-resource-towers",
      children: "Technology Resource Towers"
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
        src: (__webpack_require__(24939)/* ["default"] */ .A),
        alt: "TBM Technology Resource Towers and Sub-Towers",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
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
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(94050)/* ["default"] */ .A),
        alt: "TBM Towers Hierarchy – Domain, Tower, Sub-Tower, Sub-Tower Element, Tags",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cost-pools",
      children: "Cost Pools"
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
        src: (__webpack_require__(28937)/* ["default"] */ .A),
        alt: "TBM Cost Pools and Sub-Pools – from financial source data to technology allocation",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solutions",
      children: "Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "###TBM Solutions – Type and Category View"
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
        src: (__webpack_require__(92469)/* ["default"] */ .A),
        alt: "TBM Solutions – Type and Category View",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "###TBM Solutions Hierarchy – practical example"
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
        src: (__webpack_require__(4120)/* ["default"] */ .A),
        alt: "TBM Solutions Hierarchy – practical example",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technology-consumers",
      children: "Technology Consumers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tbm-technology-consumers--business-functions-value-streams-partners-external",
      children: "TBM Technology Consumers – Business Functions, Value Streams, Partners, External"
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
        src: (__webpack_require__(60734)/* ["default"] */ .A),
        alt: "TBM Technology Consumers – Business Functions, Value Streams, Partners, External",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "yärken--tbm-in-practice",
      children: "Yärken – TBM in practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Yärken"
      }), " is a FinOps and TBM platform that implements TBM Taxonomy as a working product — helping enterprises manage cloud, SaaS, and IT costs with AI-driven insights. It is a concrete example of taxonomy enabling business value at scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yärken--sankey-diagram-of-it-cost-flows",
      children: "Yärken – Sankey diagram of IT cost flows"
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
        src: (__webpack_require__(86536)/* ["default"] */ .A),
        alt: "Yärken – Sankey diagram of IT cost flows",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "###Yärken – Dashboard: FinOps and TBM cost visibility overview"
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
        src: (__webpack_require__(78276)/* ["default"] */ .A),
        alt: "Yärken – Dashboard: FinOps and TBM cost visibility overview",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yärken--dashboard-detail-view",
      children: "Yärken – Dashboard detail view"
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
        src: (__webpack_require__(90297)/* ["default"] */ .A),
        alt: "Yärken – Dashboard detail view",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tbm-in-practice",
      children: "TBM in practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TBM requires organisational commitment — it is not a technology project.\nStart with one cost domain (e.g. cloud), apply TBM Taxonomy, prove value, then expand.\nYärken and similar platforms automate the taxonomy application across data sources."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Taxonomy is governance, not technology",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The biggest mistake: buying a tool and calling it a taxonomy.\nTaxonomy is a governance decision first. A process decision second. A technology decision third."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./K000107-APV-index",
          children: "APV – Assets, Perspectives, Views"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./",
          children: "Back to K000107 overview"
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



/***/ }),

/***/ 78276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Yarken_02-Dashboard-18140677e2d655758bc520d0411aeb27.png");

/***/ }),

/***/ 86536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Yarken_01-Sankey-a5d3359e5635338aad09121410f1f6e5.png");

/***/ }),

/***/ 90297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Yarken_03-Dashboard-82950052fef6e630dc3288a7b453a15c.png");

/***/ }),

/***/ 92469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-06-Taxonomy_Solutions-Type-Category_View-16493141d1524e3acf6230b0128d8934.png");

/***/ }),

/***/ 94050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-05-Taxonomy_Towers_Hierarchy-95646634530411f579af3dc3c2502e8f.png");

/***/ })

}]);