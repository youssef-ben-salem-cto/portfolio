/**
 * case-study.js
 * Handles keyboard ESC navigation and "Back to Index" link behaviour
 * for project case study pages.
 *
 * Dependencies: none (Vanilla JS, no frameworks)
 * Architecture: sessionStorage for transient filter state, URL param for handoff.
 */

document.addEventListener('DOMContentLoaded', () => {
    const backLink = document.getElementById('case-study-back-link');

    // ── ESC KEY: navigate back and restore filter state ────────────────────
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        navigateBackToIndex();
    });

    // ── BACK LINK: restore filter state on click ───────────────────────────
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateBackToIndex();
        });
    }

    // ── EVIDENCE CONTAINER ANIMATIONS (Story 2.3) ──────────────────────────
    if (typeof gsap !== 'undefined') {
        const evidenceContainers = document.querySelectorAll('figure.group, .evidence-container');
        if (evidenceContainers.length > 0) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (prefersReducedMotion) {
                // Fallback for reduced motion: simple fade
                gsap.fromTo(evidenceContainers, 
                    { opacity: 0 }, 
                    { opacity: 1, duration: 0.5, stagger: 0.1 }
                );
            } else {
                // Premium boardroom-ready reveal
                gsap.fromTo(evidenceContainers, 
                    { opacity: 0, y: 30 }, 
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 }
                );
            }
        }
    }

    /**
     * Navigate back to the Master Index, restoring any saved filter state.
     * If a filter state exists in sessionStorage, it is passed via the
     * `?filter=` URL query param so filter.js can re-apply it immediately.
     * Otherwise, falls back to window.history.back().
     */
    function navigateBackToIndex() {
        const savedState = sessionStorage.getItem('masterIndexFilterState');
        const indexUrl = backLink ? backLink.href : '/projects/';

        if (savedState) {
            // Navigate to Master Index with serialised filter state
            window.location.href = indexUrl + '?filter=' + encodeURIComponent(savedState);
        } else {
            window.history.back();
        }
    }
});
