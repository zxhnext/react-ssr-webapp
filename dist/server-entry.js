module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/server-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/config/router.jsx":
/*!**********************************!*\
  !*** ./client/config/router.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_topic_list_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/topic-list/index */ \"./client/views/topic-list/index.jsx\");\n/* harmony import */ var _views_topic_detail_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/topic-detail/index */ \"./client/views/topic-detail/index.jsx\");\n/* harmony import */ var _views_test_api_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/test/api-test */ \"./client/views/test/api-test.jsx\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        to: \"/list\"\n      });\n    },\n    key: \"/\",\n    exact: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/list\",\n    component: _views_topic_list_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    key: \"list\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/test\",\n    component: _views_test_api_test__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    key: \"test\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/detail\",\n    component: _views_topic_detail_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    key: \"detail\"\n  })];\n});\n\n//# sourceURL=webpack:///./client/config/router.jsx?");

/***/ }),

/***/ "./client/server-entry.js":
/*!********************************!*\
  !*** ./client/server-entry.js ***!
  \********************************/
/*! exports provided: default, createStoreMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/App */ \"./client/views/App.jsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./client/store/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createStoreMap\", function() { return _store__WEBPACK_IMPORTED_MODULE_4__[\"createStoreMap\"]; });\n\n\n\n\n\n // 让mobx在服务端渲染的时候不会重复数据变换\n\nObject(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"useStaticRendering\"])(true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (stores, routerContext, url) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], stores, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    context: routerContext,\n    location: url\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n});\n\n\n//# sourceURL=webpack:///./client/server-entry.js?");

/***/ }),

/***/ "./client/store/app-state.js":
/*!***********************************!*\
  !*** ./client/store/app-state.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppState; });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nvar _class, _descriptor, _descriptor2, _descriptor3, _temp;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }\n\n\nvar AppState = (_class = (_temp =\n/*#__PURE__*/\nfunction () {\n  function AppState() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      count: 0,\n      name: 'zxhnext'\n    },\n        count = _ref.count,\n        name = _ref.name;\n\n    _classCallCheck(this, AppState);\n\n    _initializerDefineProperty(this, \"count\", _descriptor, this);\n\n    _initializerDefineProperty(this, \"name\", _descriptor2, this);\n\n    _initializerDefineProperty(this, \"changeName\", _descriptor3, this);\n\n    this.count = count;\n    this.name = name;\n  }\n\n  _createClass(AppState, [{\n    key: \"toJson\",\n    value: function toJson() {\n      // 用这个方法去拿到服务端渲染的数据\n      return {\n        count: this.count,\n        name: this.name\n      };\n    }\n  }, {\n    key: \"msg\",\n    get: function get() {\n      return \"\".concat(this.name, \" say count is \").concat(this.count);\n    }\n  }]);\n\n  return AppState;\n}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"count\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, \"name\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _applyDecoratedDescriptor(_class.prototype, \"msg\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"msg\"), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, \"changeName\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    var _this = this;\n\n    return function (name) {\n      _this.name = name;\n    };\n  }\n})), _class);\n // const appState = new AppState()\n// export default appState\n\n//# sourceURL=webpack:///./client/store/app-state.js?");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! exports provided: AppState, default, createStoreMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppState\", function() { return AppState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStoreMap\", function() { return createStoreMap; });\n/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-state */ \"./client/store/app-state.js\");\n\nvar AppState = _app_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  AppState: AppState\n});\nvar createStoreMap = function createStoreMap() {\n  return {\n    appState: new AppState()\n  };\n};\n\n//# sourceURL=webpack:///./client/store/index.js?");

/***/ }),

/***/ "./client/views/App.jsx":
/*!******************************!*\
  !*** ./client/views/App.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/router */ \"./client/config/router.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// do\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: \"header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/detail\"\n      }, \"\\u8BE6\\u60C5\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_config_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: \"routes\"\n      })];\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // export default () => <div>react!!!</div>\n\n\n\n\n//# sourceURL=webpack:///./client/views/App.jsx?");

/***/ }),

/***/ "./client/views/test/api-test.jsx":
/*!****************************************!*\
  !*** ./client/views/test/api-test.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TestApi; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n/* eslint-disable */\n\nvar TestApi =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TestApi, _React$Component);\n\n  function TestApi() {\n    _classCallCheck(this, TestApi);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TestApi).apply(this, arguments));\n  }\n\n  _createClass(TestApi, [{\n    key: \"getTopics\",\n    value: function getTopics() {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/topics').then(function (resp) {\n        console.log(resp);\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/user/login', {\n        accessToken: ' 8d8bbfc4-8d40-43ac-96e0-0b7223d01b52'\n      }).then(function (resp) {\n        console.log(resp);\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"markAll\",\n    value: function markAll() {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/message/mark_all?needAccessToken=true').then(function (resp) {\n        console.log(resp);\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.getTopics\n      }, \"topics\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.login\n      }, \"login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.markAll\n      }, \"markAll\"));\n    }\n  }]);\n\n  return TestApi;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./client/views/test/api-test.jsx?");

/***/ }),

/***/ "./client/views/topic-detail/index.jsx":
/*!*********************************************!*\
  !*** ./client/views/topic-detail/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TopicDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar TopicDetail =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TopicDetail, _Component);\n\n  function TopicDetail() {\n    _classCallCheck(this, TopicDetail);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TopicDetail).apply(this, arguments));\n  }\n\n  _createClass(TopicDetail, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// do\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"z\\u8FD9\\u662Ftopic-detail\");\n    }\n  }]);\n\n  return TopicDetail;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./client/views/topic-detail/index.jsx?");

/***/ }),

/***/ "./client/views/topic-list/index.jsx":
/*!*******************************************!*\
  !*** ./client/views/topic-list/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TopicList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n // import PropTypes from 'prop-types'\n// import { AppState } from '../../store/app-state'\n\nvar TopicList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"inject\"])('appState'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(_class =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TopicList, _Component);\n\n  function TopicList() {\n    var _this;\n\n    _classCallCheck(this, TopicList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopicList).call(this));\n    _this.changeName = _this.changeName.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(TopicList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// do\n    }\n  }, {\n    key: \"asyncBootstrap\",\n    value: function asyncBootstrap() {\n      var _this2 = this;\n\n      return new Promise(function (resolve) {\n        setTimeout(function () {\n          _this2.props.appState.count = 3;\n          resolve(true);\n        }, 1000);\n      });\n    }\n  }, {\n    key: \"changeName\",\n    value: function changeName(event) {\n      this.props.appState.changeName(event.target.value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"\\u8BDD\\u9898\\u5217\\u8868\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"\\u8BDD\\u9898\\u5217\\u8868\",\n        content: \"\\u8FD9\\u662F\\u8BDD\\u9898\\u5217\\u8868\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        onChange: this.changeName\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.props.appState.msg));\n    }\n  }]);\n\n  return TopicList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])) || _class) || _class);\n // TopicList.PropTypes = {\n//   appState: PropTypes.instanceOf(AppState),\n// }\n\n//# sourceURL=webpack:///./client/views/topic-list/index.jsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });