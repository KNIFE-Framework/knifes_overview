"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[9419],{

/***/ 1180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_7_ds_01_d_1_management_02_strategy_docusaurus_guide_guide_tokens_md_bdc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-7-ds-01-d-1-management-02-strategy-docusaurus-guide-guide-tokens-md-bdc.json
const site_docs_sk_7_ds_01_d_1_management_02_strategy_docusaurus_guide_guide_tokens_md_bdc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_TOKENS_CCB354","title":"Docusaurus-Guide","description":"","source":"@site/docs/sk/7Ds/01.D1-Management/02.Strategy/Docusaurus-Guide/Guide_Tokens.md","sourceDirName":"sk/7Ds/01.D1-Management/02.Strategy/Docusaurus-Guide","slug":"/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_TOKENS_CCB354","permalink":"/en/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_TOKENS_CCB354","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/en/tags/knife"},{"inline":true,"label":"7ds","permalink":"/en/tags/7-ds"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-05T09:52:55Z","fm_version_comment":"","id":"01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_TOKENS_CCB354","guid":"170ba853-8823-454e-98f1-3f0adddb46a9","dao":"7ds","title":"Docusaurus-Guide","description":"","author":"Roman Kazička","authors":["{{AUTHOR}}"],"category":"","type":"","priority":"","tags":["knife","7ds"],"locale":"sk","created":"2025-11-05T09:52:55Z","modified":"","status":"draft","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"CAA/KNIFE","fm_reserved1":"","fm_reserved2":""},"sidebar":"docs","previous":{"title":"Docusaurus-Guide","permalink":"/en/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_INTRO_0B9CA5"},"next":{"title":"Docusaurus-Guide","permalink":"/en/sk/7Ds/D1-Management/Strategy/Docusaurus-Guide/01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_PROJECTGUIDE_57508A"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/sk/7Ds/01.D1-Management/02.Strategy/Docusaurus-Guide/Guide_Tokens.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-05T09:52:55Z',
	fm_version_comment: '',
	id: '01_D1-MANAGEMENT_02_STRATEGY_DOCUSAURUS-GUIDE_GUIDE_TOKENS_CCB354',
	guid: '170ba853-8823-454e-98f1-3f0adddb46a9',
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
const contentTitle = 'Token Management';

const assets = {

};



const toc = [{
  "value": "Git Worktree Deploy Guide",
  "id": "git-worktree-deploy-guide",
  "level": 2
}, {
  "value": "1. Úvod",
  "id": "1-úvod",
  "level": 2
}, {
  "value": "2. Prečo <code>git worktree</code>",
  "id": "2-prečo-git-worktree",
  "level": 2
}, {
  "value": "3. Premenné v Makefile",
  "id": "3-premenné-v-makefile",
  "level": 2
}, {
  "value": "4. Makefile ciele",
  "id": "4-makefile-ciele",
  "level": 2
}, {
  "value": "4.1 Inicializácia worktree",
  "id": "41-inicializácia-worktree",
  "level": 3
}, {
  "value": "4.2 Kontrola worktree",
  "id": "42-kontrola-worktree",
  "level": 3
}, {
  "value": "4.3 Kopírovanie buildu",
  "id": "43-kopírovanie-buildu",
  "level": 3
}, {
  "value": "4.4 Commit a push",
  "id": "44-commit-a-push",
  "level": 3
}, {
  "value": "4.5 Úplný deploy",
  "id": "45-úplný-deploy",
  "level": 3
}, {
  "value": "5. Najčastejšie problémy",
  "id": "5-najčastejšie-problémy",
  "level": 2
}, {
  "value": "6. Odporúčanie pre študentov",
  "id": "6-odporúčanie-pre-študentov",
  "level": 2
}, {
  "value": "7. Poznámka k jazykovým mutáciám",
  "id": "7-poznámka-k-jazykovým-mutáciám",
  "level": 2
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
        id: "token-management",
        children: "Token Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "4148f6d5-5dd4-4280-a694-f85e85410fd1"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Details about how to manage tokens, security practices, and usage examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "git-worktree-deploy-guide",
      children: "Git Worktree Deploy Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-úvod",
      children: "1. Úvod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento návod popisuje proces nasadenia statických stránok (napr. Docusaurus, MkDocs) na GitHub Pages pomocou ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git worktree"
      }), ". Tento prístup umožňuje mať samostatnú deploy vetvu bez narušenia hlavného vývojového stromu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "2-prečo-git-worktree",
      children: ["2. Prečo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git worktree"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bezpečné oddelenie"
        }), " – obsah pre produkciu je v samostatnom priečinku."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priamy push na vetvu"
        }), " – obchádza GitHub Actions a šetrí minúty v free programe."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rýchlejšie opakovanie"
        }), " – nie je nutné opakovane klonovať repozitár."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-premenné-v-makefile",
      children: "3. Premenné v Makefile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklad nastavení:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "DEPLOY_BRANCH=gh-pages-docusaurus\nWORKTREE_DIR=../gh-pages-docusaurus\nBUILD_DIR=build\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEPLOY_BRANCH"
        }), " – vetva, na ktorú sa nasadzuje."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WORKTREE_DIR"
        }), " – priečinok, kde sa pripojí deploy vetva."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD_DIR"
        }), " – priečinok s výsledkom buildu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pozor:"
        }), " TABy v Makefile musia byť skutočné tabulátory, nie medzery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-makefile-ciele",
      children: "4. Makefile ciele"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-inicializácia-worktree",
      children: "4.1 Inicializácia worktree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "init-worktree:\n\tgit worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH) || git branch $(DEPLOY_BRANCH) && git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pridá nový worktree alebo vytvorí vetvu, ak neexistuje."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-kontrola-worktree",
      children: "4.2 Kontrola worktree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "check-worktree:\n\t@if ! git worktree list | grep -q \"$(WORKTREE_DIR)\"; then \\\n\t\techo \"⚠️  Worktree pre $(DEPLOY_BRANCH) neexistuje. Vytváram...\"; \\\n\t\tgit fetch origin || true; \\\n\t\tif git ls-remote --exit-code --heads origin $(DEPLOY_BRANCH) >/dev/null 2>&1; then \\\n\t\t\tgit worktree add -B $(DEPLOY_BRANCH) $(WORKTREE_DIR) origin/$(DEPLOY_BRANCH); \\\n\t\telse \\\n\t\t\techo \"ℹ️  Vetva $(DEPLOY_BRANCH) na remote neexistuje, zakladám lokálne…\"; \\\n\t\t\tgit branch -f $(DEPLOY_BRANCH) || true; \\\n\t\t\tgit worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH); \\\n\t\t\tcd $(WORKTREE_DIR) && git commit --allow-empty -m \"init $(DEPLOY_BRANCH)\" && git push -u origin $(DEPLOY_BRANCH); \\\n\t\tfi; \\\n\tfi\n\t@echo \"✅ Worktree OK: $(WORKTREE_DIR) → $(DEPLOY_BRANCH)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overí existenciu worktree, prípadne ho vytvorí."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-kopírovanie-buildu",
      children: "4.3 Kopírovanie buildu"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "copy-build:\n\trsync -av --delete $(BUILD_DIR)/ $(WORKTREE_DIR)/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Synchronizuje obsah ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build/"
        }), " do priečinka worktree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-commit-a-push",
      children: "4.4 Commit a push"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "commit-deploy:\n\tcd $(WORKTREE_DIR) && git add . && git commit -m \"Manual Docusaurus deploy\" || echo \"⚠️  Žiadne zmeny na commit.\"\n\tcd $(WORKTREE_DIR) && git push origin $(DEPLOY_BRANCH)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commitne a pushne zmeny na remote."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-úplný-deploy",
      children: "4.5 Úplný deploy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "full-deploy: check-worktree push-main build copy-build commit-deploy\n\t@echo \"🎉 Full deploy úspešný → $(DEPLOY_BRANCH)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prebehne celý proces od kontroly až po nasadenie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-najčastejšie-problémy",
      children: "5. Najčastejšie problémy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fatal: not a git repository"
          })
        }), " – priečinok worktree je poškodený alebo neexistuje."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Žiadne zmeny na commit"
          })
        }), " – v build priečinku nie sú nové súbory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chýbajúci TAB v Makefile"
        }), " – spôsobuje chybu pri behu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-odporúčanie-pre-študentov",
      children: "6. Odporúčanie pre študentov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak nechcú riešiť worktree, môžu použiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "default GitHub Pages deploy"
        }), " cez Actions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worktree deploy odporúčame, keď chcú rýchlosť a úplnú kontrolu nad obsahom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-poznámka-k-jazykovým-mutáciám",
      children: "7. Poznámka k jazykovým mutáciám"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pri default Pages deploy jazykové mutácie fungujú, ale build musí byť nakonfigurovaný tak, aby výsledná štruktúra adresárov obsahovala všetky jazyky v jednej publikovanej vetve."
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