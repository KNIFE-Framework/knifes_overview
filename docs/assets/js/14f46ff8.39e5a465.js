"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[51384],{

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

/***/ 58580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_ai_agents_md_14f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-05-kernaro-ai-agent-kernaro-ai-agents-md-14f.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_ai_agents_md_14f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents","title":"C – Agents","description":"Event-driven AI agents in Kernaro: detecting missing documentation, applying QA tags, and bulk operations triggered from EA diagram events.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-AI-agents.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-05-ai-agents","guid":"0a6e6e7f-cc02-45ae-ad5a-f6e0c6e731fe","dao":"knife","title":"C – Agents","description":"Event-driven AI agents in Kernaro: detecting missing documentation, applying QA tags, and bulk operations triggered from EA diagram events.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-04-29 08:56","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"B – Chat","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat"},"next":{"title":"C3 – Python Execution","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-python-execution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-AI-agents.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-05-ai-agents',
	guid: '0a6e6e7f-cc02-45ae-ad5a-f6e0c6e731fe',
	dao: 'knife',
	title: 'C – Agents',
	description: 'Event-driven AI agents in Kernaro: detecting missing documentation, applying QA tags, and bulk operations triggered from EA diagram events.',
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
const contentTitle = 'C – Agents';

const assets = {

};



const toc = [{
  "value": "C1 · Agent: Missing Notes in element",
  "id": "c1--agent-missing-notes-in-element",
  "level": 2
}, {
  "value": "Finding C1-1 – Trigger requires EA restart",
  "id": "finding-c1-1--trigger-requires-ea-restart",
  "level": 3
}, {
  "value": "Finding C1-2 – Agent hallucinated write action",
  "id": "finding-c1-2--agent-hallucinated-write-action",
  "level": 3
}, {
  "value": "Final agent prompt (production-ready)",
  "id": "final-agent-prompt-production-ready",
  "level": 3
}, {
  "value": "C2 · Agent: APV Methodology Integrity Check (UC-01)",
  "id": "c2--agent-apv-methodology-integrity-check-uc-01",
  "level": 2
}, {
  "value": "APV Metamodel",
  "id": "apv-metamodel",
  "level": 3
}, {
  "value": "Validation rules",
  "id": "validation-rules",
  "level": 3
}, {
  "value": "Agent prompt (production-ready)",
  "id": "agent-prompt-production-ready",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "c--agents",
        children: "C – Agents"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Agent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#c1--agent-missing-notes-in-element",
              children: "C1 – Missing Notes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect empty Notes, apply QA tags via EA_OnPostCloseDiagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#c2--agent-apv-methodology-integrity-check-uc-01",
              children: "C2 – APV Integrity Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate REF linkage in Instance diagrams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-python-execution",
              children: "C3 – Python Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs. built-in tools — 3 attempts, 2 side effects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c1--agent-missing-notes-in-element",
      children: "C1 · Agent: Missing Notes in element"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Enforce documentation completeness – detect elements with empty Notes field, apply QA tagged values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trigger: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EA_OnPostCloseDiagram"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tools enabled: read-only set + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "add_tagged_value"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bulk_add_tagged_values"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approval: ON"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ✅ Trigger fired correctly on diagram close. Approval dialog appeared with full detail."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent:        01-Missing Note in element\nTriggered By: EA_OnPostCloseDiagram\nAction:       Modify\nTarget:       QA_Status\nTool:         add_tagged_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-c1-1--trigger-requires-ea-restart",
      children: "Finding C1-1 – Trigger requires EA restart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After defining a trigger, the change took effect only after restarting the EA client."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System log before restart:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Refreshed event mappings: 0 active mappings loaded.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System log after restart:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Refreshed event mappings: 1 active mappings loaded.\nAgent Execution Manager initialized. Loaded 1 active mappings.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation for Kernaro team:"
      }), " Trigger changes should activate without full EA restart."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-c1-2--agent-hallucinated-write-action",
      children: "Finding C1-2 – Agent hallucinated write action"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without explicit output constraints in the prompt, the agent reported:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Action: Added QA_Status=\"Missing Note\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["...even when the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add_tagged_value"
      }), " tool was not available in the toolset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After adding a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CRITICAL OUTPUT RULE"
      }), " to the prompt, the agent correctly reported:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Action: SKIPPED – no write/create tagged value tool available\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " The prompt author is responsible for the majority of agent errors.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "LLM has infinite imagination – the prompt must constrain the output format explicitly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrective prompt addition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CRITICAL OUTPUT RULE:\nNever report an action as completed if the tool was not available.\nUse only: Action: WRITTEN | SKIPPED | FAILED | NO TOOL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "final-agent-prompt-production-ready",
      children: "Final agent prompt (production-ready)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are a model quality assurance agent for a Sparx Systems EA repository.\n\nRole: Enforce documentation completeness by detecting elements \nwith missing or empty Notes fields.\n\nStarting instruction:\n1. Call get_opened_diagram to identify the active diagram.\n2. Use get_diagram_by_id to retrieve diagram details.\n3. For each element, call get_element_by_id and get_element_tagged_values.\n4. Only then proceed with validation.\nNever rely on a GUID passed in the trigger context.\n\nValidation logic:\n- Strip whitespace from Notes. If empty → Notes: MISSING\n- If MISSING: attempt add_tagged_value QA_Status=\"Missing Note\"\n             attempt add_tagged_value QA_Date=YYYY-MM-DD HH:MM:SS\n- Never overwrite existing QA_Status or QA_Date tags.\n\nCRITICAL OUTPUT RULE:\nNever report an action as completed if the tool was unavailable.\nUse only: Action: WRITTEN | SKIPPED | FAILED | NO TOOL\n\nOutput format (plain text, copy-paste ready):\nQA Validation – [Diagram Name] – [YYYY-MM-DD HH:MM:SS]\n=======================================================\n| # | Element Name | Type | GUID | Notes | Action |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c2--agent-apv-methodology-integrity-check-uc-01",
      children: "C2 · Agent: APV Methodology Integrity Check (UC-01)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apv-metamodel",
      children: "APV Metamodel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "«MASTER» (Class)      ← most abstract concept\n      ↓ Specialization\n«REF»    (Class)      ← specialised concept (from MASTER)\n      ↓ Realization\n:Instance (Object)    ← concrete deployed instance (CMDB-like)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All stereotypes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "«MASTER»"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "«REF»"
      }), ") are custom MDG stereotypes, not standard UML.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Instances are EA Objects with Classifier pointing to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "«REF»"
      }), " Class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-rules",
      children: "Validation rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Realization connector present from Object to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "«REF»"
            }), " Class"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WARN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classifier set correctly, but Realization connector missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAIL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Classifier set, no Realization connector"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-prompt-production-ready",
      children: "Agent prompt (production-ready)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are an APV methodology integrity agent for a Sparx Systems EA repository.\n\n## APV Metamodel\nLevel 1 – MASTER: Class with stereotype «MASTER» (most abstract)\nLevel 2 – REF:    Class with stereotype «REF» (Specialization of MASTER)\nLevel 3 – Instance: Object typed by a «REF» Class (Realization connector)\n\n## Role\nValidate every Object on an Instance diagram for correct REF linkage.\nDo NOT validate REF-to-MASTER relationships.\n\n## Starting instruction\n1. Call get_opened_diagram\n2. Call get_diagram_by_id\n3. Call get_diagram_connectors\n4. For each element call get_element_by_id\n5. Only then validate\n\n## Validation\nFor each Object:\nStep 1 – Classifier: must point to a «REF» Class → else FAIL\nStep 2 – Explicit: Realization connector to that «REF» Class → EXPLICIT_OK / MISSING\nStep 3 – Status: PASS / WARN / FAIL\n\n## Output (plain text, pipe-separated)\nAPV Integrity Check – [Diagram Name] – [YYYY-MM-DD HH:MM:SS]\nDiagram: [Name] | Package: [Path]\n\n| # | Instance | Expected REF | Explicit | Implicit | Status |\n\nSummary: PASS / WARN / FAIL counts + recommended actions.\n\n## Constraints\nDo NOT modify any element, connector, tag or note.\nOnly analyze and report.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts",
        children: "D – JavaScript"
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