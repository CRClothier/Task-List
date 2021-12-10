import './style.css';
import addCheckboxEvents from './completed.js';
import { addTask, createList, deleteTask } from './addtask.js';
import editDescriptions from './editDescription.js';

let items = [
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

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    items = JSON.parse(localStorage.localData);
  }
};

getLocalData();
createList(items);
addTask(items);
addCheckboxEvents(items);
editDescriptions(items);
deleteTask(items);