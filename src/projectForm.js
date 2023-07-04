const projectFormDiv = document.createElement("div");
const projectDivHead = document.createElement("div");
const projectDivTitle = document.createElement("h3");
const projectListDiv = document.createElement("div");
const addProjectBtn = document.createElement("button");

projectDivTitle.textContent = "Projects";
addProjectBtn.textContent = "+";

projectFormDiv.classList.add("div-background");
projectFormDiv.setAttribute("id", "project-form-div");
projectDivHead.setAttribute("id", "project-div-head");
projectDivTitle.setAttribute("id", "project-div-title");
projectListDiv.setAttribute("id", "projects-list-div");
addProjectBtn.setAttribute("id", "add-project-button");

projectFormDiv.appendChild(projectDivHead);
projectDivHead.appendChild(projectDivTitle);
projectDivHead.appendChild(addProjectBtn);
projectFormDiv.appendChild(projectListDiv);

export { projectFormDiv };
