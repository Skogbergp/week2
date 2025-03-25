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
  const checkedAttribute = todo.completed ? 'checked' : '';
  const todoHTML = `
    <li>
      <input id="todo-${todo.id}" type="checkbox" ${checkedAttribute}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>
  `;
  ulList.insertAdjacentHTML('beforeend', todoHTML);
});
// add your code here
