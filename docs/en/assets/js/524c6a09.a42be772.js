"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[6123],{

/***/ 7897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000026_knife_framework_pre_vyvoj_a_ucenie_sa_libreoffice_python_index_md_524_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python-index-md-524.json
const site_docs_sk_knifes_k_000026_knife_framework_pre_vyvoj_a_ucenie_sa_libreoffice_python_index_md_524_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/REF-UAT-001","title":"REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT","description":"","source":"@site/docs/sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/index.md","sourceDirName":"sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python","slug":"/sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/","permalink":"/en/sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"GIT","permalink":"/en/tags/git"},{"inline":true,"label":"UAT","permalink":"/en/tags/uat"},{"inline":true,"label":"Workflow","permalink":"/en/tags/workflow"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"REF-UAT-001","guid":"63773bd8-2732-4e66-8aee-00deb8db06a1","dao":"knife","title":"REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT","description":"","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"governance","type":"user-guide","priority":"top","tags":["GIT","UAT","Workflow"],"locale":"sk","created":"2025-10-05","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Educational purposes only.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT"},"sidebar":"tutorialSidebar","previous":{"title":"titul-Ako komunikovať s porozumením","permalink":"/en/sk/knifes/Ako-komunikova-s-porozumen-mE/"},"next":{"title":"K000034 – Pracovno, finančný ekosystém","permalink":"/en/sk/knifes/K000034-pracovno-financny-ekosystem/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/knifes/K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'REF-UAT-001',
	guid: '63773bd8-2732-4e66-8aee-00deb8db06a1',
	dao: 'knife',
	title: 'REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT',
	description: '',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: 'governance',
	type: 'user-guide',
	priority: 'top',
	tags: [
		'GIT',
		'UAT',
		'Workflow'
	],
	locale: 'sk',
	created: '2025-10-05',
	modified: '-',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Educational purposes only.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_label: 'REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT'
};
const contentTitle = '🧭 Postup pre presun zmien z vetvy FIX do UAT';

const assets = {

};



const toc = [{
  "value": "🧩 1. Overenie lokálneho stavu",
  "id": "-1-overenie-lokálneho-stavu",
  "level": 2
}, {
  "value": "🧭 2. Vytvorenie vetvy UAT (ak ešte neexistuje)",
  "id": "-2-vytvorenie-vetvy-uat-ak-ešte-neexistuje",
  "level": 2
}, {
  "value": "🔀 3. Vytvorenie Pull Requestu z FIX → UAT",
  "id": "-3-vytvorenie-pull-requestu-z-fix--uat",
  "level": 2
}, {
  "value": "🧪 4. Overenie a test v UAT",
  "id": "-4-overenie-a-test-v-uat",
  "level": 2
}, {
  "value": "🚀 5. Príprava na merge do MAIN (produkcia)",
  "id": "-5-príprava-na-merge-do-main-produkcia",
  "level": 2
}, {
  "value": "🧾 6. Poznámky a odporúčania",
  "id": "-6-poznámky-a-odporúčania",
  "level": 2
}, {
  "value": "📦 7. Odporúčané príkazy pre opakovanie",
  "id": "-7-odporúčané-príkazy-pre-opakovanie",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "-postup-pre-presun-zmien-z-vetvy-fix-do-uat",
        children: ["🧭 Postup pre presun zmien z vetvy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FIX"
        }), " do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UAT"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "63773bd8-2732-4e66-8aee-00deb8db06a1"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento postup popisuje odporúčaný spôsob, ako presunúť stabilizované zmeny z pracovnej vetvy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fix/*"
      }), " do testovacej vetvy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAT"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Cieľom je zachovať transparentnosť, možnosť spätnej kontroly a zamedziť nechceným zmenám v produkcii."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-1-overenie-lokálneho-stavu",
      children: "🧩 1. Overenie lokálneho stavu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pred akoukoľvek akciou sa uisti, že máš všetky zmeny uložené a commitnuté:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git status\ngit add .\ngit commit -m \"fix: final UAT preparation\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak hlási ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nothing to commit, working tree clean"
      }), ", všetko je pripravené."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-2-vytvorenie-vetvy-uat-ak-ešte-neexistuje",
      children: "🧭 2. Vytvorenie vetvy UAT (ak ešte neexistuje)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Over existenciu vetvy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git branch\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAT"
      }), " chýba, vytvor ju z aktuálneho ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " (alebo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "develop"
      }), " podľa procesu):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout main\ngit pull origin main\ngit checkout -b UAT\ngit push -u origin UAT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-3-vytvorenie-pull-requestu-z-fix--uat",
      children: "🔀 3. Vytvorenie Pull Requestu z FIX → UAT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prejdi na GitHub repozitár."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare & pull request"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nastav:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Base branch:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Compare branch:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fix/fm-stabilize"
            }), " (alebo tvoja aktuálna fix vetva)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyplň popis (napr. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "„Synchronizácia FM a CSV, testované – pripravené pre UAT.“"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create pull request"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-4-overenie-a-test-v-uat",
      children: "🧪 4. Overenie a test v UAT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po merge do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAT"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout UAT\ngit pull origin UAT\nmake verify\nmake knifes-gen-dry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✅ Over, že:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sa všetky KNIFE súbory generujú správne,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSV zodpovedá realite,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nevznikli nové GUIDy bez dôvodu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-5-príprava-na-merge-do-main-produkcia",
      children: "🚀 5. Príprava na merge do MAIN (produkcia)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Keď je ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAT"
      }), " overený:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout main\ngit pull origin main\ngit merge --no-ff UAT -m \"merge: verified UAT → main\"\ngit push origin main\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-6-poznámky-a-odporúčania",
      children: "🧾 6. Poznámky a odporúčania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FIX"
        }), " = technické úpravy a ladenie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "UAT"
        }), " = testovanie a validácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MAIN"
        }), " = produkčný obsah"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každá vetva má svoj účel – nikdy nerob úpravy priamo v ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAT"
      }), " alebo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAIN"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Ak potrebuješ opraviť drobnosti, vytvor novú ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fix/*"
      }), " vetvu a znova ju pošli cez PR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-7-odporúčané-príkazy-pre-opakovanie",
      children: "📦 7. Odporúčané príkazy pre opakovanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "make csv-guid-sync-dry\nmake knifes-csv-scan\nmake knifes-gen-dry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto príkazy pomáhajú overiť, že všetky KNIFE majú správne GUID, FM a väzby pred prenosom."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["💡 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " Ak chceš dať študentom tento proces ako cvičenie, pridaj ho do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/sk/ref/UAT-Promotion-Guide.md"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "alebo ako úlohu v ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GitDocs-Lab"
        }), " template s parametrom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "branch: fix → UAT"
        }), "."]
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



/***/ }),

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


/***/ })

}]);