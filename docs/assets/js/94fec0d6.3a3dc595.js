"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[94384],{

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

/***/ 69935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000118_centralny_publish_repozitar_ssot_index_md_94f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000118-centralny-publish-repozitar-ssot-index-md-94f.json
const site_docs_sk_knifes_k_000118_centralny_publish_repozitar_ssot_index_md_94f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/K000118","title":"K000118 – Centrálny publish repozitár: SSOT pre viacero zdrojových tém","description":"Ako štandardizovať publikovanie z ľubovoľného interného/zdrojového repozitára do jedného centrálneho publish kanála — cieľový repozitár vlastní svoj formát, konvencie aj deploy a dokumentuje ich sám sebe (CLAUDE.md), nie žiadnemu konkrétnemu zdroju. Univerzálny vzor pre tvorcov, ktorí pracujú na mnohých témach, ale publikujú cez jeden dedikovaný kanál.","source":"@site/docs/sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/index.md","sourceDirName":"sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT","slug":"/sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/","permalink":"/sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"publishing","permalink":"/doc-tags/publishing"},{"inline":true,"label":"ssot","permalink":"/doc-tags/ssot"},{"inline":true,"label":"architecture","permalink":"/doc-tags/architecture"},{"inline":true,"label":"multi-repo","permalink":"/doc-tags/multi-repo"},{"inline":true,"label":"automation","permalink":"/doc-tags/automation"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-15T08:36:07.810614+00:00","fm_version_comment":"","id":"K000118","guid":"d6d5dbe3-26a9-43ed-8d96-6671c2e17168","dao":"knife","title":"K000118 – Centrálny publish repozitár: SSOT pre viacero zdrojových tém","description":"Ako štandardizovať publikovanie z ľubovoľného interného/zdrojového repozitára do jedného centrálneho publish kanála — cieľový repozitár vlastní svoj formát, konvencie aj deploy a dokumentuje ich sám sebe (CLAUDE.md), nie žiadnemu konkrétnemu zdroju. Univerzálny vzor pre tvorcov, ktorí pracujú na mnohých témach, ale publikujú cez jeden dedikovaný kanál.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"pattern","priority":"medium","tags":["publishing","ssot","architecture","multi-repo","automation"],"locale":"sk","created":"2026-09-15 10:36","modified":"2026-09-15 10:36","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"knifes_overview-03","origin_repo_url":"","origin_commit":"","origin_branch":"main","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000117 – Ako funguje platba online (Payment Gateway základy)","permalink":"/sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-15T08:36:07.810614+00:00',
	fm_version_comment: '',
	id: 'K000118',
	guid: 'd6d5dbe3-26a9-43ed-8d96-6671c2e17168',
	dao: 'knife',
	title: 'K000118 – Centrálny publish repozitár: SSOT pre viacero zdrojových tém',
	description: 'Ako štandardizovať publikovanie z ľubovoľného interného/zdrojového repozitára do jedného centrálneho publish kanála — cieľový repozitár vlastní svoj formát, konvencie aj deploy a dokumentuje ich sám sebe (CLAUDE.md), nie žiadnemu konkrétnemu zdroju. Univerzálny vzor pre tvorcov, ktorí pracujú na mnohých témach, ale publikujú cez jeden dedikovaný kanál.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'pattern',
	priority: 'medium',
	tags: [
		'publishing',
		'ssot',
		'architecture',
		'multi-repo',
		'automation'
	],
	locale: 'sk',
	created: '2026-09-15 10:36',
	modified: '2026-09-15 10:36',
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
const contentTitle = undefined;

const assets = {

};



const toc = [{
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
    h2: "h2",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Séria:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Úroveň:"
        }), " Intermediate\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publishing"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssot"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "architecture"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "multi-repo"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "automation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tvorca (človek aj AI agent) zvyčajne pracuje na mnohých témach naraz,\nkaždá vo svojom vlastnom internom/zdrojovom repozitári — vlastný\nkontext, vlastné pravidlá, vlastný jazyk. Ale publikuje to všetko cez\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jeden dedikovaný kanál"
      }), ": blog, dokumentačný web, KNIFE repozitár,\nfiremný wiki."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bez štandardu vzniká jeden z dvoch problémov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pravidlá publikovania sa duplikujú"
        }), " v každom zdrojovom\nrepozitári zvlášť (a časom sa rozídu — jeden zdroj vie o novom\nfrontmat poli, druhý nie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pravidlá publikovania existujú len v hlave človeka"
        }), " (alebo v\nkontexte jednej konkrétnej AI session) — každý ďalší tvorca/session,\nčo príde zvonka, si tie isté chyby vytrpí znova."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento KNIFE popisuje vzor, ktorý oba problémy odstraňuje: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cieľový\n(publish) repozitár vlastní a dokumentuje svoje vlastné pravidlá —\nsebe samému, nie žiadnemu konkrétnemu zdroju."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rozdeľ svet na dve jasne oddelené role:"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n  subgraph zdrojové[\"Zdrojové repozitáre (N tém)\"]\n    A[\"Repo: Téma A<br/>(vlastný kontext, vlastné pravidlá)\"]\n    B[\"Repo: Téma B\"]\n    C[\"Repo: Téma C\"]\n  end\n\n  subgraph publish[\"Centrálny publish repozitár (1×)\"]\n    D[\"Vlastní: formát, frontmatter,<br/>folder konvenciu, deploy pipeline\"]\n    E[\"CLAUDE.md — pravidlá\\ndokumentované sebe samému\"]\n  end\n\n  A -->|\"pri publikovaní\\nprečíta CLAUDE.md\"| D\n  B -->|\"pri publikovaní\\nprečíta CLAUDE.md\"| D\n  C -->|\"pri publikovaní\\nprečíta CLAUDE.md\"| D\n  D --- E\n  D -->|\"push → CI\"| F[\"Živý web / distribúcia\"]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kľúčová inverzia zodpovednosti"
      }), ": znalosť \"ako sa sem má správne\npublikovať\" nepatrí zdrojovému repozitáru (ten o cieli nemusí vedieť\nnič viac než \"kam to pošlem\"), ale ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cieľovému repozitáru"
      }), " — presne\ntak, ako README kedysi existovalo pre ľudí, čo do repozitára prišli\nzvonka. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), " (alebo ekvivalent pre iný nástroj) robí to isté\npre AI agenta: dokumentuje frontmatter schému, štruktúru obsahu, ktoré\nvzory fungujú a ktoré empiricky zlyhali, a ako sa to deployuje — na\nmieste, kde sa to reálne použije, nie v pamäti jednej session."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tri pravidlá, ktoré z toho vyplývajú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Publish repozitár je autoritatívny nad vlastným formátom."
        }), "\nZdrojový repozitár sa neháda o tom, ako má vyzerať frontmatter v\ncieli — len tam príde a spýta sa (prečíta ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empirické poučky sa zapisujú do cieľa, nie do zdroja."
        }), " Ak sa pri\npublikovaní niečo pokazí (build zlyhá, asset sa nenačíta), oprava aj\npoučenie patrí do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " cieľového repozitára — nabudúce to\nnebude musieť znova objaviť ani ten istý zdroj, ani iný."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy je vlastníctvo cieľa, nie zdroja."
        }), " CI/CD trigger (napr.\npush na ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " → build → publikovanie) žije v publish repozitári.\nZdrojový repozitár nikdy nemusí vedieť, ako sa výsledný web buduje."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Krok za krokom, keď máš nový zdrojový repozitár/tému:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over, či centrálny publish repozitár existuje"
        }), " a má ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), "\n(alebo rovnocenný dokument). Ak nie, over najprv, či fakt niet\niného — než založíš druhý, over si to s vlastníkom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pracuj vo svojom zdrojovom repozitári bežne"
        }), " — vlastný kontext,\nvlastná pamäť, vlastné pravidlá pre danú tému. Nič z toho sa\nnemieša do publish repozitára."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keď je čo publikovať, otvor/cd do publish repozitára"
        }), " a nechaj\nnástroj (Claude Code alebo iný agent) prečítať jeho ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " —\nto je bod, kde sa \"naučí\" presne to, čo treba: frontmatter šablónu,\nscaffold nástroj, konvenciu assetov, deploy mechanizmus."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commituj a pushni priamo v publish repozitári."
        }), " Ak má CI trigger\nna push (bežné), tým je publikovanie hotové — žiadny manuálny\ndeploy krok navyše."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ak pri publikovaní narazíš na niečo nové"
        }), " (nefunkčný vzor,\nchýbajúce pravidlo), zapíš poučenie ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["do ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CLAUDE.md"
          }), " publish\nrepozitára"]
        }), ", nie do zdrojového repozitára ani len do vlastnej\npamäte — inak bude mať hodnotu len pre teba a len raz."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Konkrétny príklad z praxe"
      }), " (tento repozitár, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "knifes_overview-03"
      }), "):\nje to centrálny publish kanál pre KNIFE zápisy naprieč viacerými\ntémami — BaZi engine, enterprise architektúra, platby, a teraz aj\n\"Systemic Thinking in IT & Digital Fabrication\". Pri prvom pokuse o\npublikovanie KNIFE o platobných bránach (K000117) vznikla chyba presne\nopačným smerom, než tento vzor odporúča — zápis vznikol najprv v\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "privátnom zdrojovom"
      }), " repozitári namiesto verejného publish\nrepozitára (\"aha ja som myslel knife do iného repozitára nie\nprivátneho\"). Náprava = presun do správneho cieľa + over konvencie\npriamo tam (K000116/K000111 ako referencia). O pár dní neskôr, keď sa\npočas publikovania toho istého K000117 objavili tri reálne\nDocusaurus/MDX chyby (CSS string namiesto JS objektu v ", (0,jsx_runtime.jsx)(_components.code, {
        children: "style"
      }), ", raw\nHTML assety sa neprocesujú), poučenie sa nezapísalo do zdrojového\nrepozitára ani len do pamäte jednej session — zapísalo sa priamo do\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), " tohto publish repozitára. Odvtedy ho automaticky dostane\nkaždá ďalšia session, čo sem príde publikovať — bez ohľadu na to, z\nakého zdrojového projektu prišla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Škáluje sa to na N zdrojových tém/tvorcov bez toho, aby existovalo N\nkópií \"ako sa publikuje\" — pravidlo je napísané raz, na mieste, kde sa\nreálne použije, a čítané zakaždým nanovo namiesto spoliehania sa na\npamäť konkrétneho človeka alebo konkrétnej AI session. Onboarding novej\ntémy je potom len: \"začni vo svojom repozitári, keď je čo publikovať,\nprečítaj si ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), " cieľa.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vzniknuté priamo z reálnej skúsenosti pri publikovaní K000117\n(2026-09-10 až 2026-09-15) — zámena zdrojového a cieľového\nrepozitára, tri Docusaurus/MDX build chyby a ich zápis do\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), " tohto repozitára ako opakovateľné poučenie pre budúce\npublikovanie z ľubovoľného zdroja."]
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