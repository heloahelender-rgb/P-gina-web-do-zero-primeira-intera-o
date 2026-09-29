// Script para comportamento interativo do blog

// Smooth scroll para os links do menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Previne comportamento padrão apenas se tiver um href válido
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            console.log('Navegando para: ' + this.textContent);
        }
    });
});

// Log de boas-vindas no console
console.log('Bem-vindo ao blog "Água que não vemos"! 🌊');
console.log('Para mais informações, acesse: https://github.com/heloahelender-rgb');

// Função para adicionar efeito visual ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Anima a entrada do conteúdo
    const conteudo = document.querySelector('.conteudo');
    conteudo.style.opacity = '0';
    conteudo.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        conteudo.style.transition = 'all 0.6s ease';
        conteudo.style.opacity = '1';
        conteudo.style.transform = 'translateY(0)';
    }, 100);
});
