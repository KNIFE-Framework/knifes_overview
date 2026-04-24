"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[3662],{

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

/***/ 54649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_github_classroom_git_hub_class_update_md_be0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-github-classroom-git-hub-class-update-md-be0.json
const site_docs_en_help_howto_github_classroom_git_hub_class_update_md_be0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/github-classroom/GitHub-Class-Update","title":"Ako aktualizovať templaty v GitHub Classroom","description":"Tento dokument vysvetľuje, ako správne aktualizovať templaty v GitHub Classroom a ako zabezpečiť, aby študenti dostali zmeny.","source":"@site/docs/en/help/howto/github-classroom/GitHub-Class-Update.md","sourceDirName":"en/help/howto/github-classroom","slug":"/en/help/howto/github-classroom/GitHub-Class-Update","permalink":"/en/help/howto/github-classroom/GitHub-Class-Update","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Troubleshooting (SK)","permalink":"/en/help/howto/github-classroom/GH-Class-Troubleshooting"},"next":{"title":"🌱 HOWTO – Vytvorenie novej 7Ds inštancie","permalink":"/en/help/howto/new-7ds"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/github-classroom/GitHub-Class-Update.md


const frontMatter = {};
const contentTitle = 'Ako aktualizovať templaty v GitHub Classroom';

const assets = {

};



const toc = [{
  "value": "🧠 Základný princíp",
  "id": "-základný-princíp",
  "level": 2
}, {
  "value": "Ako na to:",
  "id": "ako-na-to",
  "level": 3
}, {
  "value": "Čo to spraví:",
  "id": "čo-to-spraví",
  "level": 3
}, {
  "value": "Výhody:",
  "id": "výhody",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "ako-aktualizovať-templaty-v-github-classroom",
        children: "Ako aktualizovať templaty v GitHub Classroom"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento dokument vysvetľuje, ako správne aktualizovať templaty v GitHub Classroom a ako zabezpečiť, aby študenti dostali zmeny."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-základný-princíp",
      children: "🧠 Základný princíp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pri vytvorení assignmentu si Classroom vytvorí KÓPIU templatu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študentské repozitáre už nie sú prepojené s templatom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zmeny v templati sa prenášajú iba aktívnym zásahom učiteľa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-spôsob-a--sync-assignments-odporúčaný",
      children: "🥇 Spôsob A — „Sync assignments“ (odporúčaný)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Classroom obsahuje funkciu, ktorá automaticky vytvorí Pull Request do každého študentského repozitára."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-na-to",
      children: "Ako na to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor Classroom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyber assignment"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sync assignments"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-to-spraví",
      children: "Čo to spraví:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Porovná template HEAD so študentskými repozitármi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vygeneruje PR do každého repozitára"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študent (alebo učiteľ) PR mergne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výhody",
      children: "Výhody:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bezpečné"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auditovateľné"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nestráca sa história"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automaticky rieši konflikty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-spôsob-b--ručný-merge-pokročilý",
      children: "🥈 Spôsob B — Ručný merge (pokročilý)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Klonuj študentský repo."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pridaj remote templatu:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git remote add template https://github.com/ORG/TEMPLATE_REPO.git\ngit fetch template\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Porovnaj:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git diff template/main..main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge alebo cherry-pick:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git merge template/main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git push\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-spôsob-c--nevhodné-tvorba-nového-assignmentu",
      children: "🧨 Spôsob C — Nevhodné: tvorba nového assignmentu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto spôsobí:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stratu histórie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nefunkčné Classroom štatistiky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reset hodnotení"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Použiť len ak študenti ešte nezačali pracovať."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-odporúčaný-postup-pre-sthdf",
      children: "📌 Odporúčaný postup pre STHDF"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template dolaďovať postupne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assignment vytvoriť až keď je template stabilný"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Aktualizácie posielať cez ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sync assignments"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-príprava-ďalších-dokumentov",
      children: "🎓 Príprava ďalších dokumentov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TeacherGuide_TemplateSync.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StudentGuide_HowToMergeTeacherUpdates.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatizované screenshoty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audity diffs cez CLI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak chceš, môžem ich pripraviť ako ďalší krok."
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