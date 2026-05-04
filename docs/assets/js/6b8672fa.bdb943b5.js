"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[58841],{

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

/***/ 39580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_07_kernaro_test_findings_kernaro_test_findings_md_6b8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-07-kernaro-test-findings-kernaro-test-findings-md-6b8.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_07_kernaro_test_findings_kernaro_test_findings_md_6b8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings","title":"E – Findings & Recommendations","description":"Key findings from the Kernaro Beta test: hallucination patterns, read-only tool constraints, and practical recommendations for production use.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/07-KERNARO-Test-Findings/kernaro-test-findings.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/07-KERNARO-Test-Findings","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-07-test-findings","guid":"7fa50667-6988-469e-a1cb-397c8c8fe126","dao":"knife","title":"E – Findings & Recommendations","description":"Key findings from the Kernaro Beta test: hallucination patterns, read-only tool constraints, and practical recommendations for production use.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-04-29 08:56","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"D – JavaScript in EA Script Manager","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts"},"next":{"title":"Claude Console Dashboards","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Claude-Console-Dashboards/K000104-08-claude-dashboards"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/07-KERNARO-Test-Findings/kernaro-test-findings.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-07-test-findings',
	guid: '7fa50667-6988-469e-a1cb-397c8c8fe126',
	dao: 'knife',
	title: 'E – Findings & Recommendations',
	description: 'Key findings from the Kernaro Beta test: hallucination patterns, read-only tool constraints, and practical recommendations for production use.',
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
	created: '2026-04-29 08:56',
	modified: '2026-04-29 08:56',
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
const contentTitle = 'E – Findings & Recommendations';

const assets = {

};



const toc = [{
  "value": "E1 · R/O Tools → Hallucination → Fix",
  "id": "e1--ro-tools--hallucination--fix",
  "level": 2
}, {
  "value": "Stage 1 – Read-only tools, no output constraints",
  "id": "stage-1--read-only-tools-no-output-constraints",
  "level": 3
}, {
  "value": "Stage 2 – Root cause",
  "id": "stage-2--root-cause",
  "level": 3
}, {
  "value": "Stage 3 – Fix: CRITICAL OUTPUT RULE",
  "id": "stage-3--fix-critical-output-rule",
  "level": 3
}, {
  "value": "Stage 4 – Write tools enabled + approval",
  "id": "stage-4--write-tools-enabled--approval",
  "level": 3
}, {
  "value": "Summary: Prompt discipline improves AI accuracy",
  "id": "summary-prompt-discipline-improves-ai-accuracy",
  "level": 3
}, {
  "value": "E2 · Issues Summary",
  "id": "e2--issues-summary",
  "level": 2
}, {
  "value": "E3 · What Worked Well ✅",
  "id": "e3--what-worked-well-",
  "level": 2
}, {
  "value": "E3b · Finding – Structured Scenarios not utilised",
  "id": "e3b--finding--structured-scenarios-not-utilised",
  "level": 2
}, {
  "value": "E3c · Finding – Plan before execute (governance mechanism)",
  "id": "e3c--finding--plan-before-execute-governance-mechanism",
  "level": 2
}, {
  "value": "E3d · Finding – Agent can advise on better instructions",
  "id": "e3d--finding--agent-can-advise-on-better-instructions",
  "level": 2
}, {
  "value": "E4 · Recommendations for Kernaro Team",
  "id": "e4--recommendations-for-kernaro-team",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "e--findings--recommendations",
        children: "E – Findings & Recommendations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "In Progress",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This article is being actively worked on. Content may be incomplete or subject to change."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e1--ro-tools--hallucination--fix",
      children: "E1 · R/O Tools → Hallucination → Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This sequence was one of the most instructive findings of the entire test."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage-1--read-only-tools-no-output-constraints",
      children: "Stage 1 – Read-only tools, no output constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Initial agent configuration: only read-only tools enabled (", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_element_by_id"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_element_tagged_values"
      }), ", etc.).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "No write tools. No explicit output rule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Customer | Actor | {E54AAB3E...} | Notes: MISSING | Action: Added QA_Status=\"Missing Note\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The agent ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reported a successful write"
      }), " that never happened. It had no write tool, yet produced output claiming tags were applied. This is a classic LLM hallucination – the model completed the expected narrative rather than reporting the actual result."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage-2--root-cause",
      children: "Stage 2 – Root cause"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM fills gaps in instructions with the most probable continuation. Without an explicit constraint defining what to do on failure, the model invents success."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"What should the agent report when a required tool is unavailable?\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without answering this in the prompt, the LLM answers it itself – incorrectly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage-3--fix-critical-output-rule",
      children: "Stage 3 – Fix: CRITICAL OUTPUT RULE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding this to the agent prompt resolved the issue completely:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CRITICAL OUTPUT RULE:\nNever report an action as completed if the corresponding tool \nwas not available or returned an error.\n\nUse only these exact status values:\n- Action: None         → Notes present, no action needed\n- Action: WRITTEN      → add_tagged_value confirmed success\n- Action: SKIPPED      → QA tags already exist on element\n- Action: FAILED       → tool called but returned error\n- Action: NO TOOL      → write tool not available\n\nNever use \"Added\", \"Applied\", or \"Created\" unless the tool \ncall explicitly confirmed success.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent output after fix:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Customer | Actor | {E54AAB3E...} | Notes: MISSING | Action: SKIPPED — no write tool available\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage-4--write-tools-enabled--approval",
      children: "Stage 4 – Write tools enabled + approval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After enabling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add_tagged_value"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_element"
      }), " in Tools & Config (not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bulk_add_tagged_values"
      }), "), with Approval: ON:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent Approval Required\nAction:  Modify\nTarget:  QA_Status  \nTool:    add_tagged_value\n[Approve] [Reject]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After approval, tags were written correctly to the element."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary-prompt-discipline-improves-ai-accuracy",
      children: "Summary: Prompt discipline improves AI accuracy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R/O tools only, no output rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucinated write confirmation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R/O tools + CRITICAL OUTPUT RULE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctly reported SKIPPED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write tools + CRITICAL OUTPUT RULE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctly reported WRITTEN after approval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The prompt author is responsible for the majority of agent errors."
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Precise definitions and explicit constraints for failure cases dramatically improve output reliability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e2--issues-summary",
      children: "E2 · Issues Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C1-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent / Trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trigger changes require EA restart to activate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C1-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent / Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without output constraints, agent hallucinated write confirmation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D2-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python instruction produced JavaScript instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D3-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "new Enumerator()"
            }), " hallucination – incompatible EA syntax, persists after correction"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D1-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated script not auto-executed in EA Script Manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B3-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Screenshot paste via clipboard returns Error 400 (empty base64 image)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B3-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session state corruption after image error – requires full session reset"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e3--what-worked-well-",
      children: "E3 · What Worked Well ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EA_OnPostCloseDiagram"
        }), " trigger fires reliably after EA restart"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approval workflow for write operations is clear and safe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent correctly identifies elements with missing Notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GUID-scoped queries reduce token cost dramatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.12 path validation in Settings works correctly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/instructions"
        }), " command generates repository-aware system context"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterative debugging via chat (paste error text → get corrected code) works reliably"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token cost and usage fully visible in Anthropic Console dashboard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e3b--finding--structured-scenarios-not-utilised",
      children: "E3b · Finding – Structured Scenarios not utilised"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full description in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat",
        children: "B – Chat, section B4"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Kernaro used Operations on UseCase elements (Scenarios tab remained empty). Output was usable for stakeholder communication but full traceability to test cases requires Structured Scenarios. Root cause: prompt ambiguity. Fix: explicit instruction ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"populate Scenarios tab, use EA Structured Scenario format\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e3c--finding--plan-before-execute-governance-mechanism",
      children: "E3c · Finding – Plan before execute (governance mechanism)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro presents a complete plan before taking any action and waits for human approval. Each step of the plan can be confirmed or rejected individually."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a critical governance and safety mechanism when working with a production model. The user retains full control over what is written to the repository."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical value:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catch misunderstood instructions before any model change occurs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approve only the steps that make sense, reject the rest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full audit trail of what was planned vs what was approved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Keep ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Require approval for write operations"
      }), " ON at all times for production repositories. Disable only for controlled bulk operations on test models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e3d--finding--agent-can-advise-on-better-instructions",
      children: "E3d · Finding – Agent can advise on better instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When asked, Kernaro explained the three native EA mechanisms for Use Case steps and recommended how to write more precise instructions. This is meta-communication – the agent understands its own limitations and can guide the user toward better prompts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This capability significantly reduces the trial-and-error cycle during initial setup and onboarding."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Rather than discovering through failed runs that Operations ≠ Structured Scenarios, the agent can explain the difference and suggest the correct instruction format upfront."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e4--recommendations-for-kernaro-team",
      children: "E4 · Recommendations for Kernaro Team"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new Enumerator()"
            }), " hallucination"]
          }), " – add EA JavaScript training examples using ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".Count"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".GetAt(i)"
          }), " pattern. This is the most frequently hit issue for EA Script Manager users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Honor language instruction"
          }), " – when user specifies Python, execute via Python Execution, not JavaScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto-execute generated scripts"
          }), " – or provide a one-click \"Run in EA\" button in chat."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger hot-reload"
          }), " – agent trigger changes should activate without EA client restart."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix clipboard image handling"
          }), " – clipboard screenshots return ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Error 400: image cannot be empty"
          }), ". Describe error is valid, image is not empty on user side."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Session recovery"
          }), " – isolate image errors from corrupting conversation state."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add default CRITICAL OUTPUT RULE to agent templates"
          }), " – default agent instructions should include explicit status vocabulary to prevent write hallucinations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve GUID-scoped query routing"
          }), " – provide a UI mechanism to set context scope (package GUID) before running agent, to reduce token cost for large repositories."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add EA Structured Scenario awareness"
          }), " – when modelling Use Cases, prefer native UseCase + Structured Scenario elements over generic Class elements, especially in SDLC-oriented repositories."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Claude-Console-Dashboards/K000104-08-claude-dashboards",
        children: "Claude Console Dashboards"
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



/***/ })

}]);