import './styles.css';

const tasks = [
  {
    description: 'Practice leetcode algorithms and data structures',
    completed: false,
    index: 1,
  },
  {
    description: 'Afterwards set up for codewars algorithms and data structures',
    completed: false,
    index: 2,
  },
];

const todoListContainer = document.querySelector('.todo-list');

const todoContainer = tasks.map((task) => `
    <ul>
    <li><input type="checkbox"></li>
    <li>${task.description}</li>
    <li class="refresh-icon" >&#8942;</li>
    </ul>
    <hr>
    `).join('');

todoListContainer.innerHTML = todoContainer;
