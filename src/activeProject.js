// Import the projectsArray from an external module
import { projectsArray } from "./projects.js";

// Create HTML elements for the active project display
const activeProjectDiv = document.createElement("div");
const activeProjectHead = document.createElement("div");
const activeProjectTitle = document.createElement("h3");
const activeTodoDiv = document.createElement("div");

// Set attributes and add classes to the created elements
activeProjectDiv.setAttribute("id", "active-project-div");
activeProjectDiv.classList.add("div-background");
activeProjectHead.setAttribute("id", "active-project-head");
activeProjectTitle.setAttribute("id", "active-project-title");
activeTodoDiv.setAttribute("id", "active-todo-div");

// Function to change the title displayed for the active project
const changeTitle = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      activeProjectTitle.textContent = projectsArray[i].title;
    }
  }
};

// Function to clear all todos from the active project display
const clearTodos = () => {
  while (activeTodoDiv.hasChildNodes()) {
    activeTodoDiv.firstChild.remove();
  }
};

// Function to display a single todo in the active project display
const displayTodos = (todo) => {
  // Create HTML elements for displaying the todo
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
  let todoCompleteBtn = document.createElement("button");
  let expandTodoDiv = document.createElement("div");
  let expandTodoBtn = document.createElement("button");

  // Add CSS classes to style the created elements
  todoDiv.classList.add("todo-div");
  todoDiv.classList.add("div-background");
  todoHeader.classList.add("todo-header");
  todoTitleDiv.classList.add("todo-title-div");
  todoTitle.classList.add("todo-title");
  deleteTodoDiv.classList.add("delete-todo-div");
  deleteTodoBtn.classList.add("delete-todo-btn");
  todoDueDate.classList.add("todo-due-date");
  todoDescription.classList.add("todo-description");
  todoPriority.classList.add("todo-priority");
  todoNotes.classList.add("todo-notes");
  todoCompleteBtn.classList.add("todo-complete");
  todoTitle.classList.add("todo-properties");
  todoDueDate.classList.add("todo-properties");
  todoDescription.classList.add("todo-properties");
  todoPriority.classList.add("todo-properties");
  todoNotes.classList.add("todo-properties");
  todoCompleteDiv.classList.add("todo-button-div");
  todoCompleteBtn.classList.add("todo-button");
  expandTodoDiv.classList.add("expand-todo-div");
  expandTodoBtn.classList.add("expand-todo-button");

  // Set text content for delete and expand buttons
  deleteTodoBtn.textContent = "X";
  expandTodoBtn.textContent = "▾";

  // Iterate through the projects to find the active one
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      // Set text content and styles based on the todo's properties
      todoTitle.textContent = todo.title;
      todoDueDate.textContent = `Due: ${todo.dueDate}`;
      todoDescription.textContent = todo.description;
      todoNotes.textContent = todo.notes;
      todoCompleteBtn.textContent = "incomplete";

      // Set styles based on todo priority
      if (todo.priority == 1) {
        // Low priority
        todoDiv.style.border = "2px solid red";
        todoDiv.style.boxShadow = "0 0 10px 5px red";
        todoPriority.textContent = "Priority: Low";
      } else if (todo.priority == 2) {
        // Medium priority
        todoDiv.style.border = "2px solid yellow";
        todoDiv.style.boxShadow = "0 0 10px 5px yellow";
        todoPriority.textContent = "Priority: Mid";
      } else if (todo.priority == 3) {
        // High priority
        todoDiv.style.border = "2px solid #39fc03";
        todoDiv.style.boxShadow = "0 0 10px 5px #39fc03";
        todoPriority.textContent = "Priority: High";
      }

      // Set styles and text for todo completion status
      if (todo.complete == false) {
        //Incomplete
        todoCompleteBtn.textContent = "incomplete";
        todoCompleteBtn.style.border = "2px solid red";
        todoCompleteBtn.style.boxShadow = "red 0px 0px 5px 1px";
        todoCompleteBtn.style.background = "red";
      } else if (todo.complete == true) {
        //Complete
        todoCompleteBtn.textContent = "complete";
        todoCompleteBtn.style.border = "2px solid #05db05";
        todoCompleteBtn.style.boxShadow = "#05db05 0px 0px 5px 1px";
        todoCompleteBtn.style.background = "#05db05";
      }
    }
  }

  // Append the created elements to the activeTodoDiv
  activeTodoDiv.appendChild(todoDiv);
  todoDiv.appendChild(todoHeader);
  todoHeader.appendChild(todoTitleDiv);
  todoHeader.appendChild(deleteTodoDiv);
  todoTitleDiv.appendChild(todoTitle);
  deleteTodoDiv.appendChild(deleteTodoBtn);
  todoDiv.appendChild(todoDueDate);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoCompleteDiv);
  todoCompleteDiv.appendChild(todoCompleteBtn);
  todoDiv.appendChild(expandTodoDiv);
  expandTodoDiv.appendChild(expandTodoBtn);

  // Event listener for completing/incompleting a todo
  todoCompleteBtn.addEventListener("click", (e) => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const clickedTodoIndex = parseInt(
      e.target.closest(".todo-div").dataset.todoIndex
    );
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );

    // Toggle the completion status and update styles
    if (todo.complete == false) {
      todo.complete = true;
      e.target.textContent = "complete";
      e.target.style.border = "2px solid #05db05";
      e.target.style.boxShadow = "#05db05 0px 0px 5px 1px";
      e.target.style.background = "#05db05";
    } else if (todo.complete == true) {
      todo.complete = false;
      e.target.textContent = "incomplete";
      e.target.style.border = "2px solid red";
      e.target.style.boxShadow = "red 0px 0px 5px 1px";
      e.target.style.background = "red";
    }

    if (activeProject) {
      // Find and toggle the complete status of the clicked todo
      if (activeProject.todos[clickedTodoIndex]) {
        activeProject.todos[clickedTodoIndex].complete =
          !activeProject.todos[clickedTodoIndex].complete;

        // Update localStorage with the modified active project
        localStorage.setItem("projects", JSON.stringify(storedProjects));
      }
    }
  });

  deleteTodoBtn.addEventListener("click", (e) => {
    let buttonDiv = e.target.parentNode;
    let todoHead = buttonDiv.parentNode;
    let todoToRemove = todoHead.parentNode;
    const todoList = activeTodoDiv.children;
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const clickedTodoIndex = parseInt(
      e.target.closest(".todo-div").dataset.todoIndex
    );
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );
    todoToRemove.remove();

    for (let i = 0; i < todoList.length; i++) {
      todoList[i].setAttribute("data-todo-index", i);
    }

    if (activeProject) {
      if (activeProject.todos[clickedTodoIndex]) {
        activeProject.todos.splice(clickedTodoIndex, 1);

        localStorage.setItem("projects", JSON.stringify(storedProjects));
      }
    }

    for (let i = 0; i < projectsArray.length; i++) {
      if (projectsArray[i].active == true) {
        let thisTodo = projectsArray[i].todos.indexOf(todo);
        projectsArray[i].todos.splice(thisTodo, 1);
        return;
      }
    }
  });

  expandTodoBtn.addEventListener("click", () => {
    if (todoDiv.querySelector(".todo-priority") === null) {
      todoCompleteDiv.remove();
      expandTodoDiv.remove();
      todoDiv.appendChild(todoPriority);
      todoDiv.appendChild(todoNotes);
      todoDiv.appendChild(todoCompleteDiv);
      todoDiv.appendChild(expandTodoDiv);
      expandTodoBtn.textContent = "▴";
    } else {
      todoPriority.remove();
      todoNotes.remove();
      expandTodoBtn.textContent = "▾";
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
