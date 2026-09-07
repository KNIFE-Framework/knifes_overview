"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[38190],{

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

/***/ 60364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000114_ai_trh_2026_client_vs_enterprise_index_md_2fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000114-ai-trh-2026-client-vs-enterprise-index-md-2fb.json
const site_docs_sk_knifes_k_000114_ai_trh_2026_client_vs_enterprise_index_md_2fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise/K000114","title":"K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)","description":"Mapa AI trhu 2026 rozdelená na Client (spotrebiteľský/on-device) a Enterprise (firemné platformy, agent orchestration) segment — s takmer disjunktnými rebríčkami hráčov, dynamikou aj metrikami. Ilustrované na Lenovo (duálna stratégia: DeepSeek na strane personálneho AI, NVIDIA/Intel/AMD na strane enterprise infraštruktúry), 13 sourced referencií.","source":"@site/docs/sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise/index.md","sourceDirName":"sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise","slug":"/sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise/","permalink":"/sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"ai","permalink":"/doc-tags/ai"},{"inline":true,"label":"market-analysis","permalink":"/doc-tags/market-analysis"},{"inline":true,"label":"enterprise","permalink":"/doc-tags/enterprise"},{"inline":true,"label":"lenovo","permalink":"/doc-tags/lenovo"},{"inline":true,"label":"career-prep","permalink":"/doc-tags/career-prep"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-07T10:36:05.586139+00:00","fm_version_comment":"","id":"K000114","guid":"2670a9e5-f5d0-4b91-97a2-7cec21f08ae4","dao":"knife","title":"K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)","description":"Mapa AI trhu 2026 rozdelená na Client (spotrebiteľský/on-device) a Enterprise (firemné platformy, agent orchestration) segment — s takmer disjunktnými rebríčkami hráčov, dynamikou aj metrikami. Ilustrované na Lenovo (duálna stratégia: DeepSeek na strane personálneho AI, NVIDIA/Intel/AMD na strane enterprise infraštruktúry), 13 sourced referencií.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"case-study","priority":"medium","tags":["ai","market-analysis","enterprise","lenovo","career-prep"],"locale":"sk","created":"2026-09-07 12:36","modified":"2026-09-07 12:36","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000113 – Claude Code (CC) — platformy a orchestrácia agentov","permalink":"/sk/knifes/K000113-CC-Platformy-Orchestracia/"},"next":{"title":"K000115 – Hybrid AI ako architektonický vzor","permalink":"/sk/knifes/K000115-Hybrid-AI-Architektonicky-Vzor/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000114-AI-Trh-2026-Client-vs-Enterprise/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-07T10:36:05.586139+00:00',
	fm_version_comment: '',
	id: 'K000114',
	guid: '2670a9e5-f5d0-4b91-97a2-7cec21f08ae4',
	dao: 'knife',
	title: 'K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)',
	description: 'Mapa AI trhu 2026 rozdelená na Client (spotrebiteľský/on-device) a Enterprise (firemné platformy, agent orchestration) segment — s takmer disjunktnými rebríčkami hráčov, dynamikou aj metrikami. Ilustrované na Lenovo (duálna stratégia: DeepSeek na strane personálneho AI, NVIDIA/Intel/AMD na strane enterprise infraštruktúry), 13 sourced referencií.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'case-study',
	priority: 'medium',
	tags: [
		'ai',
		'market-analysis',
		'enterprise',
		'lenovo',
		'career-prep'
	],
	locale: 'sk',
	created: '2026-09-07 12:36',
	modified: '2026-09-07 12:36',
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
const contentTitle = 'K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)';

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
  "value": "Friendly example — Ako Lenovo skutočne pristupuje k „čínskym technológiám&quot;",
  "id": "friendly-example--ako-lenovo-skutočne-pristupuje-k-čínskym-technológiám",
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
  "value": "Client segment (spotrebiteľský / on-device AI)",
  "id": "client-segment-spotrebiteľský--on-device-ai",
  "level": 3
}, {
  "value": "Enterprise segment (platformy, agent orchestration)",
  "id": "enterprise-segment-platformy-agent-orchestration",
  "level": 3
}, {
  "value": "Geopolitický kontext (relevantný pre výber technológie)",
  "id": "geopolitický-kontext-relevantný-pre-výber-technológie",
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
        id: "k000114--ai-trh-2026--client-vs-enterprise-segmenty-lenovo",
        children: "K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)"
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
          children: "market-analysis"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enterprise"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lenovo"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "career-prep"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Trhové podiely nižšie pochádzajú z rôznych trackerov (Similarweb/Sensor Tower/Omdia/Menlo Ventures/OpenRouter) s odlišnou metodikou — beriem ich ako rádové orientácie, nie presné čísla. Dátum referencie: september 2026."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bežná chyba je hovoriť o \"AI trhu\" ako o jednej veci s jedným rebríčkom víťazov. V praxi existujú minimálne dva takmer disjunktné trhy: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client"
      }), " (spotrebiteľská/on-device AI — AI PC, telefóny, osobní asistenti) a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enterprise"
      }), " (firemné AI platformy, agent orchestration). Hráč, ktorý vedie v jednom segmente (napr. ChatGPT v spotrebiteľskom chatbot trhu), nemusí vôbec viesť v druhom (v enterprise LLM výdavkoch vedie Anthropic) — a naopak. Kto pripravuje AI stratégiu, obchodný prípad alebo sa pripravuje na rolu naprieč oboma segmentmi (typicky ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Business Analyst & AI Orchestrator"
      }), "), potrebuje obe mapy oddelene, nie jednu spriemerovanú."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento KNIFE mapuje oba segmenty na konkrétnom prípade — Lenovo — vrátane overenia bežného predpokladu, že firma s čínskymi koreňmi automaticky sadí na čínske technológie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client segment"
        }), " = spotrebiteľská/on-device AI (AI PC, telefóny, osobní asistenti) — hodnotí sa cez MAU, engagement, podiel na chatbot/asistent trhu, podiel na PC hardvéri."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise segment"
        }), " = firemné AI platformy a agent orchestration (cloud, on-prem, edge) — hodnotí sa cez podiel na enterprise LLM výdavkoch, ARR platforiem, mieru skutočnej agentic adopcie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Naprieč oboma segmentmi beží ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tretia os"
        }), " — geopolitická (export controls, čínsky vs. západný hardvérový stack) — ktorá ovplyvňuje oba segmenty odlišne."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Overenie predpokladu \"Lenovo = čínske technológie\": potvrdzuje sa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "len čiastočne"
      }), " — Lenovo beží duálnu stratégiu, nie čisto čínsku (pozri nižšie)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friendly-example--ako-lenovo-skutočne-pristupuje-k-čínskym-technológiám",
      children: "Friendly example — Ako Lenovo skutočne pristupuje k „čínskym technológiám\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lenovo verejne pozicuje stratégiu ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "„Hybrid AI\""
        }), " — kombináciu personálnych, firemných a verejných modelov, ktoré majú fungovať ako „digitálne dvojčatá\" orchestrujúce akcie naprieč ekosystémami [1]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Na strane ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enterprise hardvéru/infraštruktúry"
        }), " Lenovo sadí prevažne na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "západných partnerov"
        }), ": Intel (Aura Edition AI PC, Core Ultra Series 3), NVIDIA (AI Cloud Gigafactory, Grace Blackwell/Vera Rubin), AMD (EPYC pre ThinkSystem servery) [1][2]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Na strane ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "personálneho/spotrebiteľského AI"
        }), " (Lenovo Qira globálne, Xiaotian v Číne) Lenovo naopak ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "plne integrovalo DeepSeek-R1"
        }), " (plnú „online\" verziu modelu) do notebookov aj Motorola smartfónov — jedna z najhlbších spoluprác čínskeho LLM lídra s hardvérovým výrobcom [3][4]."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance gap ako rámec pre celú rolu: 96 % firiem zvyšuje investície do AI, no len 27 % má komplexný governance rámec [2] — presne priestor, kde by mala fungovať pozícia BA & AI Orchestrator."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zovšeobecnenie tohto pozorovania (kedy a prečo firmy bežia dve paralelné vrstvy AI stacku podľa trhu/regiónu) je rozpracované samostatne v [[K000115-Hybrid-AI-Architektonicky-Vzor|K000115 – Hybrid AI ako architektonický vzor]] a [[K000116-Dual-Stack-AI-Compliance|K000116 – Dual-stack AI compliance ako enterprise architektonická požiadavka]]."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kľúčové čísla na zapamätanie (nie na citovanie naslepo — pozri Tipy nižšie):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client:"
        }), " ChatGPT + Gemini + Claude spolu ~89 % globálneho (mimo-čínskeho) chatbot trhu [7][8]; čínsky spotrebiteľský AI trh ~499 mil. MAU, +85 % r/r [5]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise:"
        }), " Anthropic vedie enterprise LLM výdavky (40 %, najmä coding 54 %), pred OpenAI (27 %) a Google (21 %) [9]; len 16 % nasadení sú \"skutoční\" agenti [9]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardvér:"
        }), " Lenovo #1 na globálnom PC trhu (25,3 %) [12]; podiel Nvidia na čínskom AI čipovom trhu má klesnúť zo 40 % na ~8 % [13]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prekvapenie na overenie:"
        }), " v OpenRouter tokenoch vedie čínsky Xiaomi (MiMo-V2-Pro), nie DeepSeek [6] — jeden konkrétny report, over pred použitím."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "client-segment-spotrebiteľský--on-device-ai",
      children: "Client segment (spotrebiteľský / on-device AI)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Hráč"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ekosystém"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Poznámka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copilot+ PC, Windows Copilot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominantný štandard pre AI PC na Windows platforme"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple Intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silný rast podielu na PC trhu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gemini Nano (on-device, Android)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Súčasť Android/Chromebook stacku"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Qualcomm/Intel/AMD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPU platformy (Snapdragon X, Core Ultra, Ryzen AI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silikónová vrstva pod AI PC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lenovo (Motorola)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Qira"
            }), " (globálne) / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Xiaotian"
            }), " (Čína)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xiaotian plne integrovaný s DeepSeek-R1 [3][4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ByteDance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubao"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "382 mil. MAU (najväčšia čínska AI appka) [5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alibaba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "167 mil. MAU [5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSeek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSeek app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "130 mil. MAU [5]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čínsky spotrebiteľský AI trh (aplikácie) dosiahol ~499 mil. mesačných aktívnych používateľov (máj 2026), medziročný rast +85 % [5]. Priemerný používateľ otvorí AI appku ~93×/mesiac, cca 183 minút mesačne [5]."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Globálny podiel na „chatbot/AI asistent\" trhu"
      }), " (líši sa podľa metodiky trackera):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Zdroj / metodika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ChatGPT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gemini"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claude"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ostatní"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor Tower, máj 2026 (mobilné appky) [8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46,4 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27,7 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,3 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grok/Perplexity/DeepSeek/Meta AI < 5 % každý"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "First Page Sage, sept. 2026 (web traffic) [7]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51,5 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27,6 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,2 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grok 2,8 %, Perplexity 2,0 %, Copilot 1,3 %, DeepSeek 0,4 %"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V oboch metodikách drží ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ChatGPT + Gemini + Claude spolu ~89 %"
      }), " trhu — Copilot aj čínske appky sú na globálnej (mimo-čínskej) úrovni marginálne, hoci v Číne samotnej sú DeepSeek/Doubao/Qwen dominantné."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PC trh (hardvér, Q2 2026, Omdia) [12]:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Výrobca"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Podiel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Medziročne"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lenovo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25,3 % (16,62 mil. ks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2,1 %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19,8 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−9,0 %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14,1 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−4,9 %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11,1 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+15,9 % (najsilnejší rast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7,6 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+0,9 %"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lenovo drží ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#1 pozíciu na globálnom PC trhu"
      }), " — AI PC stratégia (Aura Edition, Hybrid AI) sa opiera o už existujúcu distribučnú silu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterprise-segment-platformy-agent-orchestration",
      children: "Enterprise segment (platformy, agent orchestration)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Enterprise LLM API trh — kto vyhráva firemné výdavky."
      }), " Podľa Menlo Ventures, „State of Generative AI in the Enterprise\" (prieskum ~500 amer. enterprise rozhodovateľov, nov. 2025, publikované dec. 2025) [9]:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Poskytovateľ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Podiel enterprise LLM výdavkov"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zmena oproti 2023/2024"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anthropic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↑ z 24 % (2024) / 12 % (2023)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↓ z 50 % (2023)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google (Gemini)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↑ z 7 %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meta/Llama + ostatní (Cohere, Mistral...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V segmente ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "coding"
      }), ": Anthropic 54 % vs. OpenAI 21 % [9]. Iba ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "16 % enterprise nasadení"
      }), " (a 27 % startupov) je „skutočný agent\" (plánuje, vykonáva, pozoruje spätnú väzbu, adaptuje sa) — väčšina produkčných systémov sú fixed-sequence/routing workflow okolo jedného LLM volania [9]. Dobrý argument proti agent-hype: realita nasadení je skromnejšia než marketing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Platformy pre agent orchestration"
      }), " (US-centrické, globálne dostupné):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platforma"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pozicovanie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Silné stránky"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cena (orientačne)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Najlepšie pre"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Gemini Enterprise / Agentspace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jednotná spravovaná platforma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Bank, sub-sekundové cold starty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "task-completion model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firmy s BigQuery/Workspace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Salesforce Agentforce + Agent Fabric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRM-natívna agentická platforma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "natívna podpora MCP, cross-vendor kontrola agentov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agent + usage credits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revenue ops, CRM-centrické firmy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Bedrock AgentCore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "„Bring-your-own-framework\" runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "podpora LangGraph/CrewAI/vlastný kód, VPC/PrivateLink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0,0007 USD/session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-natívne tímy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Azure AI Foundry + Agent365"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dvojvrstvový model (build-run + cross-platform governance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharePoint ACL sync, Entra ID, riadi aj agentov iných dodávateľov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 USD/user/mesiac alebo 200 USD/25k credits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft-štandardizované enterprise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[11] Salesforce Agentforce reportoval ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "540 mil. USD ARR a 18 500 enterprise zákazníkov"
      }), " — konkrétny dôkaz, že enterprise agentic AI už generuje reálne tržby, nielen POC [10]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čínsky enterprise/cloud AI stack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Poskytovateľ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platforma"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Poznámka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alibaba Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bailian (Qwen enterprise)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Najširší medzinárodný dosah spomedzi čínskych hráčov — aj EÚ región, priamo cez US API [6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Baidu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qianfan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise LLM platforma"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Huawei"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pangu + Ascend čipy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kľúčové pre čínskych štátnych/regulovaných odberateľov pod exportnými obmedzeniami USA [6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zhipu/Z.ai"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLM-5 (MIT licencia)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimalizované pre čínsky enterprise, trénované na Huawei Ascend [6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tencent, ByteDance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hunyuan, Doubao enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevažne domáci ekosystém, menej medzinárodnej expanzie [6]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podiel čínskych poskytovateľov na tokenoch cez OpenRouter vzrástol ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "z menej ako 2 % na viac ako 45 % za rok"
      }), " (do Q2 2026) [6] — OpenRouter je len jeden (developer-facing) kanál, nie celý trh. Vedie ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xiaomi"
      }), " (MiMo-V2-Pro, 21,1 % týždenných tokenov, viac než OpenAI so 7,5 %), nasleduje Alibaba/Qwen (13,9 %), MiniMax (8,1 %), Zhipu/GLM-5 a DeepSeek (po 5,6 %) [6] — prekvapivé oproti bežnej predstave „DeepSeek = líder\", over pred prezentáciou."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Čínske modely podľa tohto reportu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "konkurujú cenou a výkonom v coding/long-context úlohách, ale zaostávajú v compliance postoji, anglickom jazykovom tóne a enterprise tooling integráciách"
      }), " [6] — typ rizika, ktoré musí AI Orchestrator vedieť posúdiť pri výbere modelu pre globálny enterprise nasadenie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "USA vs Čína — odlišné stratégie pre enterprise agentov:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čína"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "USA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Business model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rýchla spotrebiteľská adopcia cez platformy (napr. Tencent/WeChat), mestské dotácie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enterprise monetizácia, prémiové ceny za governance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nasadenie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "edge + konzumné platformy, rýchlosť a škála"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cloud enterprise infraštruktúra, compliance „baked-in\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ľahšie compliance rámce, rýchlejšia inovácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2, RBAC, audit trails — nutnosť pre regulované odvetvia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cieľové odvetvia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spotrebiteľské služby, malé podniky, priemysel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "finančné služby, zdravotníctvo, Fortune 500"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[10]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geopolitický-kontext-relevantný-pre-výber-technológie",
      children: "Geopolitický kontext (relevantný pre výber technológie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nvidia podiel na čínskom AI čipovom trhu sa má podľa prognóz prepadnúť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zo 40 % na približne 8 %"
      }), ", keďže Huawei (Ascend čipy) rýchlo naberá podiel pod tlakom amerických exportných obmedzení [13]. To je priamy dôvod, prečo čínske enterprise nasadenia (najmä štátom vlastnené firmy) čoraz viac bežia na Huawei/domácom stacku namiesto Nvidia/západných GPU [6][13]. Pre Lenovo (globálna firma s čínskymi koreňmi) to znamená nutnosť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dvoch paralelných hardvérovo-softvérových stackov"
      }), " — jeden pre čínsky trh, jeden pre zvyšok sveta. Rozpracované ako samostatný architektonický vzor v [[K000116-Dual-Stack-AI-Compliance|K000116]]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trhové podiely nižšie sú z rôznych trackerov (Similarweb/Sensor Tower/Omdia/Menlo Ventures/OpenRouter) s odlišnou metodikou — beriem ich ako rádové orientácie, nie presné čísla."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xiaomi ako líder čínskych OpenRouter tokenov (namiesto mediálne známejšieho DeepSeeku) je pripomienka, že \"kto je najznámejší\" a \"kto reálne beží najviac inferencie\" môžu byť dva rôzne rebríčky — over pred použitím v prezentácii, ide o jeden konkrétny report [6]."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client a Enterprise segment majú takmer disjunktné rebríčky víťazov (ChatGPT vedie v Client, Anthropic v Enterprise coding) — nekombinuj čísla naprieč segmentmi bez toho, aby si to explicitne označil."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance gap (96 % investuje / 27 % má governance rámec [2]) je dobrý \"vstupný bod\" pre akúkoľvek rolu naviazanú na AI stratégiu — nielen pre Lenovo."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predpoklad \"firma s čínskymi koreňmi = čínske technológie\" je čiastočne správny, ale nie úplný — Lenovo ich reálne nasadzuje na strane personálneho/spotrebiteľského AI, no enterprise infraštruktúra stojí na NVIDIA/Intel/AMD."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rola „AI Orchestrator\" znamená rozhodovanie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ktorý model/platformu nasadiť kde"
        }), " — podľa regiónu, compliance, nákladov a use-case (coding → Anthropic dominuje; spotrebiteľský asistent → OpenAI/Google; čínsky trh → DeepSeek/Qwen/Zhipu)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Realita enterprise agentov je skromnejšia než marketing (len 16 % nasadení sú „skutoční\" agenti) — dobrý business analyst argument je fokus na merateľné ROI a governance, nie hype."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client a Enterprise segment treba mapovať oddelene — kombinovaním vzniká skreslený obraz o tom, kto na AI trhu skutočne \"vedie\"."
      }), "\n"]
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
      children: ["[5] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://technode.com/2026/07/14/questmobile-chinas-ai-native-apps-reach-499-million-monthly-active-users/",
        children: "https://technode.com/2026/07/14/questmobile-chinas-ai-native-apps-reach-499-million-monthly-active-users/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[6] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report",
        children: "https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[7] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://firstpagesage.com/reports/top-generative-ai-chatbots/",
        children: "https://firstpagesage.com/reports/top-generative-ai-chatbots/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[8] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://techcrunch.com/2026/06/16/chatgpts-market-share-slips-below-50-for-first-time/",
        children: "https://techcrunch.com/2026/06/16/chatgpts-market-share-slips-below-50-for-first-time/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[9] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/",
        children: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[10] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://beam.ai/agentic-insights/ai-agents-in-2026-how-the-us-and-china-are-building-two-very-different-futures",
        children: "https://beam.ai/agentic-insights/ai-agents-in-2026-how-the-us-and-china-are-building-two-very-different-futures"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[11] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://linesncircles.com/Blog/Enterprise/Enterprise_Agent_Platforms_2026",
        children: "https://linesncircles.com/Blog/Enterprise/Enterprise_Agent_Platforms_2026"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[12] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://infotechlead.com/devices/worldwide-pc-shipments-apple-gains-share-as-lenovo-retains-lead-in-q2-2026-96988",
        children: "https://infotechlead.com/devices/worldwide-pc-shipments-apple-gains-share-as-lenovo-retains-lead-in-q2-2026-96988"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[13] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.marketscale.com/industries/transportation/nvidias-china-ai-chip-share-is-forecast-to-collapse-from-40-to-8-as-huawei-scales",
        children: "https://www.marketscale.com/industries/transportation/nvidias-china-ai-chip-share-is-forecast-to-collapse-from-40-to-8-as-huawei-scales"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pôvodný research podklad (rovnaké zdroje, plné znenie vrátane Preconditions a poznámok k overeniu): interný podklad ", (0,jsx_runtime.jsx)(_components.code, {
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