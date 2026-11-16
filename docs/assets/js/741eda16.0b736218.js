"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[59076],{

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

/***/ 55850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000123_islamic_finance_finweek_kl_2026_index_md_741_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000123-islamic-finance-finweek-kl-2026-index-md-741.json
const site_docs_en_knifes_k_000123_islamic_finance_finweek_kl_2026_index_md_741_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000123-Islamic-Finance-Finweek-KL-2026/K000123","title":"K000123 – Islamic finance for technologists: sukuk, tokenization and Shariah in practice (Finweek KL 2026)","description":"A concept primer on Islamic finance (riba, gharar, sukuk, maqasid, zakat, waqf), Labuan as a regulated hub, tokenized sukuk, and differences between Malaysia, Türkiye and Saudi Arabia. For architects and product builders who need the vocabulary of Finweek Kuala Lumpur 2026.","source":"@site/docs/en/knifes/K000123-Islamic-Finance-Finweek-KL-2026/index.md","sourceDirName":"en/knifes/K000123-Islamic-Finance-Finweek-KL-2026","slug":"/en/knifes/K000123-Islamic-Finance-Finweek-KL-2026/","permalink":"/en/knifes/K000123-Islamic-Finance-Finweek-KL-2026/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"islamic-finance","permalink":"/doc-tags/islamic-finance"},{"inline":true,"label":"sukuk","permalink":"/doc-tags/sukuk"},{"inline":true,"label":"tokenization","permalink":"/doc-tags/tokenization"},{"inline":true,"label":"maqasid","permalink":"/doc-tags/maqasid"},{"inline":true,"label":"zakat","permalink":"/doc-tags/zakat"},{"inline":true,"label":"waqf","permalink":"/doc-tags/waqf"},{"inline":true,"label":"labuan","permalink":"/doc-tags/labuan"},{"inline":true,"label":"malaysia","permalink":"/doc-tags/malaysia"},{"inline":true,"label":"fintech","permalink":"/doc-tags/fintech"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-11-16T12:00:00.000000+00:00","fm_version_comment":"","id":"K000123","guid":"69d4eea7-ad3b-4e62-8358-a6743c0219db","dao":"knife","title":"K000123 – Islamic finance for technologists: sukuk, tokenization and Shariah in practice (Finweek KL 2026)","description":"A concept primer on Islamic finance (riba, gharar, sukuk, maqasid, zakat, waqf), Labuan as a regulated hub, tokenized sukuk, and differences between Malaysia, Türkiye and Saudi Arabia. For architects and product builders who need the vocabulary of Finweek Kuala Lumpur 2026.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"guide","priority":"medium","tags":["islamic-finance","sukuk","tokenization","maqasid","zakat","waqf","labuan","malaysia","fintech"],"locale":"en","created":"2026-11-16 12:00","modified":"2026-11-16 12:00","status":"done","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000122 – Local audio transcription and AI on top, private and offline","permalink":"/en/knifes/K000122-Local-Audio-Transcription/"},"next":{"title":"KNIFE – Knowledge In Friendly Examples","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000123-Islamic-Finance-Finweek-KL-2026/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-11-16T12:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000123',
	guid: '69d4eea7-ad3b-4e62-8358-a6743c0219db',
	dao: 'knife',
	title: 'K000123 – Islamic finance for technologists: sukuk, tokenization and Shariah in practice (Finweek KL 2026)',
	description: 'A concept primer on Islamic finance (riba, gharar, sukuk, maqasid, zakat, waqf), Labuan as a regulated hub, tokenized sukuk, and differences between Malaysia, Türkiye and Saudi Arabia. For architects and product builders who need the vocabulary of Finweek Kuala Lumpur 2026.',
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
	locale: 'en',
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
const contentTitle = 'Islamic finance for technologists: sukuk, tokenization and Shariah in practice';

const assets = {

};



const toc = [{
  "value": "🎯 What it solves",
  "id": "-what-it-solves",
  "level": 2
}, {
  "value": "🧩 How it solves it",
  "id": "-how-it-solves-it",
  "level": 2
}, {
  "value": "Islamic vs. conventional bank",
  "id": "islamic-vs-conventional-bank",
  "level": 3
}, {
  "value": "🧪 How to use it",
  "id": "-how-to-use-it",
  "level": 2
}, {
  "value": "Sukuk, tokenization and smart contracts",
  "id": "sukuk-tokenization-and-smart-contracts",
  "level": 3
}, {
  "value": "Offshore, Labuan and transparency",
  "id": "offshore-labuan-and-transparency",
  "level": 3
}, {
  "value": "Maqasid and maslahah",
  "id": "maqasid-and-maslahah",
  "level": 3
}, {
  "value": "Zakat and waqf (Islamic social finance)",
  "id": "zakat-and-waqf-islamic-social-finance",
  "level": 3
}, {
  "value": "Three markets, three accents",
  "id": "three-markets-three-accents",
  "level": 3
}, {
  "value": "⚡ Quick Guide",
  "id": "-quick-guide",
  "level": 2
}, {
  "value": "💡 Tips and Notes",
  "id": "-tips-and-notes",
  "level": 2
}, {
  "value": "✅ Summary",
  "id": "-summary",
  "level": 2
}, {
  "value": "Sources",
  "id": "sources",
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
          children: "Series:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level:"
        }), " Beginner\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags:"
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
        id: "islamic-finance-for-technologists-sukuk-tokenization-and-shariah-in-practice",
        children: "Islamic finance for technologists: sukuk, tokenization and Shariah in practice"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Based on notes from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Finweek Kuala Lumpur 2026"
        }), " (11–13 Nov 2026). This is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "concept primer and map"
        }), ", not a record of the sessions. We do not claim what was said on stage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves",
      children: "🎯 What it solves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At a fintech conference in Kuala Lumpur, Islamic finance is everyday language: sukuk, maqasid, waqf, tokenization. An architect, analyst or product builder from outside this world often cannot tell what really differs from conventional banking, or where it meets technology (blockchain, smart contracts)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This KNIFE gives one page of orientation: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "core terms, a comparison table, tokenized sukuk, and how three key markets differ"
      }), " (Malaysia, Türkiye, Saudi Arabia)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it",
      children: "🧩 How it solves it"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Islamic finance rests on one idea: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "money should not earn money by itself; profit should come from real economic activity and shared risk."
      }), " The rules that follow can be read as product design constraints:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Riba"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prohibition of interest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gharar"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "maysir"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prohibition of excessive uncertainty and pure speculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Haram sectors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no financing of e.g. alcohol, gambling, weapons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real asset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "every transaction rests on something tangible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shariah board"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "an independent body approves and monitors products"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "islamic-vs-conventional-bank",
      children: "Islamic vs. conventional bank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Islamic bank"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conventional bank"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Price of money"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profit from trade, leasing, partnership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business partner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lender and borrower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Financing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Murabaha, Ijara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interest-bearing loan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Musharaka, Mudaraba: profit and loss are shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mainly the borrower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Underlying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real asset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sukuk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oversight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulator + Shariah board"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An honest note: the economic outcome of, say, murabaha can resemble a fixed-rate loan. How \"truly Islamic\" that is remains a matter of scholarly debate. This is where ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maqasid"
      }), " (below) enters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it",
      children: "🧪 How to use it"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sukuk-tokenization-and-smart-contracts",
      children: "Sukuk, tokenization and smart contracts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sukuk"
        }), ": a certificate of ownership share in a real asset (building, infrastructure). The investor receives part of the asset's return, not interest. The \"asset-backed\" vs. \"asset-based\" distinction is debated: does the investor own the asset, or only hold a claim on a cash flow?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenization"
        }), ": rights to an asset recorded as a digital token (fractional ownership, faster settlement, programmable payouts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenized sukuk"
        }), ": a sukuk issued or recorded as a token, with a smart contract paying out the return. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A Shariah board must still approve it"
        }), ", and scholarly opinions on digital assets differ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blockchain"
        }), " is a distributed ledger that cannot be altered retroactively. A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "smart contract"
        }), " is a program on it that executes when conditions are met. It automates an agreement, but ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "is not automatically a legally binding contract"
        }), ". Code executes its bugs as faithfully as its logic, which is why it is audited."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offshore-labuan-and-transparency",
      children: "Offshore, Labuan and transparency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Offshore is not illegal in itself. Failing to declare income and accounts, tax evasion and money laundering are. Countries now exchange account data automatically (CRS, FATCA), so a tax resident of the EU must declare foreign income and assets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Labuan IBFC"
      }), " is Malaysia's international financial centre (since 1990), with a single regulator, Labuan FSA. It calls itself \"mid-shore\": a regulated jurisdiction with supervision, not an unsupervised tax haven [2][3][4]. It focuses on banking, wealth management, insurance (captive), digital services and Islamic finance [4]. It also cites a \"Shariah-compliant blockchain hub\" strategy and a first climate sukuk [5][6]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maqasid-and-maslahah",
      children: "Maqasid and maslahah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maqasid al-Shariah"
      }), " are the higher objectives of Shariah, meaning the purpose of the rules, not only their letter. In Islamic finance these are cited as circulation of wealth, fair and transparent practices, and justice [7]. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maslahah"
      }), " is public interest, closely tied to maqasid [8]. The practical consequence is a \"substance over form\" argument: a product that is formally compliant but economically resembles a loan can be criticized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zakat-and-waqf-islamic-social-finance",
      children: "Zakat and waqf (Islamic social finance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zakat"
        }), ": an obligatory charitable payment to those in need (commonly about 2.5% of eligible wealth; exact rules vary)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Waqf"
        }), ": a permanent endowment. The asset is given in perpetuity and its yield serves public-benefit goals (a school, a hospital)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "World Zakat and Waqf Forum (WZWF)"
        }), ": a platform of institutions managing these funds. Founded 2010 as World Zakat Forum, renamed in 2021, its 14th edition took place 13–15 Oct 2025 in Kuching, and Malaysia is its permanent secretariat [9][10][11]. The Global Zakat and Waqf Policy Advisory Council issues Zakat Core Principles and Waqf Core Principles [12]."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linking waqf with sukuk or tokenization is discussed in the literature. It is not an established standard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-markets-three-accents",
      children: "Three markets, three accents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Malaysia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Türkiye"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Saudi Arabia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central hub, Labuan IBFC, deep Islamic capital market"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Participation banks; sukuk known as ", (0,jsx_runtime.jsx)(_components.em, {
              children: "kira sertifikaları"
            }), " (lease certificates) [13][14]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One of the world's largest sukuk issuers, 2025: ≈ USD 72.5 bn (S&P) [15]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized Shariah advisory councils at the regulators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capital-market regulation (CMB), sukuk through lease-certificate structures [13]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More decentralized Shariah board model, strong influence of AAOIFI standards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contested structures"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generally more permissive (e.g. conditionally permitted ", (0,jsx_runtime.jsx)(_components.em, {
              children: "bai inah"
            }), " and ", (0,jsx_runtime.jsx)(_components.em, {
              children: "tawarruq"
            }), ") [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ijara, murabaha, musharaka, mudaraba-based certificates [13]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gulf approach is generally stricter [16]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Figures and characterizations are indicative and come from secondary sources. Verify with the regulator and a Shariah adviser before relying on them in a contract or product."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-guide",
      children: "⚡ Quick Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before a first meeting with an Islamic finance partner, ask yourself:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which market are you targeting (Malaysia, Türkiye, the Gulf)? Shariah interpretation differs between them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is the product built on a real asset and shared risk, or is it a conventional loan \"re-labelled\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Who is your Shariah board or adviser, and what do you need from them in writing?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you tokenize: what is actually on-chain and what is not? Personal data ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never on-chain"
        }), " (GDPR, right to erasure); at most a hash."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the legal nature of the token in that jurisdiction (in the EU e.g. MiCA, verify with counsel)?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes",
      children: "💡 Tips and Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenize only when the task demands it."
        }), " A smart contract makes sense where it solves a concrete problem (e.g. automatic revenue sharing among several partners), not as an end in itself. Until then, one interface in the architecture (record-keeping and settlement) that can be swapped later is enough."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When working from audio or slides, verify spelling. \"Makashi\" heard in a talk was most likely ", (0,jsx_runtime.jsx)(_components.em, {
          children: "maqasid"
        }), ". For local transcription of recordings see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000122-Local-Audio-Transcription/",
          children: "K000122"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " here: a record of the panel on tokenizing waqf and sukuk, how Labuan FSA regulates Islamic banks and digital assets, and a detailed Shariah view on tokenized assets. These are open questions for a follow-up KNIFE."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-summary",
      children: "✅ Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Islamic finance is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real asset + shared risk + Shariah oversight"
      }), ". Sukuk is its \"bond\"; tokenization and smart contracts are a technical layer on top, not a replacement for the legal framework or Shariah approval. Malaysia, Türkiye and Saudi Arabia use the same vocabulary with different accents, so choose the market and the adviser first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
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
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG_EN",
          children: "⬅ KNIFES – Overview"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_LIST_EN",
          children: "List"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS_EN",
          children: "Details"
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