# Модуль 9: Browser APIs (БАЗОВО)

## Storage

### Різниця між localStorage і sessionStorage ⭐

**Питання:** У чому різниця між localStorage і sessionStorage?

**Відповідь:**
- **localStorage** - зберігає дані постійно (доки не видалиш вручну або через код)
- **sessionStorage** - зберігає дані лише до закриття вкладки/браузера

```javascript
// localStorage - зберігається назавжди
localStorage.setItem('name', 'Максим');
localStorage.getItem('name'); // 'Максим'

// sessionStorage - лише до закриття вкладки
sessionStorage.setItem('temp', 'тимчасові дані');
sessionStorage.getItem('temp'); // 'тимчасові дані'
```

### Що таке cookies? (базово)

**Питання:** Що таке cookies і навіщо вони потрібні?

**Відповідь:**
Cookies - це маленькі файли, які сайт зберігає у твоєму браузері. Використовуються для:
- Запам'ятовування входу до системи
- Налаштувань сайту
- Аналітики

```javascript
// Створити cookie
document.cookie = "username=Максим";

// Прочитати всі cookies
console.log(document.cookie);
```

## HTTP

### Що таке fetch API? ⭐

**Питання:** Що таке fetch API і навіщо він потрібен?

**Відповідь:**
Fetch API - це сучасний спосіб робити запити до сервера (замінив старий XMLHttpRequest).

```javascript
// Простий GET запит
fetch('https://api.github.com/users/octocat')
  .then(response => response.json())
  .then(data => console.log(data));

// POST запит із даними
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Максим' })
});
```

### Як обробити response? ⭐

**Питання:** Як правильно обробити відповідь від сервера?

**Відповідь:**
```javascript
fetch('/api/data')
  .then(response => {
    // Перевіряємо, чи запит успішний
    if (!response.ok) {
      throw new Error('Помилка запиту');
    }
    return response.json(); // або response.text()
  })
  .then(data => {
    console.log('Дані отримано:', data);
  })
  .catch(error => {
    console.log('Помилка:', error);
  });

// Сучасний спосіб із async/await
async function getData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Помилка');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Помилка:', error);
  }
}
```

## Детальні приклади роботи з fetch API

```javascript
// ===== GET ЗАПИТ =====

async function getUserData(userId) {
    try {
        // Показуємо лоадер (опціонально)
        console.log('Завантаження даних користувача...');

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token-here' // якщо потрібна авторизація
            },
        });

        // Перевіряємо чи запит успішний
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        
        console.log('Дані користувача отримані:', userData);
        return userData;

    } catch (error) {
        console.error('Помилка при отриманні користувача:', error.message);
        
        // Обробляємо різні типи помилок
        if (error.name === 'TypeError') {
            console.error('Проблема з мережею або сервер недоступний');
        } else if (error.message.includes('404')) {
            console.error('Користувача не знайдено');
        } else if (error.message.includes('500')) {
            console.error('Помилка сервера');
        }
        
        throw error; // перекидаємо помилку далі, якщо потрібно
    }
}

// ===== POST ЗАПИТ =====

async function createUser(userData) {
    try {
        console.log('Створення нового користувача...');

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token-here'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newUser = await response.json();
        
        console.log('Користувача створено:', newUser);
        return newUser;

    } catch (error) {
        console.error('Помилка при створенні користувача:', error.message);
        
        // Детальна обробка помилок
        if (error.name === 'TypeError') {
            console.error('Проблема з підключенням до мережі');
        } else if (error.message.includes('400')) {
            console.error('Неправильні дані запиту');
        } else if (error.message.includes('401')) {
            console.error('Не авторизований');
        } else if (error.message.includes('403')) {
            console.error('Доступ заборонено');
        }
        
        throw error;
    }
}

// ===== УНІВЕРСАЛЬНА ФУНКЦІЯ ДЛЯ ЗАПИТІВ =====

async function apiRequest(url, options = {}) {
    // Дефолтні налаштування
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Об'єднуємо дефолтні та передані опції
    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // Перевіряємо чи відповідь містить JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }

    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
}

// ===== ПРИКЛАДИ ВИКОРИСТАННЯ =====

// 1. Виклик GET запиту
async function exampleGetUsage() {
    try {
        const user = await getUserData(1);
        // Робимо щось з отриманими даними
        document.getElementById('user-name').textContent = user.name;
    } catch (error) {
        // Показуємо помилку користувачу
        document.getElementById('error-message').textContent = 'Не вдалося завантажити дані';
    }
}

// 2. Виклик POST запиту
async function examplePostUsage() {
    try {
        const newUserData = {
            name: 'Іван Петренко',
            email: 'ivan@example.com',
            username: 'ivan123'
        };

        const createdUser = await createUser(newUserData);
        console.log('Успішно створено користувача з ID:', createdUser.id);
        
        // Показуємо успішне повідомлення
        alert('Користувача успішно створено!');
        
    } catch (error) {
        // Показуємо помилку користувачу
        alert('Помилка при створенні користувача: ' + error.message);
    }
}

// 3. Використання універсальної функції
async function exampleUniversalUsage() {
    try {
        // GET запит
        const users = await apiRequest('https://jsonplaceholder.typicode.com/users');
        console.log('Всі користувачі:', users);

        // POST запит
        const newPost = await apiRequest('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Мій новий пост',
                body: 'Текст поста...',
                userId: 1
            })
        });
        console.log('Новий пост:', newPost);

    } catch (error) {
        console.error('Щось пішло не так:', error.message);
    }
}

// ===== ДОДАТКОВІ КОРИСНІ ФУНКЦІЇ =====

// Функція з таймаутом
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return response;
        
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('Запит перевищив час очікування');
        }
        throw error;
    }
}

// Функція з ретраями (повторними спробами)
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    let lastError;

    for (let i = 0; i <= maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            
            if (response.ok) {
                return response;
            }
            
            // Якщо 5xx помилка - пробуємо ще раз
            if (response.status >= 500 && i < maxRetries) {
                console.log(`Спроба ${i + 1} неуспішна, пробуємо ще раз...`);
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // експоненційна затримка
                continue;
            }
            
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            
        } catch (error) {
            lastError = error;
            
            if (i < maxRetries) {
                console.log(`Помилка на спробі ${i + 1}:`, error.message);
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }
    
    throw lastError;
}
```