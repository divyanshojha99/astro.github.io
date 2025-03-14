// Function to set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Check and apply theme on page load
(function () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // If user has already selected a theme, use it
        setTheme(savedTheme);
    } else {
        // If no theme selected, detect system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
    }
})();

// Toggle button handler
document.getElementById('theme-toggle').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
