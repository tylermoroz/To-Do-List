import {
  displayTodo,
  resetChildNodes,
  activeProjectTitle,
} from "./displayTodo.js";
import { projectsDiv } from "./projects.js";
import { enableForm } from "./todoForm.js";

const projectsArray = [];

const Project = (title, todos, active) => {
  return { title, todos, active };
};

const newProjectFormDiv = document.createElement("div");
const newProjectForm = document.createElement("form");

const projectTitle = document.createElement("div");
const projectTitleLabel = document.createElement("label");
const projectTitleInput = document.createElement("input");

newProjectFormDiv.setAttribute("id", "project-form-div");

projectTitle.setAttribute("id", "project-title-div");
projectTitleInput.setAttribute("type", "text");
projectTitleInput.setAttribute("name", "project-title");
projectTitleInput.setAttribute("id", "project-title");
projectTitleInput.placeholder = "New Project";

const newProjectFormCreate = () => {
  projectsDiv.appendChild(newProjectFormDiv);
  newProjectFormDiv.appendChild(newProjectForm);
  newProjectForm.appendChild(projectTitle);
  projectTitle.appendChild(projectTitleLabel);
  projectTitle.appendChild(projectTitleInput);
};

const newProject = () => {
  let project = Project();
  project.title = document.getElementById("project-title").value;
  project.todos = [];
  project.active = false;
  projectsArray.push(project);
  const projectName = document.createElement("p");
  projectName.textContent = project.title;
  projectName.classList.add("project");
  projectsDiv.removeChild(newProjectFormDiv);
  projectsDiv.appendChild(projectName);
  console.log(projectsArray);
};

const addProject = () => {
  projectTitleInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      newProject();
      newProjectForm.reset();
      activeAfterCreation();
      displayProjectTitle();
    }
  });
};

const selectProject = () => {
  const projectList = document.getElementById("projects-div");
  const children = document.getElementById("projects-div").children;

  projectList.addEventListener("click", (e) => {
    if (e.target.classList.contains("project")) {
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
      if (e.target.classList.contains("project")) {
        e.target.classList.add("active");
      }
    }
  });
};

const activeAfterCreation = () => {
  const children = document.getElementById("projects-div").children;

  for (let j = 0; j < projectsArray.length; j++) {
    projectsArray[j].active = false;
    projectsArray[projectsArray.length - 1].active = true;
  }
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("active");
    children[children.length - 1].classList.add("active");
    displayActiveProject();
  }
  enableForm();
};

const activeProject = () => {
  const projectSelection = document.getElementById("projects-div");
  projectSelection.addEventListener("click", (e) => {
    for (let i = 0; i < projectsArray.length; i++) {
      if (
        projectsArray[i].title === e.target.textContent &&
        e.target.classList.contains("active")
      ) {
        projectsArray[i].active = true;
        console.log(projectsArray);
      } else if (
        projectsArray[i].title !== e.target.textContent &&
        e.target.classList.contains("active")
      ) {
        projectsArray[i].active = false;
      }
    }
    resetChildNodes();
    enableForm();
  });
};

const displayActiveProject = () => {
  const projectGroup = document.getElementById("projects-div");
  projectGroup.addEventListener("click", displayProjectTitle);
  projectGroup.addEventListener("click", displayTodo);
};

const displayProjectTitle = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      activeProjectTitle.textContent = projectsArray[i].title;
    }
  }
};

export {
  newProjectFormCreate,
  addProject,
  selectProject,
  activeProject,
  projectsArray,
  displayActiveProject,
};
