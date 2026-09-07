"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[89634],{

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

/***/ 74884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000115_hybrid_ai_architektonicky_vzor_index_md_869_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000115-hybrid-ai-architektonicky-vzor-index-md-869.json
const site_docs_sk_knifes_k_000115_hybrid_ai_architektonicky_vzor_index_md_869_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor/K000115","title":"K000115 – Hybrid AI ako architektonický vzor","description":"Prečo jeden model/jedna platforma na celý podnik nestačí — architektonický vzor, ktorý delí AI stack na personálnu, firemnú a verejnú vrstvu a explicitne rieši, kto (AI Orchestrator) a podľa akých kritérií rozhoduje, ktorá vrstva sa použije kde. Ilustrované na Lenovo (Qira/DeepSeek vs. enterprise infraštruktúra).","source":"@site/docs/sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor/index.md","sourceDirName":"sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor","slug":"/sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor/","permalink":"/sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"ai","permalink":"/doc-tags/ai"},{"inline":true,"label":"architecture","permalink":"/doc-tags/architecture"},{"inline":true,"label":"orchestration","permalink":"/doc-tags/orchestration"},{"inline":true,"label":"enterprise","permalink":"/doc-tags/enterprise"},{"inline":true,"label":"hybrid-ai","permalink":"/doc-tags/hybrid-ai"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-07T09:41:01.939107+00:00","fm_version_comment":"","id":"K000115","guid":"c6628d37-dd8e-4297-a9ef-b46e87cdd68d","dao":"knife","title":"K000115 – Hybrid AI ako architektonický vzor","description":"Prečo jeden model/jedna platforma na celý podnik nestačí — architektonický vzor, ktorý delí AI stack na personálnu, firemnú a verejnú vrstvu a explicitne rieši, kto (AI Orchestrator) a podľa akých kritérií rozhoduje, ktorá vrstva sa použije kde. Ilustrované na Lenovo (Qira/DeepSeek vs. enterprise infraštruktúra).","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"pattern","priority":"medium","tags":["ai","architecture","orchestration","enterprise","hybrid-ai"],"locale":"sk","created":"2026-09-07 11:41","modified":"2026-09-07 11:41","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)","permalink":"/sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise/"},"next":{"title":"K000116 – Dual-stack AI compliance ako enterprise architektonická požiadavka","permalink":"/sk/knifes/K000116-Dual-Stack-AI-Compliance/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-07T09:41:01.939107+00:00',
	fm_version_comment: '',
	id: 'K000115',
	guid: 'c6628d37-dd8e-4297-a9ef-b46e87cdd68d',
	dao: 'knife',
	title: 'K000115 – Hybrid AI ako architektonický vzor',
	description: 'Prečo jeden model/jedna platforma na celý podnik nestačí — architektonický vzor, ktorý delí AI stack na personálnu, firemnú a verejnú vrstvu a explicitne rieši, kto (AI Orchestrator) a podľa akých kritérií rozhoduje, ktorá vrstva sa použije kde. Ilustrované na Lenovo (Qira/DeepSeek vs. enterprise infraštruktúra).',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'pattern',
	priority: 'medium',
	tags: [
		'ai',
		'architecture',
		'orchestration',
		'enterprise',
		'hybrid-ai'
	],
	locale: 'sk',
	created: '2026-09-07 11:41',
	modified: '2026-09-07 11:41',
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
const contentTitle = 'K000115 – Hybrid AI ako architektonický vzor';

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
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Friendly example — Lenovo",
  "id": "friendly-example--lenovo",
  "level": 3
}, {
  "value": "Rozhodovacia tabuľka (všeobecná)",
  "id": "rozhodovacia-tabuľka-všeobecná",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Prečo trojvrstvový model, nie jeden stack",
  "id": "prečo-trojvrstvový-model-nie-jeden-stack",
  "level": 3
}, {
  "value": "Orchestrátor nie je len technická funkcia",
  "id": "orchestrátor-nie-je-len-technická-funkcia",
  "level": 3
}, {
  "value": "Vzťah k orchestrácii nástrojov (nie len modelov)",
  "id": "vzťah-k-orchestrácii-nástrojov-nie-len-modelov",
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
  "value": "Zdroje",
  "id": "zdroje",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
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
        id: "k000115--hybrid-ai-ako-architektonický-vzor",
        children: "K000115 – Hybrid AI ako architektonický vzor"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Stredná\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "architecture"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "orchestration"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enterprise"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hybrid-ai"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Tento KNIFE je rozpracovaný. Vzor je odvodený z jedného konkrétneho prípadu (Lenovo, pozri Zdroje) — zovšeobecnenie na \"univerzálny architektonický vzor\" ešte čaká na overenie na druhom/treťom nezávislom prípade."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bežná (chybná) predstava je, že podnik si \"vyberie AI platformu\" — jeden model, jeden cloud, jeden vendor — a tým je otázka vyriešená. V praxi veľké organizácie čoraz častejšie zisťujú, že rôzne časti biznisu potrebujú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rôzne modely z rôznych dôvodov naraz"
      }), ": spotrebiteľský produkt potrebuje lacný, rýchly, lokálne bežiaci model; firemný coding agent potrebuje najlepší možný model bez ohľadu na cenu; regulovaný trh potrebuje model, ktorý spĺňa miestnu compliance. Ak sa táto voľba nerobí vedome a architektonicky, vznikne buď (a) chaos — každý tím si vyberie inak, bez spoločnej governance, alebo (b) falošná uniformita — firma sa nasilu drží jedného vendora aj tam, kde to nedáva zmysel, a stráca na cene, výkone alebo compliance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento KNIFE pomenúva vzor, ktorým sa dá táto voľba urobiť opakovateľne: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid AI"
      }), " ako explicitná trojvrstvová architektúra s jednou rozhodovacou vrstvou navrchu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vzor rozdeľuje AI stack organizácie na tri vrstvy podľa toho, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kde a pre koho"
      }), " model beží, a pridáva štvrtú — orchestračnú — vrstvu, ktorá medzi nimi rozhoduje:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Personálna vrstva"
        }), " — on-device / spotrebiteľský AI naviazaný na konkrétne zariadenie alebo osobu (asistent v telefóne, AI PC). Optimalizuje sa na latenciu, cenu na used a lokálny trh."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Firemná (enterprise) vrstva"
        }), " — cloud/on-prem infraštruktúra pre interné produktívne nasadenia (coding agenti, interné nástroje, zákaznícke systémy). Optimalizuje sa na výkon, governance, audit trail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verejná vrstva"
        }), " — modely tretích strán, ku ktorým firma nemá priamu kontrolu nad hostingom (verejné API veľkých poskytovateľov), použité tam, kde vlastná infraštruktúra nedáva zmysel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orchestračná vrstva (AI Orchestrator)"
        }), " — explicitná rozhodovacia funkcia (rola alebo systém), ktorá pre daný prípad použitia vyberie správnu kombináciu vyššie uvedených vrstiev podľa merateľných kritérií: región/compliance, citlivosť dát, cena, latencia, use-case."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\n    ORCH[\"AI Orchestrator<br/>(rozhoduje: ktorý model/vrstva pre ktorý prípad)\"]\n\n    subgraph PERS[\"Personálna vrstva\"]\n        DEVICE[\"On-device / AI PC asistent\"]\n    end\n\n    subgraph ENT[\"Firemná (enterprise) vrstva\"]\n        CLOUD[\"Cloud / on-prem platforma\"]\n        AGENTS[\"Interní agenti (coding, ops)\"]\n    end\n\n    subgraph PUB[\"Verejná vrstva\"]\n        API[\"Verejné API tretích strán\"]\n    end\n\n    CRIT[\"Kritériá rozhodovania:<br/>región/compliance · citlivosť dát · cena · latencia · use-case\"]\n\n    CRIT --> ORCH\n    ORCH -->|\"spotrebiteľský use-case, lokálny trh\"| DEVICE\n    ORCH -->|\"interná produkcia, potrebná governance\"| CLOUD\n    ORCH -->|\"coding / špecializovaná úloha\"| AGENTS\n    ORCH -->|\"nie je dôvod hostovať vlastné\"| API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kľúčový bod: vzor nehovorí \"použi jeden model\" ani \"použi ľubovoľný model kdekoľvek\" — hovorí, že ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "voľba modelu/vrstvy má byť výstupom rozhodovacej funkcie s explicitnými kritériami"
      }), ", nie ad-hoc rozhodnutím jednotlivého tímu ani firemnou politikou \"všetko cez jedného vendora\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friendly-example--lenovo",
      children: "Friendly example — Lenovo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lenovo tento vzor reálne prevádzkuje, hoci ho takto oficiálne nepomenúva — firma otvorene komunikuje stratégiu \"Hybrid AI\": personálne, firemné a verejné modely majú fungovať ako prepojené \"digitálne dvojčatá\" [1]."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vrstva"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo Lenovo použije"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prečo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Personálna"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qira (globálne) / Xiaotian (Čína) — plná integrácia DeepSeek-R1 [3][4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čínsky trh, spotrebiteľská cena/výkon, žiadna enterprise governance záťaž"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firemná (enterprise)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intel Core Ultra, NVIDIA AI Cloud Gigafactory, AMD EPYC (ThinkSystem) [1][2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise zákazníci mimo Číny očakávajú západný stack, audit trail, existujúce partnerstvá"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verejná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pravdepodobne OpenAI/Microsoft (Copilot+ PC ekosystém)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows AI PC štandard, mimo priamej kontroly Lenova"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestrátor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rola \"AI Orchestrator\" (BA & AI Orchestrator pozícia)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Niekto musí rozhodovať, ktorý stack ísť nasadiť pre ktorý trh/zákazku"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rovnaký princíp platí aj mimo Lenova: use-case \"coding agent\" má v enterprise segmente jasne inú optimálnu voľbu (Anthropic drží 54 % podielu enterprise coding výdavkov [9]) než use-case \"spotrebiteľský asistent\" — a organizácia, ktorá si vynúti jeden model na oboje, stráca na oboch frontoch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rozhodovacia-tabuľka-všeobecná",
      children: "Rozhodovacia tabuľka (všeobecná)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kritérium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smeruje k Personálnej vrstve"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smeruje k Firemnej vrstve"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smeruje k Verejnej vrstve"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Citlivosť dát"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nízka (lokálne zariadenie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vysoká, potrebná governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "závisí od poskytovateľa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Región/compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lokálny trh s vlastnými pravidlami"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "regulované odvetvie (fin, health)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "žiadna špecifická požiadavka"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cena na used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "musí byť nízka (milióny zariadení)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vyššia OK, výkon > cena"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "podľa API cenníka"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asistent, personalizácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "coding, interné nástroje, agenti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rýchly prototyp, nekritický nástroj"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Otázky pred návrhom AI architektúry organizácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Máme explicitnú rolu/funkciu, ktorá rozhoduje \"ktorý model kde\", alebo si to každý tím vyberá sám? → ak druhé, chýba orchestračná vrstva."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Je voľba modelu naviazaná na merateľné kritériá (compliance, cena, citlivosť dát, use-case), alebo len na \"čo firma práve preferuje\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Máme use-case, kde jeden vendor jasne vedie (napr. coding) a napriek tomu ho nepoužívame, lebo \"musíme byť konzistentní\"? → over si, či je to skutočné obmedzenie, alebo zotrvačnosť."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vieme pomenovať, ktorá vrstva (personálna/firemná/verejná) rieši ktorý typ potreby v našej organizácii?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-trojvrstvový-model-nie-jeden-stack",
      children: "Prečo trojvrstvový model, nie jeden stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enterprise LLM trh sám osebe ukazuje, prečo \"jeden model na všetko\" nie je len architektonicky nečisté, ale aj ekonomicky nevýhodné rozhodnutie. Podľa Menlo Ventures (~500 amerických enterprise rozhodovateľov, nov. 2025) drží Anthropic 40 % enterprise LLM výdavkov (nárast zo 24 % v 2024 a 12 % v 2023), OpenAI kleslo z 50 % (2023) na 27 %, Google narástlo zo 7 % na 21 % [9]. V segmente coding je rozdiel ešte výraznejší — Anthropic 54 % vs. OpenAI 21 % [9]. Toto nie je náhodný pohyb trhu — je to dôkaz, že ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rôzne use-case majú rôznych \"najlepších\" poskytovateľov v danom momente"
      }), ", a firma, ktorá si vyberie jeden model naprieč všetkými use-case, systematicky podvýkonáva v niektorých z nich."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orchestrátor-nie-je-len-technická-funkcia",
      children: "Orchestrátor nie je len technická funkcia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dôležité je nezredukovať \"AI Orchestrator\" na technický routing layer (round-robin medzi API). Rozhodnutia, ktoré táto vrstva robí, majú priamy dopad na governance, náklady a compliance — čo z nej robí skôr ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "architektonicko-biznisovú rolu"
      }), " (odtiaľ aj kombinovaný titul \"Business Analyst & AI Orchestrator\"). Rovnaký prieskum upozorňuje, že len 16 % enterprise nasadení je \"skutočný\" agent (plánuje, vykonáva, adaptuje sa) — zvyšok sú fixed-sequence workflow okolo jedného LLM volania [9]. To znamená, že \"orchestrácia\" v praxi často znamená menej sofistikovaný, ale merateľnejší a lacnejší dizajn, než naznačuje agent-hype."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vzťah-k-orchestrácii-nástrojov-nie-len-modelov",
      children: "Vzťah k orchestrácii nástrojov (nie len modelov)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rovnaký princíp — jedno jadro/rozhodovacia vrstva navrchu, viacero vstupných bodov/vrstiev pod ňou — sa objavuje aj na inej úrovni: pri orchestrácii samotných AI nástrojov (nie len modelov, ktoré vyberáme). Pozri [[K000113-CC-Platformy-Orchestracia|K000113 – Claude Code: platformy a orchestrácia agentov]] pre analogický vzor na vrstve vývojárskych nástrojov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trojvrstvový model nie je statický — hranice medzi personálnou/firemnou/verejnou vrstvou sa menia (napr. keď sa dnes verejné API stane zajtra súčasťou vlastnej infraštruktúry po enterprise dohode)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riziko vendor lock-inu sa neznižuje \"výberom jedného vendora\", ale explicitnou orchestračnou vrstvou, ktorá dovolí meniť poskytovateľa per use-case bez prerábania celej architektúry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozor na náklady na komplexitu: udržiavanie troch vrstiev naraz má vlastnú prevádzkovú cenu (integrácie, testovanie, governance na každú vrstvu zvlášť) — vzor sa oplatí až od určitej veľkosti organizácie/portfólia use-case."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Súvisiaci vzor pre regionálne/regulatórne rozdelenie (nie len \"kde\", ale \"pre koho podľa akých pravidiel\") je rozpracovaný samostatne — pozri [[K000116-Dual-Stack-AI-Compliance|K000116 – Dual-stack AI compliance ako enterprise architektonická požiadavka]]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid AI nie je marketingový termín, ale pomenovateľný architektonický vzor: tri vrstvy (personálna/firemná/verejná) plus jedna explicitná rozhodovacia vrstva (AI Orchestrator) s merateľnými kritériami. Firma, ktorá tento vzor nemá pomenovaný, robí tie isté rozhodnutia beztak — len implicitne, tím po tíme, bez konzistencie a bez možnosti auditovať prečo bol ktorý model kde nasadený."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://news.lenovo.com/pressroom/press-releases/hybrid-ai-personalized-perceptive-proactive-ai-portfolio-tech-world-ces-2026/",
        children: "https://news.lenovo.com/pressroom/press-releases/hybrid-ai-personalized-perceptive-proactive-ai-portfolio-tech-world-ces-2026/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://futurumgroup.com/insights/lenovos-ai-strategy-drives-enterprise-transformation-in-a-crowded-market/",
        children: "https://futurumgroup.com/insights/lenovos-ai-strategy-drives-enterprise-transformation-in-a-crowded-market/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.channelnews.com.au/lenovo-goes-all-in-with-deepseek-for-notebooks-motorola-smartphones/",
        children: "https://www.channelnews.com.au/lenovo-goes-all-in-with-deepseek-for-notebooks-motorola-smartphones/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[4] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://longbridge.com/en/news/228701820",
        children: "https://longbridge.com/en/news/228701820"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[9] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/",
        children: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podrobnejšie trhové dáta k tomuto prípadu: interný podklad ", (0,jsx_runtime.jsx)(_components.em, {
        children: "AI trh 2026 — Client vs Enterprise segmenty (Lenovo)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "content/docs/sk/knifes/_unclasified/AI-trh-2026-client-vs-enterprise-Lenovo.md"
      }), "."]
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