import { submit, completeInput } from "./todoForm.js";
import { displayTodo, resetChildNodes } from "./displayTodo.js";
import { projectTodos } from "./newProject.js";

let todoArray = [];

const Todo = (title, description, dueDate, priority, notes, complete) => {
  return { title, description, dueDate, priority, notes, complete };
};

const completeValue = (todo) => {
  if (completeInput.checked) {
    return (todo.complete = "complete");
  } else {
    return (todo.complete = "incomplete");
  }
};

const newTodo = (event) => {
  event.preventDefault();
  let todo = Todo();
  todo.title = document.getElementById("title").value;
  todo.description = document.getElementById("description").value;
  todo.dueDate = document.getElementById("due-date").value;
  todo.priority = document.getElementById("priority").value;
  todo.notes = document.getElementById("notes").value;
  todo.complete = completeValue(todo);
  todoArray.push(todo);
};

const pushToProject = () => {
  projectTodos.push(todoArray);
  console.log(projectTodos);
};

const createTodo = () => {
  submit.addEventListener("click", resetChildNodes);
  submit.addEventListener("click", newTodo);
  submit.addEventListener("click", pushToProject);
  submit.addEventListener("click", displayTodo);
};

export { createTodo, todoArray };
