"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[51152],{

/***/ 16384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/00-mct-timeline-26da92725f11b56166676594edb88036.png");

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

/***/ 77289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000108_qrm_index_md_993_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000108-qrm-index-md-993.json
const site_docs_sk_knifes_k_000108_qrm_index_md_993_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000108-QRM/K000108_SK","title":"K000108 – Quick Response Manufacturing (QRM)","description":"QRM je celopodniková stratégia pre skracovanie lead time — vynájdená Rajanom Surim v 90. rokoch. Pôvodne navrhnutá pre výrobu, QRM explicitne rozširuje svoje princípy na kancelárske a znalostné procesy, čo ju robí priamo relevantnou pre SDLC a IT dodávku.","source":"@site/docs/sk/knifes/K000108-QRM/index.md","sourceDirName":"sk/knifes/K000108-QRM","slug":"/sk/knifes/K000108-QRM/","permalink":"/sk/knifes/K000108-QRM/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"QRM","permalink":"/doc-tags/qrm"},{"inline":true,"label":"LeadTime","permalink":"/doc-tags/lead-time"},{"inline":true,"label":"Manufacturing","permalink":"/doc-tags/manufacturing"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"KnowledgeWork","permalink":"/doc-tags/knowledge-work"},{"inline":true,"label":"Lean","permalink":"/doc-tags/lean"},{"inline":true,"label":"SixSigma","permalink":"/doc-tags/six-sigma"},{"inline":true,"label":"MCT","permalink":"/doc-tags/mct"},{"inline":true,"label":"QROC","permalink":"/doc-tags/qroc"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"K000108_SK","guid":"e8c0ee53-23a5-44a7-9515-2a206bf3255e","dao":"knife","title":"K000108 – Quick Response Manufacturing (QRM)","description":"QRM je celopodniková stratégia pre skracovanie lead time — vynájdená Rajanom Surim v 90. rokoch. Pôvodne navrhnutá pre výrobu, QRM explicitne rozširuje svoje princípy na kancelárske a znalostné procesy, čo ju robí priamo relevantnou pre SDLC a IT dodávku.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["QRM","LeadTime","Manufacturing","SDLC","KnowledgeWork","Lean","SixSigma","MCT","QROC","CAA"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000107 – TBM: Technology Business Management","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-TBM-index"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000108-QRM/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000108_SK',
	guid: 'e8c0ee53-23a5-44a7-9515-2a206bf3255e',
	dao: 'knife',
	title: 'K000108 – Quick Response Manufacturing (QRM)',
	description: 'QRM je celopodniková stratégia pre skracovanie lead time — vynájdená Rajanom Surim v 90. rokoch. Pôvodne navrhnutá pre výrobu, QRM explicitne rozširuje svoje princípy na kancelárske a znalostné procesy, čo ju robí priamo relevantnou pre SDLC a IT dodávku.',
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
const contentTitle = 'KNIFE – Quick Response Manufacturing (QRM)';

const assets = {

};



const toc = [{
  "value": "Trpí tvoj SDLC rovnakým problémom, ktorý takmer zničil high-mix výrobu?",
  "id": "trpí-tvoj-sdlc-rovnakým-problémom-ktorý-takmer-zničil-high-mix-výrobu",
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
  "value": "Základný princíp: jedna metrika nad všetkými",
  "id": "základný-princíp-jedna-metrika-nad-všetkými",
  "level": 3
}, {
  "value": "MCT diagram – kalendárny čas vs. skutočná potrebná práca a cieľ QRM",
  "id": "mct-diagram--kalendárny-čas-vs-skutočná-potrebná-práca-a-cieľ-qrm",
  "level": 3
}, {
  "value": "Štyri základné QRM koncepty",
  "id": "štyri-základné-qrm-koncepty",
  "level": 3
}, {
  "value": "🧪 Ako to použiť",
  "id": "-ako-to-použiť",
  "level": 2
}, {
  "value": "Krok 1 – Zmapuj aktuálne MCT",
  "id": "krok-1--zmapuj-aktuálne-mct",
  "level": 3
}, {
  "value": "Krok 2 – Identifikuj Response Time Spiral",
  "id": "krok-2--identifikuj-response-time-spiral",
  "level": 3
}, {
  "value": "Krok 3 – Navrhni Q-ROC pre svoju SDLC fázu",
  "id": "krok-3--navrhni-q-roc-pre-svoju-sdlc-fázu",
  "level": 3
}, {
  "value": "Krok 4 – Znižuj dysfunkčnú variabilitu",
  "id": "krok-4--znižuj-dysfunkčnú-variabilitu",
  "level": 3
}, {
  "value": "⚡ Rýchly návod",
  "id": "-rýchly-návod",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Prečo QRM dopĺňa Lean a Six Sigma — nie ich nahrádza",
  "id": "prečo-qrm-dopĺňa-lean-a-six-sigma--nie-ich-nahrádza",
  "level": 3
}, {
  "value": "Pasca využiteľnosti",
  "id": "pasca-využiteľnosti",
  "level": 3
}, {
  "value": "Prípad Virupa: Q-ROC v praxi",
  "id": "prípad-virupa-q-roc-v-praxi",
  "level": 3
}, {
  "value": "Prepojenie s taxonómiou",
  "id": "prepojenie-s-taxonómiou",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Zhrnutie",
  "id": "-zhrnutie",
  "level": 2
}, {
  "value": "Ďalšie čítanie",
  "id": "ďalšie-čítanie",
  "level": 3
}, {
  "value": "Zdroje",
  "id": "zdroje",
  "level": 3
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
      id: "trpí-tvoj-sdlc-rovnakým-problémom-ktorý-takmer-zničil-high-mix-výrobu",
      children: "Trpí tvoj SDLC rovnakým problémom, ktorý takmer zničil high-mix výrobu?"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Skôr než budeš čítať ďalej — štyri otázky, nad ktorými sa oplatí zamyslieť",
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Je vývoj softvéru len výroba bez strojov?"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Prečo automobilová továreň pozná svoj lead time na hodinu — a tvoj IT projekt nie?"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Tvoja továreň vyriešila problémy s kvalitou v 80. rokoch. Prečo tvoj IT tím stále vedie tie isté porady?"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Výroba mala 8D, Lean, Six Sigma, QRM. Čo má tvoj SDLC?"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-to-rieši",
      children: "🎯 Čo to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM vynašiel Rajan Suri v 90. rokoch. Primárnym cieľom je neúnavné skracovanie lead time — interných procesných prietočných časov. Aplikácia týchto konceptov umožňuje spoločnosti súťažiť na základe rýchlosti, flexibility a agilnosti."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V IT a SDLC pojmoch: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lead time je čas od vstupu požiadavky do fázy po overený výstup z nej."
      }), " Každý odovzdávací bod, každá fronta, každé „je to v review\" je plytvaním lead time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "SDLC paralela",
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "SDLC projekty zlyhávajú z rovnakých dôvodov, z akých výroba zlyhávala pred QRM:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Funkčné silá vytvárajúce oneskorenia pri odovzdávaní"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "„Pasce využiteľnosti\" — udržiavanie ľudí na 100 % vytvára úzke hrdlá"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Dávkovanie práce namiesto jej prietoku"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Žiadna spoločná metrika pre skutočnú dĺžku procesov"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši",
      children: "🧩 Ako to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "základný-princíp-jedna-metrika-nad-všetkými",
      children: "Základný princíp: jedna metrika nad všetkými"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skracovanie lead time môže byť hybnou silou pre ďalšie výkonnostné zlepšenia. Zameranie sa na skracovanie lead time (MCT) v rámci interných procesov spoločnosti môže priniesť celý rad ďalších pozitívnych výsledkov vrátane lepšej kvality (vďaka rýchlejším spätným väzbám, krížovo vyškoleným pracovníkom a malému dávkovaniu), lepšej dodávky načas a nižších prevádzkových nákladov."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MCT – Manufacturing Critical-path Time"
      }), " je kľúčová metrika. Meria skutočný čas od začiatku do konca procesu, nie len „dotykovú dobu\", keď niekto aktívne pracuje."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Šokujúci pomer",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "V priemere skutočná dotyková doba predstavuje iba 1–5 % celkového MCT.\nZvyšných 95–99 % je čakanie, fronty, odovzdávacie body a prerábka.\nToto platí rovnako pre fázy vývoja softvéru, recenzie dokumentov a schvaľovacie reťazce."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mct-diagram--kalendárny-čas-vs-skutočná-potrebná-práca-a-cieľ-qrm",
      children: "MCT diagram – kalendárny čas vs. skutočná potrebná práca a cieľ QRM"
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
        src: (__webpack_require__(16384)/* ["default"] */ .A),
        alt: "MCT diagram – kalendárny čas (1 týždeň) vs. skutočná potrebná práca (2 hodiny) a cieľ QRM (1 deň)",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "štyri-základné-qrm-koncepty",
      children: "Štyri základné QRM koncepty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Čas ako primárna šošovka"
      }), "\nPrestaň optimalizovať na náklady alebo využiteľnosť. Optimalizuj na rýchlosť. Keď lead time klesá, náklady nasledujú."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Dysfunkčná vs. strategická variabilita"
      }), "\nDysfunkčná variabilita vzniká z prevádzkových problémov — prerábka, chyby, prestoje strojov, dlhé časy prípravy. Strategická variabilita existuje, aby uspokojila zákazníkov — rôzne možnosti produktu, vlastné konfigurácie. Cieľom QRM je eliminovať dysfunkčnú variabilitu a využívať strategickú variabilitu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V SDLC: prerábka z nepochopených požiadaviek = dysfunkčná. Prispôsobené riešenia pre rôznych klientov = strategická."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. QRM Cells — organizačná reštrukturalizácia"
      }), "\nNamiesto funkčných oddelení (Oddelenie analýzy → Oddelenie návrhu → Oddelenie vývoja → Oddelenie testovania) vytvor cross-funkčné bunky zamerané na rodinu produktov alebo služieb. Každá bunka vlastní celý prietok."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Q-ROC – Quick Response Office Cells"
      }), "\nReštrukturalizácia buniek funguje aj v kancelárii. Kancelárske aktivity ako cenové ponuky a spracovanie objednávok môžu tvoriť viac ako 50 % lead time a viac ako 25 % nákladov. Q-ROCs možno zriadiť so zameraním na rodinu produktov. Zdroje sú na jednom mieste a vykonávajú sekvenciu aktivít. Pracovníci sú krížovo vyškolení a majú právomoc rozhodovať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto je priamy most k IT dodávke — Q-ROC pre fázu SDLC je cross-funkčný tím s plnou právomocou dokončiť svoju fázu bez odovzdávacích bodov."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť",
      children: "🧪 Ako to použiť"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krok-1--zmapuj-aktuálne-mct",
      children: "Krok 1 – Zmapuj aktuálne MCT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nakresli aktuálny stav: od príchodu požiadavky po výstup fázy. Označ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kde práca čaká? (čas vo fronte)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kde sa dávkuje? (oneskorenie dávkovania)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kde sa vracia? (slučka prerábky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aká je skutočná dotyková doba vs. celkový uplynulý čas?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krok-2--identifikuj-response-time-spiral",
      children: "Krok 2 – Identifikuj Response Time Spiral"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response Time Spiral nastáva, keď kompartmentalizované funkčné oddelenia vedú k rastúcemu množstvu rozpracovanosti, nevybavených položiek a urgentných objednávok."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príznaky v SDLC: každý sprint končí prenosom položiek, recenzie požiadaviek trvajú týždne, „urgentné\" vždy skáče do frontu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krok-3--navrhni-q-roc-pre-svoju-sdlc-fázu",
      children: "Krok 3 – Navrhni Q-ROC pre svoju SDLC fázu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifikuj jednu SDLC fázu alebo prietok (napr. požiadavky → návrh)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zostav cross-funkčnú bunku: BA + architekt + vedúci vývojár + zástupca testovania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Umiestni na jedno miesto (fyzicky alebo virtuálne s dedikovanými kanálmi)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daj im právomoc dokončiť bez eskalácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meraj MCT pred a po"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krok-4--znižuj-dysfunkčnú-variabilitu",
      children: "Krok 4 – Znižuj dysfunkčnú variabilitu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Štandardizuj vstupy (ako vyzerá „pripravená požiadavka\" — taxonómia!)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Znižuj veľkosti dávok (jedna story naraz, nie celý sprint)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zaveď pull signály (tím ťahá prácu keď je pripravený, nie keď je tlačený)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod",
      children: "⚡ Rýchly návod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "QRM koncept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SDLC ekvivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCT (Manufacturing Critical-path Time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lead time fázy: požiadavka dovnútra → overený výstup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dysfunkčná variabilita"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prerábka z nejasných požiadaviek, chýbajúcich definícií"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strategická variabilita"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prispôsobené riešenia pre rôzne klientské kontexty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QRM Cell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-funkčný SDLC tím (BA + Arch + Dev + Test)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q-ROC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bunka pre znalostné práce pre konkrétnu SDLC fázu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response Time Spiral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prenos zo sprintu, rast backlogu, kultúra „vždy urgentné\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POLCA (kartový riadenie prietoku)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban, WIP limity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pomer dotykovej doby (1–5 %)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% sprintu skutočne v práci vs. čakanie/v review"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-qrm-dopĺňa-lean-a-six-sigma--nie-ich-nahrádza",
      children: "Prečo QRM dopĺňa Lean a Six Sigma — nie ich nahrádza"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mnohé spoločnosti úspešne používajú QRM spolu s Lean, Six Sigma a inými zlepšovacími metódami, pričom zistili, že jedinečné nástroje QRM na skracovanie času dopĺňajú a posilňujú tieto snahy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM je obzvlášť efektívny pre spoločnosti vyrábajúce nízke objemy, vysokú variabilitu alebo zákazkové výrobky. Niektoré Lean koncepty, ako takt time, Kanban a vyrovnávanie výroby, nefungujú dobre v týchto kontextoch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IT dodávka je inherentne vysokovariabilná, zákazková. Preto čistý Lean v softvéri zápasí — a preto je QRM prístup k variabilite relevantnejší."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasca-využiteľnosti",
      children: "Pasca využiteľnosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Jeden z najkontraintuitívnejších poznatkov QRM: tlačenie zdrojov na 100 % využiteľnosť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zvyšuje"
      }), " lead time. Keď je každý vždy zaneprázdnený, neexistuje kapacita na absorbovanie variability. Každá nová požiadavka čaká vo fronte."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V SDLC: architekt, ktorý je vždy na 100 % rezervovaný, sa stáva úzkym hrdlom, ktoré spomaľuje každý projekt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prípad-virupa-q-roc-v-praxi",
      children: "Prípad Virupa: Q-ROC v praxi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Virupa Visual Solutions zažila výrazný rast, ale udržiavanie úrovne obratu vyžadovalo stále viac energie. Koreňovou príčinou boli obchodné procesy, kompartmentalizované do funkčných oddelení. Na prelomenie tohto stavu Virupa zrušila kancelárske oddelenia a nahradila ich štyrmi Quick Response Office Cells. V každom Q-ROC multidisciplinárny tím rieši všetky procesy a administratívu pre konkrétnu skupinu zákazníkov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Princíp sa priamo prenáša: namiesto Oddelenia požiadaviek → Oddelenia architektúry → Oddelenia vývoja vytvor Q-ROC, ktorý zvláda všetky fázy pre konkrétny typ riešenia alebo klientský segment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prepojenie-s-taxonómiou",
      children: "Prepojenie s taxonómiou"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM nemôže fungovať bez spoločného slovníka."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCT mapovanie vyžaduje, aby každý účastník rozumel rovnakej definícii „začiatku\" a „konca\" pre každý krok procesu. Bez taxonómie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rôzni ľudia merajú rôzne veci"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zlepšenia MCT nemožno validovať"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q-ROC tímy nemôžu komunikovať naprieč hranicami"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preto sú QRM a taxonómia (K107) príbuzné — nie konkurenčné — metodológie."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Začni s MCT mapovaním, nie s reštrukturalizáciou",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Pred navrhnutím buniek zmapuj aktuálne MCT pre jeden prietok.\nSamotná mapa vytvára spoločné porozumenie a odhaľuje zrejmé rýchle výhry.\nTímy často nájdu 40–60 % lead time sediacich v jednom odovzdávacom bode alebo schvaľovacom kroku."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Q-ROC pre znalostné práce",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Hlavná výhoda aplikácie Q-ROC na kancelársku prácu oproti výrobným bunkám: presúvanie ľudí a stolov je oveľa menej nákladné ako presúvanie strojov.\nZačni s jedným tímom. Dokáž, že to funguje. Potom rozšír."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "QRM ≠ len robiť veci rýchlejšie",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "QRM nie je o ponáhľaní sa. Je o odstraňovaní času, ktorý nepridáva hodnotu.\nRýchlosť prichádza z eliminácie frontov a prerábky — nie z tvrdšej práce."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-zhrnutie",
      children: "✅ Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRM preformuluje otázku z „ako znižujeme náklady?\" na „ako znižujeme čas?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď lead time klesá:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kvalita sa zlepšuje (rýchlejšie spätné väzby, menšie dávky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Náklady nasledujú (menej prerábky, menej WIP, nižšia réžia)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spokojnosť zákazníkov rastie (rýchlejšia, spoľahlivejšia dodávka)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre SDLC praktikov: QRM poskytuje časovú šošovku, ktorá dopĺňa Lean, Six Sigma a Agile — obzvlášť pre prostredia s vysokou variabilitou a zákazkovými riešeniami."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model Q-ROC pre kancelárske a znalostné práce je priamy most od výroby k IT dodávke."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Súvisiace KNIFE články",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "../K000107_TaxonomyAndOntology/",
            children: "K000107 – Taxonómia a ontológia v SDLC"
          }), " — slovníkový základ, ktorý umožňuje meranie QRM"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "../K000103-CAA_IN_SDLC/",
            children: "K000103 – Context Aware Approach v SDLC"
          }), " — CAA poskytuje kontextuálnu vrstvu pre implementáciu QRM"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ďalšie-čítanie",
      children: "Ďalšie čítanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rajan Suri – QRM origin a consulting: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://rajansuri.com",
          children: "https://rajansuri.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Center for QRM – University of Wisconsin: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://qrm.engr.wisc.edu",
          children: "https://qrm.engr.wisc.edu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["QRM Institute (Európa): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://qrminstitute.org",
          children: "https://qrminstitute.org"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„It's About Time\" – Rajan Suri (2010, Productivity Press) — základná kniha o QRM pre kancelárske a znalostné práce"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zdroje",
      children: "Zdroje"
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