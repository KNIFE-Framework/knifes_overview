"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[27201],{

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

/***/ 73050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_kernaro_chat_md_95b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000104-sparx-ai-kernaro-in-sdlc-04-kernaro-chat-kernaro-chat-md-95b.json
const site_docs_en_knifes_k_000104_sparx_ai_kernaro_in_sdlc_04_kernaro_chat_kernaro_chat_md_95b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat","title":"B – Chat","description":"Kernaro Chat overview – natural language queries against the EA model: model exploration, document generation, TOC, and functional specification.","source":"@site/docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/kernaro-chat.md","sourceDirName":"en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat","slug":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/K000104-04-chat","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"KERNARO","permalink":"/doc-tags/kernaro"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-05-04T00:00:00.000000+00:00","fm_version_comment":"","id":"K000104-04-chat","guid":"1248460f-b911-4fa9-bbc7-4c6bb9269b60","dao":"knife","title":"B – Chat","description":"Kernaro Chat overview – natural language queries against the EA model: model exploration, document generation, TOC, and functional specification.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"","priority":"","tags":["SDLC","AI","KERNARO"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-05-04 00:00","status":"inProgress","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"B4 – Coffee Machine Functional Specification","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4"},"next":{"title":"C – Agents","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-AI_Agent/K000104-05-ai-agents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/04-KERNARO-Chat/kernaro-chat.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-05-04T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000104-04-chat',
	guid: '1248460f-b911-4fa9-bbc7-4c6bb9269b60',
	dao: 'knife',
	title: 'B – Chat',
	description: 'Kernaro Chat overview – natural language queries against the EA model: model exploration, document generation, TOC, and functional specification.',
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
const contentTitle = 'B – Chat';

const assets = {

};



const toc = [{
  "value": "B5 · Chat limitations observed",
  "id": "b5--chat-limitations-observed",
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
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
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
        id: "b--chat",
        children: "B – Chat"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Natural language queries against the open EA model via Kernaro Chat — model exploration, document generation, and context-aware responses."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B1-model-statistics/K000104-04-chat-b1",
              children: "B1 – Model Statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model exploration, token cost for 800 MB repository"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B2-document-generation/K000104-04-chat-b2",
              children: "B2 – Document Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word document generation, context injection, stop generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B3-toc-generation/K000104-04-chat-b3",
              children: "B3 – TOC Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOC from model up to L2 level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/KERNARO-Chat/B4-coffee-machine-spec/K000104-04-chat-b4",
              children: "B4 – Coffee Machine Spec"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional specification of Coffee Machine system"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b5--chat-limitations-observed",
      children: "B5 · Chat limitations observed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Screenshot paste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clipboard image paste returns Error 400 (empty base64). Workaround: describe the error in text."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Script execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat can generate JavaScript code but cannot run it in EA Script Manager automatically. Manual copy-paste required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After image error, session became unreliable. Full session reset resolved it."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "product-links",
      children: "Product links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] MariaDB – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://mariadb.org",
        children: "https://mariadb.org"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "[2] Anthropic Console – ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.anthropic.com",
        children: "https://console.anthropic.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["← ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "Back to index"
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



/***/ })

}]);