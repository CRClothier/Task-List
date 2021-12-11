import { createList } from './addtask.js';

export default function clearAll(items) {
  const checkedTasks = [];
  const deleteButton = document.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].completed === true) {
        checkedTasks.push(items[i]);
      }
    }
    items = items.filter((x) => !checkedTasks.includes(x));
    createList(items);
  });
}