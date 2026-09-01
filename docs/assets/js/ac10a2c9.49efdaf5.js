"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[93941],{

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

/***/ 38692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000113_cc_platformy_orchestracia_index_md_ac1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000113-cc-platformy-orchestracia-index-md-ac1.json
const site_docs_sk_knifes_k_000113_cc_platformy_orchestracia_index_md_ac1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000113-CC-Platformy-Orchestracia/K000113","title":"K000113 – Claude Code (CC) — platformy a orchestrácia agentov","description":"Prehľad povrchov Claude Code (CLI, Desktop, VS Code, JetBrains, Web, Mobile) a stupňov orchestrácie od headless scriptingu (`claude -p`) cez Agent SDK a CI/CD integrácie až po self-hosted environments — s rozhodovacou tabuľkou, kedy použiť ktorú vrstvu.","source":"@site/docs/sk/knifes/K000113-CC-Platformy-Orchestracia/index.md","sourceDirName":"sk/knifes/K000113-CC-Platformy-Orchestracia","slug":"/sk/knifes/K000113-CC-Platformy-Orchestracia/","permalink":"/sk/knifes/K000113-CC-Platformy-Orchestracia/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"claude-code","permalink":"/doc-tags/claude-code"},{"inline":true,"label":"ai","permalink":"/doc-tags/ai"},{"inline":true,"label":"orchestracia","permalink":"/doc-tags/orchestracia"},{"inline":true,"label":"cli","permalink":"/doc-tags/cli"},{"inline":true,"label":"devops","permalink":"/doc-tags/devops"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-01T10:38:11.431935+00:00","fm_version_comment":"","id":"K000113","guid":"21e590ae-2a18-4a02-b6bb-f1149b9cb4c3","dao":"knife","title":"K000113 – Claude Code (CC) — platformy a orchestrácia agentov","description":"Prehľad povrchov Claude Code (CLI, Desktop, VS Code, JetBrains, Web, Mobile) a stupňov orchestrácie od headless scriptingu (`claude -p`) cez Agent SDK a CI/CD integrácie až po self-hosted environments — s rozhodovacou tabuľkou, kedy použiť ktorú vrstvu.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"guide","priority":"medium","tags":["claude-code","ai","orchestracia","cli","devops"],"locale":"sk","created":"2026-09-01 12:38","modified":"2026-09-01 13:45","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000112 – PUSH vs. PULL marketing — dve filozofie, jedna mapa","permalink":"/sk/knifes/K000112-push-vs-pull-marketing/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000113-CC-Platformy-Orchestracia/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-01T10:38:11.431935+00:00',
	fm_version_comment: '',
	id: 'K000113',
	guid: '21e590ae-2a18-4a02-b6bb-f1149b9cb4c3',
	dao: 'knife',
	title: 'K000113 – Claude Code (CC) — platformy a orchestrácia agentov',
	description: 'Prehľad povrchov Claude Code (CLI, Desktop, VS Code, JetBrains, Web, Mobile) a stupňov orchestrácie od headless scriptingu (`claude -p`) cez Agent SDK a CI/CD integrácie až po self-hosted environments — s rozhodovacou tabuľkou, kedy použiť ktorú vrstvu.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'guide',
	priority: 'medium',
	tags: [
		'claude-code',
		'ai',
		'orchestracia',
		'cli',
		'devops'
	],
	locale: 'sk',
	created: '2026-09-01 12:38',
	modified: '2026-09-01 13:45',
	status: 'published',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Roman Kazicka',
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
const contentTitle = 'K000113 – Claude Code (CC) — platformy a orchestrácia agentov';

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
  "value": "Scenárová mapa (diagram)",
  "id": "scenárová-mapa-diagram",
  "level": 3
}, {
  "value": "Rozhodovacia tabuľka",
  "id": "rozhodovacia-tabuľka",
  "level": 3
}, {
  "value": "Friendly example",
  "id": "friendly-example",
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
  "value": "Platformy — kedy použiť ktorú",
  "id": "platformy--kedy-použiť-ktorú",
  "level": 3
}, {
  "value": "Headless mode a scripting (<code>claude -p</code>)",
  "id": "headless-mode-a-scripting-claude--p",
  "level": 3
}, {
  "value": "Agent SDK — plná programová kontrola",
  "id": "agent-sdk--plná-programová-kontrola",
  "level": 3
}, {
  "value": "CI/CD integrácie",
  "id": "cicd-integrácie",
  "level": 3
}, {
  "value": "Self-hosted environments — deployment do vlastnej infraštruktúry",
  "id": "self-hosted-environments--deployment-do-vlastnej-infraštruktúry",
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
    blockquote: "blockquote",
    code: "code",
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
        id: "k000113--claude-code-cc--platformy-a-orchestrácia-agentov",
        children: "K000113 – Claude Code (CC) — platformy a orchestrácia agentov"
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
          children: "claude-code"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "orchestracia"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "devops"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Claude Code má šesť povrchov (CLI, Desktop, VS Code, JetBrains, Web, Mobile) a minimálne štyri vrstvy orchestrácie (headless CLI, Agent SDK, CI/CD, self-hosted environments). Kto pozná len jednu vrstvu — napríklad interaktívne CLI — nevidí, že tá istá práca sa dá skriptovať, spúšťať v CI pipeline alebo nasadiť do vlastnej infraštruktúry. Tento KNIFE mapuje všetky povrchy a stupne orchestrácie na jednu rozhodovaciu tabuľku, aby výber \"ktorý nástroj na akú úlohu\" nebol pokus-omyl."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Claude Code beží na spoločnom ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"engine\""
      }), " naprieč všetkými povrchmi — konfigurácia, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), " a MCP servery sú medzi lokálnymi povrchmi zdieľané [1][2]. Z pohľadu architektúry ide o jedno jadro (nástroje, kontext, pamäť) a viacero vstupných bodov naň napojených:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lokálne surfaces"
        }), " (CLI, Desktop, VS Code, JetBrains) bežia na vlastnom stroji a zdieľajú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " aj MCP servery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud session triggery"
        }), " (Web, Mobile, Scheduled Routines) spúšťajú beh predvolene na Anthropic-hosted infraštruktúre — voliteľne presmerovateľný na self-hosted environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Z CLI vedie headless režim (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), ") k ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent SDK"
        }), ", ktorý ďalej napája ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD"
        }), " pipeline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\n    ENGINE[\"Claude Code Engine<br/>(zdieľané jadro: nástroje, kontext, CLAUDE.md, MCP)\"]\n\n    subgraph LOKAL[\"Lokálne surfaces (bežia na vlastnom stroji)\"]\n        CLI[\"CLI / Terminál\"]\n        DESK[\"Desktop app\"]\n        VSC[\"VS Code\"]\n        JB[\"JetBrains\"]\n    end\n\n    subgraph CLOUDSURF[\"Cloud session triggery\"]\n        WEB[\"Web (claude.ai/code)\"]\n        MOB[\"Mobile app\"]\n        ROUT[\"Scheduled Routines\"]\n    end\n\n    CLI --> ENGINE\n    DESK --> ENGINE\n    VSC -->|\"zdieľa CLAUDE.md, MCP servery\"| CLI\n    JB -->|\"spúšťa CLI v termináli IDE\"| CLI\n\n    WEB --> ENGINE\n    MOB --> ENGINE\n    ROUT --> ENGINE\n\n    SDK[\"Agent SDK<br/>(Python / TypeScript)\"]\n    CICD[\"CI/CD<br/>GitHub Actions, GitLab CI\"]\n    ANTHROPIC[\"Anthropic-hosted infra\"]\n    SELFHOST[\"Self-hosted environment<br/>(Runner vo vašej sieti)\"]\n\n    CLI -->|\"-p / headless\"| SDK\n    SDK --> CICD\n    CLI --> CICD\n\n    WEB -->|\"predvolene beží na\"| ANTHROPIC\n    MOB -->|\"predvolene beží na\"| ANTHROPIC\n    ROUT -->|\"predvolene beží na\"| ANTHROPIC\n    WEB -.->|\"voliteľne presmerované na\"| SELFHOST\n    MOB -.->|\"voliteľne presmerované na\"| SELFHOST\n    ROUT -.->|\"voliteľne presmerované na\"| SELFHOST\n\n    DESK -->|\"Remote Control / Dispatch\"| MOB"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenárová-mapa-diagram",
      children: "Scenárová mapa (diagram)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rovnaká rozhodovacia logika ako tabuľka nižšie, len ako priechodný diagram — od otázky \"aký mám scenár?\" k odporúčanému nástroju."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\n    START{{\"Aký je tvoj scenár?\"}}\n\n    START --> Q1[\"Potrebujem interaktívny steering?\"]\n    Q1 -->|\"áno, v termináli\"| CLI[\"CLI\"]\n    Q1 -->|\"áno, vizuálny review / paralelné session\"| DESK[\"Desktop\"]\n    Q1 -->|\"áno, priamo v editore\"| IDE[\"VS Code / JetBrains\"]\n    Q1 -->|\"nie, má bežať samo\"| Q2[\"Kde a ako má úloha bežať?\"]\n\n    Q2 -->|\"jednoduchý skript / pipeline\"| HEADLESS[\"claude -p (headless CLI)\"]\n    Q2 -->|\"vlastná orchestrácia, tool-approval callbacky\"| SDK[\"Agent SDK\"]\n    Q2 -->|\"na každom PR / commite\"| CICD[\"GitHub Actions / GitLab CI\"]\n    Q2 -->|\"dlhobežiaca, bez potreby steeringu\"| WEB[\"Web\"]\n    Q2 -->|\"spúšťam / sledujem z telefónu\"| MOB[\"Mobile\"]\n    Q2 -->|\"musí sa dotknúť internej siete / DB\"| SELF[\"Self-hosted environment\"]\n\n    HEADLESS -.->|\"keď shell skript už nestačí\"| SDK\n    SDK --> CICD"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rozhodovacia-tabuľka",
      children: "Rozhodovacia tabuľka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Potreba"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Riešenie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interaktívna práca v termináli"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vizuálny review diffov, paralelné session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Práca priamo v editore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VS Code / JetBrains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dlhobežiaca úloha bez steeringu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spúšťanie/monitoring z telefónu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skriptovaná automatizácia, jednoduchý pipeline"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "claude -p"
            }), " (headless CLI)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vlastná orchestrácia viacerých agentov s plnou kontrolou"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent SDK (Python/TypeScript)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatizácia v CI pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions / GitLab CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud session musí bežať vo vlastnej sieti (compliance, interné služby)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-hosted environments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friendly-example",
      children: "Friendly example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tím potrebuje: (1) niekoho, kto počas dňa vizuálne prechádza diffy a preview appky → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Desktop"
      }), ". (2) nočný job, ktorý po každom PR spustí review a napíše komentár → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions"
      }), " volajúce ", (0,jsx_runtime.jsx)(_components.code, {
        children: "claude -p --output-format json"
      }), ". (3) viackrokový pipeline review → fix → test, ktorý si musí pamätať kontext medzi krokmi → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--resume <session_id>"
      }), " v tom istom skripte. (4) beh, ktorý sa musí dotknúť internej databázy za firewallom → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "self-hosted environment"
      }), " s runnerom vo vlastnej sieti namiesto Anthropic-hosted cloud session. Štyri rôzne potreby, štyri rôzne vrstvy tej istej platformy — nie štyri rôzne nástroje."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Otázky pred voľbou vrstvy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potrebujem interaktívny steering, alebo má úloha bežať sama? → CLI/Desktop vs. Web/headless."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skriptujem jednorazový pipeline, alebo potrebujem vlastné tool-approval callbacky a typované výstupy? → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "claude -p"
        }), " vs. Agent SDK."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Beží to v CI na cudzom stroji každý beh nanovo? → pridaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--bare"
        }), " (bez auto-discovery hookov/MCP/", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), ") + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--allowedTools"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "--permission-mode"
        }), " pre neinteraktívny beh."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Musí sa úloha dotknúť internej siete/databázy, kde Anthropic infra nemá prístup? → self-hosted environment (len priame Anthropic API, nie Bedrock/Vertex/Foundry, repozitáre len z GitHubu)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Potrebujem strom volaní naprieč subagentmi na debugovanie? → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--output-format stream-json"
        }), ", správy nesú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent_tool_use_id"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "platformy--kedy-použiť-ktorú",
      children: "Platformy — kedy použiť ktorú"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platforma"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Najlepšie pre"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo získaš"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminálový workflow, scripting, vzdialené servery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plná funkcionalita, Agent SDK, computer use na macOS (Pro/Max), third-party provideri"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vizuálny review, paralelné session, spravovaný setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diff viewer, app preview, computer use, Dispatch (Pro/Max)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VS Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Práca v editore bez prepínania do terminálu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline diffy, integrovaný terminál, file context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JetBrains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IntelliJ, PyCharm, WebStorm a i."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diff viewer, zdieľanie výberu, terminál session"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dlho bežiace úlohy, ktoré nepotrebujú veľa steeringu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud, predvolene na Anthropic infra, beží aj po odpojení"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spúšťanie/monitoring úloh mimo počítača"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud session z appky, Remote Control pre lokálne session, Dispatch na Desktop (Pro/Max)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zdroj tabuľky: [2]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "headless-mode-a-scripting-claude--p",
      children: ["Headless mode a scripting (", (0,jsx_runtime.jsx)(_components.code, {
        children: "claude -p"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Základná stavebná jednotka pre orchestráciu cez vlastné skripty [3]:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "claude -p \"prompt\" --output-format json"
          })
        }), " — štruktúrovaný výstup (result, session_id, cost breakdown), dá sa parsovať cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jq"
        }), " a chainovať do ďalších krokov."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--output-format stream-json"
          })
        }), " — streamovanie eventov v reálnom čase; správy subagentov nesú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent_tool_use_id"
        }), ", takže sa dá rekonštruovať celý strom volaní naprieč viacerými agentmi."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--continue"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--resume <session_id>"
          })]
        }), " — pokračovanie v konkrétnej konverzácii naprieč viacerými skriptovými volaniami (viackrokové pipeline: review → fix → test)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--bare"
          })
        }), " — odporúčaný mód pre CI/skripty; vynecháva auto-discovery hookov, MCP serverov a CLAUDE.md → deterministický výsledok na každom stroji."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--allowedTools"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--permission-mode dontAsk|auto|acceptEdits"
          })]
        }), " — auto-approve nástrojov bez interaktívneho promptu, nutné pre neinteraktívny beh."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exit kódy (0 = úspech, non-zero = zlyhanie) umožňujú skriptom vetviť logiku."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-sdk--plná-programová-kontrola",
      children: "Agent SDK — plná programová kontrola"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Keď ", (0,jsx_runtime.jsx)(_components.code, {
        children: "claude -p"
      }), " volané zo shell skriptu prestane stačiť (potrebné callbacky na tool approval, natívne message objekty, typované štruktúrované výstupy), nastupuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent SDK"
      }), " — Python a TypeScript balíky postavené na tej istej agentovej slučke a nástrojoch ako Claude Code [3][1]. Je to CLI-only funkcia — inštaluje a spúšťa sa z toho istého ekosystému."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Claude Code má aj vstavané ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subagents"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "background agents"
      }), " (paralelné behy koordinované lead agentom) — časť orchestrácie tak nie je nutné stavať ručne od nuly [1]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-integrácie",
      children: "CI/CD integrácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Integrácia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo robí"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spúšťa Claude v CI pipeline — automatizovaný PR review, issue triage, plánovaná údržba"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitLab CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To isté pre GitLab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatický review na každom PR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zdroj: [1][2]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "self-hosted-environments--deployment-do-vlastnej-infraštruktúry",
      children: "Self-hosted environments — deployment do vlastnej infraštruktúry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre scenár, kde ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cloud session"
      }), " (spustená z Web/Mobile/Desktop/", (0,jsx_runtime.jsx)(_components.code, {
        children: "claude --cloud"
      }), "/scheduled routines) musí bežať vo vlastnej sieti (interné služby, databázy, compliance) — beta na Team/Enterprise pláne [4]:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment"
        }), " — logická skupina runnerov, vytvorená v admin nastaveniach claude.ai."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runner"
        }), " — dlhobežiaci proces vo vašej infraštruktúre (obdoba self-hosted CI runnera); pollinguje ", (0,jsx_runtime.jsx)(_components.code, {
          children: "api.anthropic.com"
        }), ", klonuje repo, spúšťa lokálny Claude Code proces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session"
        }), " — jedna úloha; child proces streamuje eventy späť cez HTTPS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kľúčové vlastnosti: všetka komunikácia je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outbound"
      }), " (Anthropic sa nikdy nepripája dovnútra vašej siete), podpora autoscaling orchestrátora, Kubernetes/Compose recepty, wrapper skripty pre per-session credentials a lifecycle hooky. Obmedzenia: inference len cez priame Anthropic API (nie cez Bedrock/Vertex/Foundry/LLM gateway), nekompatibilné so Zero Data Retention, repozitáre len z GitHubu [4]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V CI vždy pridaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--bare"
        }), " — bez neho skript potiahne lokálne hooky/MCP servery a beh na inom stroji môže dopadnúť inak."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--resume <session_id>"
        }), " je lacnejší spôsob viackrokového pipeline (review → fix → test) než reštartovať kontext v každom kroku nanovo."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-hosted environment nie je \"self-hosted model\" — inference stále ide cez priame Anthropic API, mení sa len to, kde beží runner a odkiaľ sa klonuje repo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vstavané subagents/background agents kryjú časť potrieb, na ktoré by inak bolo treba stavať vlastnú orchestráciu nad Agent SDK."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Claude Code nie je jeden nástroj, ale jedno jadro s viacerými vstupnými bodmi. Voľba povrchu (CLI/Desktop/VS Code/JetBrains/Web/Mobile) rieši otázku \"kde a ako s tým pracujem\"; voľba orchestračnej vrstvy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "claude -p"
      }), " → Agent SDK → CI/CD → self-hosted) rieši otázku \"ako to zautomatizujem a kde to musí bežať\". Rozhodovacia tabuľka v sekcii \"Ako to použiť\" je skratka na obe otázky naraz."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://code.claude.com/docs/en/overview",
        children: "https://code.claude.com/docs/en/overview"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://code.claude.com/docs/en/platforms",
        children: "https://code.claude.com/docs/en/platforms"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://code.claude.com/docs/en/headless",
        children: "https://code.claude.com/docs/en/headless"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[4] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://code.claude.com/docs/en/self-hosted-environments",
        children: "https://code.claude.com/docs/en/self-hosted-environments"
      })]
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