import "./style.css";
import { projectsArray } from "./projects.js";
import {
  projectFormDiv,
  changeActiveClass,
  activeProject,
} from "./projectForm.js";
import {
  activeProjectDiv,
  activeProjectHead,
  activeProjectTitle,
} from "./activeProject.js";
import { todoFormDiv } from "./toDoForm";

const content = document.querySelector("#content");
content.appendChild(projectFormDiv);
content.appendChild(activeProjectDiv);
content.append(todoFormDiv);
activeProjectDiv.appendChild(activeProjectHead);
activeProjectHead.appendChild(activeProjectTitle);

changeActiveClass();
activeProject();

console.log(projectsArray);

export { content };
