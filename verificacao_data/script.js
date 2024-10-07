/* Crie um código que permita ao usuário inserir uma data e verificar se ela é uma data
futura ou passada.*/

const data = document.getElementById("data");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const dataInput = new Date(data.value);
    const hoje = new Date();

    if (dataInput > hoje) {
        console.log("A data do input é depois de hoje.");
    } else if (dataInput < hoje) {
        console.log("A data do input é antes de hoje.");
    } else {
        console.log("A data do input é hoje.");
    }
});
