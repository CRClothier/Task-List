export default function editDescriptions(items) {
  const taskDescriptions = document.querySelectorAll('.taskText');
  taskDescriptions.forEach((task, index) => {
    task.addEventListener('input', () => {
      items[index].description = task.value;
      localStorage.localData = JSON.stringify(items);
    });
  });
}