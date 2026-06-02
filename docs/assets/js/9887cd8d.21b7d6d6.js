"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[69238],{

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

/***/ 40503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-People-ProfitsFromAPV-dd34cfd6fb0ac4b57bbc65a2f51bade6.png");

/***/ }),

/***/ 59685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000107_taxonomy_and_ontology_index_md_988_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000107-taxonomy-and-ontology-index-md-988.json
const site_docs_sk_knifes_k_000107_taxonomy_and_ontology_index_md_988_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000107_TaxonomyAndOntology/K000107_SK","title":"K000107 – Taxonómia a ontológia v SDLC","description":"Prečo každá veda, ktorá sa chce nazývať vedou, buduje pojmový slovník — a prečo informatika stále dobieha. Praktické rámce: APV, SFIA, TBM a ich využitie naprieč SDLC.","source":"@site/docs/sk/knifes/K000107_TaxonomyAndOntology/index.md","sourceDirName":"sk/knifes/K000107_TaxonomyAndOntology","slug":"/sk/knifes/K000107_TaxonomyAndOntology/","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Taxonomy","permalink":"/doc-tags/taxonomy"},{"inline":true,"label":"Ontology","permalink":"/doc-tags/ontology"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"APV","permalink":"/doc-tags/apv"},{"inline":true,"label":"SFIA","permalink":"/doc-tags/sfia"},{"inline":true,"label":"TBM","permalink":"/doc-tags/tbm"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"ContextAwareApproach","permalink":"/doc-tags/context-aware-approach"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"K000107_SK","guid":"1c5d26e7-c7b7-4698-9ccc-ce8e3f2b155e","dao":"knife","title":"K000107 – Taxonómia a ontológia v SDLC","description":"Prečo každá veda, ktorá sa chce nazývať vedou, buduje pojmový slovník — a prečo informatika stále dobieha. Praktické rámce: APV, SFIA, TBM a ich využitie naprieč SDLC.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["Taxonomy","Ontology","SDLC","APV","SFIA","TBM","AI","EnterpriseArchitecture","CAA","ContextAwareApproach"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"draft","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000106 – SSOT a TSSOT: Koľko právd treba na úspešné riešenie?","permalink":"/sk/knifes/K000106-SSOTandTSSOT/"},"next":{"title":"K000107 – APV: Assets, Perspectives, Views","permalink":"/sk/knifes/K000107_TaxonomyAndOntology/K000107-APV-index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000107_TaxonomyAndOntology/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000107_SK',
	guid: '1c5d26e7-c7b7-4698-9ccc-ce8e3f2b155e',
	dao: 'knife',
	title: 'K000107 – Taxonómia a ontológia v SDLC',
	description: 'Prečo každá veda, ktorá sa chce nazývať vedou, buduje pojmový slovník — a prečo informatika stále dobieha. Praktické rámce: APV, SFIA, TBM a ich využitie naprieč SDLC.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'Taxonomy',
		'Ontology',
		'SDLC',
		'APV',
		'SFIA',
		'TBM',
		'AI',
		'EnterpriseArchitecture',
		'CAA',
		'ContextAwareApproach'
	],
	locale: 'sk',
	created: '2026-06-02 00:00',
	modified: '2026-06-02 00:00',
	status: 'draft',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Roman Kazicka',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka'
};
const contentTitle = 'KNIFE – Taxonómia a ontológia v SDLC';

const assets = {

};



const toc = [{
  "value": "Kedy informatika dobehne prírodné vedy?",
  "id": "kedy-informatika-dobehne-prírodné-vedy",
  "level": 2
}, {
  "value": "🎯 Čo to rieši",
  "id": "-čo-to-rieši",
  "level": 2
}, {
  "value": "🧩 Pokryté rámce",
  "id": "-pokryté-rámce",
  "level": 2
}, {
  "value": "📜 Logaritmická akcelerácia",
  "id": "-logaritmická-akcelerácia",
  "level": 2
}, {
  "value": "✅ Zhrnutie",
  "id": "-zhrnutie",
  "level": 2
}, {
  "value": "Most k ďalším témam",
  "id": "most-k-ďalším-témam",
  "level": 3
}, {
  "value": "Zdroje",
  "id": "zdroje",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "knife--taxonómia-a-ontológia-v-sdlc",
        children: "KNIFE – Taxonómia a ontológia v SDLC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kedy-informatika-dobehne-prírodné-vedy",
      children: "Kedy informatika dobehne prírodné vedy?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-to-rieši",
      children: "🎯 Čo to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pamätáš si na hodiny biológie?\nDruh, poddruh, rod, čeľaď, rad..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každá disciplína, ktorá sa chce nazývať vedou, buduje pojmový slovník.\nAristoteles začal klasifikovať živé organizmy okolo roku 350 pred Kr.\nLinné to dokončil do systému v roku 1735 — 11 strán, ktoré zmenili vedu.\nOd Aristotela po Linnéa: takmer 2 000 rokov systematickej práce."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Každodenná realita v SDLC",
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Každý deň sa praktici naprieč SDLC stretávajú s pojmovou nejednoznačnosťou.\nTo isté slovo. Päť interpretácií.\nPäť interpretácií. Jeden zlyhávajúci projekt."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Toto nie je technologický problém. Je to problém slovníka."
      })]
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
        src: (__webpack_require__(40503)/* ["default"] */ .A),
        alt: "Zákazník vs. IT dodávateľ – bez komunikácie niet porozumenia, bez porozumenia niet dôvery",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagram vyššie ukazuje komplexnosť typického vzťahu IT služieb.\nZákazník vľavo: Board, CFO, Process Owners, IT manažment, Prevádzka.\nIT dodávateľ vpravo: CEO, Operations Managers, Account Executive, desiatky procesných rolí."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nie každý musí taxonómiu vytvárať.\nKaždý sa na ňu však musí spoľahnúť."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pokryté-rámce",
      children: "🧩 Pokryté rámce"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento článok je rozdelený do samostatných sekcií:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rámec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo rieši"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detaily"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "APV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slovník pre aktíva riešenia — čo existuje, z čej perspektívy, čo vidia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./K000107-APV-index",
              children: "K000107 – APV"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SFIA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slovník pre ľudí a zručnosti naprieč IT rolami"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./K000107-SFIA-index",
              children: "K000107 – SFIA"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TBM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slovník IT nákladov prepájajúci technológiu s obchodnou hodnotou"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./K000107-TBM-index",
              children: "K000107 – TBM"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "APV v troch otázkach",
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Pred tým, než začneš budovať akýkoľvek model alebo dokument v SDLC:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Aké ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "aktívum"
          }), " opisujeme?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Z čej ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "perspektívy"
          }), " sa naň pozeráme?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Aký ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "pohľad"
          }), " tento stakeholder skutočne potrebuje vidieť?"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-logaritmická-akcelerácia",
      children: "📜 Logaritmická akcelerácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Informatika má 80 rokov. Od Aristotela po Linnéa to trvalo približne 2 000 rokov.\nAle pozri sa na tempo zmien:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prechod"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trvanie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kontext"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1. → 2. priemyselná revolúcia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 rokov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Para → elektrina a hromadná výroba"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2. → 3."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80 rokov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elektrina → počítače a automatizácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3. → 4."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 rokov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Počítače → Industry 4.0, IoT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4. → masívne nasadenie AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 rokov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry 4.0 → generatívna AI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skracuje sa logaritmicky. Dnes to môžu byť už mesiace."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Naliehavosť je reálna: AI nepracuje na intuícii.\nNakŕm ju pojmovým chaosom a reprodukuje ten chaos — rýchlo a sebavedome.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kvalita tvojej taxonómie priamo určuje kvalitu výstupov AI."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "AI bez taxonómie",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "AI zosilňuje to, čo dostane.\nAk je slovník SDLC naprieč rolami a fázami nekonzistentný, AI bude konzistentne zosilňovať túto nekonzistentnosť — rýchlo a vo veľkom."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-zhrnutie",
      children: "✅ Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Taxonómia a ontológia v SDLC nie sú akademické koncepty.\nSú predpokladom pre každú organizáciu, ktorá chce:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Efektívne komunikovať naprieč rolami a fázami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merať to, na čom záleží"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budovať AI systémy, ktoré produkujú spoľahlivé výstupy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APV poskytuje rámec pre slovník aktív riešenia.\nSFIA poskytuje rámec pre slovník ľudí a zručností.\nTBM poskytuje rámec pre slovník nákladov a hodnoty."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Žiadny z nich nevyžaduje začínať od nuly.\nVšetky vyžadujú organizačný záväzok k spoločnému jazyku."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "CAA prepojenie",
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Toto priamo nadväzuje na CAA komunikačný reťazec z ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000103-CAA_IN_SDLC/",
          children: "K000103"
        }), ":\nBez Komunikácie → niet Porozumenia\nBez Porozumenia → niet Dôvery\nBez Dôvery → niet Spolupráce\nBez Spolupráce → niet Synergie\nBez Synergie → niet Úspechu"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Taxonómia je infraštruktúra Komunikácie."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "most-k-ďalším-témam",
      children: "Most k ďalším témam"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Taxonómia ti hovorí, čo slová znamenajú.\nKERNARO ukazuje, ako AI vie v praxi navigovať v tomto slovníku — pozri ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "K000104"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bez spoločného slovníka nemôžeš merať lead time.\nQRM ukazuje, ako toto meranie využiť na zrýchlenie dodávky — pozri ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000108-QRM/",
        children: "K000108 – Quick Response Manufacturing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.britannica.com/biography/Carolus-Linnaeus",
          children: "https://www.britannica.com/biography/Carolus-Linnaeus"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.visionlearning.com/en/library/Biology/2/Taxonomy-I/70/",
          children: "https://www.visionlearning.com/en/library/Biology/2/Taxonomy-I/70/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://sfia-online.org",
          children: "https://sfia-online.org"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.tbmcouncil.org",
          children: "https://www.tbmcouncil.org"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://quality-one.com/8d/",
          children: "https://quality-one.com/8d/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://rajansuri.com",
          children: "https://rajansuri.com"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.yarken.com/home",
          children: "https://www.yarken.com/home"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
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