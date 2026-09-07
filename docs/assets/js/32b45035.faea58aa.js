"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[76869],{

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

/***/ 93400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000115_dual_stack_ai_compliance_index_md_32b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000115-dual-stack-ai-compliance-index-md-32b.json
const site_docs_sk_knifes_k_000115_dual_stack_ai_compliance_index_md_32b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000115-Dual-Stack-AI-Compliance/K000115","title":"K000115 – Dual-stack AI compliance ako enterprise architektonická požiadavka","description":"Prečo si globálna firma pôsobiaca v Číne aj mimo nej nemôže vystačiť s jedným AI hardvérovo-softvérovým stackom — export controls a geopolitika menia \'jeden stack pre všetky trhy\' na architektonické riziko. Vzor: dual-stack ako explicitná návrhová požiadavka, nie neskoré záplatovanie. Ilustrované na Lenovo a kolapse podielu Nvidia na čínskom AI čipovom trhu.","source":"@site/docs/sk/knifes/K000115-Dual-Stack-AI-Compliance/index.md","sourceDirName":"sk/knifes/K000115-Dual-Stack-AI-Compliance","slug":"/sk/knifes/K000115-Dual-Stack-AI-Compliance/","permalink":"/sk/knifes/K000115-Dual-Stack-AI-Compliance/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"ai","permalink":"/doc-tags/ai"},{"inline":true,"label":"architecture","permalink":"/doc-tags/architecture"},{"inline":true,"label":"compliance","permalink":"/doc-tags/compliance"},{"inline":true,"label":"geopolitics","permalink":"/doc-tags/geopolitics"},{"inline":true,"label":"enterprise","permalink":"/doc-tags/enterprise"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-07T09:41:02.047412+00:00","fm_version_comment":"","id":"K000115","guid":"9fe6fcd3-e37d-4232-b7bf-32d622f70015","dao":"knife","title":"K000115 – Dual-stack AI compliance ako enterprise architektonická požiadavka","description":"Prečo si globálna firma pôsobiaca v Číne aj mimo nej nemôže vystačiť s jedným AI hardvérovo-softvérovým stackom — export controls a geopolitika menia \'jeden stack pre všetky trhy\' na architektonické riziko. Vzor: dual-stack ako explicitná návrhová požiadavka, nie neskoré záplatovanie. Ilustrované na Lenovo a kolapse podielu Nvidia na čínskom AI čipovom trhu.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"pattern","priority":"medium","tags":["ai","architecture","compliance","geopolitics","enterprise"],"locale":"sk","created":"2026-09-07 11:41","modified":"2026-09-07 11:41","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000114 – Hybrid AI ako architektonický vzor","permalink":"/sk/knifes/K000114-Hybrid-AI-Architektonicky-Vzor/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000115-Dual-Stack-AI-Compliance/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-07T09:41:02.047412+00:00',
	fm_version_comment: '',
	id: 'K000115',
	guid: '9fe6fcd3-e37d-4232-b7bf-32d622f70015',
	dao: 'knife',
	title: 'K000115 – Dual-stack AI compliance ako enterprise architektonická požiadavka',
	description: 'Prečo si globálna firma pôsobiaca v Číne aj mimo nej nemôže vystačiť s jedným AI hardvérovo-softvérovým stackom — export controls a geopolitika menia \'jeden stack pre všetky trhy\' na architektonické riziko. Vzor: dual-stack ako explicitná návrhová požiadavka, nie neskoré záplatovanie. Ilustrované na Lenovo a kolapse podielu Nvidia na čínskom AI čipovom trhu.',
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
		'compliance',
		'geopolitics',
		'enterprise'
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
const contentTitle = 'K000115 – Dual-stack AI compliance ako enterprise architektonická požiadavka';

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
  "value": "Friendly example — Lenovo a kolaps podielu Nvidia v Číne",
  "id": "friendly-example--lenovo-a-kolaps-podielu-nvidia-v-číne",
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
  "value": "Prečo ide o architektonickú, nie len obchodnú otázku",
  "id": "prečo-ide-o-architektonickú-nie-len-obchodnú-otázku",
  "level": 3
}, {
  "value": "Governance gap ako vstupný bod pre rolu BA &amp; AI Orchestrator",
  "id": "governance-gap-ako-vstupný-bod-pre-rolu-ba--ai-orchestrator",
  "level": 3
}, {
  "value": "Čo dual-stack nerieši",
  "id": "čo-dual-stack-nerieši",
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
        id: "k000115--dual-stack-ai-compliance-ako-enterprise-architektonická-požiadavka",
        children: "K000115 – Dual-stack AI compliance ako enterprise architektonická požiadavka"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Stredná až pokročilá\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "architecture"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compliance"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "geopolitics"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enterprise"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Tento KNIFE je rozpracovaný. Geopolitické prognózy (napr. podiel Nvidia na čínskom trhu) sú z jedného zdroja k septembru 2026 a menia sa rýchlo — pred použitím v inom kontexte over aktuálny stav."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bežný predpoklad enterprise architektúry znie: \"AI stack navrhneme raz, nasadíme všade.\" Pre globálnu firmu pôsobiacu súčasne na čínskom aj nečínskom trhu tento predpoklad neplatí — a čoraz menej ide o voľbu, čoraz viac o vynútenú nutnosť. Americké exportné obmedzenia na pokročilé AI čipy a súbežný nástup domácich čínskych alternatív (Huawei Ascend) znamenajú, že ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jeden hardvérovo-softvérový AI stack fyzicky nemôže obsluhovať oba trhy naraz"
      }), " — nie z dôvodu preferencie, ale z dôvodu dostupnosti a regulácie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Firmy, ktoré túto realitu neriešia architektonicky vopred, ju riešia neskôr ako núdzové záplatovanie (samostatné, zle koordinované čínske vetvy produktu, duplicitný kód, nekonzistentná governance). Tento KNIFE pomenúva vzor, ktorý premieňa dual-stack z núdzového riešenia na explicitnú, od začiatku navrhnutú architektonickú požiadavku."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vzor stavia na jednoduchom princípe z architektúry systémov: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "oddeliť to, čo sa musí líšiť podľa regiónu (stack), od toho, čo môže zostať spoločné (governance a orchestrácia nad stackom)"
      }), ". Namiesto toho, aby región prenikal do každej vrstvy systému ad-hoc, sa vytvorí jeden explicitný \"swap point\" — miesto v architektúre, kde sa podľa regiónu/trhu zapojí buď západný, alebo čínsky stack, bez zmeny zvyšku systému."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\n    REGION{{\"Ktorý trh/región?\"}}\n\n    subgraph WEST[\"Stack: zvyšok sveta\"]\n        WCHIP[\"Hardvér: NVIDIA / Intel / AMD\"]\n        WMODEL[\"Modely: OpenAI / Anthropic / Google\"]\n    end\n\n    subgraph CHINA[\"Stack: Čína\"]\n        CCHIP[\"Hardvér: Huawei Ascend\"]\n        CMODEL[\"Modely: DeepSeek / Qwen / Zhipu GLM\"]\n    end\n\n    REGION -->|\"mimo Číny\"| WEST\n    REGION -->|\"čínsky trh / štátom regulovaný odberateľ\"| CHINA\n\n    WEST --> GOV[\"Spoločná governance vrstva<br/>(SOC 2, audit trail, interné compliance procesy)\"]\n    CHINA --> GOV\n\n    GOV --> PRODUCT[\"Rovnaký produkt/proces navonok<br/>(swap point neviditeľný pre koncového používateľa)\"]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kľúčové je, že ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "governance vrstva zostáva jedna"
      }), " — mení sa len to, ktorý konkrétny hardvér/model je pod ňou zapojený. Bez tohto oddelenia sa región prepíše do každej vrstvy zvlášť a údržba sa stane exponenciálne drahšou s každým ďalším regiónom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friendly-example--lenovo-a-kolaps-podielu-nvidia-v-číne",
      children: "Friendly example — Lenovo a kolaps podielu Nvidia v Číne"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Konkrétny geopolitický spúšťač: podiel Nvidia na čínskom AI čipovom trhu sa má podľa prognóz prepadnúť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zo 40 % na približne 8 %"
      }), ", keďže Huawei (Ascend čipy) rýchlo naberá podiel pod tlakom amerických exportných obmedzení [13]. Čínski enterprise poskytovatelia (napr. Zhipu/GLM-5) už trénujú modely priamo na Huawei Ascend namiesto Nvidia GPU [6]. Pre firmu ako Lenovo — globálny hráč s čínskymi koreňmi — to znamená, že \"jeden enterprise AI stack\" nie je realistická voľba:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack: zvyšok sveta"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack: Čína"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardvér"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA (AI Cloud Gigafactory), Intel, AMD [1][2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Huawei Ascend [6][13]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pravdepodobne OpenAI/Microsoft/Anthropic podľa zákazníka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSeek, Qwen, Zhipu GLM-5 [6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dôvod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enterprise zákazníci mimo Číny očakávajú tento ekosystém"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exportné obmedzenia fyzicky blokujú Nvidia dodávky; domáci dodávatelia sú lacnejší a bez regulačného rizika"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2, RBAC, audit trails — nutnosť pre regulované odvetvia [10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lokálne compliance rámce, iný dôraz"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rozhodovacia-tabuľka-všeobecná",
      children: "Rozhodovacia tabuľka (všeobecná)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kritérium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signál pre dual-stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signál, že jeden stack stačí"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Export control na cieľový hardvér"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "áno, priamo dotknutý (napr. pokročilé GPU do Číny)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nie, žiadne obmedzenie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typ zákazníka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "štátom vlastnené / regulované subjekty [6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "súkromný sektor, žiadna štátna väzba"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dátová rezidencia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vyžadovaná lokálne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nie je vyžadovaná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Objem biznisu v druhom regióne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dostatočný na odôvodnenie duplicitnej údržby"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "okrajový, nerentabilné duplikovať"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Otázky pred rozhodnutím \"potrebujeme dual-stack?\":"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Je náš primárny hardvér/model dotknutý existujúcimi alebo hroziacimi exportnými obmedzeniami v niektorom z našich cieľových trhov?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Máme jasne definovaný \"swap point\" v architektúre, kde sa dá stack vymeniť bez zásahu do zvyšku systému — alebo je región zapletený do každej vrstvy?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Je naša governance vrstva (audit, compliance procesy) nezávislá od konkrétneho hardvéru/modelu, alebo je s ním pevne zviazaná?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalkulovali sme si náklady na duplicitnú údržavu dvoch stackov oproti riziku nesplnenia exportných/compliance pravidiel?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-ide-o-architektonickú-nie-len-obchodnú-otázku",
      children: "Prečo ide o architektonickú, nie len obchodnú otázku"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je lákavé vidieť dual-stack ako čisto obchodné/procurement rozhodnutie (\"kúpime aj čínsky hardvér\"). Problém nastáva, keď sa táto voľba nepremietne do architektúry vopred — vtedy sa región stáva skrytou závislosťou rozliatou naprieč kódom, konfiguráciou aj procesmi, namiesto jedného explicitného rozhodovacieho bodu. To isté riziko sa objavuje aj pri voľbe AI modelu/vrstvy v rámci jedného regiónu — pozri všeobecnejší vzor v [[K000114-Hybrid-AI-Architektonicky-Vzor|K000114 – Hybrid AI ako architektonický vzor]]; dual-stack compliance je jeho špecializovaný prípad pre os \"región/export control\", nie os \"use-case\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "governance-gap-ako-vstupný-bod-pre-rolu-ba--ai-orchestrator",
      children: "Governance gap ako vstupný bod pre rolu BA & AI Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podľa Futurum Group takmer všetky firmy (96 %) zvyšujú investície do AI, no len 27 % má komplexný governance rámec [2]. Tento rozdiel je presne miesto, kde dual-stack architektúra buď zlyhá (governance nestíha pribúdajúcim stackom), alebo funguje ako jej vlastný záchranný mechanizmus — ak je governance vrstva navrhnutá nezávisle od konkrétneho regionálneho stacku (pozri diagram vyššie), nový región/stack sa dá pridať bez toho, aby sa musela governance stavať odznova."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-dual-stack-nerieši",
      children: "Čo dual-stack nerieši"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dual-stack architektúra nerieši rozdiely v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jazykovom tóne, compliance postoji a enterprise tooling integráciách"
      }), " medzi čínskymi a západnými modelmi — tieto zaostávajú aj pri technicky porovnateľnom výkone [6]. To znamená, že swap point v architektúre musí počítať aj s odlišnými prevádzkovými charakteristikami modelov na oboch stranách, nielen s odlišným hardvérom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dual-stack nie je len \"2× ten istý stack\" — čínsky a nečínsky stack majú typicky odlišné silné stránky (cena/výkon v coding vs. compliance/tooling), čo treba zohľadniť pri návrhu swap pointu, nie ho len mechanicky duplikovať."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Náklady na údržbu dvoch stackov rastú s hĺbkou, do akej región preniká do architektúry — čím vyššie (bližšie ku governance vrstve) je swap point umiestnený, tým lacnejšia je dlhodobá údržba."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Geopolitické prognózy (napr. 40 %→8 % podiel Nvidia v Číne) sa menia rýchlo — architektúra postavená na dual-stacku má byť odolná voči zmene pomeru, nie voči konkrétnemu číslu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozri aj všeobecnejší vzor [[K000114-Hybrid-AI-Architektonicky-Vzor|K000114]] pre orchestráciu naprieč vrstvami (personálna/firemná/verejná) — dual-stack rieši ortogonálnu os (región/export control), obe osi sa dajú kombinovať."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre globálnu firmu pôsobiacu na čínskom aj nečínskom trhu nie je \"jeden AI stack pre všetkých\" udržateľná voľba — export controls a rozdielna dostupnosť hardvéru to fyzicky vylučujú. Dual-stack ako architektonický vzor rieši toto oddelením regionálneho stacku (hardvér + modely) od spoločnej governance vrstvy cez jeden explicitný swap point. Firma, ktorá toto oddelenie nemá navrhnuté vopred, ho bude riešiť neskôr ako drahé a rizikové záplatovanie."
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
      children: ["[6] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report",
        children: "https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[10] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://beam.ai/agentic-insights/ai-agents-in-2026-how-the-us-and-china-are-building-two-very-different-futures",
        children: "https://beam.ai/agentic-insights/ai-agents-in-2026-how-the-us-and-china-are-building-two-very-different-futures"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[13] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.marketscale.com/industries/transportation/nvidias-china-ai-chip-share-is-forecast-to-collapse-from-40-to-8-as-huawei-scales",
        children: "https://www.marketscale.com/industries/transportation/nvidias-china-ai-chip-share-is-forecast-to-collapse-from-40-to-8-as-huawei-scales"
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