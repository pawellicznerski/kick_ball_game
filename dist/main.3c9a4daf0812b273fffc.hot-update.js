webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar _print = _interopRequireDefault(__webpack_require__(/*! ./print.js */ \"./src/print.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction component() {\n  var element = document.createElement('div'); // element.innerHTML = 'hello';\n  // element.innerHTML = _.join(['Hellooooiii', 'webpack'], ' ');\n\n  element.classList.add('wrapper');\n  (0, _print.default)();\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})