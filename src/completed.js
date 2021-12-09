const saveLocalData = (items) => {
  const localData = JSON.stringify(items);
  localStorage.localData = localData;
};

function addCheckboxEvents(items) {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      items[index].completed = !items[index].completed;
      saveLocalData(items);
    });
  });
}

export { saveLocalData, addCheckboxEvents };