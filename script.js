document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку "Скопировать ID"
    const copyBtn = document.querySelector('.copy-btn');

    // Находим элемент с ID пользователя
    const userId = document.querySelector('.profile-right strong');

    // Проверяем, что элементы найдены
    if (copyBtn && userId) {
        copyBtn.addEventListener('click', () => {
            // Копируем текст ID пользователя в буфер обмена
            navigator.clipboard.writeText(userId.textContent)
                .then(() => {
                    // Добавляем уведомление в интерфейс
                    const notification = document.createElement('div');
                    notification.textContent = 'ID успешно скопирован!';
                    notification.className = 'copy-notification';
                    document.body.appendChild(notification);

                    // Убираем уведомление через 2 секунды
                    setTimeout(() => {
                        notification.remove();
                    }, 2000);
                })
                .catch(err => {
                    console.error('Ошибка при копировании: ', err);
                });
        });
    } else {
        console.error('Кнопка или элемент с ID пользователя не найдены');
    }
});

