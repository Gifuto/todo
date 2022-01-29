const field = document.querySelector('.field')
const list = document.querySelector('.list')
const add = document.querySelector('.add')

function createTask(value) {
    const task = document.createElement('li')
    task.className = 'task'
    task.textContent = value
    return task
}

function completeTask() {
    const complete = document.querySelector('.task')
    this.classList.toggle('complete')
    return complete
}

function addTask() {
    if (field.value != '') {
        const newTask = createTask(field.value)
        list.appendChild(newTask)
        if (document.querySelector('li').className != 'complete') {
            newTask.addEventListener('click', completeTask)
        }
        field.value = ''
    }
}

function enter(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        add.click()
    }
}

field.addEventListener('keyup', enter)

add.addEventListener('click', addTask)