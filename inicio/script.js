// script.js

// Exemplo de função: pausa o vídeo quando a aba não está visível
document.addEventListener("visibilitychange", () => {
    const video = document.getElementById("meuVideo");
    if (!video) return;

    if (document.hidden) {
        video.pause();
    } else {
        video.play();
    }
});
