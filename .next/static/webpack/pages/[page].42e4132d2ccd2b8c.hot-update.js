"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[page]",{

/***/ "./src/utils/constants.tsx":
/*!*********************************!*\
  !*** ./src/utils/constants.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenuLinks\": function() { return /* binding */ SideMenuLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_RocketLaunch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/RocketLaunch */ \"./node_modules/@mui/icons-material/RocketLaunch.js\");\n\n\nconst SideMenuLinks = [\n    {\n        id: 1,\n        title: \"Now Playing\",\n        path: \"/\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RocketLaunch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: \"primary\",\n            sx: {\n                fontSize: 40\n            }\n        }, void 0, false, {\n            fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/utils/constants.tsx\",\n            lineNumber: 8,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        id: 2,\n        title: \"Popular\",\n        path: \"/categories/popular\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RocketLaunch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: \"primary\",\n            sx: {\n                fontSize: 40\n            }\n        }, void 0, false, {\n            fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/utils/constants.tsx\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        id: 3,\n        title: \"Top Rated\",\n        path: \"/categories/top-rated\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RocketLaunch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: \"primary\",\n            sx: {\n                fontSize: 40\n            }\n        }, void 0, false, {\n            fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/utils/constants.tsx\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        id: 4,\n        title: \"Upcoming\",\n        path: \"/categories/upcoming\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RocketLaunch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: \"primary\",\n            sx: {\n                fontSize: 40\n            }\n        }, void 0, false, {\n            fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/utils/constants.tsx\",\n            lineNumber: 26,\n            columnNumber: 11\n        }, undefined)\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBZ0U7QUFFekQsTUFBTUMsZ0JBQWdCO0lBQzNCO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLG9CQUFNLDhEQUFDTCx3RUFBZ0JBO1lBQUNNLE9BQU07WUFBVUMsSUFBSTtnQkFBRUMsVUFBVTtZQUFHOzs7Ozs7SUFDN0Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxvQkFBTSw4REFBQ0wsd0VBQWdCQTtZQUFDTSxPQUFNO1lBQVVDLElBQUk7Z0JBQUVDLFVBQVU7WUFBRzs7Ozs7O0lBQzdEO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsb0JBQU0sOERBQUNMLHdFQUFnQkE7WUFBQ00sT0FBTTtZQUFVQyxJQUFJO2dCQUFFQyxVQUFVO1lBQUc7Ozs7OztJQUM3RDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLG9CQUFNLDhEQUFDTCx3RUFBZ0JBO1lBQUNNLE9BQU07WUFBVUMsSUFBSTtnQkFBRUMsVUFBVTtZQUFHOzs7Ozs7SUFDN0Q7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jb25zdGFudHMudHN4PzI2N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvY2tldExhdW5jaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUm9ja2V0TGF1bmNoXCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlTWVudUxpbmtzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiTm93IFBsYXlpbmdcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBpY29uOiA8Um9ja2V0TGF1bmNoSWNvbiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBmb250U2l6ZTogNDAgfX0gLz4sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJQb3B1bGFyXCIsXG4gICAgcGF0aDogXCIvY2F0ZWdvcmllcy9wb3B1bGFyXCIsXG4gICAgaWNvbjogPFJvY2tldExhdW5jaEljb24gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgZm9udFNpemU6IDQwIH19IC8+LFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiVG9wIFJhdGVkXCIsXG4gICAgcGF0aDogXCIvY2F0ZWdvcmllcy90b3AtcmF0ZWRcIixcbiAgICBpY29uOiA8Um9ja2V0TGF1bmNoSWNvbiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBmb250U2l6ZTogNDAgfX0gLz4sXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJVcGNvbWluZ1wiLFxuICAgIHBhdGg6IFwiL2NhdGVnb3JpZXMvdXBjb21pbmdcIixcbiAgICBpY29uOiA8Um9ja2V0TGF1bmNoSWNvbiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBmb250U2l6ZTogNDAgfX0gLz4sXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbIlJvY2tldExhdW5jaEljb24iLCJTaWRlTWVudUxpbmtzIiwiaWQiLCJ0aXRsZSIsInBhdGgiLCJpY29uIiwiY29sb3IiLCJzeCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/constants.tsx\n"));

/***/ })

});