"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[6218],{

/***/ 2775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_index_md_6e4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-index-md-6e4.json
const site_docs_sk_help_index_md_6e4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/index","title":"Help – Ako používať túto dokumentáciu","description":"V tejto sekcii nájdeš praktické návody, ktoré sú súčasťou platformy – nie jednej konkrétnej triedy alebo inštancie.","source":"@site/docs/sk/help/index.md","sourceDirName":"sk/help","slug":"/sk/help/","permalink":"/sk/help/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Help – Ako používať túto dokumentáciu"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/help/index.md


const frontMatter = {
	title: 'Help – Ako používať túto dokumentáciu'
};
const contentTitle = 'Help';

const assets = {

};



const toc = [{
  "value": "Čo tu nájdeš",
  "id": "čo-tu-nájdeš",
  "level": 2
}, {
  "value": "Prečo je to oddelené od konkrétnych tried",
  "id": "prečo-je-to-oddelené-od-konkrétnych-tried",
  "level": 2
}, {
  "value": "Kde začať",
  "id": "kde-začať",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "help",
        children: "Help"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V tejto sekcii nájdeš ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "praktické návody"
      }), ", ktoré sú súčasťou platformy – nie jednej konkrétnej triedy alebo inštancie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "čo-tu-nájdeš",
      children: "Čo tu nájdeš"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/docusaurus",
          children: "Inštalácia a základné príkazy Docusaurusu"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./os-install/",
          children: "Inštalácia nástrojov podľa operačného systému"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-knife",
          children: "Ako vytvoriť nový KNIFE príspevok"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-sthdf",
          children: "Ako vytvoriť novú STHDF inštanciu kurzu"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prečo-je-to-oddelené-od-konkrétnych-tried",
      children: "Prečo je to oddelené od konkrétnych tried"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tieto návody sú navrhnuté ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stála súčasť aplikácie"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "platia pre viaceré ročníky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "môžeš ich zdieľať medzi repozitármi (class template, demo projekty),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimalizujú duplikáciu – meníš ich na jednom mieste, využívaš na viacerých."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kde-začať",
      children: "Kde začať"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak ešte nemáš prostredie → začni v časti ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OS & Inštalácia"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak chceš pridať obsah → pozri ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HOWTO: nový KNIFE alebo nový STHDF"
        }), "."]
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