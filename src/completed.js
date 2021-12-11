const checkBox = (index, items) => {
  items[index].completed = !items[index].completed;
  localStorage.localData = JSON.stringify(items);
};

export default function addCheckboxEvents(items) {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      checkBox(index, items);
    });
  });
}