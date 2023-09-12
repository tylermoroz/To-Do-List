const onloadStorage = () => {
  window.addEventListener("load", () => {
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", "[]");
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
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  for (let i = 0; i < storedProjects.length; i++) {
    if (storedProjects[i].active === true) {
      const storedTodos = storedProjects[i].todos;
      storedTodos.push(newTodo);
      localStorage.setItem(
        "projects",
        `[{"title":${JSON.stringify(
          storedProjects[i].title
        )},"todos":${JSON.stringify(storedTodos)},"active":${
          storedProjects[i].active
        }}]`
      );
    }
  }
};

export { onloadStorage, localStorageProject, localStorageTodos };
