import { formCreate } from "./todoForm";
import { formClear } from "./todoForm";
import { displayTodo } from "./createTodo.js";

const content = document.querySelector("#content");

formCreate();
displayTodo();
formClear();

export { content };
