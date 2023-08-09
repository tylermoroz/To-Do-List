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

const clearTodos = () => {
  while (activeTodoDiv.hasChildNodes()) {
    activeTodoDiv.firstChild.remove();
  }
};

const displayTodos = (todo) => {
  let todoDiv = document.createElement("div");
  let todoHeader = document.createElement("div");
  let todoTitleDiv = document.createElement("div");
  let todoTitle = document.createElement("p");
  let deleteTodoDiv = document.createElement("div");
  let deleteTodoBtn = document.createElement("button");
  let todoDueDate = document.createElement("p");
  let todoDescription = document.createElement("p");
  let todoPriority = document.createElement("p");
  let todoNotes = document.createElement("p");
  let todoCompleteDiv = document.createElement("div");
  let todoComplete = document.createElement("button");

  todoDiv.setAttribute("id", "todo-div");
  todoDiv.classList.add("div-background");
  todoHeader.setAttribute("id", "todo-header");
  todoTitleDiv.setAttribute("id", "todo-title-div");
  todoTitle.setAttribute("id", "todo-title");
  deleteTodoDiv.setAttribute("id", "delete-todo-div");
  deleteTodoBtn.setAttribute("id", "delete-todo-btn");
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
  todoCompleteDiv.setAttribute("id", "todo-button-div");
  todoComplete.setAttribute("id", "todo-button");

  deleteTodoBtn.textContent = "X";

  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      todoTitle.textContent = todo.title;
      todoDueDate.textContent = `Due: ${todo.dueDate}`;
      todoDescription.textContent = todo.description;
      todoNotes.textContent = todo.notes;
      todoComplete.textContent = "incomplete";

      if (todo.priority == 1) {
        todoDiv.style.border = "2px solid red";
        todoDiv.style.boxShadow = "0 0 10px 5px red";
        todoPriority.textContent = "Priority: Low";
      } else if (todo.priority == 2) {
        todoDiv.style.border = "2px solid yellow";
        todoDiv.style.boxShadow = "0 0 10px 5px yellow";
        todoPriority.textContent = "Priority: Mid";
      } else if (todo.priority == 3) {
        todoDiv.style.border = "2px solid #39fc03";
        todoDiv.style.boxShadow = "0 0 10px 5px #39fc03";
        todoPriority.textContent = "Priority: High";
      }
    }
  }
  activeTodoDiv.appendChild(todoDiv);
  todoDiv.appendChild(todoHeader);
  todoHeader.appendChild(todoTitleDiv);
  todoHeader.appendChild(deleteTodoDiv);
  todoTitleDiv.appendChild(todoTitle);
  deleteTodoDiv.appendChild(deleteTodoBtn);
  todoDiv.appendChild(todoDueDate);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoNotes);
  todoDiv.appendChild(todoCompleteDiv);
  todoCompleteDiv.appendChild(todoComplete);

  todoComplete.addEventListener("click", (e) => {
    if (todo.complete == false) {
      todo.complete = true;
      e.target.textContent = "complete";
      console.log(projectsArray);
    } else if (todo.complete == true) {
      todo.complete = false;
      e.target.textContent = "incomplete";
      console.log(projectsArray);
    }
  });
};

export {
  activeProjectDiv,
  activeProjectHead,
  activeProjectTitle,
  changeTitle,
  activeTodoDiv,
  displayTodos,
  clearTodos,
};
