import { saveLocalData } from './completed.js';

const compare = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

const createList = (items) => {
  items.sort(compare);
  let updatedTasks = '';
  items.forEach((item) => {
    let checked = '';
    if (item.completed) {
      checked = ' checked';
    }
    updatedTasks += `<div class="item${checked}"><input class="checkbox" value="${item.index}" type="checkbox"${checked}><input class="taskText" type="text" value="${item.description}"><i class="fas fa-ellipsis-v"></i></div>`;
  });
  const list = document.getElementById('todolist');
  list.innerHTML = updatedTasks;
};

function addTask(items) {
  const input = document.querySelector('.add');
  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const newTask = {
        description: input.value,
        completed: false,
        index: items.length + 1,
      };
      items.push(newTask);
      createList(items);
      input.value = '';
      saveLocalData(items);
    }
  });
}

function editDescriptions(items) {
  const taskDescriptions = document.querySelectorAll('.taskText');
  taskDescriptions.forEach((task, index) => {
    task.addEventListener('input', () => {
      items[index].description = task.value;
      saveLocalData(items);
    });
  });
}

export { addTask, createList, editDescriptions };