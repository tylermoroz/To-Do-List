import {
  activeProjectTitle,
  changeTitle,
  clearTodos,
  displayTodos,
  activeTodoDiv,
} from "./activeProject.js";
import { createProject, projectsArray } from "./projects.js";

const projectFormDiv = document.createElement("div");
const projectDivHead = document.createElement("div");
const projectTitleDiv = document.createElement("div");
const projectsTitle = document.createElement("p");
const projectListDiv = document.createElement("div");
const projectsBtnDiv = document.createElement("div");
const addProjectBtn = document.createElement("button");
const projectListForm = document.createElement("form");
const input = document.createElement("input");

projectsTitle.textContent = "Projects";
addProjectBtn.textContent = "+";

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

projectFormDiv.appendChild(projectDivHead);
projectDivHead.appendChild(projectTitleDiv);
projectDivHead.appendChild(projectsBtnDiv);
projectTitleDiv.appendChild(projectsTitle);
projectsBtnDiv.appendChild(addProjectBtn);
projectFormDiv.appendChild(projectListDiv);
projectListForm.appendChild(input);

addProjectBtn.addEventListener("click", () => {
  if (projectListDiv.querySelector(".project-form") == null) {
    projectListDiv.appendChild(projectListForm);
    projectListDiv.scrollTop = projectListDiv.scrollHeight;
  }
});

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
    setActiveToFalse();
    createProject(projectName.textContent, [], true);
    removeActiveClass();
    projectName.classList.add("active");
    projectName.classList.add("project");
    changeTitle();
    storageProjectActiveStatus();
    clearTodos();
    console.log(projectsArray);
  }

  deleteProjectBtn.addEventListener("click", (e) => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const projects = projectListDiv.children;
    projectContainer.remove();

    for (let i = 0; i < projects.length; i++) {
      projects[i].setAttribute("data-index", i);
    }

    for (let i = 0; i < projectsArray.length; i++) {
      if (
        parseInt(projectsArray.indexOf(projectsArray[i])) ===
        parseInt(e.target.closest(".project-container").dataset.index)
      ) {
        projectsArray.splice(i, 1);
        console.log(projectsArray);
      }
    }

    for (let i = 0; i < storedProjects.length; i++) {
      if (
        parseInt(e.target.closest(".project-container").dataset.index) ===
        parseInt(storedProjects.indexOf(storedProjects[i]))
      ) {
        storedProjects.splice(i, 1);
        localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
        return;
      }
      storageProjectActiveStatus();
    }

    if (
      e.target.parentNode.previousElementSibling.children[0].classList.contains(
        "active"
      )
    ) {
      clearTodos();
      activeProjectTitle.textContent = "";
    }
  });
});

const changeActiveClass = () => {
  const projectList = document.getElementById("projects-list-div");

  projectList.addEventListener("click", (e) => {
    if (e.target.tagName == "P") {
      removeActiveClass();
      clearTodos();
      e.target.classList.add("active");
    }
  });
};

const setActiveToFalse = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    projectsArray[i].active = false;
  }
};

const removeActiveClass = () => {
  const children = document.getElementById("projects-list-div").children;

  for (let i = 0; i < children.length; i++) {
    const nestedChild = children[i];
    const grandChild = nestedChild.firstChild;
    const greatGrandChild = grandChild.firstChild;
    greatGrandChild.classList.remove("active");
  }
};

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
        console.log(projectsArray);
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
    storageProjectActiveStatus();
    changeTitle();
    console.log(projectsArray);
  });
};

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

const displayActiveTodos = (e, i) => {
  for (let n = 0; n < projectsArray[i].todos.length; n++) {
    if (
      parseInt(projectsArray.indexOf(projectsArray[i])) ===
        parseInt(e.target.closest(".project-container").dataset.index) &&
      e.target.classList.contains("active")
    ) {
      displayTodos(projectsArray[i].todos[n]);
      for (let t = 0; t < activeTodoDiv.children.length; t++) {
        activeTodoDiv.children[t].setAttribute("data-todo-index", t);
      }
    }
  }
};

export {
  projectFormDiv,
  changeActiveClass,
  activeProject,
  displayActiveTodos,
  projectListDiv,
};
