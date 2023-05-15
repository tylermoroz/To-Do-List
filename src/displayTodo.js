import { todoArray } from "./createTodo.js";
import { todoDiv } from "./index.js";

const displayTodo = () => {
  for (let i = 0; i < todoArray.length; i++) {
    const todoObject = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    const notes = document.createElement("p");
    const complete = document.createElement("p");

    title.textContent = todoArray[i].title;
    description.textContent = todoArray[i].description;
    dueDate.textContent = todoArray[i].dueDate;
    priority.textContent = todoArray[i].priority;
    notes.textContent = todoArray[i].notes;
    complete.textContent = todoArray[i].complete;

    todoDiv.appendChild(todoObject);
    todoObject.appendChild(title);
    todoObject.appendChild(description);
    todoObject.appendChild(dueDate);
    todoObject.appendChild(priority);
    todoObject.appendChild(notes);
    todoObject.appendChild(complete);
    console.log(todoObject);
  }
};

export { displayTodo };
