"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[11009],{

/***/ 14048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-APV-Relationship-REF-INST-a2ca212bfad3bf2a820a6b24600a20f8.png");

/***/ }),

/***/ 20580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-Digital-Reality-05da05f842a0ae5c6aebe9489b88df57.png");

/***/ }),

/***/ 26823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-APV-Layers-2942a954ae058c2d9b881748385ca7ca.png");

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

/***/ 54292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-Ref_Inst-bae51af784c9ec9b8feef2b2946b31f7.png");

/***/ }),

/***/ 56134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-APV-Example-740822df8cb73b7e4d22e857e432003a.png");

/***/ }),

/***/ 61337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-APV-Pillars-53f6d461131087dfec77c3ff837acdc7.png");

/***/ }),

/***/ 89314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000107_taxonomy_and_ontology_k_000107_apv_index_md_e2f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000107-taxonomy-and-ontology-k-000107-apv-index-md-e2f.json
const site_docs_sk_knifes_k_000107_taxonomy_and_ontology_k_000107_apv_index_md_e2f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000107_TaxonomyAndOntology/K000107-APV-index","title":"K000107 – APV: Assets, Perspectives, Views","description":"APV nevznikol z akademického výskumu. Vznikol na výrobných linkách. Ako rámec postavený na Technickej kybernetike, Six Sigma a výrobnej kvalite rieši medzeru v slovníku IT a SDLC.","source":"@site/docs/sk/knifes/K000107_TaxonomyAndOntology/K000107-APV-index.md","sourceDirName":"sk/knifes/K000107_TaxonomyAndOntology","slug":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-APV-index","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-APV-index","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"APV","permalink":"/doc-tags/apv"},{"inline":true,"label":"SFIA","permalink":"/doc-tags/sfia"},{"inline":true,"label":"Taxonomy","permalink":"/doc-tags/taxonomy"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"K000107-APV-index","guid":"9a31b47e-a952-49b2-9a6f-858e1db7fb1b","dao":"knife","title":"K000107 – APV: Assets, Perspectives, Views","description":"APV nevznikol z akademického výskumu. Vznikol na výrobných linkách. Ako rámec postavený na Technickej kybernetike, Six Sigma a výrobnej kvalite rieši medzeru v slovníku IT a SDLC.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["APV","SFIA","Taxonomy","SDLC","EnterpriseArchitecture","CAA"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"draft","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000107 – Taxonómia a ontológia v SDLC","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/"},"next":{"title":"K000107 – SFIA: Skills Framework for the Information Age","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-SFIA-index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000107_TaxonomyAndOntology/K000107-APV-index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000107-APV-index',
	guid: '9a31b47e-a952-49b2-9a6f-858e1db7fb1b',
	dao: 'knife',
	title: 'K000107 – APV: Assets, Perspectives, Views',
	description: 'APV nevznikol z akademického výskumu. Vznikol na výrobných linkách. Ako rámec postavený na Technickej kybernetike, Six Sigma a výrobnej kvalite rieši medzeru v slovníku IT a SDLC.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'APV',
		'SFIA',
		'Taxonomy',
		'SDLC',
		'EnterpriseArchitecture',
		'CAA'
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
const contentTitle = 'APV – Assets, Perspectives, Views';

const assets = {

};



const toc = [{
  "value": "🧩 Prečo slovník má väčší význam ako technológia",
  "id": "-prečo-slovník-má-väčší-význam-ako-technológia",
  "level": 2
}, {
  "value": "Odkiaľ APV pochádza",
  "id": "odkiaľ-apv-pochádza",
  "level": 2
}, {
  "value": "Rámec APV",
  "id": "rámec-apv",
  "level": 2
}, {
  "value": "Implementačné kroky APV",
  "id": "implementačné-kroky-apv",
  "level": 2
}, {
  "value": "SFIA – Skills Framework for the Information Age",
  "id": "sfia--skills-framework-for-the-information-age",
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
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "apv--assets-perspectives-views",
        children: "APV – Assets, Perspectives, Views"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Súčasť ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./",
          children: "K000107 – Taxonómia a ontológia v SDLC"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-prečo-slovník-má-väčší-význam-ako-technológia",
      children: "🧩 Prečo slovník má väčší význam ako technológia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automotive to vyriešil systematicky — 8D (Ford Motor Company, 80. roky), Lean, Six Sigma, QRM.\nVo výrobných podnikoch je náklad zlej kvality štandardná agenda.\nV IT podnikoch som sa väčšinou stretával s deklaráciami, nie s konaním."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "QRM prepojenie",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Quick Response Manufacturing (Rajan Suri, 90. roky) explicitne rozšíril svoje princípy na kancelárske a znalostné pracovné procesy — presne na doménu, kde žije SDLC.\nOdkaz je rovnaký: bez spoločného slovníka nemôžeš merať. Bez merania nemôžeš zlepšovať."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "odkiaľ-apv-pochádza",
      children: "Odkiaľ APV pochádza"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APV nevznikol z akademického výskumu. Vznikol na výrobných linkách."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Môj titul bol z Technickej kybernetiky — meracej technológie a automatizácie.\nZákladné princípy: rýchla spätná väzba, detekcia odchýlok, proporcionálna nápravná akcia.\nTieto princípy platia nielen pre priemyselné riadiace systémy. Platia rovnako pre riadenie organizácií."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po škole som strávil niekoľko rokov vo výrobe — spotrebná elektronika (Philips, Sagem) a automobilové komponenty (Wabash Technology). Pracoval som na kvalite produktov pomocou SPC (Statistical Process Control), GR&R (Gage Reproducibility and Repeatability), Six Sigma, 5S a 8D."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toto neboli len nástroje. Bol to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spoločný slovník"
      }), ".\nKaždý na výrobnej linke — od technika po manažéra — rozumel, čo znamená „mimo kontroly\", čo znamená „koreňová príčina\", čo znamená „nápravná akcia\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď som prešiel do IT, narazil som na niečo nečakané: slovník chýbal.\nTo isté slovo znamenalo rôzne veci pre rôzne roly.\n„Architektúra\" pre infraštruktúrneho inžiniera a „architektúra\" pre business analytika boli dve rôzne veci.\nProjekty zlyhávali nie preto, že chýbala technológia, ale preto, že chýbalo spoločné porozumenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "APV je rámec, ktorý som vyvinul na riešenie tohto problému."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rámec-apv",
      children: "Rámec APV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assets (Aktíva)"
        }), " — čo existuje a čo treba spravovať"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perspectives (Perspektívy)"
        }), " — kto sa na to pozerá a z akého uhla"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Views (Pohľady)"
        }), " — čo skutočne vidia, filtrované pre ich rolu a kontext"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľ: udržiavať aktíva riešenia v poriadku, naprieč všetkými rolami, naprieč všetkými fázami SDLC."
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
        src: (__webpack_require__(20580)/* ["default"] */ .A),
        alt: "Fyzická mapa podniku vs. digitálna mapa – dve reality, ktoré APV prepája",
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
        src: (__webpack_require__(54292)/* ["default"] */ .A),
        alt: "Referenčný model vs. inštančný model – ako APV oddeľuje plán od reality",
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
        src: (__webpack_require__(26823)/* ["default"] */ .A),
        alt: "Vrstvy rámca APV – Assets, Perspectives, Views v štrukturálnom kontexte",
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
        src: (__webpack_require__(61337)/* ["default"] */ .A),
        alt: "Piliere APV – štyri podporné dimenzie rámca",
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
        src: (__webpack_require__(14048)/* ["default"] */ .A),
        alt: "Vzťah APV medzi referenčným a inštančným modelom",
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
        src: (__webpack_require__(56134)/* ["default"] */ .A),
        alt: "Praktický príklad APV – aplikácia Assets, Perspectives, Views v reálnom projekte",
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
        src: (__webpack_require__(99878)/* ["default"] */ .A),
        alt: "APV proces v každodennej praxi – od pojmového prvku po slovník",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "APV v troch otázkach",
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Pred tým, než začneš budovať akýkoľvek model alebo dokument v SDLC:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Aké ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "aktívum"
          }), " opisujeme?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Z čej ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "perspektívy"
          }), " sa naň pozeráme?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Aký ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "pohľad"
          }), " tento stakeholder skutočne potrebuje vidieť?"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementačné-kroky-apv",
      children: "Implementačné kroky APV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identifikuj kľúčové ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Aktíva"
        }), " — aké prvky riešenia treba modelovať a spravovať"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Namapuj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stakeholderov"
        }), " a ich perspektívy — koho čo zaujíma"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Definuj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pohľady"
        }), " — čo každý stakeholder skutočne potrebuje vidieť (nie všetko, len relevantný výrez)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementuj v tvojom nástroji (Enterprise Architect, GitHub alebo akýkoľvek štruktúrovaný repozitár)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iteruj — slovník sa vyvíja spolu s riešením"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sfia--skills-framework-for-the-information-age",
      children: "SFIA – Skills Framework for the Information Age"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak APV rieši slovník aktív riešenia, SFIA rieši slovník ľudí, ktorí ich dodávajú."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kde APV udržiava aktíva riešenia v poriadku, SFIA udržiava schopnosti tímu v poriadku.\nOba rámce riešia ten istý koreňový problém z rôznych uhlov: bez spoločného slovníka nemôžeš merať a bez merania nemôžeš riadiť."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["→ Pozri samostatnú stránku: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./K000107-SFIA-index",
        children: "K000107 – SFIA"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Nie každý vytvára — ale každý konzumuje",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Nepotrebuješ budovať úplnú taxonómiu, aby si z nej mal úžitok.\nCieľom je mať jeden autoritatívny zdroj, na ktorý sa môžu spoľahnúť všetky roly.\nZačni so slovníkom, ktorý prechádza najviac hranicami vo vašej organizácii."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./",
          children: "Späť na prehľad K000107"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./K000107-TBM-index",
          children: "TBM – Technology Business Management →"
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

/***/ 99878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08-APV-DailyProcess-43937e22dfd3bf0698d9cc937dade5ec.png");

/***/ })

}]);