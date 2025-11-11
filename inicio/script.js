// Este código garante que o vídeo comece a tocar em navegadores que podem bloquear o autoplay.
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('meuVideo');
    if (video) {
        // Tenta tocar o vídeo. A propriedade 'muted' no HTML geralmente resolve,
        // mas este é um plano B.
        video.play().catch(error => {
            console.log("A reprodução automática falhou. O vídeo pode estar sendo bloqueado:", error);
            // Poderia-se adicionar um botão de "Play" aqui para o usuário.
        });
    }
});