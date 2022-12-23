"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/dark */ \"./src/redux/dark.ts\");\n/* harmony import */ var _mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Bedtime */ \"./node_modules/@mui/icons-material/Bedtime.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TitleText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(\"span\")((param)=>{\n    let { theme  } = param;\n    var _theme_palette_primary;\n    return {\n        color: (_theme_palette_primary = theme.palette.primary) === null || _theme_palette_primary === void 0 ? void 0 : _theme_palette_primary.purple,\n        fontSize: \"1.6rem\"\n    };\n});\n_c = TitleText;\nconst Header = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(\"div\")((param)=>{\n    let { theme  } = param;\n    var _theme_palette_primary, _theme_palette_primary1, _theme_palette_primary2;\n    return {\n        borderBottom: \"1px solid \".concat((_theme_palette_primary = theme.palette.primary) === null || _theme_palette_primary === void 0 ? void 0 : _theme_palette_primary.silver),\n        padding: \"1.7rem \",\n        color: (_theme_palette_primary1 = theme.palette.primary) === null || _theme_palette_primary1 === void 0 ? void 0 : _theme_palette_primary1.black,\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        position: \"fixed\",\n        top: 0,\n        left: 0,\n        right: 0,\n        zIndex: 1000,\n        backgroundColor: (_theme_palette_primary2 = theme.palette.primary) === null || _theme_palette_primary2 === void 0 ? void 0 : _theme_palette_primary2.white\n    };\n});\n_c1 = Header;\nconst Head = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const isDark = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_redux_dark__WEBPACK_IMPORTED_MODULE_2__.selectDarkState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleText, {\n                children: \"Rick and Morty \"\n            }, void 0, false, {\n                fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                \"aria-label\": \"dark-light-icon\",\n                onClick: ()=>{\n                    dispatch((0,_redux_dark__WEBPACK_IMPORTED_MODULE_2__.setDarkState)(!isDark));\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.saveAppearance)(!isDark);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__.yellow[400],\n                    sx: {\n                        fontSize: 40,\n                        color: \"primary.silver\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Head, \"J3/hoCQpRoYMfJrLRDFMv0VhcIg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c2 = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TitleText\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Head\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDUztBQUNVO0FBQ1g7QUFDSjtBQUNMO0FBQ0M7QUFFOUMsTUFBTVMsWUFBWVQsNERBQU1BLENBQUMsUUFBUTtRQUFDLEVBQUVVLE1BQUssRUFBRTtRQUNsQ0E7SUFEd0M7UUFDL0NDLE9BQU9ELENBQUFBLHlCQUFBQSxNQUFNRSxPQUFPLENBQUNDLE9BQU8sY0FBckJILG9DQUFBQSxLQUFBQSxJQUFBQSx1QkFBdUJJLE1BQU07UUFDcENDLFVBQVU7SUFDWjs7S0FITU47QUFJTixNQUFNTyxTQUFTaEIsNERBQU1BLENBQUMsT0FBTztRQUFDLEVBQUVVLE1BQUssRUFBRTtRQUNWQSx3QkFFcEJBLHlCQVNVQTtJQVowQjtRQUMzQ08sY0FBYyxhQUEyQyxPQUE5QlAsQ0FBQUEseUJBQUFBLE1BQU1FLE9BQU8sQ0FBQ0MsT0FBTyxjQUFyQkgsb0NBQUFBLEtBQUFBLElBQUFBLHVCQUF1QlEsTUFBTTtRQUN4REMsU0FBUztRQUNUUixPQUFPRCxDQUFBQSwwQkFBQUEsTUFBTUUsT0FBTyxDQUFDQyxPQUFPLGNBQXJCSCxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXVCVSxLQUFLO1FBQ25DQyxTQUFTO1FBQ1RDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsaUJBQWlCbkIsQ0FBQUEsMEJBQUFBLE1BQU1FLE9BQU8sQ0FBQ0MsT0FBTyxjQUFyQkgscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF1Qm9CLEtBQUs7SUFDL0M7O01BYk1kO0FBZU4sTUFBTWUsT0FBTyxJQUFNOztJQUNqQixNQUFNQyxXQUFXL0Isd0RBQVdBO0lBQzVCLE1BQU1nQyxTQUFTL0Isd0RBQVdBLENBQUNDLHdEQUFlQTtJQUMxQyxxQkFDRSw4REFBQ2E7OzBCQUNDLDhEQUFDUDswQkFBVTs7Ozs7OzBCQUNYLDhEQUFDSCxnRUFBVUE7Z0JBQ1Q0QixjQUFXO2dCQUNYQyxTQUFTLElBQU07b0JBQ2JILFNBQVM1Qix5REFBWUEsQ0FBQyxDQUFDNkI7b0JBQ3ZCMUIsc0RBQWNBLENBQUMsQ0FBQzBCO2dCQUNsQjswQkFFQSw0RUFBQzVCLG1FQUFXQTtvQkFDVk0sT0FBT0gsNkRBQVc7b0JBQ2xCNEIsSUFBSTt3QkFBRXJCLFVBQVU7d0JBQUlKLE9BQU87b0JBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RDtHQXBCTW9COztRQUNhOUIsb0RBQVdBO1FBQ2JDLG9EQUFXQTs7O01BRnRCNkI7QUFzQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD80MDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3REYXJrU3RhdGUsIHNldERhcmtTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9kYXJrXCI7XG5pbXBvcnQgQmVkdGltZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQmVkdGltZVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IHsgc2F2ZUFwcGVhcmFuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IHllbGxvdyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuXG5jb25zdCBUaXRsZVRleHQgPSBzdHlsZWQoXCJzcGFuXCIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnk/LnB1cnBsZSxcbiAgZm9udFNpemU6IFwiMS42cmVtXCIsXG59KSk7XG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoXCJkaXZcIikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Py5zaWx2ZXJ9YCxcbiAgcGFkZGluZzogXCIxLjdyZW0gXCIsXG4gIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnk/LmJsYWNrLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICB6SW5kZXg6IDEwMDAsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Py53aGl0ZSxcbn0pKTtcblxuY29uc3QgSGVhZCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpc0RhcmsgPSB1c2VTZWxlY3RvcihzZWxlY3REYXJrU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxIZWFkZXI+XG4gICAgICA8VGl0bGVUZXh0PlJpY2sgYW5kIE1vcnR5IDwvVGl0bGVUZXh0PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cImRhcmstbGlnaHQtaWNvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChzZXREYXJrU3RhdGUoIWlzRGFyaykpO1xuICAgICAgICAgIHNhdmVBcHBlYXJhbmNlKCFpc0RhcmspO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QmVkdGltZUljb25cbiAgICAgICAgICBjb2xvcj17eWVsbG93WzQwMF19XG4gICAgICAgICAgc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogXCJwcmltYXJ5LnNpbHZlclwiIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgPC9IZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZWxlY3REYXJrU3RhdGUiLCJzZXREYXJrU3RhdGUiLCJCZWR0aW1lSWNvbiIsIkljb25CdXR0b24iLCJzYXZlQXBwZWFyYW5jZSIsInllbGxvdyIsIlRpdGxlVGV4dCIsInRoZW1lIiwiY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsInB1cnBsZSIsImZvbnRTaXplIiwiSGVhZGVyIiwiYm9yZGVyQm90dG9tIiwic2lsdmVyIiwicGFkZGluZyIsImJsYWNrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGUiLCJIZWFkIiwiZGlzcGF0Y2giLCJpc0RhcmsiLCJhcmlhLWxhYmVsIiwib25DbGljayIsInN4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});