"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[39043],{

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

/***/ 67171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_python_execution_md_d10_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-05-kernaro-ai-agent-kernaro-python-execution-md-d10.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_python_execution_md_d10_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-python-execution","title":"C3 – Python Execution","description":"Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-python-execution.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-python-execution","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-python-execution","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-05-python-execution","guid":"b3f7a2d1-9c04-4e8b-a1f5-2d6e8c3b0f94","dao":"knife","title":"C3 – Python Execution","description":"Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-04 00:00","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"C – Agents","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents"},"next":{"title":"D – JavaScript in EA Script Manager","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-python-execution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-05-python-execution',
	guid: 'b3f7a2d1-9c04-4e8b-a1f5-2d6e8c3b0f94',
	dao: 'knife',
	title: 'C3 – Python Execution',
	description: 'Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects.',
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
const contentTitle = 'C3 – Python Execution';

const assets = {

};



const toc = [{
  "value": "Attempt 1 – Basic Python Role + Prompt",
  "id": "attempt-1--basic-python-role--prompt",
  "level": 2
}, {
  "value": "Attempt 2 – CRITICAL RULES (Force execute_python)",
  "id": "attempt-2--critical-rules-force-execute_python",
  "level": 2
}, {
  "value": "Attempt 3 – Agent 04 on EA_OnPostCloseDiagram",
  "id": "attempt-3--agent-04-on-ea_onpostclosediagram",
  "level": 2
}, {
  "value": "Test run 1 – Coffee Machine Activity diagram",
  "id": "test-run-1--coffee-machine-activity-diagram",
  "level": 3
}, {
  "value": "Test run 2 – Starter Use Case Model",
  "id": "test-run-2--starter-use-case-model",
  "level": 3
}, {
  "value": "Side Effect 1 – Event Collision on EA_OnPostCloseDiagram",
  "id": "side-effect-1--event-collision-on-ea_onpostclosediagram",
  "level": 2
}, {
  "value": "Side Effect 2 – Parallel Agent Execution (Observed Once)",
  "id": "side-effect-2--parallel-agent-execution-observed-once",
  "level": 2
}, {
  "value": "Observations",
  "id": "observations",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "c3--python-execution",
        children: "C3 – Python Execution"
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
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C1/C2 – Agents"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Session:"
      }), " 2026-04-30 · 12:23–14:39", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Detect elements with empty Notes on the current diagram — same as C1, but via Python execution instead of built-in EA tools.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Does Kernaro invoke ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute_python"
      }), ", or does it always fall back to built-in EA tools?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attempt-1--basic-python-role--prompt",
      children: "Attempt 1 – Basic Python Role + Prompt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are an Enterprise Architect modeling assistant with access to the EA repository via Python scripting.\nYour task is to analyze the currently open diagram and find all elements where the Notes field is empty or contains only whitespace.\nRules:\n- Work only with elements visible on the current diagram\n- Use EA Python API (ea_tools) available in Kernaro\n- Return results as a structured list: Element Name | Element Type | GUID\n- Do not modify any elements\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Kernaro called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Get Diagram By Guid"
      }), " (built-in EA tool) and analyzed data via LLM text — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute_python"
      }), " was never invoked."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " The output looked like a clean AI text report, not raw Python stdout. Built-in EA tools returned correct data; LLM composed the report."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attempt-2--critical-rules-force-execute_python",
      children: "Attempt 2 – CRITICAL RULES (Force execute_python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Role rewritten with explicit bans:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are an Enterprise Architect Python automation expert.\nCRITICAL RULES - NO EXCEPTIONS:\n- You MUST use execute_python tool to run actual Python code\n- You MUST NOT use Get Diagram, Get Element, or any other EA built-in tools\n- You MUST NOT analyze data from memory or previous context\n- If execute_python tool is not available, report error and stop\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Script template in prompt used ", (0,jsx_runtime.jsx)(_components.code, {
        children: "win32com.client.GetActiveObject(\"EA.App\")"
      }), " as the correct entry point for Python→EA COM automation on Windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python configuration:"
      }), " Python 3.12.10 ✅ installed and verified in Kernaro settings.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Agent still called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Get Diagram By Guid"
      }), ". CRITICAL RULES were ignored."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " LLM chose built-in EA tools even when the prompt explicitly prohibited them. When built-in tools are available and sufficient, the LLM prefers them regardless of prompt constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attempt-3--agent-04-on-ea_onpostclosediagram",
      children: "Attempt 3 – Agent 04 on EA_OnPostCloseDiagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agent: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "04-ElementsOnCurrentDiagramwithEmptyNotes"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Trigger: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EA_OnPostCloseDiagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-run-1--coffee-machine-activity-diagram",
      children: "Test run 1 – Coffee Machine Activity diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Coffee Machine - Activity"
      }), " (ID: 3)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total elements:"
      }), " 8", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty Notes:"
      }), " 0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✅ All elements documented. No action required."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Power On"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Heat Water"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Select Drink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Brew"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Dispense Coffee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Power Off"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "End"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Populated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-run-2--starter-use-case-model",
      children: "Test run 2 – Starter Use Case Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Starter Use Case Model"
      }), " (ID: 1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total elements:"
      }), " 8", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty Notes:"
      }), " 3"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Element ID"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Customer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Customer1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "405"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Customer2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "406"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Note: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Customer1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Customer2"
        }), " appear to be duplicate or test elements. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Coffee Machine"
        }), " (Boundary) had only a placeholder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Description of the System]"
        }), " — flagged in earlier runs as pseudo-empty."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Correct results on both diagrams. Still via built-in tools, not Python execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "side-effect-1--event-collision-on-ea_onpostclosediagram",
      children: "Side Effect 1 – Event Collision on EA_OnPostCloseDiagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each new agent in this session targeted the same trigger: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EA_OnPostCloseDiagram"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Kernaro does not allow multiple agents to share one event directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution applied:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority escalated incrementally → reached 4 (lowest available)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Previous agents set to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inactive"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " Priority + inactive flag is the workaround — not native multi-agent event support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "side-effect-2--parallel-agent-execution-observed-once",
      children: "Side Effect 2 – Parallel Agent Execution (Observed Once)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At one point during the session, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two agents ran simultaneously"
      }), " on the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EA_OnPostCloseDiagram"
      }), " trigger — with different execution durations visible in the Agent Executions log."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This occurred before the inactive flag was applied to the previous agent."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠ Input/output details were captured but not fully analyzed. The behavior suggests Kernaro may allow brief parallel execution during the transition period between agent configurations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observations",
      children: "Observations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Classification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Python 3.12 configured ✅, but ", (0,jsx_runtime.jsx)(_components.code, {
              children: "execute_python"
            }), " never invoked — LLM chose built-in EA tools in all 3 attempts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curiosity, not a bug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in EA tools returned correct results — the outcome was functionally equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prompt constraints (", (0,jsx_runtime.jsx)(_components.code, {
              children: "MUST NOT use..."
            }), ") did not override LLM tool preference when built-ins were available"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM behavior characteristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EA_OnPostCloseDiagram"
            }), " event = one active agent at a time"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brief parallel execution observed during agent transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unanalyzed — needs screenshot review"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C1/C2 – Agents"
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