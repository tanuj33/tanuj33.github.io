// Simple theme toggle that persists to localStorage and sets a data-theme attribute on :root
(function(){
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const key = 'tanuj33-theme';

  function applyTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
  }

  // load saved
  const saved = localStorage.getItem(key) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);

  // update button text
  function updateButton(){
    const isDark = root.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDark ? 'Light' : 'Dark';
  }
  updateButton();

  toggle.addEventListener('click', function(){
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(key,next);
    updateButton();
  });
})();