import { formCreate, formClear, formDiv } from "./todoForm";
import { createTodo } from "./createTodo.js";
import { todoDiv } from "./displayTodo.js";
import "./style.css";
import { projectsContainer, addProjectBtn } from "./projects.js";
import {
  addProject,
  newProjectFormCreate,
  selectProject,
} from "./newProject.js";

const content = document.querySelector("#content");

todoDiv.setAttribute("id", "todo-div");

content.appendChild(formDiv);
content.appendChild(projectsContainer);
content.appendChild(todoDiv);

formCreate();
addProject();
createTodo();
formClear();
addProjectBtn.addEventListener("click", newProjectFormCreate);
selectProject();

export { content };
