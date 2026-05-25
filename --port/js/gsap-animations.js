// GSAP Animations System - Enterprise Hero

// Mouse tracking for quick fact lighting effects (kept for legacy support if needed)
function initQuickFactLighting() {
    const quickFactCards = document.querySelectorAll('.quick-fact-card');
    
    if (quickFactCards.length === 0) return;
    
    quickFactCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded. Loading from CDN...');
        loadGSAP();
        return;
    }
    
    initializeHeroAnimations();
});


// GSAP loader with fallback
function loadGSAP() {
    const loadScript = (src, fallback, onLoad) => {
        console.log(`Loading GSAP from: ${src}`);
        const script = document.createElement('script');
        script.src = src;
        script.onerror = (error) => {
            console.warn(`Failed to load GSAP from ${src}, trying fallback: ${fallback}`);
            const fallbackScript = document.createElement('script');
            fallbackScript.src = fallback;
            fallbackScript.onload = () => {
                console.log('GSAP loaded from fallback successfully');
                onLoad();
            };
            fallbackScript.onerror = (fallbackError) => {
                console.error('Both GSAP sources failed to load:', error, fallbackError);
            };
            document.head.appendChild(fallbackScript);
        };
        script.onload = () => {
            console.log('GSAP loaded successfully from primary source');
            onLoad();
        };
        document.head.appendChild(script);
    };

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js', 
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js',
        () => {
            initializeHeroAnimations();
        });
}

// Main initialization function - Enterprise Hero Sequence
function initializeHeroAnimations() {
    console.log('Initializing enterprise hero animation sequence...');
    
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Initialize quick fact lighting effects
    initQuickFactLighting();

    // Prefers reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Elements to animate
    const profileImage = heroSection.querySelector('[data-animation="profile-image"]');
    const locationBadge = heroSection.querySelector('[data-animation="location-badge"]');
    // Group text elements in order
    const textElements = [];
    ['greeting', 'name', 'tagline', 'description', 'buttons'].forEach(key => {
        const el = heroSection.querySelector(`[data-animation="${key}"]`);
        if (el) textElements.push(el);
    });

    // Initialize typewriter effect
    initTypingEffect();

    if (prefersReducedMotion) {
        // Fallback: simple quick fade in
        const allElements = [];
        if (profileImage) allElements.push(profileImage);
        if (locationBadge) allElements.push(locationBadge);
        allElements.push(...textElements);

        gsap.set(allElements, { opacity: 0 });
        gsap.to(allElements, { opacity: 1, duration: 0.5, stagger: 0.1, ease: "power1.inOut" });
        return;
    }

    // Set initial states for premium sequence
    if (profileImage) gsap.set(profileImage, { opacity: 0, scale: 0.95, y: 20 });
    if (locationBadge) gsap.set(locationBadge, { opacity: 0, y: 15, scale: 0.9 });
    if (textElements.length > 0) gsap.set(textElements, { opacity: 0, y: 30 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (profileImage) {
        tl.to(profileImage, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    }

    if (locationBadge) {
        tl.to(locationBadge, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)"
        }, profileImage ? "-=0.8" : 0);
    }

    if (textElements.length > 0) {
        tl.to(textElements, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out"
        }, profileImage ? "-=1.0" : 0);
    }
}

// Enhanced typewriter effect with multiple concepts
let typingEffectInitialized = false;

function initTypingEffect() {
    if (typingEffectInitialized) return;
    
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;

    const typewriterTextsStr = typewriterElement.getAttribute('data-typewriter-texts');
    const originalText = typewriterElement.getAttribute('data-original-text') || typewriterElement.textContent;
    let concepts = [];
    
    if (typewriterTextsStr) {
        try {
            concepts = JSON.parse(typewriterTextsStr);
        } catch(e) {
            console.error('Failed to parse typewriter texts', e);
            concepts = originalText.split('. ').map(concept => concept.trim()).filter(concept => concept.length > 0);
        }
    } else {
        concepts = originalText.split('. ').map(concept => concept.trim()).filter(concept => concept.length > 0);
    }
    
    if (concepts.length === 0) concepts = ["CTO"];
    
    let currentConceptIndex = 0;
    
    typewriterElement.textContent = '';
    typewriterElement.style.color = 'transparent';
    
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    Object.assign(cursor.style, {
        display: 'inline-block',
        width: '2px',
        height: '1.2em',
        backgroundColor: 'var(--color-primary)',
        marginLeft: '4px',
        verticalAlign: 'text-bottom',
        opacity: 1
    });
    
    typewriterElement.appendChild(cursor);

    // Cursor blinking animation - more deliberate/professional
    const blinkAnim = gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        ease: "steps(1)",
        repeat: -1,
        yoyo: true
    });

    function typeConcept(concept, onComplete) {
        const chars = concept.split('');
        const timeline = gsap.timeline();
        
        // Ensure cursor is visible while typing
        timeline.call(() => blinkAnim.pause());
        timeline.set(cursor, { opacity: 1 });
        
        // Type the concept - fast, professional pacing
        chars.forEach((char, index) => {
            timeline.to(typewriterElement, {
                duration: 0.05,
                onUpdate: function() {
                    const textContent = chars.slice(0, index + 1).join('');
                    typewriterElement.textContent = textContent;
                    typewriterElement.appendChild(cursor);
                    typewriterElement.style.color = 'inherit';
                }
            });
        });
        
        // Pause after typing to read
        timeline.call(() => blinkAnim.resume());
        timeline.to(typewriterElement, { duration: 2.5 });
        
        // Erase the concept
        timeline.call(() => blinkAnim.pause());
        timeline.set(cursor, { opacity: 1 });
        const reversedChars = [...chars].reverse();
        reversedChars.forEach((char, index) => {
            timeline.to(typewriterElement, {
                duration: 0.03,
                onUpdate: function() {
                    const textContent = reversedChars.slice(index + 1).reverse().join('');
                    typewriterElement.textContent = textContent;
                    typewriterElement.appendChild(cursor);
                }
            });
        });
        
        // Pause before next concept
        timeline.call(() => blinkAnim.resume());
        timeline.to(typewriterElement, { duration: 0.8 });
        
        timeline.call(onComplete);
    }

    function startTypingLoop() {
        if (currentConceptIndex >= concepts.length) {
            currentConceptIndex = 0;
        }
        
        typeConcept(concepts[currentConceptIndex], () => {
            currentConceptIndex++;
            setTimeout(startTypingLoop, 100);
        });
    }

    // Start the typing effect after a delay to let the entry animation finish
    setTimeout(startTypingLoop, 1500);
    
    typingEffectInitialized = true;
}

// Performance optimizations
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.resume();
    }
});

window.addEventListener('resize', function() {
    // Refresh any GSAP animations if needed
    if (typeof gsap !== 'undefined') {
        gsap.globalTimeline.invalidate();
    }
});