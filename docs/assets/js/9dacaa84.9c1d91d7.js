"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[1022],{

/***/ 6358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_and_gtm_ga_4_account_vs_property_md_9da_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000064-ga-4-gtn-utm-ga-4-and-gtm-ga-4-account-vs-property-md-9da.json
const site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_and_gtm_ga_4_account_vs_property_md_9da_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-06","title":"Google Analytics: Account vs Property vs Stream","description":"-","source":"@site/docs/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/GA4_Account_vs_Property.md","sourceDirName":"sk/knifes/K000064-ga4-gtn-utm/GA4andGTM","slug":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-06","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-06","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000064-ga4-gtn-utm-06","guid":"9c977a4c-1cdb-4106-8b0d-6c3ebb7e4331","dao":"knife","title":"Google Analytics: Account vs Property vs Stream","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"docs","previous":{"title":"GA4 Account Setup Checklist","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-05"},"next":{"title":"Getting Started with GA4 & UTM","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-08"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/GA4_Account_vs_Property.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000064-ga4-gtn-utm-06',
	guid: '9c977a4c-1cdb-4106-8b0d-6c3ebb7e4331',
	dao: 'knife',
	title: 'Google Analytics: Account vs Property vs Stream',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '-',
	type: '-',
	priority: 'no',
	tags: [
		'KNIFE'
	],
	locale: 'sk',
	created: '2025-09-24',
	modified: '-',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '-',
	author_did: '-',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Google Analytics: Account vs Property vs Stream';

const assets = {

};



const toc = [{
  "value": "🗂️ Hierarchia v GA4",
  "id": "️-hierarchia-v-ga4",
  "level": 2
}, {
  "value": "🔑 Kedy použiť <strong>nový Account</strong>",
  "id": "-kedy-použiť-nový-account",
  "level": 2
}, {
  "value": "🔑 Kedy použiť <strong>novú Property</strong> (v rámci jedného Accountu)",
  "id": "-kedy-použiť-novú-property-v-rámci-jedného-accountu",
  "level": 2
}, {
  "value": "🔑 Kedy použiť <strong>nový Data Stream</strong>",
  "id": "-kedy-použiť-nový-data-stream",
  "level": 2
}, {
  "value": "🎯 Jednoduché pravidlo",
  "id": "-jednoduché-pravidlo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "google-analytics-account-vs-property-vs-stream",
        children: "Google Analytics: Account vs Property vs Stream"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "9c977a4c-1cdb-4106-8b0d-6c3ebb7e4331"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inprogress"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " Roman Kazička", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-08-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Rozhodovanie kedy založiť nový GA Account vs Property"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-hierarchia-v-ga4",
      children: "🗂️ Hierarchia v GA4"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "Google Account (login) = identita\n   │\n   └── Google Analytics Account (organizačný rámec)\n        │\n        ├── Property 1 (napr. systemthinking.sk)\n        │     ├── Data Stream: Web\n        │     ├── Data Stream: iOS App\n        │     └── Data Stream: Android App\n        │\n        ├── Property 2 (napr. blog.systemthinking.sk)\n        │     └── Data Stream: Web\n        │\n        └── Property 3 (napr. interný projekt)\n              └── Data Stream: Web\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-kedy-použiť-nový-account",
      children: ["🔑 Kedy použiť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nový Account"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iný majiteľ alebo firma"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Napr. SystemThinking.sk a CurioBits.dev by mali mať oddelené účty."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rôzni klienti"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Každý klient má vlastný Account, aby si nemiešal dáta."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Právne/účtovné oddelenie"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Iné GDPR povinnosti, iné krajiny, iná fakturácia (Google Ads)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Potrebné úplné oddelenie prístupov"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Účet má vlastných adminov, ktorí nemusia mať prístup do iných účtov."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-kedy-použiť-novú-property-v-rámci-jedného-accountu",
      children: ["🔑 Kedy použiť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "novú Property"
      }), " (v rámci jedného Accountu)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Viacero webov/appiek v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tej istej firme"
        }), ".", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "systemthinking.sk"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blog.systemthinking.sk"
            }), ", mobilná appka."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spravuje ich ten istý tím a patria tej istej organizácii."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potrebuješ mať spoločné prístupy, ale oddelené merania."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-kedy-použiť-nový-data-stream",
      children: ["🔑 Kedy použiť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nový Data Stream"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Iný kanál v rámci jednej Property.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Napr. Web + iOS + Android pre jednu aplikáciu."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetky streamy zdieľajú spoločný reporting, ale identifikujú sa samostatným Measurement ID."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-jednoduché-pravidlo",
      children: "🎯 Jednoduché pravidlo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nový Account"
        }), " → keď je iný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "majiteľ / firma"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nová Property"
        }), " → keď je iný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "projekt v rámci tej istej firmy"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nový Data Stream"
        }), " → keď je iný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kanál toho istého projektu"
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



/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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