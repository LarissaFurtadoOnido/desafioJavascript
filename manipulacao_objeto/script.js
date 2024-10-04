/*
Crie um objeto Pessoa com as propriedades nome, idade e cidade. Mostre esses
dados em uma tabela e, ao clicar em um botão, permita a atualização das informações
através de um formulário.
*/

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
    let index = 0
    const novos = document.querySelectorAll("#novo tr")
    novos.forEach((linha, index) => {
        const nome = linha.querySelector("#nomeNovo")
        const idade = linha.querySelector("#idadeNovo")
        const cidade = linha.querySelector("#cidadeNovo")
        
        
        if (nome && idade && cidade) {
            const nomeNovo = nome.value.trim()
            const idadeNovo = idade.value.trim()
            const cidadeNovo = cidade.value.trim()

            if (nomeNovo && idadeNovo && cidadeNovo) { 
                const linhaAntiga = document.querySelector(`#antigo tr[data-id="${index + 1}"]`)
                linhaAntiga.querySelector("#antigo #nome").textContent = nomeNovo
                linhaAntiga.querySelector("#antigo #idade").textContent = idadeNovo
                linhaAntiga.querySelector("#antigo #cidade").textContent = cidadeNovo
            }
        }
    })  
     
    popup.close()
})



