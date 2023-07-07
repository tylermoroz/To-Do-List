import "./style.css";
import { projectsArray } from "./projects.js";
import { projectFormDiv } from "./projectForm.js";
import { activeProjectDiv } from "./activeProject.js";

const content = document.querySelector("#content");
content.appendChild(projectFormDiv);
content.appendChild(activeProjectDiv);

console.log(projectsArray);

export { content };
