const content = document.querySelector("#content");

const toDos = (title, description, dueDate, priority, notes, checklist) => {
  return { title, description, dueDate, priority, notes, checklist };
};

const newToDo = toDos(
  "Go to the gym",
  "After work, head to LA Fitness and work out your legs.",
  "2023-05-03",
  "High",
  "Bring water, gym bag with change-out, earbuds, and drink preworkout beforehand.",
  "N/A"
);

console.log(newToDo);

export { content };
