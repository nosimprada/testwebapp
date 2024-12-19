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
                    notification.textContent = 'ID скопирован!';
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




document.addEventListener('DOMContentLoaded', () => {
    const cryptoData = [
        { name: 'Bitcoin', balance: 0.2322, usdValue: 0, icon: 'bitcoin.png' },
        { name: 'Tether', balance: 10, usdValue: 10, icon: 'tether.png' },
        
    ];

    const cryptoList = document.getElementById('cryptoList');
    const toggleBalancesBtn = document.getElementById('toggleBalances');
    let showEmptyBalances = true;

    // Функция для отображения криптовалют
    function renderCryptos() {
        cryptoList.innerHTML = '';
        cryptoData.forEach(crypto => {
            if (!showEmptyBalances && crypto.balance === 0) return;

            const cryptoItem = document.createElement('div');
            cryptoItem.className = 'crypto-item';
            cryptoItem.innerHTML = `
                <img src="assets/coins/${crypto.icon}" alt="${crypto.name}">
                <span>${crypto.name}</span>
                <div>
                    <span>${crypto.balance} (${crypto.usdValue.toFixed(2)}$)</span>
                </div>
            `;
            cryptoList.appendChild(cryptoItem);
        });
    }

    // Событие для переключения показа балансов
    toggleBalancesBtn.addEventListener('click', () => {
        showEmptyBalances = !showEmptyBalances;
        toggleBalancesBtn.innerHTML = showEmptyBalances
            ? 'Скрыть пустые балансы <i class="fa-solid fa-eye-slash"></i>'
            : 'Показать все <i class="fa-solid fa-eye"></i>';
        renderCryptos();
    });

    // Изначальная отрисовка
    renderCryptos();
});




document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Убираем активный класс у всех табов
            tabs.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс к текущему табу
            tab.classList.add('active');
        });
    });
});
