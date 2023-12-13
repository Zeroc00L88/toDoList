import { Task } from "./modules/class.js";

const createBtn = document.querySelector("form button");
const textArea = document.querySelector("textarea");
const taskList = document.querySelector("#taskList");
let taskRef = 0;

createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let taskMsg = textArea.value;
    textArea.value = "";
    let task = new Task(taskMsg, taskList, taskRef);
    task.create();
    taskRef++;
});
