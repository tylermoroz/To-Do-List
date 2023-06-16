import { formCreate, formClear, formDiv, disableForm } from "./todoForm";
import { createTodo } from "./createTodo.js";
import {
  activeProjectHead,
  activeProjectContainer,
  activeProjectTodos,
  activeProjectTitle,
} from "./displayTodo.js";
import "./style.css";
import { projectsContainer, addProjectBtn } from "./projects.js";
import {
  activeProject,
  addProject,
  displayActiveProject,
  newProjectFormCreate,
  selectProject,
} from "./newProject.js";

const content = document.querySelector("#content");

activeProjectContainer.setAttribute("id", "active-project-container");
activeProjectHead.setAttribute("id", "active-project-head");
activeProjectTodos.setAttribute("id", "active-project-todos");
activeProjectTitle.setAttribute("id", "active-project-title");

content.appendChild(formDiv);
content.appendChild(projectsContainer);
content.appendChild(activeProjectContainer);
activeProjectContainer.appendChild(activeProjectHead);
activeProjectHead.appendChild(activeProjectTitle);
activeProjectContainer.appendChild(activeProjectTodos);

formCreate();
addProject();
createTodo();
formClear();
addProjectBtn.addEventListener("click", newProjectFormCreate);
selectProject();
activeProject();
displayActiveProject();

export { content };
