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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/firebase.ts":
/*!*****************************!*\
  !*** ./src/lib/firebase.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   functions: () => (/* binding */ functions),\n/* harmony export */   platformDevIP: () => (/* binding */ platformDevIP),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/functions */ \"firebase/functions\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAB5IvKmGEHdxcneVI_RbPHydhhIbmqvXU\",\n  authDomain: \"taxifyio.firebaseapp.com\",\n  projectId: \"taxifyio\",\n  storageBucket: \"taxifyio.firebasestorage.app\",\n  messagingSenderId: \"923664427725\",\n  appId: \"1:923664427725:web:059a47037eb410fcdd1784\",\n  measurementId: \"G-GEJB7NF9LX\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.getFunctions)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(app);\nconst platformDevIP = '127.0.0.1'; // For web development\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZpcmViYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ3RCO0FBQ1U7QUFDQTtBQUNKO0FBRTdDLE1BQU1PLGNBQWMsR0FBRztFQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztFQUNqREMsVUFBVSxFQUFFLDBCQUEwQjtFQUN0Q0MsU0FBUyxFQUFFLFVBQVU7RUFDckJDLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0NDLGlCQUFpQixFQUFFLGNBQWM7RUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7RUFDbERDLGFBQWEsRUFBRTtBQUNqQixDQUFDO0FBQ0Q7QUFDTyxNQUFNQyxHQUFHLEdBQUdiLHFEQUFPLENBQUMsQ0FBQyxDQUFDYyxNQUFNLEdBQUdmLG9EQUFNLENBQUMsQ0FBQyxHQUFHRCwyREFBYSxDQUFDTyxjQUFjLENBQUM7QUFDdkUsTUFBTVUsSUFBSSxHQUFHZCxzREFBTyxDQUFDWSxHQUFHLENBQUM7QUFDekIsTUFBTUcsRUFBRSxHQUFHZCxnRUFBWSxDQUFDVyxHQUFHLENBQUM7QUFDNUIsTUFBTUksU0FBUyxHQUFHZCxnRUFBWSxDQUFDVSxHQUFHLENBQUM7QUFDbkMsTUFBTUssT0FBTyxHQUFHZCw0REFBVSxDQUFDUyxHQUFHLENBQUM7QUFDL0IsTUFBTU0sYUFBYSxHQUFHLFdBQVcsRUFBQyxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9saWIvZmlyZWJhc2UudHM/MTU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcbmltcG9ydCB7IGdldEZ1bmN0aW9ucyB9IGZyb20gJ2ZpcmViYXNlL2Z1bmN0aW9ucydcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUFCNUl2S21HRUhkeGNuZVZJX1JiUEh5ZGhoSWJtcXZYVVwiLFxuICBhdXRoRG9tYWluOiBcInRheGlmeWlvLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidGF4aWZ5aW9cIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0YXhpZnlpby5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyMzY2NDQyNzcyNVwiLFxuICBhcHBJZDogXCIxOjkyMzY2NDQyNzcyNTp3ZWI6MDU5YTQ3MDM3ZWI0MTBmY2RkMTc4NFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctR0VKQjdORjlMWFwiXG59XG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5leHBvcnQgY29uc3QgYXBwID0gZ2V0QXBwcygpLmxlbmd0aCA/IGdldEFwcCgpIDogaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKVxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IGdldEZ1bmN0aW9ucyhhcHApXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKVxuZXhwb3J0IGNvbnN0IHBsYXRmb3JtRGV2SVAgPSAnMTI3LjAuMC4xJyAvLyBGb3Igd2ViIGRldmVsb3BtZW50XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0RnVuY3Rpb25zIiwiZ2V0U3RvcmFnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImxlbmd0aCIsImF1dGgiLCJkYiIsImZ1bmN0aW9ucyIsInN0b3JhZ2UiLCJwbGF0Zm9ybURldklQIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/firebase.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/firebase */ \"./src/lib/firebase.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"../node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.34_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_qdir4qkdaijy6b7chafrwxxxfq/node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/styles/globals.css */ \"./src/assets/styles/globals.css\");\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @solana/web3.js */ \"../node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.cjs.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrymayo/Desktop/apps/taxify/webapp/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var o = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(o).call(o, function (r) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context, _context2; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(t), !0)).call(_context, function (r) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(e, r, t[r]); }) : (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()) ? _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(e, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(t)) : _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(t))).call(_context2, function (r) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(e, r, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(t, r)); }); } return e; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  console.log('App component rendering', {\n    pageProps\n  });\n  if (!pageProps) {\n    console.error('No pageProps provided');\n    return null;\n  }\n\n  // Clear any existing redirect loops on mount\n  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(() => {\n    if (false) {}\n  }, []);\n\n  // Set up Solana wallet connection\n  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(() => {\n    console.log('Setting up endpoint');\n    return (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_18__.clusterApiUrl)('mainnet-beta');\n  }, []);\n  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(() => {\n    console.log('Setting up wallets');\n    return [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_20__.PhantomWalletAdapter()];\n  }, []);\n\n  // Use the layout defined at the page level, or fall back to a default\n  const getLayout = Component.getLayout ?? (page => {\n    console.log('Using default layout');\n    return page;\n  });\n  try {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"title\", {\n          children: pageProps.title || 'Taxfy'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), pageProps.seoData?.map((seo, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_19__.createElement)(\"meta\", _objectSpread(_objectSpread({}, seo), {}, {\n          key: `metaSeo${index}`,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }\n        })))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_11__.RecoilRoot, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__.ConnectionProvider, {\n          endpoint: endpoint,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_16__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__.WalletModalProvider, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n                  className: \"min-h-screen scroll-smooth font-sans antialiased\",\n                  children: [console.log('About to render layout'), getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 32\n                  }, this))]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  } catch (error) {\n    console.error('Error in App render:', error);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n      children: \"Something went wrong. Please try again.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 12\n    }, this);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.appWithTranslation)(App));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUkwQjtBQUNkO0FBQ1A7QUFFdUI7QUFDZjtBQUNPO0FBSU47QUFDZ0M7QUFDdEI7QUFDTDtBQUMyQjtBQUFBO0FBQUE7QUFBQTtBQVVyRSxTQUFTaUIsR0FBR0EsQ0FBQztFQUFFQyxTQUFTO0VBQUVDO0FBQThCLENBQUMsRUFBRTtFQUN6REMsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUU7SUFBRUY7RUFBVSxDQUFDLENBQUM7RUFFckQsSUFBSSxDQUFDQSxTQUFTLEVBQUU7SUFDZEMsT0FBTyxDQUFDRSxLQUFLLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7RUFDQWIsaURBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSSxPQUErQixFQUdsQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7O0VBRU47RUFDQSxNQUFNaUIsUUFBUSxHQUFHbEIsK0NBQU8sQ0FBQyxNQUFNO0lBQzdCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsQyxPQUFPZCwrREFBYSxDQUFDLGNBQWMsQ0FBQztFQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTW9CLE9BQU8sR0FBR25CLCtDQUFPLENBQUMsTUFBTTtJQUM1QlksT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFDakMsT0FBTyxDQUFDLElBQUlYLGlGQUFvQixDQUFDLENBQUMsQ0FBQztFQUNyQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUVOO0VBQ0EsTUFBTWtCLFNBQVMsR0FDYlYsU0FBUyxDQUFDVSxTQUFTLEtBQ2pCQyxJQUFJLElBQUs7SUFDVFQsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7SUFDbkMsT0FBT1EsSUFBSTtFQUNiLENBQUMsQ0FBQztFQUVKLElBQUk7SUFDRixvQkFDRWpCLDhEQUFBLENBQUFJLDREQUFBO01BQUFjLFFBQUEsZ0JBQ0VsQiw4REFBQSxDQUFDVixtREFBSTtRQUFBNEIsUUFBQSxnQkFDSGxCLDhEQUFBO1VBQUFrQixRQUFBLEVBQVFYLFNBQVMsQ0FBQ1ksS0FBSyxJQUFJO1FBQU87VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQVEsQ0FBQyxFQUMxQ2hCLFNBQVMsQ0FBQ2lCLE9BQU8sRUFBRUMsR0FBRyxDQUFDLENBQUNDLEdBQVksRUFBRUMsS0FBYSxrQkFDbER6QixxREFBQSxTQUFBMEIsYUFBQSxDQUFBQSxhQUFBLEtBQVVGLEdBQUc7VUFBRUcsR0FBRyxFQUFHLFVBQVNGLEtBQU0sRUFBRTtVQUFBRyxNQUFBO1VBQUFDLFFBQUE7WUFBQVgsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBO1FBQUEsRUFBRSxDQUN6QyxDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQ0UsQ0FBQyxlQUNQdkIsOERBQUEsQ0FBQ1gsK0NBQVU7UUFBQTZCLFFBQUEsZUFDVGxCLDhEQUFBLENBQUNSLDZFQUFrQjtVQUFDc0IsUUFBUSxFQUFFQSxRQUFTO1VBQUFJLFFBQUEsZUFDckNsQiw4REFBQSxDQUFDUCx5RUFBYztZQUFDc0IsT0FBTyxFQUFFQSxPQUFRO1lBQUNpQixXQUFXO1lBQUFkLFFBQUEsZUFDM0NsQiw4REFBQSxDQUFDTixpRkFBbUI7Y0FBQXdCLFFBQUEsZUFDbEJsQiw4REFBQSxDQUFDVCx1REFBYTtnQkFBQzBDLFNBQVMsRUFBQyxPQUFPO2dCQUFBZixRQUFBLGVBQzlCbEIsOERBQUE7a0JBQUtrQyxTQUFTLEVBQUMsa0RBQWtEO2tCQUFBaEIsUUFBQSxHQUM5RFYsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFDckNPLFNBQVMsZUFBQ2hCLDhEQUFBLENBQUNNLFNBQVMsRUFBQXNCLGFBQUEsS0FBS3JCLFNBQVM7b0JBQUFhLFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxPQUFHLENBQUMsQ0FBQztnQkFBQTtrQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLE9BQ3JDO2NBQUM7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLE9BQ087WUFBQztjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsT0FDRztVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUNSO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ0M7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDWCxDQUFDO0lBQUEsZUFDYixDQUFDO0VBRVAsQ0FBQyxDQUFDLE9BQU9iLEtBQUssRUFBRTtJQUNkRixPQUFPLENBQUNFLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDLG9CQUFPViw4REFBQTtNQUFBa0IsUUFBQSxFQUFLO0lBQXVDO01BQUFFLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFLLENBQUM7RUFDM0Q7QUFDRjtBQUVBLGlFQUFlbkMsaUVBQWtCLENBQUNpQixHQUFHLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9saWIvZmlyZWJhc2UnXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdHlwZSB7IFNlb0RhdGEgfSBmcm9tICdAL2xpYi9nZXRTdGF0aWMnXG5pbXBvcnQgJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcydcbmltcG9ydCAnQC9hc3NldHMvc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblByb3ZpZGVyLFxuICBXYWxsZXRQcm92aWRlcixcbn0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJ1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGhhbnRvbVdhbGxldEFkYXB0ZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnXG5cbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0ge30sIElQID0gUD4gPSBOZXh0UGFnZTxQLCBJUD4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXRcbn1cblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnNvbGUubG9nKCdBcHAgY29tcG9uZW50IHJlbmRlcmluZycsIHsgcGFnZVByb3BzIH0pXG5cbiAgaWYgKCFwYWdlUHJvcHMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwYWdlUHJvcHMgcHJvdmlkZWQnKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgcmVkaXJlY3QgbG9vcHMgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKClcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyBTZXQgdXAgU29sYW5hIHdhbGxldCBjb25uZWN0aW9uXG4gIGNvbnN0IGVuZHBvaW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgZW5kcG9pbnQnKVxuICAgIHJldHVybiBjbHVzdGVyQXBpVXJsKCdtYWlubmV0LWJldGEnKVxuICB9LCBbXSlcblxuICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgd2FsbGV0cycpXG4gICAgcmV0dXJuIFtuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoKV1cbiAgfSwgW10pXG5cbiAgLy8gVXNlIHRoZSBsYXlvdXQgZGVmaW5lZCBhdCB0aGUgcGFnZSBsZXZlbCwgb3IgZmFsbCBiYWNrIHRvIGEgZGVmYXVsdFxuICBjb25zdCBnZXRMYXlvdXQgPVxuICAgIENvbXBvbmVudC5nZXRMYXlvdXQgPz9cbiAgICAoKHBhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkZWZhdWx0IGxheW91dCcpXG4gICAgICByZXR1cm4gcGFnZVxuICAgIH0pXG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntwYWdlUHJvcHMudGl0bGUgfHwgJ1RheGZ5J308L3RpdGxlPlxuICAgICAgICAgIHtwYWdlUHJvcHMuc2VvRGF0YT8ubWFwKChzZW86IFNlb0RhdGEsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxtZXRhIHsuLi5zZW99IGtleT17YG1ldGFTZW8ke2luZGV4fWB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFJlY29pbFJvb3Q+XG4gICAgICAgICAgPENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxuICAgICAgICAgICAgPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PlxuICAgICAgICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gc2Nyb2xsLXNtb290aCBmb250LXNhbnMgYW50aWFsaWFzZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdBYm91dCB0byByZW5kZXIgbGF5b3V0Jyl9XG4gICAgICAgICAgICAgICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgICAgICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XG4gICAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICAgIDwvPlxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBBcHAgcmVuZGVyOicsIGVycm9yKVxuICAgIHJldHVybiA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLjwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihBcHApXG4iXSwibmFtZXMiOlsiYXBwV2l0aFRyYW5zbGF0aW9uIiwiUmVjb2lsUm9vdCIsIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiY2x1c3RlckFwaVVybCIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJQaGFudG9tV2FsbGV0QWRhcHRlciIsImpzeERFViIsIl9qc3hERVYiLCJjcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNlc3Npb25TdG9yYWdlIiwiY2xlYXIiLCJsb2NhbFN0b3JhZ2UiLCJlbmRwb2ludCIsIndhbGxldHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInNlb0RhdGEiLCJtYXAiLCJzZW8iLCJpbmRleCIsIl9vYmplY3RTcHJlYWQiLCJrZXkiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImF1dG9Db25uZWN0IiwiYXR0cmlidXRlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

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

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10","vendor-chunks/tr46@0.0.3","vendor-chunks/iconv-lite@0.6.3","vendor-chunks/@noble+curves@1.8.0","vendor-chunks/ws@8.18.0_bufferutil@4.0.9_utf-8-validate@5.0.10","vendor-chunks/bn.js@5.2.1","vendor-chunks/@solana+buffer-layout@4.0.1","vendor-chunks/@noble+hashes@1.7.0","vendor-chunks/node-fetch@2.7.0_encoding@0.1.13","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/superstruct@2.0.2","vendor-chunks/rpc-websockets@9.0.4","vendor-chunks/text-encoding-utf-8@1.0.2","vendor-chunks/borsh@0.7.0","vendor-chunks/uuid@8.3.2","vendor-chunks/eventemitter3@5.0.1","vendor-chunks/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10","vendor-chunks/node-gyp-build@4.8.4","vendor-chunks/bindings@1.5.0","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/base-x@3.0.10","vendor-chunks/bigint-buffer@1.1.5","vendor-chunks/encoding@0.1.13","vendor-chunks/safer-buffer@2.1.2","vendor-chunks/utf-8-validate@5.0.10","vendor-chunks/file-uri-to-path@1.0.0","vendor-chunks/safe-buffer@5.2.1","vendor-chunks/bufferutil@4.0.9","vendor-chunks/bs58@4.0.1","vendor-chunks/@solana+wallet-adapter-react-ui@0.9.34_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_qdir4qkdaijy6b7chafrwxxxfq"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();