"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[92021],{

/***/ 1704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-Tools-Focus_AI-e58a2119a62b0dd80f0ffea583f7491e.png");

/***/ }),

/***/ 7752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-All_in_One-283ece8a8b8a0b8840ce635cd40812f8.png");

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


/***/ }),

/***/ 38349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-SDLC-Deliverables-a921ec8fd29b6db6c70f83fcd946daeb.png");

/***/ }),

/***/ 50262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-Market-SDLC-76e23b5658b3ad1de2b3f1d57a7d4485.png");

/***/ }),

/***/ 51493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/00-V-Model-4d8af3c50fb02e28e7bfd60919212015.png");

/***/ }),

/***/ 75748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000103_caa_in_sdlc_index_md_fbe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000103-caa-in-sdlc-index-md-fbe.json
const site_docs_sk_knifes_k_000103_caa_in_sdlc_index_md_fbe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000103-CAA_IN_SDLC/K000103_SK","title":"K000103 – Context Aware Approach v SDLC","description":"Context Aware Approach (CAA) aplikovaný na Solution Development Life Cycle — prečo kontext musí byť pochopený skôr, než sa urobí akékoľvek technologické rozhodnutie.","source":"@site/docs/sk/knifes/K000103-CAA_IN_SDLC/index.md","sourceDirName":"sk/knifes/K000103-CAA_IN_SDLC","slug":"/sk/knifes/K000103-CAA_IN_SDLC/","permalink":"/sk/knifes/K000103-CAA_IN_SDLC/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"K000103_SK","guid":"9f26e4d2-8178-410f-858f-08c1ce1a154c","dao":"knife","title":"K000103 – Context Aware Approach v SDLC","description":"Context Aware Approach (CAA) aplikovaný na Solution Development Life Cycle — prečo kontext musí byť pochopený skôr, než sa urobí akékoľvek technologické rozhodnutie.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["SDLC","CAA","EnterpriseArchitecture"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000102 – AI podpora spolupráce knowlwdge workerov v rámci SDLC.md","permalink":"/sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/"},"next":{"title":"AI KERNARO","permalink":"/sk/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000103-CAA_IN_SDLC/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000103_SK',
	guid: '9f26e4d2-8178-410f-858f-08c1ce1a154c',
	dao: 'knife',
	title: 'K000103 – Context Aware Approach v SDLC',
	description: 'Context Aware Approach (CAA) aplikovaný na Solution Development Life Cycle — prečo kontext musí byť pochopený skôr, než sa urobí akékoľvek technologické rozhodnutie.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'SDLC',
		'CAA',
		'EnterpriseArchitecture'
	],
	locale: 'sk',
	created: '2026-06-02 00:00',
	modified: '2026-06-02 00:00',
	status: 'published',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Roman Kazicka',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka'
};
const contentTitle = 'KNIFE – Context Aware Approach v SDLC';

const assets = {

};



const toc = [{
  "value": "🎯 Čo to rieši",
  "id": "-čo-to-rieši",
  "level": 2
}, {
  "value": "V-Model – Verification and Validation Model – historický základ SDLC",
  "id": "v-model--verification-and-validation-model--historický-základ-sdlc",
  "level": 2
}, {
  "value": "Vznik",
  "id": "vznik",
  "level": 3
}, {
  "value": "Prečo ho dnes málokto pozná",
  "id": "prečo-ho-dnes-málokto-pozná",
  "level": 3
}, {
  "value": "🧩 Ako to rieši",
  "id": "-ako-to-rieši",
  "level": 2
}, {
  "value": "🧪 Ako to použiť",
  "id": "-ako-to-použiť",
  "level": 2
}, {
  "value": "⚡ Rýchly návod",
  "id": "-rýchly-návod",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Prečo kreslíme obrázky? (náčrty, diagramy, modely)",
  "id": "prečo-kreslíme-obrázky-náčrty-diagramy-modely",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "Pohľad na kontext",
  "id": "pohľad-na-kontext",
  "level": 3
}, {
  "value": "Pohľad na prístup",
  "id": "pohľad-na-prístup",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
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
        id: "knife--context-aware-approach-v-sdlc",
        children: "KNIFE – Context Aware Approach v SDLC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(SDLC – Solution Development Life Cycle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-to-rieši",
      children: "🎯 Čo to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Žiadne riešenie v žiadnej doméne neexistuje izolovane — žije v konkrétnom kontexte, ktorý zásadne ovplyvňuje to, čo sa buduje.\nZ toho prirodzene vyplýva, že každé riešenie musí začínať porozumením tohto kontextu.\nTéma je široká: ľudia, procesy, technológie, politika, podmienky trhu a oveľa viac.\nV tomto článku sa zameriavame na popis kontextu pri dodávaní IT riešení — princípy však platia všeobecne."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v-model--verification-and-validation-model--historický-základ-sdlc",
      children: "V-Model – Verification and Validation Model – historický základ SDLC"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Definícia V-Modelu",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "V-model je grafické znázornenie životného cyklu vývoja systémov"
        }), ", v ktorom aktivity ako analýza požiadaviek, návrh systému a implementácia priamo zodpovedajú validačným aktivitám — akceptačnému testovaniu, systémovému testovaniu a integračnému testovaniu. Vzniká tvar „V\": ľavá strana predstavuje špecifikáciu a návrh, spodok implementáciu a pravá strana testovanie a validáciu."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Napriek tomu, že moderné Agile a DevOps prístupy priniesli iteratívnejšie postupy, mnohé základné princípy V-Modelu pretrvávajú v súčasných SDLC praktikách — najmä silné prepojenie medzi požiadavkami, implementáciou a verifikáciou."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V-Model sa využíva pri tvorbe rigoróznych modelov životného cyklu vývoja a modelov riadenia projektov.\nDelí sa do troch hlavných kategórií:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nemecký V-Modell,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "všeobecný testovací model,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a americký vládny štandard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zdroj: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://en.wikipedia.org/wiki/V-model",
        children: "https://en.wikipedia.org/wiki/V-model"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vznik",
      children: "Vznik"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V-Model má dva paralelné a nezávislé pôvody:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Barry Boehm (USA, 1979)"
      }), " – americký softvérový inžinier, ktorý ako prvý popísal V-tvarovaný životný cyklus s dôrazom na verifikáciu a validáciu v každej fáze vývoja."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Americká vetva"
      }), " – Kevin Forsberg a Hal Mooz ho vyvíjali paralelne, vychádzajúc zo systémového inžinierstva pre obranné a letecké projekty. V-Model sa prvýkrát objavil okolo roku 1982 v Hughes Aircraft pre program FAA, neskôr sa rozšíril cez NASA a americké obranné zákazky."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nemecká vetva (V-Modell)"
      }), " – Vyvinula ho IABG v Ottobrune pri Mníchove v spolupráci s Federálnym úradom pre obrannú techniku — pôvodne pre nemeckú armádu. V roku 1992 ho nemecké ministerstvo vnútra prijalo pre civilnú verejnú správu. V roku 2005 vyšla aktualizovaná verzia: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "V-Modell XT"
      }), " (eXtended)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-ho-dnes-málokto-pozná",
      children: "Prečo ho dnes málokto pozná"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agile vytlačil V-Model na okraj od začiatku 2000-tych rokov. V korporátnom a bankovom prostredí však V-Model nikdy nezmizol — len dostal nové meno alebo bol absorbovaný do iných rámcov: PRINCE2, regulačné metodológie, validácia FDA, automotive SPICE."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Regulované prostredia",
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["V regulovaných prostrediach (bankovníctvo, zdravotníctvo, obrana) zostáva V-Model ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "de facto štandardom"
        }), " — pretože regulátori vyžadujú plnú sledovateľnosť medzi požiadavkou a testom. Ignorovanie tohto základu ho neodstraňuje; robí medzeru neviditeľnou až do auditu."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Model nezomrel. Zmenil meno."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(51493)/* ["default"] */ .A),
        alt: "V-Model – Verification and Validation Model",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši",
      children: "🧩 Ako to rieši"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V-Model poskytuje štrukturálnu chrbticu — ale kontext, v ktorom sa aplikuje, definuje všetko."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vizualizácia kontextu výrazne pomáha jeho pochopeniu — čo v praxi znamená mapovanie reálneho sveta do digitálnej podoby.\nNa tento účel existuje široké spektrum nástrojov a aplikácií. Ktorý zvoliť a podľa akých kritérií?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V našom prípade zdôrazňujeme nasledujúce princípy a vlastnosti. Technológie by ich mali podporovať čo najširšie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Princípy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Základný princíp CAA",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Komunikácie — niet Porozumenia"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Porozumenia — niet Dôvery"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Dôvery — niet dobrej Spolupráce"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez dobrej Spolupráce — niet Synergii"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Bez Synergii — niet Úspechu"
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jeden obrázok má hodnotu tisíc slov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jeden model má hodnotu tisíc obrázkov."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Neexistuje dobré riešenie bez obrázkov.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["To si vyžaduje ujasniť:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "čo znamená „dobré riešenie\""
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "čo znamená „obrázok / diagram\""
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Každé riešenie prechádza základnými fázami definovanými vo V-Modeli:\nNápad → High-Level Design → Analýza → Detailný návrh → Implementácia → Verifikácia & Testovanie → Prevádzka → Change Management", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Poradie, hĺbka a čas strávený v každej fáze závisí od riešenia — ale každé riešenie musí aspoň mentálne prejsť od nápadu po prevádzku, bez ohľadu na prístup dodávky (Waterfall, Agile, hybridný)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Funkčné požiadavky na podporné nástroje naprieč SDLC rolami"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "(stručný a selektívny výber — závisí od kontextu riešenia a charakteru tímu/organizácie)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jednoduchosť a intuitívnosť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Koľko SDLC rolí nástroj podporuje?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Miera, do akej jedna technológia pokrýva potreby jednotlivých rolí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Univerzálny vs. špecializovaný nástroj"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otvorenosť technológie:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Interoperabilita", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Integrácie tretích strán"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Modularita"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Možnosť rozširovania systému o nové schopnosti"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Podpora automatizácie workflow"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Nefunkčné požiadavky"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prítomnosť na trhu:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dosah produktu/systému na trhu / v konkrétnych doménach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dostupnosť know-how"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Komunita"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Znalí jednotlivci v organizácii"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dlhovekosť na trhu:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Startup vs. etablovaná spoločnosť"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kvalitná podpora"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uznanie na trhu a v segmente"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podpora zo strany univerzít a širšej komunity"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Možnosti nasadenia:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "On-premise"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "On-client"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cloudové riešenie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mobilné zariadenia"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Licenčný model:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Plávajúce licencie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dedikované licencie"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Platobný model:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Jednorazový + upgrade/obnova"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Predplatné"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Osobné preferencie:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pozitívna predchádzajúca skúsenosť s funkciami technológie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Existujúce znalosti produktu vrátane jeho silných a slabých stránok"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť",
      children: "🧪 Ako to použiť"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri hodnotení konkrétnej technológie je vhodné zvážiť čo najviac kritérií ešte pred začatím hodnotenia.\nKaždý výber je individuálny a platí len v konkrétnom kontexte danej organizácie, tímu alebo osoby.\nPri porovnávaní musia byť stanovené porovnateľné kritériá a porovnateľné kontexty — inak sú výsledky zavádzajúce."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod",
      children: "⚡ Rýchly návod"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nasledujúce diagramy mapujú SDLC kontext z viacerých perspektív — od vzťahu dodávateľa a zákazníka, cez výstupy medzi fázami, až po kritériá hodnotenia nástrojov."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(51493)/* ["default"] */ .A),
        alt: "CAA – Context Aware Approach v SDLC",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-kreslíme-obrázky-náčrty-diagramy-modely",
      children: "Prečo kreslíme obrázky? (náčrty, diagramy, modely)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mapovanie reality do digitálnej podoby."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Obrázok publikovaný s láskavým súhlasom IASA:\nAaron Tan Dani, FSCS — Chief Architect, Digital Enterprise Architecture Office\nMtech (NUS), CITA-F, CITA-A, TOGAF, ArchiMate, COBIT, PMP\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://iasaglobal.org/Services/Public/News/Articles/Establishing-Digital-Transformation-and-Smart-Factory-Blueprint-with-EA.aspx",
        children: "https://iasaglobal.org/Services/Public/News/Articles/Establishing-Digital-Transformation-and-Smart-Factory-Blueprint-with-EA.aspx"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(84839)/* ["default"] */ .A),
        alt: "01 – Mapovanie reálneho sveta do digitálneho sveta",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prečo do toho vkladáme toľko úsilia?\nVerím, že je to preto, lebo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zvyšuje šancu na zdieľané porozumenie medzi rolami a ľuďmi v rámci životného cyklu riešenia."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Podporuje rozhodovateľov.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3P: Správna Informácia – pre Správnu Rolu – v Správnom Čase"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(50262)/* ["default"] */ .A),
        alt: "02 – Vzťah dodávateľa a zákazníka v kontexte SDLC",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(38349)/* ["default"] */ .A),
        alt: "03 – SDLC a výstupy medzi fázami SDLC",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(1704)/* ["default"] */ .A),
        alt: "04 – Oblasti hodnotenia nástrojov z viacerých perspektív (neúplné)",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(7752)/* ["default"] */ .A),
        alt: "05 – Všetko na jednom obrázku",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prezentovaná téma je vysoko komplexná a vyžaduje techniky vhodné pre komplexné výzvy.\nPozri KNIFE ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000101-CYNEFIN_Framework/",
        children: "Cynefin"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Cynefin prístup pre komplexné problémy",
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Základná myšlienka pre riešenie komplexných otázok sleduje tento vzor:"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Probe → Sense → Respond"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Skús → Pozoruj prvé skúsenosti → Vedome reaguj a upresni svoje pôvodné porozumenie."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pohľad-na-kontext",
      children: "Pohľad na kontext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čo je lepšie?\nBentley alebo ŠKODA?\nMac alebo Windows?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čo je aplikácia? Čo je platforma?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Koľko nekonečných diskusií a argumentov, za a proti.\nAle prečo? Nie je to zbytočná debata bez víťaza?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pokiaľ nie je definovaný ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kontext"
      }), " otázky, problému alebo výzvy — nemá zmysel pokračovať v diskusii ani v riešení."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Akonáhle sa aspoň pokúsime pochopiť kontext riešenia do dostatočnej hĺbky, získame obmedzenia a hranice, ktoré nám zásadne pomáhajú pochopiť riešenie, nájsť správne odpovede — a urobiť to konštruktívne.\nBez zbytočných hádok, sporov a straty drahocenného času."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pohľad-na-prístup",
      children: "Pohľad na prístup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ktorý prístup je lepší?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V-Model (Waterfall)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iteračný model (Agile, ...)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ktorú fázu vo V-Modeli môžeme ignorovať? Kedy? V akom kontexte?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Namiesto hádania sa o tom, ktorý prístup je lepší, navrhujem:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prispôsob prístup kontextu svojho riešenia."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Kľúčový záver",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Žiadny nástroj, žiadna technológia nikdy nebude dokonalá pre všetky kontexty.\nNaša úloha je pochopiť kontext a zvoliť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dostatočne dobré"
        }), " riešenie pre daný konkrétny kontext."]
      })
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



/***/ }),

/***/ 84839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-DigitalMappingOdReality-05da05f842a0ae5c6aebe9489b88df57.png");

/***/ })

}]);