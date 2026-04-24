"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[38601],{

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

/***/ 83499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_help_howto_github_classroom_class_room_onboarding_md_16a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-help-howto-github-classroom-class-room-onboarding-md-16a.json
const site_docs_en_help_howto_github_classroom_class_room_onboarding_md_16a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/help/howto/github-classroom/ClassRoomOnboarding","title":"GitHub Classroom – Onboarding pre študentov","description":"Vitaj v kurze System Thinking in IT & Digital Fabrication (STHDF)!","source":"@site/docs/en/help/howto/github-classroom/ClassRoomOnboarding.md","sourceDirName":"en/help/howto/github-classroom","slug":"/en/help/howto/github-classroom/ClassRoomOnboarding","permalink":"/en/help/howto/github-classroom/ClassRoomOnboarding","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GitHub Classroom – Onboarding pre študentov"},"sidebar":"tutorialSidebar","previous":{"title":"Ako pracovať s asistentmi v GitHub Classroom","permalink":"/en/help/howto/github-classroom/ClassRoomAssistents"},"next":{"title":"Ako pracovať s projektmi v GitHub Classroom (Group Assignments)","permalink":"/en/help/howto/github-classroom/ClassRoomProjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/help/howto/github-classroom/ClassRoomOnboarding.md


const frontMatter = {
	title: 'GitHub Classroom – Onboarding pre študentov'
};
const contentTitle = 'GitHub Classroom – Onboarding pre študentov';

const assets = {

};



const toc = [{
  "value": "1. Čo potrebuješ pred začiatkom?",
  "id": "1-čo-potrebuješ-pred-začiatkom",
  "level": 2
}, {
  "value": "2. Ako vstúpiť do kurzu (najdôležitejšia časť)",
  "id": "2-ako-vstúpiť-do-kurzu-najdôležitejšia-časť",
  "level": 2
}, {
  "value": "Keď klikneš na link:",
  "id": "keď-klikneš-na-link",
  "level": 3
}, {
  "value": "3. Ako si sklonuješ svoj repozitár",
  "id": "3-ako-si-sklonuješ-svoj-repozitár",
  "level": 2
}, {
  "value": "macOS / Linux",
  "id": "macos--linux",
  "level": 3
}, {
  "value": "Windows (MSYS2 / Git Bash)",
  "id": "windows-msys2--git-bash",
  "level": 3
}, {
  "value": "4. Prvé spustenie lokálneho webu (Docusaurus)",
  "id": "4-prvé-spustenie-lokálneho-webu-docusaurus",
  "level": 2
}, {
  "value": "Potom spustíš lokálny web:",
  "id": "potom-spustíš-lokálny-web",
  "level": 3
}, {
  "value": "5. Vytvorenie vlastnej STHDF identity (POVINNÝ krok)",
  "id": "5-vytvorenie-vlastnej-sthdf-identity-povinný-krok",
  "level": 2
}, {
  "value": "macOS / Linux",
  "id": "macos--linux-1",
  "level": 3
}, {
  "value": "Windows",
  "id": "windows",
  "level": 3
}, {
  "value": "6. Ako odovzdávaš úlohy",
  "id": "6-ako-odovzdávaš-úlohy",
  "level": 2
}, {
  "value": "7. Riešenie problémov",
  "id": "7-riešenie-problémov",
  "level": 2
}, {
  "value": "❌ „Permission denied (publickey)“",
  "id": "-permission-denied-publickey",
  "level": 3
}, {
  "value": "❌ „npm: command not found“",
  "id": "-npm-command-not-found",
  "level": 3
}, {
  "value": "❌ „Nothing appears on localhost:3000“",
  "id": "-nothing-appears-on-localhost3000",
  "level": 3
}, {
  "value": "8. Mini-checklist pre štart",
  "id": "8-mini-checklist-pre-štart",
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
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "github-classroom--onboarding-pre-študentov",
        children: "GitHub Classroom – Onboarding pre študentov"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vitaj v kurze ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "System Thinking in IT & Digital Fabrication (STHDF)"
      }), "!", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Tento krátky návod ti ukáže, ako sa pripojiť do GitHub Classroom, vytvoriť svoj repozitár a začať pracovať na svojich úlohách."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["💬 ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["Neboj sa – celý postup je jednoduchý.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "GitHub Classroom je ako vstupná brána: klikneš, otvorí sa ti miesto, kde budeš pracovať celý semester."]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-čo-potrebuješ-pred-začiatkom",
      children: "1. Čo potrebuješ pred začiatkom?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub účet"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "použi svoj osobný GitHub účet"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ak nemáš, vytvor si nový na ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com",
              children: "https://github.com"
            }), " (trvá to 30 sekúnd)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Laptop / PC"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Základné nástroje nainštalované lokálne:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Git"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Node.js (LTS)"
            }), " – pre lokálny Docusaurus web"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Python 3"
            }), " – len pre pokročilejšiu prácu s KNIFE/STHDF"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ℹ️ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Nepotrebuješ žiadny špeciálny školský GitHub účet ani STU login."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-ako-vstúpiť-do-kurzu-najdôležitejšia-časť",
      children: "2. Ako vstúpiť do kurzu (najdôležitejšia časť)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na prednáške alebo v Teams dostaneš ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "special invite link"
      }), ", napr.:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://classroom.github.com/a/xxxxxxx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keď-klikneš-na-link",
      children: "Keď klikneš na link:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak nie si prihlásený → GitHub ťa požiada o login."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Classroom sa opýta, či sa chceš pridať do triedy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potvrdíš ➝ tvoja osobná „pracovná zóna“ sa začne vytvárať."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po pár sekundách dostaneš súkromný repozitár:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SystemThinking/2025_STHDF_<tvoj_github_username>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento repozitár je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "len tvoj"
      }), " a bude slúžiť na:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spracovanie úloh,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentáciu KNIFE výstupov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "projekt STHDF,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "osobné poznámky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prezentácie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-ako-si-sklonuješ-svoj-repozitár",
      children: "3. Ako si sklonuješ svoj repozitár"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Otvoriť v GitHub UI → zelené tlačidlo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "macos--linux",
      children: "macOS / Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/SystemThinking/2025_STHDF_tvojUser.git\ncd 2025_STHDF_tvojUser\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-msys2--git-bash",
      children: "Windows (MSYS2 / Git Bash)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/SystemThinking/2025_STHDF_tvojUser.git\ncd 2025_STHDF_tvojUser\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-prvé-spustenie-lokálneho-webu-docusaurus",
      children: "4. Prvé spustenie lokálneho webu (Docusaurus)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento projekt obsahuje modernú dokumentáciu postavenú na Docusauruse."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po prvom clone je potrebné nainštalovať balíky:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd publishing/docusaurus\nnpm install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "potom-spustíš-lokálny-web",
      children: "Potom spustíš lokálny web:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A otvoríš:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:3000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["🔄 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Po úprave .md súborov sa stránka automaticky aktualizuje."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-vytvorenie-vlastnej-sthdf-identity-povinný-krok",
      children: "5. Vytvorenie vlastnej STHDF identity (POVINNÝ krok)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý študent dostane repozitár s názvom:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2025_STHDF_<tvoj_github_username>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Aby si vedel pracovať s vlastným priestorom (KNIFE, poznámky, projekt), vytvoríš si ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STHDF inštanciu"
      }), " – tá definuje tvoj „študentský profil“ v dokumentácii."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "macos--linux-1",
      children: "macOS / Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd core/scripts/tools\npython3 new_item_instance.py \\\n  --type sthdf \\\n  --config ../../config/sthdf/sthdf_instance_config.yml \\\n  --id <tvoj_github_username> \\\n  --title \"STHDF – <tvoj_github_username>\" \\\n  --exists fail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows",
      children: "Windows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd core/scripts/tools\npython new_item_instance.py \\\n  --type sthdf \\\n  --config ../../config/sthdf/sthdf_instance_config.yml \\\n  --id <tvoj_github_username> \\\n  --title \"STHDF – <tvoj_github_username>\" \\\n  --exists fail\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ℹ️ ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["ID už nie je vo formáte 2025_ST_XXX.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "GitHub Classroom prideľuje repozitáre podľa tvojho GitHub username.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Preto aj tvoja STHDF identita používa rovnaké ID."]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po spustení skriptu reštartuj ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run start"
      }), ". V ľavom menu pribudnú časti:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Moje poznámky"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Moje KNIFE"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Môj projekt"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-ako-odovzdávaš-úlohy",
      children: "6. Ako odovzdávaš úlohy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Všetko prebieha cez tvoj súkromný repozitár:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "commit → push"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub automatiky sleduje progres"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "každý commit je dôkaz tvojej činnosti"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nie sú žiadne uploady cez Teams.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Všetko ide cez GitHub."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-riešenie-problémov",
      children: "7. Riešenie problémov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-permission-denied-publickey",
      children: "❌ „Permission denied (publickey)“"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["– máš chýbajúci SSH key", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ odporúčame pracovať cez ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTPS"
      }), ", nie SSH"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-npm-command-not-found",
      children: "❌ „npm: command not found“"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– nemáš nainštalovaný Node.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-nothing-appears-on-localhost3000",
      children: "❌ „Nothing appears on localhost:3000“"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["– Docusaurus nebol spustený (", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run start"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– alebo sa nachádzaš v zlom priečinku"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-mini-checklist-pre-štart",
      children: "8. Mini-checklist pre štart"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Mám GitHub účet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Klikol som na assignment link"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Mám svoj súkromný repozitár"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Urobil som ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Spustil som ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Otvoril som lokálny web"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Vytvoril som vlastnú STHDF identitu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Naučil som sa commitovať a pushovať"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-small-talk-moment",
      children: "💬 Small Talk Moment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: ["GitHub Classroom je ako vstupný kľúč do tvorivého laboratória.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vstúpiš dnu, a zrazu je všetko tvoje – projekty, nápady, aj malé chybičky krásy.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "To všetko je súčasť cesty."]
        }), " 😊"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak niečo nefunguje, obráť sa na učiteľa alebo napíš issue do svojho repozitára."
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