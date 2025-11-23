"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[5388],{

/***/ 7023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_docusaurus_md_b1d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-docusaurus-md-b1d.json
const site_docs_sk_help_docusaurus_md_b1d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/docusaurus","title":"Docusaurus – inštalácia a základné príkazy","description":"Táto stránka popisuje, ako rozbehať Docusaurus pre KNIFE / STHDF dokumentáciu.","source":"@site/docs/sk/help/docusaurus.md","sourceDirName":"sk/help","slug":"/sk/help/docusaurus","permalink":"/en/sk/help/docusaurus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Docusaurus – inštalácia a základné príkazy"},"sidebar":"tutorialSidebar","next":{"title":"🆘 HOWTO – Praktické návody (SK)","permalink":"/en/sk/help/howto/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/help/docusaurus.md


const frontMatter = {
	title: 'Docusaurus – inštalácia a základné príkazy'
};
const contentTitle = 'Docusaurus – inštalácia a základné príkazy';

const assets = {

};



const toc = [{
  "value": "Predpoklady",
  "id": "predpoklady",
  "level": 2
}, {
  "value": "Inštalácia závislostí",
  "id": "inštalácia-závislostí",
  "level": 2
}, {
  "value": "Najčastejšie príkazy",
  "id": "najčastejšie-príkazy",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "docusaurus--inštalácia-a-základné-príkazy",
        children: "Docusaurus – inštalácia a základné príkazy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Táto stránka popisuje, ako rozbehať Docusaurus pre KNIFE / STHDF dokumentáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "predpoklady",
      children: "Predpoklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["nainštalovaný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Git"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["nainštalovaný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Node.js"
        }), " (LTS verzia)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prístup k repozitáru (napr. cez GitHub)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inštalácia-závislostí",
      children: "Inštalácia závislostí"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V koreňovom priečinku Docusaurus projektu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd publishing/docusaurus\nnpm install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "najčastejšie-príkazy",
      children: "Najčastejšie príkazy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Lokálny dev server\nnpm run start\n\n# Production build\nnpm run build\n\n# Náhľad vybuildovanej verzie\nnpm run serve\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V KNIFE/CLASS templatoch môžeš mať aliasy cez ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make"
      }), ", napr.:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "make dev\nmake build\nmake serve\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pozri si konkrétny ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Makefile"
      }), " v danom projekte."]
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