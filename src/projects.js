const projectsDiv = document.createElement("div");
const projectsHeadDiv = document.createElement("div");
const projectsTitleDiv = document.createElement("div");
const projectsButtonDiv = document.createElement("div");
const title = document.createElement("p");
const addProjectBtn = document.createElement("button");

title.textContent = "Projects";
addProjectBtn.textContent = "+";

projectsDiv.setAttribute("id", "projects-div");
projectsHeadDiv.setAttribute("id", "projects-head-div");
projectsTitleDiv.setAttribute("id", "projects-title-div");
projectsButtonDiv.setAttribute("id", "projects-button-div");
addProjectBtn.setAttribute("id", "projects-add-button");

projectsDiv.appendChild(projectsHeadDiv);
projectsHeadDiv.appendChild(projectsTitleDiv);
projectsHeadDiv.appendChild(projectsButtonDiv);
projectsTitleDiv.appendChild(title);
projectsButtonDiv.appendChild(addProjectBtn);

export { projectsDiv };
