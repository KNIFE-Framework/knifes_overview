"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[16793],{

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

/***/ 31431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_b_4_coffee_machine_spec_kernaro_chat_b_4_coffee_machine_spec_md_cb7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-04-kernaro-chat-b-4-coffee-machine-spec-kernaro-chat-b-4-coffee-machine-spec-md-cb7.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_b_4_coffee_machine_spec_kernaro_chat_b_4_coffee_machine_spec_md_cb7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4","title":"B4 – Coffee Machine Functional Specification","description":"Kernaro Chat – functional specification of a Coffee Machine system: Use Cases, Scenarios tab vs Operations finding, and prompt recommendations.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B4-coffee-machine-spec/kernaro-chat-B4-coffee-machine-spec.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B4-coffee-machine-spec","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-04-chat-b4","guid":"d6e1a5f4-7e2b-8c9d-0f1a-2b3c4d5e6f7a","dao":"knife","title":"B4 – Coffee Machine Functional Specification","description":"Kernaro Chat – functional specification of a Coffee Machine system: Use Cases, Scenarios tab vs Operations finding, and prompt recommendations.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-04 00:00","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"B3 – TOC Generation","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3"},"next":{"title":"B – Chat","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/B4-coffee-machine-spec/kernaro-chat-B4-coffee-machine-spec.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-04-chat-b4',
	guid: 'd6e1a5f4-7e2b-8c9d-0f1a-2b3c4d5e6f7a',
	dao: 'knife',
	title: 'B4 – Coffee Machine Functional Specification',
	description: 'Kernaro Chat – functional specification of a Coffee Machine system: Use Cases, Scenarios tab vs Operations finding, and prompt recommendations.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: '',
	priority: '',
	tags: [
		'SDLC',
		'AI',
		'KERNARO'
	],
	locale: 'en',
	created: '2026-05-04 00:00',
	modified: '2026-05-04 00:00',
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
const contentTitle = 'B4 – Coffee Machine Functional Specification';

const assets = {

};



const toc = [{
  "value": "B4 · Finding – Structured Scenarios not utilised (Operations used instead)",
  "id": "b4--finding--structured-scenarios-not-utilised-operations-used-instead",
  "level": 2
}, {
  "value": "Background",
  "id": "background",
  "level": 3
}, {
  "value": "What happened",
  "id": "what-happened",
  "level": 3
}, {
  "value": "Comparison",
  "id": "comparison",
  "level": 3
}, {
  "value": "Assessment",
  "id": "assessment",
  "level": 3
}, {
  "value": "Kernaro&#39;s self-advice",
  "id": "kernaros-self-advice",
  "level": 3
}, {
  "value": "Recommended prompt addition",
  "id": "recommended-prompt-addition",
  "level": 3
}, {
  "value": "Recommendation for Kernaro team",
  "id": "recommendation-for-kernaro-team",
  "level": 3
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "b4--coffee-machine-functional-specification",
        children: "B4 – Coffee Machine Functional Specification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This article is being actively worked on. Content may be incomplete or subject to change."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(65179)/* ["default"] */ .A) + "",
        children: "generated UC document in MS Word"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3",
        children: "B3 – TOC Generation"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C – Agents"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b4--finding--structured-scenarios-not-utilised-operations-used-instead",
      children: "B4 · Finding – Structured Scenarios not utilised (Operations used instead)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This finding is also referenced in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings",
        children: "E – Findings, section E3b"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "background",
      children: "Background"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EA supports two distinct native mechanisms for capturing Use Case steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structured Scenarios (Scenarios tab)"
      }), "\nAccessible via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UseCase → Scenarios tab"
      }), ". Columns: Step, Action, Uses, Results, State.\nThis is the full EA structured scenario – linked to test cases, traceable, exportable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations"
      }), "\nAccessible via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UseCase → Inspector → Operations"
      }), ".\nA formal list of operations with name and return type. Separate from Structured Scenario rows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-happened",
      children: "What happened"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kernaro populated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations"
      }), " on the UseCase elements – the Scenarios tab remained empty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Inspector → Operations: Kernaro populated 10 steps with state transitions (OFF → HEATING → READY → BREWING → DISPENSING)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison",
      children: "Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operations (what Kernaro used)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Structured Scenario (Scenarios tab)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspector → Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scenarios tab → Basic Path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step name + return state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step + Action + Uses + Results + State"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scenarios tab populated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Filled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reportable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test case traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "assessment",
      children: "Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro did not use a generic Class element – it correctly identified the UseCase element and used native Operations. This is meaningfully better than the initial test run. However, the Scenarios tab (full Structured Scenarios) remained empty, which limits downstream traceability to test cases."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root cause: prompt ambiguity."
      }), " Kernaro confirmed this when asked – it listed three EA mechanisms and noted that saying ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"use the Scenarios tab\""
      }), " or ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"add as operations\""
      }), " removes ambiguity. Without explicit instruction, it defaulted to Operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernaros-self-advice",
      children: "Kernaro's self-advice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "EA has 3 ways to capture UC steps:"
        }), "\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "– Operations — formal, reportable, visible in Scenarios tab"
        }), "\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "– Notes text — free-form"
        }), "\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "– Linked «scenario» element — what your «scenario» class already does"
        }), "\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "Saying \"use the Scenarios tab\" or \"add as operations\" removes ambiguity."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommended-prompt-addition",
      children: "Recommended prompt addition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For each Use Case, populate the Scenarios tab with a Basic Path \nusing EA Structured Scenario format: Step, Action, Uses, Results, State.\nDo NOT use Operations. Do NOT use Notes text.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-for-kernaro-team",
      children: "Recommendation for Kernaro team"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Default behaviour for Use Case modelling should prefer Structured Scenarios over Operations, especially when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/instructions"
      }), " indicate an SDLC-oriented repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3",
        children: "B3 – TOC Generation"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C – Agents"
      })]
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



/***/ }),

/***/ 65179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/UseCases_Report-f7e7fc4483dac3e9e8a7edccb57ffe1e.docx");

/***/ })

}]);