"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/theme/index.ts


const MainWhite = "#FFFFFF";
const MainBlue = "#030D2A";
const theme = (isDark)=>(0,styles_.createTheme)({
        palette: {
            background: {
                default: isDark ? MainBlue : MainWhite
            },
            primary: {
                white: isDark ? MainBlue : MainWhite,
                black: isDark ? MainWhite : MainBlue,
                main: "#CDCDCD",
                purple: isDark ? MainWhite : MainBlue,
                silver: "#cdcdcd",
                red: !isDark ? colors_namespaceObject.red.A400 : colors_namespaceObject.yellow.A400,
                blue: !isDark ? MainBlue : MainWhite,
                shadow: "rgba(0, 0, 0, 0.15)",
                gray: "#919191"
            }
        }
    });
/* harmony default export */ const src_theme = (theme);

;// CONCATENATED MODULE: external "@mui/material/"
const _namespaceObject = require("@mui/material/");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/dark.ts
var dark = __webpack_require__(7568);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
;// CONCATENATED MODULE: ./src/redux/store.ts



const store = ()=>(0,toolkit_.configureStore)({
        reducer: {
            dark: dark/* darkSlice.reducer */.HP.reducer
        },
        devTools: true
    });
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(store);

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5332);
;// CONCATENATED MODULE: ./src/pages/_app.tsx











function MyApp({ Component , pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch((0,dark/* setDarkState */.MM)((0,utils/* saveInitialAppearance */.B)()));
    }, []);
    const isDark = (0,external_react_redux_.useSelector)(dark/* selectDarkState */.f3);
    let Them = src_theme(isDark);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: Them,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_namespaceObject.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [954], () => (__webpack_exec__(4929)));
module.exports = __webpack_exports__;

})();