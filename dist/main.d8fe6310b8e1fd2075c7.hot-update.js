webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import ball from './ball.js';\nfunction component() {\n  var element = document.createElement('div');\n  var button = document.createElement('button');\n  element.classList.add('wrapper');\n  element.appendChild(ball());\n  element.appendChild(button);\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying); // element.appendChild(button);\n\n  return element;\n}\n\nfunction startPlaying() {\n  var element = document.getElementsByClassName('wrapper');\n  element.classList.toggle('main_button_hidden'); // console.log(element);\n  // const button = document.getElementsByClassName('main_button');\n  // console.log(button);\n  // element.removeChild(button);\n}\n\nfunction ball() {\n  var ball = document.createElement('div');\n  ball.classList.add('ball_wrapper');\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})