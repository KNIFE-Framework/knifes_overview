"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[19598],{

/***/ 4629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_06_kernaro_java_scripts_kernaro_javascripts_md_0d9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-06-kernaro-java-scripts-kernaro-javascripts-md-0d9.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_06_kernaro_java_scripts_kernaro_javascripts_md_0d9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts","title":"D – JavaScript in EA Script Manager","description":"Testing Kernaro\'s Script Agent for JavaScript code generation inside Enterprise Architect Script Manager — a practical scenario with empty Notes detection.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/06-KERNARO-JavaScripts/kernaro-javascripts.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/06-KERNARO-JavaScripts","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-JavaScripts/K000104-06-javascripts","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000104-06-javascripts","guid":"2a2acd98-8355-49ef-b491-01e6d9db3d11","dao":"knife","title":"D – JavaScript in EA Script Manager","description":"Testing Kernaro\'s Script Agent for JavaScript code generation inside Enterprise Architect Script Manager — a practical scenario with empty Notes detection.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-04-29 08:56","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"C – Agents","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents"},"next":{"title":"E – Findings & Recommendations","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/06-KERNARO-JavaScripts/kernaro-javascripts.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000104-06-javascripts',
	guid: '2a2acd98-8355-49ef-b491-01e6d9db3d11',
	dao: 'knife',
	title: 'D – JavaScript in EA Script Manager',
	description: 'Testing Kernaro\'s Script Agent for JavaScript code generation inside Enterprise Architect Script Manager — a practical scenario with empty Notes detection.',
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
const contentTitle = 'D – JavaScript in EA Script Manager';

const assets = {

};



const toc = [{
  "value": "D1 · What was tested",
  "id": "d1--what-was-tested",
  "level": 2
}, {
  "value": "D2 · Script generation via Chat",
  "id": "d2--script-generation-via-chat",
  "level": 2
}, {
  "value": "D3 · Enumerator hallucination",
  "id": "d3--enumerator-hallucination",
  "level": 2
}, {
  "value": "D4 · Debugging with Kernaro assistance",
  "id": "d4--debugging-with-kernaro-assistance",
  "level": 2
}, {
  "value": "D5 · Successful output",
  "id": "d5--successful-output",
  "level": 2
}, {
  "value": "D6 · Script Manager vs Kernaro Agent – clarification",
  "id": "d6--script-manager-vs-kernaro-agent--clarification",
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
        id: "d--javascript-in-ea-script-manager",
        children: "D – JavaScript in EA Script Manager"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " EA Script Manager supports JavaScript (not to be confused with Java). In this test, Kernaro's Script Agent generated JavaScript code – Python was not executed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d1--what-was-tested",
      children: "D1 · What was tested"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " List all elements in a given package that have an empty Notes field."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request sent to Kernaro Chat with GUID scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernaro Script Agent generated JavaScript code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code was manually copied to EA Script Manager and executed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Errors were identified and resolved with Kernaro's assistance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Execution was NOT tested."
      }), " Although Python 3.12 was configured and validated in Kernaro Settings, the Script Agent chose JavaScript for this use case. Python execution via Kernaro remains to be evaluated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d2--script-generation-via-chat",
      children: "D2 · Script generation via Chat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query sent to Kernaro:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GUID ={8208DC8D-B283-10B3-86D0-E8D891DD8861}. Using Python, \nlist all elements in the root package defined by GUID \nthat have empty Notes field. Show element name and type.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Kernaro generated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JavaScript"
      }), " (not Python as requested). The code was presented in chat with instructions to run it manually via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Specialize → Scripting"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding D2-1 – Language instruction not respected:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When explicitly asked for Python, the Script Agent generated JavaScript. This may be intentional (JavaScript is natively supported in EA) but conflicts with the explicit user instruction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d3--enumerator-hallucination",
      children: "D3 · Enumerator hallucination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kernaro generated code using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new Enumerator()"
      }), " – a syntax from Internet Explorer / WSH environments that is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not supported"
      }), " in EA's JavaScript engine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generated (broken):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var elementEnumerator = new Enumerator(thePackage.Elements); // ❌\nwhile (!elementEnumerator.atEnd()) {\n    var el = elementEnumerator.item();\n    // ...\n    elementEnumerator.moveNext();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EA error:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Enumerator is not defined"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernaro was informed via chat with the error message text. After correction request, the agent regenerated the same broken pattern. The fix was applied manually."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Correct EA JavaScript syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "for (var i = 0; i < thePackage.Elements.Count; i++) {\n    var el = thePackage.Elements.GetAt(i); // ✅\n}\n\nfor (var j = 0; j < thePackage.Packages.Count; j++) {\n    CollectEmptyNotes(thePackage.Packages.GetAt(j), results); // ✅\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding D3-1:"
      }), " Kernaro repeatedly regenerates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new Enumerator()"
      }), " even after explicit correction. This is a training data issue – EA JavaScript uses COM collections with ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".Count"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".GetAt()"
      }), ", not WSH Enumerator objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d4--debugging-with-kernaro-assistance",
      children: "D4 · Debugging with Kernaro assistance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Although Kernaro could not automatically execute the script or directly fix the error after seeing a screenshot (clipboard image was rejected – see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings",
        children: "E – Findings"
      }), ", the workflow was:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run script in EA → error appears in Debug output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy error text to Kernaro Chat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernaro provides corrected code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manually replace in Script Manager and re-run"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This iterative approach ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "worked"
      }), " and is a valid workflow for script development."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d5--successful-output",
      children: "D5 · Successful output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After applying the correct EA JavaScript syntax, the script produced the expected result:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Elements With Empty Notes\nRoot Package: Starter Use Case Model\n=====================================================\nElement Name                                  | Element Type\n----------------------------------------------|--------------\nCustomer                                      | Actor\nCustomer1                                     | Actor\nCustomer2                                     | Actor\n-----------------------------------------------------\nTotal elements with empty Notes: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d6--script-manager-vs-kernaro-agent--clarification",
      children: "D6 · Script Manager vs Kernaro Agent – clarification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "EA Script Manager"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernaro Agent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (user clicks Run)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (event trigger)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script Library in model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernaro internal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript / VBScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM-generated, runs via Kernaro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write to model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via EA API directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via approved Kernaro tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch, on-demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance, quality gates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Scripts saved to Script Library are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "independent"
      }), " from Kernaro Agents. They serve different purposes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Test-Findings/K000104-07-test-findings",
        children: "E – Findings"
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


/***/ })

}]);