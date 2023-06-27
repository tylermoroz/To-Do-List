import { projectsArray } from "./newProject.js";

const activeProjectContainer = document.createElement("div");
const activeProjectHead = document.createElement("div");
const activeProjectTodos = document.createElement("div");
const activeProjectTitle = document.createElement("p");

const todoColor = (i, j, todo) => {
  if (projectsArray[i].todos[j].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (projectsArray[i].todos[j].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (projectsArray[i].todos[j].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
  }
};

const priorityLevel = (i, j) => {
  if (projectsArray[i].todos[j].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (projectsArray[i].todos[j].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (projectsArray[i].todos[j].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

const resetChildNodes = () => {
  while (activeProjectTodos.firstChild) {
    activeProjectTodos.removeChild(activeProjectTodos.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      for (let j = 0; j < projectsArray[i].todos.length; j++) {
        const todoObject = document.createElement("div");
        const title = document.createElement("h3");
        const priority = document.createElement("p");
        const description = document.createElement("p");
        const dueDate = document.createElement("p");
        const notes = document.createElement("p");
        const complete = document.createElement("button");
        const expand = document.createElement("button");
        const deleteItem = document.createElement("button");

        title.textContent = projectsArray[i].todos[j].title;
        priority.textContent = priorityLevel(i, j);
        description.textContent = `Description: ${projectsArray[i].todos[j].description}`;
        dueDate.textContent = projectsArray[i].todos[j].dueDate;
        notes.textContent = `Notes: ${projectsArray[i].todos[j].notes}`;
        complete.textContent = projectsArray[i].todos[j].complete;
        expand.textContent = "⏬";
        deleteItem.textContent = "X";

        description.setAttribute("id", "description");
        notes.setAttribute("id", "notes");
        expand.setAttribute("id", "expand-btn");
        deleteItem.setAttribute("id", "delete-todo");

        todoColor(i, j, todoObject);

        complete.addEventListener("click", () => {
          if (projectsArray[i].todos[j].complete == "complete") {
            projectsArray[i].todos[j].complete = "incomplete";
            complete.textContent = projectsArray[i].todos[j].complete;
          } else if (projectsArray[i].todos[j].complete == "incomplete") {
            projectsArray[i].todos[j].complete = "complete";
            complete.textContent = projectsArray[i].todos[j].complete;
          }
        });

        expand.addEventListener("click", () => {
          if (todoObject.querySelector("#description") == null) {
            todoObject.appendChild(priority);
            todoObject.appendChild(description);
            todoObject.appendChild(notes);
            expand.textContent = "⏫";
          } else {
            todoObject.removeChild(priority);
            todoObject.removeChild(description);
            todoObject.removeChild(notes);
            expand.textContent = "⏬";
          }
        });

        deleteItem.addEventListener("click", (e) => {
          const todoArray = projectsArray[i].todos;
          const parentTodo = e.target.parentNode;
          todoObject.remove(parentTodo);

          console.log(todoArray);
        });

        todoObject.classList.add("todo-object");

        activeProjectTodos.appendChild(todoObject);
        todoObject.appendChild(title);
        todoObject.appendChild(dueDate);
        todoObject.appendChild(complete);
        todoObject.appendChild(expand);
        todoObject.appendChild(deleteItem);
      }
    }
  }
};

export {
  displayTodo,
  resetChildNodes,
  activeProjectContainer,
  activeProjectHead,
  activeProjectTodos,
  activeProjectTitle,
};
