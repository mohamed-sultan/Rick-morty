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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\n\nconst MainWhite = \"#FFFFFF\";\nconst MainBlue = \"#030D2A\";\nconst redColor = \"red\";\nconst theme = (isDark)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n        palette: {\n            background: {\n                default: isDark ? MainBlue : MainWhite\n            },\n            primary: {\n                white: isDark ? MainBlue : MainWhite,\n                black: isDark ? MainWhite : MainBlue,\n                main: \"#CDCDCD\",\n                purple: isDark ? MainWhite : MainBlue,\n                silver: \"#cdcdcd\",\n                red: !isDark ? \"#000000\" : _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.yellow.A400,\n                blue: !isDark ? MainBlue : MainWhite\n            }\n        }\n    });\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdFO0FBQ3JCO0FBNENuRCxNQUFNRSxZQUFZO0FBQ2xCLE1BQU1DLFdBQVc7QUFDakIsTUFBTUMsV0FBVztBQUVqQixNQUFNQyxRQUFRLENBQUNDLFNBQ2JOLGlFQUFXQSxDQUFDO1FBQ1ZPLFNBQVM7WUFDUEMsWUFBWTtnQkFDVkMsU0FBU0gsU0FBU0gsV0FBV0QsU0FBUztZQUN4QztZQUNBUSxTQUFTO2dCQUNQQyxPQUFPTCxTQUFTSCxXQUFXRCxTQUFTO2dCQUNwQ1UsT0FBT04sU0FBU0osWUFBWUMsUUFBUTtnQkFDcENVLE1BQU07Z0JBQ05DLFFBQVFSLFNBQVNKLFlBQVlDLFFBQVE7Z0JBQ3JDWSxRQUFRO2dCQUNSQyxLQUFLLENBQUNWLFNBQVMsWUFBWUwsNkRBQVc7Z0JBQ3RDaUIsTUFBTSxDQUFDWixTQUFTSCxXQUFXRCxTQUFTO1lBQ3RDO1FBT0Y7SUFDRjtBQUVGLCtEQUFlRyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS9pbmRleC50cz9jY2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBQYWxldHRlQ29sb3JPcHRpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyB5ZWxsb3csIHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuXG5kZWNsYXJlIG1vZHVsZSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIge1xuICBpbnRlcmZhY2UgQnJlYWtwb2ludE92ZXJyaWRlcyB7XG4gICAgeHM6IHRydWU7XG4gICAgc206IHRydWU7XG4gICAgbWQ6IHRydWU7XG4gICAgbGc6IHRydWU7XG4gICAgeGw6IHRydWU7XG4gICAgbW9iaWxlOiB0cnVlO1xuICAgIHRhYmxldDogdHJ1ZTtcbiAgICBsYXB0b3A6IHRydWU7XG4gICAgZGVza3RvcDogdHJ1ZTtcbiAgfVxuICAvLyBpbnRlcmZhY2UgUGFsZXR0ZSB7XG4gIC8vICAvLyB0ZXJ0aWFyeTogUGFsZXR0ZVtcInByaW1hcnlcIl07XG4gIC8vIH1cbiAgLy8gaW50ZXJmYWNlIFBhbGV0dGVPcHRpb25zIHtcbiAgLy8gICAvLyAgdGVydGlhcnk/OiBQYWxldHRlT3B0aW9uc1tcInByaW1hcnlcIl07XG4gIC8vICAvLyBwcmltYXJ5PzogUGFsZXR0ZUNvbG9yT3B0aW9ucztcbiAgLy8gIC8vIHNlY29uZGFyeT86IFBhbGV0dGVDb2xvck9wdGlvbnM7XG4gIC8vICAvLyBlcnJvcj86IFBhbGV0dGVDb2xvck9wdGlvbnM7XG4gIC8vIH1cbiAgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gICAgbGlnaHRlcj86IHN0cmluZztcbiAgICBkYXJrZXI/OiBzdHJpbmc7XG4gICAgd2hpdGU6IHN0cmluZztcbiAgICBibGFjazogc3RyaW5nO1xuICAgIHB1cnBsZTogc3RyaW5nO1xuICAgIHNpbHZlcjogc3RyaW5nO1xuICAgIHJlZDogc3RyaW5nO1xuICAgIGJsdWU6IHN0cmluZztcbiAgfVxuICBpbnRlcmZhY2UgU2ltcGxlUGFsZXR0ZUNvbG9yT3B0aW9ucyB7XG4gICAgbGlnaHRlcj86IHN0cmluZztcbiAgICBkYXJrZXI/OiBzdHJpbmc7XG4gICAgd2hpdGU6IHN0cmluZztcbiAgICBibGFjazogc3RyaW5nO1xuICAgIHB1cnBsZTogc3RyaW5nO1xuICAgIHNpbHZlcjogc3RyaW5nO1xuICAgIHJlZDogc3RyaW5nO1xuICAgIGJsdWU6IHN0cmluZztcbiAgfVxufVxuY29uc3QgTWFpbldoaXRlID0gXCIjRkZGRkZGXCI7XG5jb25zdCBNYWluQmx1ZSA9IFwiIzAzMEQyQVwiO1xuY29uc3QgcmVkQ29sb3IgPSBcInJlZFwiO1xuXG5jb25zdCB0aGVtZSA9IChpc0Rhcms6IEJvb2xlYW4pID0+XG4gIGNyZWF0ZVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGRlZmF1bHQ6IGlzRGFyayA/IE1haW5CbHVlIDogTWFpbldoaXRlLFxuICAgICAgfSxcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgd2hpdGU6IGlzRGFyayA/IE1haW5CbHVlIDogTWFpbldoaXRlLFxuICAgICAgICBibGFjazogaXNEYXJrID8gTWFpbldoaXRlIDogTWFpbkJsdWUsXG4gICAgICAgIG1haW46IFwiI0NEQ0RDRFwiLFxuICAgICAgICBwdXJwbGU6IGlzRGFyayA/IE1haW5XaGl0ZSA6IE1haW5CbHVlLFxuICAgICAgICBzaWx2ZXI6IFwiI2NkY2RjZFwiLFxuICAgICAgICByZWQ6ICFpc0RhcmsgPyBcIiMwMDAwMDBcIiA6IHllbGxvdy5BNDAwLFxuICAgICAgICBibHVlOiAhaXNEYXJrID8gTWFpbkJsdWUgOiBNYWluV2hpdGUsXG4gICAgICB9LFxuICAgICAgLy8gc2Vjb25kYXJ5OiB7XG4gICAgICAvLyAgIG1haW46IFwiI0NEQ0RDRFwiLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIGVycm9yOiB7XG4gICAgICAvLyAgIG1haW46ICFpc0RhcmsgPyBcIiMwMDAwMDBcIiA6IHllbGxvdy5BNDAwLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ5ZWxsb3ciLCJNYWluV2hpdGUiLCJNYWluQmx1ZSIsInJlZENvbG9yIiwidGhlbWUiLCJpc0RhcmsiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwcmltYXJ5Iiwid2hpdGUiLCJibGFjayIsIm1haW4iLCJwdXJwbGUiLCJzaWx2ZXIiLCJyZWQiLCJBNDAwIiwiYmx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme/index.ts\n"));

/***/ })

});