import { projectsDiv } from "./projects.js";

const projectsArray = [];
let projectTodos = [];

const Project = (title, todos) => {
  return { title, todos };
};

const newProjectFormDiv = document.createElement("div");
const newProjectForm = document.createElement("form");

const projectTitle = document.createElement("div");
const projectTitleLabel = document.createElement("label");
const projectTitleInput = document.createElement("input");

newProjectFormDiv.setAttribute("id", "-project-form-div");

projectTitle.setAttribute("id", "project-title-div");
projectTitleLabel.setAttribute("for", "project-title");
projectTitleLabel.textContent = "New Project:";
projectTitleInput.setAttribute("type", "text");
projectTitleInput.setAttribute("name", "project-title");
projectTitleInput.setAttribute("id", "project-title");

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
  project.todos = projectTodos;
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
    }
  });
};

const selectProject = () => {
  let projectList = document.getElementById("projects-div");
  let children = document.getElementById("projects-div").children;

  projectList.addEventListener("click", (e) => {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    if (e.target.classList.contains("project")) {
      e.target.classList.add("active");
    }
  });
};

export { newProjectFormCreate, addProject, projectTodos, selectProject };
