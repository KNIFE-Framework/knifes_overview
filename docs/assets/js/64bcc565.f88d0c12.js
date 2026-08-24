"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[77663],{

/***/ 12628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vzor-agenta-light-568ec5f052db7fe0a387d0b8cc1a2ed3.png");

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

/***/ 84180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000111_vzor_planovaneho_agenta_index_md_64b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000111-vzor-planovaneho-agenta-index-md-64b.json
const site_docs_sk_knifes_k_000111_vzor_planovaneho_agenta_index_md_64b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000111-Vzor-Planovaneho-Agenta/K000111","title":"K000111 – Vzor plánovaného agenta","description":"Opakovateľný skelet pre osobnú automatizáciu: zdroj → most → plánovaný agent (pravidlá + pamäť) → výstup → človek. Dva overené príklady (Job Scout, License Watcher) a dvojosé rozhodovanie FIN/ČAS ako rules layer.","source":"@site/docs/sk/knifes/K000111-Vzor-Planovaneho-Agenta/index.md","sourceDirName":"sk/knifes/K000111-Vzor-Planovaneho-Agenta","slug":"/sk/knifes/K000111-Vzor-Planovaneho-Agenta/","permalink":"/sk/knifes/K000111-Vzor-Planovaneho-Agenta/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"automatizácia","permalink":"/doc-tags/automatizacia"},{"inline":true,"label":"agent","permalink":"/doc-tags/agent"},{"inline":true,"label":"cowork","permalink":"/doc-tags/cowork"},{"inline":true,"label":"claude","permalink":"/doc-tags/claude"},{"inline":true,"label":"pattern","permalink":"/doc-tags/pattern"},{"inline":true,"label":"rozhodovanie","permalink":"/doc-tags/rozhodovanie"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-08-24T09:10:27.327905+00:00","fm_version_comment":"","id":"K000111","guid":"0dcd7390-2ed0-44a3-ae44-683b74b4f034","dao":"knife","title":"K000111 – Vzor plánovaného agenta","description":"Opakovateľný skelet pre osobnú automatizáciu: zdroj → most → plánovaný agent (pravidlá + pamäť) → výstup → človek. Dva overené príklady (Job Scout, License Watcher) a dvojosé rozhodovanie FIN/ČAS ako rules layer.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"pattern","priority":"medium","tags":["automatizácia","agent","cowork","claude","pattern","rozhodovanie"],"locale":"sk","created":"2026-08-24 11:10","modified":"2026-08-24 11:10","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000109 – ESCO, SFIA a CAA: Tri vrstvy správy zručností v IT organizáciách","permalink":"/sk/knifes/K000109-ESCO-SFIA-CAA/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000111-Vzor-Planovaneho-Agenta/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-08-24T09:10:27.327905+00:00',
	fm_version_comment: '',
	id: 'K000111',
	guid: '0dcd7390-2ed0-44a3-ae44-683b74b4f034',
	dao: 'knife',
	title: 'K000111 – Vzor plánovaného agenta',
	description: 'Opakovateľný skelet pre osobnú automatizáciu: zdroj → most → plánovaný agent (pravidlá + pamäť) → výstup → človek. Dva overené príklady (Job Scout, License Watcher) a dvojosé rozhodovanie FIN/ČAS ako rules layer.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'pattern',
	priority: 'medium',
	tags: [
		'automatizácia',
		'agent',
		'cowork',
		'claude',
		'pattern',
		'rozhodovanie'
	],
	locale: 'sk',
	created: '2026-08-24 11:10',
	modified: '2026-08-24 11:10',
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
const contentTitle = 'K000111 – Vzor plánovaného agenta';

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
  "value": "Rules layer — dvojosé rozhodovanie (FIN/ČAS)",
  "id": "rules-layer--dvojosé-rozhodovanie-finčas",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Deployment — kde agent beží",
  "id": "deployment--kde-agent-beží",
  "level": 3
}, {
  "value": "Kedy siahnuť po tomto vzore",
  "id": "kedy-siahnuť-po-tomto-vzore",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
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
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "k000111--vzor-plánovaného-agenta",
        children: "K000111 – Vzor plánovaného agenta"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Stredná – pokročilá\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "automatizácia"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agent"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cowork"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "claude"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pattern"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rozhodovanie"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ako postaviť akúkoľvek opakovanú osobnú automatizáciu typu „pravidelne pozri X, prefiltruj podľa pravidiel, priprav mi akciu na schválenie\" — monitoring, triage, pripomienky, rešerše, prvé odpovede — bez toho, aby si pre každú novú tému vymýšľal architektúru odznova."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jeden opakovateľný skelet s piatimi krokmi. Tému vymeníš, kostra ostáva:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n  S[\"1 · Zdroj\"] --> M[\"2 · Most / konektor\"] --> A\n  subgraph A[\"3 · Plánovaný agent\"]\n    R[\"Pravidlá\"] --- P[\"Pamäť\"]\n  end\n  A --> O[\"4 · Výstup\"] --> H[\"5 · Človek\"]\n  H -. \"schvaľuje + ladí pravidlá\" .-> A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Obecný vzor agenta — kostra, dve inštancie, FIN/ČAS a deployment",
        src: (__webpack_require__(12628)/* ["default"] */ .A) + "",
        width: "2240",
        height: "3952"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(interaktívny zdroj diagramu: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/vzor-agenta.html"
        }), ", tmavý variant: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/vzor-agenta-dark.png"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zdroj"
        }), " — odkiaľ tečú dáta (API, DB, e-mail, web)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Most / konektor"
        }), " — ako sa zdroj dostane k agentovi (MCP konektor, e-mail forward, DB adaptér)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plánovaný agent"
        }), " — beh na rozvrhu (cron / scheduled task), ktorý pri každom behu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "číta Pravidlá"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "číta/píše Pamäť"
        }), ".", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Pravidlá"
            }), " = „mozog\": jedno miesto pravdy, kde meníš logiku (skóre, prahy, no-go zoznam)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Pamäť"
            }), " = trvalý stav medzi behmi (docs / DB): tracker, log, status."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výstup"
        }), " — čo agent doručí (push/e-mail digest, zoznam, návrh akcie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ľudská slučka"
        }), " — človek výstup ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "schváli/odošle"
        }), " a rozhodnutiami ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "spätne ladí Pravidlá"
        }), ". Nie je to chyba vzoru; drží kvalitu aj bezpečnosť (limity platforiem, správy tretím stranám)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď novú úlohu vieš opísať v týchto piatich krokoch, vieš ju postaviť; ak nie, chýba ti jasný zdroj alebo jasné pravidlá."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rules-layer--dvojosé-rozhodovanie-finčas",
      children: "Rules layer — dvojosé rozhodovanie (FIN/ČAS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak agent triedi príležitosti, oplatí sa mať pravidlá ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dve osi 0–10"
      }), ", nie binárne áno/nie:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PRÍNOS (↑ lepšie)"
        }), " — koľko mi to dá (napr. financie). Musí prejsť minimálny floor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ZÁŤAŽ NA HLAVU (↓ lepšie)"
        }), " — koľko mi to zoberie z kapacity na to, čo je naozaj cieľ (čas + mentálna námaha)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Záťaž je brzda:"
        }), " vysoká záťaž zhora zastropuje verdikt aj pri vysokom prínose („veľa peňazí + nula času = zle\")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pôvod: job-filter (FIN/ČAS), ale použiteľné na akékoľvek rozhodnutie „oplatí sa mi to vziať?\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Over si na dvoch nezávislých inštanciách rovnakého vzoru:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n  LI[\"LinkedIn Jobs / sieť\"] --> GM[\"E-mail forward + Gmail konektor\"] --> JS\n  subgraph JS[\"Job Scout · scheduled task (Cowork)\"]\n    RB[\"rubrik FIN/ČAS\"] --- PM[\"project docs: status · tracker · log\"]\n  end\n  JS --> DG[\"Push + e-mail digest 🟢/🟡 · tracker\"] --> RK[\"Roman\"]\n  RK -. \"posiela connecty ručne · ladí FIN/ČAS\" .-> JS\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Krok"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Job-hunt (Job Scout)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "KnowMyself.academy (License Watcher)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zdroj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LinkedIn Jobs + sieť, EPSO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "databáza licencií · zákazníci · dátumy expirácie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Most"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e-mail forward (systemthinking.sk → gmail) + Gmail MCP konektor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "konektor na e-shop / DB (Sheets, API) + e-mail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job Scout (Po–Pia 7:35) + rubrik FIN/ČAS + project memory; Claude-in-Chrome na hľadanie kontaktov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "„License Watcher\" scheduled task + pravidlá (expiruje o 30/7 dní, typ licencie) + project memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Výstup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ranný push/e-mail digest, riadky v trackeri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zoznam expirujúcich · návrh e-mailu na obnovu · FAQ odpovede"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Človek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roman posiela connecty ručne (1–2/deň), rozhodnutia ladia rubrik"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roman schváli / odošle obnovu a odpovede"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Definuj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Zdroj"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Most"
        }), " — bez jasného konektora vzor nefunguje."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Napíš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pravidlá"
        }), " ako jeden dokument (rubrik), nie roztrúsenú logiku v kóde."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nastav ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pamäť"
        }), " ako project docs/DB (status, tracker, log) — nie len stav v hlave agenta."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Definuj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Výstup"
        }), " ako niečo, čo sa dá jedným pohľadom schváliť."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ponechaj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "človeka v slučke"
        }), " — schvaľovanie a ladenie pravidiel je súčasť vzoru, nie obchádzka."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment--kde-agent-beží",
      children: "Deployment — kde agent beží"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cowork scheduled task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Konzola — Claude Code / SDK"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kedy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "default, hneď, bez infra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keď treba priamy prístup k lokálnej DB/serveru"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plusy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cloud, hotové konektory, human-in-loop cez telefón"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "beh na vlastnom stroji, headless/CI, vlastné nástroje"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bez konektora nedosiahne lokálnu DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "musíš hostiť a strážiť sám"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pravidlo:"
      }), " začni na Cowork vzore; na konzolu/SDK prejdi, až keď agent potrebuje priamy prístup k databáze alebo vlastný beh na serveri. Vzor sa nemení, len sa presunie, kde beží."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kedy-siahnuť-po-tomto-vzore",
      children: "Kedy siahnuť po tomto vzore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Akákoľvek opakovaná úloha typu „pravidelne pozri X, prefiltruj podľa pravidiel, priprav mi akciu na schválenie\": monitoring, triage, pripomienky, rešerše, prvé odpovede."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mermaid diagramy vyššie sú editovateľný zdroj (verzovateľný text). Tento KNIFE viewer mermaid natívne nerenderuje — preto je vedľa nich aj statický PNG export (", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/"
        }), ") a samostatný interaktívny HTML zdroj (", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/vzor-agenta.html"
        }), ") na ďalší SVG/PNG re-export."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak sa vzor použije na triedenie príležitostí, rules layer FIN/ČAS je dobrý default; pre iné typy agentov (napr. čistý monitoring bez rozhodovania) sa táto sekcia vynecháva."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jeden skelet, dve nezávisle overené inštancie (Job Scout, License Watcher), jasný rules layer pre rozhodovacie agenty. Namiesto architektúry od nuly pre každú novú automatizáciu stačí dosadiť tému do piatich krokov."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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