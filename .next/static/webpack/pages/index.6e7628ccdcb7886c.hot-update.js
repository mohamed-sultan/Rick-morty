"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/dark */ \"./src/redux/dark.ts\");\n/* harmony import */ var _mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Bedtime */ \"./node_modules/@mui/icons-material/Bedtime.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TitleText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(\"span\")((param)=>{\n    let { theme  } = param;\n    var _theme_palette_primary;\n    return {\n        color: (_theme_palette_primary = theme.palette.primary) === null || _theme_palette_primary === void 0 ? void 0 : _theme_palette_primary.purple,\n        fontSize: \"1.6rem\"\n    };\n});\n_c = TitleText;\nconst Header = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(\"div\")((param)=>{\n    let { theme  } = param;\n    var _theme_palette_primary, _theme_palette_primary1, _theme_palette_primary2;\n    return {\n        borderBottom: \"1px solid \".concat((_theme_palette_primary = theme.palette.primary) === null || _theme_palette_primary === void 0 ? void 0 : _theme_palette_primary.silver),\n        padding: \"1.7rem \",\n        color: (_theme_palette_primary1 = theme.palette.primary) === null || _theme_palette_primary1 === void 0 ? void 0 : _theme_palette_primary1.black,\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        position: \"fixed\",\n        top: 0,\n        left: 0,\n        right: 0,\n        zIndex: 1000,\n        backgroundColor: (_theme_palette_primary2 = theme.palette.primary) === null || _theme_palette_primary2 === void 0 ? void 0 : _theme_palette_primary2.white\n    };\n});\n_c1 = Header;\nconst Head = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const isDark = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_redux_dark__WEBPACK_IMPORTED_MODULE_2__.selectDarkState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleText, {\n                children: \"Rick and Morty \"\n            }, void 0, false, {\n                fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                \"aria-label\": \"dark-light-icon\",\n                onClick: ()=>{\n                    dispatch((0,_redux_dark__WEBPACK_IMPORTED_MODULE_2__.setDarkState)(!isDark));\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.saveAppearance)(!isDark);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__.yellow[400],\n                    sx: {\n                        fontSize: 40,\n                        color: \"red\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Head, \"J3/hoCQpRoYMfJrLRDFMv0VhcIg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c2 = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TitleText\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Head\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDUztBQUNVO0FBQ1g7QUFDSjtBQUNMO0FBQ0M7QUFFOUMsTUFBTVMsWUFBWVQsNERBQU1BLENBQUMsUUFBUTtRQUFDLEVBQUVVLE1BQUssRUFBRTtRQUNsQ0E7SUFEd0M7UUFDL0NDLE9BQU9ELENBQUFBLHlCQUFBQSxNQUFNRSxPQUFPLENBQUNDLE9BQU8sY0FBckJILG9DQUFBQSxLQUFBQSxJQUFBQSx1QkFBdUJJLE1BQU07UUFDcENDLFVBQVU7SUFDWjs7S0FITU47QUFJTixNQUFNTyxTQUFTaEIsNERBQU1BLENBQUMsT0FBTztRQUFDLEVBQUVVLE1BQUssRUFBRTtRQUNWQSx3QkFFcEJBLHlCQVNVQTtJQVowQjtRQUMzQ08sY0FBYyxhQUEyQyxPQUE5QlAsQ0FBQUEseUJBQUFBLE1BQU1FLE9BQU8sQ0FBQ0MsT0FBTyxjQUFyQkgsb0NBQUFBLEtBQUFBLElBQUFBLHVCQUF1QlEsTUFBTTtRQUN4REMsU0FBUztRQUNUUixPQUFPRCxDQUFBQSwwQkFBQUEsTUFBTUUsT0FBTyxDQUFDQyxPQUFPLGNBQXJCSCxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXVCVSxLQUFLO1FBQ25DQyxTQUFTO1FBQ1RDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsaUJBQWlCbkIsQ0FBQUEsMEJBQUFBLE1BQU1FLE9BQU8sQ0FBQ0MsT0FBTyxjQUFyQkgscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF1Qm9CLEtBQUs7SUFDL0M7O01BYk1kO0FBZU4sTUFBTWUsT0FBTyxJQUFNOztJQUNqQixNQUFNQyxXQUFXL0Isd0RBQVdBO0lBQzVCLE1BQU1nQyxTQUFTL0Isd0RBQVdBLENBQUNDLHdEQUFlQTtJQUMxQyxxQkFDRSw4REFBQ2E7OzBCQUNDLDhEQUFDUDswQkFBVTs7Ozs7OzBCQUNYLDhEQUFDSCxnRUFBVUE7Z0JBQ1Q0QixjQUFXO2dCQUNYQyxTQUFTLElBQU07b0JBQ2JILFNBQVM1Qix5REFBWUEsQ0FBQyxDQUFDNkI7b0JBQ3ZCMUIsc0RBQWNBLENBQUMsQ0FBQzBCO2dCQUNsQjswQkFFQSw0RUFBQzVCLG1FQUFXQTtvQkFBQ00sT0FBT0gsNkRBQVc7b0JBQUU0QixJQUFJO3dCQUFFckIsVUFBVTt3QkFBSUosT0FBTztvQkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUU7R0FqQk1vQjs7UUFDYTlCLG9EQUFXQTtRQUNiQyxvREFBV0E7OztNQUZ0QjZCO0FBbUJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0RGFya1N0YXRlLCBzZXREYXJrU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvZGFya1wiO1xuaW1wb3J0IEJlZHRpbWVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0JlZHRpbWVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcbmltcG9ydCB7IHNhdmVBcHBlYXJhbmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyB5ZWxsb3cgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcblxuY29uc3QgVGl0bGVUZXh0ID0gc3R5bGVkKFwic3BhblwiKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Py5wdXJwbGUsXG4gIGZvbnRTaXplOiBcIjEuNnJlbVwiLFxufSkpO1xuY29uc3QgSGVhZGVyID0gc3R5bGVkKFwiZGl2XCIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeT8uc2lsdmVyfWAsXG4gIHBhZGRpbmc6IFwiMS43cmVtIFwiLFxuICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Py5ibGFjayxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgekluZGV4OiAxMDAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeT8ud2hpdGUsXG59KSk7XG5cbmNvbnN0IEhlYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNEYXJrID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGFya1N0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyPlxuICAgICAgPFRpdGxlVGV4dD5SaWNrIGFuZCBNb3J0eSA8L1RpdGxlVGV4dD5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJkYXJrLWxpZ2h0LWljb25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0RGFya1N0YXRlKCFpc0RhcmspKTtcbiAgICAgICAgICBzYXZlQXBwZWFyYW5jZSghaXNEYXJrKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJlZHRpbWVJY29uIGNvbG9yPXt5ZWxsb3dbNDAwXX0gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogXCJyZWRcIiB9fSAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvSGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2VsZWN0RGFya1N0YXRlIiwic2V0RGFya1N0YXRlIiwiQmVkdGltZUljb24iLCJJY29uQnV0dG9uIiwic2F2ZUFwcGVhcmFuY2UiLCJ5ZWxsb3ciLCJUaXRsZVRleHQiLCJ0aGVtZSIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJwdXJwbGUiLCJmb250U2l6ZSIsIkhlYWRlciIsImJvcmRlckJvdHRvbSIsInNpbHZlciIsInBhZGRpbmciLCJibGFjayIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIndoaXRlIiwiSGVhZCIsImRpc3BhdGNoIiwiaXNEYXJrIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});