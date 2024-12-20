document.addEventListener('DOMContentLoaded', () => {
    // Копирование ID в буфер обмена
    const copyBtn = document.querySelector('.copy-btn');
    const userId = document.querySelector('.id-number').textContent;

    copyBtn.addEventListener('click', () => {
        // Копируем текст в буфер обмена
        navigator.clipboard.writeText(userId).then(() => {
            showCopyNotification('ID скопирован!');
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
    });

    // Функция для отображения уведомления
    function showCopyNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Удаляем уведомление через 2 секунды
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
});
