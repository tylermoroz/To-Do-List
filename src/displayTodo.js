import { todoArray } from "./createTodo.js";
import { todoDiv } from "./index.js";

const priorityColor = (i, todo) => {
  if (todoArray[i].priority == "0") {
    todo.style.backgroundColor = "#6bed7c";
  } else if (todoArray[i].priority == "1") {
    todo.style.backgroundColor = "#f2f074";
  } else if (todoArray[i].priority == "2") {
    todo.style.backgroundColor = "#f75252";
  }
};

const displayTodo = () => {
  for (let i = 0; i < todoArray.length; i++) {
    const todoObject = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    // const priority = document.createElement("p");
    const notes = document.createElement("p");
    const complete = document.createElement("p");

    title.textContent = todoArray[i].title;
    description.textContent = todoArray[i].description;
    dueDate.textContent = todoArray[i].dueDate;
    // priority.textContent = todoArray[i].priority;
    notes.textContent = todoArray[i].notes;
    complete.textContent = todoArray[i].complete;

    priorityColor(i, todoObject);

    todoObject.classList.add("todo-object");

    todoDiv.appendChild(todoObject);
    todoObject.appendChild(title);
    todoObject.appendChild(description);
    todoObject.appendChild(dueDate);
    todoObject.appendChild(priority);
    todoObject.appendChild(notes);
    todoObject.appendChild(complete);
    console.log(todoObject, todoArray[i]);
  }
};

export { displayTodo };
