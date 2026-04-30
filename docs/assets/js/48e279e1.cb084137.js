"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[34812],{

/***/ 5192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01-DigitalMappingOdReality-05da05f842a0ae5c6aebe9489b88df57.png");

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

/***/ 54417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04-Tools-Focus_AI-e58a2119a62b0dd80f0ffea583f7491e.png");

/***/ }),

/***/ 55649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-All_in_One-283ece8a8b8a0b8840ce635cd40812f8.png");

/***/ }),

/***/ 65043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000103_caa_in_sdlc_index_md_48e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000103-caa-in-sdlc-index-md-48e.json
const site_docs_en_knifes_k_000103_caa_in_sdlc_index_md_48e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000103-CAA_IN_SDLC/K000103","title":"K000103 – Context Aware Approach in SDLC","description":"Context Aware Approach (CAA) applied to Solution Development Life Cycle — why context must be understood before any tool or technology decision is made.","source":"@site/docs/en/knifes/K000103-CAA_IN_SDLC/index.md","sourceDirName":"en/knifes/K000103-CAA_IN_SDLC","slug":"/en/knifes/K000103-CAA_IN_SDLC/","permalink":"/en/knifes/K000103-CAA_IN_SDLC/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SDLC","permalink":"/doc-tags/sdlc"},{"inline":true,"label":"CAA","permalink":"/doc-tags/caa"},{"inline":true,"label":"EnterpriseArchitecture","permalink":"/doc-tags/enterprise-architecture"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-29T06:56:28.587132+00:00","fm_version_comment":"","id":"K000103","guid":"b0a589dc-ccab-43a3-a07e-30acf9eb6be5","dao":"knife","title":"K000103 – Context Aware Approach in SDLC","description":"Context Aware Approach (CAA) applied to Solution Development Life Cycle — why context must be understood before any tool or technology decision is made.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["SDLC","CAA","EnterpriseArchitecture"],"locale":"en","created":"2026-04-29 08:56","modified":"2026-04-29 08:56","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000101 – CYNEFIN Framework","permalink":"/en/knifes/K000101-CYNEFIN_Framework/"},"next":{"title":"K000104 – SPARX-AI KERNARO in context of SDLC support","permalink":"/en/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000103-CAA_IN_SDLC/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-29T06:56:28.587132+00:00',
	fm_version_comment: '',
	id: 'K000103',
	guid: 'b0a589dc-ccab-43a3-a07e-30acf9eb6be5',
	dao: 'knife',
	title: 'K000103 – Context Aware Approach in SDLC',
	description: 'Context Aware Approach (CAA) applied to Solution Development Life Cycle — why context must be understood before any tool or technology decision is made.',
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
	locale: 'en',
	created: '2026-04-29 08:56',
	modified: '2026-04-29 08:56',
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
const contentTitle = 'KNIFE Context Aware Approach in SDLC';

const assets = {

};



const toc = [{
  "value": "🎯 What it solves (purpose, goal)",
  "id": "-what-it-solves-purpose-goal",
  "level": 2
}, {
  "value": "🧩 How it solves it (principle)",
  "id": "-how-it-solves-it-principle",
  "level": 2
}, {
  "value": "🧪 How to use it (application)",
  "id": "-how-to-use-it-application",
  "level": 2
}, {
  "value": "⚡ Quick Guide (Top)",
  "id": "-quick-guide-top",
  "level": 2
}, {
  "value": "📜 Detailed Article",
  "id": "-detailed-article",
  "level": 2
}, {
  "value": "Why do we draw pictures? (sketches, diagrams, models)",
  "id": "why-do-we-draw-pictures-sketches-diagrams-models",
  "level": 3
}, {
  "value": "💡 Tips and Notes",
  "id": "-tips-and-notes",
  "level": 2
}, {
  "value": "✅ Value / Summary",
  "id": "-value--summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "knife-context-aware-approach-in-sdlc",
        children: "KNIFE Context Aware Approach in SDLC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(SDLC – Solution Development Life Cycle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves-purpose-goal",
      children: "🎯 What it solves (purpose, goal)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No solution in any domain exists in isolation — it lives within a specific context that fundamentally shapes what is being built.\nIt follows naturally that every solution must begin with understanding that context.\nThis spans a wide range of topics: people, processes, technology, politics, market conditions, and more.\nIn this article we focus on describing context for delivering IT solutions, but the principles apply broadly."
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
        src: (__webpack_require__(96786)/* ["default"] */ .A),
        alt: "CAA – Context Aware Approach in SDLC",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it-principle",
      children: "🧩 How it solves it (principle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Visualizing context greatly helps with understanding it — which in practice means mapping the real world into a digital form.\nA wide spectrum of tools and applications is available for this purpose. Which one to choose, and what criteria to apply?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In our case, we emphasize the following principles and properties. Technologies should support these principles as broadly as possible."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Principles"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One picture is worth a thousand words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One model is worth a thousand pictures."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is no good solution without pictures.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["This requires clarifying:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "what \"good solution\" means"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "what \"picture / diagram\" means"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The following principles help deliver better solutions (where \"better\" also needs to be defined):", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Without Communication — there is no Understanding"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Without Understanding — there is no Trust"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Without Trust — there is no good Collaboration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Without good Collaboration — there is no Success"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every solution passes through the basic phases defined in the V-Model:\nIdea → High-Level Design → Analysis → Detailed Design → Implementation → Verification & Testing → Operations → Change Management", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The order, depth, and time spent on each phase depend on the solution — but every solution must at minimum go through a mental exercise from idea to operations, regardless of the delivery approach (Waterfall, Agile, hybrid)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Functional requirements for supporting tools across SDLC roles"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "(brief, highly selective — depends on solution context and team/organization character)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplicity and intuitiveness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many SDLC roles does the tool support?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Degree to which a single technology satisfies the needs of individual roles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal vs. specialized tool"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Openness of the technology:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Interoperability", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Third-party integrations"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Modularity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ability to extend the system with new capabilities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support for workflow automation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Non-functional requirements"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Market presence:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Product/system reach in the market / specific domains / areas"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Availability of know-how"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Community"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Knowledgeable individuals within the organization"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Market longevity:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Startup vs. established company"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Market and segment recognition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "University and broader community support"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deployment options:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "On-premise"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "On-client"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cloud solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mobile devices"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Licensing model:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Floating licenses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dedicated licenses"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment model:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "One-time + upgrade/renewal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Subscription"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Personal preferences:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Positive past experience with the technology's features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Existing knowledge of the product, including its strengths and weaknesses"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it-application",
      children: "🧪 How to use it (application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When evaluating a specific technology, it is advisable to consider as many criteria as possible before starting the assessment.\nEvery selection is individual and valid only within the specific context of a given organization, team, or person.\nWhen benchmarking, comparable criteria and comparable contexts must be established — otherwise the results will be misleading."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-guide-top",
      children: "⚡ Quick Guide (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following images support the visualization of my context when selecting and evaluating tools suitable for solution delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailed-article",
      children: "📜 Detailed Article"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-do-we-draw-pictures-sketches-diagrams-models",
      children: "Why do we draw pictures? (sketches, diagrams, models)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mapping reality into digital form."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image published with kind permission of IASA:\nAaron Tan Dani, FSCS — Chief Architect, Digital Enterprise Architecture Office\nMtech (NUS), CITA-F, CITA-A, TOGAF, ArchiMate, COBIT, PMP\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://iasaglobal.org/Services/Public/News/Articles/Establishing-Digital-Transformation-and-Smart-Factory-Blueprint-with-EA.aspx",
        children: "https://iasaglobal.org/Services/Public/News/Articles/Establishing-Digital-Transformation-and-Smart-Factory-Blueprint-with-EA.aspx"
      })]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(5192)/* ["default"] */ .A),
      alt: "01 – Mapping the Real World to the Digital World",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Why do we put so much effort into mapping reality to the digital world?\nI believe it is because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It increases the chance of shared understanding among roles and people within the solution lifecycle."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It supports decision-makers.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3Rs: Right Information – for the Right Role – at the Right Time"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(66237)/* ["default"] */ .A),
      alt: "02 – Relationship Between Supplier and Customer in the SDLC Context",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(68422)/* ["default"] */ .A),
      alt: "03 – SDLC and Deliverables Between SDLC Phases",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(54417)/* ["default"] */ .A),
      alt: "04 – Areas for Tool Assessment from Multiple Perspectives (incomplete)",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: (__webpack_require__(55649)/* ["default"] */ .A),
      alt: "05 – Everything in One Picture",
      style: {
        maxWidth: '800px',
        width: '100%'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes",
      children: "💡 Tips and Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The presented topic is highly complex and requires techniques suited to complex challenges.\nSee KNIFE ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../K000101-CYNEFIN_Framework/",
        children: "Cynefin"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core idea for addressing complex questions follows this pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe → Sense → Respond"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Try → Observe first experiences → Consciously react and refine your original understanding."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-value--summary",
      children: "✅ Value / Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is better?\nA Bentley or a ŠKODA?\nMac or Windows?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is an application? What is a platform?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How many endless discussions and arguments, for and against.\nBut why? Isn't it a pointless debate with no winner?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As long as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context"
      }), " for the question, problem, or challenge is not defined — there is no point in continuing the discussion or the solution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once we at least attempt to understand the solution context to a sufficient depth, we gain constraints and boundaries that fundamentally help us understand the solution, find the right answers — and to do so constructively.\nWithout unnecessary arguing, quarreling, and wasting precious time."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["No tool, no technology will ever be perfect for all contexts.\nOur task is to understand the context and choose a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "good enough"
        }), " solution for that specific context."]
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

/***/ 66237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02-Market-SDLC-76e23b5658b3ad1de2b3f1d57a7d4485.png");

/***/ }),

/***/ 68422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03-SDLC-Deliverables-a921ec8fd29b6db6c70f83fcd946daeb.png");

/***/ }),

/***/ 96786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CAA-Approach-In-SDLC-7accf2bc14eafc1191ccf1e6998ce14a.png");

/***/ })

}]);