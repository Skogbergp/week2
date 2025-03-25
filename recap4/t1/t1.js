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
const addButton = document.querySelector('.add-btn');
const modal = document.createElement("dialog");
const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("button");
input.type = "text";
input.placeholder = "Enter your task";
submit.textContent = "Save";

submit.addEventListener('click', function(event) {

  event.preventDefault();
  todoList.push({
    id: todoList.length + 1,
    task: input.value,
    completed: false
  });
  console.log(todoList);
  modal.close();
  input.value = '';
  createList();
});

document.body.appendChild(modal);
modal.appendChild(form);
form.appendChild(input);
form.appendChild(submit);
addButton.addEventListener('click', function() {
  modal.showModal();
});
function createList(){
  ulList.innerHTML = '';

  todoList.forEach(todo => {
  const li = document.createElement('li');
  const label = document.createElement('label');

  label.textContent = todo.task;
  label.htmlFor = 'todo-' + todo.id;

  const input = document.createElement('input');
  input.id = 'todo-' + todo.id;
  input.type = 'checkbox';

  todo.completed ? input.setAttribute('checked', 'checked') : null;
  input.addEventListener('change', function() {
      if (todo.completed) {
          todo.completed = false;
      }else {
          todo.completed = true;
      }
      console.log(todoList);
  });
  button = document.createElement('button');
  button.textContent = 'Delete';
  button.addEventListener('click', function() {
    ulList.removeChild(li);
    todoList.splice(todoList.indexOf(todo), 1);
    console.log(todoList);
  });
  li.appendChild(button);

  li.appendChild(input);
  li.appendChild(label);
  ulList.appendChild(li);
});
}
createList();
// add your code here
