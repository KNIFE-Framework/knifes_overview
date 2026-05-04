"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[54939],{

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

/***/ 96117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000105_zlate_zrnko_ako_riesit_neriesitelne_index_md_930_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000105-zlate-zrnko-ako-riesit-neriesitelne-index-md-930.json
const site_docs_sk_knifes_k_000105_zlate_zrnko_ako_riesit_neriesitelne_index_md_930_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000105-Zlate-zrnko-ako-riesit-neriesitelne/K000105","title":"K000105 – Zlaté zrnko: Ako riešiť \'neriešiteľné\' situácie","description":"Keď logika nestačí, treba zmeniť vrstvu. Príbeh technického debuggingu, ktorý sa stal lekciou z epistemológie — o tom, prečo mapa nie je územie a ako nájsť zlaté zrnko v akejkoľvek zdanlivo neriešiteľnej situácii.","source":"@site/docs/sk/knifes/K000105-Zlate-zrnko-ako-riesit-neriesitelne/index.md","sourceDirName":"sk/knifes/K000105-Zlate-zrnko-ako-riesit-neriesitelne","slug":"/sk/knifes/K000105-Zlate-zrnko-ako-riesit-neriesitelne/","permalink":"/sk/knifes/K000105-Zlate-zrnko-ako-riesit-neriesitelne/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"epistemology","permalink":"/doc-tags/epistemology"},{"inline":true,"label":"problem-solving","permalink":"/doc-tags/problem-solving"},{"inline":true,"label":"methodology","permalink":"/doc-tags/methodology"},{"inline":true,"label":"CYNEFIN","permalink":"/doc-tags/cynefin"},{"inline":true,"label":"KNIFE","permalink":"/doc-tags/knife"}],"version":"current","sidebarPosition":105,"frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-01T10:00:00Z","fm_version_comment":"Initial version","id":"K000105","guid":"210ad2bd-8fc4-4aac-9338-25d78fe580c3","dao":"knife","title":"K000105 – Zlaté zrnko: Ako riešiť \'neriešiteľné\' situácie","description":"Keď logika nestačí, treba zmeniť vrstvu. Príbeh technického debuggingu, ktorý sa stal lekciou z epistemológie — o tom, prečo mapa nie je územie a ako nájsť zlaté zrnko v akejkoľvek zdanlivo neriešiteľnej situácii.","author":"Roman Kazička","authors":["Roman Kazička"],"category":"methodology","type":"reflection","priority":"high","tags":["epistemology","problem-solving","methodology","CYNEFIN","KNIFE"],"locale":"sk","created":"2026-05-01","modified":"2026-05-01","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"CAA","origin_author":"Roman Kazička","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":"","sidebar_position":105,"sidebar_label":"K000105 – Zlaté zrnko"},"sidebar":"tutorialSidebar","previous":{"title":"KNIFE – K000084_01","permalink":"/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_01"},"next":{"title":"titul-Ako komunikovať s porozumením","permalink":"/sk/knifes/Ako-komunikova-s-porozumen-mE/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000105-Zlate-zrnko-ako-riesit-neriesitelne/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-01T10:00:00Z',
	fm_version_comment: 'Initial version',
	id: 'K000105',
	guid: '210ad2bd-8fc4-4aac-9338-25d78fe580c3',
	dao: 'knife',
	title: 'K000105 – Zlaté zrnko: Ako riešiť \'neriešiteľné\' situácie',
	description: 'Keď logika nestačí, treba zmeniť vrstvu. Príbeh technického debuggingu, ktorý sa stal lekciou z epistemológie — o tom, prečo mapa nie je územie a ako nájsť zlaté zrnko v akejkoľvek zdanlivo neriešiteľnej situácii.',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička'
	],
	category: 'methodology',
	type: 'reflection',
	priority: 'high',
	tags: [
		'epistemology',
		'problem-solving',
		'methodology',
		'CYNEFIN',
		'KNIFE'
	],
	locale: 'sk',
	created: '2026-05-01',
	modified: '2026-05-01',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazička',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_position: 105,
	sidebar_label: 'K000105 – Zlaté zrnko'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "Mapa nie je územie",
  "id": "mapa-nie-je-územie",
  "level": 3
}, {
  "value": "Vrstvovosť poznania",
  "id": "vrstvovosť-poznania",
  "level": 3
}, {
  "value": "Popperova falsifikácia v praxi",
  "id": "popperova-falsifikácia-v-praxi",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Technický príbeh — Docusaurus Duplicate Route",
  "id": "technický-príbeh--docusaurus-duplicate-route",
  "level": 3
}, {
  "value": "Epistemologické zlaté zrnko",
  "id": "epistemologické-zlaté-zrnko",
  "level": 3
}, {
  "value": "⚡ Rýchly návod — Kompas pre neriešiteľné situácie",
  "id": "-rýchly-návod--kompas-pre-neriešiteľné-situácie",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Tri myšlienkové rámce za jedným príbehom",
  "id": "tri-myšlienkové-rámce-za-jedným-príbehom",
  "level": 3
}, {
  "value": "Prečo je to obecná pravda",
  "id": "prečo-je-to-obecná-pravda",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "📱 LinkedIn Post",
  "id": "-linkedin-post",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
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
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "knife-k000105--zlaté-zrnko-ako-riešiť-neriešiteľné-situácie",
      children: "KNIFE K000105 – Zlaté zrnko: Ako riešiť \"neriešiteľné\" situácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "210ad2bd-8fc4-4aac-9338-25d78fe580c3"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inprogress"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stávaš sa niekedy v situácii, keď si vyčerpal všetky logické kroky — a problém pretrváva?\nKeď každá hypotéza dáva zmysel, ale žiadna nevysvetlí realitu?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento KNIFE popisuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vzorec myslenia"
      }), ", ktorý pomáha v takýchto momentoch.\nNie metódu krok-za-krokom. Skôr ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "epistemologický kompas"
      }), " — nástroj na orientáciu v neistote."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príbeh začína technickým varovaním v softvéri. Končí obecnou pravdou o tom, ako funguje poznanie."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mapa-nie-je-územie",
      children: "Mapa nie je územie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každý systém má vrstvy. Keď riešime problém, väčšinou čítame ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mapy"
      }), " — dokumentáciu, zdrojový kód, konfiguráciu, pravidlá, procesy. Sú presné. Sú logické. A predsa — niekedy nesedia s realitou."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zlaté zrnko je vždy v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "území"
      }), " — v skutočných dátach, v živom správaní systému, v tom čo sa naozaj deje, nie čo by sa diať malo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "\"The map is not the territory.\""
        }), " — Alfred Korzybski"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vrstvovosť-poznania",
      children: "Vrstvovosť poznania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každá vrstva abstrakcie ti hovorí niečo iné a má svoju ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hranicu výpovednej hodnoty"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Vrstva 4 — Filozofia / princípy   → \"prečo to tak je\"\nVrstva 3 — Architektúra / design  → \"ako by to malo fungovať\"\nVrstva 2 — Zdrojový kód / config  → \"čo je naprogramované\"\nVrstva 1 — Runtime dáta           → \"čo sa naozaj deje\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Väčšina debuggingu prebieha na vrstvách 2–3. Zlaté zrnko sa skrýva na vrstve 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "popperova-falsifikácia-v-praxi",
      children: "Popperova falsifikácia v praxi"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nesprávna otázka: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Ako dokážem, že moja hypotéza je správna?\""
      }), "\nSprávna otázka: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Ako rýchlo dokážem, že je NESPRÁVNA?\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každá vyvrátená hypotéza ti dáva dve veci:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminuje priestor možností"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Núti ťa ísť o vrstvu nižšie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technický-príbeh--docusaurus-duplicate-route",
      children: "Technický príbeh — Docusaurus Duplicate Route"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptóm:"
      }), " Softvér hlásil pri každom build-e varovanie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Duplicate routes found! /doc-tags"
      }), ". Len varovanie. Nič nepadlo. Klasická pasca — zdanlivá neriešiteľnosť."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 1 — logická hypotéza (nesprávna):"
      }), "\nZdieľajú SK a EN súbory rovnaké ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id:"
      }), " hodnoty? Logicky áno. Opravil som. Varovanie pretrváva."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 2 — zúženie priestoru:"
      }), "\nZmenil som konfiguráciu ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tagsBasePath: 'doc-tags'"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-knife-tags"
      }), ". Varovanie sa presunulo na ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/x-knife-tags"
      }), ". Teda obidve duplicitné trasy pochádzajú z tej istej funkcie. Vylúčené: externé pluginy, konfiguračné súbory, priečinkové konflikty."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 3 — čítanie zdrojového kódu (mapa):"
      }), "\nPrečítal som zdrojový kód Docusaurus. Kód vyzeral čisto. Jedna trasa na jedno volanie funkcie. Slepá ulička."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 4 — webpack chunks ako stopka:"
      }), "\nInterný súbor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routesChunkNames.json"
      }), " ukázal dve rôzne hash hodnoty pre ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/doc-tags"
      }), ". Rôzne komponenty. Otázka sa zmenila: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "prečo sú dva webpack chunks pre jednu stránku?"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 5 — čítanie runtime props dát (územie):"
      }), "\nPrečítal som skutočné skompilované dáta, nie zdrojový kód. Jeden riadok JSON zmenil všetko:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\"label\": \"-\", \"permalink\": \"/doc-tags\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Tag s labelom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), " (pomlčka)"]
      }), " mal permalink ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/doc-tags"
      }), " — rovnaký ako systémová stránka zoznamu tagov."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Príčina:"
      }), " 6 dokumentov malo v metadátach ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tags: [\"-\"]"
      }), " — pomlčka ako placeholder pre \"zatiaľ bez tagu\". Systém slugifikoval ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " na prázdny reťazec → permalink tagu = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/doc-tags"
      }), " → kolízia so systémovou stranou."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tags: [\"-\"]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tags: []"
      }), " v 6 súboroch. Build čistý. Varovanie zmizlo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epistemologické-zlaté-zrnko",
      children: "Epistemologické zlaté zrnko"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celý čas som čítal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mapy"
      }), " — zdrojový kód, konfiguráciu, architektúru. Všetky logicky konzistentné. Všetky správne popisujúce ", (0,jsx_runtime.jsx)(_components.em, {
        children: "čo by sa malo stať"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zlaté zrnko prišlo keď som prvýkrát čítal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "územie"
      }), " — skutočné runtime dáta, nie ich popis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nie šírka znalostí rozhodla. Rozhodlo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "poznanie kedy prestať čítať mapy a ísť do terénu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod--kompas-pre-neriešiteľné-situácie",
      children: "⚡ Rýchly návod — Kompas pre neriešiteľné situácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď si zaseknutý, polož si tieto otázky v tomto poradí:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Čo som predpokladal a NEoveril priamo?"
      }), "\nNie čo si myslíš že je pravda — čo si skutočne videl na vlastné oči (resp. v dátach)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Na ktorej vrstve riešim?"
      }), "\nAk čítaš dokumentáciu a zdrojáky, si na mape. Kde je územie v tomto systéme?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Ako rýchlo viem vyvrátiť aktuálnu hypotézu?"
      }), "\nNehľadaj potvrdenie. Hľadaj vyvrátenie. Je to rýchlejšie a poctivejšie."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. O vrstvu nižšie — čo tam je?"
      }), "\nKaždá slepá ulička ťa pozýva ísť hlbšie. Nie širšie — hlbšie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tri-myšlienkové-rámce-za-jedným-príbehom",
      children: "Tri myšlienkové rámce za jedným príbehom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cynefin — Complex doména:"
      }), "\nPríčina nie je viditeľná vopred. Objavuje sa až skúmaním. Nie analýza pred akciou — ale konanie → pozorovanie → posun. Probe–Sense–Respond."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OODA Loop (Boyd):"
      }), "\nObserve → Orient → Decide → Act. Kľúčová fáza je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Orient"
      }), " — ako nová informácia mení môj model reality? Nie čo robím, ale ako prehodnocujem čo som si myslel."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Popperova falsifikácia:"
      }), "\nVedecké tvrdenia nie sú pravdivé pretože ich potvrdíme. Sú dočasne platné pretože ich ešte nevyvrátime. Každý neúspešný probe je pokrok — nie zlyhanie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-je-to-obecná-pravda",
      children: "Prečo je to obecná pravda"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento vzorec sa nevzťahuje len na technické problémy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manažér riešiaci konflikt v tíme číta \"mapu\" (správy, reporty). Zlaté zrnko je v teréne (priamy rozhovor, konkrétna situácia)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lekár diagnostikujúci pacienta číta \"mapu\" (príznaky, testy). Zlaté zrnko je v anamnéze ktorú ešte nespýtal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podnikateľ riešiaci zákaznícky problém číta \"mapu\" (analytika, metriky). Zlaté zrnko je v rozhovore so skutočným zákazníkom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vrstva kde sedí pravda je vždy o úroveň bližšie k realite ako tam, kde si teraz."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zlaté zrnko nájdeš skôr kladením otázky ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Čo som NEvidel?\""
        }), " než ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Čo viem?\""
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Varovanie bez padnutia systému je najnebezpečnejší typ problému — ľahko sa ignoruje. Niet trvalejších riešení ako tie dočasné."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dobré riešenie je také, ktoré problém ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vyriešilo"
        }), ", nie také, ktoré ho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "obišlo"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Každý slepý koniec je informácia. Nie zlyhanie — data point."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-linkedin-post",
      children: "📱 LinkedIn Post"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ako som riešil \"neriešiteľný\" problém — a čo som sa naučil o poznaní"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Týždeň som mal varovanie v softvéri. Nič nepadlo. Všetko fungovalo. Len malý žltý text pri každom build-e."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Duplicate routes found! /doc-tags"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ignoroval? Nie. Niet trvalejších riešení ako tie dočasné."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 1:"
      }), " Logická hypotéza. Opravil som. Varovanie pretrváva.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 2:"
      }), " Zúženie priestoru. Vylúčil som pluginy, konfiguráciu, súbory. Stále tam.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 3:"
      }), " Prečítal som zdrojový kód systému. Všetko správne. Slepá ulička.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 4:"
      }), " Interné systémové súbory ukázali dve rôzne komponenty pre jednu stránku.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe 5:"
      }), " Prečítal som skutočné runtime dáta, nie ich popis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jeden riadok JSON:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\"label\": \"-\", \"permalink\": \"/doc-tags\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pomlčka ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " ako placeholder v metadátach 6 dokumentov. Systém ju slugifikoval na prázdny reťazec. Kolízia."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fix: 10 sekúnd. Varovanie zmizlo."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo som si zobral:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celý čas som čítal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mapy"
      }), " — zdrojový kód, dokumentáciu, konfiguráciu.\nSprávne mapy. Logické mapy. Mapy ktoré nepopisovali skutočnosť."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zlaté zrnko prišlo keď som začal čítať ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "územie"
      }), " — živé dáta, nie ich popis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Mapa nie je územie."
        }), " — Korzybski"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každý systém má vrstvy. Každá vrstva má svoju hranicu výpovednej hodnoty.\nKeď si zaseknutý — nejdi širšie. Choď ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hlbšie"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A keď logika nestačí, prestań hľadať potvrdenie. Hľadaj ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vyvrátenie"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Popper to vedel. Cynefin to pomenoval. OODA to operacionalizovalo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ale naučiš sa to len tak, že sa raz naozaj zaseknete — a namiesto obídenia problému sa rozhodneš ho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vyriešiť"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Čo bolo tvoje zlaté zrnko? Situácia kde si sa musel prestať pozerať na mapu a ísť do terénu?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "#epistemology"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#problemsolving"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#leadership"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#systemsthinking"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#CYNEFIN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zlaté zrnko"
        }), " je vždy o vrstvu bližšie k realite ako tam kde hľadáš"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapa ≠ Územie"
        }), " — dokumentácia, kód, procesy sú mapy; dáta, ľudia, skutočné správanie je územie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Falsifikácia > Konfirmácia"
        }), " — rýchlejšie vyvratiť hypotézu ako ju potvrdiť"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hĺbka > Šírka"
        }), " — pri slepej uličke ísť o vrstvu nižšie, nie horizontálne"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Varovania ignorovať netreba"
        }), " — neriešené malé problémy rastú v neviditeľné veľké"]
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