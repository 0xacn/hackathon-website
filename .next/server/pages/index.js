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

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"introContainer\": \"Home_introContainer__s7MCf\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"subtitle\": \"Home_subtitle__j4GMd\",\n\t\"buttonContainer\": \"Home_buttonContainer__IqHjU\",\n\t\"getStarted\": \"Home_getStarted__qIhhe\",\n\t\"diamond\": \"Home_diamond__Ounnj\",\n\t\"MoveUpDown\": \"Home_MoveUpDown__rHv_4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24td2Vic2l0ZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJpbnRyb0NvbnRhaW5lclwiOiBcIkhvbWVfaW50cm9Db250YWluZXJfX3M3TUNmXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcInN1YnRpdGxlXCI6IFwiSG9tZV9zdWJ0aXRsZV9fajRHTWRcIixcblx0XCJidXR0b25Db250YWluZXJcIjogXCJIb21lX2J1dHRvbkNvbnRhaW5lcl9fSXFIalVcIixcblx0XCJnZXRTdGFydGVkXCI6IFwiSG9tZV9nZXRTdGFydGVkX19xSWhoZVwiLFxuXHRcImRpYW1vbmRcIjogXCJIb21lX2RpYW1vbmRfX091bm5qXCIsXG5cdFwiTW92ZVVwRG93blwiOiBcIkhvbWVfTW92ZVVwRG93bl9fckh2XzRcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! copy-to-clipboard */ \"copy-to-clipboard\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"@heroicons/react/outline\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_awesome_shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-awesome-shapes */ \"react-awesome-shapes\");\n/* harmony import */ var react_awesome_shapes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_shapes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! motion */ \"motion\");\n/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(motion__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    const installButton = ()=>{\n        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default()('npx whack');\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success('Copied to clipboard.');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Whack\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Literally the easiest way to terminate your macOS applications.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().introContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: \"Whack\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().subtitle),\n                        children: [\n                            \"Literally the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \" easiest \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 51\n                            }, this),\n                            \"way to terminate your macOS applications.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttonContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    Link: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Get started. →\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_shapes__WEBPACK_IMPORTED_MODULE_5__.Square, {\n                color: \"linear-gradient(135deg, #fdba74, #f97316)\",\n                size: \"8rem\",\n                zIndex: 2,\n                top: \"20%\",\n                left: \"70%\"\n            }, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_shapes__WEBPACK_IMPORTED_MODULE_5__.Circle, {\n                color: \"linear-gradient(135deg, #a5b4fc, #6366f1)\",\n                size: [\n                    '100px',\n                    '50px',\n                    '80px',\n                    '80px'\n                ],\n                top: \"70%\",\n                left: \"50%\",\n                zIndex: 2\n            }, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box\"\n            }, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().getStartedContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: installButton,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().getStarted),\n                    children: \"npm install whack\"\n                }, void 0, false, {\n                    fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tobyb/Documents/hackathon-website-new/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}; //<DuplicateIcon className=\"w-6 h-6 ml-2 -mr-3 text-gray-400\" />\n //<div className=\"relative mt-3 rounded-md sm:mt-0 sm:ml-3\">\n /*\nfunction Animate() {\n  useEffect(() => {\n    const boxes = document.querySelectorAll(\".box\")\n    \n    animate(\n      \"#box\",\n      { transform: \"rotate(45deg)\" },\n      { duration: 0.5 }\n    )\n  })}\n  */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNrQjtBQUNFO0FBQ1o7QUFDb0I7QUFDSDtBQUNyQjtBQUNEO0FBRWhCLFFBQVEsQ0FBQ1UsSUFBSSxHQUFHLENBQUM7SUFDOUIsS0FBSyxDQUFDQyxhQUFhLE9BQVMsQ0FBQztRQUMzQlAsd0RBQUksQ0FBQyxDQUFXO1FBQ2hCRiw4REFBYSxDQUFDLENBQXNCO0lBQ3RDLENBQUM7SUFDRCxNQUFNLDZFQUNIVyxDQUFHO1FBQUNDLFNBQVMsRUFBRWIsMEVBQWdCOzt3RkFDN0JELGtEQUFJOztnR0FDRmdCLENBQUs7a0NBQUMsQ0FBSzs7Ozs7O2dHQUNYQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFDLENBQWlFOzs7Ozs7Z0dBQ2pHQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFFdkNULENBQUc7Z0JBQUNDLFNBQVMsRUFBRWIsK0VBQXFCOztnR0FDaEN1QixDQUFFO3dCQUFDVixTQUFTLEVBQUViLHNFQUFZO2tDQUFFLENBRTdCOzs7Ozs7Z0dBQ0h1QixDQUFFO3dCQUFDVixTQUFTLEVBQUViLHlFQUFlOzs0QkFBRSxDQUFjO3dHQUFDeUIsQ0FBQzswQ0FBQyxDQUFTOzs7Ozs7NEJBQUksQ0FBeUM7Ozs7Ozs7Ozs7Ozs7d0ZBRXhHYixDQUFHO2dCQUFDQyxTQUFTLEVBQUViLGdGQUFzQjtzR0FDbkMyQixDQUFDO29CQUFDQyxJQUFJLEVBQUMsQ0FBRzswR0FDTkMsQ0FBTTtrQ0FBQyxDQUVSOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUlMdkIsd0RBQU07Z0JBQ0x3QixLQUFLLEVBQUMsQ0FBMkM7Z0JBQ2pEQyxJQUFJLEVBQUMsQ0FBTTtnQkFDWEMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLEdBQUcsRUFBQyxDQUFLO2dCQUNUQyxJQUFJLEVBQUUsQ0FBSzs7Ozs7O3dGQUdkN0Isd0RBQU07Z0JBQ0h5QixLQUFLLEVBQUMsQ0FBMkM7Z0JBQ2pEQyxJQUFJLEVBQUUsQ0FBQztvQkFBQSxDQUFPO29CQUFFLENBQU07b0JBQUUsQ0FBTTtvQkFBRSxDQUFNO2dCQUFBLENBQUM7Z0JBQ3ZDRSxHQUFHLEVBQUMsQ0FBSztnQkFDVEMsSUFBSSxFQUFDLENBQUs7Z0JBQ1ZGLE1BQU0sRUFBRSxDQUFDOzs7Ozs7d0ZBR1pwQixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7O3dGQUViRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUViLG9GQUEwQjtzR0FDeEM2QixDQUFNO29CQUNMTyxPQUFPLEVBQUUxQixhQUFhO29CQUFFRyxTQUFTLEVBQUViLDJFQUFpQjs4QkFBRSxDQUV4RDs7Ozs7Ozs7Ozs7d0ZBRUNFLG9EQUFPOzs7Ozs7Ozs7OztBQUdmLENBQUMsQ0FFRCxDQUFnRTtBQUNoRSxDQUE0RDtBQUU1RCxDQVdJOzs7Ozs7Ozs7OztFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLXdlYnNpdGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnXG5pbXBvcnQgeyBEdXBsaWNhdGVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuaW1wb3J0IHsgQ2lyY2xlLCBTcXVhcmUgfSBmcm9tIFwicmVhY3QtYXdlc29tZS1zaGFwZXNcIlxuaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gXCJtb3Rpb25cIlxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGluc3RhbGxCdXR0b24gPSAoKSA9PiB7XG4gICAgY29weSgnbnB4IHdoYWNrJyk7XG4gICAgdG9hc3Quc3VjY2VzcygnQ29waWVkIHRvIGNsaXBib2FyZC4nKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2hhY2s8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTGl0ZXJhbGx5IHRoZSBlYXNpZXN0IHdheSB0byB0ZXJtaW5hdGUgeW91ciBtYWNPUyBhcHBsaWNhdGlvbnMuXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9Db250YWluZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdoYWNrXG4gICAgICAgIDwvaDE+XG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5MaXRlcmFsbHkgdGhlIDxiPiBlYXNpZXN0IDwvYj53YXkgdG8gdGVybWluYXRlIHlvdXIgbWFjT1MgYXBwbGljYXRpb25zLjwvaDE+XG4gICAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICA8YSBMaW5rPVwiL1wiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIEdldCBzdGFydGVkLiDihpJcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9hPlxuICA8L2Rpdj5cblxuICA8U3F1YXJlXG4gICAgY29sb3I9XCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmRiYTc0LCAjZjk3MzE2KVwiXG4gICAgc2l6ZT1cIjhyZW1cIlxuICAgIHpJbmRleD17Mn1cbiAgICB0b3A9XCIyMCVcIlxuICAgIGxlZnQ9IFwiNzAlXCJcbi8+XG5cbjxDaXJjbGVcbiAgICBjb2xvcj1cImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhNWI0ZmMsICM2MzY2ZjEpXCJcbiAgICBzaXplPXtbJzEwMHB4JywgJzUwcHgnLCAnODBweCcsICc4MHB4J119XG4gICAgdG9wPVwiNzAlXCJcbiAgICBsZWZ0PVwiNTAlXCJcbiAgICB6SW5kZXg9ezJ9XG4vPlxuXG48ZGl2IGNsYXNzTmFtZT1cImJveFwiPjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWRDb250YWluZXJ9PlxuICAgICAgIDxidXR0b25cbiAgICAgICAgIG9uQ2xpY2s9e2luc3RhbGxCdXR0b259IGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWR9PlxuICAgICAgICAgbnBtIGluc3RhbGwgd2hhY2tcbiAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgIDxUb2FzdGVyIC8+XG4gICA8L2Rpdj5cbiAgKVxufVxuXG4vLzxEdXBsaWNhdGVJY29uIGNsYXNzTmFtZT1cInctNiBoLTYgbWwtMiAtbXItMyB0ZXh0LWdyYXktNDAwXCIgLz5cbi8vPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0zIHJvdW5kZWQtbWQgc206bXQtMCBzbTptbC0zXCI+XG5cbi8qXG5mdW5jdGlvbiBBbmltYXRlKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIilcbiAgICBcbiAgICBhbmltYXRlKFxuICAgICAgXCIjYm94XCIsXG4gICAgICB7IHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIgfSxcbiAgICAgIHsgZHVyYXRpb246IDAuNSB9XG4gICAgKVxuICB9KX1cbiAgKi8iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInRvYXN0IiwiVG9hc3RlciIsImNvcHkiLCJEdXBsaWNhdGVJY29uIiwiQ2lyY2xlIiwiU3F1YXJlIiwiYW5pbWF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJpbnN0YWxsQnV0dG9uIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJpbnRyb0NvbnRhaW5lciIsImgxIiwic3VidGl0bGUiLCJiIiwiYnV0dG9uQ29udGFpbmVyIiwiYSIsIkxpbmsiLCJidXR0b24iLCJjb2xvciIsInNpemUiLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0IiwiZ2V0U3RhcnRlZENvbnRhaW5lciIsIm9uQ2xpY2siLCJnZXRTdGFydGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "motion":
/*!*************************!*\
  !*** external "motion" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-awesome-shapes":
/*!***************************************!*\
  !*** external "react-awesome-shapes" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-awesome-shapes");

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