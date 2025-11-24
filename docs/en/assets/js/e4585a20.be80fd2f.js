"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[8543],{

/***/ 7815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GitHub-Sites-Concepts-clientSolution-3773de34c9e068c783e38cd16201cb51.png");

/***/ }),

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

/***/ 36884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000081_transparentna_stabilna_infrastruktura_pre_sites_index_md_e45_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000081-transparentna-stabilna-infrastruktura-pre-sites-index-md-e45.json
const site_docs_sk_knifes_k_000081_transparentna_stabilna_infrastruktura_pre_sites_index_md_e45_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites/K000081","title":"K000081 – Transparentná -Stabilná infraštruktúra pre Sites","description":"Počas práce s GitHub a Pages je potrebné mať zladené prostredie na klientovi a na serveri. Lokál je závislý od OS, od verzií vývojových nástrojov. Ideálne by bolo, keby existovalo stabilné, opakovateľné prostredie pre vytvorenie lokálneho prostredia, bez ohľadu na operačný systém na klientovi – Windows, Mac, Linux.","source":"@site/docs/sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites/index.md","sourceDirName":"sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites","slug":"/sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites/","permalink":"/en/sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/tags/knife"},{"inline":true,"label":"images","permalink":"/en/tags/images"}],"version":"current","sidebarPosition":81,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000081","guid":"02921a34-5a83-4713-bafa-1be560a98d18","dao":"knife","title":"K000081 – Transparentná -Stabilná infraštruktúra pre Sites","description":"Počas práce s GitHub a Pages je potrebné mať zladené prostredie na klientovi a na serveri. Lokál je závislý od OS, od verzií vývojových nástrojov. Ideálne by bolo, keby existovalo stabilné, opakovateľné prostredie pre vytvorenie lokálneho prostredia, bez ohľadu na operačný systém na klientovi – Windows, Mac, Linux.","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":["KNIFE","images"],"locale":"sk","created":"2025-09-24","modified":"2025-09-24","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","date":"2025-09-24","sidebar_position":81,"sidebar_label":"K000081 – Transparentná -Stabilná infraštruktúra pre Sites"},"sidebar":"tutorialSidebar","previous":{"title":"K000080 – Docusaurus-vs-github-pages-package-json","permalink":"/en/sk/knifes/K000080-docusaurus-vs-github-pages-package-json/"},"next":{"title":"K000082 – Ako urobiť text v MD atraktívnejší (emoji)","permalink":"/en/sk/knifes/K000082-ako-urobit-text-v-md-atraktivnejsi-emoji/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000081',
	guid: '02921a34-5a83-4713-bafa-1be560a98d18',
	dao: 'knife',
	title: 'K000081 – Transparentná -Stabilná infraštruktúra pre Sites',
	description: 'Počas práce s GitHub a Pages je potrebné mať zladené prostredie na klientovi a na serveri. Lokál je závislý od OS, od verzií vývojových nástrojov. Ideálne by bolo, keby existovalo stabilné, opakovateľné prostredie pre vytvorenie lokálneho prostredia, bez ohľadu na operačný systém na klientovi – Windows, Mac, Linux.',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [
		'KNIFE',
		'images'
	],
	locale: 'sk',
	created: '2025-09-24',
	modified: '2025-09-24',
	status: 'backlog',
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
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	date: '2025-09-24',
	sidebar_position: '81',
	sidebar_label: 'K000081 – Transparentná -Stabilná infraštruktúra pre Sites'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "⚠️ Identifikované problémy",
  "id": "️-identifikované-problémy",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "🧰 Public Templates (in progress)",
  "id": "-public-templates-in-progress",
  "level": 2
}, {
  "value": "Porovnanie rôznych statických generátorov, nielen pre GitHub",
  "id": "porovnanie-roznych-statickych-generatorov-nielen-pre-github",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    img: "img",
    li: "li",
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
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "knife-k000081--transparentná--stabilná-infraštruktúra-pre-sites",
      children: "KNIFE K000081 – Transparentná -Stabilná infraštruktúra pre Sites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "02921a34-5a83-4713-bafa-1be560a98d18"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počas práce s GitHub a Pages je potrebné mať zladené prostredie na klientovi a na serveri."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lokál je závislý od OS, od verzií vývojových nástrojov. Ideálne by bolo, keby existovalo stabilné, opakovateľné prostredie pre vytvorenie lokálneho prostredia, bez ohľadu na operačný systém na klientovi – Windows, Mac, Linux."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak padneme do pasce lokálnej infraštruktúry, tak je veľká pravdepodobnosť, že nebudeme rieč'šiť obsah samotný, ale našu infraštruktúru pre generátor statických HTML stránok."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infraštruktúra nie je našim cieľom"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preto hľadám spôsob, ktorý mi zabezpečí stabilné prostredie na klientovi pre rôzne generátory statických napríklad pre stránok pre HitGub Docusaurus, (Docusaurus, Docsys, ... ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#porovnanie-roznych-statickych-generatorov-nielen-pre-github",
          children: "Pozri tabuľku porovnania"
        }), ".)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-identifikované-problémy",
      children: "⚠️ Identifikované problémy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "na Macu, ale to bude všade podobné je pre účely lokálneho testovania potrebné inštalovať rôzne generátory statických HTML stránok, podľa preferencie používateľa."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub má vlastný web server, ktorý rozpoznáva HTML stránky."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak sa mu do jeho priestoru dostanú pretransformované md súboru z repozitára, tak ich zobrazí."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generovanie takzvaného buildu sa deje rôznymi spôsobmi, na lokáli, na serveri pomocou Actions (CI/CD)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ja som narazil na nekonečné syntaktické a sémantické problémy pri práci s Docusaurus generátorom", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keď sa mi niečo podarilo rozchodiť na lokále, tak na serveri to padalo,chyby typu 'break links', 'link cannot be resolved' ma viedli k zúfalstvu"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Základná architektúra je popísaná v KNIFE_027 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/knifes/K000027-git-for-dummies-central-concepts/",
        children: "KNIFE_027-K000027-git-for-dummies-central-concepts"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hľadám riešenie, ktoré by bolo nezávislé od operačného systému"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "v danom operačnom systéme by som si nainštaloval systém s označením 301 pre Windows, 302 pre Mac, 303 pre Linux."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detaily viď obrázok"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "OS system agnostic riešenie",
        src: (__webpack_require__(7815)/* ["default"] */ .A) + "",
        width: "814",
        height: "1583"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Existuje jednoduché transparentné riešenie?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vyskúšam preveriť rôzne riešenia"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Od komunity cassandragargoyle produkt ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://portunix.ai/",
            children: "https://portunix.ai/"
          }), " ((", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/cassandragargoyle/Portunix",
            children: "https://github.com/cassandragargoyle/Portunix"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "#TODO - doplniť"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-public-templates-in-progress",
      children: "🧰 Public Templates (in progress)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📁 Repositories for Git-based documentation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "porovnanie-roznych-statickych-generatorov-nielen-pre-github",
      children: "Porovnanie rôznych statických generátorov, nielen pre GitHub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repozitár"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pages URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Markdown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-md-demo",
              children: "docs-md-demo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✖ ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(bez Pages)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čistý Markdown (README + odkazy), bez buildu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub Pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-sites-demo",
              children: "docs-sites-demo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitdocs-lab.github.io/docs-sites-demo/",
              children: "https://gitdocs-lab.github.io/docs-sites-demo/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " priečinok + Pages aktivovaný"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MkDocs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-mkdocs-demo",
              children: "docs-mkdocs-demo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitdocs-lab.github.io/docs-mkdocs-demo/",
              children: "https://gitdocs-lab.github.io/docs-mkdocs-demo/"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(ak buildnuté)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mkdocs.yml"
            }), " + buildnutý výstup"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-docusaurus-demo",
              children: "docs-docusaurus-demo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitdocs-lab.github.io/docs-docusaurus-demo/",
              children: "https://gitdocs-lab.github.io/docs-docusaurus-demo/"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(po deploy)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Viacjazyčný React-based dokumentátor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hugo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-hugo-demo",
              children: "docs-hugo-demo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitdocs-lab.github.io/docs-hugo-demo/",
              children: "https://gitdocs-lab.github.io/docs-hugo-demo/"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(po deploy)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-rýchly web s peknými témami"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docsy (Hugo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-hugo-docsy-example",
              children: "docs-hugo-docsy-example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitdocs-lab.github.io/docs-hugo-docsy-example/",
              children: "https://gitdocs-lab.github.io/docs-hugo-docsy-example/"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(po deploy)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technická dokumentácia s Hugo + Docsy témou"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VitePress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/GitDocs-Lab/docs-vitepress-demo",
              children: "docs-vitepress-demo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitdocs-lab.github.io/docs-vitepress-demo/",
              children: "https://gitdocs-lab.github.io/docs-vitepress-demo/"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(po deploy)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elegantný Vue-based dokumentačný generátor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
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