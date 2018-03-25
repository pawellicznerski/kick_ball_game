import _ from 'lodash';
import './style.css';

class Ball{
  constructor(top,left,height){
    this.top=top;
    this.left=left;
    this.high=height;
    this.speed=1;
    this.direction=this.speed*1;
    this.kick=false;
    this.score=false;
  }
}

const initialX=60;
const initialY=245;
let ball4 = new Ball(initialX,initialY,0);

function component() {
  const element = document.createElement('div');
  element.classList.add('wrapper');
  // console.log(element);
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='PLAY A NEW GAME';
  button.addEventListener('click',startPlaying);
  element.appendChild(button);

  const score = document.createElement('div');
  score.classList.add('score');
  score.innerHTML=`Score: `+0;
  element.appendChild(score);
  return element;
}

function startPlaying(){
  const child = document.getElementsByClassName('main_button');
  const parent = child[0].parentNode;
  parent.removeChild(child[0]);

  ball4.score=0;

  const ballEl =document.getElementsByClassName('ball_wrapper');
  console.log(ballEl.length);
  if(ballEl.length>0){
    ballEl[0].addEventListener('click',kickBall);
  } else{
    parent.appendChild(createBall());
  };

  const text =document.getElementsByClassName('text');
  if(text.length>0){
    const textParent = text[0].parentNode;
    textParent.removeChild(text[0]);
  };

  kickBall(false)
}

function incrementScore(val){
  ball4.score=val?ball4.score+1:0;
  const score = document.getElementsByClassName('score');
  score[0].innerHTML=`Score: ${ball4.score}`;
}


function kickBall(val){
  // console.log(ball4.score);

  const fdfd= 0;
  incrementScore(val);
  const kick = ball4.kick;
  ball4.kick= !ball4.kick

  ball4.direction= Math.random()-0.5<=0?-1:1;

  const child = document.getElementsByClassName('ball_wrapper');
  const ballYAngle = ball4.top;
  // console.log('ballYAngle',ballYAngle);
  const xlengthOnCCS = Math.floor(window.innerWidth*((Math.random()*0.5)+0.2));
  const ylengthOnCCS= 1.6*xlengthOnCCS/Math.PI;
  // console.log('ylengthOnCCS',ylengthOnCCS,"xlengthOnCCS",xlengthOnCCS);
  const xlengthOnCCSinPI = Math.PI/xlengthOnCCS;
  let xInPiForSinFn=0;
  const id = setInterval(movingBall,5);
  function movingBall(){
    console.log(child[0].offsetLeft);
    console.log(window.innerWidth);
    if(child[0].offsetLeft+281>=window.innerWidth||child[0].offsetLeft<=-70){
      ball4.direction = ball4.direction*(-1);
    }
    if(ball4.kick===kick){
      clearInterval(id);
    } else if(ball4.top<window.innerHeight-228){
      ball4.left = ball4.left + ball4.direction;
      ball4.top = ballYAngle-(ylengthOnCCS*sinThirdGrade(xInPiForSinFn));
      child[0].setAttribute("style",`left:${ball4.left}px;top:${ball4.top}px;`);
      xInPiForSinFn=xInPiForSinFn+xlengthOnCCSinPI;
      // console.log("xInPiForSinFn",xInPiForSinFn);
    } else{
      clearInterval(id);
      showGameOverInfo();
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
function showGameOverInfo(){
  const element = document.getElementsByClassName('wrapper');
  // const gameOverInfo = document.createElement('div');
  // element.appendChild(gameOverInfo);

  const text = document.createElement('p');
  text.classList.add('text');
  text.innerText=`Game over. Your score is ${ball4.score}`;
  element[0].appendChild(text);
  createStartBtn();
}

function createStartBtn(){
  const element = document.getElementsByClassName('wrapper');
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='START';
  button.addEventListener('click',startPlaying);
  element[0].appendChild(button);

  const ball = document.getElementsByClassName('ball_wrapper');
  ball[0].removeEventListener('click',kickBall);

  ball4.top=initialY;
  ball4.left=initialX;

}

function stopFalling(){
    clearInterval(initialInterval);
}



function createBall() {
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
