const onloadStorage = () => {
  window.addEventListener("load", () => {
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", "[]");
      localStorage.setItem("todos", "[]");
    }
  });
};

const localStorageProject = (newProject) => {
  const storeNewProject = newProject;
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  storedProjects.push(storeNewProject);
  localStorage.setItem("projects", JSON.stringify(storedProjects));
};

const localStorageTodos = (newTodo) => {
  const storeNewTodo = newTodo;
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  storedTodos.push(storeNewTodo);
  console.log(storedTodos);
  localStorage.setItem("todos", JSON.stringify(storedTodos));
};

export { onloadStorage, localStorageProject, localStorageTodos };
