"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[69440],{

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

/***/ 70470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_09_sparxsystems_ecosystem_sparxsystems_ecosystem_md_271_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-09-sparxsystems-ecosystem-sparxsystems-ecosystem-md-271.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_09_sparxsystems_ecosystem_sparxsystems_ecosystem_md_271_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Sparxsystems-Ecosystem/K000104-09-sparx-ecosystem","title":"F – Sparx AI Ecosystem","description":"Context for Kernaro\'s position within the broader Sparx Systems AI ecosystem, including EA Native AI Assist and third-party integrations.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/09-Sparxsystems-Ecosystem/sparxsystems-ecosystem.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/09-Sparxsystems-Ecosystem","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Sparxsystems-Ecosystem/K000104-09-sparx-ecosystem","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Sparxsystems-Ecosystem/K000104-09-sparx-ecosystem","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-09-sparx-ecosystem","guid":"be146d58-1899-4c58-8e6c-f9953f339129","dao":"knife","title":"F – Sparx AI Ecosystem","description":"Context for Kernaro\'s position within the broader Sparx Systems AI ecosystem, including EA Native AI Assist and third-party integrations.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-04-29 08:56","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Claude Console Dashboards","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/Claude-Console-Dashboards/K000104-08-claude-dashboards"},"next":{"title":"G – Conclusions & How This Was Made","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-TEST-Conclusion/K000104-10-conclusion"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/09-Sparxsystems-Ecosystem/sparxsystems-ecosystem.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-09-sparx-ecosystem',
	guid: 'be146d58-1899-4c58-8e6c-f9953f339129',
	dao: 'knife',
	title: 'F – Sparx AI Ecosystem',
	description: 'Context for Kernaro\'s position within the broader Sparx Systems AI ecosystem, including EA Native AI Assist and third-party integrations.',
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
const contentTitle = 'F – Sparx AI Ecosystem';

const assets = {

};



const toc = [{
  "value": "F1 · EA Native AI Assist (built-in from EA 17.0+)",
  "id": "f1--ea-native-ai-assist-built-in-from-ea-170",
  "level": 2
}, {
  "value": "F2 · Prolaborate and AI (Genie)",
  "id": "f2--prolaborate-and-ai-genie",
  "level": 2
}, {
  "value": "F3 · Sparx Systems Japan MCP Server",
  "id": "f3--sparx-systems-japan-mcp-server",
  "level": 2
}, {
  "value": "What it is",
  "id": "what-it-is",
  "level": 3
}, {
  "value": "Compatible clients",
  "id": "compatible-clients",
  "level": 3
}, {
  "value": "Architecture (STDIO transport)",
  "id": "architecture-stdio-transport",
  "level": 3
}, {
  "value": "Key features (as of April 2026)",
  "id": "key-features-as-of-april-2026",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Comparison with Kernaro",
  "id": "comparison-with-kernaro",
  "level": 3
}, {
  "value": "F4 · EVOLVIntel EA GraphLink",
  "id": "f4--evolvintel-ea-graphlink",
  "level": 2
}, {
  "value": "Natural escalation path for AI in EA",
  "id": "natural-escalation-path-for-ai-in-ea",
  "level": 2
}, {
  "value": "Product links",
  "id": "product-links",
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
        id: "f--sparx-ai-ecosystem",
        children: "F – Sparx AI Ecosystem"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This section was not part of the Beta test scope. It provides context for Kernaro's position within the broader Sparx Systems AI ecosystem."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "f1--ea-native-ai-assist-built-in-from-ea-170",
      children: "F1 · EA Native AI Assist (built-in from EA 17.0+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Available directly in EA ribbon: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Specialize → AI Assist"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Requires your own OpenAI or Google API key. No add-in needed. [1]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in EA feature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI (ChatGPT), Google (Gemini)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write to model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Read-only assist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agents / Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low – manual element selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐ Minimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Quick documentation assist, element descriptions, ad-hoc natural language queries on selected elements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitation:"
      }), " Does not know your custom MDG stereotypes or naming conventions. Each session starts from scratch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "f2--prolaborate-and-ai-genie",
      children: "F2 · Prolaborate and AI (Genie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prolaborate is the Sparx Systems web portal for stakeholder access to EA models. It includes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prolaborate Genie"
      }), " – an AI assistant built into the web interface. [2]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web portal add-on"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure OpenAI, Amazon SageMaker (Llama, Cohere, Claude via SageMaker)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stakeholders, non-modellers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write to model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited – via Prolaborate UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metamodel awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes – Genie can be trained on MDG and knowledge-base documents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Stakeholder-facing AI queries, architecture summaries for non-technical audiences."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not tested in this Beta evaluation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "f3--sparx-systems-japan-mcp-server",
      children: "F3 · Sparx Systems Japan MCP Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product:"
      }), " MCP Server for Enterprise Architect", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publisher:"
      }), " Sparx Systems Japan", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.sparxsystems.jp/en/MCP/",
        children: "https://www.sparxsystems.jp/en/MCP/"
      }), " [3]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Price:"
      }), " Free", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "License:"
      }), " Registration required, download via email link"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-it-is",
      children: "What it is"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An EA add-in (", (0,jsx_runtime.jsx)(_components.code, {
        children: "MCP_EA.dll"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MCP3.exe"
      }), ") that exposes the EA repository as an MCP (Model Context Protocol) server. Compatible MCP clients can then read and write EA model data using natural language via their LLM of choice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compatible-clients",
      children: "Compatible clients"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Claude Desktop [4]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gemini CLI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VS Code Copilot Chat"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-stdio-transport",
      children: "Architecture (STDIO transport)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[MCP Client – e.g. Claude Desktop]\n        ↓  STDIO pipe (local)\n[MCP3.exe + MCP_EA.dll]\n        ↓  EA COM API\n[Enterprise Architect + open model]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data flow to LLM: EA → MCP Server (local) → MCP Client → LLM API (external).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The MCP Server itself does not send data externally. The MCP Client does."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-features-as-of-april-2026",
      children: "Key features (as of April 2026)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read/write elements, connectors, diagrams, packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured Use Case scenario support (read-only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Import/export Linked Documents as RTF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL compatibility fixes for MariaDB and SQL Server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EA 16.0+ (64-bit build recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows only (EA is Windows COM-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".NET Desktop Runtime 9.0.5 or newer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-with-kernaro",
      children: "Comparison with Kernaro"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernaro [5]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JP MCP Server [3]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed SaaS + add-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local add-in + any MCP client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (Anthropic, Azure OAI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on MCP client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich (agents, Word export, Power BI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic (read/write model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial license"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EU data residency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on MCP client"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For PoC in corporate environment:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "JP MCP Server + Claude Desktop is recommended as a first step to understand the MCP pipeline at zero cost. For production, Kernaro configured with Azure OpenAI backend provides richer functionality with enterprise compliance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "f4--evolvintel-ea-graphlink",
      children: "F4 · EVOLVIntel EA GraphLink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product:"
      }), " EA GraphLink / EA Genie (third-party, not Sparx official)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publisher:"
      }), " EVOLVIntel, India", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.evolvintel.com",
        children: "https://www.evolvintel.com"
      }), " [6]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides AI-powered impact analysis, tool integrations (Jira, Confluence, DevOps), and diagram generation. Independent product building on the EA COM API."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not tested in this evaluation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "natural-escalation-path-for-ai-in-ea",
      children: "Natural escalation path for AI in EA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. EA Native AI Assist      → quick start, zero setup, read-only\n        ↓\n2. JP MCP Server            → free, understand the pipeline, read/write\n        ↓\n3. Kernaro (Anthropic API)  → rich agents, validation, document generation\n        ↓\n4. Kernaro (Azure OAI)      → enterprise compliance, EU data residency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "product-links",
      children: "Product links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] EA AI Assist – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://genie.sparxsystems.com/ai-assist-for-ea/",
        children: "https://genie.sparxsystems.com/ai-assist-for-ea/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[2] Prolaborate Genie – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://prolaborate.sparxsystems.com/genie-generativeai-assistant",
        children: "https://prolaborate.sparxsystems.com/genie-generativeai-assistant"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[3] Sparx Systems Japan MCP Server – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.sparxsystems.jp/en/MCP/",
        children: "https://www.sparxsystems.jp/en/MCP/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[4] Claude Desktop – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://claude.ai/download",
        children: "https://claude.ai/download"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[5] Kernaro AI for EA – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://kernaro.sparxsystems.com",
        children: "https://kernaro.sparxsystems.com"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[6] EVOLVIntel EA GraphLink – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.evolvintel.com",
        children: "https://www.evolvintel.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-TEST-Conclusion/K000104-10-conclusion",
        children: "G – Conclusions"
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