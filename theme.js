(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('theme', target);
    });
  }
})();