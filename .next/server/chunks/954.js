"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 7568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HP": () => (/* binding */ darkSlice),
/* harmony export */   "MM": () => (/* binding */ setDarkState),
/* harmony export */   "f3": () => (/* binding */ selectDarkState)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    dark: false
};
const darkSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "dark",
    initialState,
    reducers: {
        setDarkState (state, action) {
            state.dark = action.payload;
        },
        extraReducers: {
            // @ts-ignore:next-line
            [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, { payload  })=>{
                /* istanbul ignore next */ return {
                    ...state,
                    ...payload.dark
                };
            }
        }
    }
});
const setDarkState = (val)=>darkSlice.actions.setDarkState(val);
const selectDarkState = (state)=>state.dark.dark;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (darkSlice.reducer);


/***/ }),

/***/ 5332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ saveInitialAppearance),
/* harmony export */   "I": () => (/* binding */ saveAppearance)
/* harmony export */ });
const saveAppearance = (isDark)=>{
    localStorage.setItem("dark", isDark ? "true" : "false");
};
const saveInitialAppearance = ()=>{
    const isDark = localStorage.getItem("dark") === "true";
    return isDark;
};


/***/ })

};
;