"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 1840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 7948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Characters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: ./src/components/Header/index.tsx
var Header = __webpack_require__(199);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./src/components/Button/index.tsx



const MaterialButton = (0,styles_.styled)((Button_default()))(({ theme  })=>({
        background: theme.palette.primary?.black,
        color: theme.palette.primary?.white,
        cursor: "pointer",
        marginRight: "1rem",
        fontSize: "1.1rem",
        border: "unset",
        borderRadius: "10px",
        padding: " 0.3rem 0.9rem",
        transition: "all 0.5s ease",
        textTransform: "lowercase",
        "&:hover": {
            transform: "scale(1.1)",
            background: theme.palette.primary?.black,
            textDecoration: "none"
        }
    }));
function CustomizedButton({ text  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(MaterialButton, {
        variant: "contained",
        disableRipple: true,
        children: text
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx






const Footer = (0,styles_.styled)("footer")({
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem"
});
const FooterComponent = ()=>{
    const router = (0,router_.useRouter)();
    const page = Number(router?.query?.page) || 1;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Footer, {
        children: [
            page > 1 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                underline: "none",
                component: (link_default()),
                href: `/${page - 1}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomizedButton, {
                    text: "Previous Page"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                underline: "none",
                component: (link_default()),
                href: `/${page + 1}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomizedButton, {
                    text: "Next Page"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (FooterComponent);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: ./src/components/Card/index.tsx




const CardWrapper = (0,system_.styled)("div")(({ theme  })=>({
        backgroundColor: theme.palette.primary?.white,
        boxShadow: `0 0.5rem 1rem ${theme.palette.primary?.shadow}`,
        borderRadius: "15px",
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        cursor: "pointer",
        transition: " all 0.3s ease",
        "&:hover": {
            transform: "scale(1.07)",
            zIndex: 1
        }
    }));
const ImageComponent = (0,system_.styled)((image_default()))(({ theme  })=>({
        borderRadius: "15px"
    }));
const Name = (0,system_.styled)("div")(({ theme  })=>({
        fontSize: "1.2rem",
        marginBottom: " 0.5rem",
        color: theme.palette.primary?.black
    }));
const Status = (0,system_.styled)("div")(({ theme  })=>({
        marginTop: "unset",
        marginBottom: " 1.5rem",
        color: theme.palette.primary?.gray
    }));
const Location = (0,system_.styled)("div")(({ theme  })=>({
        fontStyle: "italic",
        color: theme.palette.primary?.gray
    }));
const Card = ({ character  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ImageComponent, {
                priority: true,
                src: character.image,
                width: 300,
                height: 300,
                alt: "character"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                        children: character.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Status, {
                        children: [
                            character.status,
                            " - ",
                            character.species
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Location, {
                        children: character.location.name
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Card = (Card);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/RocketLaunch"
var RocketLaunch_ = __webpack_require__(201);
var RocketLaunch_default = /*#__PURE__*/__webpack_require__.n(RocketLaunch_);
;// CONCATENATED MODULE: ./src/utils/constants.tsx


const SideMenuLinks = [
    {
        id: 1,
        title: "Now Playing",
        path: "/",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((RocketLaunch_default()), {
            color: "primary",
            sx: {
                fontSize: 40
            }
        })
    },
    {
        id: 2,
        title: "Popular",
        path: "/categories/popular",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((RocketLaunch_default()), {
            color: "primary",
            sx: {
                fontSize: 40
            }
        })
    },
    {
        id: 3,
        title: "Top Rated",
        path: "/categories/top-rated",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((RocketLaunch_default()), {
            color: "primary",
            sx: {
                fontSize: 40
            }
        })
    },
    {
        id: 4,
        title: "Upcoming",
        path: "/categories/upcoming",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((RocketLaunch_default()), {
            color: "primary",
            sx: {
                fontSize: 40
            }
        })
    }
];

;// CONCATENATED MODULE: ./src/components/sideBar/index.tsx






const SideBarWrapper = (0,styles_.styled)("div")(({ theme  })=>({
        display: "flex",
        flexDirection: "colum",
        width: 300,
        height: "calc(100vh - 60px)",
        marginTop: "100px",
        alignItems: "center",
        position: "fixed",
        borderWidth: "40px",
        borderColor: "green",
        zIndex: 1000,
        borderRightWidth: "30px",
        borderRight: " 10px solid red",
        ...theme.typography.overline
    }));
const TheBest = (0,styles_.styled)("h2")(({ theme  })=>({
        color: theme.palette.primary?.black,
        textAlign: "center",
        marginBottom: "1rem"
    }));
const Image = (0,styles_.styled)("img")(({ theme  })=>({
        width: "200px",
        textAlign: "center",
        alignSelf: "center",
        marginBottom: -30,
        objectFit: "cover"
    }));
const Container = (0,styles_.styled)("div")(({ theme  })=>({
        width: "100%",
        textAlign: "center"
    }));
function Sidebar() {
    const theme = (0,styles_.useTheme)();
    const matches = useMediaQuery_default()(theme.breakpoints.up("lg"));
    if (!matches) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(SideBarWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                    src: "/hdflix.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TheBest, {
                    children: "To The Best"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
            ]
        })
    });
}
/* harmony default export */ const sideBar = (Sidebar);
const Categories = (0,styles_.styled)("div")(({ theme  })=>({
        color: theme.palette.primary?.black,
        textAlign: "left",
        fontSize: "1.5rem",
        marginTop: "4rem",
        marginLeft: 15,
        marginBottom: 15
    }));
const LinksWrapper = (0,styles_.styled)("div")(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }));
const MenuItemText = (0,styles_.styled)("h5")(({ theme  })=>({
        color: theme.palette.primary.black,
        marginLeft: 2
    }));
const IconButtonWrapper = (0,styles_.styled)((IconButton_default()))(({ theme  })=>({
        justifyContent: "flex-start",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 15,
        width: "80%",
        height: "4rem",
        borderRadius: 0,
        cursor: "pointer",
        "&:hover": {
            "& > *": {
                color: "white"
            },
            transform: "scale(1.1)",
            background: "red",
            textDecoration: "none",
            borderRadius: 8,
            backgroundColor: "red"
        }
    }));
function Menu() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                children: "Categories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LinksWrapper, {
                children: SideMenuLinks.map((li, i)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconButtonWrapper, {
                        children: [
                            li.icon,
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItemText, {
                                children: li.title
                            })
                        ]
                    }, i);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Characters/index.tsx









const Wrapper = (0,styles_.styled)("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridColumnGap: "1rem",
    margin: " 5rem 1rem 1rem 1rem",
    alignSelf: "flex-end",
    "@media screen and (max-width: 785px)": {
        display: "unset",
        marginBottom: "15rem"
    },
    "@media screen and (max-width: 1190px)": {
        gridTemplateColumns: "1fr 1fr",
        marginBottom: "15rem"
    }
});
const CharactersHeadLine = (0,styles_.styled)("h1")(({ theme  })=>({
        color: theme.palette.primary?.black,
        textAlign: "center",
        marginTop: "70px",
        "@media screen and (max-width: 785px)": {
            marginTop: "10rem"
        }
    }));
const desktopStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green"
};
const mainStyles = {
    position: "absolute",
    left: "300px",
    top: "100px",
    right: "0px",
    zIndex: 1
};
const Characters = ({ characters  })=>{
    const theme = (0,styles_.useTheme)();
    const matches = useMediaQuery_default()(theme.breakpoints.up("lg"));
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            "data-testid": "element",
            sx: !matches ? {} : desktopStyle,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(sideBar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: !matches ? {} : mainStyles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CharactersHeadLine, {
                                    children: "Rick and Morty characters"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                                    children: characters?.results.map((character, i)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
                                            character: character
                                        }, i))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Characters = (Characters);


/***/ }),

/***/ 6097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ GET_PAGE_INFO),
/* harmony export */   "g": () => (/* binding */ GET_ALL_CHARACTERS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALL_CHARACTERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Character($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
                location {
                    name
                }
            }
        }
    }`;
const GET_PAGE_INFO = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Character {
        characters {
            info {
                pages
            }
        }
    }
`;



/***/ })

};
;