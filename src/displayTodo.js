import { todoArray } from "./createTodo.js";
import { todoDiv } from "./index.js";

const todoColor = (i, todo) => {
  if (todoArray[i].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (todoArray[i].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (todoArray[i].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
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

const resetChildNodes = () => {
  while (todoDiv.firstChild) {
    todoDiv.removeChild(todoDiv.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < todoArray.length; i++) {
    const todoObject = document.createElement("div");
    const title = document.createElement("h3");
    const priority = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const notes = document.createElement("p");
    const complete = document.createElement("button");

    title.textContent = todoArray[i].title;
    priority.textContent = priorityLevel(i);
    description.textContent = todoArray[i].description;
    dueDate.textContent = todoArray[i].dueDate;
    notes.textContent = todoArray[i].notes;
    complete.textContent = todoArray[i].complete;

    description.setAttribute("id", "description");
    notes.setAttribute("id", "notes");

    todoColor(i, todoObject);

    complete.addEventListener("click", () => {
      if (todoArray[i].complete == "complete") {
        todoArray[i].complete = "incomplete";
        complete.textContent = todoArray[i].complete;
      } else if (todoArray[i].complete == "incomplete") {
        todoArray[i].complete = "complete";
        complete.textContent = todoArray[i].complete;
      }
      console.log(todoArray);
    });

    todoObject.classList.add("todo-object");

    todoDiv.appendChild(todoObject);
    todoObject.appendChild(title);
    todoObject.appendChild(priority);
    todoObject.appendChild(description);
    todoObject.appendChild(dueDate);
    todoObject.appendChild(notes);
    todoObject.appendChild(complete);
  }
  console.log(todoArray);
};

export { displayTodo, resetChildNodes };
