webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function Ball(top, left, height) {\n  _classCallCheck(this, Ball);\n\n  this.top = top;\n  this.left = left;\n  this.high = height;\n  this.speed = 1;\n  this.direction = this.speed * 1;\n  this.kick = false;\n  this.score = false;\n};\n\nvar initialX = 60;\nvar initialY = 45;\nvar ball4 = new Ball(initialX, initialY, 0);\n\nfunction component() {\n  var element = document.createElement('div');\n  element.classList.add('wrapper'); // console.log(element);\n\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'PLAY A NEW GAME';\n  button.addEventListener('click', startPlaying);\n  element.appendChild(button);\n  var score = document.createElement('div');\n  score.classList.add('score');\n  score.innerHTML = \"Score: \" + 0;\n  element.appendChild(score);\n  return element;\n}\n\nfunction startPlaying() {\n  var child = document.getElementsByClassName('main_button');\n  var parent = child[0].parentNode;\n  parent.removeChild(child[0]);\n  ball4.score = 0;\n  var ballEl = document.getElementsByClassName('ball_wrapper');\n  console.log(ballEl.length);\n\n  if (ballEl.length > 0) {\n    ballEl[0].addEventListener('click', kickBall);\n  } else {\n    parent.appendChild(createBall());\n  }\n\n  ;\n  var text = document.getElementsByClassName('text');\n\n  if (text.length > 0) {\n    var textParent = text[0].parentNode;\n    textParent.removeChild(text[0]);\n  }\n\n  ;\n  kickBall(false);\n}\n\nfunction incrementScore(val) {\n  ball4.score = val ? ball4.score + 1 : 0;\n  var score = document.getElementsByClassName('score');\n  score[0].innerHTML = \"Score: \".concat(ball4.score);\n}\n\nfunction kickBall(val) {\n  // console.log(ball4.score);\n  incrementScore(val);\n  var kick = ball4.kick;\n  ball4.kick = !ball4.kick;\n  ball4.direction = Math.random() - 0.5 <= 0 ? -1 : 1;\n  var child = document.getElementsByClassName('ball_wrapper');\n  var ballYAngle = ball4.top; // console.log('ballYAngle',ballYAngle);\n\n  var xlengthOnCCS = Math.floor(window.innerWidth * (Math.random() * 0.2 + 1));\n  var ylengthOnCCS = 1 * xlengthOnCCS / Math.PI; // console.log('ylengthOnCCS',ylengthOnCCS,\"xlengthOnCCS\",xlengthOnCCS);\n\n  var xlengthOnCCSinPI = Math.PI / xlengthOnCCS;\n  var xInPiForSinFn = 0;\n  var id = setInterval(movingBall, 15);\n\n  function movingBall() {\n    if (child[0].offsetLeft + 170 >= window.innerWidth || child[0].offsetLeft <= -30) {\n      ball4.direction = ball4.direction * -1;\n    }\n\n    if (ball4.kick === kick) {\n      clearInterval(id);\n    } else if (ball4.top < window.innerHeight - 150) {\n      ball4.left = ball4.left + ball4.direction;\n      ball4.top = ballYAngle - ylengthOnCCS * sinThirdGrade(xInPiForSinFn);\n      child[0].setAttribute(\"style\", \"left:\".concat(ball4.left, \"px;top:\").concat(ball4.top, \"px;\"));\n      xInPiForSinFn = xInPiForSinFn + xlengthOnCCSinPI; // console.log(\"xInPiForSinFn\",xInPiForSinFn);\n    } else {\n      clearInterval(id);\n      showGameOverInfo();\n    }\n  } // end of movingBall\n\n}\n\nfunction sinThirdGrade(x) {\n  return x - Math.pow(x, 3) / strong(3) - Math.pow(x, 5) / strong(5);\n}\n\nfunction strong(n) {\n  if (n == 0 || n == 1) return 1;else {\n    var result = n * strong(n - 1);\n    return result;\n  }\n}\n\nfunction showGameOverInfo() {\n  var element = document.getElementsByClassName('wrapper'); // const gameOverInfo = document.createElement('div');\n  // element.appendChild(gameOverInfo);\n\n  var text = document.createElement('p');\n  text.classList.add('text');\n  text.innerText = \"Game over. Your score is \".concat(ball4.score);\n  element[0].appendChild(text);\n  createStartBtn();\n}\n\nfunction createStartBtn() {\n  var element = document.getElementsByClassName('wrapper');\n  var button = document.createElement('button');\n  button.classList.add('main_button');\n  button.innerHTML = 'START';\n  button.addEventListener('click', startPlaying);\n  element[0].appendChild(button);\n  var ball = document.getElementsByClassName('ball_wrapper');\n  ball[0].removeEventListener('click', kickBall);\n  ball4.top = initialY;\n  ball4.left = initialX;\n}\n\nfunction stopFalling() {\n  clearInterval(initialInterval);\n}\n\nfunction createBall() {\n  var ball = document.createElement('div');\n  ball.addEventListener('click', kickBall);\n  ball.addEventListener('ondoubleclick', kickBall);\n  ball.classList.add('ball_wrapper');\n  ball.setAttribute(\"style\", \"left:\".concat(ball4.left, \"px;top:\").concat(ball4.top, \"px;\"));\n  var innerBall = document.createElement('div');\n  innerBall.classList.add(\"inner-ball_wrapper\");\n  ball.appendChild(innerBall);\n  return ball;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})