// Убедимся, что Telegram WebApp API загружен
window.Telegram.WebApp.ready();

// Устанавливаем тему из Telegram
function setTelegramTheme() {
    const themeParams = window.Telegram.WebApp.themeParams;
    document.documentElement.style.setProperty('--tg-theme-bg-color', themeParams.bg_color || '#121212');
    document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', themeParams.secondary_bg_color || '#1e1e1e');
    document.documentElement.style.setProperty('--tg-theme-text-color', themeParams.text_color || '#ffffff');
    document.documentElement.style.setProperty('--tg-theme-button-text-color', themeParams.button_text_color || '#00a878');
}

// Инициализация темы
setTelegramTheme();


