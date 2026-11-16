"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[52920],{

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

/***/ 73070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000123_islamske_financie_finweek_kl_2026_index_md_bb9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000123-islamske-financie-finweek-kl-2026-index-md-bb9.json
const site_docs_sk_knifes_k_000123_islamske_financie_finweek_kl_2026_index_md_bb9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000123-Islamske-Financie-Finweek-KL-2026/K000123","title":"K000123 – Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi (Finweek KL 2026)","description":"Pojmový základ islamských financií (riba, gharar, sukuk, maqasid, zakát, waqf), Labuan ako regulovaný hub, tokenizovaný sukuk a rozdiely Malajzia – Turecko – Saudská Arábia. Pre architektov a tvorcov produktov, ktorí potrebujú rozumieť jazyku konferencie Finweek Kuala Lumpur 2026.","source":"@site/docs/sk/knifes/K000123-Islamske-Financie-Finweek-KL-2026/index.md","sourceDirName":"sk/knifes/K000123-Islamske-Financie-Finweek-KL-2026","slug":"/sk/knifes/K000123-Islamske-Financie-Finweek-KL-2026/","permalink":"/sk/knifes/K000123-Islamske-Financie-Finweek-KL-2026/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"islamic-finance","permalink":"/doc-tags/islamic-finance"},{"inline":true,"label":"sukuk","permalink":"/doc-tags/sukuk"},{"inline":true,"label":"tokenization","permalink":"/doc-tags/tokenization"},{"inline":true,"label":"maqasid","permalink":"/doc-tags/maqasid"},{"inline":true,"label":"zakat","permalink":"/doc-tags/zakat"},{"inline":true,"label":"waqf","permalink":"/doc-tags/waqf"},{"inline":true,"label":"labuan","permalink":"/doc-tags/labuan"},{"inline":true,"label":"malaysia","permalink":"/doc-tags/malaysia"},{"inline":true,"label":"fintech","permalink":"/doc-tags/fintech"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-11-16T12:00:00.000000+00:00","fm_version_comment":"","id":"K000123","guid":"e2c66349-82f1-41b1-96af-37e4935961e1","dao":"knife","title":"K000123 – Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi (Finweek KL 2026)","description":"Pojmový základ islamských financií (riba, gharar, sukuk, maqasid, zakát, waqf), Labuan ako regulovaný hub, tokenizovaný sukuk a rozdiely Malajzia – Turecko – Saudská Arábia. Pre architektov a tvorcov produktov, ktorí potrebujú rozumieť jazyku konferencie Finweek Kuala Lumpur 2026.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"medium","tags":["islamic-finance","sukuk","tokenization","maqasid","zakat","waqf","labuan","malaysia","fintech"],"locale":"sk","created":"2026-11-16 12:00","modified":"2026-11-16 12:00","status":"done","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000122 – Lokálny prepis zvuku a AI nad ním, súkromne a offline","permalink":"/sk/knifes/K000122-Local-Audio-Transcription/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000123-Islamske-Financie-Finweek-KL-2026/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-11-16T12:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000123',
	guid: 'e2c66349-82f1-41b1-96af-37e4935961e1',
	dao: 'knife',
	title: 'K000123 – Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi (Finweek KL 2026)',
	description: 'Pojmový základ islamských financií (riba, gharar, sukuk, maqasid, zakát, waqf), Labuan ako regulovaný hub, tokenizovaný sukuk a rozdiely Malajzia – Turecko – Saudská Arábia. Pre architektov a tvorcov produktov, ktorí potrebujú rozumieť jazyku konferencie Finweek Kuala Lumpur 2026.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: 'guide',
	priority: 'medium',
	tags: [
		'islamic-finance',
		'sukuk',
		'tokenization',
		'maqasid',
		'zakat',
		'waqf',
		'labuan',
		'malaysia',
		'fintech'
	],
	locale: 'sk',
	created: '2026-11-16 12:00',
	modified: '2026-11-16 12:00',
	status: 'done',
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
const contentTitle = 'Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi';

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
  "value": "Islamská vs. konvenčná banka",
  "id": "islamská-vs-konvenčná-banka",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Sukuk, tokenizácia a smart contract",
  "id": "sukuk-tokenizácia-a-smart-contract",
  "level": 3
}, {
  "value": "Offshore, Labuan a transparentnosť",
  "id": "offshore-labuan-a-transparentnosť",
  "level": 3
}, {
  "value": "Maqasid a maslahah",
  "id": "maqasid-a-maslahah",
  "level": 3
}, {
  "value": "Zakát a waqf (islamic social finance)",
  "id": "zakát-a-waqf-islamic-social-finance",
  "level": 3
}, {
  "value": "Tri trhy, tri akcenty",
  "id": "tri-trhy-tri-akcenty",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Beginner\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "islamic-finance"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sukuk"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenization"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maqasid"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zakat"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waqf"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "labuan"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malaysia"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fintech"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "islamské-financie-pre-technikov-sukuk-tokenizácia-a-šaría-v-praxi",
        children: "Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Vzniklo z poznámok z konferencie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Finweek Kuala Lumpur 2026"
        }), " (11. – 13. 11. 2026). Je to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pojmový základ a mapa"
        }), ", nie záznam prednášok. Čo konkrétne na pódiu zaznelo, tu netvrdíme."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na fintech konferencii v Kuala Lumpur sa o islamských financiách hovorí ako o bežnom jazyku: sukuk, maqasid, waqf, tokenizácia. Architekt, analytik alebo tvorca produktu zo Západu často nevie, čo je skutočný rozdiel oproti konvenčnému bankovníctvu a kde sa zbiehajú s technológiou (blockchain, smart contract)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento KNIFE dáva jednu stranu orientácie: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "základné pojmy, tabuľku porovnania, tokenizovaný sukuk a to, v čom sa líšia tri kľúčové trhy"
      }), " (Malajzia, Turecko, Saudská Arábia)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Islamské financie stoja na jednej myšlienke: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "peniaze nemajú zarábať samy, zisk má vznikať z reálnej ekonomickej činnosti a zdieľaného rizika."
      }), " Z toho vyplývajú pravidlá, ktoré sa dajú čítať ako návrhové obmedzenia produktu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Princíp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Význam"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Riba"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zákaz úroku"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gharar"
            }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "maysir"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zákaz nadmernej neistoty a čistej špekulácie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Haram odvetvia"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zákaz financovať napr. alkohol, hazard, zbrane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reálne aktívum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transakcia musí stáť na niečom hmotnom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Šaría board"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nezávislý orgán produkt schvaľuje a kontroluje"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "islamská-vs-konvenčná-banka",
      children: "Islamská vs. konvenčná banka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Oblasť"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Islamská banka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Konvenčná banka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cena peňazí"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zisk z obchodu, prenájmu, podielu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Úrok"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vzťah s klientom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obchodný partner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Veriteľ a dlžník"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Úver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Murabaha, Ijara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Úver s úrokom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zdieľanie rizika"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Musharaka, Mudaraba: zisk aj strata sa delia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nesie hlavne dlžník"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Podklad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reálne aktívum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nie je podmienkou"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dlhopis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sukuk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dlhopis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dohľad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulátor + šaría board"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulátor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Poctivá poznámka: ekonomický výsledok napr. murabahy môže pripomínať úver s fixnou sadzbou. Nakoľko je to „skutočne islamské“, je predmetom odbornej debaty. Práve na to sa viaže pojem ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maqasid"
      }), " nižšie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sukuk-tokenizácia-a-smart-contract",
      children: "Sukuk, tokenizácia a smart contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sukuk"
        }), ": certifikát podielu na reálnom aktíve (budova, infraštruktúra). Investor dostáva časť výnosu z aktíva, nie úrok. Rozdiel „asset-backed“ a „asset-based“ je predmetom diskusie: vlastní investor aktívum, alebo má len nárok na tok platieb?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenizácia"
        }), ": práva na aktívum zapísané ako digitálny token (frakčné vlastníctvo, rýchle vyrovnanie, programovateľné výplaty)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenizovaný sukuk"
        }), ": sukuk vydaný alebo evidovaný ako token, výnos vypláca smart contract. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Šaría board ho musí schváliť"
        }), " a názory učených na digitálne aktíva sa líšia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blockchain"
        }), " je distribuovaná kniha záznamov, ktorá sa spätne nedá meniť. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Smart contract"
        }), " je program na nej, ktorý sa vykoná po splnení podmienok. Automatizuje dohodu, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nie je automaticky právne záväznou zmluvou"
        }), ". Kód vykoná aj svoju chybu, preto sa audituje."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offshore-labuan-a-transparentnosť",
      children: "Offshore, Labuan a transparentnosť"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Offshore samo o sebe nie je nelegálne. Nelegálne je nepriznanie príjmov a účtov, daňový únik a pranie špinavých peňazí. Dnes si krajiny automaticky vymieňajú dáta o účtoch (CRS, FATCA), takže daňový rezident SR/EÚ musí príjmy a majetok v zahraničí priznať."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Labuan IBFC"
      }), " je malajzijské medzinárodné finančné centrum (od 1990) s jediným regulátorom Labuan FSA. Samo sa označuje ako „mid-shore“: regulovaná jurisdikcia s dohľadom, nie daňový raj bez kontroly [2][3][4]. Zameriava sa na banking, wealth management, poistenie (captive), digitálne služby a islamské financie [4]. Uvádza aj stratégiu „Shariah-compliant blockchain hub“ a prvý klimatický sukuk [5][6]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maqasid-a-maslahah",
      children: "Maqasid a maslahah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maqasid al-Shariah"
      }), " sú vyššie ciele šaríe, teda zmysel pravidiel, nie len ich litera. V islamských financiách sa uvádzajú obeh bohatstva, férové a transparentné praktiky a spravodlivosť [7]. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maslahah"
      }), " je verejný záujem, s maqasid úzko spätý pojem [8]. Praktický dôsledok je argument „podstata pred formou“: produkt, ktorý formálne vyhovuje, ale ekonomicky pripomína úver, sa dá kritizovať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zakát-a-waqf-islamic-social-finance",
      children: "Zakát a waqf (islamic social finance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zakát"
        }), ": povinný islamský dar potrebným (v bežnom výklade zhruba 2,5 % z oprávneného majetku, presné pravidlá sa líšia)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Waqf"
        }), ": trvalý fond. Majetok sa daruje natrvalo a jeho výnos slúži verejnoprospešným cieľom (škola, nemocnica)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "World Zakat and Waqf Forum (WZWF)"
        }), ": platforma inštitúcií, ktoré tieto fondy spravujú. Vznikol 2010 ako World Zakat Forum, od 2021 má dnešný názov, 14. ročník bol 13. – 15. 10. 2025 v Kuchingu a Malajzia je jeho stálym sekretariátom [9][10][11]. Rada Global Zakat and Waqf Policy Advisory Council vydáva Zakat Core Principles a Waqf Core Principles [12]."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spojenie waqf so sukukom alebo tokenizáciou sa v odbornej diskusii spomína. Nie je to zavedený štandard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tri-trhy-tri-akcenty",
      children: "Tri trhy, tri akcenty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Malajzia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Turecko"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Saudská Arábia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rola"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centrálny hub, Labuan IBFC, silný islamský kapitálový trh"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Participačné banky, sukuk pod názvom ", (0,jsx_runtime.jsx)(_components.em, {
              children: "kira sertifikaları"
            }), " (lease certificates) [13][14]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jeden z najväčších emitentov sukuk na svete, 2025: ≈ 72,5 mld. USD (S&P) [15]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralizované šaría rady (SAC) pri regulátoroch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulácia cez kapitálový trh (CMB), sukuk cez lease-certificate štruktúry [13]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralizovanejší model šaría rád, silný vplyv štandardov AAOIFI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postoj k sporným štruktúram"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Zvyčajne liberálnejší (napr. podmienečne povolený ", (0,jsx_runtime.jsx)(_components.em, {
              children: "bai inah"
            }), " a ", (0,jsx_runtime.jsx)(_components.em, {
              children: "tawarruq"
            }), ") [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Štruktúry typu ijara, murabaha, musharaka, mudaraba pre certifikáty [13]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zálivový prístup je zvyčajne prísnejší [16]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čísla a charakteristiky sú orientačné, zo sekundárnych zdrojov. Pred použitím v zmluve alebo produkte ich over u regulátora a šaría poradcu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pred prvým stretnutím s partnerom z islamských financií si odpovedz:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ktorý trh cieliš (Malajzia, Turecko, Záliv)? Šaría interpretácia sa medzi nimi líši."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Je produkt postavený na reálnom aktíve a zdieľaní rizika, alebo len „prelepený“ konvenčný úver?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kto bude tvoj šaría board alebo poradca a čo od neho potrebuješ písomne?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak tokenizuješ: čo je skutočne na blockchaine a čo nie? Osobné údaje ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nikdy on-chain"
        }), " (GDPR, právo na vymazanie), ide najviac hash."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aká je právna povaha tokenu v danej jurisdikcii (v EÚ napr. MiCA, overiť s právnikom)?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenizuj až keď to úloha žiada."
        }), " Smart contract dáva zmysel tam, kde rieši konkrétny problém (napr. automatické delenie výnosov medzi viacerých partnerov), nie ako samoúčel. Dovtedy stačí v architektúre jedno rozhranie (evidencia a vyúčtovanie), ktoré sa dá neskôr vymeniť."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pri pojmoch zo zvuku/prezentácie si overuj pravopis. „Makashi“ z prednášky bolo pravdepodobne ", (0,jsx_runtime.jsx)(_components.em, {
          children: "maqasid"
        }), ". O lokálnom prepise nahrávok pozri ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000122-Local-Audio-Transcription/",
          children: "K000122"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Čo tu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nie je"
        }), ": záznam z panelu o tokenizácii waqf a sukuk, regulácia islamských bánk a digitálnych aktív v Labuane a podrobný šaría pohľad na tokenizované aktíva. Sú to otvorené otázky na ďalší KNIFE."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Islamské financie sú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reálne aktívum + zdieľané riziko + šaría dohľad"
      }), ". Sukuk je ich „dlhopis“, tokenizácia a smart contract sú technická vrstva nad ním, nie náhrada právneho rámca ani šaría schválenia. Malajzia, Turecko a Saudská Arábia používajú rovnaké pojmy, ale s rôznym akcentom, a preto treba trh a poradcu zvoliť vopred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fintechnews.my/fintech-events-conference-forum-expo-malaysia/event/finweek-kuala-lumpur-2026/",
        children: "https://fintechnews.my/fintech-events-conference-forum-expo-malaysia/event/finweek-kuala-lumpur-2026/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf",
        children: "https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://newswav.com/article/mission-to-reset-labuan-ibfc-A2609_ACxg1c",
        children: "https://newswav.com/article/mission-to-reset-labuan-ibfc-A2609_ACxg1c"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[4] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://theedgemalaysia.com/node/812647",
        children: "https://theedgemalaysia.com/node/812647"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[5] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf",
        children: "https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[6] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/annual-reports/2026/Labuan-FSA-MR-2025.pdf",
        children: "https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/annual-reports/2026/Labuan-FSA-MR-2025.pdf"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[7] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ikr.inceif.org/handle/INCEIF/3417",
        children: "https://ikr.inceif.org/handle/INCEIF/3417"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[8] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jmifr.usim.edu.my/index.php/jmifr/article/download/334/224",
        children: "https://jmifr.usim.edu.my/index.php/jmifr/article/download/334/224"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[9] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://pressreleases.responsesource.com/newsroom/SusieAsburyPR/release/103064",
        children: "https://pressreleases.responsesource.com/newsroom/SusieAsburyPR/release/103064"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[10] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://azka.zakat.com.my/2025/ppz-maiwp-supports-world-zakat-waqf-forum-2025-as-corporate-partner/",
        children: "https://azka.zakat.com.my/2025/ppz-maiwp-supports-world-zakat-waqf-forum-2025-as-corporate-partner/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[11] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://azka.zakat.com.my/?p=12715",
        children: "https://azka.zakat.com.my/?p=12715"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[12] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://islamiceconomicsproject.com/2024/11/11/roundup-of-world-zakat-waqf-forum-2024/",
        children: "https://islamiceconomicsproject.com/2024/11/11/roundup-of-world-zakat-waqf-forum-2024/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[13] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://erdem-erdem.av.tr/en/insights/prominence-of-sukuk-in-turkey-as-an-islamic-finance-instrument",
        children: "https://erdem-erdem.av.tr/en/insights/prominence-of-sukuk-in-turkey-as-an-islamic-finance-instrument"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[14] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://f.invest.gov.tr/en/library/publications/lists/investpublications/turkiye-nexus-of-participation-finance.pdf",
        children: "https://f.invest.gov.tr/en/library/publications/lists/investpublications/turkiye-nexus-of-participation-finance.pdf"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[15] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.arabnews.pk/node/2629160/business-economy",
        children: "https://www.arabnews.pk/node/2629160/business-economy"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[16] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.malaymail.com/news/money/2014/05/21/malaysia-gulf-coming-closer-on-islamic-bai-inah-deals/673105",
        children: "https://www.malaymail.com/news/money/2014/05/21/malaysia-gulf-coming-closer-on-islamic-bai-inah-deals/673105"
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