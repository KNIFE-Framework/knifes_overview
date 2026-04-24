"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[60721],{

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

/***/ 91642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_github_classroom_gh_class_sync_b_md_726_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-github-classroom-gh-class-sync-b-md-726.json
const site_docs_en_help_howto_github_classroom_gh_class_sync_b_md_726_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/github-classroom/GH-Class-Sync-B","title":"GH-Class-Sync — Ako synchronizovať assignmenty v GitHub Classroom","description":"Tento dokument vysvetľuje, ako funguje synchronizácia assignmentov medzi:","source":"@site/docs/en/help/howto/github-classroom/GH-Class-Sync-B.md","sourceDirName":"en/help/howto/github-classroom","slug":"/en/help/howto/github-classroom/GH-Class-Sync-B","permalink":"/en/help/howto/github-classroom/GH-Class-Sync-B","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Classroom – Onboarding študentov","permalink":"/en/help/howto/github-classroom/GH-Class-Onboarding"},"next":{"title":"GitHub Classroom – Sync Assignment (aktualizácia šablóny)","permalink":"/en/help/howto/github-classroom/GH-Class-Sync"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/github-classroom/GH-Class-Sync-B.md


const frontMatter = {};
const contentTitle = 'GH-Class-Sync — Ako synchronizovať assignmenty v GitHub Classroom';

const assets = {

};



const toc = [{
  "value": "1️⃣ Kedy potrebuješ Sync?",
  "id": "1️⃣-kedy-potrebuješ-sync",
  "level": 2
}, {
  "value": "2️⃣ Dôležité pravidlá",
  "id": "2️⃣-dôležité-pravidlá",
  "level": 2
}, {
  "value": "✔️ 1. Template sa mení v tvojom <em>template</em> repozitári",
  "id": "️-1-template-sa-mení-v-tvojom-template-repozitári",
  "level": 3
}, {
  "value": "✔️ 2. Assignment používa <em>kópiu</em> templatu",
  "id": "️-2-assignment-používa-kópiu-templatu",
  "level": 3
}, {
  "value": "✔️ 3. Každý študent dostane <strong>fork</strong> assignmentu",
  "id": "️-3-každý-študent-dostane-fork-assignmentu",
  "level": 3
}, {
  "value": "✔️ 4. Sync vytvorí <strong>PR do každého študentského repo</strong>",
  "id": "️-4-sync-vytvorí-pr-do-každého-študentského-repo",
  "level": 3
}, {
  "value": "3️⃣ Postup pri Sync",
  "id": "3️⃣-postup-pri-sync",
  "level": 2
}, {
  "value": "🟦 Krok 1 — Uprav template repo",
  "id": "-krok-1--uprav-template-repo",
  "level": 3
}, {
  "value": "🟩 Krok 2 — Prejdi do GitHub Classroom",
  "id": "-krok-2--prejdi-do-github-classroom",
  "level": 3
}, {
  "value": "🟧 Krok 3 — Študenti vidia PR v svojom repozitári",
  "id": "-krok-3--študenti-vidia-pr-v-svojom-repozitári",
  "level": 3
}, {
  "value": "🟥 Krok 4 — Konflikty",
  "id": "-krok-4--konflikty",
  "level": 3
}, {
  "value": "4️⃣ Ako sa to správa pre nových študentov?",
  "id": "4️⃣-ako-sa-to-správa-pre-nových-študentov",
  "level": 2
}, {
  "value": "5️⃣ Limitácie",
  "id": "5️⃣-limitácie",
  "level": 2
}, {
  "value": "6️⃣ Odporúčaný workflow",
  "id": "6️⃣-odporúčaný-workflow",
  "level": 2
}, {
  "value": "Pre učiteľa:",
  "id": "pre-učiteľa",
  "level": 3
}, {
  "value": "Pre študenta:",
  "id": "pre-študenta",
  "level": 3
}, {
  "value": "🔥 Small Talk",
  "id": "-small-talk",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
        id: "gh-class-sync--ako-synchronizovať-assignmenty-v-github-classroom",
        children: "GH-Class-Sync — Ako synchronizovať assignmenty v GitHub Classroom"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento dokument vysvetľuje, ako funguje synchronizácia assignmentov medzi:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template repozitárom"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Assignmentom v GitHub Classroom"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Študentskými repozitármi (forkmi)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-kedy-potrebuješ-sync",
      children: "1️⃣ Kedy potrebuješ Sync?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Synchronizácia je potrebná, keď:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opravíš chybu v template,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "doplníš novú zložku alebo súbor,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zmeníš obsah, ktorý majú mať všetci študenti."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-dôležité-pravidlá",
      children: "2️⃣ Dôležité pravidlá"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "️-1-template-sa-mení-v-tvojom-template-repozitári",
      children: ["✔️ 1. Template sa mení v tvojom ", (0,jsx_runtime.jsx)(_components.em, {
        children: "template"
      }), " repozitári"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "️-2-assignment-používa-kópiu-templatu",
      children: ["✔️ 2. Assignment používa ", (0,jsx_runtime.jsx)(_components.em, {
        children: "kópiu"
      }), " templatu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "️-3-každý-študent-dostane-fork-assignmentu",
      children: ["✔️ 3. Každý študent dostane ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fork"
      }), " assignmentu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "️-4-sync-vytvorí-pr-do-každého-študentského-repo",
      children: ["✔️ 4. Sync vytvorí ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PR do každého študentského repo"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-postup-pri-sync",
      children: "3️⃣ Postup pri Sync"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-krok-1--uprav-template-repo",
      children: "🟦 Krok 1 — Uprav template repo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uprav napr.:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "content/docs/sk/...\ncore/templates/...\nmk/...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Commitni a pushni do main."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-krok-2--prejdi-do-github-classroom",
      children: "🟩 Krok 2 — Prejdi do GitHub Classroom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor Classroom → Assignment"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Sync assignments”"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Github Classroom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "porovná template HEAD commit s assignment HEAD,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvorí PR pre každého študenta."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-krok-3--študenti-vidia-pr-v-svojom-repozitári",
      children: "🟧 Krok 3 — Študenti vidia PR v svojom repozitári"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PR sa volá napr.:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Classroom Update] Sync from assignment template\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Študent môže:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge"
        }), " (odporúčané)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Review changes"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["alebo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolve conflicts"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-krok-4--konflikty",
      children: "🟥 Krok 4 — Konflikty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Konflikty vzniknú, ak študent menil súbor, ktorý template aktualizuje."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riešenie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "študent otvorí PR,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub zobrazí konflikt,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "môže zvoliť “Resolve conflict”."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-ako-sa-to-správa-pre-nových-študentov",
      children: "4️⃣ Ako sa to správa pre nových študentov?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Noví študenti dostanú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "automaticky najnovšiu verziu templatu"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "žiadne sync PR nie je potrebné"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-limitácie",
      children: "5️⃣ Limitácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sync nefunguje pre:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zmazané súbory (tie zostanú u študenta),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "veľké konflikty cez viac riadkov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "submoduly,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "binárne súbory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-odporúčaný-workflow",
      children: "6️⃣ Odporúčaný workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-učiteľa",
      children: "Pre učiteľa:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktualizovať template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otestovať build"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V Classroome → kliknúť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sync assignment"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skontrolovať pár náhodných PR"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-študenta",
      children: "Pre študenta:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvoriť PR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prečítať zmeny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pokračovať v práci"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-small-talk",
      children: "🔥 Small Talk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "„Sync je ako pripomienka v manželstve — ak to ignoruješ, čaká ťa konflikt.“ 😄"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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