"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\n\nconst MainWhite = \"#FFFFFF\";\nconst MainBlue = \"#030D2A\";\nconst redColor = \"red\";\nconst theme = (isDark)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n        palette: {\n            background: {\n                default: isDark ? MainBlue : MainWhite\n            },\n            primary: {\n                white: isDark ? MainBlue : MainWhite,\n                black: isDark ? MainWhite : MainBlue,\n                main: \"#CDCDCD\",\n                purple: isDark ? MainWhite : MainBlue,\n                silver: \"#cdcdcd\",\n                red: !isDark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400 : _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.yellow.A400,\n                blue: !isDark ? MainBlue : MainWhite\n            }\n        }\n    });\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdFO0FBQ3JCO0FBbUNuRCxNQUFNRyxZQUFZO0FBQ2xCLE1BQU1DLFdBQVc7QUFDakIsTUFBTUMsV0FBVztBQUVqQixNQUFNQyxRQUFRLENBQUNDLFNBQ2JQLGlFQUFXQSxDQUFDO1FBQ1ZRLFNBQVM7WUFDUEMsWUFBWTtnQkFDVkMsU0FBU0gsU0FBU0gsV0FBV0QsU0FBUztZQUN4QztZQUNBUSxTQUFTO2dCQUNQQyxPQUFPTCxTQUFTSCxXQUFXRCxTQUFTO2dCQUNwQ1UsT0FBT04sU0FBU0osWUFBWUMsUUFBUTtnQkFDcENVLE1BQU07Z0JBQ05DLFFBQVFSLFNBQVNKLFlBQVlDLFFBQVE7Z0JBQ3JDWSxRQUFRO2dCQUNSZCxLQUFLLENBQUNLLFNBQVNMLDBEQUFRLEdBQUdELDZEQUFXO2dCQUNyQ2lCLE1BQU0sQ0FBQ1gsU0FBU0gsV0FBV0QsU0FBUztZQUN0QztRQUNGO0lBQ0Y7QUFFRiwrREFBZUcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUvaW5kZXgudHM/Y2NiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSwgUGFsZXR0ZUNvbG9yT3B0aW9ucyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgeWVsbG93LCByZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiIHtcbiAgaW50ZXJmYWNlIEJyZWFrcG9pbnRPdmVycmlkZXMge1xuICAgIHhzOiB0cnVlO1xuICAgIHNtOiB0cnVlO1xuICAgIG1kOiB0cnVlO1xuICAgIGxnOiB0cnVlO1xuICAgIHhsOiB0cnVlO1xuICAgIG1vYmlsZTogdHJ1ZTtcbiAgICB0YWJsZXQ6IHRydWU7XG4gICAgbGFwdG9wOiB0cnVlO1xuICAgIGRlc2t0b3A6IHRydWU7XG4gIH1cbiAgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gICAgbGlnaHRlcj86IHN0cmluZztcbiAgICBkYXJrZXI/OiBzdHJpbmc7XG4gICAgd2hpdGU6IHN0cmluZztcbiAgICBibGFjazogc3RyaW5nO1xuICAgIHB1cnBsZTogc3RyaW5nO1xuICAgIHNpbHZlcjogc3RyaW5nO1xuICAgIHJlZDogc3RyaW5nO1xuICAgIGJsdWU6IHN0cmluZztcbiAgfVxuICBpbnRlcmZhY2UgU2ltcGxlUGFsZXR0ZUNvbG9yT3B0aW9ucyB7XG4gICAgbGlnaHRlcj86IHN0cmluZztcbiAgICBkYXJrZXI/OiBzdHJpbmc7XG4gICAgd2hpdGU6IHN0cmluZztcbiAgICBibGFjazogc3RyaW5nO1xuICAgIHB1cnBsZTogc3RyaW5nO1xuICAgIHNpbHZlcjogc3RyaW5nO1xuICAgIHJlZDogc3RyaW5nO1xuICAgIGJsdWU6IHN0cmluZztcbiAgfVxufVxuY29uc3QgTWFpbldoaXRlID0gXCIjRkZGRkZGXCI7XG5jb25zdCBNYWluQmx1ZSA9IFwiIzAzMEQyQVwiO1xuY29uc3QgcmVkQ29sb3IgPSBcInJlZFwiO1xuXG5jb25zdCB0aGVtZSA9IChpc0Rhcms6IEJvb2xlYW4pID0+XG4gIGNyZWF0ZVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGRlZmF1bHQ6IGlzRGFyayA/IE1haW5CbHVlIDogTWFpbldoaXRlLFxuICAgICAgfSxcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgd2hpdGU6IGlzRGFyayA/IE1haW5CbHVlIDogTWFpbldoaXRlLFxuICAgICAgICBibGFjazogaXNEYXJrID8gTWFpbldoaXRlIDogTWFpbkJsdWUsXG4gICAgICAgIG1haW46IFwiI0NEQ0RDRFwiLFxuICAgICAgICBwdXJwbGU6IGlzRGFyayA/IE1haW5XaGl0ZSA6IE1haW5CbHVlLFxuICAgICAgICBzaWx2ZXI6IFwiI2NkY2RjZFwiLFxuICAgICAgICByZWQ6ICFpc0RhcmsgPyByZWQuQTQwMCA6IHllbGxvdy5BNDAwLFxuICAgICAgICBibHVlOiAhaXNEYXJrID8gTWFpbkJsdWUgOiBNYWluV2hpdGUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInllbGxvdyIsInJlZCIsIk1haW5XaGl0ZSIsIk1haW5CbHVlIiwicmVkQ29sb3IiLCJ0aGVtZSIsImlzRGFyayIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInByaW1hcnkiLCJ3aGl0ZSIsImJsYWNrIiwibWFpbiIsInB1cnBsZSIsInNpbHZlciIsIkE0MDAiLCJibHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.ts\n"));

/***/ })

});