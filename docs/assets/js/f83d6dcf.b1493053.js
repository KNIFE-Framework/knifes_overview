"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[4825],{

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

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_7_ds_01_d_1_management_02_strategy_docusaurus_guide_project_guide_md_f83_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-7-ds-01-d-1-management-02-strategy-docusaurus-guide-project-guide-md-f83.json
const site_docs_sk_7_ds_01_d_1_management_02_strategy_docusaurus_guide_project_guide_md_f83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_PROJECTGUIDE_57508A","title":"Docusaurus-Guide","description":"","source":"@site/docs/sk/7Ds/01.D1-Management/02.Strategy/Docusaurus-Guide/ProjectGuide.md","sourceDirName":"sk/7Ds/01.D1-Management/02.Strategy/Docusaurus-Guide","slug":"/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_PROJECTGUIDE_57508A","permalink":"/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_PROJECTGUIDE_57508A","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/tags/knife"},{"inline":true,"label":"7ds","permalink":"/tags/7-ds"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-05T09:52:55Z","fm_version_comment":"","id":"01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_PROJECTGUIDE_57508A","guid":"6e2d2a99-4fca-40c4-9eea-3ad82b3ec9ad","dao":"7ds","title":"Docusaurus-Guide","description":"","author":"Roman Kazička","authors":["{{AUTHOR}}"],"category":"","type":"","priority":"","tags":["knife","7ds"],"locale":"sk","created":"2025-11-05T09:52:55Z","modified":"","status":"draft","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"CAA/KNIFE","fm_reserved1":"","fm_reserved2":""},"sidebar":"docs","previous":{"title":"Docusaurus-Guide","permalink":"/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_TOKENS_CCB354"},"next":{"title":"02.Strategy","permalink":"/sk/7Ds/D1-Management/Strategy/01_D1-MANAGEMENT_02_STRATEGY_KNIFE_GITHUB_CHEATSHEET_AAC7A7"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/7Ds/01.D1-Management/02.Strategy/Docusaurus-Guide/ProjectGuide.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-05T09:52:55Z',
	fm_version_comment: '',
	id: '01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_PROJECTGUIDE_57508A',
	guid: '6e2d2a99-4fca-40c4-9eea-3ad82b3ec9ad',
	dao: '7ds',
	title: 'Docusaurus-Guide',
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
const contentTitle = 'Project Guide - Docusaurus static HTML';

const assets = {

};



const toc = [{
  "value": "1. Introduction",
  "id": "1-introduction",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 3
}, {
  "value": "Scope",
  "id": "scope",
  "level": 3
}, {
  "value": "Structure",
  "id": "structure",
  "level": 3
}, {
  "value": "2. Deployment Guide",
  "id": "2-deployment-guide",
  "level": 2
}, {
  "value": "Default Deployment",
  "id": "default-deployment",
  "level": 3
}, {
  "value": "Worktree Deployment (Manual)",
  "id": "worktree-deployment-manual",
  "level": 3
}, {
  "value": "Notes",
  "id": "notes",
  "level": 3
}, {
  "value": "3. Troubleshooting",
  "id": "3-troubleshooting",
  "level": 2
}, {
  "value": "Problem: <code>not a git repository</code>",
  "id": "problem-not-a-git-repository",
  "level": 3
}, {
  "value": "Problem: <code>Invalid username or token</code>",
  "id": "problem-invalid-username-or-token",
  "level": 3
}, {
  "value": "Problem: Missing language completeness",
  "id": "problem-missing-language-completeness",
  "level": 3
}, {
  "value": "General Tips",
  "id": "general-tips",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
        id: "project-guide---docusaurus-static-html",
        children: "Project Guide - Docusaurus static HTML"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baf0a510-01c9-40d8-b8fe-e78d4dbddbbe"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-introduction",
      children: "1. Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Welcome to the project guide.\nThis document provides an overview of the purpose, scope, and structure of the repository."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The goal of this repository is to serve as a knowledge base and framework for creating, managing, and deploying Docusaurus-based documentation projects."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multilingual documentation (SK/EN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for default and custom deployment methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guides and automation scripts for easier use by students and collaborators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " — Documentation content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/"
        }), " — Source files for custom components and pages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "static/"
        }), " — Static assets like images and files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Makefile"
        }), " — Commands for build and deployment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-deployment-guide",
      children: "2. Deployment Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to deploy the documentation site to GitHub Pages."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-deployment",
      children: "Default Deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the build command:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm run build\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Deploy to GitHub Pages:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "GIT_USER=YourGitHubUsername npm run deploy\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This will use the default Docusaurus deploy script and push to the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gh-pages"
          }), " branch."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "worktree-deployment-manual",
      children: "Worktree Deployment (Manual)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This method avoids GitHub Actions usage and pushes directly from your local machine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create or reset the worktree for the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages"
        }), " branch."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy the build output into the worktree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit and push."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure your ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GIT_USER"
        }), " environment variable is set before deploying."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For private repositories, use a personal access token with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-troubleshooting",
      children: "3. Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "problem-not-a-git-repository",
      children: ["Problem: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "not a git repository"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cause:"
      }), " The deployment directory is missing a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".git"
      }), " folder.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Recreate the worktree or clone the repository again."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "problem-invalid-username-or-token",
      children: ["Problem: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Invalid username or token"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cause:"
      }), " GitHub no longer supports password authentication.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use SSH or a personal access token.\nExample:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git remote set-url origin https://<username>@github.com/<org>/<repo>.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-missing-language-completeness",
      children: "Problem: Missing language completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cause:"
      }), " Some Docusaurus configurations enforce 100% translation coverage.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Disable strict mode in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), " by setting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "i18n: {\n  defaultLocale: 'sk',\n  locales: ['sk', 'en'],\n  localeConfigs: {\n    en: { label: 'English' },\n    sk: { label: 'Slovensky' }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-tips",
      children: "General Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your build locally with:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run serve\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep dependencies updated."
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