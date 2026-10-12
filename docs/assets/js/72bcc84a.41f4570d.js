"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[69365],{

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

/***/ 92385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000002_git_workflow_pre_ea_modely_index_md_72b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000002-git-workflow-pre-ea-modely-index-md-72b.json
const site_docs_sk_knifes_k_000002_git_workflow_pre_ea_modely_index_md_72b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000002-git-workflow-pre-ea-modely/K000002","title":"K000002 – Git workflow pre EA modely","description":"Multirelease stratégie, LemonTree, merge politiky","source":"@site/docs/sk/knifes/K000002-git-workflow-pre-ea-modely/index.md","sourceDirName":"sk/knifes/K000002-git-workflow-pre-ea-modely","slug":"/sk/knifes/K000002-git-workflow-pre-ea-modely/","permalink":"/sk/knifes/K000002-git-workflow-pre-ea-modely/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/doc-tags/knife"},{"inline":true,"label":"git","permalink":"/doc-tags/git"},{"inline":true,"label":"ea","permalink":"/doc-tags/ea"},{"inline":true,"label":"lemontree","permalink":"/doc-tags/lemontree"}],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000002","guid":"6cf87ac0-1644-4134-8c67-8e61da2dca78","dao":"knife","title":"K000002 – Git workflow pre EA modely","description":"Multirelease stratégie, LemonTree, merge politiky","author":"Roman Kazicka","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":["KNIFE","git","ea","lemontree"],"locale":"sk","created":"2025-09-17","modified":"2025-09-17","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","date":"2025-09-17","sidebar_position":2,"sidebar_label":"K000002 – Git workflow pre EA modely"},"sidebar":"tutorialSidebar","previous":{"title":"SK_KNIFES_HOME – KNIFES (SK)","permalink":"/sk/knifes/"},"next":{"title":"K000003 – LibreOffice + Python integrácia","permalink":"/sk/knifes/K000003-libreoffice-python-integracia/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000002-git-workflow-pre-ea-modely/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000002',
	guid: '6cf87ac0-1644-4134-8c67-8e61da2dca78',
	dao: 'knife',
	title: 'K000002 – Git workflow pre EA modely',
	description: 'Multirelease stratégie, LemonTree, merge politiky',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazička',
		''
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [
		'KNIFE',
		'git',
		'ea',
		'lemontree'
	],
	locale: 'sk',
	created: '2025-09-17',
	modified: '2025-09-17',
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
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	date: '2025-09-17',
	sidebar_position: '2',
	sidebar_label: 'K000002 – Git workflow pre EA modely'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "🎯 Čo tu bude",
  "id": "-čo-tu-bude",
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
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "knife-k000002--git-workflow-pre-ea-modely",
      children: "KNIFE K000002 – Git workflow pre EA modely"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "6cf87ac0-1644-4134-8c67-8e61da2dca78"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enterprise-architect"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lemontree"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tutorial"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["🚧 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rozpracované — pracujeme na obsahu."
        }), "\nKompletný návod vzniká popri prednáške STHDF (október 2026)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Čoskoro."
      }), " Zatiaľ sú funkčné kroky v README repozitára s modelom:\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/06-STH-Projects/ea_model_sthdf_2026-2027",
          children: "ea_model_sthdf_2026-2027"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n  P[\"PARENT model<br/>(main)\"] --> A[\"Študent A<br/>(vetva ST0XX-a)\"]\n  P --> B[\"Študent B<br/>(vetva ST0XX-b)\"]\n  A -->|\"PR + LemonTree merge\"| P\n  B -->|\"PR + LemonTree merge\"| P"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-tu-bude",
      children: "🎯 Čo tu bude"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stiahnutie ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".qea"
        }), " modelu z GitHubu a otvorenie v Enterprise Architect."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vlastná vetva a zmena len vo vlastnom balíku."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit, push a Pull Request."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trojcestný merge v LemonTree: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "parent"
        }), " (spoločný predok), ", (0,jsx_runtime.jsx)(_components.em, {
          children: "ours"
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: "theirs"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pravidlá, ktoré držia konflikty malé, a čo robiť, keď sa niečo pokazí."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "English version:"
      }), " K000002 (EN)."]
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