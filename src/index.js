import './style.css';
import { addTask, createList } from './addtask.js';

let items = [];

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    items = JSON.parse(localStorage.localData);
  }
};

getLocalData();
createList(items);
addTask(items);