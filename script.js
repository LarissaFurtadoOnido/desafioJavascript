/* Crie um código que permita ao usuário inserir uma data e verificar se ela é uma data
futura ou passada.*/

const data = document.getElementById("data")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(e){
    e.preventDefault()

    const date = new Date('data')
    console.log(date.getDate())
})