"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[2480],{

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-iceberg-ssot-71ce2c030395b380b281bd1d5d2c4078.png");

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

/***/ 40325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/00-Islands-3dd1d3b961f5d91f5f3b0cdcd1399561.png");

/***/ }),

/***/ 42336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-Solid-Building-b059ee469c8aa123391720f513a6fc1a.png");

/***/ }),

/***/ 51810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-babylon-4b9a651f2ed87e7501c9c982d02e82d4.png");

/***/ }),

/***/ 66196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-multiple-wells-c7d9bf013d7ca25b1aa04367937fdf31.png");

/***/ }),

/***/ 77906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-ants-53f7f76a034017ce513b12277406a1e7.png");

/***/ }),

/***/ 78726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000106_sso_tand_tssot_index_md_57d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000106-sso-tand-tssot-index-md-57d.json
const site_docs_sk_knifes_k_000106_sso_tand_tssot_index_md_57d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000106-SSOTandTSSOT/K000106_SK","title":"K000106 – SSOT a TSSOT: Koľko právd treba na úspešné riešenie?","description":"Single Source of Truth a Trusted Single Source of Truth — prečo konzistentné, overené dáta sú predpokladom úspešných riešení, efektívnej AI a zdieľaného porozumenia naprieč fázami SDLC.","source":"@site/docs/sk/knifes/K000106-SSOTandTSSOT/index.md","sourceDirName":"sk/knifes/K000106-SSOTandTSSOT","slug":"/sk/knifes/K000106-SSOTandTSSOT/","permalink":"/sk/knifes/K000106-SSOTandTSSOT/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SSOT","permalink":"/doc-tags/ssot"},{"inline":true,"label":"TSSOT","permalink":"/doc-tags/tssot"},{"inline":true,"label":"DataQuality","permalink":"/doc-tags/data-quality"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"K000106_SK","guid":"c37927c6-b969-436a-8c79-27207e14e6e7","dao":"knife","title":"K000106 – SSOT a TSSOT: Koľko právd treba na úspešné riešenie?","description":"Single Source of Truth a Trusted Single Source of Truth — prečo konzistentné, overené dáta sú predpokladom úspešných riešení, efektívnej AI a zdieľaného porozumenia naprieč fázami SDLC.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["SSOT","TSSOT","DataQuality","SDLC","CAA","EnterpriseArchitecture","AI"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"AI KERNARO","permalink":"/sk/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/"},"next":{"title":"K000107 – Taxonómia a ontológia v SDLC","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000106-SSOTandTSSOT/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000106_SK',
	guid: 'c37927c6-b969-436a-8c79-27207e14e6e7',
	dao: 'knife',
	title: 'K000106 – SSOT a TSSOT: Koľko právd treba na úspešné riešenie?',
	description: 'Single Source of Truth a Trusted Single Source of Truth — prečo konzistentné, overené dáta sú predpokladom úspešných riešení, efektívnej AI a zdieľaného porozumenia naprieč fázami SDLC.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'SSOT',
		'TSSOT',
		'DataQuality',
		'SDLC',
		'CAA',
		'EnterpriseArchitecture',
		'AI'
	],
	locale: 'sk',
	created: '2026-06-02 00:00',
	modified: '2026-06-02 00:00',
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
const contentTitle = 'KNIFE – SSOT a TSSOT';

const assets = {

};



const toc = [{
  "value": "Koľko právd treba na úspešné dodanie riešenia?",
  "id": "koľko-právd-treba-na-úspešné-dodanie-riešenia",
  "level": 2
}, {
  "value": "🎯 Čo to rieši",
  "id": "-čo-to-rieši",
  "level": 2
}, {
  "value": "🧩 Ako to rieši",
  "id": "-ako-to-rieši",
  "level": 2
}, {
  "value": "SSOT – Single Source of Truth",
  "id": "ssot--single-source-of-truth",
  "level": 3
}, {
  "value": "TSSOT – Trusted Single Source of Truth",
  "id": "tssot--trusted-single-source-of-truth",
  "level": 3
}, {
  "value": "Tri metafory, ktoré vysvetľujú problém",
  "id": "tri-metafory-ktoré-vysvetľujú-problém",
  "level": 3
}, {
  "value": "SSOT v kontexte SDLC",
  "id": "ssot-v-kontexte-sdlc",
  "level": 3
}, {
  "value": "🧪 Ako to použiť",
  "id": "-ako-to-použiť",
  "level": 2
}, {
  "value": "Otázky pred vyhlásením SSOT",
  "id": "otázky-pred-vyhlásením-ssot",
  "level": 3
}, {
  "value": "Úrovne zrelosti SSOT",
  "id": "úrovne-zrelosti-ssot",
  "level": 3
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Prečo je to dôležité pre AI",
  "id": "prečo-je-to-dôležité-pre-ai",
  "level": 3
}, {
  "value": "Spoločná metodológia — čo spája všetky studne",
  "id": "spoločná-metodológia--čo-spája-všetky-studne",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "Most k ďalšej téme",
  "id": "most-k-ďalšej-téme",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
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
        id: "knife--ssot-a-tssot",
        children: "KNIFE – SSOT a TSSOT"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "koľko-právd-treba-na-úspešné-dodanie-riešenia",
      children: "Koľko právd treba na úspešné dodanie riešenia?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-to-rieši",
      children: "🎯 Čo to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vo väčšine organizácií existuje ten istý zákazník v piatich systémoch pod piatimi rôznymi menami.\nTen istý produkt má tri rôzne ceny podľa toho, koho sa spýtaš.\nTen istý stav projektu vyzerá inak v tabuľke, v CRM a v prezentácii pre manažment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto nie je technický problém. Je to organizačný a kultúrny problém — a ticho zabíja projekty, rozhodnutia a dôveru."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Základný problém",
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Keď každý pracuje s inou verziou reality, koordinácia sa mení na vyjednávanie.\nKaždá porada začína otázkou: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "„Ktoré číslo používame?\""
        }), "\nKaždé rozhodnutie je spochybňované. Každý výstup AI je nespoľahlivý."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SSOT"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TSSOT"
      }), " sú odpoveďou na tento problém."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši",
      children: "🧩 Ako to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssot--single-source-of-truth",
      children: "SSOT – Single Source of Truth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jeden zdroj. Jeden záznam. Jeden vlastník."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSOT znamená, že pre každú informáciu existuje presne jedno autoritatívne miesto, kde žije.\nVšetky ostatné systémy ju buď referencujú alebo z nej odvodzujú — neduplikujú ju."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Definícia SSOT",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single Source of Truth (SSOT)"
        }), " je prax štruktúrovania informačných modelov a dátových schém tak, aby každý dátový prvok bol spravovaný (editovaný) iba na jednom mieste. Akékoľvek prepojenia na tento prvok sú výhradne cez referenciu."]
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
        src: (__webpack_require__(40325)/* ["default"] */ .A),
        alt: "00 – Ostrovy poznania: fragmentované podnikové systémy bez spoločného zdroja",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tssot--trusted-single-source-of-truth",
      children: "TSSOT – Trusted Single Source of Truth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SSOT ti hovorí ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kde"
      }), " pravda žije.\nTSSOT ti hovorí ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "či jej môžeš dôverovať."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zdroj môže byť jediný bez toho, aby bol dôveryhodný — ak je zastaraný, neúplný alebo neoverený.\nTSSOT pridáva dimenziu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verifikácie a aktuálnosti"
      }), ": digitálne zobrazenie reality je aktívne udržiavané, validované a uznané ako spoľahlivé."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Definícia TSSOT",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trusted Single Source of Truth (TSSOT)"
        }), " je SSOT, kde sú dáta navyše overené, aktuálne a uznané ako autoritatívny základ pre rozhodnutia — nielen technicky singulárny, ale organizačne dôveryhodný."]
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
        src: (__webpack_require__(77906)/* ["default"] */ .A),
        alt: "05 – Mravce: Komunikácia → Porozumenie → Dôvera → Spolupráca → Úspech – CAA reťaz",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tri-metafory-ktoré-vysvetľujú-problém",
      children: "Tri metafory, ktoré vysvetľujú problém"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "🪣 Viacero studní"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každé oddelenie si vykope vlastnú studňu.\nFinancie majú svoju studňu. Obchod má svoju. IT má svoju.\nKaždá studňa môže obsahovať vodu — ale voda je iná."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom nie je mať menej studní.\nCieľom je vedieť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo je v každej studni"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čím sa každá studňa napája"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ktoré studne zdieľajú rovnaký zdroj"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ktorá studňa je hlavná"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSOT definuje hlavnú studňu.\nTSSOT certifikuje, že voda v nej je čistá."
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
        src: (__webpack_require__(66196)/* ["default"] */ .A),
        alt: "01 – Viacero studní v púšti: každé oddelenie má vlastný zdroj pravdy",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "🧊 Ľadovec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To, čo vidíš nad hladinou — reporty, dashboardy, výstupy AI — predstavuje približne 10 % informačného priestoru."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "90 % pod povrchom: požiadavky, rozhodnutia, predpoklady, vzťahy, história, kontext."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "AI a ľadovec",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "AI pracuje s tým, čo je viditeľné a dostupné.\nAk je 90 % pod hladinou nekonzistentné, neoverené alebo chýba — AI bude s istotou produkovať výstupy na základe skresleného obrazu reality.\nRýchlosť to neopraví. Problém iba zrýchli."
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
        src: (__webpack_require__(140)/* ["default"] */ .A),
        alt: "04 – SDLC ľadovec: 10 % viditeľný produkt, 90 % skrytý životný cyklus pod povrchom",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "🗼 Babylonská veža"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď rôzne tímy, roly a systémy používajú to isté slovo s rôznym významom — alebo rôzne slová pre to isté — komunikácia sa rozpadá."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nie preto, že ľudia sú neschopní.\nPreto, že sa nikdy nedohodli na spoločnom slovníku."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Babylonská veža nespadla preto, že staviteľom chýbali zručnosti.\nSpadla preto, že si prestali rozumieť."
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
        src: (__webpack_require__(51810)/* ["default"] */ .A),
        alt: "02 – Babylonská veža: dôsledok rôznych slovníkov a chýbajúceho spoločného základu",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V kontexte SDLC: každá fáza produkuje artefakty, na ktorých závisí nasledujúca fáza.\nAk sa slovník medzi fázami mení, reťaz sa preruší."
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
        src: (__webpack_require__(42336)/* ["default"] */ .A),
        alt: "03 – Pevná budova s hlbokými základmi: TSSOT ako overený, dôveryhodný základ",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssot-v-kontexte-sdlc",
      children: "SSOT v kontexte SDLC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každá fáza V-Modelu (pozri ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000103-CAA_IN_SDLC/",
        children: "K000103"
      }), ") produkuje výstupy, ktoré sa stávajú vstupmi pre nasledujúcu fázu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fáza"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Produkuje"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Závisí na"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Business"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Požiadavky, ciele"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trhový kontext"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architektúra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architektonické rozhodnutia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business požiadavky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analýza"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Špecifikácie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architektonické rozhodnutia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Návrh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailné modely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Špecifikácie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Funkčné riešenie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modely návrhu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testovanie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overené správanie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementácia + požiadavky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevádzka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bežiaca služba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Všetko vyššie"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Prerušená reťaz",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Ak akákoľvek fáza pracuje z neovereného alebo nekonzistentného zdroja, chyba sa šíri dopredu — a násobí sa.\nV čase, keď sa objaví pri testovaní alebo prevádzke, sú náklady na opravu exponenciálne vyššie."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť",
      children: "🧪 Ako to použiť"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "otázky-pred-vyhlásením-ssot",
      children: "Otázky pred vyhlásením SSOT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kto vlastní tento dátový prvok?"
        }), " Každý záznam musí mať jediného vlastníka zodpovedného za jeho presnosť."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kde je spravovaný?"
        }), " Ktorý systém je autoritatívny zdroj? Všetky ostatné musia referencovať, nie duplikovať."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Čím je napájaný?"
        }), " Aký proces vytvára, aktualizuje alebo ruší tento záznam? Je zdokumentovaný a dodržiavaný?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ako je overený?"
        }), " Aký mechanizmus potvrdzuje, že záznam je presný a aktuálny? Kto overenie vykonáva?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kto ho konzumuje?"
        }), " Ktoré roly, systémy a fázy závisia od tohto záznamu? Vedia o tom, odkiaľ pochádza?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Čo sa stane pri zmene?"
        }), " Existuje mechanizmus notifikácie zmeny? Závislé systémy sa aktualizujú automaticky alebo manuálne?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "úrovne-zrelosti-ssot",
      children: "Úrovne zrelosti SSOT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Úroveň"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 – Chaos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Viacero konfliktných zdrojov, žiadne vlastníctvo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 – Povedomie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zdroje identifikované, vlastníctvo nejasné"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 – Definované"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jeden zdroj určený, ostatné stále existujú"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 – Riadené"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jeden zdroj presadený, ostatné deprecated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4 – Dôveryhodné (TSSOT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zdroj overený, aktuálny, organizačne uznaný"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Väčšina organizácií je na Úrovni 1–2 keď začínajú AI iniciatívu.\nAI vyžaduje Úroveň 3–4 pre spoľahlivé výstupy."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-je-to-dôležité-pre-ai",
      children: "Prečo je to dôležité pre AI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "AI zosilňuje to, čo dostane",
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "AI nehodnotí kvalitu svojho vstupu.\nSpracuje to, čo dostane — a produkuje výstup úmerný tej kvalite."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Garbage in, garbage out"
        }), " nie je nič nové.\nČo je nové, je rýchlosť a istota, s akou AI ten odpad doručuje."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI asistent dotazujúci podnikový model (napríklad cez KERNARO — pozri ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "K000104"
      }), ") vyprodukuje:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Presné, užitočné výsledky — ak je model SSOT/TSSOT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vierohodne znejúce, ale nespoľahlivé výsledky — ak model obsahuje nekonzistencie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nástroj nie je problém.\nZáklad je problém — alebo riešenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spoločná-metodológia--čo-spája-všetky-studne",
      children: "Spoločná metodológia — čo spája všetky studne"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom nie je jedna studňa pre celú organizáciu.\nKomplexné organizácie majú mnoho domén, mnoho systémov, mnoho tímov."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Čo potrebujú, je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spoločná sada pravidiel"
      }), ", ktorá riadi správanie všetkých studní:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Konvencie pomenovania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pravidlá vlastníctva"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Procesy verifikácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Správa zmien"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integračné vzory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Táto spoločná metodológia umožňuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spoločné porozumenie"
      }), " — ktoré umožňuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dôveru"
      }), " — ktorá umožňuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spoluprácu"
      }), " — ktorá umožňuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "synergie"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "CAA prepojenie",
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Toto priamo nadväzuje na CAA komunikačný reťazec z ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000103-CAA_IN_SDLC/",
          children: "K000103"
        }), ":"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Komunikácie — niet Porozumenia"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Porozumenia — niet Dôvery"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Dôvery — niet dobrej Spolupráce"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez dobrej Spolupráce — niet Synergií"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Synergií — niet Úspechu"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "SSOT/TSSOT je informačný základ, ktorý tento reťazec umožňuje."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Začni v malom",
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Nepotrebuješ SSOT pre celú organizáciu od prvého dňa.\nZačni s jednou doménou, jednou kritickou dátovou entitou, jednou fázou SDLC.\nDokáž hodnotu. Potom rozšír."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Kvapka vyvŕta kameň — nie silou, ale vytrvalosťou."
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "SSOT nie je technologický projekt",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Najväčšia chyba organizácií: kúpia nástroj a nazývajú ho SSOT.\nSSOT je v prvom rade rozhodnutie o governance. V druhom rade procesné rozhodnutie. V treťom rade technologické rozhodnutie."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSOT a TSSOT nie sú o tom, mať menej zdrojov informácií.\nSú o tom, vedieť čo každý zdroj obsahuje, dôverovať mu a prepojiť ich cez spoločné pravidlá."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bez tohto základu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projekty stavajú na piesku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI produkuje sebavedomý šum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fázy SDLC si navzájom nerozumejú"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Babylonská veža rastie vyššie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S týmto základom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozhodnutia sú rýchlejšie a lepšie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI zosilňuje skutočné porozumenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Každá fáza SDLC stavia na overených vstupoch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spoločný slovník umožňuje spoločný zámer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "most-k-ďalšej-téme",
      children: "Most k ďalšej téme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SSOT ti hovorí ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kde pravda žije"
      }), " a či jej môžeš dôverovať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ale ani dôveryhodný zdroj nezaručuje zdieľané porozumenie."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Rozumie každý vo vašej organizácii slovu „zákazník\" rovnako?"
        }), "\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "Znamená „riziko\" to isté pre business analytika a security architekta?"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toto je doménou ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "taxonómie, ontológie a metodológie APV"
      }), " — pozri ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000107_TaxonomyAndOntology/",
        children: "K000107"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
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



/***/ })

}]);