const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-item a');

// Função para fechar o menu
function fecharMenu() {
    menu.classList.remove('ativo');
    NavMenu.classList.remove('ativo');
}

// Adiciona um event listener para cada link do menu
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Verifica se o menu está aberto
        if (menu.classList.contains('ativo')) {
            // Fecha o menu
            fecharMenu();
        }
        // Navega para o link desejado
        const destino = link.getAttribute('href');
        if (destino.startsWith('#')) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const elementoDestino = document.querySelector(destino);
            if (elementoDestino) {
                const offset = menu.offsetHeight + 100; // Ajusta o valor de deslocamento para compensar a altura do menu e mais um pouco
                window.scrollBy({
                    top: elementoDestino.getBoundingClientRect().top - offset, // Aplica o deslocamento
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Event listener para abrir e fechar o menu
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});
