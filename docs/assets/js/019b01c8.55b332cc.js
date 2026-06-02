"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[99007],{

/***/ 12822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-04-Taxonomy_Cost_Pools_and_Sub-Pools-c153e5aa8d1359597c63ad975e2379a4.png");

/***/ }),

/***/ 20836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Yarken_03-Dashboard-82950052fef6e630dc3288a7b453a15c.png");

/***/ }),

/***/ 28287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Yarken_01-Sankey-a5d3359e5635338aad09121410f1f6e5.png");

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

/***/ 29111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-07-Taxonomy_Solutions_Hierarchy_exam-e225e8363cd172f3a018bfee95795c7b.png");

/***/ }),

/***/ 49209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Yarken_02-Dashboard-18140677e2d655758bc520d0411aeb27.png");

/***/ }),

/***/ 60585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000107_taxonomy_and_ontology_k_000107_tbm_index_md_019_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000107-taxonomy-and-ontology-k-000107-tbm-index-md-019.json
const site_docs_sk_knifes_k_000107_taxonomy_and_ontology_k_000107_tbm_index_md_019_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000107_TaxonomyAndOntology/K000107-TBM-index","title":"K000107 – TBM: Technology Business Management","description":"TBM Taxonómia prepája IT výdavky s obchodnou hodnotou. Ako TBM Council formalizoval slovník IT nákladov — a ako platformy ako Yärken ho implementujú vo veľkom.","source":"@site/docs/sk/knifes/K000107_TaxonomyAndOntology/K000107-TBM-index.md","sourceDirName":"sk/knifes/K000107_TaxonomyAndOntology","slug":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-TBM-index","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-TBM-index","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"TBM","permalink":"/doc-tags/tbm"},{"inline":true,"label":"Taxonomy","permalink":"/doc-tags/taxonomy"},{"inline":true,"label":"FinOps","permalink":"/doc-tags/fin-ops"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"Yarken","permalink":"/doc-tags/yarken"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"K000107-TBM-index","guid":"fba4d69a-df7e-4d9c-aa6b-1328f29b141c","dao":"knife","title":"K000107 – TBM: Technology Business Management","description":"TBM Taxonómia prepája IT výdavky s obchodnou hodnotou. Ako TBM Council formalizoval slovník IT nákladov — a ako platformy ako Yärken ho implementujú vo veľkom.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["TBM","Taxonomy","FinOps","SDLC","EnterpriseArchitecture","CAA","Yarken"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"draft","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000107 – SFIA: Skills Framework for the Information Age","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-SFIA-index"},"next":{"title":"K000108 – Quick Response Manufacturing (QRM)","permalink":"/sk/knifes/K000108-QRM/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000107_TaxonomyAndOntology/K000107-TBM-index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000107-TBM-index',
	guid: 'fba4d69a-df7e-4d9c-aa6b-1328f29b141c',
	dao: 'knife',
	title: 'K000107 – TBM: Technology Business Management',
	description: 'TBM Taxonómia prepája IT výdavky s obchodnou hodnotou. Ako TBM Council formalizoval slovník IT nákladov — a ako platformy ako Yärken ho implementujú vo veľkom.',
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
	locale: 'sk',
	created: '2026-06-02 00:00',
	modified: '2026-06-02 00:00',
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
const contentTitle = 'TBM – Technology Business Management';

const assets = {

};



const toc = [{
  "value": "🧩 Slovník IT nákladov",
  "id": "-slovník-it-nákladov",
  "level": 2
}, {
  "value": "TBM Taxonómia 5.0",
  "id": "tbm-taxonómia-50",
  "level": 2
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
  "value": "Yärken – TBM v praxi",
  "id": "yärken--tbm-v-praxi",
  "level": 2
}, {
  "value": "TBM v praxi",
  "id": "tbm-v-praxi",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
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
        id: "tbm--technology-business-management",
        children: "TBM – Technology Business Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Súčasť ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./",
          children: "K000107 – Taxonómia a ontológia v SDLC"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-slovník-it-nákladov",
      children: "🧩 Slovník IT nákladov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TBM rieši slovník IT nákladov — prepája technologické výdavky s obchodnou hodnotou."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TBM Council (founded 2012) formalizoval disciplínu, ktorá pomáha organizáciám prepojiť technologické náklady, spotrebu a výkonnosť s obchodnými výsledkami. TBM Taxonómia poskytuje spoločný jazyk naprieč Financiami, IT a Businessom."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kľúčový princíp: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ak to nedokážeš konzistentne pomenovať, nedokážeš to merať. Ak to nedokážeš merať, nedokážeš to riadiť."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tbm-taxonómia-50",
      children: "TBM Taxonómia 5.0"
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
        src: (__webpack_require__(78660)/* ["default"] */ .A),
        alt: "TBM Taxonómia 5.0 – súhrnný pohľad: Technology Consumers, Solutions, Resource Towers, Cost Pools",
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
        src: (__webpack_require__(87012)/* ["default"] */ .A),
        alt: "TBM Konceptuálny model – ako sa prepájajú vrstvy taxonómie",
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
        src: (__webpack_require__(71564)/* ["default"] */ .A),
        alt: "TBM Technology Resource Towers a Sub-Towers",
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
        src: (__webpack_require__(70281)/* ["default"] */ .A),
        alt: "TBM Hierarchia Towers – Domain, Tower, Sub-Tower, Sub-Tower Element, Tags",
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
        src: (__webpack_require__(12822)/* ["default"] */ .A),
        alt: "TBM Cost Pools a Sub-Pools – od finančných zdrojových dát po alokáciu technológií",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solutions",
      children: "Solutions"
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
        src: (__webpack_require__(73758)/* ["default"] */ .A),
        alt: "TBM Solutions – pohľad Type a Category",
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
        src: (__webpack_require__(29111)/* ["default"] */ .A),
        alt: "TBM Hierarchia Solutions – praktický príklad",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technology-consumers",
      children: "Technology Consumers"
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
        src: (__webpack_require__(70553)/* ["default"] */ .A),
        alt: "TBM Technology Consumers – Business Functions, Value Streams, Partners, External",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "yärken--tbm-v-praxi",
      children: "Yärken – TBM v praxi"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Yärken"
      }), " je FinOps a TBM platforma, ktorá implementuje TBM Taxonómiu ako funkčný produkt — pomáha podnikom spravovať cloud, SaaS a IT náklady pomocou AI-driven insights. Je to konkrétny príklad taxonómie umožňujúcej obchodnú hodnotu vo veľkom."]
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
        src: (__webpack_require__(28287)/* ["default"] */ .A),
        alt: "Yärken – Sankey diagram tokov IT nákladov",
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
        src: (__webpack_require__(49209)/* ["default"] */ .A),
        alt: "Yärken – Dashboard: prehľad FinOps a TBM nákladov",
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
        src: (__webpack_require__(20836)/* ["default"] */ .A),
        alt: "Yärken – detailný pohľad dashboardu",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tbm-v-praxi",
      children: "TBM v praxi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TBM vyžaduje organizačný záväzok — nie je to technologický projekt.\nZačni s jednou nákladovou doménou (napr. cloud), aplikuj TBM Taxonómiu, dokáž hodnotu, potom rozšír.\nYärken a podobné platformy automatizujú aplikáciu taxonómie naprieč zdrojmi dát."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Taxonómia je governance, nie technológia",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Najväčšia chyba: kúpiš nástroj a nazveš to taxonómiou.\nTaxonómia je v prvom rade rozhodnutie o governance. V druhom rade procesné rozhodnutie. V treťom rade technologické rozhodnutie."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./K000107-APV-index",
          children: "APV – Assets, Perspectives, Views"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./",
          children: "Späť na prehľad K000107"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
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

/***/ 70281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-05-Taxonomy_Towers_Hierarchy-95646634530411f579af3dc3c2502e8f.png");

/***/ }),

/***/ 70553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-08-Taxonomy_Solution_Consumers-29464a3f1e3eef2beb405e148cd77d92.png");

/***/ }),

/***/ 71564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-03-Taxonomy_Tower_and_Sub-Towers-90c6f37e0b9272bd0292661e20c036ef.png");

/***/ }),

/***/ 73758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-06-Taxonomy_Solutions-Type-Category_View-16493141d1524e3acf6230b0128d8934.png");

/***/ }),

/***/ 78660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-01-Taxonomy_5_0_Summary_View-068519b368ac0afdce19fec17130c5a1.png");

/***/ }),

/***/ 87012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TBM-02-Conceptual_TBM_Model-dc05914f3a509e56ce72e9dd4b4672ff.png");

/***/ })

}]);