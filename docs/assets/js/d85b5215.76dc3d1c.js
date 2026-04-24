"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[61689],{

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

/***/ 56430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_new_knife_md_d85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-new-knife-md-d85.json
const site_docs_en_help_howto_new_knife_md_d85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/new-knife","title":"HOWTO – Nový KNIFE príspevok","description":"1. Predpoklady","source":"@site/docs/en/help/howto/new-knife.md","sourceDirName":"en/help/howto","slug":"/en/help/howto/new-knife","permalink":"/en/help/howto/new-knife","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HOWTO – Nový KNIFE príspevok"},"sidebar":"tutorialSidebar","previous":{"title":"🌱 HOWTO – Vytvorenie novej 7Ds inštancie","permalink":"/en/help/howto/new-7ds"},"next":{"title":"🧩 Ako vytvoriť nový Q12 záznam","permalink":"/en/help/howto/new-q12"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/new-knife.md


const frontMatter = {
	title: 'HOWTO – Nový KNIFE príspevok'
};
const contentTitle = 'HOWTO – Ako vytvoriť nový KNIFE príspevok';

const assets = {

};



const toc = [{
  "value": "1. Predpoklady",
  "id": "1-predpoklady",
  "level": 2
}, {
  "value": "2. Vytvorenie KNIFE cez Makefile",
  "id": "2-vytvorenie-knife-cez-makefile",
  "level": 2
}, {
  "value": "3. Vytvorenie KNIFE cez Python CLI (macOS / Linux)",
  "id": "3-vytvorenie-knife-cez-python-cli-macos--linux",
  "level": 2
}, {
  "value": "4. Vytvorenie KNIFE cez Python CLI (Windows / MSYS2)",
  "id": "4-vytvorenie-knife-cez-python-cli-windows--msys2",
  "level": 2
}, {
  "value": "5. Vysvetlenie parametrov",
  "id": "5-vysvetlenie-parametrov",
  "level": 2
}, {
  "value": "<code>python3</code> / <code>python</code>",
  "id": "python3--python",
  "level": 3
}, {
  "value": "<code>core/scripts/tools/new_item_instance.py</code>",
  "id": "corescriptstoolsnew_item_instancepy",
  "level": 3
}, {
  "value": "<code>--type knifes</code>",
  "id": "--type-knifes",
  "level": 3
}, {
  "value": "<code>--config config/knifes/knifes_config.yml</code>",
  "id": "--config-configknifesknifes_configyml",
  "level": 3
}, {
  "value": "<code>--id K000123</code>",
  "id": "--id-k000123",
  "level": 3
}, {
  "value": "<code>--name &quot;Moj-prvy-KNIFE&quot;</code>",
  "id": "--name-moj-prvy-knife",
  "level": 3
}, {
  "value": "<code>--title &quot;Môj prvý KNIFE&quot;</code>",
  "id": "--title-môj-prvý-knife",
  "level": 3
}, {
  "value": "<code>--exists error</code>",
  "id": "--exists-error",
  "level": 3
}, {
  "value": "6. Čo doplniť ručne",
  "id": "6-čo-doplniť-ručne",
  "level": 2
}, {
  "value": "7. Overenie",
  "id": "7-overenie",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "howto--ako-vytvoriť-nový-knife-príspevok",
        children: "HOWTO – Ako vytvoriť nový KNIFE príspevok"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-predpoklady",
      children: "1. Predpoklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE template je pripravený v repozitári."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Makefile obsahuje target ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knife-new"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generátor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_item_instance.py"
        }), " je funkčný."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-vytvorenie-knife-cez-makefile",
      children: "2. Vytvorenie KNIFE cez Makefile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najjednoduchší spôsob (používame bežne v kurze):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "make knife-new ID=K123456 NAME=\"Moja téma\" LOCALE=sk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výsledkom je:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["priečinok ", (0,jsx_runtime.jsx)(_components.code, {
          children: "content/docs/sk/knifes/K123456-moja-tema/"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["koreňový súbor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), " s vyplneným Front Matter,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["automaticky doplnený titulok: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K123456 – Moja téma"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nový-knife-z-cli",
      children: "Nový KNIFE z CLI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Spúšťaj z rootu repozitára napríklad ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knifes_overview-03"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-vytvorenie-knife-cez-python-cli-macos--linux",
      children: "3. Vytvorenie KNIFE cez Python CLI (macOS / Linux)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 core/scripts/tools/new_item_instance.py \\\n  --type knifes \\\n  --config config/knifes/knifes_config.yml \\\n  --id K000123 \\\n  --name \"Moj-prvy-KNIFE\" \\\n  --title \"Môj prvý KNIFE\" \\\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-vytvorenie-knife-cez-python-cli-windows--msys2",
      children: "4. Vytvorenie KNIFE cez Python CLI (Windows / MSYS2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 core/scripts/tools/new_item_instance.py ^\n  --type knifes ^\n  --config config/knifes/knifes_config.yml ^\n  --id K000123 ^\n  --name \"Moj-prvy-KNIFE\" ^\n  --title \"Môj prvý KNIFE\" ^\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["🔁 Namiesto ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K000123"
        }), " a názvu si doplň vlastné KNIFE ID a názov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-vysvetlenie-parametrov",
      children: "5. Vysvetlenie parametrov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "python3--python",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "python3"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spúšťa Python interpret."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["macOS / Linux: zvyčajne ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Windows: typicky ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "corescriptstoolsnew_item_instancepy",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "core/scripts/tools/new_item_instance.py"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hlavný generátor nových inštancií (KNIFE, STHDF, Q12…)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--type-knifes",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--type knifes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Určuje, že sa vytvára KNIFE príspevok."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--config-configknifesknifes_configyml",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--config config/knifes/knifes_config.yml"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Konfiguračný súbor KNIFE:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kde sú šablóny,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kam uložiť nový KNIFE,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako vytvoriť predvolené metadata."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--id-k000123",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--id K000123"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jedinečné ID KNIFE."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Formát: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K"
        }), " + 6 číslic (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K000123"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Používa sa v názve priečinka aj vo Front Matter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--name-moj-prvy-knife",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--name \"Moj-prvy-KNIFE\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Technické meno inštancie.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Používa sa pre:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "názov priečinka (slug),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fallback pre title (ak nie je zadaný),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "referenčný názov pre generátor."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak parameter nešpecifikujete, generátor KNIFE použije predvolený názov:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "new_knife\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--title-môj-prvý-knife",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--title \"Môj prvý KNIFE\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ľudský názov KNIFE. V kombinácii s ID sa vytvorí finálny nadpis:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "K000123 – Môj prvý KNIFE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docusaurus si tento názov automaticky zobrazí v sidebare."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--exists-error",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--exists error"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Politika existujúceho obsahu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " – ak priečinok existuje, generátor skončí chybou,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ďalšie možné hodnoty podľa konfigurácie: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "skip"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "replace"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-čo-doplniť-ručne",
      children: "6. Čo doplniť ručne"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po vygenerovaní odporúčame doplniť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opis problému,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obrázky alebo diagramy,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "podstránky (ak je téma rozsiahla)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-overenie",
      children: "7. Overenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "make dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skontroluj:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "či sa KNIFE zobrazuje v prehľade,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "či nie sú broken links,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "či funguje navigácia."
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