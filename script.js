let contadores = {
    coracao: 0,
    agua: 0
};

function atualizarContadores() {
    document.getElementById('contador-coracao').textContent = contadores.coracao;
    document.getElementById('contador-agua').textContent = contadores.agua;
}

document.getElementById('botao-coracao')?.addEventListener('click', function() {
    contadores.coracao++;
    atualizarContadores();
    this.classList.add('ativo');
    setTimeout(() => this.classList.remove('ativo'), 300);
    console.log('❤️ Coração curtido! Total:', contadores.coracao);
});

document.getElementById('botao-agua')?.addEventListener('click', function() {
    contadores.agua++;
    atualizarContadores();
    this.classList.add('ativo');
    setTimeout(() => this.classList.remove('ativo'), 300);
    console.log('💧 Água curtida! Total:', contadores.agua);
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            console.log('Navegando para: ' + this.textContent);
        }
    });
});

console.log('Bem-vindo ao blog "Água que não vemos"! 🌊');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    atualizarContadores();

    const conteudo = document.querySelector('.conteudo');
    conteudo.style.opacity = '0';
    conteudo.style.transform = 'translateY(20px)';

    setTimeout(() => {
        conteudo.style.transition = 'all 0.6s ease';
        conteudo.style.opacity = '1';
        conteudo.style.transform = 'translateY(0)';
    }, 100);
});
