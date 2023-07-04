import "./style.css";
import { projectsArray } from "./projects.js";
import { projectFormDiv } from "./projectForm.js";

const content = document.querySelector("#content");
content.appendChild(projectFormDiv);

console.log(projectsArray);

export { content };
