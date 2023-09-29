// Import statements to bring in functions and data from other modules
import { displayTodos } from "./activeProject.js"; // Importing the displayTodos function
import { localStorageProject, localStorageTodos } from "./storeProjects.js"; // Importing functions related to local storage

// Define an empty array to store projects
const projectsArray = [];

// Factory function to create a project object
const Project = (title, todos, active) => {
  return { title, todos, active };
};

// Function to create a new project and add it to the projectsArray
const createProject = (title, todos, active) => {
  // Create a new project object
  let newProject = Project();
  // Assign properties to the new project
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  // Push the new project to the projectsArray
  projectsArray.push(newProject);
  // Save the new project to local storage
  localStorageProject(newProject);
};

// Factory function to create a todo object
const Todo = (title, dueDate, description, priority, notes, complete) => {
  return { title, dueDate, description, priority, notes, complete };
};

// Function to create a new todo, display it, add it to a project, and save it to local storage
const createTodo = (
  title,
  dueDate,
  description,
  priority,
  notes,
  complete,
  newProject
) => {
  // Create a new todo object
  let newTodo = Todo();
  // Assign properties to the new todo
  newTodo.title = title;
  newTodo.dueDate = dueDate;
  newTodo.description = description;
  newTodo.priority = priority;
  newTodo.notes = notes;
  newTodo.complete = complete;
  // Display the new todo
  displayTodos(newTodo);
  // Push the new todo to the specified project
  newProject.push(newTodo);
  // Save the new todo to local storage
  localStorageTodos(newTodo);
};

// Export statements to make functions and data available to other modules
export { projectsArray, createProject, createTodo, Project };
