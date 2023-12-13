class Task {
    constructor(msg, target, ref) {
        this.msg = msg; //message to put in the task
        this.target = target; //where to put the task
        this.ref = ref;
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
        div.id = this.ref;
        del.addEventListener("click", () => {
            document.getElementById(this.ref).remove();
        });
    }
}
export { Task };
