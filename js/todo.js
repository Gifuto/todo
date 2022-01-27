const field = document.querySelector('.field')
const list = document.querySelector('.list')
const add = document.querySelector('.add')

function createTask(value) {
    const task = document.createElement('li')
    task.textContent = value
    task.className = 'task'
    return task
}

function completeTask() {
    const complete = document.querySelector('.task')
    complete.className = 'complete'
    return complete
}

function addTask() {
    if (field.value != '') {
        const newTask = createTask(field.value)
        list.appendChild(newTask)
        newTask.addEventListener('click', completeTask)
        field.value = ''
    }
}

add.addEventListener('click', addTask)