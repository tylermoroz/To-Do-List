import { projectsArray } from "./newProject.js";

const todoDiv = document.createElement("div");

const todoColor = (i, j, todo) => {
  if (projectsArray[i].todos[j].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (projectsArray[i].todos[j].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (projectsArray[i].todos[j].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
  }
};

const priorityLevel = (i, j) => {
  if (projectsArray[i].todos[j].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (projectsArray[i].todos[j].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (projectsArray[i].todos[j].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

const resetChildNodes = () => {
  while (todoDiv.firstChild) {
    todoDiv.removeChild(todoDiv.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      for (let j = 0; j < projectsArray[i].todos.length; j++) {
        const todoObject = document.createElement("div");
        const title = document.createElement("h3");
        const priority = document.createElement("p");
        const description = document.createElement("p");
        const dueDate = document.createElement("p");
        const notes = document.createElement("p");
        const complete = document.createElement("button");

        title.textContent = projectsArray[i].todos[j].title;
        priority.textContent = priorityLevel(i, j);
        description.textContent = projectsArray[i].todos[j].description;
        dueDate.textContent = projectsArray[i].todos[j].dueDate;
        notes.textContent = projectsArray[i].todos[j].notes;
        complete.textContent = projectsArray[i].todos[j].complete;

        description.setAttribute("id", "description");
        notes.setAttribute("id", "notes");

        todoColor(i, j, todoObject);

        complete.addEventListener("click", () => {
          if (projectsArray[i].todos[j].complete == "complete") {
            projectsArray[i].todos[j].complete = "incomplete";
            complete.textContent = projectsArray[i].todos[j].complete;
          } else if (projectsArray[i].todos[j].complete == "incomplete") {
            projectsArray[i].todos[j].complete = "complete";
            complete.textContent = projectsArray[i].todos[j].complete;
          }
        });

        todoObject.classList.add("todo-object");

        todoDiv.appendChild(todoObject);
        todoObject.appendChild(title);
        todoObject.appendChild(dueDate);
        todoObject.appendChild(priority);
        todoObject.appendChild(description);
        todoObject.appendChild(notes);
        todoObject.appendChild(complete);
      }
    }
  }
};

export { displayTodo, resetChildNodes, todoDiv };
