(function() {
    // Constants
    const THEME_KEY = 'theme';
    const DARK_THEME = 'dark';
    const NOTIFICATIONS_KEY = 'notifications';
    const SELECTORS = {
        darkToggle: '#darkToggle',
        lightToggle: '#lightToggle',
        body: 'body',
        tokenContainer: '#tokenContainer',
        settings: '#settings',
        closePopupBtn: '#closePopupBtn',
        notifications: '#notifications'
    };

    // Cache DOM elements
    const elements = {
        darkToggle: document.querySelector(SELECTORS.darkToggle),
        lightToggle: document.querySelector(SELECTORS.lightToggle),
        body: document.querySelector(SELECTORS.body),
        popup: document.querySelector(SELECTORS.tokenContainer),
        setButton: document.querySelector(SELECTORS.settings),
        closePopupBtn: document.querySelector(SELECTORS.closePopupBtn),
        notificationsDiv: document.querySelector(SELECTORS.notifications)
    };

    // Apply the saved theme from localStorage
    function applySavedTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme === DARK_THEME) {
            setTheme(DARK_THEME);
        } else {
            setTheme('light');
        }
    }

    // Set the theme and update the display of theme toggle buttons
    function setTheme(theme) {
        if (theme === DARK_THEME) {
            elements.body.classList.add(DARK_THEME);
            elements.darkToggle.style.display = 'none';
            elements.lightToggle.style.display = 'inline';
        } else {
            elements.body.classList.remove(DARK_THEME);
            elements.darkToggle.style.display = 'inline';
            elements.lightToggle.style.display = 'none';
        }
        saveThemePreference(theme);
    }

    // Save the theme preference to localStorage
    function saveThemePreference(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }

    // Show the token popup
    function showPopup() {
        elements.popup.classList.add('show');
    }

    // Hide the token popup
    function hidePopup() {
        elements.popup.classList.remove('show');
    }

    function sanitizeText(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Event listeners
    elements.darkToggle.addEventListener('click', () => setTheme(DARK_THEME));
    elements.lightToggle.addEventListener('click', () => setTheme('light'));
    elements.setButton.addEventListener('click', showPopup);
    elements.closePopupBtn.addEventListener('click', hidePopup);
    
    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        applySavedTheme();
        loadNotifications();
    });
})();
