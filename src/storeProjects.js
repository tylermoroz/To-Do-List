import { projectListDiv, deleteProject } from "./projectForm.js";
import { Project, projectsArray } from "./projects.js";

const onloadStorage = () => {
  // Add a "load" event listener to the window
  window.addEventListener("load", () => {
    // Check if the "projects" key in local storage is null or empty
    if (localStorage.getItem("projects") === null) {
      // If it's null or empty, set it to an empty array as a JSON string
      localStorage.setItem("projects", "[]");
    } else {
      const storedProjects = JSON.parse(localStorage.getItem("projects"));

      for (let i = 0; i < storedProjects.length; i++) {
        const projectName = document.createElement("p");
        const projectContainer = document.createElement("div");
        const projectNameDiv = document.createElement("div");
        const deleteProjectBtn = document.createElement("button");
        const deleteProjectBtnDiv = document.createElement("div");

        deleteProjectBtn.textContent = "x";
        deleteProjectBtn.classList.add("delete-project-button");
        projectContainer.classList.add("project-container");
        projectNameDiv.classList.add("project-name-div");
        deleteProjectBtnDiv.classList.add("delete-project-button-div");
        projectName.textContent = storedProjects[i].title;
        for (let t = 0; t <= projectListDiv.children.length; t++) {
          projectContainer.setAttribute("data-index", t);
        }
        projectListDiv.appendChild(projectContainer);
        projectContainer.appendChild(projectNameDiv);
        projectContainer.appendChild(deleteProjectBtnDiv);
        projectNameDiv.appendChild(projectName);
        deleteProjectBtnDiv.appendChild(deleteProjectBtn);
        projectName.classList.add("project");
        if (
          projectName.textContent == storedProjects[i].title &&
          storedProjects[i].active === true
        ) {
          projectName.classList.add("active");
        }
        deleteProjectBtn.addEventListener("click", (e) => {
          deleteProject(e);
        });
        createStoredProjects(
          storedProjects[i].title,
          storedProjects[i].todos,
          storedProjects[i].active
        );
      }
    }
  });
};
const localStorageProject = (newProject) => {
  // Store the new project data in a variable
  const storeNewProject = newProject;

  // Retrieve the existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  // Push the new project data to the existing projects array
  storedProjects.push(storeNewProject);

  // Update the "projects" key in local storage with the modified projects array
  localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
};

const createStoredProjects = (title, todos, active) => {
  let newProject = Project();
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  projectsArray.push(newProject);
};

const localStorageTodos = (newTodo) => {
  // Retrieve existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  if (Array.isArray(storedProjects)) {
    // Find the active project (you might need to specify how to identify the active project)
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );

    if (activeProject) {
      // Update the todos of the active project
      activeProject.todos.push(newTodo);

      // Save the updated projects back to local storage
      localStorage.setItem("projects", JSON.stringify(storedProjects));
    }
  }
};

export { onloadStorage, localStorageProject, localStorageTodos };
