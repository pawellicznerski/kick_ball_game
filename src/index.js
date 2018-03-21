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

function fallingBall(){
  const child = document.getElementsByClassName('ball_wrapper');
  // console.log(window.innerHeight-35);
  let sth=0;
  let id = setInterval(movingBall,3);

  function movingBall(){
    console.log(sth);
    if(sth<window.innerHeight-35){
      child[0].setAttribute("style",`left:45%;top:${sth}px;`);
      sth++;
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
  ball.classList.add('ball_wrapper');
  ball.setAttribute("style","left:45%;top:0px;")
  return ball;
}


document.body.appendChild(component());
