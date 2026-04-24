"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[44137],{

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

/***/ 40171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_operations_index_md_d1d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-operations-index-md-d1d.json
const site_docs_en_help_howto_operations_index_md_d1d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/Operations/index","title":"🧰 Operations skripty (Windows / macOS / Linux)","description":"Súbory v priečinku core/operations/ sú tenké wrapper skripty nad generátorom","source":"@site/docs/en/help/howto/Operations/index.md","sourceDirName":"en/help/howto/Operations","slug":"/en/help/howto/Operations/","permalink":"/en/help/howto/Operations/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ActivePresenter","permalink":"/en/help/howto/ActivePresenter/"},"next":{"title":"Release Notes","permalink":"/en/help/howto/Release/NewReleaseinGitHub"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/Operations/index.md


const frontMatter = {};
const contentTitle = '🧰 Operations skripty (Windows / macOS / Linux)';

const assets = {

};



const toc = [{
  "value": "🔁 Základný princíp",
  "id": "-základný-princíp",
  "level": 2
}, {
  "value": "🖥 macOS / Linux (<code>.sh</code> skripty)",
  "id": "-macos--linux-sh-skripty",
  "level": 2
}, {
  "value": "✅ Predpoklady",
  "id": "-predpoklady",
  "level": 3
}, {
  "value": "🪟 Windows CMD (.cmd skripty)",
  "id": "-windows-cmd-cmd-skripty",
  "level": 2
}, {
  "value": "Nový KNIFE zápis",
  "id": "nový-knife-zápis-1",
  "level": 2
}, {
  "value": "Nová 7Ds inštancia",
  "id": "nová-7ds-inštancia-1",
  "level": 2
}, {
  "value": "Nový SDLC strom",
  "id": "nový-sdlc-strom-1",
  "level": 2
}, {
  "value": "Nový Q12 zápis",
  "id": "nový-q12-zápis-1",
  "level": 2
}, {
  "value": "(budúce) Nová thesis šablóna",
  "id": "budúce-nová-thesis-šablóna-1",
  "level": 2
}, {
  "value": "👀 TIP: Ak pridáš nový typ (napr. esg, dao…), stačí:",
  "id": "-tip-ak-pridáš-nový-typ-napr-esg-dao-stačí",
  "level": 2
}, {
  "value": "🧭 Navigácia",
  "id": "-navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
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
        id: "-operations-skripty-windows--macos--linux",
        children: "🧰 Operations skripty (Windows / macOS / Linux)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Súbory v priečinku ", (0,jsx_runtime.jsx)(_components.code, {
        children: "core/operations/"
      }), " sú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tenké wrapper skripty"
      }), " nad generátorom", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "core/scripts/tools/new_item_instance.py"
      }), ". Ich cieľ:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zjednodušiť volanie generátorov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skryť dlhé parametre (config, content_dir, template_root…),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ponúknuť rovnaký UX pre rôzne OS."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["💡 Odporúčanie: pre študentov a bežné použitie komunikujeme najmä tieto skripty,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "nie priamy Python príkaz."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-základný-princíp",
      children: "🔁 Základný princíp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý operations skript urobí zhruba toto:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["nastaví ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "koreň repozitára"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "cd"
        }), " do rootu),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["zavolá ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 core/scripts/tools/new_item_instance.py"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "s príslušným ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--type"
        }), " (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "7ds"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sdlc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sthdf"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "q12"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thesis"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knife"
        }), "),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["odovzdá názov inštancie a voliteľné argumenty (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--title"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--exists-mode"
        }), "…)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-macos--linux-sh-skripty",
      children: ["🖥 macOS / Linux (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".sh"
      }), " skripty)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typicky v tvare:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "core/operations/new-knife.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "core/operations/new-sthdf.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "core/operations/new-7ds.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "core/operations/new-sdlc.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "core/operations/new-q12.sh"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "core/operations/new-thesis.sh"
        }), " (pripravené do budúcna)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-predpoklady",
      children: "✅ Predpoklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["nainštalovaný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Python 3"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3"
        }), "),"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spustiteľné práva na skripte:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "chmod +x core/operations/new-7ds.sh\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "️-príklady-použitia",
      children: "▶️ Príklady použitia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nový-knife-zápis",
      children: "Nový KNIFE zápis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\ncore/operations/new-knife.sh K000123_MojPrvyKnife \"Môj prvý KNIFE zápis\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nová-7ds-inštancia",
      children: "Nová 7Ds inštancia"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\ncore/operations/new-7ds.sh 7ds_MojProjekt \"7Ds – Môj projekt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nový-sdlc-strom",
      children: "Nový SDLC strom"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\ncore/operations/new-sdlc.sh sdlc_MojProjekt \"SDLC – Môj projekt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nový-q12-zápis",
      children: "Nový Q12 zápis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\ncore/operations/new-q12.sh Q12_Sample_002 \"Q12 – Druhá vzorka\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "budúce-nová-thesis-šablóna",
      children: "(budúce) Nová thesis šablóna"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "core/operations/new-thesis.sh thesis_MojStudent \"Thesis – Meno študenta\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-windows-cmd-cmd-skripty",
      children: "🪟 Windows CMD (.cmd skripty)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre Windows máme zrkadlové skripty:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\t•\tcore/operations/new-knife.cmd\n\t•\tcore/operations/new-sthdf.cmd\n\t•\tcore/operations/new-7ds.cmd\n\t•\tcore/operations/new-sdlc.cmd\n\t•\tcore/operations/new-q12.cmd\n\t•\tcore/operations/new-thesis.cmd\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-predpoklady-1",
      children: "✅ Predpoklady"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "•\tnainštalovaný Python 3 dostupný ako python alebo py,\n•\tspúšťaš skripty z rootu repozitára (alebo skript sám spraví cd do rootu)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "️-príklady-použitia-cmd",
      children: "▶️ Príklady použitia (CMD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nový-knife-zápis-1",
      children: "Nový KNIFE zápis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "core\\operations\\new-knife.cmd K000123_MojPrvyKnife \"Môj prvý KNIFE zápis\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nová-7ds-inštancia-1",
      children: "Nová 7Ds inštancia"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "core\\operations\\new-7ds.cmd 7ds_MojProjekt \"7Ds – Môj projekt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nový-sdlc-strom-1",
      children: "Nový SDLC strom"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "core\\operations\\new-sdlc.cmd sdlc_MojProjekt \"SDLC – Môj projekt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nový-q12-zápis-1",
      children: "Nový Q12 zápis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "core\\operations\\new-q12.cmd Q12_Sample_002 \"Q12 – Druhá vzorka\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "budúce-nová-thesis-šablóna-1",
      children: "(budúce) Nová thesis šablóna"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "core\\operations\\new-thesis.cmd thesis_MojStudent \"Thesis – Meno študenta\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-existuje-priečinok--exists_mode",
      children: "🧪 Existuje priečinok → exists_mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generátor vie reagovať na existujúci cieľový priečinok:\n•\t--exists-mode=error – ak priečinok existuje, skončí s chybou (default),\n•\t--exists-mode=skip – nič neurobí, len ticho preskočí,\n•\t--exists-mode=replace – zmaže cieľový priečinok a vygeneruje nanovo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V operations skriptoch môžeš tento parameter doplniť podľa svojho štýlu práce alebo\npripraviť 2 varianty skriptu (napr. new-7ds.sh vs new-7ds-replace.sh)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-kde-hľadať-detaily",
      children: "🔍 Kde hľadať detaily"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "•\tzdrojový kód generátora:\ncore/scripts/tools/new_item_instance.py\n•\tspoločná logika front matter a šablón:\ncore/scripts/tools/base_fm.py\n•\tkonkrétne generátory (7Ds, SDLC, STHDF…):\ncore/scripts/tools/new_7ds.py, new_sdlc.py, new_sthdf.py, new_q12.py, …"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tip-ak-pridáš-nový-typ-napr-esg-dao-stačí",
      children: "👀 TIP: Ak pridáš nový typ (napr. esg, dao…), stačí:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\t1.\tdoplniť nový new_xxx.py generátor,\n\t2.\tpridať new-xxx.sh / new-xxx.cmd do core/operations/,\n\t3.\tpridať HOWTO stránku do tejto sekcie.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-navigácia",
      children: "🧭 Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🆘 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/Operations/",
          children: "Späť na HOWTO – Praktické návody"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏠 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/howto/",
          children: "Späť na HELP (SK)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔼 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/help/",
          children: "Späť na KNIFE Overview"
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