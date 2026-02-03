document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENU MOBILE ---
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // --- NAVBAR SCROLL ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- ANIMATIONS D'APPARITION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // --- FORMULAIRE CONTACT ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi...';
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Envoyé !';
                btn.style.backgroundColor = 'var(--success)';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1000);
        });
    }

    // =========================================
    // GESTION DES MODALES (TIMELINE)
    // =========================================
    
    // Fonction pour ouvrir une modale
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêche le scroll derrière
        } else {
            console.error("Modale introuvable : " + modalId);
        }
    };

    // Fonction pour fermer une modale
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Réactive le scroll
        }
    };

    // Fermer en cliquant en dehors de la boîte
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
});