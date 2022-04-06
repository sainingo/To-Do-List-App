/**
 * @jest-environment jsdom
 */
import Task from './tasks.js';
import displayTask from './displayTask.js';
import 'jest-localstorage-mock';

const taskObj = new Task();

describe('Should Add and displayTask method & Localstorage', () => {
  window.localStorage = Storage.prototype;
  test('should add and displayContent', () => {
    taskObj.addNewTask('Test1');
    document.body.innerHTML = `
    <div class="todo-list"></div>
    `;
    displayTask();
    expect(taskObj.tasks).toHaveLength(1);
  });

  test('Should add to the localstorage', () => {
    JSON.parse(localStorage.getItem('tasks'));
    expect(localStorage).toHaveLength(1);
  });
});

describe('Should display', () => {

});