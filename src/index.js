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
  }
  giveTop(){
    return this.top;
  }
}

let ball4 = new Ball(160,60,0);
// console.log("from ball4",ball4.giveTop());

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
  // ball4.left=0;
  // ball4.top=0;
  const child = document.getElementsByClassName('main_button');
  const parent = child[0].parentNode;
  parent.removeChild(child[0]);
  // kickBall();
}


function kickBall(e){
  const child = document.getElementsByClassName('ball_wrapper');

  // const ballXAngle = e.clientX-e.layerX;
  const ballYAngle = ball4.top;
  console.log('ballYAngle',ballYAngle);
  const xlengthOnCCS = Math.floor(window.innerWidth*((Math.random()*0.5)+1));
  // const minXvalueOnCCS =ballXAngle-xlengthOnCCS*0.3;
  // const begininOfCCS = minXvalueOnCCS+((ballXAngle-minXvalueOnCCS)*Math.random());
  // const xValueOnCCS= ballXAngle-begininOfCCS;
  // const valForMathSin =xValueOnCCS/xlengthOnCCS;
  // const initialX = valForMathSin?valForMathSin*Math.PI:0;
  // console.log('initialX',initialX);
  // console.log("clientX",e.clientX,'e.layerX',e.layerX,"ballXAngle",ballXAngle);
  // console.log("xlengthOnCCS",xlengthOnCCS);
  // console.log("minXvalueOnCCS",minXvalueOnCCS);
  const ylengthOnCCS= 2*xlengthOnCCS/Math.PI;
  console.log('ylengthOnCCS',ylengthOnCCS,"xlengthOnCCS",xlengthOnCCS);


  // console.log("begininOfCCS",begininOfCCS);
  // console.log("xValueOnCCS",xValueOnCCS);
  // console.log('valForMathSin',valForMathSin);
  // const speed = 1;
  const lengthPiIdxX = Math.PI/xlengthOnCCS;
  // const lengthPiIdxXPlus = lengthPiIdxX;
  let mathSinValue=0;
  const id = setInterval(movingBall,10);
  // let direction =1;
  function movingBall(){
    if(child[0].offsetLeft+71>=window.innerWidth||child[0].offsetLeft==0){
      ball4.direction = ball4.direction*(-1);
    } 
    if(ball4.top<window.innerHeight-60){
      ball4.left = ball4.left + ball4.direction;
      ball4.top = ballYAngle-(ylengthOnCCS*sinFifthGrade(mathSinValue));
      // console.log('ball4.top ',ball4.top );
      // // console.log('ylengthOnCCS',ylengthOnCCS,"xlengthOnCCS",xlengthOnCCS);
      // console.log('sinFifthGrade(mathSinValue)',sinFifthGrade(mathSinValue));
      child[0].setAttribute("style",`left:${ball4.left}px;top:${ball4.top}px;`);
      mathSinValue=mathSinValue+lengthPiIdxX;
      console.log("mathSinValue",mathSinValue);
    } else {
      clearInterval(id);
      createStartBtn();
    }
  }
}

function sinFifthGrade(x){
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
  return ball;
}


document.body.appendChild(component());
