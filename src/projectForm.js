// Import statements to bring in elements and functions from other modules
import {
  activeProjectTitle,
  changeTitle,
  clearTodos,
  displayTodos,
  activeTodoDiv,
} from "./activeProject.js"; // Import elements and functions related to active project display
import { createProject, projectsArray } from "./projects.js"; // Import project creation function and data array

// Create HTML elements for the project form and project list
const projectFormDiv = document.createElement("div");
const projectDivHead = document.createElement("div");
const projectTitleDiv = document.createElement("div");
const projectsTitle = document.createElement("p");
const projectListDiv = document.createElement("div");
const projectsBtnDiv = document.createElement("div");
const addProjectBtn = document.createElement("button");
const projectListForm = document.createElement("form");
const input = document.createElement("input");

// Set text content for elements
projectsTitle.textContent = "Projects";
addProjectBtn.textContent = "+";

// Add classes and IDs to HTML elements
projectFormDiv.classList.add("div-background");
projectFormDiv.setAttribute("id", "project-form-div");
projectDivHead.setAttribute("id", "project-div-head");
projectTitleDiv.setAttribute("id", "title-div");
projectListDiv.setAttribute("id", "projects-list-div");
projectsBtnDiv.setAttribute("id", "button-div");
projectsTitle.setAttribute("id", "projects-title");
addProjectBtn.setAttribute("id", "projects-btn");
projectListForm.classList.add("project-form");
input.classList.add("project-input");

// Append elements to create the project form structure
projectFormDiv.appendChild(projectDivHead);
projectDivHead.appendChild(projectTitleDiv);
projectDivHead.appendChild(projectsBtnDiv);
projectTitleDiv.appendChild(projectsTitle);
projectsBtnDiv.appendChild(addProjectBtn);
projectFormDiv.appendChild(projectListDiv);
projectListForm.appendChild(input);

// Event listener to show the project input field when the "+" button is clicked
addProjectBtn.addEventListener("click", () => {
  if (projectListDiv.querySelector(".project-form") == null) {
    projectListDiv.appendChild(projectListForm);
    projectListDiv.scrollTop = projectListDiv.scrollHeight;
  }
});

// Event listener to create a new project when the "Enter" key is pressed in the input field
input.addEventListener("keypress", (e) => {
  const projectName = document.createElement("p");
  const projectContainer = document.createElement("div");
  const projectNameDiv = document.createElement("div");
  const deleteProjectBtn = document.createElement("button");
  const deleteProjectBtnDiv = document.createElement("div");

  deleteProjectBtn.textContent = "x";
  deleteProjectBtn.classList.add("delete-project-button");
  projectContainer.classList.add("project-container");
  projectNameDiv.classList.add("project-name-div");
  deleteProjectBtnDiv.classList.add("delete-project-button-div");

  if (e.code === "Enter") {
    e.preventDefault();
    projectName.textContent = document.querySelector(".project-input").value;

    // Set a data-index attribute to track the project index
    for (let i = 0; i < projectListDiv.children.length; i++) {
      projectContainer.setAttribute("data-index", i);
    }

    projectListForm.reset();
    projectListForm.remove();
    projectListDiv.appendChild(projectContainer);
    projectContainer.appendChild(projectNameDiv);
    projectContainer.appendChild(deleteProjectBtnDiv);
    projectNameDiv.appendChild(projectName);
    deleteProjectBtnDiv.appendChild(deleteProjectBtn);
    setActiveToFalse(); // Deactivate all other projects
    createProject(projectName.textContent, [], true); // Create a new project
    removeActiveClass(); // Remove the active class from other projects
    projectName.classList.add("active"); // Set the newly created project as active
    projectName.classList.add("project"); //Add the project class to the new project
    changeTitle(); // Change the title displayed for the active project
    storageProjectActiveStatus(); // Update the active status in local storage
    clearTodos(); // Clear todos from the active project display
  }

  // Event listener to delete a project when the "x" button is clicked
  deleteProjectBtn.addEventListener("click", (e) => {
    deleteProject(e); // Function to delete a project
  });
});

// Function to change the active class when a project is clicked
const changeActiveClass = () => {
  const projectList = document.getElementById("projects-list-div");

  projectList.addEventListener("click", (e) => {
    if (e.target.tagName == "P") {
      removeActiveClass(); // Remove the active class from other projects
      clearTodos(); // Clear todos from the active project display
      e.target.classList.add("active");
    }
  });
};

// Function to delete a project
const deleteProject = (e) => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  const projects = projectListDiv.children;
  e.target.closest(".project-container").remove();

  // Set data-index attributes to track project indices
  for (let i = 0; i < projects.length; i++) {
    projects[i].setAttribute("data-index", i);
  }

  // Remove the deleted project from the projectsArray
  for (let i = 0; i < projectsArray.length; i++) {
    if (
      parseInt(projectsArray.indexOf(projectsArray[i])) ===
      parseInt(e.target.closest(".project-container").dataset.index)
    ) {
      projectsArray.splice(i, 1);
    }
  }

  // Remove the deleted project from storedProjects in local storage
  for (let i = 0; i < storedProjects.length; i++) {
    if (
      parseInt(e.target.closest(".project-container").dataset.index) ===
      parseInt(storedProjects.indexOf(storedProjects[i]))
    ) {
      storedProjects.splice(i, 1);
      localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
      return;
    }
    storageProjectActiveStatus(); // Update active status in storage
  }

  // If the deleted project was active, clear todos and reset the title
  if (
    e.target.parentNode.previousElementSibling.children[0].classList.contains(
      "active"
    )
  ) {
    clearTodos(); // Clear todos from the active project display
    activeProjectTitle.textContent = "";
  }
};

// Function to set all projects' "active" property to false
const setActiveToFalse = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    projectsArray[i].active = false;
  }
};

// Function to remove the "active" class from all project names
const removeActiveClass = () => {
  const children = document.getElementById("projects-list-div").children;

  for (let i = 0; i < children.length; i++) {
    const nestedChild = children[i];
    const grandChild = nestedChild.firstChild;
    const greatGrandChild = grandChild.firstChild;
    greatGrandChild.classList.remove("active");
  }
};

// Function to activate a project when it is clicked
const activeProject = () => {
  const projectSelect = document.getElementById("projects-list-div");

  projectSelect.addEventListener("click", (e) => {
    for (let i = 0; i < projectsArray.length; i++) {
      if (
        e.target.tagName == "P" &&
        parseInt(projectsArray.indexOf(projectsArray[i])) ===
          parseInt(e.target.closest(".project-container").dataset.index) &&
        e.target.classList.contains("active")
      ) {
        projectsArray[i].active = true;
      } else if (
        e.target.tagName == "P" &&
        parseInt(projectsArray.indexOf(projectsArray[i])) !==
          parseInt(e.target.closest(".project-container").dataset.index) &&
        e.target.classList.contains("active")
      ) {
        projectsArray[i].active = false;
      }
      if (e.target.tagName == "P") {
        displayActiveTodos(e, i);
      }
    }
    storageProjectActiveStatus(); // Update active status in storage
    changeTitle(); // Change the title displayed for the active project
  });
};

// Function to update the active status in local storage
const storageProjectActiveStatus = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  for (let i = 0; i < projectsArray.length; i++) {
    for (let p = 0; p < storedProjects.length; p++) {
      if (
        parseInt(projectsArray.indexOf(projectsArray[i])) ===
        parseInt(storedProjects.indexOf(storedProjects[p]))
      ) {
        storedProjects[p].active = projectsArray[i].active;
        localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
      }
    }
  }
};

// Function to display active todos when a project is clicked
const displayActiveTodos = (e, i) => {
  for (let n = 0; n < projectsArray[i].todos.length; n++) {
    if (
      parseInt(projectsArray.indexOf(projectsArray[i])) ===
        parseInt(e.target.closest(".project-container").dataset.index) &&
      e.target.classList.contains("active")
    ) {
      displayTodos(projectsArray[i].todos[n]); // Function to display a single todo in the active project display
      for (let t = 0; t < activeTodoDiv.children.length; t++) {
        activeTodoDiv.children[t].setAttribute("data-todo-index", t);
      }
    }
  }
};

// Export statements to make functions and elements available to other modules
export {
  projectFormDiv,
  changeActiveClass,
  activeProject,
  displayActiveTodos,
  projectListDiv,
  deleteProject,
};
