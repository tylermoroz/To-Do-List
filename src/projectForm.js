import { changeTitle, clearTodos, displayTodos } from "./activeProject.js";
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
  }
});

input.addEventListener("keypress", (e) => {
  const projectName = document.createElement("p");
  if (e.code === "Enter") {
    e.preventDefault();
    projectName.textContent = document.querySelector(".project-input").value;
    for (let i = 0; i < projectListDiv.children.length; i++) {
      projectName.setAttribute("data-index", i);
    }
    projectListForm.reset();
    projectListForm.remove();
    projectListDiv.appendChild(projectName);
    setActiveToFalse();
    createProject(projectName.textContent, [], true);
    removeActiveClass();
    projectName.classList.add("active");
    projectName.classList.add("project");
    changeTitle();
    clearTodos();
    console.log(projectsArray);
  }
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
    children[i].classList.remove("active");
  }
};

const activeProject = () => {
  const projectSelect = document.getElementById("projects-list-div");
  projectSelect.addEventListener("click", (e) => {
    for (let i = 0; i < projectsArray.length; i++) {
      if (
        parseInt(projectsArray.indexOf(projectsArray[i])) ===
          parseInt(e.target.dataset.index) &&
        e.target.classList.contains("active") &&
        e.target.tagName == "P"
      ) {
        projectsArray[i].active = true;
        console.log(projectsArray);
      } else if (
        parseInt(projectsArray.indexOf(projectsArray[i])) !==
          parseInt(e.target.dataset.index) &&
        e.target.classList.contains("active") &&
        e.target.tagName == "P"
      ) {
        projectsArray[i].active = false;
      }
      if (e.target.tagName == "P") {
        displayActiveTodos(e, i);
      }
    }
    changeTitle();
  });
};

const displayActiveTodos = (e, i) => {
  for (let n = 0; n < projectsArray[i].todos.length; n++) {
    if (
      parseInt(projectsArray.indexOf(projectsArray[i])) ===
        parseInt(e.target.dataset.index) &&
      e.target.classList.contains("active")
    ) {
      displayTodos(projectsArray[i].todos[n]);
    }
  }
};

export { projectFormDiv, changeActiveClass, activeProject, displayActiveTodos };
