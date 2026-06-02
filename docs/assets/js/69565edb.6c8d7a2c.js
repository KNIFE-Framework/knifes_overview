"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[97153],{

/***/ 21606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_7_ds_01_7_ds_01_d_1_management_04_decisions_02_rules_knife_i_18_n_workflow_md_695_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-7-ds-01-7-ds-01-d-1-management-04-decisions-02-rules-knife-i-18-n-workflow-md-695.json
const site_docs_sk_7_ds_01_7_ds_01_d_1_management_04_decisions_02_rules_knife_i_18_n_workflow_md_695_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/7Ds/01-7ds/D1-Management/Decisions/Rules/KNIFE-i18n-workflow","title":"Pravidlá: KNIFE i18n workflow (EN → SK preklad)","description":"Overené pravidlá a postup pre preklad KNIFE článkov z EN do SK. Vzniklo na základe praktických skúseností z 2026-06-02.","source":"@site/docs/sk/7Ds/01-7ds/01.D1-Management/04.Decisions/02.Rules/KNIFE-i18n-workflow.md","sourceDirName":"sk/7Ds/01-7ds/01.D1-Management/04.Decisions/02.Rules","slug":"/sk/7Ds/01-7ds/D1-Management/Decisions/Rules/KNIFE-i18n-workflow","permalink":"/sk/7Ds/01-7ds/D1-Management/Decisions/Rules/KNIFE-i18n-workflow","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/doc-tags/knife"},{"inline":true,"label":"i18n","permalink":"/doc-tags/i-18-n"},{"inline":true,"label":"Docusaurus","permalink":"/doc-tags/docusaurus"},{"inline":true,"label":"workflow","permalink":"/doc-tags/workflow"},{"inline":true,"label":"translation","permalink":"/doc-tags/translation"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-02T00:00:00.000000+00:00","fm_version_comment":"","id":"KNIFE-i18n-workflow","guid":"d7313c93-71af-4357-8c45-6f4afa70f726","dao":"7ds","title":"Pravidlá: KNIFE i18n workflow (EN → SK preklad)","description":"Overené pravidlá a postup pre preklad KNIFE článkov z EN do SK. Vzniklo na základe praktických skúseností z 2026-06-02.","author":"Roman Kazicka","authors":["Roman Kazicka"],"tags":["KNIFE","i18n","Docusaurus","workflow","translation"],"locale":"sk","created":"2026-06-02 00:00","modified":"2026-06-02 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"02.Rules","permalink":"/sk/7Ds/01-7ds/D1-Management/Decisions/Rules/"},"next":{"title":"03.SWOT","permalink":"/sk/7Ds/01-7ds/D1-Management/Decisions/SWOT/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/7Ds/01-7ds/01.D1-Management/04.Decisions/02.Rules/KNIFE-i18n-workflow.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-02T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'KNIFE-i18n-workflow',
	guid: 'd7313c93-71af-4357-8c45-6f4afa70f726',
	dao: '7ds',
	title: 'Pravidlá: KNIFE i18n workflow (EN → SK preklad)',
	description: 'Overené pravidlá a postup pre preklad KNIFE článkov z EN do SK. Vzniklo na základe praktických skúseností z 2026-06-02.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	tags: [
		'KNIFE',
		'i18n',
		'Docusaurus',
		'workflow',
		'translation'
	],
	locale: 'sk',
	created: '2026-06-02 00:00',
	modified: '2026-06-02 00:00',
	status: 'published',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	copyright: '© 2026 Roman Kazicka',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka'
};
const contentTitle = 'Pravidlá: KNIFE i18n workflow (EN → SK preklad)';

const assets = {

};



const toc = [{
  "value": "Postup prekladu",
  "id": "postup-prekladu",
  "level": 2
}, {
  "value": "1. Krok — kopírovanie štruktúry",
  "id": "1-krok--kopírovanie-štruktúry",
  "level": 3
}, {
  "value": "2. Krok — preklad MD súborov",
  "id": "2-krok--preklad-md-súborov",
  "level": 3
}, {
  "value": "3. Krok — build overenie",
  "id": "3-krok--build-overenie",
  "level": 3
}, {
  "value": "Pravidlá frontmatter",
  "id": "pravidlá-frontmatter",
  "level": 2
}, {
  "value": "Pre <code>index.md</code> súbory (hlavné stránky priečinka)",
  "id": "pre-indexmd-súbory-hlavné-stránky-priečinka",
  "level": 3
}, {
  "value": "Pre non-index súbory (sub-stránky v priečinku)",
  "id": "pre-non-index-súbory-sub-stránky-v-priečinku",
  "level": 3
}, {
  "value": "Pravidlá pre obrázky",
  "id": "pravidlá-pre-obrázky",
  "level": 2
}, {
  "value": "Pravidlá pre Sources / Zdroje",
  "id": "pravidlá-pre-sources--zdroje",
  "level": 2
}, {
  "value": "Pravidlá pre SK overview generátor",
  "id": "pravidlá-pre-sk-overview-generátor",
  "level": 2
}, {
  "value": "Poznámky k architektúre viacjazyčnosti",
  "id": "poznámky-k-architektúre-viacjazyčnosti",
  "level": 2
}, {
  "value": "Kontrolný zoznam pred commitom",
  "id": "kontrolný-zoznam-pred-commitom",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
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
        id: "pravidlá-knife-i18n-workflow-en--sk-preklad",
        children: "Pravidlá: KNIFE i18n workflow (EN → SK preklad)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overené pravidlá a postup pre tvorbu SK (alebo iných jazykových) verzií KNIFE článkov.\nVzniklo na základe praktických skúseností z 2026-06-02 (preklady K103, K106, K107, K108)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postup-prekladu",
      children: "Postup prekladu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-krok--kopírovanie-štruktúry",
      children: "1. Krok — kopírovanie štruktúry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp -r content/docs/en/knifes/K000XXX-NazovArticlu \\\n      content/docs/sk/knifes/K000XXX-NazovArticlu\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kopíruje ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "všetky súbory"
        }), " vrátane obrázkov (", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Obrázky sa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "neprekladajú"
        }), " — sú identické v oboch jazykoch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nikdy nevytváraj len ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitkeep"
        }), " — kopíruj hneď"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-krok--preklad-md-súborov",
      children: "2. Krok — preklad MD súborov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre každý ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".md"
      }), " súbor v SK priečinku:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zmeň frontmatter (viď pravidlá nižšie)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prelož text do slovenčiny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zachovaj technické pojmy v EN (MCT, SDLC, APV, SFIA, TBM, Agile, Lean, ...)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zachovaj všetky image ", (0,jsx_runtime.jsx)(_components.code, {
          children: "require()"
        }), " paths — sú identické v EN aj SK"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zachovaj všetky URL zdroje"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-krok--build-overenie",
      children: "3. Krok — build overenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "make knifes-overview LOCALE=sk\nmake build   # alebo make build-sk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pravidlá-frontmatter",
      children: "Pravidlá frontmatter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "pre-indexmd-súbory-hlavné-stránky-priečinka",
      children: ["Pre ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.md"
      }), " súbory (hlavné stránky priečinka)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pole"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pravidlo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "id"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "K000XXX_SK"
            }), " — s ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_SK"
            }), " postfixom (uppercase)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "guid"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Nové UUID — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uuidgen | tr '[:upper:]' '[:lower:]'"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "locale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"sk\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fm_build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aktuálny dátum ISO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zachovaj z EN (published/draft)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Príklad: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id: \"K000106_SK\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "guid: \"c37927c6-...\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "locale: \"sk\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-non-index-súbory-sub-stránky-v-priečinku",
      children: "Pre non-index súbory (sub-stránky v priečinku)"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Kľúčové pravidlo Docusaurus",
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Pre non-index ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".md"
        }), " súbory (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K000107-APV-index.md"
        }), ") Docusaurus používa ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "id"
          }), " ako URL slug"]
        }), ".\nPreto ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " musí byť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "presne zhodný s názvom súboru"
        }), " (bez ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".md"
        }), " a bez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_SK"
        }), " postfixu)."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pole"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pravidlo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "id"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "K000107-APV-index"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "rovnaké ako názov súboru"
            }), ", bez ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_SK"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "guid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nové UUID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "locale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"sk\""
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dôvod: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id: \"K000107-APV-index_SK\""
      }), " vytvorí route ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/K000107-APV-index_SK"
      }), ", ale linky\nv texte smerujú na ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./K000107-APV-index"
      }), " → broken link error."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.md"
      }), " toto neplatí — route je vždy folder URL bez ohľadu na ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pravidlá-pre-obrázky",
      children: "Pravidlá pre obrázky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Obrázky ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nekopíruj manuálne"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cp -r"
        }), " ich skopíruje automaticky"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Priečinok je vždy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "img/"
        }), " (lowercase) — pri premenúvaní z ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IMG/"
        }), " použiť ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mv"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Názvy súborov obrázkov ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nemeniť"
        }), " — identické v EN aj SK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Problematické znaky v názvoch (medzery, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), ") opraviť raz v EN, SK dostane správnu verziu cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cp -r"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pravidlá-pre-sources--zdroje",
      children: "Pravidlá pre Sources / Zdroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Markdown ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1] url"
      }), " na jednom riadku = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vyrenderuje sa inline"
      }), " (všetky za sebou).\nSprávny formát pre SK aj EN:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Zdroje / Sources\n\n1. https://...\n2. https://...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Číslovaný zoznam ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1."
      }), " zabezpečí každý zdroj na vlastnom riadku."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pravidlá-pre-sk-overview-generátor",
      children: "Pravidlá pre SK overview generátor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "make knifes-overview LOCALE=sk\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Skript zbiera ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["len ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.mdx"
        }), " súbory"]
      }), " — sub-stránky (napr. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K000107-APV-index.md"
      }), ") sa do overview nedostanú automaticky.\nTo je žiaduce správanie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "poznámky-k-architektúre-viacjazyčnosti",
      children: "Poznámky k architektúre viacjazyčnosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Každý jazyk je ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "samostatný svet"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "content/docs/en/"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "content/docs/sk/"
        }), " sú nezávislé"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rovnaká štruktúra priečinkov (rovnaké folder mená) v oboch jazykoch"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single source of truth pre obsah"
        }), " = EN; SK je preklad"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ďalšie jazyky (ZH, DE, ...) = rovnaký postup, stačí pridať ", (0,jsx_runtime.jsx)(_components.code, {
          children: "content/docs/zh/"
        }), " a locale do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus.config.js"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Governance risk: bez CI kontroly začnú EN a SK divergovať do 3 mesiacov — zvážiť ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status: \"translated\""
        }), " + dátum prekladu ako tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kontrolný-zoznam-pred-commitom",
      children: "Kontrolný zoznam pred commitom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cp -r"
        }), " prebehol (obrázky sú skopírované)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Všetky MD súbory majú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "locale: \"sk\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), " súbory majú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_SK"
        }), " postfixom a nové GUID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Non-index súbory majú ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " zhodný s názvom súboru (bez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_SK"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make knifes-overview LOCALE=sk"
        }), " prebehol bez chýb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make build"
        }), " prebehol bez broken links"]
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