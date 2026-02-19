const LAST_UPDATED = 'Thu Feb 19 18:15:58 2026 +0000';

const html = document.documentElement;
const btn  = document.getElementById('theme-btn');

function applyTheme(dark) {
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  btn.textContent = dark ? 'light' : 'dark';
}

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved ? saved === 'dark' : prefersDark);

btn.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  applyTheme(!isDark);
});

const lastUpdatedEl = document.getElementById('last-updated');
if (lastUpdatedEl) lastUpdatedEl.textContent = 'Last update: ' + LAST_UPDATED;
