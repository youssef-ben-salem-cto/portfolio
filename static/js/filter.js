document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.getElementById('master-index-filters');
  if (!filterContainer) return;

  const caseStudies = document.querySelectorAll('.case-study-card');
  const filterPills = document.querySelectorAll('.filter-pill');

  // ── STATE RESTORATION from URL param ────────────────────────────────────
  // Triggered when returning from a case study via case-study.js ESC / back link.
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    try {
      const state = JSON.parse(decodeURIComponent(filterParam));
      const targetPill = document.querySelector(
        `.filter-pill[data-filter-type="${state.type}"][data-filter-value="${state.value}"]`
      );
      if (targetPill) {
        targetPill.click(); // Triggers the existing filtering logic below
      }
    } catch (err) {
      // Malformed state — silently ignore and show all cards
    }
    // Clean URL without reloading to keep the address bar tidy
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  filterContainer.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    // Toggle active state on pills
    const isActive = pill.classList.contains('active-filter');
    const filterType = pill.dataset.filterType;
    const filterValue = pill.dataset.filterValue;

    // Reset all pills of the same type or all pills?
    // The requirement says "interactive filter pills", let's make it a single filter or multiple.
    // Usually, clicking a pill activates it and deactivates others.
    
    if (isActive) {
      pill.classList.remove('active-filter', 'bg-primary', 'text-white', 'dark:text-white', 'border-primary');
      pill.classList.add('bg-bg-secondary/50', 'text-text-secondary');
    } else {
      // Deactivate all pills in the same group or all pills?
      filterPills.forEach(p => {
        p.classList.remove('active-filter', 'bg-primary', 'text-white', 'dark:text-white', 'border-primary');
        p.classList.add('bg-bg-secondary/50', 'text-text-secondary');
      });
      pill.classList.remove('bg-bg-secondary/50', 'text-text-secondary');
      pill.classList.add('active-filter', 'bg-primary', 'text-white', 'dark:text-white', 'border-primary');
    }

    // Determine currently active filter
    const activePill = document.querySelector('.filter-pill.active-filter');

    // ── STATE PERSISTENCE ─────────────────────────────────────────────────
    // Persist the active filter so case-study.js can restore it on back-navigation.
    if (activePill) {
      sessionStorage.setItem('masterIndexFilterState', JSON.stringify({
        type: activePill.dataset.filterType,
        value: activePill.dataset.filterValue
      }));
    } else {
      sessionStorage.removeItem('masterIndexFilterState');
    }
    
    caseStudies.forEach(card => {
      if (!activePill) {
        // Show all
        showCard(card);
        return;
      }

      const activeType = activePill.dataset.filterType;
      const activeValue = activePill.dataset.filterValue;

      // Check if card matches
      const cardValue = card.dataset[`filter${capitalizeFirstLetter(activeType)}`];
      
      // If card has multiple values (like tags), we might need to parse. For now, strict match or includes if comma-separated.
      if (cardValue && cardValue.split(',').map(v=>v.trim()).includes(activeValue)) {
        showCard(card);
      } else {
        hideCard(card);
      }
    });
  });

  function showCard(card) {
    card.classList.remove('hidden');
    // small delay to allow display block to apply before transition
    requestAnimationFrame(() => {
      card.classList.remove('opacity-0', 'scale-95');
      card.classList.add('opacity-100', 'scale-100');
    });
  }

  function hideCard(card) {
    card.classList.remove('opacity-100', 'scale-100');
    card.classList.add('opacity-0', 'scale-95');
    // Wait for transition to complete before setting hidden
    setTimeout(() => {
      if (card.classList.contains('opacity-0')) {
        card.classList.add('hidden');
      }
    }, 300); // 300ms matches duration-300
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
