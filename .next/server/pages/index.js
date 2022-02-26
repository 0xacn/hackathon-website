/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"introContainer\": \"Home_introContainer__s7MCf\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"subtitle\": \"Home_subtitle__j4GMd\",\n\t\"buttonContainer\": \"Home_buttonContainer__IqHjU\",\n\t\"getStarted\": \"Home_getStarted__qIhhe\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi13ZWJzaXRlLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcImludHJvQ29udGFpbmVyXCI6IFwiSG9tZV9pbnRyb0NvbnRhaW5lcl9fczdNQ2ZcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwic3VidGl0bGVcIjogXCJIb21lX3N1YnRpdGxlX19qNEdNZFwiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcIkhvbWVfYnV0dG9uQ29udGFpbmVyX19JcUhqVVwiLFxuXHRcImdldFN0YXJ0ZWRcIjogXCJIb21lX2dldFN0YXJ0ZWRfX3FJaGhlXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! copy-to-clipboard */ \"copy-to-clipboard\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"@heroicons/react/outline\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Home() {\n    const installButton = ()=>{\n        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default()('npx whack');\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success('Copied to clipboard.');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().introContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Whack\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().subtitle),\n                        children: \"Literally the easiest way to terminate your macOS applications.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttonContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    Link: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Get started. →\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().getStartedContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.DuplicateIcon, {\n                        className: \"w-6 h-6 ml-2 -mr-3 text-gray-400\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: installButton,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().getStarted),\n                        children: \"npm install whack\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNrQjtBQUNFO0FBQ1o7QUFDb0I7QUFFekMsUUFBUSxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLENBQUNDLGFBQWEsT0FBUyxDQUFDO1FBQzNCSCx3REFBSSxDQUFDLENBQVc7UUFDaEJGLDhEQUFhLENBQUMsQ0FBc0I7SUFDdEMsQ0FBQztJQUNELE1BQU0sNkVBQ0hPLENBQUc7UUFBQ0MsU0FBUyxFQUFFVCwwRUFBZ0I7O3dGQUM3QkQsa0RBQUk7O2dHQUNGWSxDQUFLO2tDQUFDLENBQWU7Ozs7OztnR0FDckJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7OztnR0FDOURDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUV2Q1QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFVCwrRUFBcUI7O2dHQUNoQ21CLENBQUU7d0JBQUNWLFNBQVMsRUFBRVQsc0VBQVk7a0NBQUUsQ0FFN0I7Ozs7OztnR0FDSG1CLENBQUU7d0JBQUNWLFNBQVMsRUFBRVQseUVBQWU7a0NBQUUsQ0FBK0Q7Ozs7Ozs7Ozs7Ozt3RkFFaEdRLENBQUc7Z0JBQUNDLFNBQVMsRUFBRVQsZ0ZBQXNCO3NHQUNuQ3NCLENBQUM7b0JBQUNDLElBQUksRUFBQyxDQUFHOzBHQUNOQyxDQUFNO2tDQUFDLENBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSURoQixDQUFHO2dCQUFDQyxTQUFTLEVBQUVULG9GQUEwQjs7Z0dBQ3pDSSxtRUFBYTt3QkFBQ0ssU0FBUyxFQUFDLENBQWtDOzs7Ozs7Z0dBQ3pEZSxDQUFNO3dCQUNMRSxPQUFPLEVBQUVwQixhQUFhO3dCQUFFRyxTQUFTLEVBQUVULDJFQUFpQjtrQ0FBRSxDQUV4RDs7Ozs7Ozs7Ozs7O3dGQUVDRSxvREFBTzs7Ozs7Ozs7Ozs7QUFHZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLXdlYnNpdGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnXG5pbXBvcnQgeyBEdXBsaWNhdGVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBpbnN0YWxsQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvcHkoJ25weCB3aGFjaycpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ0NvcGllZCB0byBjbGlwYm9hcmQuJyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9Db250YWluZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdoYWNrXG4gICAgICAgIDwvaDE+XG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5MaXRlcmFsbHkgdGhlIGVhc2llc3Qgd2F5IHRvIHRlcm1pbmF0ZSB5b3VyIG1hY09TIGFwcGxpY2F0aW9ucy48L2gxPlxuICAgIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgPGEgTGluaz1cIi9cIj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICBHZXQgc3RhcnRlZC4g4oaSXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvYT5cbiAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZENvbnRhaW5lcn0+XG4gICAgICA8RHVwbGljYXRlSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IG1sLTIgLW1yLTMgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgPGJ1dHRvblxuICAgICAgICAgb25DbGljaz17aW5zdGFsbEJ1dHRvbn0gY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZH0+XG4gICAgICAgICBucG0gaW5zdGFsbCB3aGFja1xuICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICAgPFRvYXN0ZXIgLz5cbiAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInRvYXN0IiwiVG9hc3RlciIsImNvcHkiLCJEdXBsaWNhdGVJY29uIiwiSG9tZSIsImluc3RhbGxCdXR0b24iLCJzdWNjZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImludHJvQ29udGFpbmVyIiwiaDEiLCJzdWJ0aXRsZSIsImJ1dHRvbkNvbnRhaW5lciIsImEiLCJMaW5rIiwiYnV0dG9uIiwiZ2V0U3RhcnRlZENvbnRhaW5lciIsIm9uQ2xpY2siLCJnZXRTdGFydGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "copy-to-clipboard":
/*!************************************!*\
  !*** external "copy-to-clipboard" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();