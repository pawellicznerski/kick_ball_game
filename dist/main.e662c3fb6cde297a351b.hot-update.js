webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import ball from './ball.js';\n// document.addEventListener('click',function(e){\n//   console.log(e.clientX);\n// })\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball(top, left, height) {\n    _classCallCheck(this, Ball);\n\n    this.top = top;\n    this.left = left;\n    this.high = height;\n    this.speed = 1;\n    this.direction = this.speed * 1;\n    this.kick = false;\n  }\n\n  _createClass(Ball, [{\n    key: \"giveTop\",\n    value: function giveTop() {\n      return this.top;\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar ball4 = new Ball(360, 60, 0);\n\nfunction component() {\n  var element = document.createElement('div');\n  element.classList.add('wrapper');\n  element.appendChild(ball()); // console.log(element);\n\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element.appendChild(button);\n  return element;\n}\n\nfunction startPlaying() {\n  var child = document.getElementsByClassName('main_button');\n  var parent = child[0].parentNode;\n  parent.removeChild(child[0]);\n}\n\nfunction kickBall(e) {\n  var kick = ball4.kick;\n  ball4.kick = !ball4.kick;\n  var child = document.getElementsByClassName('ball_wrapper');\n  var ballYAngle = ball4.top; // console.log('ballYAngle',ballYAngle);\n\n  var xlengthOnCCS = Math.floor(window.innerWidth * (Math.random() * 0.5 + 1));\n  var ylengthOnCCS = 2 * xlengthOnCCS / Math.PI; // console.log('ylengthOnCCS',ylengthOnCCS,\"xlengthOnCCS\",xlengthOnCCS);\n\n  var xlengthOnCCSinPI = Math.PI / xlengthOnCCS;\n  var mathSinValue = 0;\n  var id = setInterval(movingBall, 10);\n\n  function movingBall() {\n    if (child[0].offsetLeft + 126 >= window.innerWidth || child[0].offsetLeft == 20) {\n      ball4.direction = ball4.direction * -1;\n    }\n\n    if (ball4.kick === kick) {\n      console.log(\"wyłaczyłemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm\");\n      console.log(\"ball4.kick\", ball4.kick);\n      console.log(\"kick\", kick);\n      clearInterval(id);\n    } else if (ball4.top < window.innerHeight - 90) {\n      ball4.left = ball4.left + ball4.direction;\n      ball4.top = ballYAngle - ylengthOnCCS * sinFifthGrade(mathSinValue);\n      child[0].setAttribute(\"style\", \"left:\".concat(ball4.left, \"px;top:\").concat(ball4.top, \"px;\"));\n      mathSinValue = mathSinValue + xlengthOnCCSinPI;\n      console.log(\"mathSinValue\", mathSinValue);\n    } else {\n      clearInterval(id);\n      createStartBtn();\n    }\n  } // end of movingBall\n\n}\n\nfunction sinFifthGrade(x) {\n  return x - Math.pow(x, 3) / strong(3) - Math.pow(x, 5) / strong(5);\n}\n\nfunction strong(n) {\n  if (n == 0 || n == 1) return 1;else {\n    var result = n * strong(n - 1);\n    return result;\n  }\n}\n\nfunction createStartBtn() {\n  var element = document.getElementsByClassName('wrapper');\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element[0].appendChild(button);\n}\n\nfunction stopFalling() {\n  clearInterval(initialInterval);\n}\n\nfunction ball() {\n  var ball = document.createElement('div');\n  ball.addEventListener('click', kickBall);\n  ball.classList.add('ball_wrapper');\n  ball.setAttribute(\"style\", \"left:\".concat(ball4.left, \"px;top:\").concat(ball4.top, \"px;\"));\n  var innerBall = document.createElement('div');\n  innerBall.classList.add(\"inner-ball_wrapper\");\n  ball.appendChild(innerBall);\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})