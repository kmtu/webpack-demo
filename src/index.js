import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
  let element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  let myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  let credit = document.createElement('p');
  let creditLink = document.createElement('a');
  let txtNode = document.createTextNode(' by Icon8');
  creditLink.href = 'https://icons8.com/icon/12244/Idea';
  creditLink.textContent = 'Idea icon';
  credit.appendChild(creditLink);
  credit.appendChild(txtNode);

  element.appendChild(credit);

  return element;
}

document.body.appendChild(component());
