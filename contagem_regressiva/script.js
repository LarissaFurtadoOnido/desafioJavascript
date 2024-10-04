/*Crie um contador regressivo que inicie a contagem a partir de um número informado
pelo usuário. Mostre o resultado na página e atualize a cada segundo até chegar a 0.*/

const enviar = document.querySelector("#enviar")

enviar.addEventListener("click", function(evento){
    evento.preventDefault()

    const numero = document.querySelector("#num").value
    const resultado = document.querySelector("#resultado")

    document.querySelector("#num").style.display = "none"
    enviar.style.display = "none"

    for (let i = numero; i >= 0; i--){
        setTimeout(() =>{
            resultado.innerText = ""
            resultado.textContent += i + " "
        }, (numero - i) * 1000)
    }

    document.querySelector("body").style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.8393557252002364) 100%)"

})