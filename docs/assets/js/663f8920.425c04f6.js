"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[44103],{

/***/ 3647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/02-SDLC-GIT-fa9f686fe5413651a119cc7cd24ad355.png");

/***/ }),

/***/ 5167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/03-GIT-std-workflow-09cffc5fc5bda60401a70926cdc3036b.png");

/***/ }),

/***/ 16566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/04-GIT-release-workflow-43b49dafbf0a9c0a8384a448cce1d559.png");

/***/ }),

/***/ 19899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-EA-LT-01-df4939decc364af18c32d21fce1f5ebb.png");

/***/ }),

/***/ 26232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06-Smartgit-e9bfb32520d6f178eade67f2e32c422d.png");

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

/***/ 28862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/08-EA-LT-02-ca6786bbf1066ed2a5d549f7f82e9f72.png");

/***/ }),

/***/ 39960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-GIT-std-workflow-09cffc5fc5bda60401a70926cdc3036b.png");

/***/ }),

/***/ 55804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/07-EA-LT-01-df4939decc364af18c32d21fce1f5ebb.png");

/***/ }),

/***/ 59059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-Lemontree-c1630919a612bcc064797aaa2a850257.png");

/***/ }),

/***/ 59892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/01-sparx-ecosystem-92ff88a55fbd2fa9e0c74b2d868d3e3d.png");

/***/ }),

/***/ 60330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/05-Lemontree-c1630919a612bcc064797aaa2a850257.png");

/***/ }),

/***/ 69493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08-EA-LT-02-ca6786bbf1066ed2a5d549f7f82e9f72.png");

/***/ }),

/***/ 72559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000110_time_travel_sdlc_index_md_663_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000110-time-travel-sdlc-index-md-663.json
const site_docs_en_knifes_k_000110_time_travel_sdlc_index_md_663_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000110-Time-Travel-SDLC/K000110_EN","title":"K000110 – Time Travel in SDLC: Parallel Modelling and Version Control for Enterprise Architect","description":"Git workflow for Enterprise Architect models via LemonTree by LieberLieber — branch, merge, audit trail, and the corporate-latency problem it eliminates.","source":"@site/docs/en/knifes/K000110-Time-Travel-SDLC/index.md","sourceDirName":"en/knifes/K000110-Time-Travel-SDLC","slug":"/en/knifes/K000110-Time-Travel-SDLC/","permalink":"/en/knifes/K000110-Time-Travel-SDLC/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"EnterpriseArchitect","permalink":"/doc-tags/enterprise-architect"},{"inline":true,"label":"LemonTree","permalink":"/doc-tags/lemon-tree"},{"inline":true,"label":"Git","permalink":"/doc-tags/git"},{"inline":true,"label":"VersionControl","permalink":"/doc-tags/version-control"},{"inline":true,"label":"ParallelModelling","permalink":"/doc-tags/parallel-modelling"},{"inline":true,"label":"EAM","permalink":"/doc-tags/eam"},{"inline":true,"label":"MBSE","permalink":"/doc-tags/mbse"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-21T00:00:00.000000+00:00","fm_version_comment":"","id":"K000110_EN","guid":"39297006-0bd4-4dcf-a690-29e6bdcb4d68","dao":"knife","title":"K000110 – Time Travel in SDLC: Parallel Modelling and Version Control for Enterprise Architect","description":"Git workflow for Enterprise Architect models via LemonTree by LieberLieber — branch, merge, audit trail, and the corporate-latency problem it eliminates.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","EnterpriseArchitect","LemonTree","Git","VersionControl","ParallelModelling","EAM","MBSE"],"locale":"en","created":"2026-06-21 00:00","modified":"2026-06-22 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000109 – ESCO, SFIA and CAA: Three Layers of Skills Governance in IT Organizations","permalink":"/en/knifes/K000109-ESCO-SFIA-CAA/"},"next":{"title":"KNIFE – Knowledge In Friendly Examples","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000110-Time-Travel-SDLC/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-21T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000110_EN',
	guid: '39297006-0bd4-4dcf-a690-29e6bdcb4d68',
	dao: 'knife',
	title: 'K000110 – Time Travel in SDLC: Parallel Modelling and Version Control for Enterprise Architect',
	description: 'Git workflow for Enterprise Architect models via LemonTree by LieberLieber — branch, merge, audit trail, and the corporate-latency problem it eliminates.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: '',
	priority: '',
	tags: [
		'SDLC',
		'EnterpriseArchitect',
		'LemonTree',
		'Git',
		'VersionControl',
		'ParallelModelling',
		'EAM',
		'MBSE'
	],
	locale: 'en',
	created: '2026-06-21 00:00',
	modified: '2026-06-22 00:00',
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
const contentTitle = 'K000110 – Time Travel in SDLC: Parallel Modelling and Version Control for Enterprise Architect';

const assets = {

};



const toc = [{
  "value": "WHAT? – What is this about?",
  "id": "what--what-is-this-about",
  "level": 2
}, {
  "value": "HOW? – How does it work?",
  "id": "how--how-does-it-work",
  "level": 2
}, {
  "value": "The core problem with traditional EA collaboration",
  "id": "the-core-problem-with-traditional-ea-collaboration",
  "level": 3
}, {
  "value": "The Git + LemonTree approach",
  "id": "the-git--lemontree-approach",
  "level": 3
}, {
  "value": "What makes LemonTree different",
  "id": "what-makes-lemontree-different",
  "level": 3
}, {
  "value": "The latency problem – solved at the root",
  "id": "the-latency-problem--solved-at-the-root",
  "level": 3
}, {
  "value": "Recommended Git client",
  "id": "recommended-git-client",
  "level": 3
}, {
  "value": "The broader ecosystem",
  "id": "the-broader-ecosystem",
  "level": 3
}, {
  "value": "Merge governance",
  "id": "merge-governance",
  "level": 3
}, {
  "value": "WHAT CAN YOU GAIN? – Value for you and your team",
  "id": "what-can-you-gain--value-for-you-and-your-team",
  "level": 2
}, {
  "value": "Why this matters before you even touch Git: the QRM angle",
  "id": "why-this-matters-before-you-even-touch-git-the-qrm-angle",
  "level": 3
}, {
  "value": "Real-world reference",
  "id": "real-world-reference",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Reflection Questions",
  "id": "reflection-questions",
  "level": 2
}, {
  "value": "Related KNIFE Articles",
  "id": "related-knife-articles",
  "level": 2
}, {
  "value": "List of Figures",
  "id": "list-of-figures",
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
        id: "k000110--time-travel-in-sdlc-parallel-modelling-and-version-control-for-enterprise-architect",
        children: "K000110 – Time Travel in SDLC: Parallel Modelling and Version Control for Enterprise Architect"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Series:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level:"
        }), " Intermediate – Advanced\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SDLC"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Enterprise Architect"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LemonTree"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Git"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Version Control"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Parallel Modelling"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EAM"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MBSE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what--what-is-this-about",
      children: "WHAT? – What is this about?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every developer knows the feeling: something broke, you need to go back. Git makes that trivial.\nNow imagine the same problem – but in a complex Enterprise Architect model. Multiple analysts. Parallel changes. No version history. No way back."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time travel in SDLC"
      }), " means the ability to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "who changed what, when, and why"
        }), " – linked to a change request"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare"
        }), " any two model versions or releases at element level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch"
        }), " – work independently without affecting the shared output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge"
        }), " – integrate changes in a controlled, reviewable way"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Roll back"
        }), " – return to any point in model history"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is not a metaphor. This is a Git workflow – applied to EA models via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LemonTree"
      }), " by LieberLieber."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "SDLC – Git workflow kontext",
        src: (__webpack_require__(93700)/* ["default"] */ .A) + "",
        width: "2738",
        height: "2406"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 01:"
        }), " Solution Lifecycle Management – Git versioning in SDLC context.\nDiagram by Roman Kazicka (EA model, created 2023).\nShows Vendor–Customer value delivery across 7 SDLC phases.\nBottom layer: Versioning Systems – AS-IS (git, single repo) vs TO-BE\n(git across DEV / TEST / UAT / PROD environments).\nPurpose: demonstrate where Git workflow applies today and where it can be extended."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how--how-does-it-work",
      children: "HOW? – How does it work?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-core-problem-with-traditional-ea-collaboration",
      children: "The core problem with traditional EA collaboration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enterprise Architect models are typically stored in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "central SQL database"
      }), " (MySQL, Oracle, MS SQL). Every click in the model generates multiple database queries. In enterprise environments – with VPN, DLP tools, and endpoint security clients – this creates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10–15 second latency per action"
        }), " (experienced at 365.bank, Swiss Re, and others)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Security systems flagging the modeller as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "potential attacker"
        }), " (mass SQL queries = anomaly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No parallel editing"
        }), " without package locking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No meaningful diff"
        }), " – who changed what is invisible at the element level"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-git--lemontree-approach",
      children: "The Git + LemonTree approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LemonTree implements the whole Git workflow during parallel modelling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Clone → Branch → Commit → Push → Pull Request → Merge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sparx Systems ekosystém – SDLC supported by AI",
        src: (__webpack_require__(84553)/* ["default"] */ .A) + "",
        width: "1360",
        height: "1360"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 02:"
        }), " SDLC supported by AI – Sparx Systems ecosystem overview.\nEnterprise Architect as the core modelling platform spans all SDLC phases\n(Business → Arch. → Analysis → Design → Impl. → Testing → Ops).\nLemonTree (LieberLieber) provides Git workflow: Clone–Branch–Commit–Merge, 3-way diff.\nKERNARO AI for EA adds Chat, Agents, JavaScript/Python, MCP client capabilities.\nPROLABORATE + Genie provides web access for stakeholders in natural language.\nLLM backends: Claude, OpenAI/GPT, Gemini, Azure OpenAI, Ollama (on-prem)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Git concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning in EA modelling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get a full local copy of the model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create an independent working version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save a named snapshot with description"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share your version to the central Git repo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pull Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propose your changes for review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate changes – with conflict resolution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Git štandardný workflow – Vincent Driessen FBV",
        src: (__webpack_require__(39960)/* ["default"] */ .A) + "",
        width: "2132",
        height: "2366"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 03:"
        }), " Standard Git branching model – based on Vincent Driessen's Flow-Based\nVersioning (FBV). Source: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://nvie.com/posts/a-successful-git-branching-model/",
          children: "https://nvie.com/posts/a-successful-git-branching-model/"
        }), "\nModelled in Enterprise Architect by Roman Kazicka.\nBranches: MASTER / HOTFIXES / RELEASE BRANCHES / DEVELOP / FEATURE BRANCH-INDIVIDUAL 1..N.\nShows full lifecycle: ActivityInitial → commits → merges → ActivityFinal per branch.\nThis is the conceptual foundation for LemonTree workflow in EA modelling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Git Based Single Source Of Truth – paralelné modelovanie",
        src: (__webpack_require__(83397)/* ["default"] */ .A) + "",
        width: "2262",
        height: "2622"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 04:"
        }), " Git Based Single Source Of Truth – parallel modelling workflow\nfor EA models. Diagram by Roman Kazicka (EA model PCG_2096, created 2025).\nArchitecture: MS SQL (READ ONLY, PROLABORATE Ready) → GitEA server →\nBRANCH-MAIN=PRODUCTION → Release branches (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RYYYY<MM+1>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RYYYY<MM+2>"
        }), ") →\nUser 1 / User 2 / User 3 local clones.\nOperations shown: CLONE, PULL (cyan), PUSH (red), BRANCH (blue),\nMERGE (dark red), PULL REQUEST (green), CHECKOUT (orange), COMMIT (purple).\nThis diagram is the architectural blueprint for the LemonTree implementation at 365.bank."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-makes-lemontree-different",
      children: "What makes LemonTree different"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Standard diff tools compare ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "text or lines"
      }), ". EA models are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "graphs"
      }), " – elements, connectors, diagrams, tagged values, relationships."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LemonTree uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-way diff algorithm"
      }), " that understands the model's graph structure. It compares:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base version (common ancestor)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version A (e.g. analyst 1's branch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version B (e.g. analyst 2's branch)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "And produces a precise, element-level merge proposal – not a line-level text conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "LemonTree 3-way diff",
        src: (__webpack_require__(59059)/* ["default"] */ .A) + "",
        width: "1510",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 05:"
        }), " LemonTree merge session – three-way comparison of two parallel EA model\nbranches (A.eapx vs B.eapx). Top panel: element tree with conflict markers (#Conflicted).\nMiddle panel: diagram visual diff (PWC", ":CompositeStructureDiagram", ") – orange border marks\nthe active/changed diagram. Bottom panel: GraphEdges diff showing renamed connector\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "mainBusCAN → cBus:CAN Bus"
        }), ". Conflicts are resolved at element level, not line level."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-latency-problem--solved-at-the-root",
      children: "The latency problem – solved at the root"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the model is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "local file"
      }), ", there are no real-time database queries through the corporate network. Git synchronisation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "asynchronous"
      }), " – it happens when the modeller chooses to push, not on every click."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: no latency, no false security alerts, no blocked creativity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Note: the latency elimination above is specific to local-file mode. LemonTree's compare and merge engine is not limited to local files — it also supports comparing and merging directly against database-based EA repositories. Local file + Git is the configuration that removes the corporate-network bottleneck described earlier; it is not the only way LemonTree's diff/merge can be used."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommended-git-client",
      children: "Recommended Git client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LieberLieber recommends ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SmartGit"
      }), " for its tight integration between EA, LemonTree, and Git providers (GitHub, GitLab, Gitea, Azure DevOps)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "LemonTree Add-In v EA ribbon",
        src: (__webpack_require__(19899)/* ["default"] */ .A) + "",
        width: "1459",
        height: "292"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 06:"
        }), " Enterprise Architect – LemonTree Add-In integrated directly in the ribbon\n(Specialize tab). Active Git branch is visible in the status bar: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feature/CR-21422"
        }), ".\nThe modeller works in the context of a change request without leaving EA.\nVisible menu: Dashboard / Components / Model / Git / License."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-broader-ecosystem",
      children: "The broader ecosystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LemonTree integrates naturally with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PROLABORATE"
        }), " – web-based viewer for EA models; stakeholders see all changes without opening EA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KERNARO / GENIE"
        }), " – AI add-ons that allow querying model content in natural language"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LemonTree.Connect"
        }), " – traceability bridge to ALM/PLM tools (requirements → architecture)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merge-governance",
      children: "Merge governance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Merging models should involve ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one experienced user"
      }), " acting as reviewer – equivalent to a Pull Request review in software development. This is not a limitation; it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quality-controlled integration"
      }), ", the same standard applied in professional dev teams."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-can-you-gain--value-for-you-and-your-team",
      children: "WHAT CAN YOU GAIN? – Value for you and your team"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full audit trail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who changed what, when, linked to change request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple analysts, zero blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safe experimentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch freely – original is never touched"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare model state between any two releases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminated latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local file, async sync – no SQL over VPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stakeholder visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PROLABORATE web view without EA licence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI-ready foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KERNARO/GENIE work on top of a clean, versioned model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "LemonTree History panel v EA",
        src: (__webpack_require__(69493)/* ["default"] */ .A) + "",
        width: "1512",
        height: "803"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 07:"
        }), " LemonTree History panel inside Enterprise Architect – complete Git history\nof model file ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ADAM7-20250327.qea"
        }), ". Each record includes author, date, and change\ndescription linked to a change request or system (CR-21479, APV LCS, AML model).\nMultiple authors visible: Juraj Munka, Roman Kocian, PABK\\szabo3, Roman Kazicka,\nbachan, PABK\\suchovska, PABK\\matejovic2.\nCommit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Recover QEA via LemonTree"
        }), " documents a real file recovery operation –\npossible only because of Git version history."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-this-matters-before-you-even-touch-git-the-qrm-angle",
      children: "Why this matters before you even touch Git: the QRM angle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reducing lead time is not just a Git problem – it is a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000108-QRM/",
        children: "K000108 (Quick Response Manufacturing)"
      }), " problem applied to modelling work. Every blocked analyst, every 15-second click, every \"wait for the lock to release\" is dead time in the model's critical path. Grasped in the right CAA context, Git workflow for EA is a lead-time reduction lever, not just a developer-tooling nicety."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-reference",
      children: "Real-world reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "365.bank"
      }), " (Slovakia) – running LemonTree + Git since ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2021"
      }), ". Full parallel modelling workflow, change-request-linked history, release comparisons."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versicherungskammer Bayern / VKB"
      }), " (Germany, ~7,500 employees) – introduced LemonTree for parallel development of complex insurance products in Enterprise Architect. Published by LieberLieber, May 2026."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "SmartGit – production Git history",
        src: (__webpack_require__(26232)/* ["default"] */ .A) + "",
        width: "1568",
        height: "723"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Figure 08:"
        }), " SmartGit – production Git history of Enterprise Architect model repository\nat 365.bank. Multiple authors working in parallel branches (R202604, RKA-20260402).\nEach commit message references a specific change request (CR-28401, CR-20574, APV Trask).\nChanged file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ADAM7-20260203.qea"
        }), " — the EA model binary tracked directly in Git.\nNotable: commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Recover QEA via LemonTree: replace corrupted LFS with merged good version"
        }), "\n— a real recovery operation enabled by Git history.\nThis is a live production environment, running since 2021."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both cases confirm: this is not an experiment. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "production-grade"
      }), " model version control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git changed how developers collaborate on code.\nLemonTree brings the same discipline to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "model-based engineering"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The combination of local files, async Git sync, 3-way diff, and structured merge review gives modelling teams what developers have had for decades:\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a complete, auditable, reversible history of their work."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In regulated industries – banking, insurance, energy – this is not a nice-to-have.\nIt is a foundation for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trustworthy, scalable SDLC"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reflection-questions",
      children: "Reflection Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "For students: write down your answer before reading further or discussing with others."
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "For practitioners: use these as a team discussion starter."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Your team uses EA with a shared SQL database."
          }), " You need to model two parallel scenarios for a change request – one conservative, one experimental. How would you handle this today? What are the risks?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "A senior analyst made a major structural change to the model three weeks ago."
          }), " Your project manager asks: \"Can you show me exactly what changed and why?\" How would you answer that question with your current tooling – and how long would it take you?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "You are about to introduce LemonTree in your organisation."
          }), " Who needs to be involved in defining the Git workflow? What resistance do you expect – and from whom?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The merge step requires a senior reviewer."
          }), " What would have to change for merge review to feel like a bottleneck instead of a quality gate on your team? How does your answer change depending on team size and project phase?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LemonTree eliminates latency by keeping the model local."
          }), " What other risks or constraints does a local file introduce in your organisation's security policy? How would you address them?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "\"Time travel\" in models means you can return to any past state."
          }), " Describe a real situation in your project where this capability would have saved time, money, or avoided a mistake."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-knife-articles",
      children: "Related KNIFE Articles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/K000108-QRM/",
          children: "K000108 – Quick Response Manufacturing (QRM)"
        }), " – lead-time reduction; the business case behind eliminating blocked/waiting time in modelling work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
          children: "K000104 – SPARX AI KERNARO in SDLC"
        }), " – KERNARO/GENIE AI layer that LemonTree's versioned model feeds into"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "list-of-figures",
      children: "List of Figures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Figure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Image"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solution Lifecycle Management – Git versioning in SDLC context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(3647)/* ["default"] */ .A) + "",
              children: "02-SDLC-GIT.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOW – The Git + LemonTree approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparx Systems AI ecosystem overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(59892)/* ["default"] */ .A) + "",
              children: "01-sparx-ecosystem.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOW – The Git + LemonTree approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Git branching model (Vincent Driessen FBV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(5167)/* ["default"] */ .A) + "",
              children: "03-GIT-std-workflow.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOW – The Git + LemonTree approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git Based Single Source of Truth – parallel modelling blueprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(16566)/* ["default"] */ .A) + "",
              children: "04-GIT-release-workflow.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOW – What makes LemonTree different"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LemonTree 3-way diff merge session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(60330)/* ["default"] */ .A) + "",
              children: "05-Lemontree.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOW – Recommended Git client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LemonTree Add-In in the EA ribbon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(55804)/* ["default"] */ .A) + "",
              children: "07-EA-LT-01.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHAT CAN YOU GAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LemonTree History panel inside EA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(28862)/* ["default"] */ .A) + "",
              children: "08-EA-LT-02.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure 08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHAT CAN YOU GAIN – Real-world reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SmartGit – production Git history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(86851)/* ["default"] */ .A) + "",
              children: "06-Smartgit.png"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Pending: a QRM/business framing image (see \"Why this matters before you even touch Git\" section) is not yet placed. Once added it will slot in as Figure 08 between the current Figure 07 and Figure 08, shifting SmartGit to Figure 09 — update this table when that happens."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] LieberLieber – VKB implements modern model versioning with LemonTree and Git (May 2026)\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.lieberlieber.com/en/lieberlieber-vkb-implements-modern-model-versioning-with-lemontree-and-git/",
        children: "https://www.lieberlieber.com/en/lieberlieber-vkb-implements-modern-model-versioning-with-lemontree-and-git/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] LieberLieber – Setting up a Git Repository for the LemonTree EA Addin\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://help.lieberlieber.com/LemonTree/Setting-up-a-Git-Repository-for-the-LemonTree-EA-Addin-Git-Features.html",
        children: "https://help.lieberlieber.com/LemonTree/Setting-up-a-Git-Repository-for-the-LemonTree-EA-Addin-Git-Features.html"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] Sparx Systems Community – Fresh News: Enterprise Architect and Git\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://community.sparxsystems.com/news/1048-fresh-news-enterprise-architect-and-git",
        children: "https://community.sparxsystems.com/news/1048-fresh-news-enterprise-architect-and-git"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[4] LieberLieber – LemonTree product page\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.lieberlieber.com/lemontree/en/product/",
        children: "https://www.lieberlieber.com/lemontree/en/product/"
      })]
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



/***/ }),

/***/ 83397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-GIT-release-workflow-43b49dafbf0a9c0a8384a448cce1d559.png");

/***/ }),

/***/ 84553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-sparx-ecosystem-92ff88a55fbd2fa9e0c74b2d868d3e3d.png");

/***/ }),

/***/ 86851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/06-Smartgit-e9bfb32520d6f178eade67f2e32c422d.png");

/***/ }),

/***/ 93700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-SDLC-GIT-fa9f686fe5413651a119cc7cd24ad355.png");

/***/ })

}]);