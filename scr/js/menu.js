document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav'); // Seleciona o elemento <nav>
    const navLinks = document.querySelectorAll('.nav-list li a'); // Seleciona todos os links do menu

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active'); // Alterna a classe 'active' no elemento <nav>
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});