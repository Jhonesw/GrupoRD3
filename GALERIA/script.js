// ==============================================
// JAVASCRIPT: Carrossel 5s (Seção 1)
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('carousel-wrapper');
    const container = document.getElementById('main-carousel');
    const commentsArea = document.getElementById('comments-area');
    
    if (!wrapper || !container || !commentsArea) return; // Garante que os elementos existem

    const items = document.querySelectorAll('#carousel-wrapper .carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos

    function moveCarousel() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        
        // Calcula o offset e move o carrossel
        const offset = -currentIndex * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    // Inicia o carrossel automático
    setInterval(moveCarousel, intervalTime);

    // BÔNUS: Função para ajustar a altura da área de comentários (só em Desktop)
    function adjustCommentsHeight() {
        // Verifica se o layout é de Desktop (flex-direction: row)
        if (window.innerWidth > 768) { 
            // Garante que o carrossel tenha carregado sua imagem para medir a altura
            const carouselHeight = container.offsetHeight;
            commentsArea.style.height = `${carouselHeight}px`;
            commentsArea.style.justifyContent = 'space-between'; // Distribui os comentários
        } else {
            // Em Mobile, reseta o estilo e deixa o fluxo normal
            commentsArea.style.height = 'auto';
            commentsArea.style.justifyContent = 'flex-start';
        }
    }
    
    // Executa no carregamento e no redimensionamento da tela
    window.addEventListener('load', adjustCommentsHeight);
    window.addEventListener('resize', adjustCommentsHeight);
});