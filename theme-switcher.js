// Theme Switcher for EcoFootPrint
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation class
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
    
    // Update theme icon
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeToggle.setAttribute('aria-label', 'Cambiar a tema claro');
        } else {
            themeIcon.textContent = '🌙';
            themeToggle.setAttribute('aria-label', 'Cambiar a tema oscuro');
        }
    }
});