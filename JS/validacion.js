const err = document.getElementById('error')
const name = document.getElementById('name')

form.addEventListener('submit', validation)

function validation(event){
    event.preventDefault()
    var messages = []
    if(! Number.isInteger(parseInt(edad.value))){
        messages.push('Coloque una edad valida')
    }
    if(name.value.length<2){
        messages.push('el nombre debe tener al menos 2 letras')
    }
    displaymessages()

    function displaymessages (){
        if(messages.length > 0){
            err.innerText = messages.join(', ')
    }else alert('Presione aqui para enviar')
    form.submit()
    }
}


/*const name = document.getElementById('name')
const surname = document.getElementById('surname')
const edad = document.getElementById('edad')
const comonosconociste = document.getElementById('comonosconociste')
const quiero = document.getElementById('quiero')
const form = document.getElementById('form')
const err = document.getElementById('error')
form.addEventListener('submit', validation)
*/
