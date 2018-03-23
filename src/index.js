import _ from 'lodash';
import './style.css';
// import ball from './ball.js';
class Ball{
  constructor(top,left,height){
    this.top=top;
    this.left=left;
    this.high=height;
  }
  giveTop(){
    return this.top;
  }
}

let ball4 = new Ball(0,0);
console.log("from ball4",ball4.giveTop());

function component() {
  const element = document.createElement('div');
  element.classList.add('wrapper');
  element.appendChild(ball());
  console.log(element);
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='START';
  button.addEventListener('click',startPlaying);
  element.appendChild(button);
  return element;
}

function startPlaying(){
  ball4.height = 1500;
  const child = document.getElementsByClassName('main_button');
  const parent = child[0].parentNode;
  parent.removeChild(child[0]);
  const ball = document.getElementsByClassName('ball_wrapper');
  ball[0].setAttribute("style",`left:${ball4.left}px;top:${ball4.top}px;`);
  fallingBall();
}


function kickBall(e){
  const ballXAngle = e.clientX-e.layerX;
  const xlengthOnCCS = Math.floor(window.innerWidth*((Math.random()*0.5)+0.5));
  const minXvalueOnCCS = ballXAngle>(xlengthOnCCS*0.4)?ballXAngle-(xlengthOnCCS*0.4):0;
  const begininOfCCS = minXvalueOnCCS+((ballXAngle-minXvalueOnCCS)*Math.random());
  const xValueOnCCS= ballXAngle-begininOfCCS;
  const valForMathSin =xValueOnCCS/xlengthOnCCS;

  // console.log(e);
  // console.log("clientX",e.clientX,'e.layerX',e.layerX,"ballXAngle",ballXAngle);
  // console.log("xlengthOnCCS",xlengthOnCCS);
  // console.log("minXvalueOnCCS",minXvalueOnCCS);
  // console.log("begininOfCCS",begininOfCCS);
  // console.log("xValueOnCCS",xValueOnCCS);
  // console.log('valForMathSin',valForMathSin);
  const child = document.getElementsByClassName('ball_wrapper');
}

function fallingBall(){
  const child = document.getElementsByClassName('ball_wrapper');
  const id = setInterval(movingBall,8);
  function movingBall(){
    if(ball4.top<window.innerHeight-60){
      ball4.top = ball4.top + 1;
      child[0].setAttribute("style",`left:${ball4.left};top:${ball4.top}px;`);
    } else {
      clearInterval(id);
      createStartBtn();
    }
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
  ball.setAttribute("style","left:45%;top:0px;")
  return ball;
}


document.body.appendChild(component());
