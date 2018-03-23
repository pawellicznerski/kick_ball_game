webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import ball from './ball.js';\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball(top, left) {\n    _classCallCheck(this, Ball);\n\n    this.top = top;\n    this.left = left;\n  }\n\n  _createClass(Ball, [{\n    key: \"giveTop\",\n    value: function giveTop() {\n      console.log(this.top);\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar ball = new Ball(0, 0);\nconsole.log(ball.top);\n\nfunction component() {\n  var element = document.createElement('div');\n  var button = document.createElement('button');\n  element.classList.add('wrapper');\n  element.appendChild(ball());\n  element.appendChild(button);\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying); // element.appendChild(button);\n\n  return element;\n}\n\nfunction startPlaying() {\n  var child = document.getElementsByClassName('main_button');\n  var parent = child[0].parentNode;\n  parent.removeChild(child[0]);\n  var ball = document.getElementsByClassName('ball_wrapper');\n  ball[0].setAttribute(\"style\", \"left:45%;top:0px;\");\n  fallingBall();\n}\n\nfunction kickBall() {\n  var child = document.getElementsByClassName('ball_wrapper');\n  var i = 0;\n  var id2 = setInterval(goUp, 8);\n\n  function goUp() {\n    if (i < 50) {\n      var currentPix = parseInt(child[0].style.top) - 3;\n      child[0].setAttribute(\"style\", \"left:45%;top:\".concat(currentPix, \"px;\"));\n      i++;\n    } else {\n      clearInterval(id2);\n    }\n  }\n}\n\nfunction kupa(j) {\n  return j + 10;\n}\n\nfunction fallingBall() {\n  var child = document.getElementsByClassName('ball_wrapper'); // let ballGoesUp = 0;\n  // function kickBall(){\n  //   ballGoesUp=50;\n  // }\n\n  var currentPix = 0;\n  var j = 2;\n  var id = setInterval(movingBall, 8, j);\n\n  function movingBall() {\n    // console.log(\"currentPix\",currentPix, window.innerHeight-65);\n    var currentPix = parseInt(child[0].style.top);\n\n    if (currentPix < window.innerHeight - 65) {\n      var updatedPix = parseInt(child[0].style.top) + 1; // console.log(\"top:\",parseInt(child[0].style.top));\n\n      console.log(\"j:\", j);\n      var k;\n      j++;\n      j > 500 ? k = kupa(j) : k = null;\n      console.log('k', k); // console.log(\"currentPix\",currentPix, window.innerHeight-65);\n\n      child[0].setAttribute(\"style\", \"left:45%;top:\".concat(updatedPix, \"px;\"));\n    } else {\n      clearInterval(id);\n      var button = document.createElement('button');\n      var element = document.getElementsByClassName('wrapper');\n      console.log(element);\n      button.classList.add('main_button');\n      button.innerHTML = 'START';\n      button.addEventListener('click', startPlaying);\n      element[0].appendChild(button);\n    }\n  }\n}\n\nfunction stopFalling() {\n  clearInterval(initialInterval);\n}\n\nfunction ball() {\n  var ball = document.createElement('div');\n  ball.addEventListener('click', kickBall);\n  ball.classList.add('ball_wrapper');\n  ball.setAttribute(\"style\", \"left:45%;top:0px;\");\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})