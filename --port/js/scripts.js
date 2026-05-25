// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Section fade-in system
function initializeSectionFadeIn() {
    const sections = document.querySelectorAll('section[data-animate]');
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize section fade-in when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSectionFadeIn();
});

// Fullscreen toggle for Premium Cards
function toggleFullscreen(btn) {
    const card = btn.closest('.premium-mermaid-card') || btn.closest('.premium-code-card');
    if (!card) return;
    
    card.classList.toggle('fullscreen-mode');
    
    // Toggle icon
    const icon = btn.querySelector('i');
    if (card.classList.contains('fullscreen-mode')) {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
        document.body.style.overflow = 'hidden';
        
        // Move to body to break out of stacking contexts (z-index fix)
        const placeholderId = 'placeholder-' + Math.random().toString(36).substr(2, 9);
        const placeholder = document.createElement('div');
        placeholder.id = placeholderId;
        placeholder.style.display = 'none';
        card.dataset.placeholderId = placeholderId;
        card.parentNode.insertBefore(placeholder, card);
        document.body.appendChild(card);
    } else {
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
        document.body.style.overflow = '';
        
        // Restore to original location
        const placeholderId = card.dataset.placeholderId;
        if (placeholderId) {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.parentNode.insertBefore(card, placeholder);
                placeholder.remove();
            }
        }
    }
}
