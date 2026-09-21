"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[11368],{

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

/***/ 74405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_en_knifes_k_000119_clean_clone_of_a_class_repository_index_md_ff8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-en-knifes-k-000119-clean-clone-of-a-class-repository-index-md-ff8.json
const site_docs_en_knifes_k_000119_clean_clone_of_a_class_repository_index_md_ff8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"en/knifes/K000119-clean-clone-of-a-class-repository/K000119_EN","title":"K000119 – How to create a clean clone of a class repository","description":"How to turn any class/team template repository into your own clean clone without foreign history — one standard procedure instead of everyone solving it (or copying it wrongly) on their own. Applied to starting a repository for the STHDF 2026-2027 course.","source":"@site/docs/en/knifes/K000119-clean-clone-of-a-class-repository/index.md","sourceDirName":"en/knifes/K000119-clean-clone-of-a-class-repository","slug":"/en/knifes/K000119-clean-clone-of-a-class-repository/","permalink":"/en/knifes/K000119-clean-clone-of-a-class-repository/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"git","permalink":"/doc-tags/git"},{"inline":true,"label":"tutorial","permalink":"/doc-tags/tutorial"},{"inline":true,"label":"onboarding","permalink":"/doc-tags/onboarding"},{"inline":true,"label":"template","permalink":"/doc-tags/template"},{"inline":true,"label":"beginner","permalink":"/doc-tags/beginner"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-09-21T10:26:31.607237+00:00","fm_version_comment":"","id":"K000119_EN","guid":"0418401b-d3eb-49ec-82b0-a9a735836b01","dao":"knife","title":"K000119 – How to create a clean clone of a class repository","description":"How to turn any class/team template repository into your own clean clone without foreign history — one standard procedure instead of everyone solving it (or copying it wrongly) on their own. Applied to starting a repository for the STHDF 2026-2027 course.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"KNIFE","type":"tutorial","priority":"medium","tags":["git","tutorial","onboarding","template","beginner"],"locale":"en","created":"2026-09-21 12:26","modified":"2026-09-21 12:26","status":"published","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"knifes_overview-03","origin_repo_url":"","origin_commit":"","origin_branch":"main","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000110 – Time Travel in SDLC: Parallel Modelling and Version Control for Enterprise Architect","permalink":"/en/knifes/K000110-Time-Travel-SDLC/"},"next":{"title":"KNIFE – Knowledge In Friendly Examples","permalink":"/en/knifes/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/en/knifes/K000119-clean-clone-of-a-class-repository/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-09-21T10:26:31.607237+00:00',
	fm_version_comment: '',
	id: 'K000119_EN',
	guid: '0418401b-d3eb-49ec-82b0-a9a735836b01',
	dao: 'knife',
	title: 'K000119 – How to create a clean clone of a class repository',
	description: 'How to turn any class/team template repository into your own clean clone without foreign history — one standard procedure instead of everyone solving it (or copying it wrongly) on their own. Applied to starting a repository for the STHDF 2026-2027 course.',
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
	locale: 'en',
	created: '2026-09-21 12:26',
	modified: '2026-09-21 12:26',
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
const contentTitle = 'How to create a clean clone of a class repository';

const assets = {

};



const toc = [{
  "value": "⚡ Quick guide (Top)",
  "id": "-quick-guide-top",
  "level": 2
}, {
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
  "value": "📜 Detailed article",
  "id": "-detailed-article",
  "level": 2
}, {
  "value": "💡 Tips and notes",
  "id": "-tips-and-notes",
  "level": 2
}, {
  "value": "✅ Value / Summary",
  "id": "-value--summary",
  "level": 2
}, {
  "value": "Sources",
  "id": "sources",
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
        id: "how-to-create-a-clean-clone-of-a-class-repository",
        children: "How to create a clean clone of a class repository"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " – Knowledge In Friendly Examples\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Series:"
        }), " Systemic Thinking in IT & Digital Fabrication\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level:"
        }), " Beginner\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags:"
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
      id: "-quick-guide-top",
      children: "⚡ Quick guide (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open a terminal in the folder ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "in which"
      }), " your new project should live\n(e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/School/STHDF/"
      }), ") — not in a folder that does not exist yet. The\nclone creates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<my-folder>"
      }), " by itself as a subfolder:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone --depth 1 <TEMPLATE-URL> <my-folder>\ncd <my-folder>\nrm -rf .git\ngit init\ngit add -A\ngit commit -m \"Initial commit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Result: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<my-folder>/"
      }), " is a new, standalone git repository with a single\ncommit — the full content of the template, none of its history."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "With real values"
      }), " (the template is real, the folder is a made-up example following the convention from step 2 below):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone --depth 1 https://github.com/06-STH-Projects/2026_sthdf_class_template.git ST-099-Example\ncd ST-099-Example\nrm -rf .git\ngit init\ngit add -A\ngit commit -m \"Initial commit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-it-solves-purpose-goal",
      children: "🎯 What it solves (purpose, goal)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When someone tells you \"make a clone of this repository\", the most\nnatural reaction is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git clone <url>"
      }), ". The problem: it transfers not only\nthe content but the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entire history"
      }), " of the source repository — every\ncommit, every message, every author who ever worked on the template."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a one-off template repository this causes three real problems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Foreign history in your repository."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log"
        }), " shows somebody\nelse's commits, not your work — orientation and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git blame"
        }), " are\npolluted from the very start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A hidden link to the original repo."
        }), " The clone keeps ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), "\npointing at the template — it is easy to push (or try to push) to\nsomebody else's repository by mistake instead of your own."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Without a standard, everybody solves it differently"
        }), " — or copies a\nwrong procedure from someone else. That is exactly why this is a\nKNIFE and not just a one-off note: once written down, the procedure\ncan be handed on — from teacher to students, and later between\nstudents."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-it-solves-it-principle",
      children: "🧩 How it solves it (principle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n  T[\"Template repository\\n(foreign history, N commits)\"]\n  S[\"Shallow clone\\n--depth 1\"]\n  C[\"rm -rf .git\\n(drop the history)\"]\n  N[\"git init\\n(new history)\"]\n  O[\"Your own repository\\n(1 commit, yours)\"]\n\n  T -->|clone| S --> C --> N --> O"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three steps, each with a clear reason:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "git clone --depth 1"
          })
        }), " — downloads only the current state of the\nfiles, not the whole history (faster, less data — although a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git/"
        }), "\nfolder is still brought along)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "rm -rf .git"
          })
        }), " — removes the inherited ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git"
        }), " directory entirely.\nBoth the history and the link to the template's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), " disappear."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git init"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git add -A"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git commit"
          })]
        }), " — creates a completely\nnew, empty history with a single commit: \"this is my start\"."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-how-to-use-it-application",
      children: "🧪 How to use it (application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step by step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify the template URL"
          }), " given to you by the teacher / team lead."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Choose a folder name following the agreed convention"
          }), " — in the\nSTHDF course e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ST-042-MyName"
          }), " (individual work) or\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "PRJ-017-ProjectName"
          }), " (team project). The convention is reused later\nwhen outputs are published, so stick to it from the start."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Run the three commands from the Quick guide"
          }), " above."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create an empty repository on GitHub"
          }), " (no README, no\n", (0,jsx_runtime.jsx)(_components.code, {
            children: ".gitignore"
          }), " — you already have them from the clone) and connect it:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git remote add origin <URL-of-your-new-repository>\ngit branch -M main\ngit push -u origin main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Check that ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git remote -v"
            }), " points to YOUR repository"]
          }), ", not to the\ntemplate."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "There is no \"school server\"."
        }), " The repository from step 4 is just an\nordinary personal GitHub account — there is nothing else to set up or\nregister for. If you do not have a GitHub account yet, create one at\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/join",
          children: "github.com/join"
        }), " (free)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Later, when your output is finished — you do not have to do\nanything with the class repository itself."
        }), " Your repository from\nsteps 1–5 is completely independent and stays that way. The teacher\nprojects it into the class dashboard (", (0,jsx_runtime.jsx)(_components.code, {
          children: "students/ST0XX/"
        }), ") — your only\njob is to have your assigned ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ST0XX"
        }), " number (roster) and to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "share\nthe link to your finished repository"
        }), " wherever the teacher tells\nyou. Transferring it to the class repository is the teacher's\nprocess, not yours."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A real-life example:"
      }), " this exact procedure was used to start the\nrepository for the new run of the course — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2026_sthdf_class_template"
      }), " →\nclone → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class_sthdf_2026-2027"
      }), ", with a single \"Initial commit\" instead\nof the inherited history of dozens of earlier template iterations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailed-article",
      children: "📜 Detailed article"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why not a plain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        }), "?"]
      }), " Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--depth 1"
      }), " and without\ncleaning ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".git/"
      }), " afterwards you inherit everything — including things\nthat were never meant for public circulation in the template (old notes,\nwork-in-progress commits, names of previous authors). For a one-off\nstart of a new project this has no value, only noise and risk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "degit"
        }), " or another specialised tool?"]
      }), " Tools exist (e.g.\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx degit"
      }), ") that do exactly this in one command. Here, however, the\nprocedure deliberately uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "plain git only"
      }), " — it works anywhere git\nis installed, with no dependency on Node.js/npm or any other runtime.\nFor a group in which not everybody has the same development\nenvironment, it is the more reliable common denominator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf .git"
        }), " and not e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git checkout --orphan"
        }), "?"]
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--orphan"
      }), "\ncreates a new branch without parents, but the original commits remain\nreachable in the repository (until ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git gc"
      }), " removes them) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), "\nstays set to the template. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rm -rf .git"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git init"
      }), " is more\nunambiguous: after this step there is no trace of the original\nrepository in the folder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tips-and-notes",
      children: "💡 Tips and notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Folder already exists?"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        }), " refuses to clone into a\nnon-empty folder — check the name beforehand, or clone into a\ntemporary name and rename it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Forgot ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rm -rf .git"
          }), "?"]
        }), " You can tell because ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log"
        }), " shows foreign\ncommits. Check right after the clone (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log --oneline"
        }), " should show\nonly the template's history until you run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git init"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git push"
          }), " fails with \"Permission denied\"?"]
        }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git remote -v"
        }), "\n— if it still points to the template instead of your repository, the\n", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git"
        }), " folder was not removed properly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows:"
        }), " the procedure works the same in Git Bash; in PowerShell\nreplace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf .git"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Remove-Item -Recurse -Force .git"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-value--summary",
      children: "✅ Value / Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Three commands instead of repeated live explanations — and above all\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one written-down, repeatable procedure"
      }), " instead of every student (or\nevery new year) discovering it from scratch, or taking a wrong version\nfrom a classmate. It works for any template repository, not just STHDF\n— it is a general onboarding pattern for a new project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Created directly from preparing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2026_sthdf_class_template"
      }), " for the\nSTHDF 2026-2027 run (repository ", (0,jsx_runtime.jsx)(_components.code, {
        children: "06-STH-Projects/2026_sthdf_class_template"
      }), ",\nscript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools/clone-student-template.sh"
      }), ") — written down as a standalone\nKNIFE so that the procedure is portable beyond this one course."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG_EN",
          children: "⬅ KNIFES – Overview"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_LIST_EN",
          children: "List"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS_EN",
          children: "Details"
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