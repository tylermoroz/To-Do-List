const todoFormDiv = document.createElement("div");
const todoDivHead = document.createElement("div");
const todoDivTitle = document.createElement("p");

todoFormDiv.setAttribute("id", "todo-form-div");
todoFormDiv.classList.add("div-background");
todoDivTitle.textContent = "Create To-Do";
todoDivHead.setAttribute("id", "todo-div-head");
todoDivTitle.setAttribute("id", "todo-div-title");

todoFormDiv.appendChild(todoDivHead);
todoDivHead.appendChild(todoDivTitle);

export { todoFormDiv };
