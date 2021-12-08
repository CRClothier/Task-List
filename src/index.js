import _ from 'lodash';
import './style.css';

const items = [
  {
    description: 'Eat hamburgers',
    completed: false,
    index: 1,
  },
  {
    description: 'Steal neighbours dog',
    completed: false,
    index: 3,
  },
  {
    description: 'Become millionaire',
    completed: false,
    index: 2,
  },
];

const compare = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

const list = document.getElementById('todolist');

const createList = () => {
  items.sort(compare);
  items.forEach((item) => {
    list.innerHTML += `<div class="item"><input type="checkbox"><p>${item.description}</p><i class="fas fa-ellipsis-v"></i></div>`;
  });
};

createList();