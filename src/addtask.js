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
    updatedTasks += `<div class="item${checked}"><input class="checkbox" value="${item.index}" type="checkbox"${checked}><input class="taskText" type="text" value="${item.description}"><i class="far fa-trash-alt"></i></div>`;
  });
  const list = document.getElementById('todolist');
  list.innerHTML = updatedTasks;
};

export default function deleteTask(items) {
  const deleteButtons = document.querySelectorAll('i');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      items.splice(index, 1);
      items.forEach((item, i) => {
        item.index = (i + 1);
      });
      localStorage.localData = JSON.stringify(items);
      createList(items);
    });
  });
}

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
      localStorage.localData = JSON.stringify(items);
    }
  });
}

export { addTask, createList, deleteTask };