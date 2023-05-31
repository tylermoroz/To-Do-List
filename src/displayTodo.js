import { projectTodos } from "./newProject.js";

const todoDiv = document.createElement("div");

const todoColor = (i, todo) => {
  if (projectTodos[i].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (projectTodos[i].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (projectTodos[i].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
  }
};

const priorityLevel = (i) => {
  if (projectTodos[i].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (projectTodos[i].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (projectTodos[i].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

const resetChildNodes = () => {
  while (todoDiv.firstChild) {
    todoDiv.removeChild(todoDiv.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < projectTodos.length; i++) {
    const todoObject = document.createElement("div");
    const title = document.createElement("h3");
    const priority = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const notes = document.createElement("p");
    const complete = document.createElement("button");

    title.textContent = projectTodos[i].title;
    priority.textContent = priorityLevel(i);
    description.textContent = projectTodos[i].description;
    dueDate.textContent = projectTodos[i].dueDate;
    notes.textContent = projectTodos[i].notes;
    complete.textContent = projectTodos[i].complete;

    description.setAttribute("id", "description");
    notes.setAttribute("id", "notes");

    todoColor(i, todoObject);

    complete.addEventListener("click", () => {
      if (projectTodos[i].complete == "complete") {
        projectTodos[i].complete = "incomplete";
        complete.textContent = projectTodos[i].complete;
      } else if (projectTodos[i].complete == "incomplete") {
        projectTodos[i].complete = "complete";
        complete.textContent = projectTodos[i].complete;
      }
      console.log(projectTodos);
    });

    todoObject.classList.add("todo-object");

    todoDiv.appendChild(todoObject);
    todoObject.appendChild(title);
    todoObject.appendChild(dueDate);
    todoObject.appendChild(priority);
    todoObject.appendChild(description);
    todoObject.appendChild(notes);
    todoObject.appendChild(complete);
  }
  console.log(projectTodos);
};

export { displayTodo, resetChildNodes, todoDiv };
