const inputElement = document.querySelector('input')
const btnAdd = document.querySelector('.btnAdd')
const ulElement = document.querySelector('ul')

btnAdd.onclick = ev => {
    ev.preventDefault()

    if(inputElement.value){
        const textElement = document.createElement('span')
        textElement.innerHTML = inputElement.value

        const btnRemove = document.createElement('button')
        btnRemove.setAttribute('class', 'btnRemove')
        btnRemove.innerHTML = 'Remover'

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
