document.getElementById("rain-button").addEventListener("click", startRain);

function startRain() {
    for (let i = 0; i < 100; i++) { // Criar 20 ratos
        createRat();
    }
}

function createRat() {
    const rat = document.createElement("img");
    rat.src = "ratatat.png"; // Imagem do rato
    rat.classList.add("rat");
    document.body.appendChild(rat);

    const startX = Math.random() * window.innerWidth; // Posição inicial aleatória no eixo X
    const endY = window.innerHeight + 100; // Posição final abaixo da tela

    // Inicializar posição do rato
    rat.style.left = startX + "px";
    rat.style.top = -100 + "px";

    // Animação de queda
    rat.animate(
        [
            { top: -100 + "px" },
            { top: endY + "px" }
        ],
        {
            duration: Math.random() * 2000 + 1000, // Duração aleatória entre 1 e 3 segundos
            easing: "ease-in",
            iterations: 1,
            fill: "forwards"
        }
    );

    // Remover o rato da tela após a animação
    rat.addEventListener("animationend", () => {
        rat.remove();
    });
}