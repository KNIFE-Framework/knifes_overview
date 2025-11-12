"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[1771],{

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

/***/ 9688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_7_ds_01_d_1_management_05_work_activities_evidence_2025_202509_20250917_knifes_duplicity_readme_md_d39_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-7-ds-01-d-1-management-05-work-activities-evidence-2025-202509-20250917-knifes-duplicity-readme-md-d39.json
const site_docs_sk_7_ds_01_d_1_management_05_work_activities_evidence_2025_202509_20250917_knifes_duplicity_readme_md_d39_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/7Ds/D1-Management/WorkActivitiesEvidence/2025/202509/Knifes-Duplicity/01_D1-MANAGEMENT_05_WORKACTIVITIESEVIDENCE_2025_202509_20250917-KNIFES-DUPLICITY_README_12571F","title":"20250917-Knifes-Duplicity","description":"","source":"@site/docs/sk/7Ds/01.D1-Management/05.WorkActivitiesEvidence/2025/202509/20250917-Knifes-Duplicity/README.md","sourceDirName":"sk/7Ds/01.D1-Management/05.WorkActivitiesEvidence/2025/202509/20250917-Knifes-Duplicity","slug":"/sk/7Ds/D1-Management/WorkActivitiesEvidence/2025/202509/Knifes-Duplicity/","permalink":"/en/sk/7Ds/D1-Management/WorkActivitiesEvidence/2025/202509/Knifes-Duplicity/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/en/tags/knife"},{"inline":true,"label":"7ds","permalink":"/en/tags/7-ds"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-05T09:52:55Z","fm_version_comment":"","id":"01_D1-MANAGEMENT_05_WORKACTIVITIESEVIDENCE_2025_202509_20250917-KNIFES-DUPLICITY_README_12571F","guid":"7154f826-bf83-478b-9436-caf907e99519","dao":"7ds","title":"20250917-Knifes-Duplicity","description":"","author":"Roman Kazička","authors":["{{AUTHOR}}"],"category":"","type":"","priority":"","tags":["knife","7ds"],"locale":"sk","created":"2025-11-05T09:52:55Z","modified":"","status":"draft","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"CAA/KNIFE","fm_reserved1":"","fm_reserved2":""},"sidebar":"docs","previous":{"title":"05.WorkActivitiesEvidence","permalink":"/en/sk/7Ds/D1-Management/WorkActivitiesEvidence/"},"next":{"title":"06.Reportings","permalink":"/en/sk/7Ds/D1-Management/Reportings/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/7Ds/01.D1-Management/05.WorkActivitiesEvidence/2025/202509/20250917-Knifes-Duplicity/README.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-05T09:52:55Z',
	fm_version_comment: '',
	id: '01_D1-MANAGEMENT_05_WORKACTIVITIESEVIDENCE_2025_202509_20250917-KNIFES-DUPLICITY_README_12571F',
	guid: '7154f826-bf83-478b-9436-caf907e99519',
	dao: '7ds',
	title: '20250917-Knifes-Duplicity',
	description: '',
	author: 'Roman Kazička',
	authors: [
		'{{AUTHOR}}'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'knife',
		'7ds'
	],
	locale: 'sk',
	created: '2025-11-05T09:52:55Z',
	modified: '',
	status: 'draft',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: 'CAA/KNIFE',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'KNIFE De-dupe Report';

const assets = {

};



const toc = [{
  "value": "Použitie",
  "id": "použitie",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "knife-de-dupe-report",
        children: "KNIFE De-dupe Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b8514b71-e9d7-4e0e-b3ca-dbd2536f423c"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "použitie",
      children: "Použitie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skopíruj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/knife-dedupe-report.mjs"
        }), " do rootu svojho repozitára."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spusť:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "node scripts/knife-dedupe-report.mjs\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pozri si výstup v ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knife_dedupe_report.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Voliteľné (Makefile cieľ):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".PHONY: verify-dupes\nverify-dupes:\n\tnode scripts/knife-dedupe-report.mjs || true\n"
      })
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