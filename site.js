(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const sync = () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '☀' : '☾';
    };
    sync();
    btn.addEventListener('click', () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      if (dark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      sync();
    });
  });
})();
