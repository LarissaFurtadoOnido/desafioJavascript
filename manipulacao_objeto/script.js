/*
Crie um objeto Pessoa com as propriedades nome, idade e cidade. Mostre esses
dados em uma tabela e, ao clicar em um botão, permita a atualização das informações
através de um formulário.
*/

const Pessoa = []

const btn = document.querySelector("#modificar")
const atualizar = document.querySelector("#atualizar")
const popup = document.querySelector("dialog")
const tabela = document.querySelector("#novo")

btn.addEventListener("click", function(evento){
    evento.preventDefault()
    popup.showModal()
})

atualizar.addEventListener("click", function(evento){
    evento.preventDefault()

    const nome = document.querySelector("#nome").value
    const idade = document.querySelector("#idade").value
    const cidade = document.querySelector("#cidade").value

    let novaLinha = tabela.insertRow(-1)
    Pessoa.push({nome, idade, cidade})

    let cellNome = novaLinha.insertCell(0);
    let cellIdade = novaLinha.insertCell(1);
    let cellCidade = novaLinha.insertCell(2);

    cellNome.textContent = nome;
    cellIdade.textContent = idade;
    cellCidade.textContent = cidade;

    popup.close()
})



