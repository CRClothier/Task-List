const saveLocalData = (items) => {
  const localData = JSON.stringify(items);
  localStorage.localData = localData;
};

export default function addCheckboxEvents(items) {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      console.log('checeo');
      items[index].completed = !items[index].completed;
      saveLocalData(items);
    });
  });
}