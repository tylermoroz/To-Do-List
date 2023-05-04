import { content } from "./index.js";

const formCreate = () => {
  const formDiv = document.createElement("div");
  const form = document.createElement("form");

  const title = document.createElement("div");
  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");

  const description = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("input");

  const dueDate = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");

  const priority = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("input");

  const notes = document.createElement("div");
  const notesLabel = document.createElement("label");
  const notesInput = document.createElement("input");

  const checklist = document.createElement("div");
  const checklistLabel = document.createElement("label");
  const checklistInput = document.createElement("input");

  title.setAttribute("id", "form-title");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:";
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");

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
  checklist.appendChild(checklistLabel);
  checklist.appendChild(checklistInput);

  return { content };
};

export { formCreate };
