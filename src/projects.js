const projectsArray = [];

const Project = (title, todos, active) => {
  return { title, todos, active };
};

const createProject = (title, todos) => {
  let newProject = Project();
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = false;
  projectsArray.push(newProject);
};

// const Todo = (title, dueDate, description, priority, notes, complete) => {
//   return { title, dueDate, description, priority, notes, complete };
// };

// const createTodo = (
//   title,
//   dueDate,
//   description,
//   priority,
//   notes,
//   complete,
//   newProject
// ) => {
//   let newTodo = Todo();
//   newTodo.title = title;
//   newTodo.dueDate = dueDate;
//   newTodo.description = description;
//   newTodo.priority = priority;
//   newTodo.notes = notes;
//   newTodo.complete = complete;
//   newProject.push(newTodo);
// };

// createTodo(
//   "deadlift",
//   "10-28-2023",
//   "feet shoulder width apart and lift with hips.",
//   "high",
//   "stretch, try for 3x12",
//   "incomplete",
//   projectsArray[0].todos
// );

// createTodo(
//   "bench",
//   "11-23-2189",
//   "elbows tucked, bring bar to chest and press up",
//   "high",
//   "warm up, try for 3x8",
//   "incomplete",
//   projectsArray[0].todos
// );

// createTodo(
//   "chicken",
//   "09-03-2047",
//   "marinate chicken breast, heat bbq to 350, cook chicken for 8 minutes on each side or until inside temp is 160 degrees",
//   "high",
//   "use maple marinade",
//   "incomplete",
//   projectsArray[1].todos
// );

export { projectsArray, createProject };
