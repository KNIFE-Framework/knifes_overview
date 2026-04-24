"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[61327],{

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

/***/ 29056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_github_classroom_class_room_assistents_md_117_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-github-classroom-class-room-assistents-md-117.json
const site_docs_en_help_howto_github_classroom_class_room_assistents_md_117_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/github-classroom/ClassRoomAssistents","title":"Ako pracovať s asistentmi v GitHub Classroom","description":"Tento dokument vysvetľuje, ako do triedy v GitHub Classroom pridať asistentov (Teaching Assistants – TA), aké majú práva a ako ich používať počas semestra.","source":"@site/docs/en/help/howto/github-classroom/ClassRoomAssistents.md","sourceDirName":"en/help/howto/github-classroom","slug":"/en/help/howto/github-classroom/ClassRoomAssistents","permalink":"/en/help/howto/github-classroom/ClassRoomAssistents","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Classroom – Úvod a navigácia","permalink":"/en/help/howto/github-classroom/"},"next":{"title":"GitHub Classroom – Onboarding pre študentov","permalink":"/en/help/howto/github-classroom/ClassRoomOnboarding"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/github-classroom/ClassRoomAssistents.md


const frontMatter = {};
const contentTitle = 'Ako pracovať s asistentmi v GitHub Classroom';

const assets = {

};



const toc = [{
  "value": "🎯 Úloha asistenta v predmete STHDF",
  "id": "-úloha-asistenta-v-predmete-sthdf",
  "level": 2
}, {
  "value": "🧩 Krok 1 — Kde pridať asistenta",
  "id": "-krok-1--kde-pridať-asistenta",
  "level": 2
}, {
  "value": "🛡️ Krok 2 — Aké práva má asistent?",
  "id": "️-krok-2--aké-práva-má-asistent",
  "level": 2
}, {
  "value": "✔️ Prístup ku všetkým repozitárom triedy",
  "id": "️-prístup-ku-všetkým-repozitárom-triedy",
  "level": 3
}, {
  "value": "✔️ Možnosť:",
  "id": "️-možnosť",
  "level": 3
}, {
  "value": "❗ Asistent <strong>nemôže</strong>:",
  "id": "-asistent-nemôže",
  "level": 3
}, {
  "value": "🏗️ Krok 3 — Odporúčaný workflow pre asistenta",
  "id": "️-krok-3--odporúčaný-workflow-pre-asistenta",
  "level": 2
}, {
  "value": "1. Po onboardingu študentov:",
  "id": "1-po-onboardingu-študentov",
  "level": 3
}, {
  "value": "2. Po vytvorení projektov:",
  "id": "2-po-vytvorení-projektov",
  "level": 3
}, {
  "value": "3. Počas semestra:",
  "id": "3-počas-semestra",
  "level": 3
}, {
  "value": "🔧 Krok 4 — Ako asistent pristupuje k repozitárom",
  "id": "-krok-4--ako-asistent-pristupuje-k-repozitárom",
  "level": 2
}, {
  "value": "💬 Small Talk Moment",
  "id": "-small-talk-moment",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ako-pracovať-s-asistentmi-v-github-classroom",
        children: "Ako pracovať s asistentmi v GitHub Classroom"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento dokument vysvetľuje, ako do triedy v GitHub Classroom pridať ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "asistentov"
      }), " (Teaching Assistants – TA), aké majú práva a ako ich používať počas semestra."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Asistenti môžu byť pridaní ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kedykoľvek"
      }), ", aj po vytvorení triedy, assignmentov alebo aj počas onboardingu študentov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-úloha-asistenta-v-predmete-sthdf",
      children: "🎯 Úloha asistenta v predmete STHDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asistent má mať prehľad o:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "študentských repozitároch (individuálne assignmenty),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "projektových repozitároch (group assignment),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hodnotení odovzdaných úloh,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "komunikácii cez Issues,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "feedbacku pre študentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrole dokumentácie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-krok-1--kde-pridať-asistenta",
      children: "🧩 Krok 1 — Kde pridať asistenta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Otvor GitHub Classroom:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://classroom.github.com",
            children: "https://classroom.github.com"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vyber svoju triedu (napr. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "STHDF 2025/2026"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["V pravom hornom rohu klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prejdi na sekciu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Teachers"
          }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Additional Teachers"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pridaj GitHub username asistenta."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "ℹ️ Username musí byť existujúci GitHub účet."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-krok-2--aké-práva-má-asistent",
      children: "🛡️ Krok 2 — Aké práva má asistent?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asistent automaticky získava:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-prístup-ku-všetkým-repozitárom-triedy",
      children: "✔️ Prístup ku všetkým repozitárom triedy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(študentské aj projektové)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-možnosť",
      children: "✔️ Možnosť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hodnotiť zadania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "komentovať kód,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvárať Issues,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrolovať projekty,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sledovať progres tímov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spravovať skupiny v group assignmentoch,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vidieť výsledky a štatistiky assignmentov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-asistent-nemôže",
      children: ["❗ Asistent ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nemôže"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mazať triedu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "meniť hlavného učiteľa,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nastavovať GitHub Classroom rolu „owner“."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-krok-3--odporúčaný-workflow-pre-asistenta",
      children: "🏗️ Krok 3 — Odporúčaný workflow pre asistenta"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-po-onboardingu-študentov",
      children: "1. Po onboardingu študentov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skontrolovať, či majú všetci funkčné repozitáre,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overiť, či sa správne vygenerovali ich STHDF identity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-po-vytvorení-projektov",
      children: "2. Po vytvorení projektov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sledovať rozdelenie do tímov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pomáhať tímom s prvými commitmi,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dozerať na štruktúru dokumentácie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-počas-semestra",
      children: "3. Počas semestra:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "priebežne komentovať Issues,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dávať spätnú väzbu ku KNIFE príspevkom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sledovať aktivitu študentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pomáhať s Docusaurus buildami."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-krok-4--ako-asistent-pristupuje-k-repozitárom",
      children: "🔧 Krok 4 — Ako asistent pristupuje k repozitárom"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po pridaní asistenta do triedy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Classroom mu automaticky udelí prístup ku každému novému repozitáru."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prístup sa udeľuje aj spätne — ku všetkým existujúcim repozitárom v triede."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asistent teda nemusí byť pridávaný ručne cez GitHub."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-small-talk-moment",
      children: "💬 Small Talk Moment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "„Asistent v Classroom je ako druhý pilot — nemusí štartovať raketu, ale vždy vie zabrániť pádu.“ 🚀😄"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak chceš, pripravím aj ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Asistent Onboarding Checklist"
      }), " na jednu stranu, ktorý dáš svojim TA na úvod hodiny."]
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