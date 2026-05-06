"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[92928],{

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

/***/ 73485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-APV-Check-69672442df1d411f5592dd1f0b4f8ec5.png");

/***/ }),

/***/ 91577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_agent_c_2_apv_check_kernaro_agent_c_2_apv_check_md_8e8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-05-kernaro-ai-agent-kernaro-agent-c-2-apv-check-kernaro-agent-c-2-apv-check-md-8e8.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_05_kernaro_ai_agent_kernaro_agent_c_2_apv_check_kernaro_agent_c_2_apv_check_md_8e8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c2-apv-check/K000104-05-agent-c2","title":"C2 – APV Integrity Check","description":"Kernaro AI Agent: validate REF linkage in Instance diagrams using APV metamodel integrity rules (MASTER → REF → Instance).","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-agent-c2-apv-check/kernaro-agent-c2-apv-check.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-agent-c2-apv-check","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c2-apv-check/","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c2-apv-check/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-06T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-05-agent-c2","guid":"f8a3c4b5-9e6d-0f1a-2b3c-4d5e6f7a8b9c","dao":"knife","title":"C2 – APV Integrity Check","description":"Kernaro AI Agent: validate REF linkage in Instance diagrams using APV metamodel integrity rules (MASTER → REF → Instance).","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-05-06 00:00","modified":"2026-05-06 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"C1 – Missing Notes Agent","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c1-missing-notes/"},"next":{"title":"C3 – Python Execution","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-c3-python-execution/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/05-KERNARO-AI_Agent/kernaro-agent-c2-apv-check/kernaro-agent-c2-apv-check.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-06T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-05-agent-c2',
	guid: 'f8a3c4b5-9e6d-0f1a-2b3c-4d5e6f7a8b9c',
	dao: 'knife',
	title: 'C2 – APV Integrity Check',
	description: 'Kernaro AI Agent: validate REF linkage in Instance diagrams using APV metamodel integrity rules (MASTER → REF → Instance).',
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
	created: '2026-05-06 00:00',
	modified: '2026-05-06 00:00',
	status: 'published',
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
const contentTitle = 'C2 – APV Integrity Check';

const assets = {

};



const toc = [{
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
}, {
  "value": "Images",
  "id": "images",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
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
        id: "c2--apv-integrity-check",
        children: "C2 – APV Integrity Check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C – Agents"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c1-missing-notes/",
        children: "C1 – Missing Notes"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-c3-python-execution/",
        children: "C3 – Python Execution"
      })]
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
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents",
        children: "C – Agents"
      }), " | ← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-agent-c1-missing-notes/",
        children: "C1 – Missing Notes"
      }), " | → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/kernaro-c3-python-execution/",
        children: "C3 – Python Execution"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "img-01"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[IMG-01]"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(73485)/* ["default"] */ .A),
        alt: "img/01-APV-Check.png",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
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