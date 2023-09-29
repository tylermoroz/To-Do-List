// Importing styles and modules
import "./style.css"; // Import styles from CSS file
import { projectsArray } from "./projects.js"; // Import project data from projects.js
import {
  projectFormDiv,
  changeActiveClass,
  activeProject,
} from "./projectForm.js"; // Import elements and functions related to project form
import {
  activeProjectDiv,
  activeProjectHead,
  activeProjectTitle,
  activeTodoDiv,
} from "./activeProject.js"; // Import elements related to active project display
import { todoFormContainer } from "./toDoForm.js"; // Import todo form container
import { onloadStorage } from "./storeProjects.js"; // Import function to load stored projects

// Get a reference to the content container in the HTML file
const content = document.querySelector("#content");

// Append project form, active project display, and todo form container to the content container
content.appendChild(projectFormDiv);
content.appendChild(activeProjectDiv);
content.appendChild(todoFormContainer);

// Append active project header and todo list to the active project display
activeProjectDiv.appendChild(activeProjectHead);
activeProjectDiv.appendChild(activeTodoDiv);

// Append active project title to the active project header
activeProjectHead.appendChild(activeProjectTitle);

// Call functions to initialize project form, active project, and load stored projects
changeActiveClass(); // Initialize project form behavior
activeProject(); // Initialize active project display
onloadStorage(); // Load projects from local storage

// Export the content container for use in other modules
export { content };
