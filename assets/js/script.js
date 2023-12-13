const createBtn = document.querySelector("form button");
const textArea = document.querySelector("textarea");
// let taskMsg;
const taskList = document.querySelector("#taskList");
let taskRef = 0;

class Task {
    constructor(msg, target, taskRef) {
        this.msg = msg; //message to put in the task
        this.target = target; //where to put the task
        this.taskRef = taskRef;
    }

    create() {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerHTML = this.msg;
        div.appendChild(p);
        const del = document.createElement("button");
        del.innerHTML = "delete";
        div.appendChild(del);
        this.target.appendChild(div);
        div.classList.add("task");
        div.id = taskRef;
        del.addEventListener("click", () => {
            document.getElementById(this.taskRef).remove();
        });
    }
}

createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let taskMsg = textArea.value;
    textArea.value = "";
    let task = new Task(taskMsg, taskList, taskRef);
    task.create();
    console.log(task.taskRef);
    taskRef++;
});
