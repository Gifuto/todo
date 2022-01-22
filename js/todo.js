const field = document.querySelector('.field');
const list = document.querySelector('.list');
const btn = document.querySelector('.add');
const check = document.querySelector('.task')

function createTask(value) {
    const task = document.createElement('div');
    task.textContent = value;
    task.classList.add('task');
    return task;
}

function addTask() {
    if (field.value != null) {
        const newTask = createTask(field.value);
        const newCheckBox = createChecBox();
        list.appendChild(newCheckBox)
        list.appendChild(newTask);
        field.value = '';
    }     
}

function createChecBox(value) {
    const checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add('checkbox');
    return checkBox;
}

btn.addEventListener('click', addTask);