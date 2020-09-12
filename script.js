const noTasks = document.querySelector('.no-tasks')
const txtInputTask = document.querySelector('.txtInputTask')
const btnAddTask = document.querySelector('.btnAddTask')
const ulTasks = document.querySelector('#tasks ul')

let list = JSON.parse(localStorage.getItem('pKey')) || []

function renderTasks() {
    ulTasks.innerHTML = ''

    for(let item of list){
        const liTask = document.createElement('li')
        const textTask = document.createTextNode(item)

        const btnRemove = document.createElement('button')
        btnRemove.innerHTML = `<i class="far fa-times-circle"></i>`
        btnRemove.setAttribute('class', 'btnRemove')

        let pos = list.indexOf(item)
        liTask.setAttribute('onclick', 'removeTask(' + pos + ')')
        
        btnRemove.onclick = (() => {
            ulTasks.removeChild(liTask)
        })
 
        liTask.appendChild(textTask)
        liTask.appendChild(btnRemove)
        ulTasks.appendChild(liTask)

        noTasks.classList.add('hidden')
    }

    if(!list.length) {
        noTasks.classList.remove('hidden')
    }

}

renderTasks()


function addTask() {
    const textTask = txtInputTask.value

    list.push(textTask)

    renderTasks()

    txtInputTask.value = ''

    saveToStorage()
}

function removeTask(pos) {
    list.splice(pos, 1)

    saveToStorage()

    renderTasks()
}

btnAddTask.onclick = ev => {
    ev.preventDefault()

    if(txtInputTask.value) {
        addTask()
    }
}

function saveToStorage() {
    localStorage.setItem('pKey', JSON.stringify(list))
}