"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[73152],{

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

/***/ 53823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000107_en_taxonomy_and_ontology_index_md_b26_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000107-en-taxonomy-and-ontology-index-md-b26.json
const site_docs_en_knifes_k_000107_en_taxonomy_and_ontology_index_md_b26_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000107_EN-TaxonomyAndOntology/K000107_EN_01","title":"K000107 – Taxonomy and Ontology in SDLC","description":"Why every science that wants to call itself a science builds a conceptual vocabulary — and why computer science is still catching up. Practical frameworks: APV, SFIA, TBM, and their application across SDLC.","source":"@site/docs/en/knifes/K000107_EN-TaxonomyAndOntology/index.md","sourceDirName":"en/knifes/K000107_EN-TaxonomyAndOntology","slug":"/en/knifes/K000107_EN-TaxonomyAndOntology/","permalink":"/en/knifes/K000107_EN-TaxonomyAndOntology/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Taxonomy","permalink":"/doc-tags/taxonomy"},{"inline":true,"label":"Ontology","permalink":"/doc-tags/ontology"},{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"APV","permalink":"/doc-tags/apv"},{"inline":true,"label":"SFIA","permalink":"/doc-tags/sfia"},{"inline":true,"label":"TBM","permalink":"/doc-tags/tbm"},{"inline":true,"label":"AI","permalink":"/doc-tags/ai"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"ContextAwareApproach","permalink":"/doc-tags/context-aware-approach"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-06-01T00:00:00.000000+00:00","fm_version_comment":"","id":"K000107_EN_01","guid":"cd047284-e28d-4670-b808-16bb308bf395","dao":"knife","title":"K000107 – Taxonomy and Ontology in SDLC","description":"Why every science that wants to call itself a science builds a conceptual vocabulary — and why computer science is still catching up. Practical frameworks: APV, SFIA, TBM, and their application across SDLC.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["Taxonomy","Ontology","SDLC","APV","SFIA","TBM","AI","EnterpriseArchitecture","CAA","ContextAwareApproach"],"locale":"en","created":"2026-06-01 00:00","modified":"2026-06-01 00:00","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka"},"sidebar":"tutorialSidebar","previous":{"title":"K000106 – SSOT and TSSOT: How Many Truths Does It Take to Deliver a Successful Solution?","permalink":"/en/knifes/K000106-SSOTandTSSOT/"},"next":{"title":"K000107 – APV: Assets, Perspectives, Views","permalink":"/en/knifes/K000107_EN-TaxonomyAndOntology/K000107-APV-index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000107_EN-TaxonomyAndOntology/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-06-01T00:00:00.000000+00:00',
	fm_version_comment: '',
	id: 'K000107_EN_01',
	guid: 'cd047284-e28d-4670-b808-16bb308bf395',
	dao: 'knife',
	title: 'K000107 – Taxonomy and Ontology in SDLC',
	description: 'Why every science that wants to call itself a science builds a conceptual vocabulary — and why computer science is still catching up. Practical frameworks: APV, SFIA, TBM, and their application across SDLC.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'Taxonomy',
		'Ontology',
		'SDLC',
		'APV',
		'SFIA',
		'TBM',
		'AI',
		'EnterpriseArchitecture',
		'CAA',
		'ContextAwareApproach'
	],
	locale: 'en',
	created: '2026-06-01 00:00',
	modified: '2026-06-01 00:00',
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
const contentTitle = 'KNIFE – Taxonomy and Ontology in SDLC';

const assets = {

};



const toc = [{
  "value": "When will computer science catch up with the natural sciences?",
  "id": "when-will-computer-science-catch-up-with-the-natural-sciences",
  "level": 2
}, {
  "value": "🎯 What it solves",
  "id": "-what-it-solves",
  "level": 2
}, {
  "value": "Customer vs IT-Service Provider – without communication there is no understanding, without understanding there is no trust",
  "id": "customer-vs-it-service-provider--without-communication-there-is-no-understanding-without-understanding-there-is-no-trust",
  "level": 3
}, {
  "value": "🧩 Frameworks covered in this article",
  "id": "-frameworks-covered-in-this-article",
  "level": 2
}, {
  "value": "📜 The logarithmic acceleration",
  "id": "-the-logarithmic-acceleration",
  "level": 2
}, {
  "value": "✅ Summary",
  "id": "-summary",
  "level": 2
}, {
  "value": "Bridge to next topics",
  "id": "bridge-to-next-topics",
  "level": 3
}, {
  "value": "Sources",
  "id": "sources",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "knife--taxonomy-and-ontology-in-sdlc",
        children: "KNIFE – Taxonomy and Ontology in SDLC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-will-computer-science-catch-up-with-the-natural-sciences",
      children: "When will computer science catch up with the natural sciences?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves",
      children: "🎯 What it solves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do you remember biology class?\nSpecies, subspecies, family, class, order..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every discipline that wants to call itself a science builds a conceptual vocabulary.\nAristotle began classifying living organisms around 350 BC.\nLinnaeus completed it into a system in 1735 — 11 pages that changed science.\nFrom Aristotle to Linnaeus: nearly 2,000 years of systematic work."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "The daily reality in SDLC",
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Every day, practitioners across the SDLC encounter conceptual ambiguity.\nThe same word. Five interpretations.\nFive interpretations. One failing project."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "This is not a technology problem. It is a vocabulary problem."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customer-vs-it-service-provider--without-communication-there-is-no-understanding-without-understanding-there-is-no-trust",
      children: "Customer vs IT-Service Provider – without communication there is no understanding, without understanding there is no trust"
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
        src: (__webpack_require__(89884)/* ["default"] */ .A),
        alt: "Customer vs IT-Service Provider – without communication there is no understanding, without understanding there is no trust",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The diagram above shows the complexity of a typical IT service relationship.\nCustomer on the left: Board, CFO, Process Owners, IT Management, Operations.\nIT-Service Provider on the right: CEO, Operations Managers, Account Executive, dozens of process roles."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not everyone needs to create the taxonomy.\nBut everyone needs to rely on it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-frameworks-covered-in-this-article",
      children: "🧩 Frameworks covered in this article"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This article is split into focused sections:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it addresses"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "APV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vocabulary of solution assets — what exists, from whose perspective, what they see"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./K000107-APV-index",
              children: "K000107 – APV"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SFIA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vocabulary of people and skills across IT roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./K000107-SFIA-index",
              children: "K000107 – SFIA"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TBM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vocabulary of IT costs connecting technology to business value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./K000107-TBM-index",
              children: "K000107 – TBM"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "APV in three questions",
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Before building any model or document in your SDLC:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["What ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "asset"
          }), " are we describing?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["From whose ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "perspective"
          }), " are we looking at it?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["What ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "view"
          }), " does this stakeholder actually need to see?"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-the-logarithmic-acceleration",
      children: "📜 The logarithmic acceleration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computer science is 80 years old. From Aristotle to Linnaeus it took roughly 2,000 years.\nBut look at the pace of change:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Transition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1st → 2nd industrial revolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steam → electricity & mass production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2nd → 3rd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electricity → computers & automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3rd → 4th"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computers → Industry 4.0, IoT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4th → massive AI adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry 4.0 → generative AI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is shortening logarithmically. Today it might already be months."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The urgency is real: AI does not work on intuition.\nFeed it conceptual chaos and it reproduces that chaos — quickly and confidently.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "The quality of your taxonomy directly determines the quality of your AI outputs."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "AI without taxonomy",
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "AI amplifies what it receives.\nIf your SDLC vocabulary is inconsistent across roles and phases, AI will consistently amplify that inconsistency — at speed and at scale."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-summary",
      children: "✅ Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Taxonomy and ontology in SDLC are not academic concepts.\nThey are the prerequisite for any organisation that wants to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communicate effectively across roles and phases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure what matters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build AI systems that produce reliable outputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APV provides the framework for solution asset vocabulary.\nSFIA provides the framework for people and skills vocabulary.\nTBM provides the framework for cost and value vocabulary."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None of them requires starting from scratch.\nAll of them require organisational commitment to shared language."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "CAA connection",
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This connects directly to the CAA communication chain from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000103-CAA_IN_SDLC/",
          children: "K000103"
        }), ":\nWithout Communication → no Understanding\nWithout Understanding → no Trust\nWithout Trust → no Collaboration\nWithout Collaboration → no Synergy\nWithout Synergy → no Success"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Taxonomy is the infrastructure of Communication."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bridge-to-next-topics",
      children: "Bridge to next topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A taxonomy tells you what the words mean.\nKERNARO shows you how AI can navigate that vocabulary in practice — see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000104-SPARX_AI_KERNARO_IN_SDLC/",
        children: "K000104"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without a shared vocabulary, you cannot measure lead time.\nQRM shows you how to use that measurement to drive delivery speed — see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000108-QRM/",
        children: "K000108 – Quick Response Manufacturing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.britannica.com/biography/Carolus-Linnaeus",
          children: "https://www.britannica.com/biography/Carolus-Linnaeus"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.visionlearning.com/en/library/Biology/2/Taxonomy-I/70/",
          children: "https://www.visionlearning.com/en/library/Biology/2/Taxonomy-I/70/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://sfia-online.org",
          children: "https://sfia-online.org"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.tbmcouncil.org",
          children: "https://www.tbmcouncil.org"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://quality-one.com/8d/",
          children: "https://quality-one.com/8d/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://rajansuri.com",
          children: "https://rajansuri.com"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.yarken.com/home",
          children: "https://www.yarken.com/home"
        })
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



/***/ }),

/***/ 89884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07-People-ProfitsFromAPV-dd34cfd6fb0ac4b57bbc65a2f51bade6.png");

/***/ })

}]);