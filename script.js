document.addEventListener('DOMContentLoaded', () => {

    // --- MANIPULAÇÃO DO MENU MÓVEL ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const navLinks = document.querySelectorAll('#mobile-menu .nav-link');

    const openMenu = () => {
        mobileMenu.classList.add('active');      // O CSS do menu usa 'active'
        menuOverlay.classList.add('visible');    // O CSS do fundo escuro usa 'visible'
        document.body.classList.add('menu-open'); // Bloqueia o scroll da página
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('visible');
        document.body.classList.remove('menu-open'); // Libera o scroll
    };

    mobileMenuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA ---
    // Esta parte estava faltando. Ela torna seu texto visível.
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 // A animação começa quando 10% do elemento está na tela
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para fazê-lo aparecer
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Pede ao observador para monitorar cada elemento com a classe .fade-in
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // --- Padronizar rodapé em todas as páginas ---
    
        // Ajusta cores para cinza claro
        

        // Atualiza o conteúdo do rodapé
        
        
    
});
