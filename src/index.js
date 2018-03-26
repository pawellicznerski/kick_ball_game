import './style.css';
//creating contructor for ball object
class Ball{
  constructor(top,left,height){
    this.top=top;
    this.left=left;
    this.high=1.6;
    this.speed=5;
    this.direction=1;
    this.kick=false;
    this.scoreText=false;
  }
}
//creating initial starting point for theball
const initialX=40;
const initialY=245;
//creating the ball obj
let ball4 = new Ball(initialY,initialX,0);
//creating main component with all html elements
function component() {
  //main div
  const element = document.createElement('div');
  element.classList.add('wrapper');
  // main button
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='PLAY A NEW GAME';
  button.addEventListener('click',startPlaying);
  element.appendChild(button);
  //score table
  const scoreText = document.createElement('div');
  scoreText.classList.add('scoreText');
  scoreText.innerHTML='Score: '+0;
  element.appendChild(scoreText);
  //changing speed parameter in case of screen,s different width
  if(window.innerWidth>700){
    ball4.speed=5;
  } else if(window.innerWidth>450){
    ball4.speed=8;
  } else {
    ball4.speed=9;
  }
  return element;
}
//action triggered when main button clicked
function startPlaying(){
  //removing button
  const child = document.getElementsByClassName('main_button');
  const parent = child[0].parentNode;
  parent.removeChild(child[0]);
  //setting score to 0
  ball4.scoreText=0;
  //if ball already exist we just add kickBall event to it otherwise we create a new ball element
  const ballEl =document.getElementsByClassName('ball_wrapper');
  if(ballEl.length>0){
    ballEl[0].addEventListener('click',kickBall);
  } else{
    parent.appendChild(createBall());
  };
  //if the gameOverText exist remove it
  const gameOverText =document.getElementsByClassName('gameOverText');
  if(gameOverText.length>0){
    const gameOverTextParent = gameOverText[0].parentNode;
    gameOverTextParent.removeChild(gameOverText[0]);
  };
  //now we can trigger main action
  kickBall(false)
}
//each time ball is kicked the score is incrementing
function incrementScore(val){
  ball4.scoreText=val?ball4.scoreText+1:0;
  const scoreText = document.getElementsByClassName('scoreText');
  scoreText[0].innerHTML=`Score: ${ball4.scoreText}`;
}

//main function triggered when ball is kisked
function kickBall(val){
  //triggering increment function
  incrementScore(val);
  //creating var and changing val of kick in order to disable previous setinterval
  const kick = ball4.kick;
  ball4.kick= !ball4.kick
  //random direction (left or right) each time ball is kicked
  ball4.direction= Math.random()-0.5<=0?-1:1;
  //grabbing ball element to change attributes of left and top later on
  const child = document.getElementsByClassName('ball_wrapper');
  //saving in const initial value of top
  const ballYAngle = ball4.top;
  //random x value for the sinus function
  const xlengthOnCCS = Math.floor(window.innerWidth*((Math.random()*0.5)+0.2));
  //seting x value for the sinus function based on x value
  const ylengthOnCCS= ball4.high*xlengthOnCCS/Math.PI;
  //changing pixels of x value to PI in order to add it xInPiForSinFn each time the ball moves
  const xlengthOnCCSinPI = Math.PI/xlengthOnCCS;
  //setting initial value of x in Pi to pass it to sinus function
  let xInPiForSinFn=0;
  //starting intervals
  const id = setInterval(movingBall,ball4.speed);
  //main function in interval
  function movingBall(){
    //changing dirction if the ball hits wall
    if(child[0].offsetLeft+281>=window.innerWidth||child[0].offsetLeft<=-70){
      ball4.direction = ball4.direction*(-1);
    }
    //disable interval in case the ball is kicked one more time
    if(ball4.kick===kick){
      clearInterval(id);
    } else if(ball4.top<window.innerHeight-228){
      //moving ball verticallly
      ball4.left = ball4.left + ball4.direction;
      //moving ball horizontally
      ball4.top = ballYAngle-(ylengthOnCCS*sinThirdGrade(xInPiForSinFn));
      //setting ne top and left values
      child[0].setAttribute("style",`left:${ball4.left}px;top:${ball4.top}px;`);
      //incrementing x in PI value passed to sinus function in Y
      xInPiForSinFn=xInPiForSinFn+xlengthOnCCSinPI;
      //in case the ball falls down game over
    } else{
      clearInterval(id);
      showGameOverInfo();
    }
  }// end of movingBall
}
//setting sinus value
function sinThirdGrade(x){
  return x-(Math.pow(x,3)/strong(3))-(Math.pow(x,5)/strong(5))
}
//stting strong value
function strong(n) {
   if ((n == 0) || (n == 1))
      return 1
   else {
      let result = (n * strong(n-1) );
      return result
   }
}
//function triggered when game is over
function showGameOverInfo(){
  //creating game over info and adding it to the main el
  const element = document.getElementsByClassName('wrapper');
  const gameOverText = document.createElement('p');
  gameOverText.classList.add('gameOverText');
  gameOverText.innerText=`Game over. Your score is ${ball4.scoreText}`;
  element[0].appendChild(gameOverText);
  // creating main btn
  createStartBtn();
}
//function which creates main btn
function createStartBtn(){
  // creating main btn and adding it to the main el
  const element = document.getElementsByClassName('wrapper');
  const button = document.createElement('button');
  button.classList.add('main_button');
  button.innerHTML='START';
  button.addEventListener('click',startPlaying);
  element[0].appendChild(button);
  //removing the main event from the ball
  const ball = document.getElementsByClassName('ball_wrapper');
  ball[0].removeEventListener('click',kickBall);
  // settin initial values of the ball in case player wants to play one more time
  ball4.top=initialY;
  ball4.left=initialX;

}
//a funtion which creates the ball
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
