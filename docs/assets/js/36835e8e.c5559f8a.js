"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[18184],{

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

/***/ 40545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var _defs;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgCynefinDetail = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 680 561.31",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
  id: titleId
}, title) : null, _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("marker", {
  id: "arrow",
  markerHeight: 6,
  markerWidth: 6,
  orient: "auto-start-reverse",
  refX: 8,
  refY: 5,
  viewBox: "0 0 10 10"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "none",
  stroke: "context-stroke",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m2 1 6 4-6 4"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "imagine-text-gaps-fpngth",
  maskUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  d: "M0 0h680v561.31H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 44.014,
  height: 21.472,
  x: 152.993,
  y: 49.264,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 183.681,
  height: 19.111,
  x: 83.159,
  y: 70.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 89.03,
  height: 19.111,
  x: 130.485,
  y: 104.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 129.073,
  height: 19.111,
  x: 110.463,
  y: 140.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 190.064,
  height: 19.111,
  x: 79.968,
  y: 176.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 203.699,
  height: 19.111,
  x: 73.15,
  y: 204.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 93.354,
  height: 21.472,
  x: 458.323,
  y: 49.264,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 167.087,
  height: 19.111,
  x: 421.456,
  y: 70.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 170.002,
  height: 19.111,
  x: 419.999,
  y: 104.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 101.411,
  height: 19.111,
  x: 454.294,
  y: 140.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 137.042,
  height: 19.111,
  x: 436.479,
  y: 176.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 173.174,
  height: 19.111,
  x: 418.413,
  y: 204.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 67.537,
  height: 21.472,
  x: 141.232,
  y: 319.264,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 155.769,
  height: 19.111,
  x: 97.116,
  y: 340.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 170.319,
  height: 19.111,
  x: 89.84,
  y: 374.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 154.359,
  height: 19.111,
  x: 97.82,
  y: 410.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 134.046,
  height: 19.111,
  x: 107.977,
  y: 446.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 188.839,
  height: 19.111,
  x: 80.581,
  y: 476.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 166.298,
  height: 19.111,
  x: 91.851,
  y: 494.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 60.099,
  height: 21.472,
  x: 474.95,
  y: 319.264,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 142.259,
  height: 19.111,
  x: 433.871,
  y: 340.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 135.013,
  height: 19.111,
  x: 437.493,
  y: 374.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 109.948,
  height: 19.111,
  x: 450.026,
  y: 410.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 192.941,
  height: 19.111,
  x: 408.529,
  y: 446.444,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 157.126,
  height: 19.111,
  x: 426.437,
  y: 476.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 113.8,
  height: 19.111,
  x: 448.1,
  y: 494.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 57.126,
  height: 19.111,
  x: 311.437,
  y: 244.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 30.445,
  height: 19.111,
  x: 648.777,
  y: 251.194,
  rx: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 273.529,
  height: 19.111,
  x: 203.235,
  y: 534.194,
  rx: 2
})))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Ako funguje Sense-Categorize-Respond v Clear dom\\xE9ne?')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 290,
  height: 200,
  x: 30,
  y: 30,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#f1efe8",
    stroke: "#5f5e5a",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 60,
  dominantBaseline: "central",
  style: {
    fill: "#444441",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Clear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 84,
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Sense \u2192 Categorize \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 55,
  y: 100,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#f1efe8",
    stroke: "#5f5e5a",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 114,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Best practices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 55,
  y: 136,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#f1efe8",
    stroke: "#5f5e5a",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 150,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Rutinn\xE9 procesy, SOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 55,
  y: 172,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#f1efe8",
    stroke: "#5f5e5a",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 186,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Riziko: complacency \u2192 cliff edge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 218,
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "\u26A0 Prece\u0148ovanie \u2192 skok do Chaotic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Kedy pou\\u017Ei\\u0165 Sense-Analyze-Respond a ak\\xE9 s\\xFA good practices?')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 290,
  height: 200,
  x: 360,
  y: 30,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#e1f5ee",
    stroke: "#0f6e56",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 60,
  dominantBaseline: "central",
  style: {
    fill: "#085041",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Complicated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 84,
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Sense \u2192 Analyze \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 385,
  y: 100,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#e1f5ee",
    stroke: "#0f6e56",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 114,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Good practices (viac rie\u0161en\xED)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 385,
  y: 136,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#e1f5ee",
    stroke: "#0f6e56",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 150,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Expert potrebn\xFD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 385,
  y: 172,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#e1f5ee",
    stroke: "#0f6e56",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 186,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Anal\xFDza odhal\xED rie\u0161enie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 218,
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Leteck\xFD motor, infra\u0161trukt\xFAra")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Ako aplikova\\u0165 Probe-Sense-Respond v softv\\xE9rovom projekte?')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 290,
  height: 220,
  x: 30,
  y: 300,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#eeedfe",
    stroke: "#534ab7",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 330,
  dominantBaseline: "central",
  style: {
    fill: "#3c3489",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Complex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 354,
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Probe \u2192 Sense \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 55,
  y: 370,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#eeedfe",
    stroke: "#534ab7",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 384,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Probe = MVP, spike, prototyp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 55,
  y: 406,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#eeedfe",
    stroke: "#534ab7",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 420,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Sense = retro, GAP review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 55,
  y: 442,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#eeedfe",
    stroke: "#534ab7",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 456,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Respond = refaktoring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 490,
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Vynechanie Respond = tech. dlh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 508,
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "\u2192 er\xF3zia smerom do Chaotic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Ako zvl\\xE1dnu\\u0165 Chaotic dom\\xE9nu a stabilizova\\u0165 syst\\xE9m?')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 290,
  height: 220,
  x: 360,
  y: 300,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#faece7",
    stroke: "#993c1d",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 330,
  dominantBaseline: "central",
  style: {
    fill: "#712b13",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Chaotic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 354,
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Act \u2192 Sense \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 385,
  y: 370,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#faece7",
    stroke: "#993c1d",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 384,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Act: zastavi\u0165 krv\xE1canie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 385,
  y: 406,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#faece7",
    stroke: "#993c1d",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 420,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Sense: \u010Do sa deje?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 240,
  height: 28,
  x: 385,
  y: 442,
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeWidth: 0.3,
  rx: 6,
  style: {
    fill: "#faece7",
    stroke: "#993c1d",
    color: "#000",
    strokeWidth: ".3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 456,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Respond: stabilizova\u0165 \u2192 Complex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 490,
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Cie\u013E: presun\xFA\u0165 do Complex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 508,
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "alebo Complicated")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeDasharray: "5 4",
  markerEnd: "url(#arrow)",
  d: "M320 220q20 44 40 0",
  style: {
    fill: "none",
    stroke: "rgba(31,30,29,.3)",
    color: "#000",
    strokeWidth: 1,
    strokeDasharray: "5px,4px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 340,
  y: 258,
  style: {
    fill: "#3d3d3a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "none",
  stroke: "var(--color-text-danger)",
  strokeDasharray: "4 3",
  strokeWidth: 1.2,
  markerEnd: "url(#arrow)",
  d: "M650 230q30 35 0 70",
  mask: "url(#imagine-text-gaps-fpngth)",
  style: {
    fill: "none",
    stroke: "#7f2c28",
    color: "#000",
    strokeWidth: "1.2px",
    strokeDasharray: "4px,3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 664,
  y: 265,
  fill: "var(--color-text-danger)",
  style: {
    fill: "#3d3d3a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "cliff"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "none",
  stroke: "var(--color-border-secondary)",
  strokeDasharray: "4 3",
  markerEnd: "url(#arrow)",
  d: "M175 520q0 20 330 0",
  style: {
    fill: "none",
    stroke: "rgba(31,30,29,.3)",
    color: "#000",
    strokeWidth: 1,
    strokeDasharray: "4px,3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 340,
  y: 548,
  style: {
    fill: "#3d3d3a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Stabiliz\xE1cia: Chaotic \u2192 Complex \u2192 Complicated"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCynefinDetail);

/***/ }),

/***/ 73771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var _defs;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgCynefinOverview = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 680 480",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
  id: titleId
}, title) : null, _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("marker", {
  id: "arrow",
  markerHeight: 6,
  markerWidth: 6,
  orient: "auto-start-reverse",
  refX: 8,
  refY: 5,
  viewBox: "0 0 10 10"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "none",
  stroke: "context-stroke",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m2 1 6 4-6 4"
})))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Vysvetli mi dom\\xE9nu Clear v Cynefin')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 270,
  height: 170,
  x: 40,
  y: 40,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#f1efe8",
    stroke: "#5f5e5a",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 76,
  dominantBaseline: "central",
  style: {
    fill: "#444441",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Clear (obvious)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 102,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Pr\xED\u010Dina\u2013n\xE1sledok je zrejm\xE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 122,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Best practices funguj\xFA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 148,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Sense \u2192 Categorize \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 168,
  dominantBaseline: "central",
  style: {
    fill: "#5f5e5a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Pr\xEDklad: rutinn\xFD support ticket")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Vysvetli mi dom\\xE9nu Complicated v Cynefin')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 270,
  height: 170,
  x: 370,
  y: 40,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#e1f5ee",
    stroke: "#0f6e56",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 76,
  dominantBaseline: "central",
  style: {
    fill: "#085041",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Complicated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 102,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Potrebn\xE1 expert\xEDza"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 122,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Good practices, viac rie\u0161en\xED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 148,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Sense \u2192 Analyze \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 168,
  dominantBaseline: "central",
  style: {
    fill: "#0f6e56",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Pr\xEDklad: leteck\xFD motor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Vysvetli mi dom\\xE9nu Complex v Cynefin \\u2013 pre\\u010Do je Probe-Sense-Respond k\\u013E\\xFA\\u010Dov\\xE9?')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 270,
  height: 170,
  x: 40,
  y: 250,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#eeedfe",
    stroke: "#534ab7",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 286,
  dominantBaseline: "central",
  style: {
    fill: "#3c3489",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Complex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 312,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Vzorce vznikaj\xFA za behu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 332,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Emergentn\xE9 spr\xE1vanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 358,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Probe \u2192 Sense \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 175,
  y: 378,
  dominantBaseline: "central",
  style: {
    fill: "#534ab7",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Pr\xEDklad: startup, softv\xE9r")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('Vysvetli mi dom\\xE9nu Chaotic v Cynefin')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 270,
  height: 170,
  x: 370,
  y: 250,
  strokeWidth: 0.5,
  rx: 12,
  style: {
    fill: "#faece7",
    stroke: "#993c1d",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 286,
  dominantBaseline: "central",
  style: {
    fill: "#712b13",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Chaotic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 312,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "\u017Diadne vzorce, urgencia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 332,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Okam\u017Eit\xE1 akcia nutn\xE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 358,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Act \u2192 Sense \u2192 Respond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 505,
  y: 378,
  dominantBaseline: "central",
  style: {
    fill: "#993c1d",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Pr\xEDklad: syst\xE9mov\xFD v\xFDpadok")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  onclick: "sendPrompt('\\u010Co je Disorder v Cynefin a pre\\u010Do je nebezpe\\u010Dn\\xFD?')",
  style: {
    fill: "#000",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 140,
  height: 52,
  x: 270,
  y: 198,
  strokeWidth: 0.5,
  rx: 26,
  style: {
    fill: "#faeeda",
    stroke: "#854f0b",
    color: "#000",
    strokeWidth: ".5px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 340,
  y: 224,
  dominantBaseline: "central",
  style: {
    fill: "#633806",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 14,
    fontWeight: 500,
    textAnchor: "middle",
    dominantBaseline: "central"
  },
  textAnchor: "middle"
}, "Disorder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  strokeDasharray: "4 3",
  markerEnd: "url(#arrow)",
  d: "M310 210h-40",
  style: {
    fill: "none",
    stroke: "#73726c",
    color: "#000",
    strokeWidth: "1.5px",
    strokeDasharray: "4px,3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  strokeDasharray: "4 3",
  markerEnd: "url(#arrow)",
  d: "M370 210h40",
  style: {
    fill: "none",
    stroke: "#73726c",
    color: "#000",
    strokeWidth: "1.5px",
    strokeDasharray: "4px,3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  strokeDasharray: "4 3",
  markerEnd: "url(#arrow)",
  d: "M340 198v14",
  style: {
    fill: "none",
    stroke: "#73726c",
    color: "#000",
    strokeWidth: "1.5px",
    strokeDasharray: "4px,3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  strokeDasharray: "4 3",
  markerEnd: "url(#arrow)",
  d: "M340 250v-14",
  style: {
    fill: "none",
    stroke: "#73726c",
    color: "#000",
    strokeWidth: "1.5px",
    strokeDasharray: "4px,3px",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 16,
    fontWeight: 400,
    textAnchor: "start",
    dominantBaseline: "auto"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  x: 340,
  y: 462,
  style: {
    fill: "#3d3d3a",
    stroke: "none",
    color: "#000",
    strokeWidth: 1,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    opacity: 1,
    fontFamily: "&quot",
    fontSize: 12,
    fontWeight: 400,
    textAnchor: "middle",
    dominantBaseline: "auto"
  },
  textAnchor: "middle"
}, "Klikni na dom\xE9nu pre vysvetlenie"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCynefinOverview);

/***/ }),

/***/ 88064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000101_cynefin_framework_index_md_368_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000101-cynefin-framework-index-md-368.json
const site_docs_sk_knifes_k_000101_cynefin_framework_index_md_368_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000101-CYNEFIN_Framework/K000101","title":"K000101 – CYNEFIN Framework","description":"Cynefin – sense-making framework pre rozhodovanie v komplexných doménach. Pomáha rozlíšiť, či je situácia jednoduchá, komplikovaná, komplexná alebo chaotická, a zvoliť adekvátny postup.","source":"@site/docs/sk/knifes/K000101-CYNEFIN_Framework/index.md","sourceDirName":"sk/knifes/K000101-CYNEFIN_Framework","slug":"/sk/knifes/K000101-CYNEFIN_Framework/","permalink":"/sk/knifes/K000101-CYNEFIN_Framework/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-04-23T21:03:29.254689+00:00","fm_version_comment":"","id":"K000101","guid":"ba6374cd-3f7d-4451-95e3-2312ef23a25a","dao":"knife","title":"K000101 – CYNEFIN Framework","description":"Cynefin – sense-making framework pre rozhodovanie v komplexných doménach. Pomáha rozlíšiť, či je situácia jednoduchá, komplikovaná, komplexná alebo chaotická, a zvoliť adekvátny postup.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-04-23 23:03","modified":"2026-04-23 23:03","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000100 – titul-Ako komunikovať s porozumením","permalink":"/sk/knifes/K000100-Ako-komunikova-s-porozumen-mE/"},"next":{"title":"K000102 – AI podpora spolupráce knowlwdge workerov v rámci SDLC.md","permalink":"/sk/knifes/K000102-KNIFE_Claude_SDLC_Collaboration/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000101-CYNEFIN_Framework/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-04-23T21:03:29.254689+00:00',
	fm_version_comment: '',
	id: 'K000101',
	guid: 'ba6374cd-3f7d-4451-95e3-2312ef23a25a',
	dao: 'knife',
	title: 'K000101 – CYNEFIN Framework',
	description: 'Cynefin – sense-making framework pre rozhodovanie v komplexných doménach. Pomáha rozlíšiť, či je situácia jednoduchá, komplikovaná, komplexná alebo chaotická, a zvoliť adekvátny postup.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2026-04-23 23:03',
	modified: '2026-04-23 23:03',
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
const contentTitle = 'Názov KNIFE (zmeň ma)';

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
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
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
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ-1",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp-1",
  "level": 2
}, {
  "value": "Domény podrobnejšie",
  "id": "domény-podrobnejšie",
  "level": 3
}, {
  "value": "Clear (Obvious)",
  "id": "clear-obvious",
  "level": 4
}, {
  "value": "Complicated",
  "id": "complicated",
  "level": 4
}, {
  "value": "Complex",
  "id": "complex",
  "level": 4
}, {
  "value": "Chaotic",
  "id": "chaotic",
  "level": 4
}, {
  "value": "Disorder",
  "id": "disorder",
  "level": 4
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia-1",
  "level": 2
}, {
  "value": "Postup zaradenia domény",
  "id": "postup-zaradenia-domény",
  "level": 3
}, {
  "value": "Aplikácia v SDLC / Agile",
  "id": "aplikácia-v-sdlc--agile",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top-1",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok-1",
  "level": 2
}, {
  "value": "Pôvod a kontext",
  "id": "pôvod-a-kontext",
  "level": 3
}, {
  "value": "Prečo je Complex iná ako Complicated",
  "id": "prečo-je-complex-iná-ako-complicated",
  "level": 3
}, {
  "value": "Probe → Sense → Respond v softvérovom projekte",
  "id": "probe--sense--respond-v-softvérovom-projekte",
  "level": 3
}, {
  "value": "Cynefin a technický dlh",
  "id": "cynefin-a-technický-dlh",
  "level": 3
}, {
  "value": "Cynefin v praxi – KnowMyself / BaZi",
  "id": "cynefin-v-praxi--knowmyself--bazi",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky-1",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie-1",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "názov-knife-zmeň-ma",
        children: "Názov KNIFE (zmeň ma)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "cynefin--sense-making-framework-pre-rozhodovanie-v-komplexných-doménach",
      children: "Cynefin – Sense-making framework pre rozhodovanie v komplexných doménach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d218a4fd-dca8-422c-b42e-387d6992bf1b"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "draft"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazicka · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ-1",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cynefin pomáha správne ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zaradiť situáciu"
      }), " podľa toho, ako dobre rozumieme vzťahu príčina–následok.\nBez tohto zaradenia hrozí, že aplikujeme nesprávny postup – napr. plánujeme waterfall projekt\nv doméne, kde vzorce vznikajú až za behu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kľúčová otázka, ktorú Cynefin kladie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "V akej doméne sa nachádzam – a aký postup z toho vyplýva?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp-1",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(73771)/* ["default"] */ .A),
        alt: "Cynefin – prehľad 5 domén",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cynefin definuje päť domén podľa povahy príčinno-následkových vzťahov [1]:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doména"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Charakter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Clear"
            }), " (Obvious)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Príčina–následok je zrejmá"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense → Categorize → Respond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complicated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Príčina existuje, vyžaduje expertízu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sense → Analyze → Respond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vzorce sa objavujú až retrospektívne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Probe → Sense → Respond"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaotic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Žiadne vzorce, urgentná akcia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Act → Sense → Respond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disorder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nevieš, v ktorej doméne si"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rozlíšenie je prvý krok"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kľúčový insight:"
      }), " Väčšina softvérových a znalostných projektov je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex"
      }), ", nie Complicated.\nComplicated by znamenalo, že existuje odborník, ktorý pozná riešenie vopred.\nComplex znamená, že riešenie sa musí objaviť skrz interakciu so systémom [2]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domény-podrobnejšie",
      children: "Domény podrobnejšie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "clear-obvious",
      children: "Clear (Obvious)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clear"
      }), " je doména kde vzťah príčina–následok je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zrejmý každému"
      }), " – nevyžaduje analýzu ani expertízu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postup: Sense → Categorize → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " – vnímaj fakty bez interpretácie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorize"
        }), " – zariaď do known kategórie, rozpoznaj vzor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond"
        }), " – aplikuj best practice, žiadna improvizácia"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklady: rutinný support ticket, pravidelný backup, onboarding podľa checklistu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typická chyba: tím začne analyzovať kde to nie je potrebné. Ak situácia vyžaduje analýzu – pravdepodobne si v Complicated, nie Clear."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠ Cliff edge:"
        }), " Z Clear môžeš spadnúť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "priamo do Chaotic"
        }), " – nie postupne, ale skokom.\nComplacency po dlhom období bez incidentu je hlavné riziko.\nLiek: periodicky overuj či situácia stále patrí do Clear."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complicated",
      children: "Complicated"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complicated"
      }), " je doména kde vzťah príčina–následok ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "existuje a je poznateľný"
      }), " – ale vyžaduje expertízu alebo analýzu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postup: Sense → Analyze → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sense"
        }), " – zozbieraj fakty"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze"
        }), " – konzultuj experta, meria, diagnostikuj, porovnaj možnosti"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond"
        }), " – aplikuj good practice vybranú pre tento kontext"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best practice (Clear)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Good practice (Complicated)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Počet riešení"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jedno správne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Viacero dobrých"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kontext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nezávisí od kontextu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Závisí od kontextu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kto rozhoduje"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ktokoľvek podľa SOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert s úsudkom"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklady: letecký motor, daňová optimalizácia, architektúra systému, chirurgický zákrok."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riziká: expert trap, analysis paralysis, zámena s Complex."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Praktický test:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "„Ak zavolám najlepšieho experta – vie nám povedať riešenie vopred?\""
        }), "\nÁno → Complicated. Nie, musíme to vyskúšať → Complex."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complex",
      children: "Complex"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex"
      }), " je doména kde vzťah príčina–následok ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nie je poznateľný vopred"
      }), " – objavuje sa až retrospektívne z interakcie so systémom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postup: Probe → Sense → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Krok"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo robíš"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Príklad"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Probe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bezpečný experiment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVP, spike, prototyp, A/B test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sense"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pozoruj čo sa objavilo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrospektíva, GAP review, feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Respond"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reaguj na základe učenia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refaktoring, pivot, redesign"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Plán v Complex doméne nie je mapa reality. Je to hypotéza ktorú treba otestovať."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agile je navrhnutý ", (0,jsx_runtime.jsx)(_components.em, {
        children: "pre"
      }), " Complex doménu: Sprint = Probe, Retrospektíva = Sense, Refaktoring = Respond.\nBez Respond je Agile len rýchly waterfall s iným menom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chaotic",
      children: "Chaotic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaotic"
      }), " je doména kde ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "žiadny vzťah príčina–následok neexistuje"
      }), " – systém je rozpadnutý, každá sekunda bez akcie je horšia ako neideálna akcia."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postup: Act → Sense → Respond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Krok"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo robíš"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Príklad"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Act"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zastav krvácanie okamžite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback, shutdown, izolácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sense"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čo akcia spôsobila?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čo sa stabilizovalo, čo stále horí"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Respond"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presun do inej domény"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident review, stabilizačný plán"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V Chaotic jeden človek rozhoduje – konsenzus je luxus stabilných domén.\nCieľ nie je vyriešiť problém – je to dostať systém z Chaotic do Complex alebo Complicated."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠ Najnebezpečnejší vzorec:"
        }), "\nKríza → Act → stabilizácia → úľava → zabudnutie → ďalšia kríza.\nTímy ktoré nevykonajú Respond po kríze garantujú ďalšiu – väčšinou horšiu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "disorder",
      children: "Disorder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Disorder"
      }), " je stav keď ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nevieš v ktorej doméne si"
      }), ". Rozlíšenie je prvý a jediný krok."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Väčšina konfliktov v tímoch vzniká keď každý vníma situáciu cez inú doménu – jeden vidí Complicated, druhý Complex."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia-1",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postup-zaradenia-domény",
      children: "Postup zaradenia domény"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Opíš situáciu jednou vetou."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Polož otázku: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "„Viem príčinu a následok vopred?\""
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Áno, je triviálna → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clear"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Áno, ale treba expertízu → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complicated"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nie, ukáže sa až neskôr → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Vôbec nie, systém je rozpadnutý → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaotic"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zvol postup zodpovedajúci doméne."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aplikácia-v-sdlc--agile",
      children: "Aplikácia v SDLC / Agile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Complex doména:\n  Probe    →  MVP, spike, prototyp\n  Sense    →  retrospektíva, GAP review, analýza výsledkov\n  Respond  →  refaktoring, redesign, úprava plánu\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Väčšina organizácií vykonáva Probe a Sense. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Respond (refaktor) vynechávajú"
      }), " pod\nbiznis tlakom – a tým sa systém postupne presúva smerom ku Chaotic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top-1",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identifikuj doménu"
        }), " – Clear / Complicated / Complex / Chaotic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zvol zodpovedajúci postup"
        }), " – nie každá situácia chce analýzu ani nie každá chce experiment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre Complex domény:"
        }), " Probe → Sense → Respond (iteratívne, nie jednorazovo)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Technický dlh = acumulovaný Respond, ktorý nebol vykonaný"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refaktoring nie je trest – je to dôkaz, že Probe fungoval"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok-1",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: (__webpack_require__(40545)/* ["default"] */ .A),
        alt: "Cynefin – detailné postupy a dynamika",
        style: {
          maxWidth: '800px',
          width: '100%'
        }
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pôvod-a-kontext",
      children: "Pôvod a kontext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cynefin vytvoril Dave Snowden (IBM Institute for Knowledge Management) okolo roku 1999,\npôvodne pre knowledge management v organizáciách [1].\nSlovo ", (0,jsx_runtime.jsx)(_components.em, {
        children: "cynefin"
      }), " pochádza z waleštiny a znamená približne „habitat\" alebo „miesto kde patríš\" –\nmiesto, ktoré formuje to, kto si, aj keď si ho plne neuvedomuješ [3]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neskôr ho Snowden rozvinul cez svoju firmu Cognitive Edge a publikoval v Harvard Business Review (2007) [2]."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-je-complex-iná-ako-complicated",
      children: "Prečo je Complex iná ako Complicated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto rozlíšenie je najdôležitejší praktický výstup Cynefinu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complicated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Letecký motor je komplikovaný – ale existujú odborníci, ktorí mu rozumejú."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môžeš najať experta, ktorý vypracuje plán vopred."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practice fungujú."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ekosystém, startup, softvérový produkt v novej doméne, BaZi implementácia."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Žiadny expert nevie vopred, ako sa správanie systému prejaví v konkrétnom kontexte."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good practice nahrádzajú best practice – čo funguje inde, nemusí fungovať tu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vzorce sa objavujú až z interakcie [2]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "probe--sense--respond-v-softvérovom-projekte",
      children: "Probe → Sense → Respond v softvérovom projekte"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probe – experimentuj bezpečne:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MVP          →  minimálna verzia pre reálnych používateľov\nSpike        →  časovo ohraničený technický experiment (1-2 dni)\nPrototyp     →  throwaway kód pre overenie konceptu\nFeature flag →  nová funkcionalita pre 5% používateľov\nA/B test     →  dve verzie, meriame ktorá funguje lepšie\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sense – pozoruj čo sa objavilo:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Retrospektíva  →  čo fungovalo, čo nie, prečo\nGAP review     →  rozdiel medzi plánom a realitou\nUser feedback  →  čo používatelia skutočne robia\nMonitoring     →  logy, metriky, error rates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Respond – integruj čo si sa naučil:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Refaktoring    →  kód ktorý vznikol rýchlo sa prerobí správne\nPivot          →  zmeníme smer na základe user feedbacku\nRedesign       →  architektúra ktorá nevyhovuje sa prepíše\nDokumentácia   →  znalosti sa zaznamenajú (KNIFE item)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Respond musí byť vykonaný ", (0,jsx_runtime.jsx)(_components.em, {
        children: "pred"
      }), " ďalším Probe. Inak každý sprint pridáva vrstvu na neošetrený základ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cynefin-a-technický-dlh",
      children: "Cynefin a technický dlh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Technický dlh nie je len „zlý kód\". Cez Cynefin je to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "akumulovaná odpoveď (Respond),\nktorá nebola vykonaná"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Probe  ✓   MVP bol spustený\nSense  ✓   problémy sú identifikované (GAP_REVIEW, DryRun výstupy)\nRespond ✗  biznis tlak, ideme ďalej bez refaktoru\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý vynechaný Respond zvyšuje entropiu systému. Systém sa nepresúva naraz do Chaotic –\neroduje postupne, každým sprintom bez refaktoringu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Argument pre biznis: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "„Technický dlh je úrok. Čím dlhšie ho nesplácame, tým drahšie\nje každé ďalšie rozšírenie.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cynefin-v-praxi--knowmyself--bazi",
      children: "Cynefin v praxi – KnowMyself / BaZi"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BaZi je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex doména"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ani po prečítaní všetkých kníh nevieš, ako sa nuansy domény prejavia v implementácii."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAP v názvoch NR sa objavil až pri reálnej práci, nie pri analýze."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming convention sa vyvinula iteratívne, nie bola definovaná vopred kompletne."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celý DAY refaktoring cyklus je ukážkou ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Probe → Sense → Respond"
      }), " v praxi:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Probe    =  implementácia prvého piliera (DAY)\nSense    =  GAP_REVIEW odhalil nekonzistencie\nRespond  =  systematický refaktoring s DryRun → Apply → Verify auditnou stopou\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky-1",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disorder je nebezpečná doména"
        }), " – väčšina konfliktov v tímoch vzniká, keď každý\nvníma situáciu cez inú doménu (jeden vidí Complicated, druhý Complex)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cynefin nie je statický"
        }), " – situácia sa môže presúvať medzi doménami.\nNezvládnutý chaos sa môže stabilizovať do Complex, alebo Complex môže erodovať do Chaotic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre agilné tímy:"
        }), " Retrospektíva = Sense. Refaktoring sprint = Respond.\nBez Respond je Agile len rýchly waterfall s iným menom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cliff edge efekt"
        }), " – Cynefin upozorňuje, že z Clear domény môžeš spadnúť priamo do Chaotic\n(nie cez Complicated/Complex) ak systém začneš preceňovať. Complacency je riziko."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie-1",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cynefin dáva meno niečomu, čo intuitívne cítiš pri práci s komplexnými doménami:\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nie všetko sa dá naplánovať vopred – a to nie je chyba, to je vlastnosť domény."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kľúčové výstupy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozlíšenie Complex vs. Complicated je najdôležitejší praktický nástroj frameworku."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Probe → Sense → Respond"
        }), " je jediný epistemicky poctivý postup pre komplexné domény."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refaktoring je ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Respond"
        }), " – nie korekcia chyby, ale súčasť učiaceho sa cyklu."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technický dlh = acumulovaný nevykonaný Respond."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vynechanie Respond pod biznis tlakom je systematická príčina erózie systémov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cynefin.io/wiki/Cynefin",
        children: "https://cynefin.io/wiki/Cynefin"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hbr.org/2007/11/a-leaders-framework-for-decision-making",
        children: "https://hbr.org/2007/11/a-leaders-framework-for-decision-making"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3] ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://thecynefin.co/about-us/about-cynefin-framework/",
        children: "https://thecynefin.co/about-us/about-cynefin-framework/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
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