const onloadStorage = () => {
  window.addEventListener("load", () => {
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", "[]");
      // localStorage.setItem("todos", "[]");
    }
  });
};

const localStorageProject = (newProject) => {
  const storeNewProject = newProject;
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  storedProjects.push(storeNewProject);
  localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
};

const localStorageTodos = (newTodo) => {
  const storedTodos = JSON.parse(localStorage.getItem("projects"))[0].todos;
  storedTodos.push(newTodo);
  localStorage.setItem(
    "projects",
    `[{"title":"project","todos":${JSON.stringify(
      storedTodos
    )},"active":${true}}]`
  );
};

// const postToProjectTodos = (todo) => {
//   for (const key of JSON.parse(localStorage.getItem("projects"))) {
//     if (key.active === true) {
//       key.todos.push(todo);
//     }
//   }
// };

export { onloadStorage, localStorageProject, localStorageTodos };
