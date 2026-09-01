"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[60274],{

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

/***/ 99281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_about_md_29c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-about-md-29c.json
const site_docs_en_about_md_29c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/about","title":"About KNIFE Overview","description":"Documentation doesn\'t happen at the end of a project. Knowledge is created continuously — as a byproduct of everyday work, not as a separate task tacked on at the end. KNIFE (Knowledge Index For Enterprise) is a way to capture that byproduct before it\'s lost: a short, structured record (a \\"knife\\") written the moment the knowledge is fresh.","source":"@site/docs/en/about.md","sourceDirName":"en","slug":"/en/about","permalink":"/en/about","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"About KNIFE Overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/about.md


const frontMatter = {
	title: 'About KNIFE Overview'
};
const contentTitle = 'About KNIFE Overview';

const assets = {

};



const toc = [{
  "value": "Who it&#39;s for",
  "id": "who-its-for",
  "level": 2
}, {
  "value": "What you&#39;ll find here",
  "id": "what-youll-find-here",
  "level": 2
}, {
  "value": "How to continue",
  "id": "how-to-continue",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "about-knife-overview",
        children: "About KNIFE Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation doesn't happen at the end of a project."
      }), " Knowledge is created continuously — as a byproduct of everyday work, not as a separate task tacked on at the end. KNIFE (Knowledge Index For Enterprise) is a way to capture that byproduct before it's lost: a short, structured record (a \"knife\") written the moment the knowledge is fresh."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of \"I'll write it up once I have time\" → you write it down right away, in a structure that's reusable, searchable, and shareable. With an AI assistant at hand (Claude, ChatGPT, and similar), this step is practically effortless — AI helps phrase it, fill in context, link it to other knifes. Knowledge that would otherwise stay stuck in your head or in a single chat thread is, minutes later, publicly available, searchable, and machine-readable too (", (0,jsx_runtime.jsx)(_components.code, {
        children: "llms.txt"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "who-its-for",
      children: "Who it's for"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anyone"
      }), " — it isn't tied to a single course or a single team:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "individuals who want to record their own knowledge as they go,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "teams that don't want knowledge to disappear when someone leaves,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["courses and projects (e.g. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "System Thinking in IT & Digital Fabrication"
        }), " — STHDF) that use the KNIFE framework as one of their platforms,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["anyone who wants to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "document knowledge transparently as it happens, not in hindsight"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-youll-find-here",
      children: "What you'll find here"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stable entry point"
        }), " to individual KNIFE topics,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "guides and procedures"
        }), " that remain valid long-term (not just for one course or team),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["contributions at various stages of completion (", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inProgress"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "done"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "published"
        }), ") — a knife gets published even before it's finished, because work-in-progress knowledge still has value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-continue",
      children: "How to continue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you are new → start in the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./help",
          children: "Help"
        }), " section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Looking for a specific KNIFE → see the overview in the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "KNIFE contributions"
        }), " section of the main menu."]
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



/***/ })

}]);