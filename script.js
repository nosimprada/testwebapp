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



document.addEventListener('DOMContentLoaded', () => {
    const cryptoData = [
        { name: 'Bitcoin', balance: 0.2322, usdValue: 97376.16, icon: 'bitcoin.png' },
        { name: 'Tether', balance: 10, usdValue: 1, icon: 'tether.png' },
        { name: 'BNB', balance: 0, usdValue: 683.76, icon: 'bnb.png' },
        { name: 'Cosmos', balance: 0, usdValue: 6.92, icon: 'cosmos.png' },
        { name: 'Litecoin', balance: 0.2, usdValue: 4.55, icon: 'ltc.png' },
    ];

    const cryptoList = document.getElementById('cryptoList');
    const toggleBalancesBtn = document.getElementById('toggleBalances');
    let showEmptyBalances = true;

    // Функция для отображения криптовалют
    function renderCryptos() {
        cryptoList.innerHTML = ''; // Очищаем список перед отрисовкой
        cryptoData.forEach(crypto => {
            if (!showEmptyBalances && crypto.balance === 0) return; // Пропускаем нулевые балансы, если они скрыты

            const cryptoItem = document.createElement('div');
            cryptoItem.className = 'crypto-item';

            cryptoItem.innerHTML = `
                <div class="crypto-info">
                    <div class="crypto-circle">
                        <img src="assets/coins/${crypto.icon}" alt="${crypto.name}" class="crypto-icon">
                    </div>
                    <div>
                        <span class="crypto-name">${crypto.name}</span>
                        <p class="crypto-rate">${crypto.usdValue.toFixed(2)}$</p>
                    </div>
                </div>
                <div>
                    <p class="crypto-amount">${crypto.balance.toFixed(4)}</p>
                    <p class="crypto-usd-value">${(crypto.balance * crypto.usdValue).toFixed(2)}$</p>
                </div>
            `;
            cryptoList.appendChild(cryptoItem);
        });
    }

    // Событие для переключения показа балансов
    toggleBalancesBtn.addEventListener('click', () => {
        showEmptyBalances = !showEmptyBalances; // Переключаем состояние
        toggleBalancesBtn.innerHTML = showEmptyBalances
            ? 'Скрыть пустые балансы <i class="fa-solid fa-eye-slash"></i>'
            : 'Показать все <i class="fa-solid fa-eye"></i>';
        renderCryptos(); // Перерисовываем список
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
