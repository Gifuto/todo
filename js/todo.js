const field = document.querySelector('.field');
const list = document.querySelector('.list');
const btn = document.querySelector('.add');

function createTask(value) {
    const task = document.createElement('div');
    task.textContent = value;
    task.classList.add('task');
    return task;
}

function addTask() {
    if (field.value != null) {
        const newTask = createTask(field.value);
        list.appendChild(newTask);
        field.value = '';
    }     
}

btn.addEventListener('click', addTask);