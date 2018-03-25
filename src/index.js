import _ from 'lodash';
import './style.css';
// import ball from './ball.js';
// document.addEventListener('click',function(e){
//   console.log(e.clientX);
// })
class Ball{
  constructor(top,left,height){
    this.top=top;
    this.left=left;
    this.high=height;
    this.speed=1;
    this.direction=this.speed*1;
    this.kick=false;
  }
}

let ball4 = new Ball(360,60,0);

function component() {
  const element = document.createElement('div');
  element.classList.add('wrapper');
  element.appendChild(ball());
  // console.log(element);
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='START';
  button.addEventListener('click',startPlaying);
  element.appendChild(button);
  return element;
}

function startPlaying(){
  const child = document.getElementsByClassName('main_button');
  const parent = child[0].parentNode;
  parent.removeChild(child[0]);
  kickBall()
}


function kickBall(){
  const kick = ball4.kick;
  ball4.kick= !ball4.kick

  ball4.direction= Math.random()-0.5<=0?-1:1;

  const child = document.getElementsByClassName('ball_wrapper');
  const ballYAngle = ball4.top;
  // console.log('ballYAngle',ballYAngle);
  const xlengthOnCCS = Math.floor(window.innerWidth*((Math.random()*0.5)+1));
  const ylengthOnCCS= 2*xlengthOnCCS/Math.PI;
  // console.log('ylengthOnCCS',ylengthOnCCS,"xlengthOnCCS",xlengthOnCCS);
  const xlengthOnCCSinPI = Math.PI/xlengthOnCCS;
  let xInPiForSinFn=0;
  const id = setInterval(movingBall,10);
  function movingBall(){
    if(child[0].offsetLeft+130>=window.innerWidth||child[0].offsetLeft<=-20){
      ball4.direction = ball4.direction*(-1);
    }
    if(ball4.kick===kick){
      clearInterval(id);
    } else if(ball4.top<window.innerHeight-112){
      ball4.left = ball4.left + ball4.direction;
      ball4.top = ballYAngle-(ylengthOnCCS*sinThirdGrade(xInPiForSinFn));
      child[0].setAttribute("style",`left:${ball4.left}px;top:${ball4.top}px;`);
      xInPiForSinFn=xInPiForSinFn+xlengthOnCCSinPI;
      // console.log("xInPiForSinFn",xInPiForSinFn);
    } else{
      clearInterval(id);
      createStartBtn();
    }
  }// end of movingBall
}

function sinThirdGrade(x){
  return x-(Math.pow(x,3)/strong(3))-(Math.pow(x,5)/strong(5))
}

function strong(n) {
   if ((n == 0) || (n == 1))
      return 1
   else {
      let result = (n * strong(n-1) );
      return result
   }
}

function createStartBtn(){
  const element = document.getElementsByClassName('wrapper');
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='START';
  button.addEventListener('click',startPlaying);
  element[0].appendChild(button);
}

function stopFalling(){
    clearInterval(initialInterval);
}



function ball() {
  const ball = document.createElement('div');
  ball.addEventListener('click',kickBall);
  ball.classList.add('ball_wrapper');
  ball.setAttribute("style",`left:${ball4.left}px;top:${ball4.top}px;`)
  const innerBall = document.createElement('div');
  innerBall.classList.add("inner-ball_wrapper");
  ball.appendChild(innerBall);
  return ball;
}


document.body.appendChild(component());
