import { projectsArray } from "./projects.js";

const activeProjectDiv = document.createElement("div");
const activeProjectHead = document.createElement("div");
const activeProjectTitle = document.createElement("h3");
const activeTodoDiv = document.createElement("div");

activeProjectDiv.setAttribute("id", "active-project-div");
activeProjectDiv.classList.add("div-background");
activeProjectHead.setAttribute("id", "active-project-head");
activeProjectTitle.setAttribute("id", "active-project-title");
activeTodoDiv.setAttribute("id", "active-todo-div");

const changeTitle = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      activeProjectTitle.textContent = projectsArray[i].title;
    }
  }
};

const displayTodos = () => {
  const todoDiv = document.createElement("div");
  const todoTitle = document.createElement("p");
  const todoDueDate = document.createElement("p");
  const todoDescription = document.createElement("p");
  const todoPriority = document.createElement("p");
  const todoNotes = document.createElement("p");
  const todoComplete = document.createElement("p");

  todoDiv.setAttribute("id", "todo-div");
  todoDiv.classList.add("div-background");
  todoTitle.setAttribute("id", "todo-title");
  todoDueDate.setAttribute("id", "todo-due-date");
  todoDescription.setAttribute("id", "todo-description");
  todoPriority.setAttribute("id", "todo-priority");
  todoNotes.setAttribute("id", "todo-notes");
  todoComplete.setAttribute("id", "todo-complete");
  todoTitle.classList.add("todo-properties");
  todoDueDate.classList.add("todo-properties");
  todoDescription.classList.add("todo-properties");
  todoPriority.classList.add("todo-properties");
  todoNotes.classList.add("todo-properties");
  todoComplete.classList.add("todo-properties");

  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      for (let t = 0; t < projectsArray[i].todos.length; t++) {
        todoTitle.textContent = projectsArray[i].todos[t].title;
        todoDueDate.textContent = `Due: ${projectsArray[i].todos[t].dueDate}`;
        todoDescription.textContent = projectsArray[i].todos[t].description;
        todoNotes.textContent = projectsArray[i].todos[t].notes;
        todoComplete.textContent = projectsArray[i].todos[t].complete;

        if (projectsArray[i].todos[t].priority == 1) {
          todoDiv.style.border = "2px solid red";
          todoDiv.style.boxShadow = "0 0 10px 5px red";
          todoPriority.textContent = "Priority: Low";
        } else if (projectsArray[i].todos[t].priority == 2) {
          todoDiv.style.border = "2px solid yellow";
          todoDiv.style.boxShadow = "0 0 10px 5px yellow";

          todoPriority.textContent = "Priority: Mid";
        } else if (projectsArray[i].todos[t].priority == 3) {
          todoDiv.style.border = "2px solid #39fc03";
          todoDiv.style.boxShadow = "0 0 10px 5px #39fc03";

          todoPriority.textContent = "Priority: High";
        }

        activeTodoDiv.appendChild(todoDiv);
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDueDate);
        todoDiv.appendChild(todoDescription);
        todoDiv.appendChild(todoPriority);
        todoDiv.appendChild(todoNotes);
        todoDiv.appendChild(todoComplete);
      }
    }
  }
};

export {
  activeProjectDiv,
  activeProjectHead,
  activeProjectTitle,
  changeTitle,
  activeTodoDiv,
  displayTodos,
};
