const noTasks = document.querySelector('.no-tasks')
const inputElement = document.querySelector('.inputAdd')
const btnAdd = document.querySelector('.btnAdd')
const ulElement = document.querySelector('ul')

btnAdd.onclick = ev => {
    ev.preventDefault()

    if(inputElement.value){
        noTasks.classList.add('hidden')

        const textElement = document.createElement('span')
        textElement.innerHTML = inputElement.value

        const btnRemove = document.createElement('button')
        btnRemove.setAttribute('class', 'btnRemove')
        btnRemove.innerHTML = `<i class="far fa-times-circle"></i>`

        const liElement = document.createElement('li')
        liElement.appendChild(textElement)
        liElement.appendChild(btnRemove)

        btnRemove.onclick = () => {
            ulElement.removeChild(liElement)
        }

        ulElement.appendChild(liElement) 
        inputElement.value = ""
    }
}