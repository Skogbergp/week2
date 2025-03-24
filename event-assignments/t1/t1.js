// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ulList = document.querySelector('ul');

todoList.forEach(todo => {
  const li = document.createElement('li');
  const label = document.createElement('label');

  label.textContent = todo.task;
  label.htmlFor = 'todo-' + todo.id;

  const input = document.createElement('input');
  input.id = 'todo-' + todo.id;
  input.type = 'checkbox';

  todo.completed ? input.setAttribute('checked', 'checked') : null;

  li.appendChild(input);
  li.appendChild(label);
  ulList.appendChild(li);
});
// add your code here
