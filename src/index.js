import { formCreate } from "./todoForm";
import { formClear } from "./todoForm";
import { createTodo } from "./createTodo.js";

const content = document.querySelector("#content");

formCreate();
createTodo();
formClear();

export { content };
