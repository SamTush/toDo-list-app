import {
  tasksArray,
  saveToLocalStorage,
  addTask,
  removeTask,
  EditTask,
  removeAllCompleted,
} from './appfunctions.js';

describe('Task Manager', () => {
  beforeEach(() => {
    localStorage.clear();
    tasksArray.length = 0;
  });

  test('Adding a task', () => {
    const taskInput = { value: 'Task 1' };
    addTask(taskInput);
    expect(tasksArray.length).toBe(1);
    expect(tasksArray[0].description).toBe('Task 1');
  });

  test('Removing a task', () => {
    tasksArray.push({ description: 'Task 1', completed: false, index: 0 });
    saveToLocalStorage();
    removeTask(tasksArray[0]);
    expect(tasksArray.length).toBe(0);
  });

  test('Editing a task', () => {
    tasksArray.push({ description: 'Task 1', completed: false, index: 0 });
    saveToLocalStorage();
    const taskInput = { value: 'Task 1 edited', closest: () => ({ id: 'task-0' }) };
    EditTask(taskInput);
    expect(tasksArray[0].description).toBe('Task 1 edited');
  });

  test('Removing all completed tasks', () => {
    tasksArray.push(
      { description: 'Task 1', completed: true, index: 0 },
      { description: 'Task 2', completed: false, index: 1 },
      { description: 'Task 3', completed: true, index: 2 },
    );
    saveToLocalStorage();
    removeAllCompleted();
    expect(tasksArray.length).toBe(1);
    expect(tasksArray[0].description).toBe('Task 2');
  });
});
