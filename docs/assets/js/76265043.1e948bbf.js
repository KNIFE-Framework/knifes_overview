"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[77176],{

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

/***/ 93830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_release_notes_md_762_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-release-notes-md-762.json
const site_docs_en_help_release_notes_md_762_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/release-notes","title":"Release Notes","description":"Táto stránka zhromažďuje zmeny, ktoré ovplyvňujú:","source":"@site/docs/en/help/release-notes.md","sourceDirName":"en/help","slug":"/en/help/release-notes","permalink":"/en/help/release-notes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release Notes"},"sidebar":"tutorialSidebar","previous":{"title":"Inštalácia na Windows (MSYS2)","permalink":"/en/help/os-install/windows-msys2"},"next":{"title":"K000101 – CYNEFIN Framework","permalink":"/en/knifes/K000101-CYNEFIN_Framework/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/release-notes.md


const frontMatter = {
	title: 'Release Notes'
};
const contentTitle = 'Release Notes – KNIFE Overview & STHDF Framework';

const assets = {

};



const toc = [{
  "value": "v0.4.0 – STHDF HELP &amp; Generátor (2025-11-23)",
  "id": "v040--sthdf-help--generátor-2025-11-23",
  "level": 2
}, {
  "value": "v0.3.0 – STHDF HELP &amp; Generátor (2025-11-18)",
  "id": "v030--sthdf-help--generátor-2025-11-18",
  "level": 2
}, {
  "value": "📘 Nové HOWTO",
  "id": "-nové-howto",
  "level": 3
}, {
  "value": "🧰 Generátor <code>new_item_instance.py</code>",
  "id": "-generátor-new_item_instancepy",
  "level": 3
}, {
  "value": "🧹 Fix skripty",
  "id": "-fix-skripty",
  "level": 3
}, {
  "value": "v0.2.0 – Docusaurus pomocník &amp; OS inštalácie (2025-11-15)",
  "id": "v020--docusaurus-pomocník--os-inštalácie-2025-11-15",
  "level": 2
}, {
  "value": "📘 Ako nainštalovať Docusaurus",
  "id": "-ako-nainštalovať-docusaurus",
  "level": 3
}, {
  "value": "💻 OS Install Guides",
  "id": "-os-install-guides",
  "level": 3
}, {
  "value": "v0.1.0 – Inicializácia štruktúry (2025-11-10)",
  "id": "v010--inicializácia-štruktúry-2025-11-10",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "release-notes--knife-overview--sthdf-framework",
        children: "Release Notes – KNIFE Overview & STHDF Framework"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Táto stránka zhromažďuje zmeny, ktoré ovplyvňujú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "generátory (KNIFE & STHDF),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "šablóny,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HELP dokumentáciu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "infraštruktúru pre výuku a class templaty."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v040--sthdf-help--generátor-2025-11-23",
      children: "v0.4.0 – STHDF HELP & Generátor (2025-11-23)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "systém podporuje nasledovné typy príspevkov:"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "KNIFE - Knowledge in Friendly Examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "2",
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "7Ds - Seved Disciplines for Successful Solution"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "3",
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SDLC - Keep track in Solution Develop,emt Life Cycle"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "4",
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Q12 - Twelve Quadrants to manage  Your startup"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "5",
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "STHDF - System Thinking and Digital Fabrication -"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "6",
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Theses - to be finished"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Systém podporuje multimediálny obsah v HTML5 (cez iFrame)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Systém obsahuje základné sktipty pre vytvorenie jednotlivých typov v adresári operation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Systém podporuje scripty pre Windows (cmd), Mac, linux (sh)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Systém obsahuje základné návody v help adresári"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v030--sthdf-help--generátor-2025-11-18",
      children: "v0.3.0 – STHDF HELP & Generátor (2025-11-18)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-nové-howto",
      children: "📘 Nové HOWTO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "new-knife.md"
        }), " – kompletný návod pre vytvorenie nového KNIFE z CLI aj Makefile."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "new-sthdf.md"
        }), " – návod pre generovanie novej STHDF inštancie (študent/ročník)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-generátor-new_item_instancepy",
      children: ["🧰 Generátor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new_item_instance.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["KNIFE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), " = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"ID – Názov\""
        }), " (bez sidebar_label)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["STHDF: automatické generovanie dvojice:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ID – projekty"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ID – študenti"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-fix-skripty",
      children: "🧹 Fix skripty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pridaný jednorazový skript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knifes_fix_titles_once.py"
        }), "\nna doplnenie ID do starších KNIFE názvov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v020--docusaurus-pomocník--os-inštalácie-2025-11-15",
      children: "v0.2.0 – Docusaurus pomocník & OS inštalácie (2025-11-15)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-ako-nainštalovať-docusaurus",
      children: "📘 Ako nainštalovať Docusaurus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["nový súbor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "help/docusaurus.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-os-install-guides",
      children: "💻 OS Install Guides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "macOS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows + MSYS2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v010--inicializácia-štruktúry-2025-11-10",
      children: "v0.1.0 – Inicializácia štruktúry (2025-11-10)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "základná štruktúra KNIFE Overview,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sidebar + lokalizácia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prvé KNIFE dokumenty,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makefile pre build & dev server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["✨ ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["Release notes sú motorom dlhodobého poriadku.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Keď systém rastie, práve tu ostáva história rozhodnutí.“"]
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



/***/ })

}]);