class Task {
    constructor(msg, target, ref) {
        this.msg = msg; //message to put in the task
        this.target = target; //where to put the task
        this.ref = ref; //unic id for each task
    }

    create() {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const del = document.createElement("button");

        div.appendChild(p);
        div.appendChild(del);

        p.innerHTML = this.msg;
        div.id = this.ref;
        del.innerHTML = "delete";

        del.addEventListener("click", () => {
            document.getElementById(this.ref).remove();
        });

        div.classList.add("task");

        this.target.appendChild(div);
    }
}
export { Task };
