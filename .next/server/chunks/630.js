exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 5355:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 954:
/***/ (() => {



/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const NavLink = ({ href, title })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: " block py-2 pl-3 pr-4 text-[#ADB7BE] align-right sm:text-xl rounded md:p-0 hover:text-white",
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);


/***/ }),

/***/ 8211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/app/components/NavLink.jsx
var NavLink = __webpack_require__(9910);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(2876);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(9322);
;// CONCATENATED MODULE: ./src/app/components/MenuOverlay.jsx



const MenuOverlay = ({ links })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex flex-col py-4 items-center",
        children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink/* default */.Z, {
                    href: link.path,
                    title: link.title
                })
            }, index))
    });
};
/* harmony default export */ const components_MenuOverlay = (MenuOverlay);

;// CONCATENATED MODULE: ./src/app/components/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const navLinks = [
    {
        title: "About Me",
        path: "/PageAbout"
    }
];
const PageAbout = ()=>{
    const [navbarOpen, setNavbarOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "fixed mx-auto border border-black top-0 left-0 right-0 z-10 bg-black bg-opacity-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between container lg:py-4 mx-auto px-1 py-2 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-left ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "py-2 text-[#ADB7BE] sm:text-xl rounded hover:text-white ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-0",
                                children: "Vittorio Gennuso"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-menu block md:hidden",
                        children: !navbarOpen ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setNavbarOpen(true),
                            className: "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                className: "h-5 w-5"
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setNavbarOpen(false),
                            className: "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                className: "h-5 w-5"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu hidden md:block md:w-auto ",
                        id: "navbar ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ",
                            children: navLinks.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink/* default */.Z, {
                                        href: link.path,
                                        title: link.title
                                    })
                                }, index))
                        })
                    })
                ]
            }),
            navbarOpen ? /*#__PURE__*/ jsx_runtime_.jsx(components_MenuOverlay, {
                links: navLinks
            }) : null
        ]
    });
};
/* harmony default export */ const Navbar = (PageAbout);


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7647);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "VG_portfolio",
    description: "Portfolio_Design"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;