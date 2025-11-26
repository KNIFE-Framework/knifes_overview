"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[57366],{

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

/***/ 96692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_students_index_md_86e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-students-index-md-86e.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_students_index_md_86e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/index","title":"ST INDEX","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025/students/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025/students","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-26T06:59:52.422915+00:00","fm_version_comment":"","guid":"7eae3d31-097c-4c40-8154-6a151ccaaa1b","dao":"class_sthdf_dashboard","title":"ST INDEX","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-26 07:59","modified":"2025-11-26 07:59","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"operations","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/projects/PRJ030/sdlc/operation/operations"},"next":{"title":"ST001","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST001/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025/students/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-26T06:59:52.422915+00:00',
	fm_version_comment: '',
	guid: '7eae3d31-097c-4c40-8154-6a151ccaaa1b',
	dao: 'class_sthdf_dashboard',
	title: 'ST INDEX',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-26 07:59',
	modified: '2025-11-26 07:59',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST001/",
        children: "ST001"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST002/",
        children: "ST002"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST003/",
        children: "ST003"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST004/",
        children: "ST004"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST005/",
        children: "ST005"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST006/",
        children: "ST006"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST007/",
        children: "ST007"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST008/",
        children: "ST008"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST009/",
        children: "ST009"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST010/",
        children: "ST010"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST011/",
        children: "ST011"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST012/",
        children: "ST012"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST013/",
        children: "ST013"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST014/",
        children: "ST014"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST015/",
        children: "ST015"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST016/",
        children: "ST016"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST017/",
        children: "ST017"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST018/",
        children: "ST018"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST019/",
        children: "ST019"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST020/",
        children: "ST020"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST021/",
        children: "ST021"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST022/",
        children: "ST022"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST023/",
        children: "ST023"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST024/",
        children: "ST024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST025/",
        children: "ST025"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST026/",
        children: "ST026"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST027/",
        children: "ST027"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST028/",
        children: "ST028"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST029/",
        children: "ST029"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST030/",
        children: "ST030"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST031/",
        children: "ST031"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST032/",
        children: "ST032"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST033/",
        children: "ST033"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST034/",
        children: "ST034"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST035/",
        children: "ST035"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST036/",
        children: "ST036"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST037/",
        children: "ST037"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST038/",
        children: "ST038"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST039/",
        children: "ST039"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST040/",
        children: "ST040"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST041/",
        children: "ST041"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST042/",
        children: "ST042"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST043/",
        children: "ST043"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST044/",
        children: "ST044"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST045/",
        children: "ST045"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST046/",
        children: "ST046"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST047/",
        children: "ST047"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST048/",
        children: "ST048"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST049/",
        children: "ST049"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST050/",
        children: "ST050"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST051/",
        children: "ST051"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST052/",
        children: "ST052"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST053/",
        children: "ST053"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST054/",
        children: "ST054"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST055/",
        children: "ST055"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST056/",
        children: "ST056"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST057/",
        children: "ST057"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST058/",
        children: "ST058"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST059/",
        children: "ST059"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.li, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025/students/ST060/",
        children: "ST060"
      })
    }), "\n"]
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