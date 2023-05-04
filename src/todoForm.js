import { content } from "./index.js";

const formCreate = () => {
  const formDiv = document.createElement("div");
  const form = document.createElement("form");

  const title = document.createElement("div");
  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");

  const description = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("textarea");

  const dueDate = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");

  const priority = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("input");

  const notes = document.createElement("div");
  const notesLabel = document.createElement("label");
  const notesInput = document.createElement("textarea");

  const checklist = document.createElement("div");
  const completeLabel = document.createElement("label");
  const completeInput = document.createElement("input");
  const incompleteLabel = document.createElement("label");
  const incompleteInput = document.createElement("input");

  title.setAttribute("id", "todo-title");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:";
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");

  description.setAttribute("id", "todo-description");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description:";
  descriptionInput.setAttribute("rows", "5");
  descriptionInput.setAttribute("cols", "33");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("id", "description");

  dueDate.setAttribute("id", "todo-due-date");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due Date:";
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("name", "due-date");
  dueDateInput.setAttribute("id", "due-date");

  priority.setAttribute("id", "todo-priority");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority:";
  priorityInput.setAttribute("type", "range");
  priorityInput.setAttribute("name", "priority");
  priorityInput.setAttribute("id", "priority");
  priorityInput.setAttribute("min", "0");
  priorityInput.setAttribute("max", "2");

  notes.setAttribute("id", "todo-notes");
  notesLabel.setAttribute("for", "notes");
  notesLabel.textContent = "Notes:";
  notesInput.setAttribute("name", "notes");
  notesInput.setAttribute("id", "notes");
  notesInput.setAttribute("rows", "5");
  notesInput.setAttribute("cols", "33");

  checklist.setAttribute("id", "todo-checklist");
  completeLabel.setAttribute("for", "complete");
  completeLabel.textContent = "Complete";
  completeInput.setAttribute("type", "checkbox");
  completeInput.setAttribute("name", "complete");
  completeInput.setAttribute("id", "complete");
  completeInput.setAttribute("value", "complete");
  incompleteLabel.setAttribute("for", "incomplete");
  incompleteLabel.textContent = "Incomplete";
  incompleteInput.setAttribute("type", "checkbox");
  incompleteInput.setAttribute("name", "incomplete");
  incompleteInput.setAttribute("id", "incomplete");
  incompleteInput.setAttribute("value", "complete");

  content.appendChild(formDiv);
  formDiv.appendChild(form);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(notes);
  form.appendChild(checklist);
  title.appendChild(titleLabel);
  title.appendChild(titleInput);
  description.appendChild(descriptionLabel);
  description.appendChild(descriptionInput);
  dueDate.appendChild(dueDateLabel);
  dueDate.appendChild(dueDateInput);
  priority.appendChild(priorityLabel);
  priority.appendChild(priorityInput);
  notes.appendChild(notesLabel);
  notes.appendChild(notesInput);
  checklist.appendChild(completeInput);
  checklist.appendChild(completeLabel);
  checklist.appendChild(incompleteInput);
  checklist.appendChild(incompleteLabel);

  return { content };
};

export { formCreate };
