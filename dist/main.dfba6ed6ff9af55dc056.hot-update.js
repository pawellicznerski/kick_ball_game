webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import ball from './ball.js';\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball(top, left, height) {\n    _classCallCheck(this, Ball);\n\n    this.top = top;\n    this.left = left;\n    this.high = height;\n  }\n\n  _createClass(Ball, [{\n    key: \"giveTop\",\n    value: function giveTop() {\n      return this.top;\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar ball4 = new Ball(0, 0);\nconsole.log(\"from ball4\", ball4.giveTop());\n\nfunction component() {\n  var element = document.createElement('div');\n  element.classList.add('wrapper');\n  element.appendChild(ball());\n  console.log(element);\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element.appendChild(button);\n  return element;\n}\n\nfunction startPlaying() {\n  ball4.height = 1500;\n  var child = document.getElementsByClassName('main_button');\n  var parent = child[0].parentNode;\n  parent.removeChild(child[0]);\n  var ball = document.getElementsByClassName('ball_wrapper');\n  ball[0].setAttribute(\"style\", \"left:45%;top:0px;\");\n  fallingBall();\n}\n\nfunction kickBall(e) {\n  // window.innerwidth\n  // ball4.height=ball4.height+1;\n  // console.log(ball4.height);\n  console.log(e);\n  console.log(\"clientX\", e.clientX); // console.log(window.innerWidth);\n  // console.log(window.innerHeight);\n  // console.log(begininOfCCS);\n\n  var xlengthOnCCS = Math.floor(window.innerWidth * (Math.random() * 0.5 + 0.5));\n  console.log(\"xlengthOnCCS\", xlengthOnCCS);\n  var minXvalue = e.clientX > xlengthOnCCS * 0.4 + 60 ? e.clientX - (xlengthOnCCS * 0.4 + 60) : 0; // const maxXvalue = e.clientX>60?e.clientX-60:0;\n  // console.log('min/max',minXvalue);\n  // console.log('xlengthOnCCS',xlengthOnCCS);\n\n  var begininOfCCS = minXvalue + (e.clientX - minXvalue) * Math.random() + e.layerX;\n  console.log(\"begininOfCCS\", begininOfCCS);\n  var xValueOnCCS = e.clientX - begininOfCCS;\n  var sinValueofX = xValueOnCCS / xlengthOnCCS;\n  console.log('sinValueofX', sinValueofX);\n  var child = document.getElementsByClassName('ball_wrapper'); //\n  // let i=0;\n  // let id2 = setInterval(goUp,8);\n  // function goUp(){\n  //   if(i<50){\n  //     const currentPix = parseInt(child[0].style.top) - 3;\n  //     child[0].setAttribute(\"style\",`left:45%;top:${currentPix}px;`);\n  //     i++;\n  //   } else {\n  //     clearInterval(id2);\n  //   }\n  // }\n}\n\nfunction kupa(j) {\n  return j + 10;\n}\n\nfunction fallingBall() {\n  var child = document.getElementsByClassName('ball_wrapper'); // let ballGoesUp = 0;\n  // function kickBall(){\n  //   ballGoesUp=50;\n  // }\n\n  var currentPix = 0;\n  var j = 2;\n  var id = setInterval(movingBall, 8);\n\n  function movingBall() {\n    // console.log(\"currentPix\",currentPix, window.innerHeight-60);\n    var currentPix = parseInt(child[0].style.top);\n\n    if (currentPix < window.innerHeight - 60) {\n      var updatedPix = parseInt(child[0].style.top) + 1;\n      child[0].setAttribute(\"style\", \"left:45%;top:\".concat(updatedPix, \"px;\"));\n    } else {\n      clearInterval(id); // const element = document.getElementsByClassName('wrapper');\n      // console.log(element);\n\n      createStartBtn();\n    }\n  }\n}\n\nfunction createStartBtn() {\n  var element = document.getElementsByClassName('wrapper');\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element[0].appendChild(button);\n}\n\nfunction stopFalling() {\n  clearInterval(initialInterval);\n}\n\nfunction ball() {\n  var ball = document.createElement('div');\n  ball.addEventListener('click', kickBall);\n  ball.classList.add('ball_wrapper');\n  ball.setAttribute(\"style\", \"left:45%;top:0px;\");\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})