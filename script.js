
window.onload = () => {

    const todo = document.querySelector(".to-do");
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const add_task = document.querySelector("#added-task");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;


        const task_elt = document.createElement("div");
        task_elt.classList.add('task');


//------- Content Part of Task added in the to do --------
        const content_task = document.createElement("div");
        content_task.classList.add('content');

        task_elt.appendChild(content_task);


        const inputVal = document.createElement("input");
        inputVal.classList.add("text");
        inputVal.type = 'text';
        inputVal.value = task;
        inputVal.setAttribute('readonly', 'readonly');

        content_task.appendChild(inputVal);


//------- Actions Part of Task added in the to do --------
        const actions_task = document.createElement("div");
        actions_task.classList.add("actions");

      
        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerText = 'EDIT';


        const dlt_btn = document.createElement('button');
        dlt_btn.classList.add('delete');
        dlt_btn.innerText = 'DELETE';

        actions_task.appendChild(edit_btn);
        actions_task.appendChild(dlt_btn);

        task_elt.appendChild(actions_task);

        add_task.appendChild(task_elt);

        input.value = '';


//-------- EDITING PART IN TASK WHICH IS ADDED IN TODO
        edit_btn.addEventListener('click', (e) => {
            if (edit_btn.innerText == 'EDIT') {
                edit_btn.innerText = 'SAVE';
                inputVal.removeAttribute('readonly');
                inputVal.focus();
            } else {
                edit_btn.innerText = 'EDIT';
                inputVal.setAttribute('readonly', 'readonly');
            }
        });

        dlt_btn.addEventListener('click', (e) => {
            add_task.removeChild(task_elt);
        });

    });
}