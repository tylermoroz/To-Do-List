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

const localStorageTodos = (name, todo) => {
  localStorage.setItem(`${name}`, JSON.stringify(todo));
};

export { onloadStorage, localStorageProject, localStorageTodos };
