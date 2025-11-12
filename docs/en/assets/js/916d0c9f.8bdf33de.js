"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[273],{

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


/***/ }),

/***/ 8543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_knifes_overview_knife_overview_blog_md_916_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-knifes-overview-knife-overview-blog-md-916.json
const site_docs_sk_knifes_knifes_overview_knife_overview_blog_md_916_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG","title":"📰 KNIFE Overview – Blog","description":"","source":"@site/docs/sk/knifes/knifes_overview/KNIFE_Overview_Blog.md","sourceDirName":"sk/knifes/knifes_overview","slug":"/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG","permalink":"/knifes_overview/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-09","fm_version_comment":"","id":"KNIFE_OVERVIEW_BLOG","guid":"820c79f4-5378-4f12-bd5f-606f9a99dad7","dao":"","title":"📰 KNIFE Overview – Blog","description":"","author":"","authors":[],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-12","modified":"","status":"backlog","privacy":"public","rights_holder_content":"","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 <autor>","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"docs","previous":{"title":"KNIFES (SK)","permalink":"/knifes_overview/en/sk/knifes/"},"next":{"title":"📊 KNIFE Overview – Details","permalink":"/knifes_overview/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/knifes/knifes_overview/KNIFE_Overview_Blog.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-09',
	fm_version_comment: '',
	id: 'KNIFE_OVERVIEW_BLOG',
	guid: '820c79f4-5378-4f12-bd5f-606f9a99dad7',
	dao: '',
	title: '📰 KNIFE Overview – Blog',
	description: '',
	author: '',
	authors: [],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-12',
	modified: '',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: '',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 <autor>',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: '',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = '📰 KNIFE Overview – Blog';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
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
        id: "-knife-overview--blog",
        children: "📰 KNIFE Overview – Blog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "820c79f4-5378-4f12-bd5f-606f9a99dad7"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), "  · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "📰 Blog"
        })
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/knifes_overview/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
        children: "🗂 List"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/knifes_overview/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
        children: "📊 Details"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/knifes_overview/en/sk/knifes/",
        children: "↩️ KNIFES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000001"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000001-ea-modelovanie-a-motivacia/",
          children: "EA modelovanie a motivácia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000002"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000002-git-workflow-pre-ea-modely/",
          children: "Git workflow pre EA modely"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000003"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000003-libreoffice-python-integracia/",
          children: "LibreOffice + Python integrácia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000004"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000004-docker-pre-studentov-k12/",
          children: "Docker pre študentov (K12)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000005"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000005-bazi-pre-racionalne-duse/",
          children: "BaZi pre racionálne duše"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000006"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000006-timova-sprava-prav-v-gitea/",
          children: "Tímová správa práv v Gitea"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000007"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000007-helper-skript-na-obrazky-v-markdown/",
          children: "Helper skript na obrázky v Markdown"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000008"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000008-dcmm-a-dao-hodnota-leadershipu/",
          children: "DCMM a DAO – hodnota leadershipu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000009"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000009-linkedin-post-engine-ai-automatizacia/",
          children: "LinkedIn post engine – AI automatizácia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000010"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000010-openai-klient-vlastna-ai-komunikacia/",
          children: "OpenAI klient – vlastná AI komunikácia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000011"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000011-main-xba-sablona-pre-lo-basic/",
          children: "Main.xba šablóna pre LO Basic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000012"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000012-ea-workflow-add-in-pokrocile-sablony/",
          children: "EA Workflow Add-In – pokročilé šablóny"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000013"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000013-readonlycontrol-v-ea-workflow-add-in/",
          children: "ReadOnlyControl v EA – Workflow Add-In"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000014"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000014-manazer-kniznic-pre-lo-basic/",
          children: "Manažér knižníc pre LO Basic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000015"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000015-libreoffice-basic-python-migracia/",
          children: "LibreOffice Basic → Python migrácia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000016"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000016-helper-skript-pre-lo-symbolic-link/",
          children: "Helper skript pre LO symbolic link"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000017"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000017-ai-powered-terno-planner/",
          children: "AI-powered TERNO Planner"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000019"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000019-bazi-vypocty-algoritmus-hodiny-kalendar/",
          children: "BaZi výpočty – algoritmus, hodiny, kalendár"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000020"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000020-libreoffice-ako-komunitna-platforma/",
          children: "LibreOffice ako komunitná platforma"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000021"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000021-princip-udrzatelnosti-v-architekture/",
          children: "Princíp udržateľnosti v architektúre"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000022"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000022-terno-terapeuticke-formy-ucenia/",
          children: "TERNO – terapeutické formy učenia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000023"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000023-ai-interakcie-casova-os-a-emocie/",
          children: "AI interakcie – časová os a emócie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000024"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000024-onenote-ako-zdroj-metadat-pre-ai/",
          children: "OneNote ako zdroj metadát pre AI"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000025"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000025-kategorizacia-terno-podla-sdlc-a-7d/",
          children: "Kategorizácia TERNO podľa SDLC a 7D"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000027"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000027-git-for-dummies-central-concepts/",
          children: "Git For Dummies – Central Concepts"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000028"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000028-context-aware-system-ontology-approach/",
          children: "Context Aware System Ontology, Approach"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000029"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000029-prostredie-vyvojove-python-pre-lo/",
          children: "Prostredie vývojové python pre LO"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000030"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000030-pribeh-poznania-sdlc/",
          children: "Príbeh poznania SDLC"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000031"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000031-document-as-code-framework/",
          children: "Document-as-Code framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000032"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000032-enterprise-document-integrated-sdlc/",
          children: "Enterprise Document-integrated SDLC"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000033"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000033-smalltalk-ako-nastroj-flowu-a-kontextu/",
          children: "Smalltalk ako nástroj flowu a kontextu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000034"
        }), " — 2025-05-25 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000034-pracovno-financny-ekosystem/",
          children: "Pracovno, finančný ekosystém"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000035"
        }), " — 2025-05-26 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000035-context-aware-solutions-paradigma-solution/",
          children: "Context Aware Solutions / paradigma, solution"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000036"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000036-pracovno-financny-ekosystem/",
          children: "Pracovno, finančný ekosystém"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000037"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000037-context-aware-solutions-paradigma-solution/",
          children: "Context Aware Solutions / paradigma, solution"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000038"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000038-ako-si-vyrobit-automaticke-nastavovanie-ssl/",
          children: "Ako si vyrobit automaticke nastavovanie SSL"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000039"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000039-sementicke-a-kontextove-vyhladavanie-nad-github/",
          children: "Sementicke a kontextove vyhladavanie nad GitHUB"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000040"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000040-migracia-joomla-github-mkdocs/",
          children: "Migracia Joomla -->GitHUB MkDocs"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000041"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000041-github-education-framework/",
          children: "GitHUB Education Framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000042"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000042-singlepageapplication-webabased-desktop-app/",
          children: "SinglePageApplication – Webabased desktop app"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000043"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000043-kontrola-odpovede-studentov-pomocou-api-na-ai/",
          children: "Kontrola odpovedé študentov pomocou API na AI"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000044"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000044-onedrive-backup-to-external-disk-on-qnap/",
          children: "OneDrive backup to external disk on QNAP"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000045"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000045-zakladne-informacie-o-esg/",
          children: "Základné informácie o ESG"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000046"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000046-thunderbird-archive-export/",
          children: "Thunderbird – Archive-export"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000047"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000047-knife047-7s-cycle-of-meaningful-knowledge/",
          children: "KNIFE047 – 7S Cycle of Meaningful Knowledge"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000048"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000048-ai-agent-in-opengpt/",
          children: "AI – Agent in OpenGPT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000049"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000049-knife049-vyhladavac-nad-opengpt-historiou/",
          children: "KNIFE049 – Vyhľadávač nad OpenGPT históriou"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000050"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000050-open-gpt-vytvaranie-prompt-instructions/",
          children: "Open GPT, vytváranie prompt instructions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000051"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000051-google-analytics-fundamentals/",
          children: "Google analytics – Fundamentals"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000052"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000052-github-lms-framework/",
          children: "GitHub LMS Framework"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000053"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000053-framework-for-project-management-in-github/",
          children: "Framework for Project Management in GitHUB"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000054"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000054-docusaurus-advanced-deployment-pipeline/",
          children: "Docusaurus Advanced Deployment Pipeline"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000055"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000055-ako-obnovit-stav-z-minulosti/",
          children: "Ako obnoviť stav z minulosti?"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000056"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000056-central-panel-for-git-sdlc-git-management-makefile/",
          children: "Central Panel for GIT – SDLC Git Management Makefile"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000057"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000057-ai-agent-na-monitoroavanie-nakladov-opengpt/",
          children: "AI Agent na monitoroavanie nákladov OpenGPT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000058"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000058-ai-agent-na-monitoroavanie-nakladov-opengpt-od-pociatku-komunikacie/",
          children: "AI Agent na monitoroavanie nákladov OpenGPT od počiatku komunikácie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000059"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000059-stem-a-makerspace-ako-metodika-vzdelavania/",
          children: "STEM a Makerspace ako metodika vzdelávania"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000060"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000060-export-draw-io-diagramu-do-a4-png/",
          children: "Export Draw.io diagramu do A4 PNG"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000061"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000061-passkey-ako-bezpecnostny-koncept/",
          children: "Passkey ako bezpečnostný koncept"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000062"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000062-docusaurus-slugy-a-routing/",
          children: "K000062 – Docusaurus slugy a routing"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000063"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000063-automaticke-generovanie-knifes/",
          children: "Automatické generovanie KNIFES"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000064"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000064-ga4-gtn-utm/",
          children: "GA4, GTN, UTM"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000065"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000065-makefile-for-knife-ecosystem-for-mac-windows-linux/",
          children: "MAKEFILE for KNIFE Ecosystem for Mac,Windows, Linux"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000066"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000066-porovnanie-biznis-planov-github/",
          children: "Porovnanie biznis plánov GitHub"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000067"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000067-github-deployment-strategie/",
          children: "GitHub Deployment stratégie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000068"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000068-kruhovy-portret-v-gimp/",
          children: "Kruhový portrét v GIMP"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000069"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000069-kto-ma-pochvali-ak-sa-nepochvalim-sam/",
          children: "Kto ma pochváli, ak sa nepochválim sám?"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000070"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000070-ea-fundamentals/",
          children: "EA Fundamentals"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000071"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000071-7ds-seven-disciplines-for-successful-solutions/",
          children: "7Ds-Seven Disciplines for successful solutions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000072"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000072-apv-assets-perspectives-views-keep-your-aseests-in-order/",
          children: "APV-Assets-Perspectives-Views, Keep Your Aseests in Order"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000073"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000073-q12-twelve-quadrants-for-starting-business/",
          children: "Q12- Twelve quadrants for starting business"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000074"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000074-sdlc-solution-development-life-cycle/",
          children: "SDLC-Solution Development Life Cycle"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000075"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000075-lean-canvas/",
          children: "Lean canvas"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000076"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000076-caa-context-aware-approach-casy-context-aware-systems-caso-context-aware-solution/",
          children: "CAA- Context Aware Approach, CASY-Context Aware Systems, CASo-Context Aware Solution"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000077"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000077-knife047-7s-cycle-of-meaningful-knowledge/",
          children: "KNIFE047 – 7S Cycle of Meaningful Knowledge"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000078"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000078-language-as-a-bridge-ai-ako-most-medzi-jazykmi/",
          children: "Language as a Bridge (AI ako most medzi jazykmi)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000079"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne/",
          children: "Čo znamená slovo že je niečo idempotentné?"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000080"
        }), " — 2025-09-17 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000080-docusaurus-vs-github-pages-package-json/",
          children: "Docusaurus-vs-github-pages-package-json"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000081"
        }), " — 2025-09-24 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000081-transparentna-stabilna-infrastruktura-pre-sites/",
          children: "Transparentná -Stabilná infraštruktúra pre Sites"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000082"
        }), " — 2025-09-28 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000082-ako-urobit-text-v-md-atraktivnejsi-emoji/",
          children: "Ako urobiť text v MD atraktívnejší (emoji)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000083"
        }), " — 2025-09-24 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/",
          children: "Aktualizácia komponentov pre Docusaurus"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000084"
        }), " — 2025-09-25 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/",
          children: "Ako aktivovať na GitHube EDU benefity"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000086"
        }), " — 2025-10-22 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/",
          children: "Docusaurus-ID-a-jeho-pouzitie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000087"
        }), " — 2025-11-02 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000087-GitHub-Create-release/",
          children: "GitHub-Create Release"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000088"
        }), " — 2025-11-07 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000088-RCA-OBD-Wifi-Android/",
          children: "RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000089"
        }), " — 2025-11-07 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000089-SmartGit-Nastavenie/",
          children: "Kedy SSh a kedy HTTPS?"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000090"
        }), " — 2025-11-11 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/",
          children: "VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000091"
        }), " — 2025-11-11 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000091-Zrodenie-git-sveta/",
          children: "Krátka história Git – Linus Torvalds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REF-UAT-001"
        }), " — 2025-10-05 — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/knifes_overview/en/sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/",
          children: "Postup pre presun zmien z vetvy FIX do UAT"
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