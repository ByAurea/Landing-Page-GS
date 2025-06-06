// ../scr/js/theme-switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-button');
    const body = document.body;
    const localStorageKey = 'userTheme';

    // Função para aplicar um tema
    function applyTheme(themeName) {
        // Remove todas as classes de tema existentes no body
        body.classList.forEach(className => {
            if (className.startsWith('theme-')) {
                body.classList.remove(className);
            }
        });

        // Adiciona a nova classe de tema
        body.classList.add(`theme-${themeName}`);

        // Atualiza a borda do botão ativo
        themeButtons.forEach(button => {
            button.classList.remove('active-theme');
            if (button.dataset.theme === themeName) {
                button.classList.add('active-theme');
            }
        });

        // Salva o tema no localStorage
        localStorage.setItem(localStorageKey, themeName);
    }

    // Carrega o tema salvo ao carregar a página
    const savedTheme = localStorage.getItem(localStorageKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Se não houver tema salvo, aplica o tema azul (padrão)
        applyTheme('blue');
    }

    // Adiciona event listeners aos botões de tema
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.dataset.theme; // Pega o valor do atributo data-theme
            applyTheme(selectedTheme);
        });
    });
});