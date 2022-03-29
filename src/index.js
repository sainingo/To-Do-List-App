import './styles.css';
import Task from './tasks.js';

const newTask = new Task();

const inputTask = document.querySelector('.input-task');
const todoList = document.querySelector('.todo-list');

function displayTask() {
  let template = '';
  const localData = JSON.parse(localStorage.getItem('tasks'));
  if (localData !== null) {
    localData.forEach((task) => {
      template += `<ul>
          <li><input type="checkbox"></li>
          <li>${task}</li>
          <li>&#8942;</li>
      </ul>
      <hr>`;
      todoList.innerHTML = template;
    });
  }
}

inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const inputValue = inputTask.value;
    inputTask.value = '';
    newTask.addNewTask(inputValue);
  }
  displayTask();
});

displayTask();