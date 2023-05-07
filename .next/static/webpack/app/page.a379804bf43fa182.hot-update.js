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

/***/ "./sections/WhatsNew.jsx":
/*!*******************************!*\
  !*** ./sections/WhatsNew.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\n\n\n\n\n\nconst WhatsNew = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: \"false\",\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex lg:flex-row flex-col gap-8\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"tween\", 0.2, 1),\n                    className: \"flex-[0.75] flex justify-center flex-col \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TypingText, {\n                            title: \"| What's New?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TitleText, {\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"What's new about the Metaverse\"\n                            }, void 0, false)\n                        }, void 0, false, {\n                            fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-[31px] flex flex-col max-w-[370px] gap-[24px]\",\n                            children: _constants__WEBPACK_IMPORTED_MODULE_4__.newFeatures.map((feature, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewFeatures, {\n                                    number: \"\".concat(index < 10 ? \"0\" : \"\", \" \").concat(index + 1),\n                                    text: feature\n                                }, feature, false, {\n                                    fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.planetVariants)(\"right\"),\n                    className: \"flex-1 \".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/whats-new.png\",\n                        alt: \"get-started\",\n                        className: \"w-[75%] h-[75%] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/codemuscle/Desktop/Metaverse LP - Next.js/sections/WhatsNew.jsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n_c = WhatsNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhatsNew);\nvar _c;\n$RefreshReg$(_c, \"WhatsNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9XaGF0c05ldy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRXVDO0FBRVI7QUFDOEM7QUFDVjtBQUVOO0FBRTdELE1BQU1VLFdBQVcsa0JBQ2YsOERBQUNDO1FBQVFDLFdBQVcsR0FBbUIsT0FBaEJYLHdEQUFlLEVBQUM7a0JBQ3JDLDRFQUFDRCxxREFBVTtZQUNUZSxVQUFVWiwyREFBZ0JBO1lBQzFCYSxTQUFRO1lBQ1JDLGFBQVk7WUFDWkMsVUFBVTtnQkFBQ0MsTUFBTTtnQkFBU0MsUUFBUTtZQUFJO1lBQ3RDUixXQUFXLEdBQXFCLE9BQWxCWCwwREFBaUIsRUFBQzs7OEJBRWhDLDhEQUFDRCxxREFBVTtvQkFDWGUsVUFBVWIscURBQU1BLENBQUMsU0FBUyxTQUFTLEtBQUs7b0JBQ3hDVSxXQUFZOztzQ0FFViw4REFBQ0wsbURBQVVBOzRCQUFDZSxPQUFNOzs7Ozs7c0NBQ2xCLDhEQUFDaEIsa0RBQVNBOzRCQUFDZ0IscUJBQU87MENBQUU7Ozs7Ozs7c0NBQ3BCLDhEQUFDUjs0QkFBSUYsV0FBVTtzQ0FDWkosdURBQWUsQ0FBQyxDQUFDZ0IsU0FBU0Msc0JBQ3pCLDhEQUFDQztvQ0FFQ0MsUUFBUSxHQUE0QkYsT0FBekJBLFFBQVEsS0FBSyxNQUFNLEVBQUUsRUFBQyxLQUFhLE9BQVZBLFFBQVE7b0NBQzVDRyxNQUFNSjttQ0FGREE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2IsOERBQUN4QixxREFBVTtvQkFDVGUsVUFBVVgsNkRBQWNBLENBQUM7b0JBQ3pCUSxXQUFXLFVBQTRCLE9BQWxCWCwwREFBaUI7OEJBRXRDLDRFQUFDNkI7d0JBQ0NDLEtBQUs7d0JBQ0xDLEtBQUk7d0JBQ0pwQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaENkRjtBQXdDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9XaGF0c05ldy5qc3g/Y2U2MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgZmFkZUluLCBzdGFnZ2VyQ29udGFpbmVyLCBwbGFuZXRWYXJpYW50cywgIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xuaW1wb3J0IHsgU3RhcnRTdGVwcywgVGl0bGVUZXh0LCBUeXBpbmdUZXh0ICB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IG5ld0ZlYXR1cmVzLCBzdGFydGluZ0ZlYXR1cmVzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgV2hhdHNOZXcgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSByZWxhdGl2ZSB6LTEwIGB9PlxuICAgIDxtb3Rpb24uZGl2XG4gICAgICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgIHZpZXdwb3J0PXt7b25jZTogJ2ZhbHNlJywgYW1vdW50OiAwLjI1fX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gZmxleCBsZzpmbGV4LXJvdyBmbGV4LWNvbCBnYXAtOGB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtmYWRlSW4oJ3JpZ2h0JywgJ3R3ZWVuJywgMC4yLCAxKX1cbiAgICAgIGNsYXNzTmFtZT17YGZsZXgtWzAuNzVdIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgYH1cbiAgICAgID5cbiAgICAgICAgPFR5cGluZ1RleHQgdGl0bGU9XCJ8IFdoYXQncyBOZXc/XCIgLz5cbiAgICAgICAgPFRpdGxlVGV4dCB0aXRsZT17PD5XaGF0J3MgbmV3IGFib3V0IHRoZSBNZXRhdmVyc2U8Lz59IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzMxcHhdIGZsZXggZmxleC1jb2wgbWF4LXctWzM3MHB4XSBnYXAtWzI0cHhdXCI+XG4gICAgICAgICAge25ld0ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxOZXdGZWF0dXJlc1xuICAgICAgICAgICAgICBrZXk9e2ZlYXR1cmV9XG4gICAgICAgICAgICAgIG51bWJlcj17YCR7aW5kZXggPCAxMCA/ICcwJyA6ICcnfSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICB0ZXh0PXtmZWF0dXJlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICB2YXJpYW50cz17cGxhbmV0VmFyaWFudHMoJ3JpZ2h0Jyl9XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSAke3N0eWxlcy5mbGV4Q2VudGVyfWB9ICBcbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz0gXCIvd2hhdHMtbmV3LnBuZ1wiXG4gICAgICAgICAgYWx0PVwiZ2V0LXN0YXJ0ZWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzc1JV0gaC1bNzUlXSBvYmplY3QtY29udGFpblwiXG4gICAgICAgIC8+XG5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRzTmV3O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJwbGFuZXRWYXJpYW50cyIsIlN0YXJ0U3RlcHMiLCJUaXRsZVRleHQiLCJUeXBpbmdUZXh0IiwibmV3RmVhdHVyZXMiLCJzdGFydGluZ0ZlYXR1cmVzIiwiV2hhdHNOZXciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImlubmVyV2lkdGgiLCJ0aXRsZSIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsIk5ld0ZlYXR1cmVzIiwibnVtYmVyIiwidGV4dCIsImZsZXhDZW50ZXIiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/WhatsNew.jsx\n"));

/***/ })

});