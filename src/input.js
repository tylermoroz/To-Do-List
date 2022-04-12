const inputForm = () => {
    const formDiv = document.createElement('div');
    const form = document.createElement('form');
    
    //create the input element for the title
    const title = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title:';
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');

    //create the input element for the description
    const desc = document.createElement('div');
    const descLabel = document.createElement('label');
    const descInput = document.createElement('input');
    descLabel.setAttribute('for', 'description');
    descLabel.textContent = 'Description:';
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('id', 'desc');
    descInput.setAttribute('name', 'description');

    //create the input element for the start time
    const time = document.createElement('div');
    const timeLabel = document.createElement('label');
    const timeInput = document.createElement('input');
    timeLabel.setAttribute('for', 'time');
    timeLabel.textContent = 'Start time:';
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('id', 'time');
    timeInput.setAttribute('name', 'time');

    //create the input element for the todo priority
    const priority = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const priorityInput = document.createElement('input');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority:';
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('name', 'priority');

    //create the input element for the notes
    const notes = document.createElement('div');
    const notesLabel = document.createElement('label');
    const notesInput = document.createElement('input');
    notesLabel.setAttribute('for', 'notes');
    notesLabel.textContent = 'Notes:';
    notesInput.setAttribute('type', 'text');
    notesInput.setAttribute('id', 'notes');
    notesInput.setAttribute('name', 'notes');

    //create the input element for the checklist
    const checklist = document.createElement('div');
    const checklistLabel = document.createElement('label');
    const checklistInput = document.createElement('input');
    checklistLabel.setAttribute('for', 'checklist');
    checklistLabel.textContent = 'Complete';
    checklistInput.setAttribute('type', 'checkbox');
    checklistInput.setAttribute('id', 'checklist');
    checklistInput.setAttribute('name', 'checklist');

}