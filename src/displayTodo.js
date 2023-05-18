import { todoArray } from "./createTodo.js";
import { todoDiv } from "./index.js";

const todoColor = (i, todo) => {
  if (todoArray[i].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #6bed7c";
  } else if (todoArray[i].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #f2f074";
  } else if (todoArray[i].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #f75252";
  }
};

const priorityLevel = (i) => {
  if (todoArray[i].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (todoArray[i].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (todoArray[i].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

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
    priority.textContent = priorityLevel(i);
    notes.textContent = todoArray[i].notes;
    complete.textContent = todoArray[i].complete;

    todoColor(i, todoObject);

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
