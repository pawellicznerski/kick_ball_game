import _ from 'lodash';
import './style.css';
import ball from './ball.js';

function component() {
  var element = document.createElement('div');
  element.classList.add('wrapper');
  element.appendChild(ball());

  return element;
}

document.body.appendChild(component());
