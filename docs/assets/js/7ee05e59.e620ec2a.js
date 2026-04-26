"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[77732],{

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

/***/ 51815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000102_knife_claude_sdlc_collaboration_index_md_7ee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000102-knife-claude-sdlc-collaboration-index-md-7ee.json
const site_docs_sk_knifes_k_000102_knife_claude_sdlc_collaboration_index_md_7ee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/K000102","title":"K000102 – AI podpora spolupráce knowlwdge workerov v rámci SDLC.md","description":"{{DESCRIPTION}}","source":"@site/docs/sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/index.md","sourceDirName":"sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration","slug":"/sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/","permalink":"/sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-26T07:32:32.143083+00:00","fm_version_comment":"","id":"K000102","guid":"20b9bf25-c7ce-49b2-8ed8-7b9a52e59f68","dao":"knife","title":"K000102 – AI podpora spolupráce knowlwdge workerov v rámci SDLC.md","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-04-26 09:32","modified":"2026-04-26 09:32","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000101 – CYNEFIN Framework","permalink":"/sk/knifes/K000101-CYNEFIN_Framework/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-26T07:32:32.143083+00:00',
	fm_version_comment: '',
	id: 'K000102',
	guid: '20b9bf25-c7ce-49b2-8ed8-7b9a52e59f68',
	dao: 'knife',
	title: 'K000102 – AI podpora spolupráce knowlwdge workerov v rámci SDLC.md',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2026-04-26 09:32',
	modified: '2026-04-26 09:32',
	status: 'backlog',
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
const contentTitle = '[KNIFE] Claude ako kolaboračný priestor pre SDLC v bankovom prostredí';

const assets = {

};



const toc = [{
  "value": "1. Motivácia: Otvorený Mindset ako vstupná podmienka",
  "id": "1-motivácia-otvorený-mindset-ako-vstupná-podmienka",
  "level": 2
}, {
  "value": "2. Problém: Ostrovy vedomostí v SDLC",
  "id": "2-problém-ostrovy-vedomostí-v-sdlc",
  "level": 2
}, {
  "value": "2.1 Štrukturálne príčiny",
  "id": "21-štrukturálne-príčiny",
  "level": 3
}, {
  "value": "2.2 Dôsledky pre banku",
  "id": "22-dôsledky-pre-banku",
  "level": 3
}, {
  "value": "3. Claude ako kolaboračný priestor: Čo to znamená konkrétne",
  "id": "3-claude-ako-kolaboračný-priestor-čo-to-znamená-konkrétne",
  "level": 2
}, {
  "value": "3.1 Nie náhrada nástrojov, ale prekladová vrstva",
  "id": "31-nie-náhrada-nástrojov-ale-prekladová-vrstva",
  "level": 3
}, {
  "value": "3.2 Konkrétne use cases naprieč SDLC",
  "id": "32-konkrétne-use-cases-naprieč-sdlc",
  "level": 3
}, {
  "value": "3.3 Projekt ako trvalá pamäť tímu",
  "id": "33-projekt-ako-trvalá-pamäť-tímu",
  "level": 3
}, {
  "value": "4. Zapojenie špecialistov rôznych domén",
  "id": "4-zapojenie-špecialistov-rôznych-domén",
  "level": 2
}, {
  "value": "4.1 Problém fragmentovaného jazyka",
  "id": "41-problém-fragmentovaného-jazyka",
  "level": 3
}, {
  "value": "4.2 Framework pre zapojenie",
  "id": "42-framework-pre-zapojenie",
  "level": 3
}, {
  "value": "5. Infraštruktúrne a prevádzkové nároky",
  "id": "5-infraštruktúrne-a-prevádzkové-nároky",
  "level": 2
}, {
  "value": "5.1 SaaS model (claude.ai / API)",
  "id": "51-saas-model-claudeai--api",
  "level": 3
}, {
  "value": "5.2 On-Premise model",
  "id": "52-on-premise-model",
  "level": 3
}, {
  "value": "6. Licenčné a finančné nároky",
  "id": "6-licenčné-a-finančné-nároky",
  "level": 2
}, {
  "value": "6.1 SaaS (Anthropic API / claude.ai Teams/Enterprise)",
  "id": "61-saas-anthropic-api--claudeai-teamsenterprise",
  "level": 3
}, {
  "value": "6.2 On-Premise OSS modely",
  "id": "62-on-premise-oss-modely",
  "level": 3
}, {
  "value": "6.3 Skryté náklady",
  "id": "63-skryté-náklady",
  "level": 3
}, {
  "value": "7. On-Premise riešenia: Kedy a pre aké use cases",
  "id": "7-on-premise-riešenia-kedy-a-pre-aké-use-cases",
  "level": 2
}, {
  "value": "7.1 Kedy je On-Premise nutnosťou",
  "id": "71-kedy-je-on-premise-nutnosťou",
  "level": 3
}, {
  "value": "7.2 Odporúčané modely pre banku",
  "id": "72-odporúčané-modely-pre-banku",
  "level": 3
}, {
  "value": "7.3 Hybridný model (odporúčaný)",
  "id": "73-hybridný-model-odporúčaný",
  "level": 3
}, {
  "value": "8. Regulačné nároky v bankovom prostredí",
  "id": "8-regulačné-nároky-v-bankovom-prostredí",
  "level": 2
}, {
  "value": "8.1 Kľúčové regulačné rámce",
  "id": "81-kľúčové-regulačné-rámce",
  "level": 3
}, {
  "value": "8.2 Aktuálny stav: Claude a EU dátová lokalita",
  "id": "82-aktuálny-stav-claude-a-eu-dátová-lokalita",
  "level": 3
}, {
  "value": "8.3 Alternatívne cesty pre banku",
  "id": "83-alternatívne-cesty-pre-banku",
  "level": 3
}, {
  "value": "8.4 Governance checklist pre AI v SDLC",
  "id": "84-governance-checklist-pre-ai-v-sdlc",
  "level": 3
}, {
  "value": "9. Záver: Čo to znamená pre banku prakticky",
  "id": "9-záver-čo-to-znamená-pre-banku-prakticky",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "knife-claude-ako-kolaboračný-priestor-pre-sdlc-v-bankovom-prostredí",
        children: "[KNIFE] Claude ako kolaboračný priestor pre SDLC v bankovom prostredí"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Typ:"
      }), " Koncept / Architektonická úvaha", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Autor:"
      }), " Roman [Knowledge Management Enterprise Architect]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dátum:"
      }), " 2026-04-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tags:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SDLC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collaboration"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge-sharing"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "banking"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AI-adoption"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "governance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-motivácia-otvorený-mindset-ako-vstupná-podmienka",
      children: "1. Motivácia: Otvorený Mindset ako vstupná podmienka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Akákoľvek kolaboračná platforma zlyháva, ak ľudia nie sú ochotní do nej vkladať znalosti."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Claude nie je len ďalší chatbot. V kontexte SDLC môže fungovať ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "neutrálny, jazykovo bohatý mediátor"
      }), " medzi fázami a rolami – ale iba ak existuje kultúrna pripravenosť. Prvou podmienkou adopcie je teda ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zmena postoja, nie technológia"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Otvorený mindset = ochota zdieľať znalosti naprieč fázami SDLC, aj keď to nie je diktované procesom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-problém-ostrovy-vedomostí-v-sdlc",
      children: "2. Problém: Ostrovy vedomostí v SDLC"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-štrukturálne-príčiny",
      children: "2.1 Štrukturálne príčiny"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Organizačné siloá vo vývoji nie sú náhoda. Vytvárajú ich:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zámerná ochrana pozície:"
        }), " Špecialista, ktorého znalosti sú jedinečné a netransparentné, je ťažko nahraditeľný. Knowledge hoarding je racionálna kariérna stratégia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fázová fragmentácia:"
        }), " Každá fáza SDLC (Requirements → Design → Development → Testing → Operations) používa iné nástroje, iný jazyk, iné artefakty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nástrojová roztrieštenosť:"
        }), " JIRA, Confluence, Git, Sparx EA, Word dokumenty, e-mail – každý nástroj je ostrovom. Znalosti sa strácajú v prekladoch."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-dôsledky-pre-banku",
      children: "2.2 Dôsledky pre banku"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Onboarding nových členov trvá mesiace, nie týždne."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kritické rozhodnutia z dizajnovej fázy nie sú dostupné testerom ani operácii."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulačné audity odhaľujú medzery práve preto, že dokumentácia a realita sa rozišli niekde medzi fázami."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Znalosti odchádzajú s ľuďmi."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-claude-ako-kolaboračný-priestor-čo-to-znamená-konkrétne",
      children: "3. Claude ako kolaboračný priestor: Čo to znamená konkrétne"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-nie-náhrada-nástrojov-ale-prekladová-vrstva",
      children: "3.1 Nie náhrada nástrojov, ale prekladová vrstva"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Claude nenahrádza JIRA, Confluence ani Sparx EA.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Funguje ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kontextovo bohatý most"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Požiadavky (Business Analyst)\n        ↓\nClaude: štruktúrovaný summary + otázky na medzery\n        ↓\nDizajn (Architekt / EA)\n        ↓\nClaude: preklad do technického zadania + diagram draft\n        ↓\nDevelopment (Developer)\n        ↓\nClaude: code review komentáre + konzistencia s dizajnom\n        ↓\nTesting (QA)\n        ↓\nClaude: test scenáre generované z requirements\n        ↓\nOperations (Ops / Security)\n        ↓\nClaude: runbook draft, security checklist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-konkrétne-use-cases-naprieč-sdlc",
      children: "3.2 Konkrétne use cases naprieč SDLC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fáza"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo Claude robí"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business → technický preklad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generuje štruktúrovaný user story draft zo surového textu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EA → Developer briefing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformuje Sparx EA export do zrozumiteľného technického summaru"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kontroluje konzistenciu implementácie s dohodnutými patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generuje test scenáre z acceptance criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pomáha diagnostikovať logy, navrhuje runbook kroky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-fázy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extrahuje rozhodnutia z neštruktúrovaných diskusií (chat, e-mail)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-projekt-ako-trvalá-pamäť-tímu",
      children: "3.3 Projekt ako trvalá pamäť tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Claude Project = zdieľaný kontext pre celý tím.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Nie len individuálny asistent – ale ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kolektívna pamäť projektu"
      }), ", dostupná naprieč rolami."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-zapojenie-špecialistov-rôznych-domén",
      children: "4. Zapojenie špecialistov rôznych domén"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-problém-fragmentovaného-jazyka",
      children: "4.1 Problém fragmentovaného jazyka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Architekt hovorí inak ako developer, developer inak ako tester, tester inak ako business owner.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Claude vie ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prekladať medzi doménovými jazykmi"
      }), " bez straty obsahu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-framework-pre-zapojenie",
      children: "4.2 Framework pre zapojenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spoločný kontext projektu"
        }), " – všetky role majú prístup k zdieľaným artefaktom v Claude Projecte."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rolovo špecifické queries"
        }), " – každý sa pýta v svojom jazyku, Claude odpovedá kontextovo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rozhodovací log"
        }), " – kľúčové rozhodnutia sa zapisujú ako strukturované MD záznamy (ADR pattern)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iteratívne upresňovanie"
        }), " – nejasnosti sa riešia v Claude, nie e-mailom."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-infraštruktúrne-a-prevádzkové-nároky",
      children: "5. Infraštruktúrne a prevádzkové nároky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-saas-model-claudeai--api",
      children: "5.1 SaaS model (claude.ai / API)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspekt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Požiadavka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sieťový prístup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound HTTPS na api.anthropic.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autentifikácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API key manažment (rotácia, vault integrácia)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API call logy pre audit trail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dostupnosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLA Anthropic: 99.9% (bez garantovaného RTO pre banku)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dátová lokalita"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Dáta spracovávané mimo EU – viz bod 8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-on-premise-model",
      children: "5.2 On-Premise model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspekt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Požiadavka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU server (min. A100/H100 pre produkčnú kvalitu)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mistral Large 3, Llama 3.x, IBM Granite 3.3, Aleph Alpha / PhariaAI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST API wrapper, interná PKI, firewall rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevádzkové náklady"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MLOps tím, monitoring, fine-tuning pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Air-gap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Možné pre klasifikované prostredia"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-licenčné-a-finančné-nároky",
      children: "6. Licenčné a finančné nároky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-saas-anthropic-api--claudeai-teamsenterprise",
      children: "6.1 SaaS (Anthropic API / claude.ai Teams/Enterprise)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "claude.ai Teams:"
        }), " fixný mesačný poplatok per seat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "claude.ai Enterprise:"
        }), " custom zmluva, SSO, pokročilé administračné funkcie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API:"
        }), " pay-per-token model – vhodný pre piloty, rizikovejší pri scale-up bez cost controls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Odporúčanie:"
        }), " Pre banku Enterprise tier s DPA (Data Processing Agreement)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-on-premise-oss-modely",
      children: "6.2 On-Premise OSS modely"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mistral, Llama 3.x: open weights, komerčné použitie povolené (licencia špecifická per model)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IBM Granite 3.3: Apache 2.0, enterprise-friendly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aleph Alpha / PhariaAI: komerčná licencia, EU-natívny vendor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-skryté-náklady",
      children: "6.3 Skryté náklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tuning a RAG pipeline development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU infra (CapEx alebo cloud GPU – Azure NDv4/H100)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MLOps a security review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change management a školenia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-on-premise-riešenia-kedy-a-pre-aké-use-cases",
      children: "7. On-Premise riešenia: Kedy a pre aké use cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-kedy-je-on-premise-nutnosťou",
      children: "7.1 Kedy je On-Premise nutnosťou"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situácia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dôvod"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Klasifikované dáta (interné regulácie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Žiadny SaaS nesmie spracovávať"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Air-gap prostredia (napr. core banking systémy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fyzická izolácia siete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regulačný requirement na dátovú lokalitu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EU AI Act, NBS, ECB požiadavky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Citlivé M&A dokumenty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obchodné tajomstvo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-odporúčané-modely-pre-banku",
      children: "7.2 Odporúčané modely pre banku"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Silná stránka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Poznámka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IBM Granite 3.3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise compliance, Apache 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priamo zameraný na regulated industries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mistral Large 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kvalita blízka GPT-4, EU vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Komerčná licencia potrebná pri SaaS použití"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Llama 3.3 70B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Najsilnejší OSS model vo svojej triede"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meta licencia, overiť pre banking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aleph Alpha / PhariaAI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EU-natívny, nemecký vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GDPR natívne, enterprise support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DeepSeek R1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silný v reasoning úlohách"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Čínsky vendor – regulačne problematický pre banku"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-hybridný-model-odporúčaný",
      children: "7.3 Hybridný model (odporúčaný)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Verejné / interné necitilivé use cases → Anthropic API / Azure OpenAI\nCitlivé interné use cases              → On-Premise (Granite / Mistral)\nAir-gap / klasifikované                → On-Premise, izolovaná sieť\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-regulačné-nároky-v-bankovom-prostredí",
      children: "8. Regulačné nároky v bankovom prostredí"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-kľúčové-regulačné-rámce",
      children: "8.1 Kľúčové regulačné rámce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rámec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dopad na AI v banke"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EU AI Act"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Klasifikácia AI systémov, high-risk kategória pre credit/fraud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GDPR / DORA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spracovanie osobných údajov, operačná odolnosť"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NBS / ECB Guidelines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lokálne regulačné požiadavky pre slovenské banky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EBA Guidelines on ICT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk management pre ICT a AI systémy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-aktuálny-stav-claude-a-eu-dátová-lokalita",
      children: "8.2 Aktuálny stav: Claude a EU dátová lokalita"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kritická poznámka (stav k 2026-04):"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Anthropic aktuálne ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nemá EU dátové centrum"
        }), ". Dáta odoslané cez API sú spracovávané v USA.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Pre banku to znamená: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Claude SaaS nie je vhodný pre osobné údaje a interné citlivé informácie"
        }), " bez explicitného DPA a posúdenia transferu dát mimo EÚ (SCCs)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-alternatívne-cesty-pre-banku",
      children: "8.3 Alternatívne cesty pre banku"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Azure OpenAI Service"
        }), " – Microsoft garantuje EU dátovú lokalitu, Private Endpoint / VNet integrácia, compliance certifikáty (ISO 27001, SOC 2, PCI DSS). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Odporúčaná primárna cesta pre banku."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-Premise modely"
        }), " – plná kontrola, bez dátového transferu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic Enterprise s DPA"
        }), " – ak bude EU región dostupný, sledovať roadmapu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-governance-checklist-pre-ai-v-sdlc",
      children: "8.4 Governance checklist pre AI v SDLC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AI systém klasifikovaný podľa EU AI Act (high-risk / limited-risk)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "DPIA (Data Protection Impact Assessment) dokončený"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "DPA s vendorom podpísaný"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dátová lokalita overená a zdokumentovaná"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Model risk management framework aplikovaný"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Audit trail pre AI-asistované rozhodnutia zavedený"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Exit stratégia (vendor lock-in mitigation) definovaná"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-záver-čo-to-znamená-pre-banku-prakticky",
      children: "9. Záver: Čo to znamená pre banku prakticky"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Krátky horizont (pilot):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure OpenAI + interné necitilivé use cases (dokumentácia, test scenáre, code review)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jasné guardrails: čo môže ísť do AI, čo nesmie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meranie hodnoty: čas ušetrený v SDLC fázach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stredný horizont (scale-up):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-Premise model pre citlivé use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrácia s existujúcimi nástrojmi (JIRA, Confluence, Sparx EA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge base building cez Claude Projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dlhý horizont (transformácia):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI ako štandard SDLC fázy, nie výnimka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merateľné zníženie knowledge silos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulačná dokumentácia generovaná ako vedľajší produkt procesu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Tento dokument je KNIFE príspevok – nie finálny návrh riešenia. Slúži na diskusiu a iteráciu."
      })
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