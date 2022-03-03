import todo from './todo.js';
import project from './project.js';

console.log(project("build chair", "build a wooden chair for the home office", "October 28, 2022", 5, [todo("legs", "build legs out of wood", "3:00 pm", 1, "building legs first as foundation for seat", false), todo("seat", "build seat out of wood", "5:00 pm", 2, "build seat out of wood and add inserts for all 4 legs and 7 posts for the backrest", false), todo("backrest", "build backrest out of wood", "7:00 pm", 3, "build backrest out of wood and a hinge to recline when the user leans back", false)]));