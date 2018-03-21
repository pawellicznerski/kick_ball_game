import _ from 'lodash';
import './style.css';
// import ball from './ball.js';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  element.classList.add('wrapper');
  element.appendChild(ball());
  element.appendChild(button);

  button.classList.add('main_button');
  button.innerHTML='START';
  button.addEventListener('click',startPlaying);
  // element.appendChild(button);

  return element;
}

function startPlaying(){
  const child = document.getElementsByClassName('main_button');
  const parent = child[0].parentNode;
  parent.removeChild(child[0]);
  fallingBall();
}


function kickBall(){
  const child = document.getElementsByClassName('ball_wrapper');

  let i=0;
  let id2 = setInterval(goUp,8);
  function goUp(){
    if(i<50){
      const currentPix = parseInt(child[0].style.top) - 3;
      // console.log("top:",parseInt(child[0].style.top));
      // console.log("sth",sth);
      // console.log("currentPix",currentPix);
      child[0].setAttribute("style",`left:45%;top:${currentPix}px;`);
      i++;
    } else {
      clearInterval(id2);
    }
  }
}

function fallingBall(){
  const child = document.getElementsByClassName('ball_wrapper');
  // let ballGoesUp = 0;
  // function kickBall(){
  //   ballGoesUp=50;
  // }
  let currentPix=0;
  let id = setInterval(movingBall,8);
  function movingBall(){
    // console.log("currentPix",currentPix, window.innerHeight-65);
    let currentPix=parseInt(child[0].style.top);
    if(currentPix<window.innerHeight-65){
      const updatedPix = parseInt(child[0].style.top) + 1;
      // console.log("top:",parseInt(child[0].style.top));
      // console.log("sth",sth);
      // console.log("currentPix",currentPix, window.innerHeight-65);
      child[0].setAttribute("style",`left:45%;top:${updatedPix}px;`);
    } else {
      clearInterval(id);
      const button = document.createElement('button');
      const element = document.getElementsByClassName('wrapper');
      console.log(element);
      button.classList.add('main_button');
      button.innerHTML='START';
      button.addEventListener('click',startPlaying);
      element[0].appendChild(button);
    }
  }

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
