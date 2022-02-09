const field = document.querySelector('.field')
const list = document.querySelector('.list')
const add = document.querySelector('.add')

function createTask(value) {
    const task = document.createElement('li')
    task.className = 'task'

    const taskText = document.createElement('span')
    taskText.className = 'task-text'
    taskText.textContent = value
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = 'x'
    deleteButton.className = 'delete-btn'
    deleteButton.onclick = function() {
        task.remove()
    }

    task.appendChild(taskText);
    task.appendChild(deleteButton);
    return task
}

function toggleTaskCompletion() {
    const complete = document.querySelector('.task')
    this.classList.toggle('complete')
    return complete
}

function addTask() {
    if (field.value != '') {
        const newTask = createTask(field.value)
        list.appendChild(newTask)
        
        if (list.querySelector('.task').className != 'complete') {
            newTask.addEventListener('click', toggleTaskCompletion)
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