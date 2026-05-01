"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[3669],{

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

/***/ 32186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/ga4_gtm_hierarchy_links-958d3c9e95157fcab9efaa601da27c00.drawio");

/***/ }),

/***/ 34495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_and_gtm_getting_started_with_ga_4_gtm_md_0a6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000064-ga-4-gtn-utm-ga-4-and-gtm-getting-started-with-ga-4-gtm-md-0a6.json
const site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_and_gtm_getting_started_with_ga_4_gtm_md_0a6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-07","title":"Getting Started with GA4 + GTM","description":"-","source":"@site/docs/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/Getting_Started_with_GA4_GTM.md","sourceDirName":"sk/knifes/K000064-ga4-gtn-utm/GA4andGTM","slug":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-07","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-07","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/doc-tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000064-ga4-gtn-utm-07","guid":"936bcae4-7627-4d7a-a583-02ca86d69835","dao":"knife","title":"Getting Started with GA4 + GTM","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started with GA4 & UTM","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-08"},"next":{"title":"Google Account vs Google Workspace","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-09"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/Getting_Started_with_GA4_GTM.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000064-ga4-gtn-utm-07',
	guid: '936bcae4-7627-4d7a-a583-02ca86d69835',
	dao: 'knife',
	title: 'Getting Started with GA4 + GTM',
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
const contentTitle = 'Getting Started with GA4 + GTM';

const assets = {

};



const toc = [{
  "value": "1. Základná logika",
  "id": "1-základná-logika",
  "level": 2
}, {
  "value": "2. Prečo GTM šetrí úsilie",
  "id": "2-prečo-gtm-šetrí-úsilie",
  "level": 2
}, {
  "value": "3. Ako GTM vie <em>kam</em> posielať dáta",
  "id": "3-ako-gtm-vie-kam-posielať-dáta",
  "level": 2
}, {
  "value": "4. Oprávnenia a prepojenie",
  "id": "4-oprávnenia-a-prepojenie",
  "level": 2
}, {
  "value": "5. Typický Getting Started postup",
  "id": "5-typický-getting-started-postup",
  "level": 2
}, {
  "value": "6. ASCII Diagram",
  "id": "6-ascii-diagram",
  "level": 2
}, {
  "value": "6. Draw.io Diagram",
  "id": "6-drawio-diagram",
  "level": 2
}, {
  "value": "🎯 Odporúčanie pre teba",
  "id": "-odporúčanie-pre-teba",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "getting-started-with-ga4--gtm",
        children: "Getting Started with GA4 + GTM"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "936bcae4-7627-4d7a-a583-02ca86d69835"
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
      }), " 2025-08-24", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Úvod do prepojenia Google Analytics 4 (GA4) a Google Tag Manager (GTM)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-základná-logika",
      children: "1. Základná logika"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GA4"
        }), " = miesto, kde sa zbierajú a zobrazujú dáta (reporty, metriky)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GTM"
        }), " = manažér značiek, ktorý ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rozhoduje čo, kedy a kam sa odošle"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web / app"
        }), " = zdroj udalostí (klik, zobrazenie stránky, nákup, …)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-prečo-gtm-šetrí-úsilie",
      children: "2. Prečo GTM šetrí úsilie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bez GTM by si musel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "do kódu webu vkladať GA4 merací skript,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manuálne dopĺňať kódy pre každý nový event (klik na tlačidlo, stiahnutie PDF),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "v prípade zmien vždy prepisovať zdrojový kód webu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S GTM:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["na web vložíš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "len 1x kontajnerový kód (gtm-XXXXXX)"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["všetky ďalšie nastavenia (eventy, pixely, custom metriky) robíš v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GTM rozhraní"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["zmeny sa nasadzujú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "centrálne z GTM"
        }), " (netreba editovať webový kód)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "3-ako-gtm-vie-kam-posielať-dáta",
      children: ["3. Ako GTM vie ", (0,jsx_runtime.jsx)(_components.em, {
        children: "kam"
      }), " posielať dáta"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V GTM vytvoríš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag typu GA4 Configuration"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do neho vložíš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Measurement ID"
        }), " z konkrétneho GA4 Data Streamu (napr. G-ABC123)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Všetky ostatné ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GA4 Event Tags"
        }), " sa odkazujú na túto konfiguráciu."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Takto GTM „vie“, že má posielať dáta do konkrétnej GA4 Property → konkrétneho Streamu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-oprávnenia-a-prepojenie",
      children: "4. Oprávnenia a prepojenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GA4 Property"
        }), ": prístup cez Admin → ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Správa prístupu k účtu / property"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GTM Container"
        }), ": prístup cez Admin → ", (0,jsx_runtime.jsx)(_components.em, {
          children: "User Management"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Najjednoduchšie: použi rovnaký Google účet (", (0,jsx_runtime.jsx)(_components.code, {
          children: "roman.kazicka@systemthinking.xyz"
        }), ") ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Admin v GA4 aj v GTM"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potom GTM môžeš bezpečne nastaviť, a ostatným užívateľom prideliť nižšie role (Viewer, Editor)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-typický-getting-started-postup",
      children: "5. Typický Getting Started postup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Vytvor GA4 Account a Property"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SystemThinking.sk"
            }), " → Property: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Class_STHDF"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vytvor Web Data Stream → dostaneš Measurement ID (G-XXXXXXX)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Vytvor GTM Container"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Názov: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Class_STHDF"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Platforma: Web"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["GTM ti vygeneruje kód (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<script>"
            }), " s gtm-XXXXXXX), vlož ho na web do ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<head>"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prepoj GA4 a GTM"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["V GTM vytvor nový Tag → ", (0,jsx_runtime.jsx)(_components.em, {
              children: "GA4 Configuration"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vlož Measurement ID (G-XXXXXXX) z Data Streamu"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Trigger: ", (0,jsx_runtime.jsx)(_components.em, {
              children: "All Pages"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Publikuj"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pridaj Eventy"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Napr. klik na tlačidlo „Registrácia“"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["GTM → Tag: ", (0,jsx_runtime.jsx)(_components.em, {
              children: "GA4 Event"
            }), " → Event Name: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "registration_click"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trigger: klik na element (CSS selector alebo ID tlačidla)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Publikuj"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Otestuj v Preview Mode"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["GTM má ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Preview"
            }), " mód (Tag Assistant) → vidíš, čo sa odosiela"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Skontroluj v GA4 → DebugView (reálne prichádzajú eventy)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-ascii-diagram",
      children: "6. ASCII Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "User action (klik, scroll, form)\n         │\n         ▼\n Google Tag Manager (gtm-XXXXXXX)\n    ├── Tag: GA4 Configuration (G-XXXXXXX)\n    └── Tag: GA4 Event (custom events)\n         │\n         ▼\n Google Analytics 4 Property (Class_STHDF)\n    └── Data Stream: Web\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-drawio-diagram",
      children: "6. Draw.io Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(32186)/* ["default"] */ .A) + "",
        children: "ga4_gtm_hierarchy_links.drawio"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(49218)/* ["default"] */ .A),
        alt: "GA4 GTM – hierarchy links diagram",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-odporúčanie-pre-teba",
      children: "🎯 Odporúčanie pre teba"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Account"
        }), ": SystemThinking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Properties"
        }), ": podľa projektov (Class_STHDF, LetItGrow, KNIFE…)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Streams"
        }), ": Web, neskôr iOS/Android"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GTM"
        }), ": 1x kontajner na každý projekt (Property)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prístup"
        }), ": rovnaký firemný Google účet (", (0,jsx_runtime.jsx)(_components.code, {
          children: "roman.kazicka@systemthinking.xyz"
        }), ") pre GA4 aj GTM"]
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

/***/ 49218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ga4_gtm_hierarchy_links-43125a371e2efdbbd1ccbba7c0465123.png");

/***/ })

}]);