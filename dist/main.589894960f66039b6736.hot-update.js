webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import ball from './ball.js';\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball(top, left, height) {\n    _classCallCheck(this, Ball);\n\n    this.top = top;\n    this.left = left;\n    this.high = height;\n  }\n\n  _createClass(Ball, [{\n    key: \"giveTop\",\n    value: function giveTop() {\n      return this.top;\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar ball4 = new Ball(350, 0, 0);\nconsole.log(\"from ball4\", ball4.giveTop());\n\nfunction component() {\n  var element = document.createElement('div');\n  element.classList.add('wrapper');\n  element.appendChild(ball());\n  console.log(element);\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element.appendChild(button);\n  return element;\n}\n\nfunction startPlaying() {\n  // ball4.left=0;\n  // ball4.top=0;\n  var child = document.getElementsByClassName('main_button');\n  var parent = child[0].parentNode;\n  parent.removeChild(child[0]); // kickBall();\n}\n\nfunction kickBall(e) {\n  var child = document.getElementsByClassName('ball_wrapper');\n  var ballXAngle = e.clientX - e.layerX;\n  var xlengthOnCCS = Math.floor(window.innerWidth * (Math.random() * 0.5 + 0.5));\n  var minXvalueOnCCS = ballXAngle > xlengthOnCCS * 0.4 ? ballXAngle - xlengthOnCCS * 0.4 : 0;\n  var begininOfCCS = minXvalueOnCCS + (ballXAngle - minXvalueOnCCS) * Math.random();\n  var xValueOnCCS = ballXAngle - begininOfCCS;\n  var valForMathSin = xValueOnCCS / xlengthOnCCS; // console.log(e);\n\n  console.log(\"clientX\", e.clientX, 'e.layerX', e.layerX, \"ballXAngle\", ballXAngle); // console.log(\"xlengthOnCCS\",xlengthOnCCS);\n  // console.log(\"minXvalueOnCCS\",minXvalueOnCCS);\n  // console.log(\"begininOfCCS\",begininOfCCS);\n  // console.log(\"xValueOnCCS\",xValueOnCCS);\n  // console.log('valForMathSin',valForMathSin);\n\n  var id = setInterval(movingBall, 8);\n\n  function movingBall() {\n    if (ball4.top < window.innerHeight - 60) {\n      ball4.left = ball4.left + 1;\n      console.log(ball4.left);\n      console.log(ball4.top);\n      ball4.top = 100 * Math.sin(ball4.left);\n      child[0].setAttribute(\"style\", \"left:\".concat(ball4.left, \"px;top:\").concat(ball4.top, \"px;\"));\n    } else {\n      clearInterval(id);\n      createStartBtn();\n    }\n  }\n} // function fallingBall(){\n//   const child = document.getElementsByClassName('ball_wrapper');\n//   const id = setInterval(movingBall,8);\n//   function movingBall(){\n//     if(ball4.top<window.innerHeight-60){\n//       ball4.top = ball4.top + 1;\n//       child[0].setAttribute(\"style\",`left:${ball4.left};top:${ball4.top}px;`);\n//     } else {\n//       clearInterval(id);\n//       createStartBtn();\n//     }\n//   }\n//\n// }\n\n\nfunction createStartBtn() {\n  var element = document.getElementsByClassName('wrapper');\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element[0].appendChild(button);\n}\n\nfunction stopFalling() {\n  clearInterval(initialInterval);\n}\n\nfunction ball() {\n  var ball = document.createElement('div');\n  ball.addEventListener('click', kickBall);\n  ball.classList.add('ball_wrapper');\n  ball.setAttribute(\"style\", \"left:\".concat(ball4.left, \";top:\").concat(ball4.top, \"px;\"));\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})