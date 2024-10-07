const startBtn = document.getElementById("startBtn");
const tempoInput = document.getElementById("tempo");
const mensagemDiv = document.getElementById("mensagem");

startBtn.addEventListener("click", function() {
    const n = parseInt(tempoInput.value);
    
    if (isNaN(n) || n <= 0) {
        mensagemDiv.textContent = "Segundos inválidos.";
        return;
    }

    mensagemDiv.textContent = `Cronômetro para ${n} segundos...`;

    setTimeout(() => {
        mensagemDiv.textContent = "Tempo Esgotado!";
    }, n * 1000);
});
