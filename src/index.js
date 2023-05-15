import { formCreate, formClear, formDiv } from "./todoForm";
import { createTodo } from "./createTodo.js";

const content = document.querySelector("#content");
const todoDiv = document.createElement("div");

todoDiv.setAttribute("id", "todo-div");

content.appendChild(formDiv);
content.appendChild(todoDiv);

formCreate();
createTodo();
formClear();

export { content, todoDiv };
