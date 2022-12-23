"use strict";
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7568);
/* harmony import */ var _mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3888);
/* harmony import */ var _mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5332);







const TitleText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("span")(({ theme  })=>({
        color: theme.palette.primary?.purple,
        fontSize: "1.6rem"
    }));
const Header = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        borderBottom: `1px solid ${theme.palette.primary?.silver}`,
        padding: "1.7rem ",
        color: theme.palette.primary?.black,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: theme.palette.primary?.white
    }));
const Head = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const isDark = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_dark__WEBPACK_IMPORTED_MODULE_3__/* .selectDarkState */ .f3);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleText, {
                children: "Rick and Morty "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                "aria-label": "dark-light-icon",
                onClick: ()=>{
                    dispatch((0,_redux_dark__WEBPACK_IMPORTED_MODULE_3__/* .setDarkState */ .MM)(!isDark));
                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .saveAppearance */ .I)(!isDark);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Bedtime__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: {
                        fontSize: 40,
                        color: "primary.red"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Head);


/***/ })

};
;