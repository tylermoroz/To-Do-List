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
  activeTodoDiv,
} from "./activeProject.js";
import { todoFormContainer } from "./toDoForm";
import { onloadStorage } from "./storeProjects";

const content = document.querySelector("#content");
content.appendChild(projectFormDiv);
content.appendChild(activeProjectDiv);
content.append(todoFormContainer);
activeProjectDiv.appendChild(activeProjectHead);
activeProjectDiv.appendChild(activeTodoDiv);
activeProjectHead.appendChild(activeProjectTitle);

changeActiveClass();
activeProject();
onloadStorage();

console.log(projectsArray);

export { content };
