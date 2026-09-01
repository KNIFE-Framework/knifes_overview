"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[56338],{

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

/***/ 82252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_about_md_cdb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-about-md-cdb.json
const site_docs_sk_about_md_cdb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/about","title":"O projekte KNIFE Overview","description":"Dokumentácia sa nerobí na konci projektu. Znalosti vznikajú priebežne — ako vedľajší produkt bežnej práce, nie ako samostatná úloha na záver. KNIFE (Knowledge Index For Enterprise) je spôsob, ako tento vedľajší produkt zachytiť skôr, než sa stratí: krátky, štruktúrovaný záznam (\\"knife\\") napísaný v momente, keď je poznanie čerstvé.","source":"@site/docs/sk/about.md","sourceDirName":"sk","slug":"/sk/about","permalink":"/sk/about","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"O projekte KNIFE Overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/about.md


const frontMatter = {
	title: 'O projekte KNIFE Overview'
};
const contentTitle = 'O projekte KNIFE Overview';

const assets = {

};



const toc = [{
  "value": "Pre koho je to",
  "id": "pre-koho-je-to",
  "level": 2
}, {
  "value": "Čo tu nájdeš",
  "id": "čo-tu-nájdeš",
  "level": 2
}, {
  "value": "Ako pokračovať",
  "id": "ako-pokračovať",
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
        id: "o-projekte-knife-overview",
        children: "O projekte KNIFE Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dokumentácia sa nerobí na konci projektu."
      }), " Znalosti vznikajú priebežne — ako vedľajší produkt bežnej práce, nie ako samostatná úloha na záver. KNIFE (Knowledge Index For Enterprise) je spôsob, ako tento vedľajší produkt zachytiť skôr, než sa stratí: krátky, štruktúrovaný záznam (\"knife\") napísaný v momente, keď je poznanie čerstvé."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Namiesto \"napíšem to, až budem mať čas\" → zapíšeš to hneď, v štruktúre, ktorá sa dá znovu použiť, prehľadávať a zdieľať. S AI asistentom po ruke (Claude, ChatGPT a podobne) je tento krok prakticky bezbolestný — AI pomôže sformulovať, doplniť kontext, prepojiť s ďalšími knifes. Znalosť, ktorá by inak zostala len v hlave alebo v jednom chatovom vlákne, je o pár minút neskôr verejne dostupná, prehľadateľná a čitateľná aj pre AI (", (0,jsx_runtime.jsx)(_components.code, {
        children: "llms.txt"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-koho-je-to",
      children: "Pre koho je to"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre kohokoľvek"
      }), " — nie je to viazané na jeden predmet ani jeden tím:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pre jednotlivca, ktorý si chce priebežne zaznamenávať vlastné poznanie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pre tím, ktorý nechce, aby znalosť zmizla s odchodom človeka,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pre kurzy a projekty (napr. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "System Thinking in IT & Digital Fabrication"
        }), " — STHDF), ktoré KNIFE rámec využívajú ako jednu z platforiem,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pre kohokoľvek, kto chce ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transparentne zaznamenávať poznanie priebežne, nie spätne"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "čo-tu-nájdeš",
      children: "Čo tu nájdeš"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stabilný rozcestník"
        }), " k jednotlivým KNIFE témam,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "návody a postupy"
        }), ", ktoré platia dlhodobo (nie len pre jeden kurz či tím),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["príspevky v rôznom stupni rozpracovanosti (", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inProgress"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "done"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "published"
        }), ") — knife sa publikuje, aj keď ešte nie je hotový, lebo hodnotu má aj rozpracovaná znalosť."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ako-pokračovať",
      children: "Ako pokračovať"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak si nový → začni v sekcii ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help",
          children: "Help"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak hľadáš konkrétny KNIFE → pozri si prehľad v časti ", (0,jsx_runtime.jsx)(_components.em, {
          children: "KNIFE príspevky"
        }), " v hlavnom menu."]
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