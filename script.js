// Função para revelar o conteúdo após o clique no botão de interrogação
document.getElementById("start").addEventListener("click", function() {
    // Adiciona a classe para revelar o site com transição suave
    document.body.classList.add("revealed");

    // Exibe o conteúdo do site com transição suave após 4 segundos
    setTimeout(() => {
        document.getElementById("site-content").style.display = "block";
    }, 4000); // Atraso de 4 segundos para coincidir com a transição do fundo

    // Esconde o botão de interrogação após o clique
    document.getElementById("start").style.display = "none";

    // Inicia a música automaticamente
    let audio = document.getElementById("backgroundAudio");
    audio.play(); // Tenta reproduzir o áudio
});

// Definindo a data e hora do evento
let targetDate = new Date("2025-02-16T13:00:00");

// Função para atualizar o temporizador

function updateCountdown() {
    let now = new Date();
    let difference = targetDate - now;

    if (difference <= 0) {
        // Quando a contagem chegar a zero, esconde a contagem regressiva
        document.getElementById("countdown").innerHTML = "";

        // Ocultar qualquer outro botão ou elemento indesejado
        let startButton = document.getElementById("start");
        startButton.style.display = "none";  // Esconde o botão de interrogação

        // Exibe o botão de lançamento
        let launchButton = document.getElementById("launch-button");
        
        // Fazendo o botão aparecer com uma animação suave
        launchButton.style.display = "inline-block"; // Exibe o botão
        launchButton.style.opacity = 1; // Torna o botão visível
        launchButton.style.visibility = "visible"; // Torna o botão visível

        // Defina o link do lançamento
        launchButton.href = "https://www.youtube.com/watch?v=TFWob6OuS64"; 
        launchButton.target = "_blank"; // Abre em nova aba

        return; // Para o contador de continuar a atualização
    }

    // Cálculo de dias, horas, minutos e segundos
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Exibindo o temporizador no formato desejado
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Atualiza o temporizador a cada segundo
setInterval(updateCountdown, 1000);
