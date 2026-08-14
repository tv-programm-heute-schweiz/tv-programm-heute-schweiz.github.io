(() => {
  const dateNodes = document.querySelectorAll('[data-current-date]');
  const now = new Date();
  const formatted = new Intl.DateTimeFormat('de-CH', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  }).format(now);
  dateNodes.forEach((node) => { node.textContent = formatted; });

  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-menu]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }
})();
