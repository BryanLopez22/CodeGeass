document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('ActivarDarkmode');
    const saved = localStorage.getItem('theme');

    function applyTheme(name) {
        if (name === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            if (toggle) toggle.textContent = '🌙';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (toggle) toggle.textContent = '☀️';
        }
    }

    applyTheme(saved);

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            const next = current === 'light' ? 'dark' : 'light';
            applyTheme(next);
            localStorage.setItem('theme', next === 'light' ? 'light' : 'dark');
        });
    }
});
