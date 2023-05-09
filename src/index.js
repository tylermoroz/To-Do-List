import { formCreate } from "./todoForm";
import { displayTodo } from "./createTodo.js";

const content = document.querySelector("#content");

formCreate();
displayTodo();

export { content };
