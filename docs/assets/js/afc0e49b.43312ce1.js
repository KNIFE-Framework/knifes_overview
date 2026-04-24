"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[46245],{

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

/***/ 79767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_new_q_12_md_afc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-new-q-12-md-afc.json
const site_docs_en_help_howto_new_q_12_md_afc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/new-q12","title":"🧩 Ako vytvoriť nový Q12 záznam","description":"Tento návod popisuje, ako vygenerovať novú Q12 položku pomocou Makefile alebo Python CLI.","source":"@site/docs/en/help/howto/new-q12.md","sourceDirName":"en/help/howto","slug":"/en/help/howto/new-q12","permalink":"/en/help/howto/new-q12","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"HOWTO – Nový KNIFE príspevok","permalink":"/en/help/howto/new-knife"},"next":{"title":"⚙️ HOWTO – Vytvorenie novej SDLC inštancie","permalink":"/en/help/howto/new-sdlc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/new-q12.md


const frontMatter = {};
const contentTitle = '🧩 Ako vytvoriť nový Q12 záznam';

const assets = {

};



const toc = [{
  "value": "1. Makefile – správny príkaz",
  "id": "1-makefile--správny-príkaz",
  "level": 2
}, {
  "value": "2. Python CLI (macOS / Linux)",
  "id": "2-python-cli-macos--linux",
  "level": 2
}, {
  "value": "3. Python CLI (Windows / MSYS2)",
  "id": "3-python-cli-windows--msys2",
  "level": 2
}, {
  "value": "4. Vysvetlenie parametrov",
  "id": "4-vysvetlenie-parametrov",
  "level": 2
}, {
  "value": "<code>--id Q12-0001</code>",
  "id": "--id-q12-0001",
  "level": 3
}, {
  "value": "<code>--name &quot;Q12-0001&quot;</code>",
  "id": "--name-q12-0001",
  "level": 3
}, {
  "value": "<code>--title &quot;Toto je test Q12&quot;</code>",
  "id": "--title-toto-je-test-q12",
  "level": 3
}, {
  "value": "<code>--exists error</code>",
  "id": "--exists-error",
  "level": 3
}, {
  "value": "5. Kde sa nový Q12 uloží?",
  "id": "5-kde-sa-nový-q12-uloží",
  "level": 2
}, {
  "value": "6. Tipy",
  "id": "6-tipy",
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
        id: "-ako-vytvoriť-nový-q12-záznam",
        children: "🧩 Ako vytvoriť nový Q12 záznam"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento návod popisuje, ako vygenerovať novú Q12 položku pomocou ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Makefile"
      }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python CLI"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Q12 používame na rýchle otázky, reflexie, mikro‑príspevky alebo krátke denníkové zápisy v rámci STHDF / KNIFE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-makefile--správny-príkaz",
      children: "1. Makefile – správny príkaz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["🛑 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pozor:"
        }), " V projekte ", (0,jsx_runtime.jsx)(_components.em, {
          children: "neexistuje"
        }), " target ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q12-q12-new"
        }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Správny názov targetu je:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "make q12-new Q12_NAME=\"Q12-0001\" TITLE=\"Toto je test Q12\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parametre:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Q12_NAME"
        }), " → technické meno / ID Q12 položky"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TITLE"
        }), " → ľudský názov (použije sa do Front Matter)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Makefile potom zavolá generátor:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 core/scripts/tools/new_item_instance.py \\\n  --type q12 \\\n  --config config/q12/q12_config.yml \\\n  --id \"$Q12_NAME\" \\\n  --name \"$Q12_NAME\" \\\n  --title \"$TITLE\" \\\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-python-cli-macos--linux",
      children: "2. Python CLI (macOS / Linux)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak chceš vytvoriť Q12 bez Makefile:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 core/scripts/tools/new_item_instance.py \\\n  --type q12 \\\n  --config config/q12/q12_config.yml \\\n  --id Q12-0001 \\\n  --name \"Q12-0001\" \\\n  --title \"Toto je test Q12\" \\\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-python-cli-windows--msys2",
      children: "3. Python CLI (Windows / MSYS2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python core/scripts/tools/new_item_instance.py ^\n  --type q12 ^\n  --config config/q12/q12_config.yml ^\n  --id Q12-0001 ^\n  --name \"Q12-0001\" ^\n  --title \"Toto je test Q12\" ^\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-vysvetlenie-parametrov",
      children: "4. Vysvetlenie parametrov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--id-q12-0001",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--id Q12-0001"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jedinečný identifikátor Q12. Používa sa aj v názve priečinka."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--name-q12-0001",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--name \"Q12-0001\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Technické meno inštancie. Ak nie je uvedené, doplní sa fallback ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new_q12"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--title-toto-je-test-q12",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--title \"Toto je test Q12\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ľudský názov, ktorý sa objaví v UI a nadpisoch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--exists-error",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--exists error"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Politika pri existujúcich súboroch:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " – bezpečná voľba, skončí pri kolízii,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "skip"
        }), " – preskočí,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "replace"
        }), " – prepíše,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "merge"
        }), " – rezervované."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-kde-sa-nový-q12-uloží",
      children: "5. Kde sa nový Q12 uloží?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po generovaní vznikne nový priečinok:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "content/docs/sk/q12/Q12-0001/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vnútri bude:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), " s Front Matter,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prípadné ďalšie súbory podľa šablóny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-tipy",
      children: "6. Tipy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Odporúčame používať jednotný tvar ID: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q12-0001"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q12-0002"
        }), ", …"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Na jeden deň/otázku môžeš mať viac Q12 (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q12-2025-11-20-A"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💬 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Small Talk Moment:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "„Q12 sú ako rýchle poznámky na žltom lístku – malé, ale často zachránia celý deň.“ 😊"]
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