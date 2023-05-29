import { projectsDiv } from "./projects.js";

const projectsArray = [];

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

const newProject = () => {};

export { newProjectFormCreate };
