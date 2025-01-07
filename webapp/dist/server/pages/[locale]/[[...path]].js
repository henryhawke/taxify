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

/***/ "./src/components/pages/common/DiscordRow.tsx":
/*!****************************************************!*\
  !*** ./src/components/pages/common/DiscordRow.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DiscordRow)\n/* harmony export */ });\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/site */ \"./src/config/site.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/common/DiscordRow.tsx\";\n\n\n\nfunction DiscordRow() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(['common']);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"bg-gray-50 dark:bg-gray-800\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n          href: _config_site__WEBPACK_IMPORTED_MODULE_1__[\"default\"].discordInvitationLink,\n          target: \"_blank\",\n          rel: \"noopener noreferrer\",\n          className: \"inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700\",\n          children: t('connect')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb21tb24vRGlzY29yZFJvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNQO0FBQUE7QUFFdkIsU0FBU0ksVUFBVUEsQ0FBQSxFQUFHO0VBQ25DLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdMLDREQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUV4QyxvQkFDRUcsNkRBQUE7SUFBS0csU0FBUyxFQUFDLDZCQUE2QjtJQUFBQyxRQUFBLGVBQzFDSiw2REFBQTtNQUFLRyxTQUFTLEVBQUMsOENBQThDO01BQUFDLFFBQUEsZUFDM0RKLDZEQUFBO1FBQUtHLFNBQVMsRUFBQyxhQUFhO1FBQUFDLFFBQUEsZUFDMUJKLDZEQUFBO1VBQ0VLLElBQUksRUFBRVAsMEVBQWlDO1VBQ3ZDUyxNQUFNLEVBQUMsUUFBUTtVQUNmQyxHQUFHLEVBQUMscUJBQXFCO1VBQ3pCTCxTQUFTLEVBQUMsNEhBQTRIO1VBQUFDLFFBQUEsRUFFcklGLENBQUMsQ0FBQyxTQUFTO1FBQUM7VUFBQU8sUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ1o7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDRDtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0gsQ0FBQztBQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29tbW9uL0Rpc2NvcmRSb3cudHN4PzRhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnXG5pbXBvcnQgc2l0ZUNvbmZpZyBmcm9tICdAL2NvbmZpZy9zaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3JkUm93KCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTEyIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3NpdGVDb25maWcuZGlzY29yZEludml0YXRpb25MaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC00IHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby03MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdjb25uZWN0Jyl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJzaXRlQ29uZmlnIiwianN4REVWIiwiX2pzeERFViIsIkRpc2NvcmRSb3ciLCJ0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJocmVmIiwiZGlzY29yZEludml0YXRpb25MaW5rIiwidGFyZ2V0IiwicmVsIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/common/DiscordRow.tsx\n");

/***/ }),

/***/ "./src/components/pages/home/HeroRow.tsx":
/*!***********************************************!*\
  !*** ./src/components/pages/home/HeroRow.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HeroRow)\n/* harmony export */ });\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/components/pages/home/HeroRow.tsx\";\n\n\nfunction HeroRow() {\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(['common']);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"bg-white dark:bg-gray-900\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white\",\n          children: t('welcome')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9ob21lL0hlcm9Sb3cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUFBO0FBRTlCLFNBQVNHLE9BQU9BLENBQUEsRUFBRztFQUNoQyxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHSiw0REFBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7RUFFeEMsb0JBQ0VFLDZEQUFBO0lBQUtHLFNBQVMsRUFBQywyQkFBMkI7SUFBQUMsUUFBQSxlQUN4Q0osNkRBQUE7TUFBS0csU0FBUyxFQUFDLDhDQUE4QztNQUFBQyxRQUFBLGVBQzNESiw2REFBQTtRQUFLRyxTQUFTLEVBQUMsYUFBYTtRQUFBQyxRQUFBLGVBQzFCSiw2REFBQTtVQUFJRyxTQUFTLEVBQUMseUZBQXlGO1VBQUFDLFFBQUEsRUFDcEdGLENBQUMsQ0FBQyxTQUFTO1FBQUM7VUFBQUcsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ1g7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDRjtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0gsQ0FBQztBQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9IZXJvUm93LnRzeD8wM2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvUm93KCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBweS0xMiBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHt0KCd3ZWxjb21lJyl9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwianN4REVWIiwiX2pzeERFViIsIkhlcm9Sb3ciLCJ0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pages/home/HeroRow.tsx\n");

/***/ }),

/***/ "./src/config/site.ts":
/*!****************************!*\
  !*** ./src/config/site.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taxfy_cloud_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../taxfy-cloud.config.json */ \"../taxfy-cloud.config.json\");\n\nconst siteConfig = {\n  domain: _taxfy_cloud_config_json__WEBPACK_IMPORTED_MODULE_0__.app.appDomain,\n  copyright: 'Taxfy',\n  sitenameJA: 'Taxfy Solana Web',\n  sitenameEN: 'Taxfy Solana Web',\n  keywordsJA: 'Solana, 税金, NFT, DeFi',\n  keywordsEN: 'Solana, Tax, NFT, DeFi',\n  descriptionJA: 'Solanaの税金計算を簡単に',\n  descriptionEN: 'Easy tax calculations for Solana',\n  twitterAccount: '@TaxfyDev',\n  discordInvitationLink: 'https://discord.gg/taxfy'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3NpdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0Q7QUFFL0QsTUFBTUMsVUFBVSxHQUFHO0VBQ2pCQyxNQUFNLEVBQUVGLHlEQUFvQixDQUFDSSxTQUFTO0VBQ3RDQyxTQUFTLEVBQUUsT0FBTztFQUNsQkMsVUFBVSxFQUFFLGtCQUFrQjtFQUM5QkMsVUFBVSxFQUFFLGtCQUFrQjtFQUM5QkMsVUFBVSxFQUFFLHVCQUF1QjtFQUNuQ0MsVUFBVSxFQUFFLHdCQUF3QjtFQUNwQ0MsYUFBYSxFQUFFLGlCQUFpQjtFQUNoQ0MsYUFBYSxFQUFFLGtDQUFrQztFQUNqREMsY0FBYyxFQUFFLFdBQVc7RUFDM0JDLHFCQUFxQixFQUFFO0FBQ3pCLENBQUM7QUFFRCxpRUFBZVosVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9jb25maWcvc2l0ZS50cz9iZWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0YXhmeUNsb3VkQ29uZmlnIGZyb20gJy4uLy4uLy4uL3RheGZ5LWNsb3VkLmNvbmZpZy5qc29uJ1xuXG5jb25zdCBzaXRlQ29uZmlnID0ge1xuICBkb21haW46IHRheGZ5Q2xvdWRDb25maWcuYXBwLmFwcERvbWFpbixcbiAgY29weXJpZ2h0OiAnVGF4ZnknLFxuICBzaXRlbmFtZUpBOiAnVGF4ZnkgU29sYW5hIFdlYicsXG4gIHNpdGVuYW1lRU46ICdUYXhmeSBTb2xhbmEgV2ViJyxcbiAga2V5d29yZHNKQTogJ1NvbGFuYSwg56iO6YeRLCBORlQsIERlRmknLFxuICBrZXl3b3Jkc0VOOiAnU29sYW5hLCBUYXgsIE5GVCwgRGVGaScsXG4gIGRlc2NyaXB0aW9uSkE6ICdTb2xhbmHjga7nqI7ph5HoqIjnrpfjgpLnsKHljZjjgasnLFxuICBkZXNjcmlwdGlvbkVOOiAnRWFzeSB0YXggY2FsY3VsYXRpb25zIGZvciBTb2xhbmEnLFxuICB0d2l0dGVyQWNjb3VudDogJ0BUYXhmeURldicsXG4gIGRpc2NvcmRJbnZpdGF0aW9uTGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy90YXhmeSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2l0ZUNvbmZpZ1xuIl0sIm5hbWVzIjpbInRheGZ5Q2xvdWRDb25maWciLCJzaXRlQ29uZmlnIiwiZG9tYWluIiwiYXBwIiwiYXBwRG9tYWluIiwiY29weXJpZ2h0Iiwic2l0ZW5hbWVKQSIsInNpdGVuYW1lRU4iLCJrZXl3b3Jkc0pBIiwia2V5d29yZHNFTiIsImRlc2NyaXB0aW9uSkEiLCJkZXNjcmlwdGlvbkVOIiwidHdpdHRlckFjY291bnQiLCJkaXNjb3JkSW52aXRhdGlvbkxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/site.ts\n");

/***/ }),

/***/ "./src/layouts/default/DefaultLayout.tsx":
/*!***********************************************!*\
  !*** ./src/layouts/default/DefaultLayout.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DefaultLayout)\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__]);\n_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/layouts/default/DefaultLayout.tsx\";\n\n\nfunction DefaultLayout({\n  children\n}) {\n  console.log('DefaultLayout rendering');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"min-h-screen bg-white dark:bg-gray-900\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n      className: \"bg-white shadow dark:bg-gray-800\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"flex items-center justify-between\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n            className: \"text-3xl font-bold tracking-tight text-gray-900 dark:text-white\",\n            children: \"Taxfy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, this), console.log('About to render WalletMultiButton'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__.WalletMultiButton, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n      children: [console.log('About to render children'), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kZWZhdWx0L0RlZmF1bHRMYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21FO0FBQUE7QUFNcEQsU0FBU0csYUFBYUEsQ0FBQztFQUFFQztBQUE2QixDQUFDLEVBQUU7RUFDdEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO0VBRXRDLG9CQUNFSiw2REFBQTtJQUFLSyxTQUFTLEVBQUMsd0NBQXdDO0lBQUFILFFBQUEsZ0JBQ3JERiw2REFBQTtNQUFRSyxTQUFTLEVBQUMsa0NBQWtDO01BQUFILFFBQUEsZUFDbERGLDZEQUFBO1FBQUtLLFNBQVMsRUFBQyw2Q0FBNkM7UUFBQUgsUUFBQSxlQUMxREYsNkRBQUE7VUFBS0ssU0FBUyxFQUFDLG1DQUFtQztVQUFBSCxRQUFBLGdCQUNoREYsNkRBQUE7WUFBSUssU0FBUyxFQUFDLGlFQUFpRTtZQUFBSCxRQUFBLEVBQUM7VUFFaEY7WUFBQUksUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLE9BQUksQ0FBQyxFQUNKTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxlQUNqREosNkRBQUEsQ0FBQ0YsOEVBQWlCO1lBQUFRLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUFFLENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDbEI7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDSDtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNBLENBQUMsZUFDVFQsNkRBQUE7TUFBQUUsUUFBQSxHQUNHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUN2Q0YsUUFBUTtJQUFBO01BQUFJLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNMLENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FDSixDQUFDO0FBRVYsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQvRGVmYXVsdExheW91dC50c3g/MjIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSdcblxuaW50ZXJmYWNlIERlZmF1bHRMYXlvdXRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdExheW91dCh7IGNoaWxkcmVuIH06IERlZmF1bHRMYXlvdXRQcm9wcykge1xuICBjb25zb2xlLmxvZygnRGVmYXVsdExheW91dCByZW5kZXJpbmcnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktNiBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBUYXhmeVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZygnQWJvdXQgdG8gcmVuZGVyIFdhbGxldE11bHRpQnV0dG9uJyl9XG4gICAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICB7Y29uc29sZS5sb2coJ0Fib3V0IHRvIHJlbmRlciBjaGlsZHJlbicpfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJXYWxsZXRNdWx0aUJ1dHRvbiIsImpzeERFViIsIl9qc3hERVYiLCJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/default/DefaultLayout.tsx\n");

/***/ }),

/***/ "./src/lib/firebase.ts":
/*!*****************************!*\
  !*** ./src/lib/firebase.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   functions: () => (/* binding */ functions),\n/* harmony export */   platformDevIP: () => (/* binding */ platformDevIP)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/functions */ \"firebase/functions\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAB5IvKmGEHdxcneVI_RbPHydhhIbmqvXU\",\n  authDomain: \"taxifyio.firebaseapp.com\",\n  projectId: \"taxifyio\",\n  storageBucket: \"taxifyio.firebasestorage.app\",\n  messagingSenderId: \"923664427725\",\n  appId: \"1:923664427725:web:059a47037eb410fcdd1784\",\n  measurementId: \"G-GEJB7NF9LX\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.getFunctions)(app);\nconst platformDevIP = '127.0.0.1'; // For web development\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZpcmViYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUN0QjtBQUNVO0FBQ0E7QUFFakQsTUFBTU0sY0FBYyxHQUFHO0VBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsMEJBQTBCO0VBQ3RDQyxTQUFTLEVBQUUsVUFBVTtFQUNyQkMsYUFBYSxFQUFFLDhCQUE4QjtFQUM3Q0MsaUJBQWlCLEVBQUUsY0FBYztFQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztFQUNsREMsYUFBYSxFQUFFO0FBQ2pCLENBQUM7QUFDRDtBQUNPLE1BQU1DLEdBQUcsR0FBR1oscURBQU8sQ0FBQyxDQUFDLENBQUNhLE1BQU0sR0FBR2Qsb0RBQU0sQ0FBQyxDQUFDLEdBQUdELDJEQUFhLENBQUNNLGNBQWMsQ0FBQztBQUN2RSxNQUFNVSxJQUFJLEdBQUdiLHNEQUFPLENBQUNXLEdBQUcsQ0FBQztBQUN6QixNQUFNRyxFQUFFLEdBQUdiLGdFQUFZLENBQUNVLEdBQUcsQ0FBQztBQUM1QixNQUFNSSxTQUFTLEdBQUdiLGdFQUFZLENBQUNTLEdBQUcsQ0FBQztBQUNuQyxNQUFNSyxhQUFhLEdBQUcsV0FBVyxFQUFDLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2xpYi9maXJlYmFzZS50cz8xNTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcCwgZ2V0QXBwcyB9IGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgZ2V0RnVuY3Rpb25zIH0gZnJvbSAnZmlyZWJhc2UvZnVuY3Rpb25zJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUFCNUl2S21HRUhkeGNuZVZJX1JiUEh5ZGhoSWJtcXZYVVwiLFxuICBhdXRoRG9tYWluOiBcInRheGlmeWlvLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidGF4aWZ5aW9cIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0YXhpZnlpby5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyMzY2NDQyNzcyNVwiLFxuICBhcHBJZDogXCIxOjkyMzY2NDQyNzcyNTp3ZWI6MDU5YTQ3MDM3ZWI0MTBmY2RkMTc4NFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctR0VKQjdORjlMWFwiXG59XG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5leHBvcnQgY29uc3QgYXBwID0gZ2V0QXBwcygpLmxlbmd0aCA/IGdldEFwcCgpIDogaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKVxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IGdldEZ1bmN0aW9ucyhhcHApXG5leHBvcnQgY29uc3QgcGxhdGZvcm1EZXZJUCA9ICcxMjcuMC4wLjEnIC8vIEZvciB3ZWIgZGV2ZWxvcG1lbnRcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJnZXRGdW5jdGlvbnMiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJsZW5ndGgiLCJhdXRoIiwiZGIiLCJmdW5jdGlvbnMiLCJwbGF0Zm9ybURldklQIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/firebase.ts\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ \"@babel/runtime-corejs3/core-js-stable/instance/includes\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/layouts/default/DefaultLayout */ \"./src/layouts/default/DefaultLayout.tsx\");\n/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/lib/getStatic */ \"./src/lib/getStatic.ts\");\n/* harmony import */ var _components_pages_home_HeroRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/pages/home/HeroRow */ \"./src/components/pages/home/HeroRow.tsx\");\n/* harmony import */ var _components_pages_common_DiscordRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/pages/common/DiscordRow */ \"./src/components/pages/common/DiscordRow.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__]);\n_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/pages/[locale]/[[...path]].tsx\";\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context2, _context3; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = ownKeys(Object(t), !0)).call(_context2, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_7___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = ownKeys(Object(t))).call(_context3, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_8___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(t, r)); }); } return e; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst LocalePage = () => {\n  var _context;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n  const {\n    locale,\n    path\n  } = router.query;\n\n  // Handle 404\n  if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9___default()(_context = ['en', 'ja']).call(_context, locale)) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"div\", {\n      children: \"404 - Page not found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  // If no path, render home page\n  if (!path || path.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_pages_home_HeroRow__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_pages_common_DiscordRow__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  // Handle other paths here\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_layouts_default_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"div\", {\n      children: [\"Current locale: \", locale]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(\"div\", {\n      children: [\"Current path: \", path.join('/')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalePage);\nconst getStaticProps = async ctx => {\n  const locale = ctx?.params?.locale;\n  const seoData = {\n    pathname: '/',\n    title: {\n      ja: 'トップページ',\n      en: 'Top page'\n    },\n    description: {\n      ja: 'Solanaの税金計算を簡単に',\n      en: 'Easy tax calculations for Solana'\n    },\n    img: null\n  };\n  return {\n    props: _objectSpread({}, await (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_12__.getI18nProps)(ctx, ['common'], seoData))\n  };\n};\nconst getStaticPaths = async () => {\n  return {\n    paths: [{\n      params: {\n        locale: 'en',\n        path: []\n      }\n    }, {\n      params: {\n        locale: 'ja',\n        path: []\n      }\n    }],\n    fallback: false\n  };\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxNQUFNLEVBQUU7UUFBRWQsTUFBTSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFO01BQUc7SUFBRSxDQUFDLENBQ3ZDO0lBQ0R5QixRQUFRLEVBQUU7RUFDWixDQUFDO0FBQ0gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL3BhZ2VzL1tsb2NhbGVdL1tbLi4ucGF0aF1dLnRzeD82NmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9kZWZhdWx0L0RlZmF1bHRMYXlvdXQnXG5pbXBvcnQgeyBnZXRJMThuUHJvcHMgfSBmcm9tICdAL2xpYi9nZXRTdGF0aWMnXG5pbXBvcnQgSGVyb1JvdyBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9IZXJvUm93J1xuaW1wb3J0IERpc2NvcmRSb3cgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL2NvbW1vbi9EaXNjb3JkUm93J1xuXG5jb25zdCBMb2NhbGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGxvY2FsZSwgcGF0aCB9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgLy8gSGFuZGxlIDQwNFxuICBpZiAoIVsnZW4nLCAnamEnXS5pbmNsdWRlcyhsb2NhbGUgYXMgc3RyaW5nKSkge1xuICAgIHJldHVybiA8ZGl2PjQwNCAtIFBhZ2Ugbm90IGZvdW5kPC9kaXY+XG4gIH1cblxuICAvLyBJZiBubyBwYXRoLCByZW5kZXIgaG9tZSBwYWdlXG4gIGlmICghcGF0aCB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RGVmYXVsdExheW91dD5cbiAgICAgICAgPEhlcm9Sb3cgLz5cbiAgICAgICAgPERpc2NvcmRSb3cgLz5cbiAgICAgIDwvRGVmYXVsdExheW91dD5cbiAgICApXG4gIH1cblxuICAvLyBIYW5kbGUgb3RoZXIgcGF0aHMgaGVyZVxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPGRpdj5DdXJyZW50IGxvY2FsZToge2xvY2FsZX08L2Rpdj5cbiAgICAgIDxkaXY+Q3VycmVudCBwYXRoOiB7cGF0aC5qb2luKCcvJyl9PC9kaXY+XG4gICAgPC9EZWZhdWx0TGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVBhZ2VcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gY3R4Py5wYXJhbXM/LmxvY2FsZSBhcyAnamEnIHwgJ2VuJ1xuXG4gIGNvbnN0IHNlb0RhdGEgPSB7XG4gICAgcGF0aG5hbWU6ICcvJyxcbiAgICB0aXRsZToge1xuICAgICAgamE6ICfjg4jjg4Pjg5fjg5rjg7zjgrgnLFxuICAgICAgZW46ICdUb3AgcGFnZScsXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgamE6ICdTb2xhbmHjga7nqI7ph5HoqIjnrpfjgpLnsKHljZjjgasnLFxuICAgICAgZW46ICdFYXN5IHRheCBjYWxjdWxhdGlvbnMgZm9yIFNvbGFuYScsXG4gICAgfSxcbiAgICBpbWc6IG51bGwsXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAuLi4oYXdhaXQgZ2V0STE4blByb3BzKGN0eCwgWydjb21tb24nXSwgc2VvRGF0YSkpLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBbXG4gICAgICB7IHBhcmFtczogeyBsb2NhbGU6ICdlbicsIHBhdGg6IFtdIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGxvY2FsZTogJ2phJywgcGF0aDogW10gfSB9LFxuICAgIF0sXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRGVmYXVsdExheW91dCIsImdldEkxOG5Qcm9wcyIsIkhlcm9Sb3ciLCJEaXNjb3JkUm93IiwianN4REVWIiwiX2pzeERFViIsIkxvY2FsZVBhZ2UiLCJfY29udGV4dCIsInJvdXRlciIsImxvY2FsZSIsInBhdGgiLCJxdWVyeSIsIl9pbmNsdWRlc0luc3RhbmNlUHJvcGVydHkiLCJjYWxsIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJsZW5ndGgiLCJqb2luIiwiZ2V0U3RhdGljUHJvcHMiLCJjdHgiLCJwYXJhbXMiLCJzZW9EYXRhIiwicGF0aG5hbWUiLCJ0aXRsZSIsImphIiwiZW4iLCJkZXNjcmlwdGlvbiIsImltZyIsInByb3BzIiwiX29iamVjdFNwcmVhZCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[locale]/[[...path]].tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/firebase */ \"./src/lib/firebase.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"../node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.34_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_qdir4qkdaijy6b7chafrwxxxfq/node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/styles/globals.css */ \"./src/assets/styles/globals.css\");\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @solana/web3.js */ \"../node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.cjs.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context, _context2; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(t), !0)).call(_context, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(t))).call(_context2, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(t, r)); }); } return e; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  console.log('App component rendering', {\n    pageProps\n  });\n  if (!pageProps) {\n    console.error('No pageProps provided');\n    return null;\n  }\n\n  // Clear any existing redirect loops on mount\n  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(() => {\n    if (false) {}\n  }, []);\n\n  // Set up Solana wallet connection\n  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(() => {\n    console.log('Setting up endpoint');\n    return (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_18__.clusterApiUrl)('mainnet-beta');\n  }, []);\n  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(() => {\n    console.log('Setting up wallets');\n    return [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__.PhantomWalletAdapter()];\n  }, []);\n\n  // Use the layout defined at the page level, or fall back to a default\n  const getLayout = Component.getLayout ?? (page => {\n    console.log('Using default layout');\n    return page;\n  });\n  try {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"title\", {\n          children: pageProps.title || 'Taxfy'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), pageProps.seoData?.map((seo, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_19__.createElement)(\"meta\", _objectSpread(_objectSpread({}, seo), {}, {\n          key: `metaSeo${index}`,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }\n        })))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_11__.RecoilRoot, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__.ConnectionProvider, {\n          endpoint: endpoint,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__.WalletModalProvider, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n                  className: \"min-h-screen scroll-smooth font-sans antialiased\",\n                  children: [console.log('About to render layout'), getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 32\n                  }, this))]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  } catch (error) {\n    console.error('Error in App render:', error);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n      children: \"Something went wrong. Please try again.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 12\n    }, this);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.appWithTranslation)(App));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQXNCLGFBQUEsS0FBS3JCLFNBQVM7b0JBQUFhLFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxPQUFHLENBQUMsQ0FBQztnQkFBQTtrQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLE9BQ3JDO2NBQUM7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLE9BQ087WUFBQztjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsT0FDRztVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUNSO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ0M7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDWCxDQUFDO0lBQUEsZUFDYixDQUFDO0VBRVAsQ0FBQyxDQUFDLE9BQU9iLEtBQUssRUFBRTtJQUNkRixPQUFPLENBQUNFLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDLG9CQUFPViw4REFBQTtNQUFBa0IsUUFBQSxFQUFLO0lBQXVDO01BQUFFLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFLLENBQUM7RUFDM0Q7QUFDRjtBQUVBLGlFQUFlbkMsaUVBQWtCLENBQUNpQixHQUFHLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9saWIvZmlyZWJhc2UnXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdHlwZSB7IFNlb0RhdGEgfSBmcm9tICdAL2xpYi9nZXRTdGF0aWMnXG5pbXBvcnQgJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcydcbmltcG9ydCAnQC9hc3NldHMvc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblByb3ZpZGVyLFxuICBXYWxsZXRQcm92aWRlcixcbn0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJ1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGhhbnRvbVdhbGxldEFkYXB0ZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnXG5cbnR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0PFAgPSB7fSwgSVAgPSBQPiA9IE5leHRQYWdlPFAsIElQPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlXG59XG5cbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0XG59XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzV2l0aExheW91dCkge1xuICBjb25zb2xlLmxvZygnQXBwIGNvbXBvbmVudCByZW5kZXJpbmcnLCB7IHBhZ2VQcm9wcyB9KVxuXG4gIGlmICghcGFnZVByb3BzKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcGFnZVByb3BzIHByb3ZpZGVkJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHJlZGlyZWN0IGxvb3BzIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gU2V0IHVwIFNvbGFuYSB3YWxsZXQgY29ubmVjdGlvblxuICBjb25zdCBlbmRwb2ludCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVwIGVuZHBvaW50JylcbiAgICByZXR1cm4gY2x1c3RlckFwaVVybCgnbWFpbm5ldC1iZXRhJylcbiAgfSwgW10pXG5cbiAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVwIHdhbGxldHMnKVxuICAgIHJldHVybiBbbmV3IFBoYW50b21XYWxsZXRBZGFwdGVyKCldXG4gIH0sIFtdKVxuXG4gIC8vIFVzZSB0aGUgbGF5b3V0IGRlZmluZWQgYXQgdGhlIHBhZ2UgbGV2ZWwsIG9yIGZhbGwgYmFjayB0byBhIGRlZmF1bHRcbiAgY29uc3QgZ2V0TGF5b3V0ID1cbiAgICBDb21wb25lbnQuZ2V0TGF5b3V0ID8/XG4gICAgKChwYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVXNpbmcgZGVmYXVsdCBsYXlvdXQnKVxuICAgICAgcmV0dXJuIHBhZ2VcbiAgICB9KVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cGFnZVByb3BzLnRpdGxlIHx8ICdUYXhmeSd9PC90aXRsZT5cbiAgICAgICAgICB7cGFnZVByb3BzLnNlb0RhdGE/Lm1hcCgoc2VvOiBTZW9EYXRhLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8bWV0YSB7Li4uc2VvfSBrZXk9e2BtZXRhU2VvJHtpbmRleH1gfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICAgIDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e2VuZHBvaW50fT5cbiAgICAgICAgICAgIDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfSBhdXRvQ29ubmVjdD5cbiAgICAgICAgICAgICAgPFdhbGxldE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHNjcm9sbC1zbW9vdGggZm9udC1zYW5zIGFudGlhbGlhc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnQWJvdXQgdG8gcmVuZGVyIGxheW91dCcpfVxuICAgICAgICAgICAgICAgICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgICA8L1dhbGxldE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgICA8L1dhbGxldFByb3ZpZGVyPlxuICAgICAgICAgIDwvQ29ubmVjdGlvblByb3ZpZGVyPlxuICAgICAgICA8L1JlY29pbFJvb3Q+XG4gICAgICA8Lz5cbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gQXBwIHJlbmRlcjonLCBlcnJvcilcbiAgICByZXR1cm4gPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi48L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oQXBwKVxuIl0sIm5hbWVzIjpbImFwcFdpdGhUcmFuc2xhdGlvbiIsIlJlY29pbFJvb3QiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNvbm5lY3Rpb25Qcm92aWRlciIsIldhbGxldFByb3ZpZGVyIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsImNsdXN0ZXJBcGlVcmwiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJqc3hERVYiLCJfanN4REVWIiwiY3JlYXRlRWxlbWVudCIsIl9jcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzZXNzaW9uU3RvcmFnZSIsImNsZWFyIiwibG9jYWxTdG9yYWdlIiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiZ2V0TGF5b3V0IiwicGFnZSIsImNoaWxkcmVuIiwidGl0bGUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJzZW9EYXRhIiwibWFwIiwic2VvIiwiaW5kZXgiLCJfb2JqZWN0U3ByZWFkIiwia2V5IiwiX19zZWxmIiwiX19zb3VyY2UiLCJhdXRvQ29ubmVjdCIsImF0dHJpYnV0ZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10","vendor-chunks/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0","vendor-chunks/tr46@0.0.3","vendor-chunks/iconv-lite@0.6.3","vendor-chunks/@noble+curves@1.8.0","vendor-chunks/ws@8.18.0_bufferutil@4.0.9_utf-8-validate@5.0.10","vendor-chunks/bn.js@5.2.1","vendor-chunks/@solana+buffer-layout@4.0.1","vendor-chunks/@noble+hashes@1.7.0","vendor-chunks/node-fetch@2.7.0_encoding@0.1.13","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/superstruct@2.0.2","vendor-chunks/rpc-websockets@9.0.4","vendor-chunks/text-encoding-utf-8@1.0.2","vendor-chunks/borsh@0.7.0","vendor-chunks/uuid@8.3.2","vendor-chunks/eventemitter3@5.0.1","vendor-chunks/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10","vendor-chunks/node-gyp-build@4.8.4","vendor-chunks/bindings@1.5.0","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/base-x@3.0.10","vendor-chunks/bigint-buffer@1.1.5","vendor-chunks/encoding@0.1.13","vendor-chunks/safer-buffer@2.1.2","vendor-chunks/utf-8-validate@5.0.10","vendor-chunks/file-uri-to-path@1.0.0","vendor-chunks/safe-buffer@5.2.1","vendor-chunks/@swc+helpers@0.5.2","vendor-chunks/bufferutil@4.0.9","vendor-chunks/bs58@4.0.1","vendor-chunks/@solana+wallet-adapter-react-ui@0.9.34_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_qdir4qkdaijy6b7chafrwxxxfq"], () => (__webpack_exec__("../node_modules/.pnpm/next@14.0.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5Blocale%5D%2F%5B%5B...path%5D%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2F%5Blocale%5D%2F%5B%5B...path%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();