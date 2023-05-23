import "./style.css";

const formDiv = document.createElement("div");
const form = document.createElement("form");

const title = document.createElement("div");
const titleLabel = document.createElement("label");
const titleInput = document.createElement("input");

const priority = document.createElement("div");
const priorityLabel = document.createElement("label");
const priorityLevelDiv = document.createElement("div");
const priorityLevelLow = document.createElement("p");
const priorityLevelMid = document.createElement("p");
const priorityLevelHigh = document.createElement("p");
const priorityInput = document.createElement("input");

const description = document.createElement("div");
const descriptionLabel = document.createElement("label");
const descriptionInput = document.createElement("textarea");

const dueDate = document.createElement("div");
const dueDateLabel = document.createElement("label");
const dueDateInput = document.createElement("input");

const notes = document.createElement("div");
const notesLabel = document.createElement("label");
const notesInput = document.createElement("textarea");

const complete = document.createElement("div");
const completeLabel = document.createElement("label");
const completeInput = document.createElement("input");

const submit = document.createElement("button");

formDiv.setAttribute("id", "form-div");

title.setAttribute("id", "todo-title");
titleLabel.setAttribute("for", "title");
titleLabel.textContent = "Title:";
titleInput.setAttribute("type", "text");
titleInput.setAttribute("name", "title");
titleInput.setAttribute("id", "title");

priority.setAttribute("id", "todo-priority");
priorityLabel.setAttribute("for", "priority");
priorityLabel.textContent = "Priority:";
priorityLevelDiv.setAttribute("id", "priority-level");
priorityLevelLow.textContent = "Low";
priorityLevelLow.style.textShadow = "2px 2px 8px #14d10a";
priorityLevelMid.textContent = "Medium";
priorityLevelMid.style.textShadow = "2px 2px 8px #fad900";
priorityLevelHigh.textContent = "High";
priorityLevelHigh.style.textShadow = "2px 2px 8px #fa000c";

priorityInput.setAttribute("type", "range");
priorityInput.setAttribute("name", "priority");
priorityInput.setAttribute("id", "priority");
priorityInput.setAttribute("min", "1");
priorityInput.setAttribute("max", "3");

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

notes.setAttribute("id", "todo-notes");
notesLabel.setAttribute("for", "notes");
notesLabel.textContent = "Notes:";
notesInput.setAttribute("name", "notes");
notesInput.setAttribute("id", "notes");
notesInput.setAttribute("rows", "5");
notesInput.setAttribute("cols", "33");

complete.setAttribute("id", "todo-checklist");
completeLabel.setAttribute("for", "complete");
completeLabel.textContent = "Complete";
completeInput.setAttribute("type", "checkbox");
completeInput.setAttribute("name", "complete");
completeInput.setAttribute("id", "complete");

submit.setAttribute("id", "submit");
submit.textContent = "submit";

const formCreate = () => {
  formDiv.appendChild(form);
  form.appendChild(title);
  form.appendChild(priority);

  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(notes);
  form.appendChild(complete);
  form.appendChild(submit);
  title.appendChild(titleLabel);
  title.appendChild(titleInput);
  priority.appendChild(priorityLabel);
  priority.appendChild(priorityLevelDiv);
  priorityLevelDiv.appendChild(priorityLevelLow);
  priorityLevelDiv.appendChild(priorityLevelMid);
  priorityLevelDiv.appendChild(priorityLevelHigh);
  priority.appendChild(priorityInput);
  description.appendChild(descriptionLabel);
  description.appendChild(descriptionInput);
  dueDate.appendChild(dueDateLabel);
  dueDate.appendChild(dueDateInput);
  notes.appendChild(notesLabel);
  notes.appendChild(notesInput);
  complete.appendChild(completeInput);
  complete.appendChild(completeLabel);
};

const formClear = () => {
  submit.addEventListener("click", () => {
    form.reset();
  });
};

export { formCreate, formDiv, submit, completeInput, formClear };
