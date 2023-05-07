"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\nconst Footer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.footer, {\n        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.footerVariants,\n        initial: \"hidden\",\n        whileInView: \"show\",\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings, \" py-8 relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"footer-gradient\"\n            }, void 0, false, {\n                fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/components/Footer.jsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex flex-col gap-8\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    classname: \"flex items-center justify-between flex-wrap gap-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold md:text-[64px]\",\n                        children: \"Enter The Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/components/Footer.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/components/Footer.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/components/Footer.jsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/components/Footer.jsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFdUM7QUFFQTtBQUNSO0FBRWtCO0FBR2pELE1BQU1JLFNBQVMsa0JBQ2IsOERBQUNKLHdEQUFhO1FBQ1pNLFVBQVVILHlEQUFjQTtRQUN4QkksU0FBUTtRQUNSQyxhQUFZO1FBQ1pDLFdBQVcsR0FBbUIsT0FBaEJQLHdEQUFlLEVBQUM7OzBCQUU5Qiw4REFBQ1M7Z0JBQUlGLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0U7Z0JBQUlGLFdBQVcsR0FBcUIsT0FBbEJQLDBEQUFpQixFQUFDOzBCQUNuQyw0RUFBQ1M7b0JBQUlFLFdBQVk7OEJBQ2YsNEVBQUNDO3dCQUFHTCxXQUFVO2tDQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVYzQ0w7QUFpQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanN4PzM4OTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgeyBzb2NpYWxzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmltcG9ydCB7IGZvb3RlclZhcmlhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xuXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPG1vdGlvbi5mb290ZXJcbiAgICB2YXJpYW50cz17Zm9vdGVyVmFyaWFudHN9XG4gICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wYWRkaW5nc30gcHktOCByZWxhdGl2ZWB9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ncmFkaWVudFwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2wgZ2FwLThgfT5cbiAgICAgIDxkaXYgY2xhc3NuYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBnYXAtNWB9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1kOnRleHQtWzY0cHhdXCI+RW50ZXIgVGhlIE1ldGF2ZXJzZTwvaDQ+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L21vdGlvbi5mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibmFtZXMiOlsibW90aW9uIiwic29jaWFscyIsInN0eWxlcyIsImZvb3RlclZhcmlhbnRzIiwiRm9vdGVyIiwiZm9vdGVyIiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImRpdiIsImlubmVyV2lkdGgiLCJjbGFzc25hbWUiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.jsx\n"));

/***/ })

});