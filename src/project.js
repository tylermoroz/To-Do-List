const project = (title, description, dueDate, priority, [...todos]) => {

    return {
        title,
        description,
        dueDate,
        priority,
        todos
    }
}

export default project;