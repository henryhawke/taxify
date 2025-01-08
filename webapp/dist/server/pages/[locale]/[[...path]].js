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
exports.id = "pages/[locale]/[[...path]]";
exports.ids = ["pages/[locale]/[[...path]]"];
exports.modules = {

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** @type {import('next-i18next').UserConfig} */\nmodule.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'ja'],\n    localeDetection: false\n  },\n  defaultNS: 'common',\n  localePath:  true ? (__webpack_require__(/*! path */ \"path\").resolve)('./public/locales') : 0,\n  reloadOnPrerender: true\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZDLElBQUksRUFBRTtJQUNKQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNyQkMsZUFBZSxFQUFFO0VBQ25CLENBQUM7RUFDREMsU0FBUyxFQUFFLFFBQVE7RUFDbkJDLFVBQVUsRUFDUixRQUNJQyxpREFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUMzQyxDQUFVO0VBQ2hCRSxpQkFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL25leHQtaTE4bmV4dC5jb25maWcuanM/MWNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHR5cGUge2ltcG9ydCgnbmV4dC1pMThuZXh0JykuVXNlckNvbmZpZ30gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpMThuOiB7XG4gICAgZGVmYXVsdExvY2FsZTogJ2VuJyxcbiAgICBsb2NhbGVzOiBbJ2VuJywgJ2phJ10sXG4gICAgbG9jYWxlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgZGVmYXVsdE5TOiAnY29tbW9uJyxcbiAgbG9jYWxlUGF0aDpcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyByZXF1aXJlKCdwYXRoJykucmVzb2x2ZSgnLi9wdWJsaWMvbG9jYWxlcycpXG4gICAgICA6ICcvbG9jYWxlcycsXG4gIHJlbG9hZE9uUHJlcmVuZGVyOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzIiwibG9jYWxlRGV0ZWN0aW9uIiwiZGVmYXVsdE5TIiwibG9jYWxlUGF0aCIsInJlcXVpcmUiLCJyZXNvbHZlIiwicmVsb2FkT25QcmVyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./src/components/common/ClientOnly.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/ClientOnly.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientOnly)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction ClientOnly({\n  children\n}) {\n  const {\n    0: hasMounted,\n    1: setHasMounted\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setHasMounted(true);\n  }, []);\n  if (!hasMounted) {\n    return null;\n  }\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: children\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2xpZW50T25seS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFBQTtBQUFBO0FBRTVCLFNBQVNNLFVBQVVBLENBQUM7RUFDakNDO0FBR0YsQ0FBQyxFQUFFO0VBQ0QsTUFBTTtJQUFBLEdBQUNDLFVBQVU7SUFBQSxHQUFFQztFQUFhLElBQUlSLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBRW5ERCxnREFBUyxDQUFDLE1BQU07SUFDZFMsYUFBYSxDQUFDLElBQUksQ0FBQztFQUNyQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBSSxDQUFDRCxVQUFVLEVBQUU7SUFDZixPQUFPLElBQUk7RUFDYjtFQUVBLG9CQUFPSCw2REFBQSxDQUFBRiwyREFBQTtJQUFBSSxRQUFBLEVBQUdBO0VBQVEsZ0JBQUcsQ0FBQztBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9DbGllbnRPbmx5LnRzeD85MDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50T25seSh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIGNvbnN0IFtoYXNNb3VudGVkLCBzZXRIYXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SGFzTW91bnRlZCh0cnVlKVxuICB9LCBbXSlcblxuICBpZiAoIWhhc01vdW50ZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPlxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3hERVYiLCJfanN4REVWIiwiQ2xpZW50T25seSIsImNoaWxkcmVuIiwiaGFzTW91bnRlZCIsInNldEhhc01vdW50ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/ClientOnly.tsx\n");

/***/ }),

/***/ "./src/components/common/Logo3D.tsx":
/*!******************************************!*\
  !*** ./src/components/common/Logo3D.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logo3D)\n/* harmony export */ });\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/common/Logo3D.tsx\";\n\n\nfunction Logo3D() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex justify-center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {\n      className: \"relative flex h-48 w-48 items-center justify-center\",\n      initial: {\n        y: 0,\n        rotate: 0\n      },\n      animate: {\n        y: [-5, 5, -5],\n        rotate: [-1, 1, -1]\n      },\n      transition: {\n        duration: 6,\n        repeat: Infinity,\n        ease: 'easeInOut'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 blur-3xl\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"relative overflow-hidden rounded-2xl p-8\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl dark:from-gray-800/40 dark:to-gray-900/20\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"absolute inset-0 rounded-2xl border border-white/50 dark:border-white/10\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"relative\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n            src: \"/images/logo/TaxfyLogoSquare.svg\",\n            alt: \"Taxfy Logo\",\n            className: \"h-32 w-32 object-contain drop-shadow-2xl\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vTG9nbzNELnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUFBO0FBRXZCLFNBQVNHLE1BQU1BLENBQUEsRUFBRztFQUMvQixvQkFDRUQsNkRBQUE7SUFBS0UsU0FBUyxFQUFDLHFCQUFxQjtJQUFBQyxRQUFBLGVBQ2xDSCw2REFBQSxDQUFDRixpREFBTSxDQUFDTSxHQUFHO01BQ1RGLFNBQVMsRUFBQyxxREFBcUQ7TUFDL0RHLE9BQU8sRUFBRTtRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxNQUFNLEVBQUU7TUFBRSxDQUFFO01BQzdCQyxPQUFPLEVBQUU7UUFDUEYsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2RDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDcEIsQ0FBRTtNQUNGRSxVQUFVLEVBQUU7UUFDVkMsUUFBUSxFQUFFLENBQUM7UUFDWEMsTUFBTSxFQUFFQyxRQUFRO1FBQ2hCQyxJQUFJLEVBQUU7TUFDUixDQUFFO01BQUFWLFFBQUEsZ0JBR0ZILDZEQUFBO1FBQUtFLFNBQVMsRUFBQztNQUFtRztRQUFBWSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLGVBR3JIakIsNkRBQUE7UUFBS0UsU0FBUyxFQUFDLDBDQUEwQztRQUFBQyxRQUFBLGdCQUV2REgsNkRBQUE7VUFBS0UsU0FBUyxFQUFDO1FBQXlIO1VBQUFZLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFFLENBQUMsZUFHM0lqQiw2REFBQTtVQUFLRSxTQUFTLEVBQUM7UUFBMEU7VUFBQVksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQUUsQ0FBQyxlQUc1RmpCLDZEQUFBO1VBQUtFLFNBQVMsRUFBQyxVQUFVO1VBQUFDLFFBQUEsZUFDdkJILDZEQUFBO1lBQ0VrQixHQUFHLEVBQUMsa0NBQWtDO1lBQ3RDQyxHQUFHLEVBQUMsWUFBWTtZQUNoQmpCLFNBQVMsRUFBQztVQUEwQztZQUFBWSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsT0FDckQ7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDQyxDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQ0gsQ0FBQyxlQUdOakIsNkRBQUE7UUFBS0UsU0FBUyxFQUFDO01BQTZFO1FBQUFZLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUFFLENBQUMsZUFDL0ZqQiw2REFBQTtRQUFLRSxTQUFTLEVBQUM7TUFBK0U7UUFBQVksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQUUsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUN2RjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNWLENBQUM7QUFFVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0xvZ28zRC50c3g/YTA1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvM0QoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtNDggdy00OCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICBpbml0aWFsPXt7IHk6IDAsIHJvdGF0ZTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgeTogWy01LCA1LCAtNV0sXG4gICAgICAgICAgcm90YXRlOiBbLTEsIDEsIC0xXSxcbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgIGR1cmF0aW9uOiA2LFxuICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgZWFzZTogJ2Vhc2VJbk91dCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKiBBbWJpZW50IGdsb3cgZWZmZWN0cyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtaW5zZXQtMiBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTUwMC8yMCB2aWEtcHVycGxlLTUwMC8xMCB0by1pbmRpZ28tNTAwLzIwIGJsdXItM3hsXCIgLz5cblxuICAgICAgICB7LyogR2xhc3MgY2FyZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgcC04XCI+XG4gICAgICAgICAgey8qIEdsYXNzIGJhY2tncm91bmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUvNDAgdG8td2hpdGUvMjAgYmFja2Ryb3AtYmx1ci14bCBkYXJrOmZyb20tZ3JheS04MDAvNDAgZGFyazp0by1ncmF5LTkwMC8yMFwiIC8+XG5cbiAgICAgICAgICB7LyogUmVmbGVjdGl2ZSBib3JkZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvNTAgZGFyazpib3JkZXItd2hpdGUvMTBcIiAvPlxuXG4gICAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28vVGF4ZnlMb2dvU3F1YXJlLnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cIlRheGZ5IExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMyIHctMzIgb2JqZWN0LWNvbnRhaW4gZHJvcC1zaGFkb3ctMnhsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBBY2NlbnQgbGlnaHRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1yaWdodC0xMCAtdG9wLTEwIGgtMzIgdy0zMiByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTUwMC8yMCBibHVyLTJ4bFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0xMCAtbGVmdC0xMCBoLTMyIHctMzIgcm91bmRlZC1mdWxsIGJnLXB1cnBsZS01MDAvMjAgYmx1ci0yeGxcIiAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwianN4REVWIiwiX2pzeERFViIsIkxvZ28zRCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2IiwiaW5pdGlhbCIsInkiLCJyb3RhdGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJlYXNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Logo3D.tsx\n");

/***/ }),

/***/ "./src/components/common/SecurityBadge.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/SecurityBadge.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SecurityBadge)\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"@heroicons/react/24/solid\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__]);\n_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/common/SecurityBadge.tsx\";\n\n\nfunction SecurityBadge() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__.ShieldCheckIcon, {\n      className: \"mr-1.5 h-4 w-4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), \"Bank-Level Security\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vU2VjdXJpdHlCYWRnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkQ7QUFBQTtBQUU1QyxTQUFTRyxhQUFhQSxDQUFBLEVBQUc7RUFDdEMsb0JBQ0VELDZEQUFBO0lBQUtFLFNBQVMsRUFBQywwSUFBMEk7SUFBQUMsUUFBQSxnQkFDdkpILDZEQUFBLENBQUNGLHNFQUFlO01BQUNJLFNBQVMsRUFBQztJQUFnQjtNQUFBRSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLHVCQUVoRDtFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUFLLENBQUM7QUFFVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL1NlY3VyaXR5QmFkZ2UudHN4PzAzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpZWxkQ2hlY2tJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJpdHlCYWRnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JlZW4tODAwIGRhcms6YmctZ3JlZW4tOTAwLzMwIGRhcms6dGV4dC1ncmVlbi0zMDBcIj5cbiAgICAgIDxTaGllbGRDaGVja0ljb24gY2xhc3NOYW1lPVwibXItMS41IGgtNCB3LTRcIiAvPlxuICAgICAgQmFuay1MZXZlbCBTZWN1cml0eVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiU2hpZWxkQ2hlY2tJY29uIiwianN4REVWIiwiX2pzeERFViIsIlNlY3VyaXR5QmFkZ2UiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/SecurityBadge.tsx\n");

/***/ }),

/***/ "./src/components/pages/common/DiscordRow.tsx":
/*!****************************************************!*\
  !*** ./src/components/pages/common/DiscordRow.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DiscordRow)\n/* harmony export */ });\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/site */ \"./src/config/site.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/common/DiscordRow.tsx\";\n\n\n\nfunction DiscordRow() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(['common']);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"bg-gray-50 dark:bg-gray-800\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n          href: _config_site__WEBPACK_IMPORTED_MODULE_1__[\"default\"].discordInvitationLink,\n          target: \"_blank\",\n          rel: \"noopener noreferrer\",\n          className: \"inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700\",\n          children: t('connect')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb21tb24vRGlzY29yZFJvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNQO0FBQUE7QUFFdkIsU0FBU0ksVUFBVUEsQ0FBQSxFQUFHO0VBQ25DLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdMLDREQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUV4QyxvQkFDRUcsNkRBQUE7SUFBS0csU0FBUyxFQUFDLDZCQUE2QjtJQUFBQyxRQUFBLGVBQzFDSiw2REFBQTtNQUFLRyxTQUFTLEVBQUMsOENBQThDO01BQUFDLFFBQUEsZUFDM0RKLDZEQUFBO1FBQUtHLFNBQVMsRUFBQyxhQUFhO1FBQUFDLFFBQUEsZUFDMUJKLDZEQUFBO1VBQ0VLLElBQUksRUFBRVAsMEVBQWlDO1VBQ3ZDUyxNQUFNLEVBQUMsUUFBUTtVQUNmQyxHQUFHLEVBQUMscUJBQXFCO1VBQ3pCTCxTQUFTLEVBQUMsNEhBQTRIO1VBQUFDLFFBQUEsRUFFcklGLENBQUMsQ0FBQyxTQUFTO1FBQUM7VUFBQU8sUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ1o7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDRDtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0gsQ0FBQztBQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29tbW9uL0Rpc2NvcmRSb3cudHN4PzRhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnXG5pbXBvcnQgc2l0ZUNvbmZpZyBmcm9tICdAL2NvbmZpZy9zaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3JkUm93KCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTEyIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3NpdGVDb25maWcuZGlzY29yZEludml0YXRpb25MaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC00IHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby03MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdjb25uZWN0Jyl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJzaXRlQ29uZmlnIiwianN4REVWIiwiX2pzeERFViIsIkRpc2NvcmRSb3ciLCJ0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJocmVmIiwiZGlzY29yZEludml0YXRpb25MaW5rIiwidGFyZ2V0IiwicmVsIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/common/DiscordRow.tsx\n");

/***/ }),

/***/ "./src/components/pages/home/FeaturesRow.tsx":
/*!***************************************************!*\
  !*** ./src/components/pages/home/FeaturesRow.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FeaturesRow)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"@heroicons/react/24/outline\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__]);\n_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/home/FeaturesRow.tsx\";\n\n\n\n\nconst features = [{\n  name: 'features.transactions.title',\n  description: 'features.transactions.description',\n  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ChartBarIcon\n}, {\n  name: 'features.nft.title',\n  description: 'features.nft.description',\n  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.DocumentTextIcon\n}, {\n  name: 'features.realtime.title',\n  description: 'features.realtime.description',\n  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ClockIcon\n}, {\n  name: 'features.historical.title',\n  description: 'features.historical.description',\n  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CurrencyDollarIcon\n}];\nfunction FeaturesRow() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(['common']);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"bg-white py-24 sm:py-32 dark:bg-gray-800\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-2xl lg:text-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          className: \"text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400\",\n          children: t('features.tagline')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          className: \"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white\",\n          children: t('features.title')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"dl\", {\n          className: \"grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4\",\n          children: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(features).call(features, feature => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"dt\", {\n              className: \"flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(feature.icon, {\n                className: \"h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400\",\n                \"aria-hidden\": \"true\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 19\n              }, this), t(feature.name)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"dd\", {\n              className: \"mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n                className: \"flex-auto\",\n                children: t(feature.description)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 17\n            }, this)]\n          }, feature.name, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9ob21lL0ZlYXR1cmVzUm93LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBTVQ7QUFBQTtBQUVwQyxNQUFNTyxRQUFRLEdBQUcsQ0FDZjtFQUNFQyxJQUFJLEVBQUUsNkJBQTZCO0VBQ25DQyxXQUFXLEVBQUUsbUNBQW1DO0VBQ2hEQyxJQUFJLEVBQUVULHFFQUFZQTtBQUNwQixDQUFDLEVBQ0Q7RUFDRU8sSUFBSSxFQUFFLG9CQUFvQjtFQUMxQkMsV0FBVyxFQUFFLDBCQUEwQjtFQUN2Q0MsSUFBSSxFQUFFUix5RUFBZ0JBO0FBQ3hCLENBQUMsRUFDRDtFQUNFTSxJQUFJLEVBQUUseUJBQXlCO0VBQy9CQyxXQUFXLEVBQUUsK0JBQStCO0VBQzVDQyxJQUFJLEVBQUVOLGtFQUFTQTtBQUNqQixDQUFDLEVBQ0Q7RUFDRUksSUFBSSxFQUFFLDJCQUEyQjtFQUNqQ0MsV0FBVyxFQUFFLGlDQUFpQztFQUM5Q0MsSUFBSSxFQUFFUCwyRUFBa0JBO0FBQzFCLENBQUMsQ0FDRjtBQUVjLFNBQVNRLFdBQVdBLENBQUEsRUFBRztFQUNwQyxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHWiw0REFBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7RUFFeEMsb0JBQ0VNLDZEQUFBO0lBQUtPLFNBQVMsRUFBQywwQ0FBMEM7SUFBQUMsUUFBQSxlQUN2RFIsNkRBQUE7TUFBS08sU0FBUyxFQUFDLGdDQUFnQztNQUFBQyxRQUFBLGdCQUM3Q1IsNkRBQUE7UUFBS08sU0FBUyxFQUFDLGtDQUFrQztRQUFBQyxRQUFBLGdCQUMvQ1IsNkRBQUE7VUFBSU8sU0FBUyxFQUFDLHdFQUF3RTtVQUFBQyxRQUFBLEVBQ25GRixDQUFDLENBQUMsa0JBQWtCO1FBQUM7VUFBQUcsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ3BCLENBQUMsZUFDTFosNkRBQUE7VUFBR08sU0FBUyxFQUFDLGtGQUFrRjtVQUFBQyxRQUFBLEVBQzVGRixDQUFDLENBQUMsZ0JBQWdCO1FBQUM7VUFBQUcsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ25CLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDRCxDQUFDLGVBQ05aLDZEQUFBO1FBQUtPLFNBQVMsRUFBQyx5REFBeUQ7UUFBQUMsUUFBQSxlQUN0RVIsNkRBQUE7VUFBSU8sU0FBUyxFQUFDLHlFQUF5RTtVQUFBQyxRQUFBLEVBQ3BGSyx5RkFBQSxDQUFBWixRQUFRLEVBQUFhLElBQUEsQ0FBUmIsUUFBUSxFQUFNYyxPQUFPLGlCQUNwQmYsNkRBQUE7WUFBd0JPLFNBQVMsRUFBQyxlQUFlO1lBQUFDLFFBQUEsZ0JBQy9DUiw2REFBQTtjQUFJTyxTQUFTLEVBQUMsMkZBQTJGO2NBQUFDLFFBQUEsZ0JBQ3ZHUiw2REFBQSxDQUFDZSxPQUFPLENBQUNYLElBQUk7Z0JBQ1hHLFNBQVMsRUFBQyx3REFBd0Q7Z0JBQ2xFLGVBQVk7Y0FBTTtnQkFBQUUsUUFBQSxFQUFBQyxZQUFBO2dCQUFBQyxVQUFBO2dCQUFBQyxZQUFBO2NBQUEsT0FDbkIsQ0FBQyxFQUNETixDQUFDLENBQUNTLE9BQU8sQ0FBQ2IsSUFBSSxDQUFDO1lBQUE7Y0FBQU8sUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLE9BQ2QsQ0FBQyxlQUNMWiw2REFBQTtjQUFJTyxTQUFTLEVBQUMsbUZBQW1GO2NBQUFDLFFBQUEsZUFDL0ZSLDZEQUFBO2dCQUFHTyxTQUFTLEVBQUMsV0FBVztnQkFBQUMsUUFBQSxFQUFFRixDQUFDLENBQUNTLE9BQU8sQ0FBQ1osV0FBVztjQUFDO2dCQUFBTSxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxPQUFJO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLE9BQ25ELENBQUM7VUFBQSxHQVZHRyxPQUFPLENBQUNiLElBQUk7WUFBQU8sUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLE9BV2pCLENBQ047UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDQTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUNGLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNILENBQUM7QUFFVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9GZWF0dXJlc1Jvdy50c3g/YWY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7XG4gIENoYXJ0QmFySWNvbixcbiAgRG9jdW1lbnRUZXh0SWNvbixcbiAgQ3VycmVuY3lEb2xsYXJJY29uLFxuICBDbG9ja0ljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSdcblxuY29uc3QgZmVhdHVyZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnZmVhdHVyZXMudHJhbnNhY3Rpb25zLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ2ZlYXR1cmVzLnRyYW5zYWN0aW9ucy5kZXNjcmlwdGlvbicsXG4gICAgaWNvbjogQ2hhcnRCYXJJY29uLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZlYXR1cmVzLm5mdC50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdmZWF0dXJlcy5uZnQuZGVzY3JpcHRpb24nLFxuICAgIGljb246IERvY3VtZW50VGV4dEljb24sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZmVhdHVyZXMucmVhbHRpbWUudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnZmVhdHVyZXMucmVhbHRpbWUuZGVzY3JpcHRpb24nLFxuICAgIGljb246IENsb2NrSWNvbixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdmZWF0dXJlcy5oaXN0b3JpY2FsLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ2ZlYXR1cmVzLmhpc3RvcmljYWwuZGVzY3JpcHRpb24nLFxuICAgIGljb246IEN1cnJlbmN5RG9sbGFySWNvbixcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZXNSb3coKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oWydjb21tb24nXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMjQgc206cHktMzIgZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBsZzp0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTcgdGV4dC1pbmRpZ28tNjAwIGRhcms6dGV4dC1pbmRpZ28tNDAwXCI+XG4gICAgICAgICAgICB7dCgnZmVhdHVyZXMudGFnbGluZScpfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHt0KCdmZWF0dXJlcy50aXRsZScpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0xNiBtYXgtdy0yeGwgc206bXQtMjAgbGc6bXQtMjQgbGc6bWF4LXctbm9uZVwiPlxuICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJncmlkIG1heC13LXhsIGdyaWQtY29scy0xIGdhcC14LTggZ2FwLXktMTYgbGc6bWF4LXctbm9uZSBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZmVhdHVyZS5uYW1lfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTMgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy03IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZmVhdHVyZS5pY29uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgZmxleC1ub25lIHRleHQtaW5kaWdvLTYwMCBkYXJrOnRleHQtaW5kaWdvLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3QoZmVhdHVyZS5uYW1lKX1cbiAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC1hdXRvIGZsZXgtY29sIHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtYXV0b1wiPnt0KGZlYXR1cmUuZGVzY3JpcHRpb24pfTwvcD5cbiAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsIkNoYXJ0QmFySWNvbiIsIkRvY3VtZW50VGV4dEljb24iLCJDdXJyZW5jeURvbGxhckljb24iLCJDbG9ja0ljb24iLCJqc3hERVYiLCJfanN4REVWIiwiZmVhdHVyZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiRmVhdHVyZXNSb3ciLCJ0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfbWFwSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJmZWF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/home/FeaturesRow.tsx\n");

/***/ }),

/***/ "./src/components/pages/home/HeroRow.tsx":
/*!***********************************************!*\
  !*** ./src/components/pages/home/HeroRow.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HeroRow)\n/* harmony export */ });\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_SecurityBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/SecurityBadge */ \"./src/components/common/SecurityBadge.tsx\");\n/* harmony import */ var _components_common_Logo3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/Logo3D */ \"./src/components/common/Logo3D.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_SecurityBadge__WEBPACK_IMPORTED_MODULE_1__, _components_common_Logo3D__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__]);\n([_components_common_SecurityBadge__WEBPACK_IMPORTED_MODULE_1__, _components_common_Logo3D__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/home/HeroRow.tsx\";\n\n\n\n\n\nfunction HeroRow() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(['common']);\n  const {\n    setVisible\n  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.useWalletModal)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"relative isolate\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80\",\n      \"aria-hidden\": \"true\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]\",\n        style: {\n          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-2xl lg:mx-0 lg:flex-auto\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_SecurityBadge__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n          className: \"mt-6 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white\",\n          children: t('welcome')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          className: \"mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300\",\n          children: t('description')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"mt-10 flex items-center gap-x-6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n            onClick: () => setVisible(true),\n            className: \"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n            children: t('getStarted')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"relative mx-auto w-[22.875rem] max-w-full\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            className: \"absolute -top-64 left-1/2 -z-10 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0\",\n            src: \"/images/hero-gradient.png\",\n            alt: \"\",\n            width: 2432,\n            height: 1442\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"relative rounded-xl bg-gray-900/5 p-8 shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-800/50 dark:ring-white/10\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Logo3D__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsT0FDUCxDQUFDO1FBQUE7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ0g7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDSCxDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0gsQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNILENBQUM7QUFFVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9IZXJvUm93LnRzeD8wM2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xuaW1wb3J0IFNlY3VyaXR5QmFkZ2UgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9TZWN1cml0eUJhZGdlJ1xuaW1wb3J0IExvZ28zRCBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0xvZ28zRCdcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1JvdygpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuICBjb25zdCB7IHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXNvbGF0ZVwiPlxuICAgICAgey8qIEdyYWRpZW50IEJhY2tncm91bmQgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCAtdG9wLTQwIC16LTEwIHRyYW5zZm9ybS1ncHUgb3ZlcmZsb3ctaGlkZGVuIGJsdXItM3hsIHNtOi10b3AtODBcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbGVmdC1bY2FsYyg1MCUtMTFyZW0pXSBhc3BlY3QtWzExNTUvNjc4XSB3LVszNi4xMjVyZW1dIC10cmFuc2xhdGUteC0xLzIgcm90YXRlLVszMGRlZ10gYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1bI2ZmODBiNV0gdG8tWyM5MDg5ZmNdIG9wYWNpdHktMzAgc206bGVmdC1bY2FsYyg1MCUtMzByZW0pXSBzbTp3LVs3Mi4xODc1cmVtXVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNsaXBQYXRoOlxuICAgICAgICAgICAgICAncG9seWdvbig3NC4xJSA0NC4xJSwgMTAwJSA2MS42JSwgOTcuNSUgMjYuOSUsIDg1LjUlIDAuMSUsIDgwLjclIDIlLCA3Mi41JSAzMi41JSwgNjAuMiUgNjIuNCUsIDUyLjQlIDY4LjElLCA0Ny41JSA1OC4zJSwgNDUuMiUgMzQuNSUsIDI3LjUlIDc2LjclLCAwLjElIDY0LjklLCAxNy45JSAxMDAlLCAyNy42JSA3Ni44JSwgNzYuMSUgOTcuNyUsIDc0LjElIDQ0LjElKScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgcHktMjQgc206cHktMzIgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6Z2FwLXgtMTAgbGc6cHgtOCBsZzpweS00MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIGxnOm14LTAgbGc6ZmxleC1hdXRvXCI+XG4gICAgICAgICAgPFNlY3VyaXR5QmFkZ2UgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNiBtYXgtdy1sZyB0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTZ4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHt0KCd3ZWxjb21lJyl9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtbGcgbGVhZGluZy04IHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICB7dCgnZGVzY3JpcHRpb24nKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC02XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC0zLjUgcHktMi41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnZ2V0U3RhcnRlZCcpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBIZXJvIEltYWdlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IHNtOm10LTI0IGxnOm10LTAgbGc6ZmxleC1zaHJpbmstMCBsZzpmbGV4LWdyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gdy1bMjIuODc1cmVtXSBtYXgtdy1mdWxsXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNjQgbGVmdC0xLzIgLXotMTAgaC1bNjRyZW1dIHctWzEyOHJlbV0gLXRyYW5zbGF0ZS14LTEvMiBbbWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2xvc2VzdC1zaWRlLHdoaXRlLHRyYW5zcGFyZW50KV0gc206bGVmdC1mdWxsIHNtOi1tbC04MCBsZzpsZWZ0LTEvMiBsZzptbC0wIGxnOi10cmFuc2xhdGUteC0xLzIgbGc6dHJhbnNsYXRlLXktMFwiXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaGVyby1ncmFkaWVudC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICB3aWR0aD17MjQzMn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNDQyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC14bCBiZy1ncmF5LTkwMC81IHAtOCBzaGFkb3ctMnhsIHJpbmctMSByaW5nLWdyYXktOTAwLzEwIGRhcms6YmctZ3JheS04MDAvNTAgZGFyazpyaW5nLXdoaXRlLzEwXCI+XG4gICAgICAgICAgICAgIDxMb2dvM0QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJTZWN1cml0eUJhZGdlIiwiTG9nbzNEIiwidXNlV2FsbGV0TW9kYWwiLCJqc3hERVYiLCJfanN4REVWIiwiSGVyb1JvdyIsInQiLCJzZXRWaXNpYmxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzdHlsZSIsImNsaXBQYXRoIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/home/HeroRow.tsx\n");

/***/ }),

/***/ "./src/components/pages/home/ServiceOverview.tsx":
/*!*******************************************************!*\
  !*** ./src/components/pages/home/ServiceOverview.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServiceOverview)\n/* harmony export */ });\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/home/ServiceOverview.tsx\";\n\n\nfunction ServiceOverview() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(['common']);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"bg-gray-50 py-24 dark:bg-gray-900\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-2xl lg:text-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n          className: \"text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400\",\n          children: t('services.tagline')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white\",\n          children: t('services.title')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300\",\n          children: t('services.description')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none dark:ring-gray-700\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"p-8 sm:p-10 lg:flex-auto\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            className: \"text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n            children: t('services.features.title')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            className: \"mt-6 text-base leading-7 text-gray-600 dark:text-gray-300\",\n            children: t('services.features.description')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"mt-10 flex items-center gap-x-4\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n              className: \"flex-none text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400\",\n              children: t('services.includes')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"h-px flex-auto bg-gray-100 dark:bg-gray-700\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            className: \"mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 dark:text-gray-300\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n              className: \"flex gap-x-3\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400\",\n                \"aria-hidden\": \"true\",\n                children: \"\\u2713\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, this), t('services.features.list.transactions')]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n              className: \"flex gap-x-3\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400\",\n                \"aria-hidden\": \"true\",\n                children: \"\\u2713\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, this), t('services.features.list.nft')]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n              className: \"flex gap-x-3\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400\",\n                \"aria-hidden\": \"true\",\n                children: \"\\u2713\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, this), t('services.features.list.realtime')]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n              className: \"flex gap-x-3\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400\",\n                \"aria-hidden\": \"true\",\n                children: \"\\u2713\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, this), t('services.features.list.historical')]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9ob21lL1NlcnZpY2VPdmVydmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQUE7QUFFOUIsU0FBU0csZUFBZUEsQ0FBQSxFQUFHO0VBQ3hDLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdKLDREQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUV4QyxvQkFDRUUsNkRBQUE7SUFBS0csU0FBUyxFQUFDLG1DQUFtQztJQUFBQyxRQUFBLGVBQ2hESiw2REFBQTtNQUFLRyxTQUFTLEVBQUMsZ0NBQWdDO01BQUFDLFFBQUEsZ0JBQzdDSiw2REFBQTtRQUFLRyxTQUFTLEVBQUMsa0NBQWtDO1FBQUFDLFFBQUEsZ0JBQy9DSiw2REFBQTtVQUFJRyxTQUFTLEVBQUMsd0VBQXdFO1VBQUFDLFFBQUEsRUFDbkZGLENBQUMsQ0FBQyxrQkFBa0I7UUFBQztVQUFBRyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDcEIsQ0FBQyxlQUNMUiw2REFBQTtVQUFHRyxTQUFTLEVBQUMsa0ZBQWtGO1VBQUFDLFFBQUEsRUFDNUZGLENBQUMsQ0FBQyxnQkFBZ0I7UUFBQztVQUFBRyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDbkIsQ0FBQyxlQUNKUiw2REFBQTtVQUFHRyxTQUFTLEVBQUMseURBQXlEO1VBQUFDLFFBQUEsRUFDbkVGLENBQUMsQ0FBQyxzQkFBc0I7UUFBQztVQUFBRyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDekIsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUNELENBQUMsZUFFTlIsNkRBQUE7UUFBS0csU0FBUyxFQUFDLG9IQUFvSDtRQUFBQyxRQUFBLGVBQ2pJSiw2REFBQTtVQUFLRyxTQUFTLEVBQUMsMEJBQTBCO1VBQUFD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QTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUNILENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDRjtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUNILENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNILENBQUM7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvU2VydmljZU92ZXJ2aWV3LnRzeD9lNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlT3ZlcnZpZXcoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oWydjb21tb24nXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweS0yNCBkYXJrOmJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIGxnOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGxlYWRpbmctNyB0ZXh0LWluZGlnby02MDAgZGFyazp0ZXh0LWluZGlnby00MDBcIj5cbiAgICAgICAgICAgIHt0KCdzZXJ2aWNlcy50YWdsaW5lJyl9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge3QoJ3NlcnZpY2VzLnRpdGxlJyl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1sZyBsZWFkaW5nLTggdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIHt0KCdzZXJ2aWNlcy5kZXNjcmlwdGlvbicpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG10LTE2IG1heC13LTJ4bCByb3VuZGVkLTN4bCByaW5nLTEgcmluZy1ncmF5LTIwMCBzbTptdC0yMCBsZzpteC0wIGxnOmZsZXggbGc6bWF4LXctbm9uZSBkYXJrOnJpbmctZ3JheS03MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBzbTpwLTEwIGxnOmZsZXgtYXV0b1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICB7dCgnc2VydmljZXMuZmVhdHVyZXMudGl0bGUnKX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAge3QoJ3NlcnZpY2VzLmZlYXR1cmVzLmRlc2NyaXB0aW9uJyl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZsZXgtbm9uZSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtaW5kaWdvLTYwMCBkYXJrOnRleHQtaW5kaWdvLTQwMFwiPlxuICAgICAgICAgICAgICAgIHt0KCdzZXJ2aWNlcy5pbmNsdWRlcycpfVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtcHggZmxleC1hdXRvIGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS03MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtOCBncmlkIGdyaWQtY29scy0xIGdhcC00IHRleHQtc20gbGVhZGluZy02IHRleHQtZ3JheS02MDAgc206Z3JpZC1jb2xzLTIgc206Z2FwLTYgbGc6Z3JpZC1jb2xzLTIgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNSBmbGV4LW5vbmUgdGV4dC1pbmRpZ28tNjAwIGRhcms6dGV4dC1pbmRpZ28tNDAwXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg4pyTXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHt0KCdzZXJ2aWNlcy5mZWF0dXJlcy5saXN0LnRyYW5zYWN0aW9ucycpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTUgZmxleC1ub25lIHRleHQtaW5kaWdvLTYwMCBkYXJrOnRleHQtaW5kaWdvLTQwMFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOKck1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dCgnc2VydmljZXMuZmVhdHVyZXMubGlzdC5uZnQnKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy01IGZsZXgtbm9uZSB0ZXh0LWluZGlnby02MDAgZGFyazp0ZXh0LWluZGlnby00MDBcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDinJNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3QoJ3NlcnZpY2VzLmZlYXR1cmVzLmxpc3QucmVhbHRpbWUnKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy01IGZsZXgtbm9uZSB0ZXh0LWluZGlnby02MDAgZGFyazp0ZXh0LWluZGlnby00MDBcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDinJNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3QoJ3NlcnZpY2VzLmZlYXR1cmVzLmxpc3QuaGlzdG9yaWNhbCcpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwianN4REVWIiwiX2pzeERFViIsIlNlcnZpY2VPdmVydmlldyIsInQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pages/home/ServiceOverview.tsx\n");

/***/ }),

/***/ "./src/components/pages/home/StatsRow.tsx":
/*!************************************************!*\
  !*** ./src/components/pages/home/StatsRow.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StatsRow)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/home/StatsRow.tsx\";\n\n\n\n\nfunction StatsRow() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(['common']);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"bg-white py-24 sm:py-32 dark:bg-gray-900\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-2xl lg:max-w-none\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n          initial: {\n            opacity: 0,\n            y: 20\n          },\n          whileInView: {\n            opacity: 1,\n            y: 0\n          },\n          viewport: {\n            once: true\n          },\n          className: \"text-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n            className: \"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white\",\n            children: t('stats.title')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: \"mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300\",\n            children: t('stats.description')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"dl\", {\n          className: \"mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4\",\n          children: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(stats).call(stats, (stat, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n              opacity: 0,\n              y: 20\n            },\n            whileInView: {\n              opacity: 1,\n              y: 0\n            },\n            viewport: {\n              once: true\n            },\n            transition: {\n              delay: index * 0.1\n            },\n            className: \"flex flex-col rounded-2xl bg-gray-400/5 p-8 transition-colors hover:bg-gray-400/10\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"dt\", {\n              className: \"text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300\",\n              children: t(stat.name)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"dd\", {\n              className: \"order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white\",\n              children: stat.value\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 17\n            }, this)]\n          }, stat.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\nconst stats = [{\n  id: 1,\n  name: 'stats.transactions',\n  value: '10K+'\n}, {\n  id: 2,\n  name: 'stats.nfts',\n  value: '5K+'\n}, {\n  id: 3,\n  name: 'stats.users',\n  value: '1K+'\n}, {\n  id: 4,\n  name: 'stats.realtime',\n  value: '24/7'\n}];\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQyxZQUFBO01BQUEsT0FDRjtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0gsQ0FBQztBQUVWO0FBRUEsTUFBTUUsS0FBSyxHQUFHLENBQ1o7RUFBRVEsRUFBRSxFQUFFLENBQUM7RUFBRUYsSUFBSSxFQUFFLG9CQUFvQjtFQUFFQyxLQUFLLEVBQUU7QUFBTyxDQUFDLEVBQ3BEO0VBQUVDLEVBQUUsRUFBRSxDQUFDO0VBQUVGLElBQUksRUFBRSxZQUFZO0VBQUVDLEtBQUssRUFBRTtBQUFNLENBQUMsRUFDM0M7RUFBRUMsRUFBRSxFQUFFLENBQUM7RUFBRUYsSUFBSSxFQUFFLGFBQWE7RUFBRUMsS0FBSyxFQUFFO0FBQU0sQ0FBQyxFQUM1QztFQUFFQyxFQUFFLEVBQUUsQ0FBQztFQUFFRixJQUFJLEVBQUUsZ0JBQWdCO0VBQUVDLEtBQUssRUFBRTtBQUFPLENBQUMsQ0FDakQsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvU3RhdHNSb3cudHN4PzUyODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0c1JvdygpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0yNCBzbTpweS0zMiBkYXJrOmJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIGxnOm1heC13LW5vbmVcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAge3QoJ3N0YXRzLnRpdGxlJyl9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWxnIGxlYWRpbmctOCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICB7dCgnc3RhdHMuZGVzY3JpcHRpb24nKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTE2IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgc206Z3JpZC1jb2xzLTIgc206Z2FwLTYgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgIHtzdGF0cy5tYXAoKHN0YXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtzdGF0LmlkfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLTJ4bCBiZy1ncmF5LTQwMC81IHAtOCB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1ncmF5LTQwMC8xMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAge3Qoc3RhdC5uYW1lKX1cbiAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJvcmRlci1maXJzdCB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7c3RhdC52YWx1ZX1cbiAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2RsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IHN0YXRzID0gW1xuICB7IGlkOiAxLCBuYW1lOiAnc3RhdHMudHJhbnNhY3Rpb25zJywgdmFsdWU6ICcxMEsrJyB9LFxuICB7IGlkOiAyLCBuYW1lOiAnc3RhdHMubmZ0cycsIHZhbHVlOiAnNUsrJyB9LFxuICB7IGlkOiAzLCBuYW1lOiAnc3RhdHMudXNlcnMnLCB2YWx1ZTogJzFLKycgfSxcbiAgeyBpZDogNCwgbmFtZTogJ3N0YXRzLnJlYWx0aW1lJywgdmFsdWU6ICcyNC83JyB9LFxuXVxuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwibW90aW9uIiwianN4REVWIiwiX2pzeERFViIsIlN0YXRzUm93IiwidCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfbWFwSW5zdGFuY2VQcm9wZXJ0eSIsInN0YXRzIiwiY2FsbCIsInN0YXQiLCJpbmRleCIsInRyYW5zaXRpb24iLCJkZWxheSIsIm5hbWUiLCJ2YWx1ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/home/StatsRow.tsx\n");

/***/ }),

/***/ "./src/config/site.ts":
/*!****************************!*\
  !*** ./src/config/site.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taxfy_cloud_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../taxfy-cloud.config.json */ \"../taxfy-cloud.config.json\");\n\nconst siteConfig = {\n  domain: _taxfy_cloud_config_json__WEBPACK_IMPORTED_MODULE_0__.app.appDomain,\n  copyright: 'Taxfy',\n  sitenameJA: 'Taxfy Solana Web',\n  sitenameEN: 'Taxfy Solana Web',\n  keywordsJA: 'Solana, 税金, NFT, DeFi',\n  keywordsEN: 'Solana, Tax, NFT, DeFi',\n  descriptionJA: 'Solanaの税金計算を簡単に',\n  descriptionEN: 'Easy tax calculations for Solana',\n  twitterAccount: '@TaxfyDev',\n  discordInvitationLink: 'https://discord.gg/taxfy',\n  githubAccount: 'henryhawke/taxfy-cli'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3NpdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0Q7QUFFL0QsTUFBTUMsVUFBVSxHQUFHO0VBQ2pCQyxNQUFNLEVBQUVGLHlEQUFvQixDQUFDSSxTQUFTO0VBQ3RDQyxTQUFTLEVBQUUsT0FBTztFQUNsQkMsVUFBVSxFQUFFLGtCQUFrQjtFQUM5QkMsVUFBVSxFQUFFLGtCQUFrQjtFQUM5QkMsVUFBVSxFQUFFLHVCQUF1QjtFQUNuQ0MsVUFBVSxFQUFFLHdCQUF3QjtFQUNwQ0MsYUFBYSxFQUFFLGlCQUFpQjtFQUNoQ0MsYUFBYSxFQUFFLGtDQUFrQztFQUNqREMsY0FBYyxFQUFFLFdBQVc7RUFDM0JDLHFCQUFxQixFQUFFLDBCQUEwQjtFQUNqREMsYUFBYSxFQUFFO0FBQ2pCLENBQUM7QUFFRCxpRUFBZWIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9jb25maWcvc2l0ZS50cz9iZWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0YXhmeUNsb3VkQ29uZmlnIGZyb20gJy4uLy4uLy4uL3RheGZ5LWNsb3VkLmNvbmZpZy5qc29uJ1xuXG5jb25zdCBzaXRlQ29uZmlnID0ge1xuICBkb21haW46IHRheGZ5Q2xvdWRDb25maWcuYXBwLmFwcERvbWFpbixcbiAgY29weXJpZ2h0OiAnVGF4ZnknLFxuICBzaXRlbmFtZUpBOiAnVGF4ZnkgU29sYW5hIFdlYicsXG4gIHNpdGVuYW1lRU46ICdUYXhmeSBTb2xhbmEgV2ViJyxcbiAga2V5d29yZHNKQTogJ1NvbGFuYSwg56iO6YeRLCBORlQsIERlRmknLFxuICBrZXl3b3Jkc0VOOiAnU29sYW5hLCBUYXgsIE5GVCwgRGVGaScsXG4gIGRlc2NyaXB0aW9uSkE6ICdTb2xhbmHjga7nqI7ph5HoqIjnrpfjgpLnsKHljZjjgasnLFxuICBkZXNjcmlwdGlvbkVOOiAnRWFzeSB0YXggY2FsY3VsYXRpb25zIGZvciBTb2xhbmEnLFxuICB0d2l0dGVyQWNjb3VudDogJ0BUYXhmeURldicsXG4gIGRpc2NvcmRJbnZpdGF0aW9uTGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy90YXhmeScsXG4gIGdpdGh1YkFjY291bnQ6ICdoZW5yeWhhd2tlL3RheGZ5LWNsaSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2l0ZUNvbmZpZ1xuIl0sIm5hbWVzIjpbInRheGZ5Q2xvdWRDb25maWciLCJzaXRlQ29uZmlnIiwiZG9tYWluIiwiYXBwIiwiYXBwRG9tYWluIiwiY29weXJpZ2h0Iiwic2l0ZW5hbWVKQSIsInNpdGVuYW1lRU4iLCJrZXl3b3Jkc0pBIiwia2V5d29yZHNFTiIsImRlc2NyaXB0aW9uSkEiLCJkZXNjcmlwdGlvbkVOIiwidHdpdHRlckFjY291bnQiLCJkaXNjb3JkSW52aXRhdGlvbkxpbmsiLCJnaXRodWJBY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/site.ts\n");

/***/ }),

/***/ "./src/layouts/default/DefaultLayout.tsx":
/*!***********************************************!*\
  !*** ./src/layouts/default/DefaultLayout.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DefaultLayout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_common_ClientOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/ClientOnly */ \"./src/components/common/ClientOnly.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__]);\n_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/layouts/default/DefaultLayout.tsx\";\n\n\n\n\n\n\nfunction DefaultLayout({\n  children\n}) {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(['common']);\n  const {\n    0: mobileMenuOpen,\n    1: setMobileMenuOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"min-h-screen bg-white dark:bg-gray-900\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"header\", {\n      className: \"absolute inset-x-0 top-0 z-50\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"nav\", {\n        className: \"flex items-center justify-between p-6 lg:px-8\",\n        \"aria-label\": \"Global\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"flex lg:flex-1\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            className: \"-m-1.5 p-1.5\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              className: \"text-2xl font-bold text-gray-900 dark:text-white\",\n              children: \"Taxfy\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"flex flex-1 justify-end\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_common_ClientOnly__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletMultiButton, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kZWZhdWx0L0RlZmF1bHRMYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUN3QjtBQUN2QztBQUNpQjtBQUdVO0FBQUE7QUFNeEMsU0FBU08sYUFBYUEsQ0FBQztFQUFFQztBQUE2QixDQUFDLEVBQUU7RUFDdEUsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR04sNERBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ3hDLE1BQU07SUFBQSxHQUFDTyxjQUFjO0lBQUEsR0FBRUM7RUFBaUIsSUFBSVgsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFFM0Qsb0JBQ0VNLDZEQUFBO0lBQUtNLFNBQVMsRUFBQyx3Q0FBd0M7SUFBQUosUUFBQSxnQkFDckRGLDZEQUFBO01BQVFNLFNBQVMsRUFBQywrQkFBK0I7TUFBQUosUUFBQSxlQUMvQ0YsNkRBQUE7UUFDRU0sU0FBUyxFQUFDLCtDQUErQztRQUN6RCxjQUFXLFFBQVE7UUFBQUosUUFBQSxnQkFFbkJGLDZEQUFBO1VBQUtNLFNBQVMsRUFBQyxnQkFBZ0I7VUFBQUosUUFBQSxlQUM3QkYsNkRBQUEsQ0FBQ0osa0RBQUk7WUFBQ1csSUFBSSxFQUFDLEdBQUc7WUFBQ0QsU0FBUyxFQUFDLGNBQWM7WUFBQUosUUFBQSxlQUNyQ0YsNkRBQUE7Y0FBTU0sU0FBUyxFQUFDLGtEQUFrRDtjQUFBSixRQUFBLEVBQUM7WUFFbkU7Y0FBQU0sUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLE9BQU07VUFBQztZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsT0FDSDtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUNKLENBQUMsZUFDTlgsNkRBQUE7VUFBS00sU0FBUyxFQUFDLHlCQUF5QjtVQUFBSixRQUFBLGVBQ3RDRiw2REFBQSxDQUFDRixxRUFBVTtZQUFBSSxRQUFBLGVBQ1RGLDZEQUFBLENBQUNMLDhFQUFpQjtjQUFBYSxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsT0FBRTtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUNYO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ1YsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUNIO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0EsQ0FBQyxlQUNUWCw2REFBQTtNQUFBRSxRQUFBLEVBQU9BO0lBQVE7TUFBQU0sUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQU8sQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNwQixDQUFDO0FBRVYsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQvRGVmYXVsdExheW91dC50c3g/MjIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IHsgQmFyczNJY29uLCBYTWFya0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXG5pbXBvcnQgQ2xpZW50T25seSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0NsaWVudE9ubHknXG5cbmludGVyZmFjZSBEZWZhdWx0TGF5b3V0UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmF1bHRMYXlvdXQoeyBjaGlsZHJlbiB9OiBEZWZhdWx0TGF5b3V0UHJvcHMpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuICBjb25zdCBbbW9iaWxlTWVudU9wZW4sIHNldE1vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgdG9wLTAgei01MFwiPlxuICAgICAgICA8bmF2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNiBsZzpweC04XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiR2xvYmFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBsZzpmbGV4LTFcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiLW0tMS41IHAtMS41XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIFRheGZ5XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8Q2xpZW50T25seT5cbiAgICAgICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uIC8+XG4gICAgICAgICAgICA8L0NsaWVudE9ubHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIkxpbmsiLCJ1c2VUcmFuc2xhdGlvbiIsIkNsaWVudE9ubHkiLCJqc3hERVYiLCJfanN4REVWIiwiRGVmYXVsdExheW91dCIsImNoaWxkcmVuIiwidCIsIm1vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJjbGFzc05hbWUiLCJocmVmIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/default/DefaultLayout.tsx\n");

/***/ }),

/***/ "./src/lib/firebase.ts":
/*!*****************************!*\
  !*** ./src/lib/firebase.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   functions: () => (/* binding */ functions),\n/* harmony export */   platformDevIP: () => (/* binding */ platformDevIP),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/functions */ \"firebase/functions\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAB5IvKmGEHdxcneVI_RbPHydhhIbmqvXU\",\n  authDomain: \"taxifyio.firebaseapp.com\",\n  projectId: \"taxifyio\",\n  storageBucket: \"taxifyio.firebasestorage.app\",\n  messagingSenderId: \"923664427725\",\n  appId: \"1:923664427725:web:059a47037eb410fcdd1784\",\n  measurementId: \"G-GEJB7NF9LX\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.getFunctions)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(app);\nconst platformDevIP = '127.0.0.1'; // For web development\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZpcmViYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ3RCO0FBQ1U7QUFDQTtBQUNKO0FBRTdDLE1BQU1PLGNBQWMsR0FBRztFQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztFQUNqREMsVUFBVSxFQUFFLDBCQUEwQjtFQUN0Q0MsU0FBUyxFQUFFLFVBQVU7RUFDckJDLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0NDLGlCQUFpQixFQUFFLGNBQWM7RUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7RUFDbERDLGFBQWEsRUFBRTtBQUNqQixDQUFDO0FBQ0Q7QUFDTyxNQUFNQyxHQUFHLEdBQUdiLHFEQUFPLENBQUMsQ0FBQyxDQUFDYyxNQUFNLEdBQUdmLG9EQUFNLENBQUMsQ0FBQyxHQUFHRCwyREFBYSxDQUFDTyxjQUFjLENBQUM7QUFDdkUsTUFBTVUsSUFBSSxHQUFHZCxzREFBTyxDQUFDWSxHQUFHLENBQUM7QUFDekIsTUFBTUcsRUFBRSxHQUFHZCxnRUFBWSxDQUFDVyxHQUFHLENBQUM7QUFDNUIsTUFBTUksU0FBUyxHQUFHZCxnRUFBWSxDQUFDVSxHQUFHLENBQUM7QUFDbkMsTUFBTUssT0FBTyxHQUFHZCw0REFBVSxDQUFDUyxHQUFHLENBQUM7QUFDL0IsTUFBTU0sYUFBYSxHQUFHLFdBQVcsRUFBQyxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9saWIvZmlyZWJhc2UudHM/MTU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcbmltcG9ydCB7IGdldEZ1bmN0aW9ucyB9IGZyb20gJ2ZpcmViYXNlL2Z1bmN0aW9ucydcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUFCNUl2S21HRUhkeGNuZVZJX1JiUEh5ZGhoSWJtcXZYVVwiLFxuICBhdXRoRG9tYWluOiBcInRheGlmeWlvLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidGF4aWZ5aW9cIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0YXhpZnlpby5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyMzY2NDQyNzcyNVwiLFxuICBhcHBJZDogXCIxOjkyMzY2NDQyNzcyNTp3ZWI6MDU5YTQ3MDM3ZWI0MTBmY2RkMTc4NFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctR0VKQjdORjlMWFwiXG59XG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5leHBvcnQgY29uc3QgYXBwID0gZ2V0QXBwcygpLmxlbmd0aCA/IGdldEFwcCgpIDogaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKVxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IGdldEZ1bmN0aW9ucyhhcHApXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKVxuZXhwb3J0IGNvbnN0IHBsYXRmb3JtRGV2SVAgPSAnMTI3LjAuMC4xJyAvLyBGb3Igd2ViIGRldmVsb3BtZW50XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0RnVuY3Rpb25zIiwiZ2V0U3RvcmFnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImxlbmd0aCIsImF1dGgiLCJkYiIsImZ1bmN0aW9ucyIsInN0b3JhZ2UiLCJwbGF0Zm9ybURldklQIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/firebase.ts\n");

/***/ }),

/***/ "./src/lib/getStatic.ts":
/*!******************************!*\
  !*** ./src/lib/getStatic.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getI18nPaths: () => (/* binding */ getI18nPaths),\n/* harmony export */   getI18nProps: () => (/* binding */ getI18nProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   makeStaticProps: () => (/* binding */ makeStaticProps)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ \"next-i18next/serverSideTranslations\");\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/config/site */ \"./src/config/site.ts\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context2, _context3; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(t), !0)).call(_context2, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = ownKeys(Object(t))).call(_context3, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(t, r)); }); } return e; }\n\n\n\n\nconst getI18nPaths = () => {\n  var _context;\n  return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context = (_next_i18next_config__WEBPACK_IMPORTED_MODULE_11___default().i18n).locales).call(_context, lng => ({\n    params: {\n      locale: lng\n    }\n  }));\n};\nconst getStaticPaths = () => ({\n  fallback: false,\n  paths: getI18nPaths()\n});\nasync function getI18nProps(ctx, ns = ['common'], seo) {\n  const locale = ctx?.params?.locale;\n  const {\n    pathname,\n    img\n  } = seo;\n  const title = seo.title[locale];\n  const description = seo.description[locale];\n  const siteName = locale === 'ja' ? _config_site__WEBPACK_IMPORTED_MODULE_12__[\"default\"].sitenameJA : _config_site__WEBPACK_IMPORTED_MODULE_12__[\"default\"].sitenameEN;\n  const ogImage = img ? `https://${_config_site__WEBPACK_IMPORTED_MODULE_12__[\"default\"].domain}${img}` : `https://${_config_site__WEBPACK_IMPORTED_MODULE_12__[\"default\"].domain}/ogp.png`;\n  const seoData = [{\n    property: 'og:title',\n    content: `${title} | ${siteName}`\n  }, {\n    name: 'twitter:title',\n    content: `${title} | ${siteName}`\n  }, {\n    name: 'twitter:text:title',\n    content: `${title} | ${siteName}`\n  }, {\n    name: 'description',\n    content: `${description}`\n  }, {\n    property: 'og:description',\n    content: `${description}`\n  }, {\n    name: 'twitter:description',\n    content: `${description}`\n  }, {\n    property: 'og:url',\n    content: `https://${_config_site__WEBPACK_IMPORTED_MODULE_12__[\"default\"].domain}/${locale}${pathname}`\n  }, {\n    property: 'og:image',\n    content: ogImage\n  }, {\n    property: 'og:image:secure',\n    content: ogImage\n  }, {\n    name: 'twitter:image',\n    content: ogImage\n  }];\n  const props = _objectSpread({\n    title: `${title} | ${siteName}`,\n    seoData\n  }, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10__.serverSideTranslations)(locale, ns));\n  return props;\n}\nfunction makeStaticProps(ns = [], seo) {\n  return async function getStaticProps(ctx) {\n    return {\n      props: await getI18nProps(ctx, ns, seo)\n    };\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLEdBQTBCLEVBQUU7SUFDL0QsT0FBTztNQUNMZ0IsS0FBSyxFQUFFLE1BQU1qQixZQUFZLENBQUNDLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxHQUFHO0lBQ3hDLENBQUM7RUFDSCxDQUFDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhcHAvLi9zcmMvbGliL2dldFN0YXRpYy50cz9lOTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMgfSBmcm9tICduZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9ucydcbmltcG9ydCBpMThuZXh0Q29uZmlnIGZyb20gJy4uLy4uL25leHQtaTE4bmV4dC5jb25maWcnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0J1xuaW1wb3J0IHNpdGVDb25maWcgZnJvbSAnQC9jb25maWcvc2l0ZSdcblxudHlwZSBTZW8gPSB7XG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgdGl0bGU6IHtcbiAgICBqYTogc3RyaW5nXG4gICAgZW46IHN0cmluZ1xuICB9XG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgamE6IHN0cmluZ1xuICAgIGVuOiBzdHJpbmdcbiAgfVxuICBpbWc6IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IHR5cGUgU2VvRGF0YSA9IHtcbiAgcHJvcGVydHk/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICBjb250ZW50Pzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXRJMThuUGF0aHMgPSAoKSA9PlxuICBpMThuZXh0Q29uZmlnLmkxOG4ubG9jYWxlcy5tYXAoKGxuZykgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIGxvY2FsZTogbG5nLFxuICAgIH0sXG4gIH0pKVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSAoKSA9PiAoe1xuICBmYWxsYmFjazogZmFsc2UsXG4gIHBhdGhzOiBnZXRJMThuUGF0aHMoKSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJMThuUHJvcHMoXG4gIGN0eDogR2V0U3RhdGljUHJvcHNDb250ZXh0LFxuICBucyA9IFsnY29tbW9uJ10sXG4gIHNlbzogU2VvXG4pIHtcbiAgY29uc3QgbG9jYWxlID0gY3R4Py5wYXJhbXM/LmxvY2FsZSBhcyAnamEnIHwgJ2VuJ1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGltZyB9ID0gc2VvXG4gIGNvbnN0IHRpdGxlID0gc2VvLnRpdGxlW2xvY2FsZV1cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBzZW8uZGVzY3JpcHRpb25bbG9jYWxlXVxuICBjb25zdCBzaXRlTmFtZSA9XG4gICAgbG9jYWxlID09PSAnamEnID8gc2l0ZUNvbmZpZy5zaXRlbmFtZUpBIDogc2l0ZUNvbmZpZy5zaXRlbmFtZUVOXG5cbiAgY29uc3Qgb2dJbWFnZSA9IGltZ1xuICAgID8gYGh0dHBzOi8vJHtzaXRlQ29uZmlnLmRvbWFpbn0ke2ltZ31gXG4gICAgOiBgaHR0cHM6Ly8ke3NpdGVDb25maWcuZG9tYWlufS9vZ3AucG5nYFxuXG4gIGNvbnN0IHNlb0RhdGE6IFNlb0RhdGFbXSA9IFtcbiAgICB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWAgfSxcbiAgICB7IG5hbWU6ICd0d2l0dGVyOnRpdGxlJywgY29udGVudDogYCR7dGl0bGV9IHwgJHtzaXRlTmFtZX1gIH0sXG4gICAgeyBuYW1lOiAndHdpdHRlcjp0ZXh0OnRpdGxlJywgY29udGVudDogYCR7dGl0bGV9IHwgJHtzaXRlTmFtZX1gIH0sXG4gICAgeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiBgJHtkZXNjcmlwdGlvbn1gIH0sXG4gICAgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogYCR7ZGVzY3JpcHRpb259YCB9LFxuICAgIHsgbmFtZTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBgJHtkZXNjcmlwdGlvbn1gIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6ICdvZzp1cmwnLFxuICAgICAgY29udGVudDogYGh0dHBzOi8vJHtzaXRlQ29uZmlnLmRvbWFpbn0vJHtsb2NhbGV9JHtwYXRobmFtZX1gLFxuICAgIH0sXG4gICAgeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogb2dJbWFnZSB9LFxuICAgIHsgcHJvcGVydHk6ICdvZzppbWFnZTpzZWN1cmUnLCBjb250ZW50OiBvZ0ltYWdlIH0sXG4gICAgeyBuYW1lOiAndHdpdHRlcjppbWFnZScsIGNvbnRlbnQ6IG9nSW1hZ2UgfSxcbiAgXVxuXG4gIGNvbnN0IHByb3BzID0ge1xuICAgIHRpdGxlOiBgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWAsXG4gICAgc2VvRGF0YSxcbiAgICAuLi4oYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIG5zKSksXG4gIH1cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RhdGljUHJvcHMobnM6IHN0cmluZ1tdID0gW10sIHNlbzogU2VvKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHg6IEdldFN0YXRpY1Byb3BzQ29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogYXdhaXQgZ2V0STE4blByb3BzKGN0eCwgbnMsIHNlbyksXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsic2VydmVyU2lkZVRyYW5zbGF0aW9ucyIsImkxOG5leHRDb25maWciLCJzaXRlQ29uZmlnIiwiZ2V0STE4blBhdGhzIiwiX2NvbnRleHQiLCJfbWFwSW5zdGFuY2VQcm9wZXJ0eSIsImkxOG4iLCJsb2NhbGVzIiwiY2FsbCIsImxuZyIsInBhcmFtcyIsImxvY2FsZSIsImdldFN0YXRpY1BhdGhzIiwiZmFsbGJhY2siLCJwYXRocyIsImdldEkxOG5Qcm9wcyIsImN0eCIsIm5zIiwic2VvIiwicGF0aG5hbWUiLCJpbWciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2l0ZU5hbWUiLCJzaXRlbmFtZUpBIiwic2l0ZW5hbWVFTiIsIm9nSW1hZ2UiLCJkb21haW4iLCJzZW9EYXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwibmFtZSIsInByb3BzIiwiX29iamVjdFNwcmVhZCIsIm1ha2VTdGF0aWNQcm9wcyIsImdldFN0YXRpY1Byb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/getStatic.ts\n");

/***/ }),

/***/ "./src/pages/[locale]/[[...path]].tsx":
/*!********************************************!*\
  !*** ./src/pages/[locale]/[[...path]].tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ \"@babel/runtime-corejs3/core-js-stable/instance/includes\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/layouts/default/DefaultLayout */ \"./src/layouts/default/DefaultLayout.tsx\");\n/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/lib/getStatic */ \"./src/lib/getStatic.ts\");\n/* harmony import */ var _components_pages_home_HeroRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/pages/home/HeroRow */ \"./src/components/pages/home/HeroRow.tsx\");\n/* harmony import */ var _components_pages_common_DiscordRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/pages/common/DiscordRow */ \"./src/components/pages/common/DiscordRow.tsx\");\n/* harmony import */ var _components_pages_home_FeaturesRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/pages/home/FeaturesRow */ \"./src/components/pages/home/FeaturesRow.tsx\");\n/* harmony import */ var _components_pages_home_ServiceOverview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/pages/home/ServiceOverview */ \"./src/components/pages/home/ServiceOverview.tsx\");\n/* harmony import */ var _components_pages_home_StatsRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/pages/home/StatsRow */ \"./src/components/pages/home/StatsRow.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__, _components_pages_home_HeroRow__WEBPACK_IMPORTED_MODULE_14__, _components_pages_home_FeaturesRow__WEBPACK_IMPORTED_MODULE_16__, _components_pages_home_StatsRow__WEBPACK_IMPORTED_MODULE_18__]);\n([_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__, _components_pages_home_HeroRow__WEBPACK_IMPORTED_MODULE_14__, _components_pages_home_FeaturesRow__WEBPACK_IMPORTED_MODULE_16__, _components_pages_home_StatsRow__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/pages/[locale]/[[...path]].tsx\";\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context2, _context3; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = ownKeys(Object(t), !0)).call(_context2, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = ownKeys(Object(t))).call(_context3, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(t, r)); }); } return e; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst LocalePage = () => {\n  var _context;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n  const {\n    locale,\n    path\n  } = router.query;\n\n  // Handle 404\n  if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9___default()(_context = ['en', 'ja']).call(_context, locale)) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(\"div\", {\n      children: \"404 - Page not found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  // If no path, render home page\n  if (!path || path.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_pages_home_HeroRow__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_pages_home_StatsRow__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_pages_home_FeaturesRow__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_pages_home_ServiceOverview__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_pages_common_DiscordRow__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  // Handle other paths here\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(\"div\", {\n      children: [\"Current locale: \", locale]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(\"div\", {\n      children: [\"Current path: \", _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(path).call(path, '/')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalePage);\nconst getStaticProps = async ctx => {\n  const locale = ctx?.params?.locale;\n  const seoData = {\n    pathname: '/',\n    title: {\n      ja: 'トップページ',\n      en: 'Top page'\n    },\n    description: {\n      ja: 'Solanaの税金計算を簡単に',\n      en: 'Easy tax calculations for Solana'\n    },\n    img: null\n  };\n  return {\n    props: _objectSpread({}, await (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_13__.getI18nProps)(ctx, ['common'], seoData))\n  };\n};\nconst getStaticPaths = async () => {\n  return {\n    paths: [{\n      params: {\n        locale: 'en',\n        path: []\n      }\n    }, {\n      params: {\n        locale: 'ja',\n        path: []\n      }\n    }],\n    fallback: false\n  };\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNERSxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBRUQsT0FBTztJQUNMQyxLQUFLLEVBQUFDLGFBQUEsS0FDQyxNQUFNbEMsNkRBQVksQ0FBQ3dCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFRSxPQUFPLENBQUM7RUFFcEQsQ0FBQztBQUNILENBQUM7QUFFTSxNQUFNUyxjQUFjLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0VBQ3hDLE9BQU87SUFDTEMsS0FBSyxFQUFFLENBQ0w7TUFBRVgsTUFBTSxFQUFFO1FBQUVkLE1BQU0sRUFBRSxJQUFJO1FBQUVDLElBQUksRUFBRTtNQUFHO0lBQUUsQ0FBQyxFQUN0QztNQUFFYSxNQUFNLEVBQUU7UUFBRWQsTUFBTSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFO01BQUc7SUFBRSxDQUFDLENBQ3ZDO0lBQ0R5QixRQUFRLEVBQUU7RUFDWixDQUFDO0FBQ0gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL3BhZ2VzL1tsb2NhbGVdL1tbLi4ucGF0aF1dLnRzeD82NmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9kZWZhdWx0L0RlZmF1bHRMYXlvdXQnXG5pbXBvcnQgeyBnZXRJMThuUHJvcHMgfSBmcm9tICdAL2xpYi9nZXRTdGF0aWMnXG5pbXBvcnQgSGVyb1JvdyBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9IZXJvUm93J1xuaW1wb3J0IERpc2NvcmRSb3cgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL2NvbW1vbi9EaXNjb3JkUm93J1xuaW1wb3J0IEZlYXR1cmVzUm93IGZyb20gJ0AvY29tcG9uZW50cy9wYWdlcy9ob21lL0ZlYXR1cmVzUm93J1xuaW1wb3J0IFNlcnZpY2VPdmVydmlldyBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9TZXJ2aWNlT3ZlcnZpZXcnXG5pbXBvcnQgU3RhdHNSb3cgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvU3RhdHNSb3cnXG5cbmNvbnN0IExvY2FsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgbG9jYWxlLCBwYXRoIH0gPSByb3V0ZXIucXVlcnlcblxuICAvLyBIYW5kbGUgNDA0XG4gIGlmICghWydlbicsICdqYSddLmluY2x1ZGVzKGxvY2FsZSBhcyBzdHJpbmcpKSB7XG4gICAgcmV0dXJuIDxkaXY+NDA0IC0gUGFnZSBub3QgZm91bmQ8L2Rpdj5cbiAgfVxuXG4gIC8vIElmIG5vIHBhdGgsIHJlbmRlciBob21lIHBhZ2VcbiAgaWYgKCFwYXRoIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgICA8SGVyb1JvdyAvPlxuICAgICAgICA8U3RhdHNSb3cgLz5cbiAgICAgICAgPEZlYXR1cmVzUm93IC8+XG4gICAgICAgIDxTZXJ2aWNlT3ZlcnZpZXcgLz5cbiAgICAgICAgPERpc2NvcmRSb3cgLz5cbiAgICAgIDwvRGVmYXVsdExheW91dD5cbiAgICApXG4gIH1cblxuICAvLyBIYW5kbGUgb3RoZXIgcGF0aHMgaGVyZVxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPGRpdj5DdXJyZW50IGxvY2FsZToge2xvY2FsZX08L2Rpdj5cbiAgICAgIDxkaXY+Q3VycmVudCBwYXRoOiB7cGF0aC5jb25jYXQoJy8nKX08L2Rpdj5cbiAgICA8L0RlZmF1bHRMYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlUGFnZVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBsb2NhbGUgPSBjdHg/LnBhcmFtcz8ubG9jYWxlIGFzICdqYScgfCAnZW4nXG5cbiAgY29uc3Qgc2VvRGF0YSA9IHtcbiAgICBwYXRobmFtZTogJy8nLFxuICAgIHRpdGxlOiB7XG4gICAgICBqYTogJ+ODiOODg+ODl+ODmuODvOOCuCcsXG4gICAgICBlbjogJ1RvcCBwYWdlJyxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBqYTogJ1NvbGFuYeOBrueojumHkeioiOeul+OCkuewoeWNmOOBqycsXG4gICAgICBlbjogJ0Vhc3kgdGF4IGNhbGN1bGF0aW9ucyBmb3IgU29sYW5hJyxcbiAgICB9LFxuICAgIGltZzogbnVsbCxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLihhd2FpdCBnZXRJMThuUHJvcHMoY3R4LCBbJ2NvbW1vbiddLCBzZW9EYXRhKSksXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFtcbiAgICAgIHsgcGFyYW1zOiB7IGxvY2FsZTogJ2VuJywgcGF0aDogW10gfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgbG9jYWxlOiAnamEnLCBwYXRoOiBbXSB9IH0sXG4gICAgXSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJEZWZhdWx0TGF5b3V0IiwiZ2V0STE4blByb3BzIiwiSGVyb1JvdyIsIkRpc2NvcmRSb3ciLCJGZWF0dXJlc1JvdyIsIlNlcnZpY2VPdmVydmlldyIsIlN0YXRzUm93IiwianN4REVWIiwiX2pzeERFViIsIkxvY2FsZVBhZ2UiLCJfY29udGV4dCIsInJvdXRlciIsImxvY2FsZSIsInBhdGgiLCJxdWVyeSIsIl9pbmNsdWRlc0luc3RhbmNlUHJvcGVydHkiLCJjYWxsIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJsZW5ndGgiLCJfY29uY2F0SW5zdGFuY2VQcm9wZXJ0eSIsImdldFN0YXRpY1Byb3BzIiwiY3R4IiwicGFyYW1zIiwic2VvRGF0YSIsInBhdGhuYW1lIiwidGl0bGUiLCJqYSIsImVuIiwiZGVzY3JpcHRpb24iLCJpbWciLCJwcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[locale]/[[...path]].tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/firebase */ \"./src/lib/firebase.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"../node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.34_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_qdir4qkdaijy6b7chafrwxxxfq/node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/styles/globals.css */ \"./src/assets/styles/globals.css\");\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @solana/web3.js */ \"../node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.cjs.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context, _context2; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(t), !0)).call(_context, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(t))).call(_context2, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(t, r)); }); } return e; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  console.log('App component rendering', {\n    pageProps\n  });\n  if (!pageProps) {\n    console.error('No pageProps provided');\n    return null;\n  }\n\n  // Clear any existing redirect loops on mount\n  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(() => {\n    if (false) {}\n  }, []);\n\n  // Set up Solana wallet connection\n  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(() => {\n    console.log('Setting up endpoint');\n    return (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_18__.clusterApiUrl)('mainnet-beta');\n  }, []);\n  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(() => {\n    console.log('Setting up wallets');\n    return [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__.PhantomWalletAdapter()];\n  }, []);\n\n  // Use the layout defined at the page level, or fall back to a default\n  const getLayout = Component.getLayout ?? (page => {\n    console.log('Using default layout');\n    return page;\n  });\n  try {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"title\", {\n          children: pageProps.title || 'Taxfy'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), pageProps.seoData?.map((seo, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_19__.createElement)(\"meta\", _objectSpread(_objectSpread({}, seo), {}, {\n          key: `metaSeo${index}`,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }\n        })))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_11__.RecoilRoot, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__.ConnectionProvider, {\n          endpoint: endpoint,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__.WalletModalProvider, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n                  className: \"min-h-screen scroll-smooth font-sans antialiased\",\n                  children: [console.log('About to render layout'), getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 32\n                  }, this))]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  } catch (error) {\n    console.error('Error in App render:', error);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n      children: \"Something went wrong. Please try again.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 12\n    }, this);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.appWithTranslation)(App));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQXNCLGFBQUEsS0FBS3JCLFNBQVM7b0JBQUFhLFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxPQUFHLENBQUMsQ0FBQztnQkFBQTtrQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLE9BQ3JDO2NBQUM7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLE9BQ087WUFBQztjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsT0FDRztVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUNSO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ0M7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDWCxDQUFDO0lBQUEsZUFDYixDQUFDO0VBRVAsQ0FBQyxDQUFDLE9BQU9iLEtBQUssRUFBRTtJQUNkRixPQUFPLENBQUNFLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDLG9CQUFPViw4REFBQTtNQUFBa0IsUUFBQSxFQUFLO0lBQXVDO01BQUFFLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFLLENBQUM7RUFDM0Q7QUFDRjtBQUVBLGlFQUFlbkMsaUVBQWtCLENBQUNpQixHQUFHLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9saWIvZmlyZWJhc2UnXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdHlwZSB7IFNlb0RhdGEgfSBmcm9tICdAL2xpYi9nZXRTdGF0aWMnXG5pbXBvcnQgJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcydcbmltcG9ydCAnQC9hc3NldHMvc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblByb3ZpZGVyLFxuICBXYWxsZXRQcm92aWRlcixcbn0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJ1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGhhbnRvbVdhbGxldEFkYXB0ZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnXG5cbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0ge30sIElQID0gUD4gPSBOZXh0UGFnZTxQLCBJUD4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXRcbn1cblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnNvbGUubG9nKCdBcHAgY29tcG9uZW50IHJlbmRlcmluZycsIHsgcGFnZVByb3BzIH0pXG5cbiAgaWYgKCFwYWdlUHJvcHMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwYWdlUHJvcHMgcHJvdmlkZWQnKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgcmVkaXJlY3QgbG9vcHMgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKClcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyBTZXQgdXAgU29sYW5hIHdhbGxldCBjb25uZWN0aW9uXG4gIGNvbnN0IGVuZHBvaW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgZW5kcG9pbnQnKVxuICAgIHJldHVybiBjbHVzdGVyQXBpVXJsKCdtYWlubmV0LWJldGEnKVxuICB9LCBbXSlcblxuICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgd2FsbGV0cycpXG4gICAgcmV0dXJuIFtuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoKV1cbiAgfSwgW10pXG5cbiAgLy8gVXNlIHRoZSBsYXlvdXQgZGVmaW5lZCBhdCB0aGUgcGFnZSBsZXZlbCwgb3IgZmFsbCBiYWNrIHRvIGEgZGVmYXVsdFxuICBjb25zdCBnZXRMYXlvdXQgPVxuICAgIENvbXBvbmVudC5nZXRMYXlvdXQgPz9cbiAgICAoKHBhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkZWZhdWx0IGxheW91dCcpXG4gICAgICByZXR1cm4gcGFnZVxuICAgIH0pXG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntwYWdlUHJvcHMudGl0bGUgfHwgJ1RheGZ5J308L3RpdGxlPlxuICAgICAgICAgIHtwYWdlUHJvcHMuc2VvRGF0YT8ubWFwKChzZW86IFNlb0RhdGEsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxtZXRhIHsuLi5zZW99IGtleT17YG1ldGFTZW8ke2luZGV4fWB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFJlY29pbFJvb3Q+XG4gICAgICAgICAgPENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxuICAgICAgICAgICAgPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PlxuICAgICAgICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gc2Nyb2xsLXNtb290aCBmb250LXNhbnMgYW50aWFsaWFzZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdBYm91dCB0byByZW5kZXIgbGF5b3V0Jyl9XG4gICAgICAgICAgICAgICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgICAgICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XG4gICAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICAgIDwvPlxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBBcHAgcmVuZGVyOicsIGVycm9yKVxuICAgIHJldHVybiA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLjwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihBcHApXG4iXSwibmFtZXMiOlsiYXBwV2l0aFRyYW5zbGF0aW9uIiwiUmVjb2lsUm9vdCIsIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiY2x1c3RlckFwaVVybCIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJQaGFudG9tV2FsbGV0QWRhcHRlciIsImpzeERFViIsIl9qc3hERVYiLCJjcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNlc3Npb25TdG9yYWdlIiwiY2xlYXIiLCJsb2NhbFN0b3JhZ2UiLCJlbmRwb2ludCIsIndhbGxldHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInNlb0RhdGEiLCJtYXAiLCJzZW8iLCJpbmRleCIsIl9vYmplY3RTcHJlYWQiLCJrZXkiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImF1dG9Db25uZWN0IiwiYXR0cmlidXRlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/document */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/site */ \"./src/config/site.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/pages/_document.tsx\";\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context, _context2; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(t), !0)).call(_context, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(t))).call(_context2, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(t, r)); }); } return e; }\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_9___default()) {\n  static async getInitialProps(ctx) {\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_9___default().getInitialProps(ctx);\n    return _objectSpread({}, initialProps);\n  }\n  render() {\n    const {\n      locale\n    } = this.props.__NEXT_DATA__.query;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_9__.Html, {\n      lang: locale,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_9__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n          rel: \"preconnect\",\n          href: \"https://fonts.googleapis.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n          rel: \"preconnect\",\n          href: \"https://fonts.gstatic.com\",\n          crossOrigin: \"anonymous\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          name: \"format-detection\",\n          content: \"telephone=no\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n          rel: \"icon\",\n          type: \"image/svg+xml\",\n          href: \"/favicon.svg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          name: \"theme-color\",\n          content: \"#ffffff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          property: \"og:type\",\n          content: \"website\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          property: \"og:site_name\",\n          content: locale === 'ja' ? _config_site__WEBPACK_IMPORTED_MODULE_10__[\"default\"].sitenameJA : _config_site__WEBPACK_IMPORTED_MODULE_10__[\"default\"].sitenameEN\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          property: \"og:locale\",\n          content: locale === 'ja' ? 'ja_JP' : 'en_US'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          httpEquiv: \"content-language\",\n          content: locale === 'ja' ? 'ja-jp' : 'en-us'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          name: \"twitter:card\",\n          content: \"summary_large_image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          name: \"twitter:creator\",\n          content: _config_site__WEBPACK_IMPORTED_MODULE_10__[\"default\"].twitterAccount\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_9__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_9__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFZCxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU8sR0FBRztRQUFRO1VBQUFRLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUM5QyxDQUFDLGVBQ0ZsQiw4REFBQTtVQUFNb0IsSUFBSSxFQUFDLGNBQWM7VUFBQ0MsT0FBTyxFQUFDO1FBQXFCO1VBQUFOLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFFLENBQUMsZUFDMURsQiw4REFBQTtVQUFNb0IsSUFBSSxFQUFDLGlCQUFpQjtVQUFDQyxPQUFPLEVBQUV2QixvRUFBeUI2QjtRQUFDO1VBQUFaLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFFLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDL0QsQ0FBQyxlQUNQbEIsOERBQUE7UUFBQVksUUFBQSxnQkFDRVosOERBQUEsQ0FBQ0osK0NBQUk7VUFBQW1CLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFFLENBQUMsZUFDUmxCLDhEQUFBLENBQUNILHFEQUFVO1VBQUFrQixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FBRSxDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQ1YsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNILENBQUM7RUFFWDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL3BhZ2VzL19kb2N1bWVudC50c3g/MTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHtcbiAgSHRtbCxcbiAgSGVhZCxcbiAgTWFpbixcbiAgTmV4dFNjcmlwdCxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbn0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCBzaXRlQ29uZmlnIGZyb20gJ0AvY29uZmlnL3NpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHQsXG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHRoaXMucHJvcHMuX19ORVhUX0RBVEFfXy5xdWVyeVxuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPXtsb2NhbGUgYXMgc3RyaW5nfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAzMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cIi9mYXZpY29uLnN2Z1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIlxuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgIGxvY2FsZSA9PT0gJ2phJyA/IHNpdGVDb25maWcuc2l0ZW5hbWVKQSA6IHNpdGVDb25maWcuc2l0ZW5hbWVFTlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6bG9jYWxlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2xvY2FsZSA9PT0gJ2phJyA/ICdqYV9KUCcgOiAnZW5fVVMnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIGh0dHBFcXVpdj1cImNvbnRlbnQtbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgY29udGVudD17bG9jYWxlID09PSAnamEnID8gJ2phLWpwJyA6ICdlbi11cyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PXtzaXRlQ29uZmlnLnR3aXR0ZXJBY2NvdW50fSAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsInNpdGVDb25maWciLCJqc3hERVYiLCJfanN4REVWIiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImluaXRpYWxQcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJyZW5kZXIiLCJsb2NhbGUiLCJwcm9wcyIsIl9fTkVYVF9EQVRBX18iLCJxdWVyeSIsImxhbmciLCJjaGlsZHJlbiIsInJlbCIsImhyZWYiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJjb250ZW50IiwidHlwZSIsInByb3BlcnR5Iiwic2l0ZW5hbWVKQSIsInNpdGVuYW1lRU4iLCJodHRwRXF1aXYiLCJ0d2l0dGVyQWNjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5Blocale%5D%2F%5B%5B...path%5D%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2F%5Blocale%5D%2F%5B%5B...path%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5Blocale%5D%2F%5B%5B...path%5D%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2F%5Blocale%5D%2F%5B%5B...path%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./src/pages/_document.tsx\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./src/pages/_app.tsx\");\n/* harmony import */ var _src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/pages/[locale]/[[...path]].tsx */ \"./src/pages/[locale]/[[...path]].tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__]);\n([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/[locale]/[[...path]]\",\n        pathname: \"/[locale]/[[...path]]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _src_pages_locale_path_tsx__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMC4wX0BiYWJlbCtjb3JlQDcuMjYuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjBfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjBfX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJTVCbG9jYWxlJTVEJTJGJTVCJTVCLi4ucGF0aCU1RCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGJTVCbG9jYWxlJTVEJTJGJTVCJTVCLi4ucGF0aCU1RCU1RC50c3gmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUNpRTtBQUNqRTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsdURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsdURBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsdURBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsdURBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLHVEQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLHVEQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsdURBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsdURBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsdURBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsdURBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsdURBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhcHAvP2RkYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmMvcGFnZXMvW2xvY2FsZV0vW1suLi5wYXRoXV0udHN4XCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvW2xvY2FsZV0vW1suLi5wYXRoXV1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1tsb2NhbGVdL1tbLi4ucGF0aF1dXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQXBwLFxuICAgICAgICBEb2N1bWVudFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5Blocale%5D%2F%5B%5B...path%5D%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2F%5Blocale%5D%2F%5B%5B...path%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./src/assets/styles/globals.css":
/*!***************************************!*\
  !*** ./src/assets/styles/globals.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/array/from":
/*!*******************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/array/from" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/array/from");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/array/is-array":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/array/is-array" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/date/now":
/*!*****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/date/now" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/date/now");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/bind":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/bind" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/bind");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/ends-with":
/*!***************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/ends-with" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/ends-with");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/entries":
/*!*************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/entries" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/entries");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/every":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/every" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/every");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/fill":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/fill" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/fill");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/find":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/find" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/find");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/find-index":
/*!****************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/find-index" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/find-index");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/flags":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/flags" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/flags");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/flat":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/flat" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/flat");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/includes":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/includes" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/includes");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/index-of":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/index-of" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/index-of");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/keys":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/keys" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/keys");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/map");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/reduce":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/reduce" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/repeat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/repeat" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/repeat");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/slice":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/slice" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/some":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/some" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/some");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/sort":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/sort" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/sort");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/splice":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/splice" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/splice");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/starts-with":
/*!*****************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/starts-with" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/starts-with");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/values":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/values" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/values");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/json/stringify":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/json/stringify" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/json/stringify");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/map":
/*!************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/map" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/map");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/math/imul":
/*!******************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/math/imul" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/math/imul");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/number/max-safe-integer":
/*!********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/number/max-safe-integer" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/number/max-safe-integer");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/assign":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/assign" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/assign");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/create":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/create" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/create");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/entries":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/entries" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/entries");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/freeze":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/freeze" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/freeze");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-prototype-of":
/*!********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-prototype-of" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/keys");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/parse-float":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/parse-float" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/parse-float");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/parse-int":
/*!******************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/parse-int" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/parse-int");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/promise");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set":
/*!************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/set" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/set");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-interval":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/set-interval" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/set-interval");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-timeout":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/set-timeout" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/set-timeout");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/symbol":
/*!***************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/symbol" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/symbol");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/symbol/to-string-tag":
/*!*****************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/symbol/to-string-tag" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/symbol/to-string-tag");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/url":
/*!************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/url" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/url");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/url-search-params":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/url-search-params" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/url-search-params");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js/global-this":
/*!*************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js/global-this" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js/global-this");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/objectWithoutProperties":
/*!*************************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/objectWithoutProperties" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/helpers/objectWithoutProperties");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next-i18next/serverSideTranslations":
/*!******************************************************!*\
  !*** external "next-i18next/serverSideTranslations" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "@heroicons/react/24/outline":
/*!**********************************************!*\
  !*** external "@heroicons/react/24/outline" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@heroicons/react/24/outline");;

/***/ }),

/***/ "@heroicons/react/24/solid":
/*!********************************************!*\
  !*** external "@heroicons/react/24/solid" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@heroicons/react/24/solid");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/functions");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "../taxfy-cloud.config.json":
/*!**********************************!*\
  !*** ../taxfy-cloud.config.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"app":{"name":"taxfy","projectId":"taxifyio","fbProjectId":"taxfy","region":"nam5","template":"Taxfy Stack","appDomain":"taxfy.io","lbDomain":"taxfy.io","secretKeys":[],"hasLoadBalancer":false},"cloudArmor":[{"securityPolicyName":"taxfy-taxfy-armor","rules":[{"priority":"10","description":"Allow Your Home IP addresses","options":{"src-ip-ranges":"x.x.x.x","action":"allow"}},{"priority":"300","description":"Defense from NodeJS attack","options":{"action":"deny-403","expression":"evaluatePreconfiguredExpr(\'nodejs-v33-stable\')"}},{"priority":"2147483647","description":"Deny All IP addresses","options":{"action":"deny-403"}}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0","vendor-chunks/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10","vendor-chunks/tr46@0.0.3","vendor-chunks/iconv-lite@0.6.3","vendor-chunks/@noble+curves@1.8.0","vendor-chunks/ws@8.18.0_bufferutil@4.0.9_utf-8-validate@5.0.10","vendor-chunks/bn.js@5.2.1","vendor-chunks/@solana+buffer-layout@4.0.1","vendor-chunks/@noble+hashes@1.7.0","vendor-chunks/node-fetch@2.7.0_encoding@0.1.13","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/superstruct@2.0.2","vendor-chunks/rpc-websockets@9.0.4","vendor-chunks/text-encoding-utf-8@1.0.2","vendor-chunks/borsh@0.7.0","vendor-chunks/uuid@8.3.2","vendor-chunks/eventemitter3@5.0.1","vendor-chunks/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10","vendor-chunks/node-gyp-build@4.8.4","vendor-chunks/bindings@1.5.0","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/base-x@3.0.10","vendor-chunks/bigint-buffer@1.1.5","vendor-chunks/encoding@0.1.13","vendor-chunks/safer-buffer@2.1.2","vendor-chunks/utf-8-validate@5.0.10","vendor-chunks/file-uri-to-path@1.0.0","vendor-chunks/safe-buffer@5.2.1","vendor-chunks/@swc+helpers@0.5.2","vendor-chunks/bufferutil@4.0.9","vendor-chunks/bs58@4.0.1","vendor-chunks/@solana+wallet-adapter-react-ui@0.9.34_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_qdir4qkdaijy6b7chafrwxxxfq"], () => (__webpack_exec__("../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5Blocale%5D%2F%5B%5B...path%5D%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2F%5Blocale%5D%2F%5B%5B...path%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();