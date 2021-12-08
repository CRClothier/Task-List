import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hellay', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());