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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/dark */ \"./src/redux/dark.ts\");\n/* harmony import */ var _mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Bedtime */ \"./node_modules/@mui/icons-material/Bedtime.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TitleText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(\"span\")((param)=>{\n    let { theme  } = param;\n    var _theme_palette_primary;\n    return {\n        color: (_theme_palette_primary = theme.palette.primary) === null || _theme_palette_primary === void 0 ? void 0 : _theme_palette_primary.purple,\n        fontSize: \"1.6rem\"\n    };\n});\n_c = TitleText;\nconst Header = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(\"div\")((param)=>{\n    let { theme  } = param;\n    var _theme_palette_primary, _theme_palette_primary1, _theme_palette_primary2;\n    return {\n        borderBottom: \"1px solid \".concat((_theme_palette_primary = theme.palette.primary) === null || _theme_palette_primary === void 0 ? void 0 : _theme_palette_primary.silver),\n        padding: \"1.7rem \",\n        color: (_theme_palette_primary1 = theme.palette.primary) === null || _theme_palette_primary1 === void 0 ? void 0 : _theme_palette_primary1.black,\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        position: \"fixed\",\n        top: 0,\n        left: 0,\n        right: 0,\n        zIndex: 1000,\n        backgroundColor: (_theme_palette_primary2 = theme.palette.primary) === null || _theme_palette_primary2 === void 0 ? void 0 : _theme_palette_primary2.white\n    };\n});\n_c1 = Header;\nconst Head = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const isDark = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_redux_dark__WEBPACK_IMPORTED_MODULE_2__.selectDarkState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleText, {\n                children: \"Rick and Morty \"\n            }, void 0, false, {\n                fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                \"aria-label\": \"dark-light-icon\",\n                onClick: ()=>{\n                    dispatch((0,_redux_dark__WEBPACK_IMPORTED_MODULE_2__.setDarkState)(!isDark));\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.saveAppearance)(!isDark);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: {\n                        fontSize: 40,\n                        color: \"primary.red\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohamed/Desktop/nextjs-graphql-morty-app/src/components/Header/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Head, \"J3/hoCQpRoYMfJrLRDFMv0VhcIg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c2 = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TitleText\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Head\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE4QztBQUNTO0FBQ1U7QUFDWDtBQUNKO0FBQ0w7QUFHN0MsTUFBTVEsWUFBWVIsNERBQU1BLENBQUMsUUFBUTtRQUFDLEVBQUVTLE1BQUssRUFBRTtRQUNsQ0E7SUFEd0M7UUFDL0NDLE9BQU9ELENBQUFBLHlCQUFBQSxNQUFNRSxPQUFPLENBQUNDLE9BQU8sY0FBckJILG9DQUFBQSxLQUFBQSxJQUFBQSx1QkFBdUJJLE1BQU07UUFDcENDLFVBQVU7SUFDWjs7S0FITU47QUFJTixNQUFNTyxTQUFTZiw0REFBTUEsQ0FBQyxPQUFPO1FBQUMsRUFBRVMsTUFBSyxFQUFFO1FBQ1ZBLHdCQUVwQkEseUJBU1VBO0lBWjBCO1FBQzNDTyxjQUFjLGFBQTJDLE9BQTlCUCxDQUFBQSx5QkFBQUEsTUFBTUUsT0FBTyxDQUFDQyxPQUFPLGNBQXJCSCxvQ0FBQUEsS0FBQUEsSUFBQUEsdUJBQXVCUSxNQUFNO1FBQ3hEQyxTQUFTO1FBQ1RSLE9BQU9ELENBQUFBLDBCQUFBQSxNQUFNRSxPQUFPLENBQUNDLE9BQU8sY0FBckJILHFDQUFBQSxLQUFBQSxJQUFBQSx3QkFBdUJVLEtBQUs7UUFDbkNDLFNBQVM7UUFDVEMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxpQkFBaUJuQixDQUFBQSwwQkFBQUEsTUFBTUUsT0FBTyxDQUFDQyxPQUFPLGNBQXJCSCxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXVCb0IsS0FBSztJQUMvQzs7TUFiTWQ7QUFlTixNQUFNZSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFdBQVc5Qix3REFBV0E7SUFDNUIsTUFBTStCLFNBQVM5Qix3REFBV0EsQ0FBQ0Msd0RBQWVBO0lBQzFDLHFCQUNFLDhEQUFDWTs7MEJBQ0MsOERBQUNQOzBCQUFVOzs7Ozs7MEJBQ1gsOERBQUNGLGdFQUFVQTtnQkFDVDJCLGNBQVc7Z0JBQ1hDLFNBQVMsSUFBTTtvQkFDYkgsU0FBUzNCLHlEQUFZQSxDQUFDLENBQUM0QjtvQkFDdkJ6QixzREFBY0EsQ0FBQyxDQUFDeUI7Z0JBQ2xCOzBCQUVBLDRFQUFDM0IsbUVBQVdBO29CQUFDOEIsSUFBSTt3QkFBRXJCLFVBQVU7d0JBQUlKLE9BQU87b0JBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlEO0dBakJNb0I7O1FBQ2E3QixvREFBV0E7UUFDYkMsb0RBQVdBOzs7TUFGdEI0QjtBQW1CTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNlbGVjdERhcmtTdGF0ZSwgc2V0RGFya1N0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2RhcmtcIjtcbmltcG9ydCBCZWR0aW1lSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9CZWR0aW1lXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XG5pbXBvcnQgeyBzYXZlQXBwZWFyYW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgeWVsbG93IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCI7XG5cbmNvbnN0IFRpdGxlVGV4dCA9IHN0eWxlZChcInNwYW5cIikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeT8ucHVycGxlLFxuICBmb250U2l6ZTogXCIxLjZyZW1cIixcbn0pKTtcbmNvbnN0IEhlYWRlciA9IHN0eWxlZChcImRpdlwiKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnk/LnNpbHZlcn1gLFxuICBwYWRkaW5nOiBcIjEuN3JlbSBcIixcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeT8uYmxhY2ssXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIHpJbmRleDogMTAwMCxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnk/LndoaXRlLFxufSkpO1xuXG5jb25zdCBIZWFkID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGlzRGFyayA9IHVzZVNlbGVjdG9yKHNlbGVjdERhcmtTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWRlcj5cbiAgICAgIDxUaXRsZVRleHQ+UmljayBhbmQgTW9ydHkgPC9UaXRsZVRleHQ+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiZGFyay1saWdodC1pY29uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHNldERhcmtTdGF0ZSghaXNEYXJrKSk7XG4gICAgICAgICAgc2F2ZUFwcGVhcmFuY2UoIWlzRGFyayk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCZWR0aW1lSWNvbiBzeD17eyBmb250U2l6ZTogNDAsIGNvbG9yOiBcInByaW1hcnkucmVkXCIgfX0gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8L0hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWQ7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNlbGVjdERhcmtTdGF0ZSIsInNldERhcmtTdGF0ZSIsIkJlZHRpbWVJY29uIiwiSWNvbkJ1dHRvbiIsInNhdmVBcHBlYXJhbmNlIiwiVGl0bGVUZXh0IiwidGhlbWUiLCJjb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwicHVycGxlIiwiZm9udFNpemUiLCJIZWFkZXIiLCJib3JkZXJCb3R0b20iLCJzaWx2ZXIiLCJwYWRkaW5nIiwiYmxhY2siLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsIkhlYWQiLCJkaXNwYXRjaCIsImlzRGFyayIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwic3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});