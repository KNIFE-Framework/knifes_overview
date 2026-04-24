"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[22355],{

/***/ 4825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_github_classroom_gh_class_onboarding_md_047_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-github-classroom-gh-class-onboarding-md-047.json
const site_docs_en_help_howto_github_classroom_gh_class_onboarding_md_047_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/github-classroom/GH-Class-Onboarding","title":"GitHub Classroom – Onboarding študentov","description":"Tento návod popisuje proces, ako dostať študentov z e‑mailu až k ich vlastnému repozitáru na GitHube.","source":"@site/docs/en/help/howto/github-classroom/GH-Class-Onboarding.md","sourceDirName":"en/help/howto/github-classroom","slug":"/en/help/howto/github-classroom/GH-Class-Onboarding","permalink":"/en/help/howto/github-classroom/GH-Class-Onboarding","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GitHub Classroom – Onboarding študentov"},"sidebar":"tutorialSidebar","previous":{"title":"Onboarding pre učiteľov (SK)","permalink":"/en/help/howto/github-classroom/GH-Class-Onboarding-Teachers"},"next":{"title":"GH-Class-Sync — Ako synchronizovať assignmenty v GitHub Classroom","permalink":"/en/help/howto/github-classroom/GH-Class-Sync-B"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/github-classroom/GH-Class-Onboarding.md


const frontMatter = {
	title: 'GitHub Classroom – Onboarding študentov'
};
const contentTitle = 'GitHub Classroom – Onboarding študentov';

const assets = {

};



const toc = [{
  "value": "1. Predpoklady (učiteľ)",
  "id": "1-predpoklady-učiteľ",
  "level": 2
}, {
  "value": "2. Vytvorenie individuálneho assignmentu (student repo)",
  "id": "2-vytvorenie-individuálneho-assignmentu-student-repo",
  "level": 2
}, {
  "value": "3. Ako sa študent pripojí",
  "id": "3-ako-sa-študent-pripojí",
  "level": 2
}, {
  "value": "4. Ako učiteľ nájde repozitáre študentov",
  "id": "4-ako-učiteľ-nájde-repozitáre-študentov",
  "level": 2
}, {
  "value": "5. Čo robí študent vo svojom repozitári",
  "id": "5-čo-robí-študent-vo-svojom-repozitári",
  "level": 2
}, {
  "value": "6. Minimálne inštrukcie pre študentov (skrátená verzia)",
  "id": "6-minimálne-inštrukcie-pre-študentov-skrátená-verzia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "github-classroom--onboarding-študentov",
        children: "GitHub Classroom – Onboarding študentov"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento návod popisuje proces, ako dostať študentov z e‑mailu až k ich vlastnému repozitáru na GitHube."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-predpoklady-učiteľ",
      children: "1. Predpoklady (učiteľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["máš vytvorenú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Classroom triedu"
        }), " (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF 2025/2026"
        }), "),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["máš pripravený ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "template repozitár"
        }), " (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025_sthdf_class_template"
        }), "),"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vieš sa prihlásiť do GitHub Classroom s učiteľským účtom,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["máš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zoznam študentov"
        }), " (meno, priezvisko, e‑mail)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Poznámka: v tejto verzii používame štandardný onboarding GitHubu – študenti sa prihlasujú vlastným GitHub účtom a ", (0,jsx_runtime.jsx)(_components.em, {
          children: "repozitáre dostávajú názvy podľa ClassRoomu"
        }), ", nie podľa tvojho interného ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025_ST_XXX"
        }), " prefixu. Tie si budeš mapovať inde (napr. v KNIFE alebo vlastnom CSV)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-vytvorenie-individuálneho-assignmentu-student-repo",
      children: "2. Vytvorenie individuálneho assignmentu (student repo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V GitHub Classroome klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New assignment → Individual assignment"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyplň:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignment name"
            }), " – napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "about-me"
            }), " alebo ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sthdf-2025-student-repo"
            }), ","]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Repository prefix"
            }), " – napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2025-sthdf-"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(GitHub potom vytvorí repozitáre typu ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2025-sthdf-roman-kazicka"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyber ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "template repository"
        }), " – napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025_sthdf_class_template"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rozhodni o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "visibility"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Private"
            }), " – odporúčané pre semestrálnu prácu,"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Public"
            }), " – len ak to máš na to dobrý dôvod."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Potvrď vytvorenie assignmentu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-ako-sa-študent-pripojí",
      children: "3. Ako sa študent pripojí"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V Classroom otvor nový assignment a klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Share assignment"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skopíruj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "invite link"
        }), " (jediný URL)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pošli tento odkaz študentom (Teams, e‑mail, LMS…)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Študent potom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Klikne na link,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["prihlási sa svojim ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub účtom"
        }), " (ak nemá, vytvorí si ho),"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "potvrdí vstup do triedy / assignmentu,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub mu vytvorí jeho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vlastný repozitár"
        }), " z template."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Dôležité: Každý študent dostane ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vlastný fork-like repozitár"
        }), ", ty tam máš práva učiteľa (owner/maintainer cez Classroom)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-ako-učiteľ-nájde-repozitáre-študentov",
      children: "4. Ako učiteľ nájde repozitáre študentov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V GitHub Classroome:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor konkrétny assignment."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V časti ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Students"
        }), " uvidíš zoznam študentov a ich repozitárov."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kliknutím na názov repozitára sa dostaneš priamo na GitHub."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Praktický tip:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Môžeš si urobiť vlastnú tabuľku (CSV/KNIFE), kde si zapíšeš mapovanie:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GitHub repo name → interný kód študenta (2025_ST_001)"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-čo-robí-študent-vo-svojom-repozitári",
      children: "5. Čo robí študent vo svojom repozitári"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typický prvý deň:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clone"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Open in GitHub Desktop"
        }), " / alebo priamo práca cez web editor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyplní súbory podľa template (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "about-me.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-summary.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commity posiela na hlavný branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "), ty ich vidíš rovnako ako v bežnom repozitári."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-minimálne-inštrukcie-pre-študentov-skrátená-verzia",
      children: "6. Minimálne inštrukcie pre študentov (skrátená verzia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Môžeš im poslať niečo ako:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "1. Klikni na tento link (Classroom invite).\n2. Prihlás sa alebo vytvor GitHub účet.\n3. Po vytvorení repozitára klikni na „Open on GitHub“.\n4. Repo si naklonuj do svojho PC alebo pracuj cez web.\n5. Pozri si súbor HELP (help/...) – tam máš ďalšie kroky.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💬 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Small Talk Moment:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Onboarding je ako prvý deň v škole – keď majú všetci správne menovky na laviciach, semester je o polovicu menej chaotický."]
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


/***/ })

}]);