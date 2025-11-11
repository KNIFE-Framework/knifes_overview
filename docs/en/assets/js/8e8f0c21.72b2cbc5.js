"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[3596],{

/***/ 2142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_readme_pre_zvedavych_md_8e8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000067-github-deployment-strategie-k-000067-readme-pre-zvedavych-md-8e8.json
const site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_readme_pre_zvedavych_md_8e8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000067-github-deployment-strategie/K000067-github-deployment-strategie","title":"GitHub Deployment Strategie - Pre Zvedavých","description":"-","source":"@site/docs/sk/knifes/K000067-github-deployment-strategie/K000067_ReadmePreZvedavych.md","sourceDirName":"sk/knifes/K000067-github-deployment-strategie","slug":"/sk/knifes/K000067-github-deployment-strategie/K000067-github-deployment-strategie","permalink":"/knifes_overview/en/sk/knifes/K000067-github-deployment-strategie/K000067-github-deployment-strategie","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/knifes_overview/en/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000067-github-deployment-strategie","guid":"c0804116-d26d-40ed-991c-e1aaeb6734d4","dao":"knife","title":"GitHub Deployment Strategie - Pre Zvedavých","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"docs","previous":{"title":"Naming Convention pre Subdomény","permalink":"/knifes_overview/en/sk/knifes/K000067-github-deployment-strategie/K000067-02"},"next":{"title":"K000067 Appendix – docusaurus.config.ts (ENV‑driven)","permalink":"/knifes_overview/en/sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/knifes/K000067-github-deployment-strategie/K000067_ReadmePreZvedavych.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000067-github-deployment-strategie',
	guid: 'c0804116-d26d-40ed-991c-e1aaeb6734d4',
	dao: 'knife',
	title: 'GitHub Deployment Strategie - Pre Zvedavých',
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
const contentTitle = 'GitHub Deployment Strategie - Pre Zvedavých';

const assets = {

};



const toc = [{
  "value": "3 kroky pre Branch Deploy (predvolené pre triedu)",
  "id": "3-kroky-pre-branch-deploy-predvolené-pre-triedu",
  "level": 2
}, {
  "value": "🔎 Porovnanie možností (jednoduché vysvetlenie)",
  "id": "-porovnanie-možností-jednoduché-vysvetlenie",
  "level": 2
}, {
  "value": "Pre zvedavých: Actions Deploy",
  "id": "pre-zvedavých-actions-deploy",
  "level": 2
}, {
  "value": "Poznámka o vlastnej doméne (len pre projekty)",
  "id": "poznámka-o-vlastnej-doméne-len-pre-projekty",
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
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "github-deployment-strategie---pre-zvedavých",
        children: "GitHub Deployment Strategie - Pre Zvedavých"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c0804116-d26d-40ed-991c-e1aaeb6734d4"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento návod je určený pre študentov, ktorí chcú rýchlo a jednoducho nasadiť svoj projekt pomocou GitHubu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kroky-pre-branch-deploy-predvolené-pre-triedu",
      children: "3 kroky pre Branch Deploy (predvolené pre triedu)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vytvorte vetvu"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vytvorte novú vetvu vo vašom repozitári, napríklad ", (0,jsx_runtime.jsx)(_components.code, {
            children: "deploy"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pushnite zmeny"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Nahrajte svoje zmeny do tejto vetvy pomocou príkazu:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git push origin deploy\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Skontrolujte nasadenie"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Po pushnutí zmeny sa automaticky spustí nasadenie a vaša stránka bude dostupná na GitHub Pages."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-porovnanie-možností-jednoduché-vysvetlenie",
      children: "🔎 Porovnanie možností (jednoduché vysvetlenie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "🌿 Branch Deploy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "⚙️ Actions Deploy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "🌐 Vlastná doména"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jednoduchosť"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "👍 Veľmi jednoduché"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🤓 Trochu zložitejšie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "😎 Nastavenie domény"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spoľahlivosť"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Spoľahlivé"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Veľmi spoľahlivé"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Závisí od domény"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre koho sa hodí"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🧑‍🎓 Začiatočníci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "👩‍💻 Pokročilejší používatelia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🏠 Projekty s vlastnou značkou"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vlastná doména"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-zvedavých-actions-deploy",
      children: "Pre zvedavých: Actions Deploy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak chcete mať väčšiu kontrolu nad nasadením, môžete použiť GitHub Actions. Tento spôsob umožňuje automatizovať nasadenie podľa vlastných potrieb a spúšťať ho napríklad pri každom pushi do hlavnej vetvy."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "poznámka-o-vlastnej-doméne-len-pre-projekty",
      children: "Poznámka o vlastnej doméne (len pre projekty)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak máte projekt, ktorý chcete nasadiť na vlastnú doménu, môžete si ju nastaviť cez GitHub Pages v nastaveniach repozitára. Pre triedové projekty to nie je potrebné. Pri výbere názvu domény dodrž ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/knifes_overview/en/sk/knifes/K000067-github-deployment-strategie/K000067-02",
        children: "naming konvenciu"
      }), " – nepoužívaj podtržník (", (0,jsx_runtime.jsx)(_components.code, {
        children: "_"
      }), "), iba písmená, čísla a pomlčky."]
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

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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


/***/ })

}]);