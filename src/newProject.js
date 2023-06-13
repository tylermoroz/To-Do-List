import { displayTodo, resetChildNodes } from "./displayTodo.js";
import { projectsDiv } from "./projects.js";

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
  const children = document.getElementById("projects-div").children;

  projectTitleInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      newProject();
      newProjectForm.reset();
      if (projectsArray.length == 1) {
        projectsArray[0].active = true;
        children[0].classList.add("active");
      }
    }
  });
};

const selectProject = () => {
  const projectList = document.getElementById("projects-div");
  const children = document.getElementById("projects-div").children;

  projectList.addEventListener("click", (e) => {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    if (e.target.classList.contains("project")) {
      e.target.classList.add("active");
    }
  });
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
  });
};

const displayActiveProject = () => {
  const projectGroup = document.getElementById("projects-div");
  projectGroup.addEventListener("click", displayTodo);
};

export {
  newProjectFormCreate,
  addProject,
  selectProject,
  activeProject,
  projectsArray,
  displayActiveProject,
};
