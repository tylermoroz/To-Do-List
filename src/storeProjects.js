// Import statements to bring in functions and data from other modules
import { changeTitle, displayTodos, activeTodoDiv } from "./activeProject.js"; // Importing functions related to active projects
import { projectListDiv, deleteProject } from "./projectForm.js"; // Importing functions related to project list
import { Project, projectsArray } from "./projects.js"; // Importing Project and projectsArray

// Function to load data from local storage when the window loads
const onloadStorage = () => {
  // Add a "load" event listener to the window
  window.addEventListener("load", () => {
    // Check if the "projects" key in local storage is null or empty
    if (localStorage.getItem("projects") === null) {
      // If it's null or empty, set it to an empty array as a JSON string
      localStorage.setItem("projects", "[]");
    } else {
      // Retrieve stored projects from local storage and parse them
      const storedProjects = JSON.parse(localStorage.getItem("projects"));

      // Loop through the stored projects and create elements for each
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

        // Set data-index attribute for projectContainer
        for (let t = 0; t <= projectListDiv.children.length; t++) {
          projectContainer.setAttribute("data-index", t);
        }

        // Append elements to the project list
        projectListDiv.appendChild(projectContainer);
        projectContainer.appendChild(projectNameDiv);
        projectContainer.appendChild(deleteProjectBtnDiv);
        projectNameDiv.appendChild(projectName);
        deleteProjectBtnDiv.appendChild(deleteProjectBtn);
        projectName.classList.add("project");

        // Add "active" class to projectName if the project is active
        if (
          projectName.textContent == storedProjects[i].title &&
          storedProjects[i].active === true
        ) {
          projectName.classList.add("active");
        }

        // Add click event listener to deleteProjectBtn
        deleteProjectBtn.addEventListener("click", (e) => {
          deleteProject(e); // Function to delete a project
        });

        // Create and add stored projects to projectsArray
        createStoredProjects(
          storedProjects[i].title,
          storedProjects[i].todos,
          storedProjects[i].active
        );

        // Call changeTitle function to update the active project title
        changeTitle();
      }

      // Loop through projectsArray and display todos for the active project
      for (let i = 0; i < projectsArray.length; i++) {
        for (let n = 0; n < projectsArray[i].todos.length; n++) {
          if (projectsArray[i].active === true) {
            displayTodos(projectsArray[i].todos[n]); // Function to display a single todo in the active project display

            // Set data-todo-index attribute for activeTodoDiv children
            for (let t = 0; t < activeTodoDiv.children.length; t++) {
              activeTodoDiv.children[t].setAttribute("data-todo-index", t);
            }
          }
        }
      }
    }
  });
};

// Function to store a new project in local storage
const localStorageProject = (newProject) => {
  // Store the new project data in a variable
  const storeNewProject = newProject;

  // Retrieve the existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  // Push the new project data to the existing projects array
  storedProjects.push(storeNewProject);

  // Update the "projects" key in local storage with the modified projects array
  localStorage.setItem("projects", JSON.stringify(storedProjects));
};

// Function to create and add stored projects to projectsArray
const createStoredProjects = (title, todos, active) => {
  let newProject = Project();
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  projectsArray.push(newProject);
};

// Function to store a new todo in local storage
const localStorageTodos = (newTodo) => {
  // Retrieve existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  if (Array.isArray(storedProjects)) {
    // Find the active project
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

// Export statements to make functions available to other modules
export { onloadStorage, localStorageProject, localStorageTodos };
