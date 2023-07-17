import { projectsArray } from "./projects.js";

const activeProjectDiv = document.createElement("div");
const activeProjectHead = document.createElement("div");
const activeProjectTitle = document.createElement("h3");

activeProjectDiv.setAttribute("id", "active-project-div");
activeProjectDiv.classList.add("div-background");
activeProjectHead.setAttribute("id", "active-project-head");
activeProjectTitle.setAttribute("id", "active-project-title");

const changeTitle = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      activeProjectTitle.textContent = projectsArray[i].title;
    }
  }
};

export { activeProjectDiv, activeProjectHead, activeProjectTitle, changeTitle };
