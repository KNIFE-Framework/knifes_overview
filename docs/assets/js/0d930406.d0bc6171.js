"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[28113],{

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

/***/ 99888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_github_classroom_index_md_0d9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-github-classroom-index-md-0d9.json
const site_docs_en_help_howto_github_classroom_index_md_0d9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/github-classroom/index","title":"GitHub Classroom – Úvod a navigácia","description":"V tejto sekcii nájdeš všetky návody potrebné pre prácu s GitHub Classroom v predmete","source":"@site/docs/en/help/howto/github-classroom/index.md","sourceDirName":"en/help/howto/github-classroom","slug":"/en/help/howto/github-classroom/","permalink":"/en/help/howto/github-classroom/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"KNIFE Overview – Release flow & operations (CLI)","permalink":"/en/help/howto/Release/RELEASE-flow-and-operations"},"next":{"title":"Ako pracovať s asistentmi v GitHub Classroom","permalink":"/en/help/howto/github-classroom/ClassRoomAssistents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/github-classroom/index.md


const frontMatter = {};
const contentTitle = 'GitHub Classroom – Úvod a navigácia';

const assets = {

};



const toc = [{
  "value": "🔖 1. Onboarding pre učiteľov",
  "id": "-1-onboarding-pre-učiteľov",
  "level": 2
}, {
  "value": "🎓 2. Onboarding pre študentov",
  "id": "-2-onboarding-pre-študentov",
  "level": 2
}, {
  "value": "🤝 3. Práca asistentov (Teaching Assistants)",
  "id": "-3-práca-asistentov-teaching-assistants",
  "level": 2
}, {
  "value": "🧩 4. Projektové tímy (Group Projects)",
  "id": "-4-projektové-tímy-group-projects",
  "level": 2
}, {
  "value": "🔄 5. Synchronizácia assignmentov",
  "id": "-5-synchronizácia-assignmentov",
  "level": 2
}, {
  "value": "🛠️ 6. Troubleshooting",
  "id": "️-6-troubleshooting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "github-classroom--úvod-a-navigácia",
        children: "GitHub Classroom – Úvod a navigácia"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V tejto sekcii nájdeš všetky návody potrebné pre prácu s GitHub Classroom v predmete", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Systémové myslenie v IT & Digitálna fabrikácia (STHDF)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Materiály sú určené pre:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "👨‍🏫 učiteľov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧑‍🏫 asistentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧑‍🎓 študentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "👥 projektové tímy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/ClassRoomOnboarding",
          children: "Onboarding všeobecne"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-1-onboarding-pre-učiteľov",
      children: "🔖 1. Onboarding pre učiteľov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Úvodný návod pre založenie triedy, assignmentov a ročníkového frameworku."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GH-Class-Onboarding-Teachers.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Onboarding-Teachers",
          children: "Onboarding pre učiteľov"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-2-onboarding-pre-študentov",
      children: "🎓 2. Onboarding pre študentov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prvé kroky po kliknutí na assignment, vytvorenie identity a prvý commit."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GH-Class-Onboarding-Students.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Onboarding-Students",
          children: "Onboarding pre študentov"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-3-práca-asistentov-teaching-assistants",
      children: "🤝 3. Práca asistentov (Teaching Assistants)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ako pridať asistenta, jeho práva a odporúčaný workflow počas semestra."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/ClassRoomAssistents",
          children: "Asistenti "
        }), "\n👉 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GH-Class-Assistants.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Assistants",
          children: "Asistenti – práva a workflow"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-4-projektové-tímy-group-projects",
      children: "🧩 4. Projektové tímy (Group Projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ako vytvoriť projektové skupiny, prefixy PRJ_XXX a kontrola tímov."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GH-Class-Group-Projects.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/ClassRoomProjects",
          children: "Projektové tímy (Group Projects)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-5-synchronizácia-assignmentov",
      children: "🔄 5. Synchronizácia assignmentov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ako učiteľ aktualizuje existujúce študentské repozitáre po zmene template."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GH-Class-Sync.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Sync",
          children: "Sync assignmentov"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Sync-B",
          children: "Sync assignmentov - iná verzia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GitHub-Class-Update",
          children: "Sync update"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-6-troubleshooting",
      children: "🛠️ 6. Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najčastejšie problémy a rýchle riešenia: onboarding, prístupy, prefixy, buildy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GH-Class-Troubleshooting.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Troubleshooting",
          children: "Troubleshooting"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-navigácia-živé-linky",
      children: "🧭 Navigácia (živé linky)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/ClassRoomOnboarding",
          children: "Onboarding všeobecne"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Onboarding-Teachers",
          children: "Onboarding pre učiteľov"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Onboarding-Students",
          children: "Onboarding pre študentov"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Assistants",
          children: "Asistenti – práva a workflow"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/ClassRoomAssistents",
          children: "Asistenti "
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/ClassRoomProjects",
          children: "Projektové tímy (Group Projects)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Sync",
          children: "Sync assignmentov"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Sync-B",
          children: "Sync assignmentov - iná verzia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GitHub-Class-Update",
          children: "Sync update"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/github-classroom/GH-Class-Troubleshooting",
          children: "Troubleshooting"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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