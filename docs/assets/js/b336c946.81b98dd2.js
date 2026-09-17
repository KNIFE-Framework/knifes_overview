"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[14279],{

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

/***/ 48314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000119_klon_triedneho_repozitara_index_md_b33_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000119-klon-triedneho-repozitara-index-md-b33.json
const site_docs_sk_knifes_k_000119_klon_triedneho_repozitara_index_md_b33_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000119-klon-triedneho-repozitara/K000119","title":"K000119 – Ako si vytvoriť čistý klon triedneho repozitára","description":"Ako si z ľubovoľného triedneho/tímového template repozitára urobiť vlastný, čistý klon bez cudzej histórie — jeden štandardný postup namiesto toho, aby si to každý riešil (alebo kopíroval nesprávne) po svojom. Aplikované na štart repozitára pre predmet STHDF 2026-2027.","source":"@site/docs/sk/knifes/K000119-klon-triedneho-repozitara/index.md","sourceDirName":"sk/knifes/K000119-klon-triedneho-repozitara","slug":"/sk/knifes/K000119-klon-triedneho-repozitara/","permalink":"/sk/knifes/K000119-klon-triedneho-repozitara/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"git","permalink":"/doc-tags/git"},{"inline":true,"label":"tutorial","permalink":"/doc-tags/tutorial"},{"inline":true,"label":"onboarding","permalink":"/doc-tags/onboarding"},{"inline":true,"label":"template","permalink":"/doc-tags/template"},{"inline":true,"label":"beginner","permalink":"/doc-tags/beginner"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-16T07:04:38.232413+00:00","fm_version_comment":"","id":"K000119","guid":"0bc5a961-542b-49f6-8369-eade63c10a43","dao":"knife","title":"K000119 – Ako si vytvoriť čistý klon triedneho repozitára","description":"Ako si z ľubovoľného triedneho/tímového template repozitára urobiť vlastný, čistý klon bez cudzej histórie — jeden štandardný postup namiesto toho, aby si to každý riešil (alebo kopíroval nesprávne) po svojom. Aplikované na štart repozitára pre predmet STHDF 2026-2027.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"tutorial","priority":"medium","tags":["git","tutorial","onboarding","template","beginner"],"locale":"sk","created":"2026-09-16 09:04","modified":"2026-09-16 11:59","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"knifes_overview-03","origin_repo_url":"","origin_commit":"","origin_branch":"main","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000118 – Centrálny publish repozitár: SSOT pre viacero zdrojových tém","permalink":"/sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000119-klon-triedneho-repozitara/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-16T07:04:38.232413+00:00',
	fm_version_comment: '',
	id: 'K000119',
	guid: '0bc5a961-542b-49f6-8369-eade63c10a43',
	dao: 'knife',
	title: 'K000119 – Ako si vytvoriť čistý klon triedneho repozitára',
	description: 'Ako si z ľubovoľného triedneho/tímového template repozitára urobiť vlastný, čistý klon bez cudzej histórie — jeden štandardný postup namiesto toho, aby si to každý riešil (alebo kopíroval nesprávne) po svojom. Aplikované na štart repozitára pre predmet STHDF 2026-2027.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'tutorial',
	priority: 'medium',
	tags: [
		'git',
		'tutorial',
		'onboarding',
		'template',
		'beginner'
	],
	locale: 'sk',
	created: '2026-09-16 09:04',
	modified: '2026-09-16 11:59',
	status: 'published',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: 'knifes_overview-03',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: 'main',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Ako si vytvoriť čistý klon triedneho repozitára';

const assets = {

};



const toc = [{
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "Zdroje",
  "id": "zdroje",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
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
        id: "ako-si-vytvoriť-čistý-klon-triedneho-repozitára",
        children: "Ako si vytvoriť čistý klon triedneho repozitára"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Beginner\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tutorial"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onboarding"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "template"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beginner"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Postav sa v termináli do priečinka, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v ktorom"
      }), " má vzniknúť tvoj nový\nprojekt (napr. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/Skola/STHDF/"
      }), ") — nie do priečinka, ktorý ešte len\nvznikne. Klon si ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<moj-priecinok>"
      }), " vytvorí sám ako podpriečinok:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone --depth 1 <URL-sablony> <moj-priecinok>\ncd <moj-priecinok>\nrm -rf .git\ngit init\ngit add -A\ngit commit -m \"Initial commit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Výsledok: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<moj-priecinok>/"
      }), " je nový, samostatný git repozitár s jedným\ncommitom — celý obsah šablóny, žiadna jej história."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "S reálnymi hodnotami"
      }), " (šablóna je skutočná, priečinok je vymyslený príklad podľa konvencie z krok 2 nižšie):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone --depth 1 https://github.com/06-STH-Projects/2026_sthdf_class_template.git ST-099-Priklad\ncd ST-099-Priklad\nrm -rf .git\ngit init\ngit add -A\ngit commit -m \"Initial commit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Keď niekto dostane príkaz \"sprav si klon tohto repozitára\", najprirodzenejšia\nreakcia je ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git clone <url>"
      }), ". Problém: to neprenesie len obsah, ale ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "celú\nhistóriu"
      }), " zdrojového repozitára — každý commit, každú správu, každého\nautora, ktorý kedy na šablóne pracoval."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri jednorazovom template repozitári to spôsobí tri reálne problémy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cudzia história v tvojom repozitári."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log"
        }), " ukazuje commity\nniekoho iného, nie tvoju prácu — orientácia aj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git blame"
        }), " sú od\nzačiatku znečistené."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skrytý vzťah k pôvodnému repu."
        }), " Klon si ponecháva ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), " smerujúci\nna šablónu — ľahko sa stane, že niekto omylom pushne (alebo sa pokúsi\npushnúť) do cudzieho repozitára namiesto vlastného."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bez štandardu si to každý vyrieši inak"
        }), " — alebo skopíruje zlý\npostup od niekoho iného. Presne to je dôvod, prečo je toto KNIFE,\nnie len jednorazová poznámka: raz zapísaný postup sa dá odovzdať\nďalej — od učiteľa študentom, aj neskôr medzi študentami navzájom."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n  T[\"Template repozitár\\n(cudzia história, N commitov)\"]\n  S[\"Shallow clone\\n--depth 1\"]\n  C[\"rm -rf .git\\n(zahoď históriu)\"]\n  N[\"git init\\n(nová história)\"]\n  O[\"Vlastný repozitár\\n(1 commit, tvoj)\"]\n\n  T -->|clone| S --> C --> N --> O"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tri kroky, každý s jasným dôvodom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git clone --depth 1"
          })
        }), " — stiahne len aktuálny stav súborov, nie\ncelú históriu (rýchlejšie, menej dát, ale história sa aj tak\npreberie do ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git/"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "rm -rf .git"
          })
        }), " — odstráni prevzatý ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git"
        }), " adresár úplne. Týmto\nzmizne história aj prepojenie na ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), " šablóny."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git init"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add -A"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git commit"
          })]
        }), " — založí úplne novú,\nprázdnu históriu s jediným commitom: \"toto je môj štart\"."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Krok za krokom:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Over si URL šablóny"
          }), ", ktorú ti dal učiteľ/tím lead."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zvoľ si názov priečinka podľa dohodnutej konvencie"
          }), " — v predmete\nSTHDF napr. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ST-042-MojeMeno"
          }), " (individuálna práca) alebo\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "PRJ-017-NazovProjektu"
          }), " (tímový projekt). Konvencia sa neskôr znova\npoužije pri publikovaní výstupov, takže sa jej drž od začiatku."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spusti tri príkazy z Rýchleho návodu"
          }), " vyššie."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Založ si prázdny repozitár na GitHube"
          }), " (bez README, bez\n", (0,jsx_runtime.jsx)(_components.code, {
            children: ".gitignore"
          }), " — tie už máš z klonu) a pripoj ho:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git remote add origin <URL-tvojho-noveho-repozitara>\ngit branch -M main\ngit push -u origin main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Over si, že ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git remote -v"
            }), " ukazuje TVOJ repozitár"]
          }), ", nie šablónu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Žiadny \"školský server\" neexistuje."
        }), " Vlastný repozitár z kroku 4 je\nobyčajný osobný GitHub účet — nič viac netreba zakladať ani nikde sa\nregistrovať. Ak GitHub účet ešte nemáš, založ si ho na\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/join",
          children: "github.com/join"
        }), " (zadarmo)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Neskôr, keď je výstup hotový — publikuj ho do triedneho\nrepozitára."
          }), " Tvoj repozitár z krokov 1–5 je úplne nezávislý (vlastná\nhistória, vlastný remote), takže sa do triedneho repozitára\nnedostane sám od seba. Postup:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# a) na GitHube forkni triedny repozitár (tlačidlo \"Fork\")\n#    -> vznikne tvoj-ucet/class_sthdf_2026-2027\n\n# b) forknutý repo naklonuj (toto UŽ je normálny git clone,\n#    lebo tu chceš históriu triedneho repozitára zachovať)\ngit clone https://github.com/<tvoj-ucet>/class_sthdf_2026-2027.git\ncd class_sthdf_2026-2027\ngit checkout -b submit/ST-042-MojeMeno\n\n# c) svoj výstup skopíruj (nie premiestni) do priečinka pomenovaného\n#    podľa konvencie z kroku 2 — ST-XXX pre individuálnu prácu,\n#    PRJ-YYY pre tímový projekt\ncp -r ../ST-042-MojeMeno submissions/ST-042-MojeMeno\n\ngit add submissions/ST-042-MojeMeno\ngit commit -m \"submit: ST-042-MojeMeno\"\ngit push -u origin submit/ST-042-MojeMeno\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Potom na GitHube otvor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pull Request"
          }), " z ", (0,jsx_runtime.jsx)(_components.code, {
            children: "submit/ST-042-MojeMeno"
          }), " do\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          }), " triedneho repozitára. Tvoj vlastný repozitár (s celou vývojovou\nhistóriou) tým nezaniká — do triedneho repa ide len hotový výstup,\ns jedným submission commitom."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Konkrétny príklad z praxe:"
      }), " presne týmto postupom vznikol štart\nrepozitára pre nový ročník predmetu — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2026_sthdf_class_template"
      }), " →\nklon → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class_sthdf_2026-2027"
      }), ", s jedným \"Initial commit\" namiesto\nprevzatej histórie desiatok predchádzajúcich iterácií šablóny."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Prečo nie obyčajný ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        }), "?"]
      }), " Bez ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--depth 1"
      }), " a bez následného\nvyčistenia ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".git/"
      }), " zdedíš všetko — vrátane vecí, ktoré v šablóne nemuseli\nbyť určené na verejné šírenie (staré poznámky, rozpracované commity,\nmená predchádzajúcich autorov). Pri jednorazovom štarte nového projektu\nto nemá žiadnu hodnotu, len šum a riziko."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Prečo nie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "degit"
        }), " alebo iný špecializovaný nástroj?"]
      }), " Existujú nástroje\n(napr. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx degit"
      }), "), ktoré robia presne toto v jednom príkaze. Zámerne tu\nale ide o postup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "len s holým gitom"
      }), " — funguje všade, kde je git\nnainštalovaný, bez závislosti na Node.js/npm alebo inom runtime. Pre\nskupinu, kde nie každý má rovnaké vývojové prostredie, je to\nspoľahlivejší spoločný menovateľ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Prečo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf .git"
        }), " a nie napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git checkout --orphan"
        }), "?"]
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--orphan"
      }), "\nvytvorí novú vetvu bez rodičov, ale pôvodné commity zostávajú v\nrepozitári dosiahnuteľné (kým ich ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git gc"
      }), " nezmaže) a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), " zostáva\nnastavený na šablónu. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rm -rf .git"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git init"
      }), " je jednoznačnejšie:\npo tomto kroku v priečinku neexistuje žiadna stopa po pôvodnom\nrepozitári."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priečinok už existuje?"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        }), " odmietne klonovať do\nneprázdneho priečinka — over si názov vopred, alebo klonuj do dočasného\nmena a premenuj."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Zabudol si ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rm -rf .git"
          }), "?"]
        }), " Spoznáš to podľa toho, že ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log"
        }), "\nukazuje cudzie commity. Over si to hneď po klone (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log --oneline"
        }), "\nby mal ukázať len históriu šablóny, kým ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git init"
        }), " ešte nespravíš)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git push"
          }), " zlyhá s \"Permission denied\"?"]
        }), " Skontroluj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git remote -v"
        }), "\n— ak stále ukazuje na šablónu namiesto tvojho repozitára, ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git"
        }), " sa\nnevymazal správne."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows:"
        }), " postup funguje rovnako v Git Bash; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf .git"
        }), " vo\nPowerShell nahraď ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Remove-Item -Recurse -Force .git"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tri príkazy namiesto opakovaného vysvetľovania naživo — a hlavne\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jeden zapísaný, opakovateľný postup"
      }), " namiesto toho, aby si ho každý\nštudent (alebo každý nový ročník) objavoval nanovo, prípadne prevzal\nnesprávnu verziu od spolužiaka. Funguje pre ľubovoľný template\nrepozitár, nielen pre STHDF — je to všeobecný vzor onboardingu do\nnového projektu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vzniknuté priamo z prípravy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2026_sthdf_class_template"
      }), " pre ročník\nSTHDF 2026-2027 (repozitár ", (0,jsx_runtime.jsx)(_components.code, {
        children: "06-STH-Projects/2026_sthdf_class_template"
      }), ",\nskript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools/clone-student-template.sh"
      }), ") — zapísané ako samostatné\nKNIFE, aby bol postup prenositeľný aj mimo tohto jedného predmetu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
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