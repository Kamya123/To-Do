window.onload = () => {
    const todo = document.querySelector(".to-do");
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const add_task = document.querySelector("#add-task");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const task = input.value;
        console.log(task);
    });
}