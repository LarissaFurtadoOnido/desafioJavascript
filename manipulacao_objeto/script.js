/*
Crie um objeto Pessoa com as propriedades nome, idade e cidade. Mostre esses
dados em uma tabela e, ao clicar em um botão, permita a atualização das informações
através de um formulário.
*/

const Pessoa = []

const modificar = document.querySelector("#modificar")
const atualizar = document.querySelector("#atualizar")
const popup = document.querySelector("#popup")
const tabela = document.querySelector("#novo")

modificar.addEventListener("click", function(evento){
    evento.preventDefault()
    popup.showModal()

})

atualizar.addEventListener("click", function(evento){
    evento.preventDefault()

    const nome = document.querySelector("#nome").value
    const idade = document.querySelector("#idade").value
    const cidade = document.querySelector("#cidade").value

    

    popup.close()
})



