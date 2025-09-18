document.addEventListener('DOMContentLoaded', () => {
    // common for all pages //
    document.getElementById("menu-button").addEventListener("click", () => {
        const menu = document.getElementById("hamburger-menu");
        menu.classList.remove("slideOut");
        menu.classList.add("slideIn");
        menu.style.display = "block";
    });
    document.querySelector("#hamburger-menu .close-button").addEventListener("click", () => {
        const menu = document.getElementById("hamburger-menu");
        menu.classList.remove("slideIn");
        menu.classList.add("slideOut");
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
    });

    // page gallery.html //
    // Image modal functionality for gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    const openImageModal = (src, alt) => {
        modalImage.src = src;
        modalImage.alt = alt || 'Image';
        imageModal.classList.remove('hidden');
        // prevent background scroll
        document.body.style.overflow = 'hidden';
        modalClose.focus();
    }

    const closeImageModal = () => {
        imageModal.classList.add('hidden');
        modalImage.src = '';
        document.body.style.overflow = '';
    }

    galleryItems.forEach(img => {
        img.addEventListener('click', (e) => {
            openImageModal(img.src, img.alt);
        });
        // also allow Enter key when focused
        img.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') openImageModal(img.src, img.alt);
        });
        // make images focusable
        img.setAttribute('tabindex', '0');
    });

    modalClose && modalClose.addEventListener('click', closeImageModal);
    imageModal && imageModal.addEventListener('click', (e) => {
        if(e.target === imageModal) closeImageModal();
    });
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !imageModal.classList.contains('hidden')){
            closeImageModal();
        }
    });

    // page faq.html //
    // Accordion functionality for FAQ
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(btn => {
        const panel = btn.nextElementSibling;
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            // close all other panels (optional: single-open behavior)
            faqToggles.forEach(other => {
                if(other !== btn){
                    other.setAttribute('aria-expanded', 'false');
                    other.nextElementSibling.classList.add('hidden');
                    const svg = other.querySelector('svg');
                    svg && (svg.style.transform = '');
                }
            });

            if(expanded){
                btn.setAttribute('aria-expanded', 'false');
                panel.classList.add('hidden');
                const svg = btn.querySelector('svg');
                svg && (svg.style.transform = '');
            } else {
                btn.setAttribute('aria-expanded', 'true');
                panel.classList.remove('hidden');
                const svg = btn.querySelector('svg');
                svg && (svg.style.transform = 'rotate(180deg)');
            }
        });

        btn.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' '){
                e.preventDefault();
                btn.click();
            }
        });
    });
});