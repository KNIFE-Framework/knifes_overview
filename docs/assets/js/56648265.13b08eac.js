"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[75165],{

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

/***/ 33418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cesta-platby-light-5e16d3847e7919e71661fc7806d8a0de.png");

/***/ }),

/***/ 52528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000117_platba_online_payment_gateway_zaklady_index_md_566_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000117-platba-online-payment-gateway-zaklady-index-md-566.json
const site_docs_sk_knifes_k_000117_platba_online_payment_gateway_zaklady_index_md_566_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady/K000117","title":"K000117 – Ako funguje platba online (Payment Gateway základy)","description":"Konceptuálny prehľad online platby pre laikov aj obchodníkov — 3 kroky (obchod/CMS, platobná brána, bankové potrubie), kde presne sedí karta/Google Pay/Apple Pay, a slovník základných pojmov (acquiring/issuing banka, tokenizácia, PCI-DSS).","source":"@site/docs/sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady/index.md","sourceDirName":"sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady","slug":"/sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady/","permalink":"/sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"payments","permalink":"/doc-tags/payments"},{"inline":true,"label":"e-commerce","permalink":"/doc-tags/e-commerce"},{"inline":true,"label":"woocommerce","permalink":"/doc-tags/woocommerce"},{"inline":true,"label":"beginner","permalink":"/doc-tags/beginner"},{"inline":true,"label":"fintech","permalink":"/doc-tags/fintech"}],"version":"current","frontMatter":{"fm_version":"1.0.0","fm_build":"2026-09-10T00:00:00.000000+00:00","fm_version_comment":"","id":"K000117","guid":"74860c2e-5ebe-46bc-9c43-ad9d9b15d868","dao":"knife","title":"K000117 – Ako funguje platba online (Payment Gateway základy)","description":"Konceptuálny prehľad online platby pre laikov aj obchodníkov — 3 kroky (obchod/CMS, platobná brána, bankové potrubie), kde presne sedí karta/Google Pay/Apple Pay, a slovník základných pojmov (acquiring/issuing banka, tokenizácia, PCI-DSS).","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"guide","priority":"low","tags":["payments","e-commerce","woocommerce","beginner","fintech"],"locale":"sk","created":"2026-09-10 22:15","modified":"2026-09-10 22:15","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000116 – Dual-stack AI compliance ako enterprise architektonická požiadavka","permalink":"/sk/knifes/K000116-Dual-Stack-AI-Compliance/"},"next":{"title":"K000118 – Centrálny publish repozitár: SSOT pre viacero zdrojových tém","permalink":"/sk/knifes/K000118-Centralny-Publish-Repozitar-SSOT/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000117-Platba-Online-Payment-Gateway-Zaklady/index.md


const frontMatter = {
	fm_version: '1.0.0',
	fm_build: '2026-09-10T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000117',
	guid: '74860c2e-5ebe-46bc-9c43-ad9d9b15d868',
	dao: 'knife',
	title: 'K000117 – Ako funguje platba online (Payment Gateway základy)',
	description: 'Konceptuálny prehľad online platby pre laikov aj obchodníkov — 3 kroky (obchod/CMS, platobná brána, bankové potrubie), kde presne sedí karta/Google Pay/Apple Pay, a slovník základných pojmov (acquiring/issuing banka, tokenizácia, PCI-DSS).',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'KNIFE',
	type: 'guide',
	priority: 'low',
	tags: [
		'payments',
		'e-commerce',
		'woocommerce',
		'beginner',
		'fintech'
	],
	locale: 'sk',
	created: '2026-09-10 22:15',
	modified: '2026-09-10 22:15',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'K000117 – Ako funguje platba online (Payment Gateway základy)';

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
  "value": "Friendly example — 3 kroky cesty platby",
  "id": "friendly-example--3-kroky-cesty-platby",
  "level": 3
}, {
  "value": "Kde presne je karta / Google Pay / Apple Pay?",
  "id": "kde-presne-je-karta--google-pay--apple-pay",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Slovník — 7 pojmov",
  "id": "slovník--7-pojmov",
  "level": 3
}, {
  "value": "Kto je kto — mapovanie na reálne produkty (WordPress/WooCommerce príklad)",
  "id": "kto-je-kto--mapovanie-na-reálne-produkty-wordpresswoocommerce-príklad",
  "level": 3
}, {
  "value": "Prečo je toto architektonické, nie len obchodné rozhodnutie",
  "id": "prečo-je-toto-architektonické-nie-len-obchodné-rozhodnutie",
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
  "value": "Zdroje",
  "id": "zdroje",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "k000117--ako-funguje-platba-online-payment-gateway-základy",
        children: "K000117 – Ako funguje platba online (Payment Gateway základy)"
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
          children: "payments"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e-commerce"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "woocommerce"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beginner"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fintech"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Online platba je pre väčšinu ľudí — aj obchodníkov, ktorí ju prvýkrát\nzapájajú do vlastného e-shopu — \"čierna skrinka\": klikne sa \"Kúpiť\" a\nniečo sa stane. Tento KNIFE rozoberá tú čiernu skrinku na 3\nzrozumiteľné kroky a dáva spoločný jazyk (7 pojmov), bez ktorých znie\nkaždý článok o platbách ako iný jazyk. Vzniklo pri príprave platobnej\nbrány Payout pre WordPress/WooCommerce e-shop, ale princíp je\nuniverzálny — platí pre každý online obchod."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Peniaze pri online platbe neprejdú jedným systémom, ale tromi — a\nkaždý z nich robí presne jednu vec."
      }), " Kľúčové je oddeliť \"kde si\nvyberáš\" (obchod) od \"kde zadávaš platbu\" (brána) od \"kde sa peniaze\nskutočne pohnú\" (bankové potrubie) — presne to je dôvod, prečo\nobchodná CMS (napr. WordPress) nikdy nesmie vidieť číslo karty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    A[\"1 · Obchod<br/>WordPress + WooCommerce<br/>katalóg, košík, tlačidlo Kúpiť\"] --> B[\"2 · Platobná brána<br/>Payout / Stripe / GoPay<br/>karta, Google Pay, Apple Pay, prevod\"]\n    B --> C[\"3 · Bankové potrubie<br/>Visa/Mastercard + acquiring + issuing banka<br/>neviditeľné, pár sekúnd\"]\n    C -.->|\"zaplatené / nezaplatené\"| A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Brána pošle obchodu jednoduchú správu \"zaplatené/nezaplatené\" — obchod\nsi peniaze nikdy nedrží, len si poznačí výsledok a odomkne objednávku."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď plánuješ vlastný e-shop/predaj online, over si tri veci:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Akú rolu presne hrá tvoja platobná brána — len brána, alebo aj\nacquiring \"v jednom\" (menšie brány ako Payout bežne robia oboje)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nerieš kartu priamo cez CMS (WordPress a pod.) — presne to je dôvod,\nprečo štandard PCI-DSS existuje a prečo sa to nesmie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Pay/Apple Pay nie sú samostatné, konkurenčné integrácie —\nsú to spôsoby platby VNÚTRI existujúcej brány, nie ďalší systém na\npripojenie navyše."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friendly-example--3-kroky-cesty-platby",
      children: "Friendly example — 3 kroky cesty platby"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Krok"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kto/čo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "\"Kde si...\""
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Robí"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 · Obchod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WordPress + WooCommerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kde si vyberáš"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "katalóg, ceny, košík, tlačidlo \"Kúpiť\", záznam objednávky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 · Platobná brána"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payout (alebo Stripe, GoPay, TrustPay...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kde zadávaš platbu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bezpečný formulár, karta/Google Pay/prevod, šifruje/tokenizuje číslo karty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 · Bankové potrubie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard + acquiring banka + issuing banka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kde sa peniaze skutočne pohnú"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kartová sieť smeruje požiadavku medzi oboma bankami, neviditeľné, pár sekúnd"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kde-presne-je-karta--google-pay--apple-pay",
      children: "Kde presne je karta / Google Pay / Apple Pay?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nie sú to samostatné cesty popri platobnej bráne — sú to spôsoby\nplatby ponúkané VNÚTRI kroku 2. Google Pay a Apple Pay len bezpečne\nodovzdajú uloženú kartu tej istej platobnej bráne — namiesto ručného\npísania čísla ju zákazník len potvrdí odtlačkom prsta/tvárou. Bankový\nprevod v tomto kroku zvyčajne presmeruje zákazníka priamo do jeho\ninternet bankingu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Cesta jednej platby — 3 kroky, slovník pojmov, mapovacia tabuľka",
        src: (__webpack_require__(33418)/* ["default"] */ .A) + "",
        width: "1200",
        height: "2280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(interaktívny zdroj diagramu: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/cesta-platby.html"
        }), " — stiahni súbor\nz repozitára a otvor priamo v prehliadači pre plnú interaktívnu verziu\nvrátane tmavého režimu; raw HTML ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<iframe>"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "<a>"
        }), " odkazy Docusaurus\nbuild nespracúva, preto tu zostáva len ako cesta k súboru, nie ako\nklikateľný odkaz — rovnaký vzor ako v K000111.)"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Otázky pred rozhodnutím, akú platobnú bránu zvoliť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rieši brána len krok 2 (checkout), alebo aj krok 3 (acquiring) \"v jednom\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Je licencovaná lokálnym regulátorom (napr. NBS pre SK trh)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podporuje spôsoby platby, ktoré tvoji zákazníci reálne používajú (karta, Google Pay, bankový prevod)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ako presne posiela späť stav objednávky do tvojho obchodu (webhook, API, ručná kontrola)?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slovník--7-pojmov",
      children: "Slovník — 7 pojmov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pojem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vysvetlenie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Obchodník (Merchant)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ten, kto predáva — majiteľ e-shopu/produktu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Platobná brána (Gateway)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softvér/služba, čo bezpečne prevezme platobné údaje od zákazníka a pošle ich ďalej (napr. Payout)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Acquiring banka"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banka NA STRANE OBCHODNÍKA — prijíma platbu v jeho mene. Menšie brány (ako Payout) túto rolu bežne robia samy, \"v jednom\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vydavateľská (issuing) banka"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banka zákazníka — tá, čo vydala jeho kartu a skutočne schváli/zamietne platbu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kartová sieť"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa, Mastercard — \"cesty\", po ktorých správa o platbe cestuje medzi oboma bankami. Samotné peniaze nemajú, len smerujú prevod."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tokenizácia"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Číslo karty sa nahradí náhodným \"tokenom\" — aj keby ho niekto ukradol, bez brány je nepoužiteľný."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCI-DSS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bezpečnostný štandard pre prácu s kartami — presný dôvod, prečo obchodná CMS nemá a nesmie mať k číslam kariet priamy prístup."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kto-je-kto--mapovanie-na-reálne-produkty-wordpresswoocommerce-príklad",
      children: "Kto je kto — mapovanie na reálne produkty (WordPress/WooCommerce príklad)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Produkt/pojem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Krok v ceste"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Úloha"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WordPress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 · Obchod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMS — stránky, obsah, vzhľad"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WooCommerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 · Obchod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "plugin — produkty, košík, objednávky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 · Brána"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bezpečný checkout, aj acquiring \"v jednom\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Karta / Google Pay / Apple Pay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 · Brána"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spôsoby platby vnútri checkoutu brány"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visa / Mastercard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 · Potrubie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kartová sieť, smerovanie správy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Banka zákazníka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 · Potrubie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "schváli/zamietne, drží jeho peniaze"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-je-toto-architektonické-nie-len-obchodné-rozhodnutie",
      children: "Prečo je toto architektonické, nie len obchodné rozhodnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je lákavé vidieť výber platobnej brány ako čisto obchodné rozhodnutie\n(\"vyberieme najlacnejšiu províziu\"). V praxi ide aj o bezpečnostnú a\ncompliance architektúru: rozdelenie na 3 kroky vyššie NIE JE\nimplementačný detail, je to priamy dôsledok regulácie (PCI-DSS) —\nobchod, ktorý by sa pokúsil spracovať číslo karty sám, porušuje\nštandard a preberá riziko, ktoré je práve preto delegované na\nlicencovanú platobnú bránu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DPH/daňová stránka je samostatná téma"
        }), ", tento KNIFE rieši len\ntechnický tok platby, nie B2C/OSS DPH režim ani konkrétne sadzby —\ntie sa menia a treba ich overiť s účtovníčkou/aktuálnymi sadzbami,\nnie brať ako fixné číslo odtiaľto."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Menšie/regionálne brány (Payout, GoPay, TrustPay a pod.) bežne\nspájajú krok 2 aj časť kroku 3 (acquiring) do jednej zmluvy — z\npohľadu obchodníka to vyzerá ako \"jeden partner\", technicky sú to\nstále oddelené role."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tento zápis je zámerne \"orientačný pre laika aj obchodníka\" — veľká\nčasť populácie túto oblasť vôbec nepozná, aj keď platby online robí\ndenne."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rozbíja \"čiernu skrinku\" online platby na 3 zrozumiteľné kroky a dáva\nspoločný jazyk (7 pojmov) pre ďalšie rozhodovanie o platobnej bráne,\nDPH a checkout dizajne — bez tohto rozlíšenia sa ťažko diskutuje, kde\npresne leží zodpovednosť, riziko a nastavenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zdroje",
      children: "Zdroje"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Priama práca na Payout integrácii pre WordPress/WooCommerce e-shop\n(KnowMyself.academy), 2026-09-10. Terminológia (acquiring/issuing\nbanka, tokenizácia, PCI-DSS) zodpovedá bežnej odvetvovej praxi, nie je\nviazaná na konkrétneho poskytovateľa."
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