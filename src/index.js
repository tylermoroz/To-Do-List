import { formCreate, formClear, formDiv } from "./todoForm";
import { createTodo } from "./createTodo.js";
import { todoDiv } from "./displayTodo.js";
import "./style.css";
import { projectsDiv } from "./projects";

const content = document.querySelector("#content");

todoDiv.setAttribute("id", "todo-div");

content.appendChild(formDiv);
content.appendChild(projectsDiv);
content.appendChild(todoDiv);

formCreate();
createTodo();
formClear();

export { content };
