webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import ball from './ball.js';\nfunction component() {\n  var element = document.createElement('div');\n  var button = document.createElement('button');\n  element.classList.add('wrapper');\n  element.appendChild(ball());\n  element.appendChild(button);\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying); // element.appendChild(button);\n\n  return element;\n}\n\nfunction startPlaying() {\n  var child = document.getElementsByClassName('main_button');\n  var parent = child[0].parentNode;\n  parent.removeChild(child[0]);\n  fallingBall();\n}\n\nfunction fallingBall() {\n  var child = document.getElementsByClassName('ball_wrapper');\n  console.log(window.innerHeight - 35);\n  var sth = 0;\n\n  if (sth == window.innerHeight - 35) {\n    clearInterval(initialInterval);\n  }\n\n  ;\n  var initialInterval = setInterval(function () {\n    sth = sth + 1;\n    console.log(sth);\n    child[0].setAttribute(\"style\", \"left:45%;top:\".concat(sth, \"px;\"));\n  }, 3);\n}\n\nfunction ball() {\n  var ball = document.createElement('div');\n  ball.classList.add('ball_wrapper');\n  ball.setAttribute(\"style\", \"left:45%;top:0px;\");\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})