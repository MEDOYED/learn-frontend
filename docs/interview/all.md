# Питання на співбесіді Junior Front-end розробника (Evoplay)

## Загальні питання

- **Розкажіть про себе та ваш досвід у фронтенд розробці**
  
  Я Junior Frontend розробник з досвідом створення веб-додатків на React. Вивчаю HTML, CSS, JavaScript, працюю з Git. Розробляю компоненти, працюю з API, адаптивна верстка. Постійно навчаюся новим технологіям і практикую на особистих проектах.

- **Чому ви обрали саме фронтенд розробку?**
  
  Мені подобається бачити результат роботи візуально - створювати інтерфейси, які використовують люди. Frontend поєднує логіку програмування з креативністю дизайну. Можна швидко побачити результат своєї роботи і отримати фідбек від користувачів.

- **Що вас цікавить у роботі фронтенд розробника?**
  
  Цікаво створювати зручні та красиві інтерфейси. Подобається вивчати нові фреймворки і бібліотеки, оптимізувати продуктивність додатків, працювати з анімаціями та інтерактивними елементами. Важливо робити додатки доступними для всіх користувачів.

- **Які проекти ви розробляли? Розкажіть детальніше про найцікавіший**
  
  Розробляв todo додаток на React з можливістю додавання, редагування, видалення завдань. Використовував локальне збереження даних, фільтрацію за статусом. Найцікавіше було реалізувати drag&drop для переміщення завдань між категоріями.

- **Як ви навчаєтесь новим технологіям?**
  
  Читаю офіційну документацію, дивлюся відео-уроки, роблю практичні проекти. Слідкую за спільнотами на GitHub, читаю статті на dev.to і Medium. Важливо не тільки теорію вивчити, а й практикувати на реальних завданнях.

- **Що вас привабило в нашій компанії/вакансії?**
  
  Цікаво працювати над складними проектами в команді досвідчених розробників. Хочу розвиватися в напрямку React і TypeScript. Важливо мати можливість навчатися новим технологіям і підвищувати свій професійний рівень.

## HTML5 питання

### Базові концепції

- **Що таке HTML5 і які його основні особливості?**
  
  HTML5 - нова версія HyperText Markup Language, яка ввела нові семантичні елементи, API і функціональності.
  
  Основні особливості:
  - Нові семантичні елементи (`<header>`, `<nav>`, `<main>`, `<article>`)
  - Нові типи input полів (`email`, `date`, `number`)
  - Мультимедіа елементи (`<audio>`, `<video>`)
  - Canvas для малювання
  - LocalStorage і SessionStorage
  - Підтримка API для геолокації, Drag&Drop

- **Які нові семантичні елементи з'явилися в HTML5?**
  
  ```html
  <!-- Структурні елементи -->
  <header>Шапка сторінки</header>
  <nav>Навігація</nav>
  <main>Основний контент</main>
  <section>Розділ</section>
  <article>Стаття</article>
  <aside>Бокова панель</aside>
  <footer>Підвал сторінки</footer>
  ```
  
  Ці елементи надають значення контенту і поліпшують SEO і доступність.

- **Що таке DOCTYPE і навіщо він потрібен?**
  
  DOCTYPE (Оголошення типу документа) — це інструкція браузеру, яка версія HTML використовується.
  
  ```html
  <!DOCTYPE html> <!-- HTML5 версія -->
  ```
  
  Навіщо потрібен:
  - Вмикає стандартний режим роботи браузера
  - Запобігає активації quirks mode
  - Необхідний для коректної валідації HTML

- **В чому різниця між `<div>` та `<span>`?**
  
  ```html
  <!-- div - блоковий елемент -->
  <div>Оцей блок займає всю ширину</div>
  
  <!-- span - рядковий елемент -->
  <p>Оце текст з <span>виділеним фрагментом</span> всередині</p>
  ```
  
  Основні відмінності:
  - `<div>` - блоковий (display: block), `<span>` - рядковий (display: inline)
  - `<div>` починається з нового рядка, `<span>` - ні
  - `<div>` може містити блокові і рядкові елементи
  - `<span>` може містити тільки рядкові елементи

- **Що таке семантична розмітка і навіщо вона потрібна?**
  
  Семантична розмітка — це використання HTML елементів, які надають значення контенту.
  
  ```html
  <!-- Несемантичний підхід -->
  <div>Заголовок статті</div>
  
  <!-- Семантичний підхід -->
  <h1>Заголовок статті</h1>
  ```
  
  Переваги:
  - Краща доступність (screen readers)
  - Поліпшення SEO
  - Легше читання коду іншими розробниками
  - Поліпшення індексації пошуковими системами

### Форми та інпути

- **Які нові типи інпутів з'явилися в HTML5?**
  
  ```html
  <!-- Нові типи інпутів -->
  <input type="email" placeholder="example@email.com">
  <input type="tel" placeholder="+380501234567">
  <input type="url" placeholder="https://example.com">
  <input type="date"> <!-- вибір дати -->
  <input type="time"> <!-- вибір часу -->
  <input type="number" min="0" max="100"> <!-- числове поле -->
  <input type="range" min="0" max="100"> <!-- повзунок -->
  <input type="color"> <!-- вибір кольору -->
  <input type="search" placeholder="Пошук...">
  ```
  
  Переваги: автоматична валідація, мобільні клавіатури, UI компоненти.

- **Як працює валідація форм в HTML5?**
  
  ```html
  <form>
    <!-- Обов'язкове поле -->
    <input type="email" required placeholder="Обов'язковий email">
    
    <!-- Перевірка за паттерном -->
    <input type="tel" pattern="[0-9]{10}" placeholder="0501234567">
    
    <!-- Обмеження довжини -->
    <input type="text" minlength="3" maxlength="20">
    
    <button type="submit">Надіслати</button>
  </form>
  ```
  
  Браузер автоматично перевіряє дані перед відправкою і показує повідомлення про помилки.

- **Що таке атрибути `required`, `pattern`, `min`, `max`?**
  
  ```html
  <!-- required - обов'язкове поле -->
  <input type="text" required>
  
  <!-- pattern - регулярний вираз -->
  <input type="text" pattern="[A-Za-z]+" title="Лише літери">
  
  <!-- min/max - межі для числових значень -->
  <input type="number" min="18" max="100">
  <input type="date" min="2024-01-01" max="2024-12-31">
  
  <!-- minlength/maxlength - довжина тексту -->
  <input type="password" minlength="8" maxlength="20">
  ```
  
  Ці атрибути забезпечують клієнтську валідацію до відправки даних.

- **В чому різниця між `GET` та `POST` методами?**
  
  ```html
  <!-- GET - дані в URL -->
  <form method="GET" action="/search">
    <input name="query" placeholder="Пошук">
    <button type="submit">Найти</button>
  </form>
  <!-- Результат: /search?query=текст -->
  
  <!-- POST - дані в тілі запиту -->
  <form method="POST" action="/login">
    <input name="username" type="text">
    <input name="password" type="password">
    <button type="submit">Увійти</button>
  </form>
  ```
  
  Основні відмінності:
  
  **GET:**
  - Дані передаються в URL
  - Обмежена довжина даних
  - Можна зберегти в закладках
  - Ідемпотентний (не змінює дані)
  
  **POST:**
  - Дані в тілі запиту
  - Немає обмежень розміру
  - Безпечніший для конфіденційних даних
  - Використовується для зміни даних

### Мультимедіа та API

- **Як працювати з `<audio>` та `<video>` елементами?**
  
  ```html
  <!-- Відео елемент -->
  <video controls width="640" height="480">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Ваш браузер не підтримує відео.
  </video>
  
  <!-- Аудіо елемент -->
  <audio controls preload="auto">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Ваш браузер не підтримує аудіо.
  </audio>
  ```
  
  ```javascript
  // Керування через JavaScript
  const video = document.querySelector('video');
  
  // Відтворення/пауза
  video.play();
  video.pause();
  
  // Обробка подій
  video.addEventListener('loadstart', () => console.log('Початок завантаження'));
  video.addEventListener('canplay', () => console.log('Можна відтворювати'));
  ```

- **Що таке Canvas API?**
  
  Canvas - це HTML5 елемент для малювання графіки і анімацій через JavaScript.
  
  ```html
  <canvas id="myCanvas" width="400" height="400"></canvas>
  ```
  
  ```javascript
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  
  // Малювання примітивів
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 100, 100); // прямокутник
  
  ctx.beginPath();
  ctx.arc(200, 200, 50, 0, 2 * Math.PI); // коло
  ctx.fillStyle = 'blue';
  ctx.fill();
  
  // Малювання тексту
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Привіт, Canvas!', 50, 300);
  ```
  
  Використовується для: ігор, візуалізації, графіків, обробки зображень.

- **Що таке Local Storage, Session Storage?**
  
  Це способи збереження даних у браузері на клієнті.
  
  ```javascript
  // localStorage - довгострокове зберігання
  localStorage.setItem('username', 'Максим');
  const username = localStorage.getItem('username');
  localStorage.removeItem('username');
  localStorage.clear(); // очистити все
  
  // sessionStorage - тільки на час сесії
  sessionStorage.setItem('cart', JSON.stringify(cartItems));
  const cart = JSON.parse(sessionStorage.getItem('cart'));
  
  // Перевірка підтримки
  if (typeof(Storage) !== 'undefined') {
    // Підтримка є
  }
  ```
  
  **Відмінності:**
  - **localStorage:** зберігається до очищення браузера
  - **sessionStorage:** зникає після закриття вкладки
  - **cookies:** малый розмір, відправляються на сервер

- **Що таке Web Workers?**
  
  Web Workers - це спосіб виконувати JavaScript код у фоновому потоці, не блокуючи UI.
  
  ```javascript
  // main.js - основний потік
  const worker = new Worker('worker.js');
  
  // Відправка даних
  worker.postMessage({numbers: [1, 2, 3, 4, 5]});
  
  // Отримання результату
  worker.onmessage = function(e) {
    console.log('Результат:', e.data.result);
  };
  ```
  
  ```javascript
  // worker.js - фоновий потік
  onmessage = function(e) {
    const numbers = e.data.numbers;
    
    // Важкі обчислення
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] * numbers[i];
    }
    
    // Відправка результату
    postMessage({result: sum});
  };
  ```
  
  Переваги: не блокують UI, можливість важких обчислень, паралелізм.

## CSS3 питання

### Базові концепції

- **Що таке CSS і як він працює?**
  
  CSS (Cascading Style Sheets) — мова стилів, яка описує зовнішній вигляд HTML елементів.
  
  ```css
  /* Синтаксис: селектор { властивість: значення; } */
  h1 {
    color: blue; /* Колір тексту */
    font-size: 24px; /* Розмір шрифту */
    margin: 20px; /* Зовнішні відступи */
  }
  ```
  
  **Принцип роботи:**
  1. Браузер читає HTML
  2. Знаходить CSS правила
  3. Застосовує стилі до елементів
  4. Відображає сторінку

- **Які способи підключення CSS до HTML?**
  
  ```html
  <!-- 1. Зовнішній файл (найкращий спосіб) -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- 2. Внутрішні стилі -->
  <style>
    body { background: lightgray; }
  </style>
  
  <!-- 3. Інлайн стилі (не рекомендується) -->
  <p style="color: red;">Червоний текст</p>
  ```
  
  **Пріоритетність:** Інлайн (1000) > ID (100) > Клас (10) > Елемент (1)

- **Що таке специфічність (specificity) в CSS?**
  
  Специфічність — система оцінки пріоритету CSS правил.
  
  ```css
  /* Специфічність: 0,0,0,1 */
  p { color: black; }
  
  /* Специфічність: 0,0,1,0 */
  .highlight { color: yellow; }
  
  /* Специфічність: 0,1,0,0 */
  #main { color: red; }
  
  /* Специфічність: 1,0,0,0 */
  p { color: green !important; }
  ```
  
  **Порядок:** !important > inline > ID > class > element

- **В чому різниця між `class` та `id`?**
  
  ```html
  <!-- ID - унікальний ідентифікатор -->
  <div id="header">Шапка сайту</div>
  
  <!-- Class - може повторюватися -->
  <div class="card">Картка 1</div>
  <div class="card">Картка 2</div>
  <div class="card highlight">Картка 3</div>
  ```
  
  ```css
  /* ID - селектор # */
  #header {
    background: navy;
    color: white;
  }
  
  /* Class - селектор . */
  .card {
    border: 1px solid gray;
    padding: 20px;
  }
  
  .highlight {
    background: yellow;
  }
  ```
  
  **Основні відмінності:**
  - ID: унікальний, висока специфічність, JavaScript hooks
  - Class: можна повторювати, низька специфічність, багаторазове використання

- **Що таке каскадність в CSS?**
  
  Каскадність — принцип, за яким стилі "падають каскадом" від батьківських до дочірніх елементів.
  
  ```css
  /* Батьківський елемент */
  .container {
    color: blue;
    font-family: Arial;
    font-size: 16px;
  }
  
  /* Дочірні елементи успадковують стилі */
  .container p {
    /* Наслідує: color, font-family, font-size */
    margin: 10px; /* Власний стиль */
  }
  ```
  
  **Наслідовані властивості:** color, font-family, font-size, line-height
  **Ненаслідовані:** margin, padding, border, background

### Селектори

- **Які типи селекторів ви знаєте?**
  
  ```css
  /* 1. Елемент */
  p { color: black; }
  
  /* 2. Клас */
  .btn { background: blue; }
  
  /* 3. ID */
  #header { height: 100px; }
  
  /* 4. Атрибут */
  input[type="text"] { border: 1px solid; }
  
  /* 5. Псевдокласи */
  a:hover { color: red; }
  
  /* 6. Псевдоелементи */
  p::before { content: "▶ "; }
  
  /* 7. Комбінатори */
  div > p { margin: 0; } /* Прямі нащадки */
  div p { padding: 10px; } /* Усі нащадки */
  ```

- **Що таке псевдокласи та псевдоелементи?**
  
  ```css
  /* Псевдокласи - стан елемента */
  button:hover { background: lightblue; } /* При наведенні */
  input:focus { border-color: blue; } /* При фокусі */
  a:visited { color: purple; } /* Відвідані посилання */
  li:first-child { font-weight: bold; } /* Перша дитина */
  
  /* Псевдоелементи - віртуальні частини */
  p::first-line { font-variant: small-caps; } /* Перший рядок */
  p::first-letter { font-size: 2em; } /* Перша літера */
  .tooltip::after { /* Додає контент після */
    content: " ℹ️";
    color: blue;
  }
  ```

- **В чому різниця між `:nth-child()` та `:nth-of-type()`?**
  
  ```html
  <div>
    <h2>Заголовок 1</h2>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
    <h2>Заголовок 2</h2>
    <p>Параграф 3</p>
  </div>
  ```
  
  ```css
  /* nth-child() - лічить УСІ елементи */
  p:nth-child(2) { color: red; } /* Параграф 1 (другий елемент) */
  
  /* nth-of-type() - лічить тільки ОДНАКОВІ елементи */
  p:nth-of-type(2) { color: blue; } /* Параграф 2 (другий p) */
  h2:nth-of-type(1) { color: green; } /* Заголовок 1 (перший h2) */
  ```
  
  **Основна відмінність:**
  - `nth-child()` — позиція серед усіх сусідів
  - `nth-of-type()` — позиція серед елементів того ж типу

- **Що робить селектор `>` vs пробіл?**
  
  ```html
  <div class="parent">
    <p>Пряма дитина</p>
    <section>
      <p>Непряма дитина</p>
    </section>
  </div>
  ```
  
  ```css
  /* Прямий нащадок (child selector) */
  .parent > p {
    color: red; /* Лише перший p */
  }
  
  /* Усі нащадки (descendant selector) */
  .parent p {
    font-weight: bold; /* Обидва p */
  }
  ```
  
  **Відмінності:**
  - `>` — вибирає тільки прямі діти (один рівень)
  - пробіл — усі нащадки (всі рівні вкладення)

### Блокова модель

- **Що таке box model?**
  
  Box model - це модель, яка описує структуру кожного HTML елемента.
  
  ```
  ┌─────────────── MARGIN ───────────────┐
  │ ┌───────────── BORDER ─────────────┐ │
  │ │ ┌───────── PADDING ─────────┐ │ │
  │ │ │    CONTENT (width/height)    │ │ │
  │ │ └─────────────────────────┘ │ │
  │ └─────────────────────────────┘ │
  └───────────────────────────────┘
  ```
  
  ```css
  .box {
    width: 200px;         /* Ширина контенту */
    height: 100px;        /* Висота контенту */
    padding: 20px;        /* Внутрішні відступи */
    border: 5px solid red; /* Межа */
    margin: 10px;         /* Зовнішні відступи */
  }
  
  /* Загальна ширина: 200 + 20*2 + 5*2 + 10*2 = 270px */
  ```

- **В чому різниця між `margin` та `padding`?**
  
  ```css
  .element {
    padding: 20px;    /* Внутрішні відступи */
    margin: 30px;     /* Зовнішні відступи */
    background: lightblue;
    border: 1px solid navy;
  }
  ```
  
  **Основні відмінності:**
  
  **Padding:**
  - Відстань між контентом і межею
  - Має колір фону елемента
  - Кліки по padding обробляються елементом
  
  **Margin:**
  - Відстань між елементами
  - Немає кольору (прозорий)
  - Кліки по margin не обробляються

- **Що робить `box-sizing: border-box`?**
  
  ```css
  /* Стандартна модель (content-box) */
  .standard {
    box-sizing: content-box; /* за замовчуванням */
    width: 200px;
    padding: 20px;
    border: 10px solid;
    /* Загальна ширина: 200 + 20*2 + 10*2 = 260px */
  }
  
  /* Оптимізована модель (border-box) */
  .optimized {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 10px solid;
    /* Загальна ширина: 200px (включаючи padding і border) */
    /* Ширина контенту: 200 - 20*2 - 10*2 = 140px */
  }
  
  /* Глобальне застосування */
  * { box-sizing: border-box; }
  ```
  
  **Переваги border-box:**
  - Легше контролювати розміри
  - Передбачуваність розмірів
  - Поліпшення роботи з flexbox/grid

- **Як працює `overflow`?**
  
  ```css
  .container {
    width: 200px;
    height: 100px;
    border: 1px solid black;
  }
  
  /* Контроль переповнення */
  .visible { overflow: visible; }   /* за замовчуванням - видимо все */
  .hidden { overflow: hidden; }     /* приховати зайве */
  .scroll { overflow: scroll; }     /* завжди показувати скрол */
  .auto { overflow: auto; }         /* скрол по потребі */
  
  /* Окремо для осей */
  .horizontal {
    overflow-x: auto;
    overflow-y: hidden;
  }
  ```
  
  ```html
  <div class="container auto">
    <p>Дуже довгий текст, який не вміщується...</p>
  </div>
  ```
  
  **Корисні випадки:**
  - Модальні вікна, картки
  - Скрольовані контейнери
  - Приховування елементів, що виходять за межі

### Позиціонування та Layout

- **Які типи позиціонування ви знаєте?**
  
  ```css
  /* 1. Static - стандартне позиціонування */
  .static { position: static; } /* за замовчуванням */
  
  /* 2. Relative - відносно початкової позиції */
  .relative {
    position: relative;
    top: 10px;    /* зсув вниз */
    left: 20px;   /* зсув вправо */
  }
  
  /* 3. Absolute - відносно найближчого positioned батька */
  .parent { position: relative; }
  .absolute {
    position: absolute;
    top: 0;
    right: 0;     /* у правому верхньому куті */
  }
  
  /* 4. Fixed - відносно вікна браузера */
  .fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;  /* фіксований при скролі */
  }
  
  /* 5. Sticky - гібрид relative і fixed */
  .sticky {
    position: sticky;
    top: 0;       /* "приклеюється" до верху */
  }
  ```

- **В чому різниця між `relative`, `absolute`, `fixed`?**
  
  ```html
  <div class="parent">
    <div class="relative">Відносно себе</div>
    <div class="absolute">Відносно батька</div>
    <div class="fixed">Відносно вікна</div>
  </div>
  ```
  
  **Основні відмінності:**
  
  **Relative:**
  - Відносно своєї початкової позиції
  - Залишає місце у документі
  - Може бути контейнером для absolute
  
  **Absolute:**
  - Відносно найближчого positioned предка
  - Вилучається з document flow
  - Не впливає на інші елементи
  
  **Fixed:**
  - Відносно viewport (вікна браузера)
  - Не рухається при скролі
  - Корисно для header/footer, модальних вікон

- **Що таке `z-index` і як він працює?**
  
  Z-index — властивість, яка контролює порядок накладання елементів по осі Z (вглиб екрана).
  
  ```css
  .layer1 {
    position: absolute;
    z-index: 1;      /* низький пріоритет */
    background: red;
  }
  
  .layer2 {
    position: absolute;
    z-index: 10;     /* вищий пріоритет */
    background: blue;
  }
  
  .modal {
    position: fixed;
    z-index: 9999;   /* найвищий пріоритет */
  }
  ```
  
  **Важливі правила:**
  - Працює тільки з positioned елементами
  - Вище значення = ближче до користувача
  - Може бути негативним
  - Контекст накладання (stacking context)

- **Що таке `float` і чому його рідко використовують?**
  
  Float — властивість, яка робить елемент "плаваючим", обтікаючи інші елементи.
  
  ```css
  /* Оригінальне призначення */
  .image {
    float: left;
    margin: 0 20px 20px 0;
  }
  
  /* Старий спосіб створення колонок */
  .column {
    float: left;
    width: 33.33%;
  }
  
  /* Очищення float */
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  ```
  
  **Проблеми з float:**
  - Ускладнює вирівнювання
  - Потребує clearfix хаків
  - Непередбачувана поведінка
  - Проблеми з висотою батьківських елементів
  
  **Сучасні альтернативи:** Flexbox, CSS Grid, модерні layout методи.

### Flexbox

- **Що таке Flexbox і навіщо він потрібен?**
  
  Flexbox (Flexible Box Layout) — одновимірна система компонування для розподілу місця і вирівнювання елементів.
  
  ```css
  /* Контейнер (flex container) */
  .flex-container {
    display: flex;
    /* або display: inline-flex; */
  }
  
  /* Елементи (flex items) */
  .flex-item {
    /* автоматично стають flex-елементами */
    flex: 1; /* розтягуються порівну */
  }
  ```
  
  **Переваги:**
  - Легке вирівнювання
  - Гнучкий розподіл місця
  - Автоматичне масштабування
  - Порядок елементів без зміни HTML

- **В чому різниця між `justify-content` та `align-items`?**
  
  ```css
  .flex-container {
    display: flex;
    height: 200px;
    
    /* justify-content - горизонтальне вирівнювання (основна вісь) */
    justify-content: center;        /* center, flex-start, flex-end, space-between, space-around, space-evenly */
    
    /* align-items - вертикальне вирівнювання (поперечна вісь) */
    align-items: center;            /* center, flex-start, flex-end, stretch, baseline */
  }
  
  /* Для flex-direction: column - осі міняються місцями */
  .vertical-flex {
    flex-direction: column;
    justify-content: center;        /* тепер вертикальне */
    align-items: center;            /* тепер горизонтальне */
  }
  ```
  
  **Корисні значення:**
  - `space-between` — рівний проміжок між елементами
  - `space-around` — рівний проміжок навколо кожного
  - `stretch` — розтягує на всю висоту

- **Що робить `flex-grow`, `flex-shrink`, `flex-basis`?**
  
  ```css
  .item1 {
    flex-basis: 200px;     /* Початковий розмір */
    flex-grow: 1;          /* Коефіцієнт росту */
    flex-shrink: 1;        /* Коефіцієнт стиснення */
  }
  
  .item2 {
    flex-basis: 100px;
    flex-grow: 2;          /* Росте в 2 рази швидше */
    flex-shrink: 0;        /* Не стискається */
  }
  
  /* Короткий запис */
  .item3 {
    flex: 1 1 auto;        /* grow shrink basis */
    /* або */
    flex: 1;               /* рівно розподіляє місце */
  }
  ```
  
  **Пояснення:**
  - **flex-grow**: як багато вільного місця займати
  - **flex-shrink**: як сильно стискатися при нестачі місця
  - **flex-basis**: початковий розмір перед розподілом

- **Як центрувати елемент за допомогою Flexbox?**
  
  ```css
  /* Метод 1: justify-content + align-items */
  .center-container {
    display: flex;
    justify-content: center;  /* горизонтально */
    align-items: center;      /* вертикально */
    height: 100vh;            /* повна висота */
  }
  
  /* Метод 2: margin auto */
  .center-item {
    margin: auto;
  }
  
  /* Метод 3: align-self для окремого елемента */
  .special-item {
    align-self: center;
  }
  ```
  
  ```html
  <div class="center-container">
    <div>Оцей елемент вирівняно по центру!</div>
  </div>
  ```
  
  **Інші корисні приклади:**
  - Навігація з рівномірним розподілом
  - Картки однакової висоти
  - Footer у низу сторінки
  - Мобільні меню

### CSS Grid

- **Що таке CSS Grid?**
  
  CSS Grid — двовимірна система компонування, яка дозволяє створювати складні layout з рядками і колонками.
  
  ```css
  /* Контейнер (grid container) */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* 3 колонки */
    grid-template-rows: 100px auto 50px; /* 3 рядки */
    gap: 20px; /* проміжок між комірками */
  }
  
  /* Елементи (grid items) */
  .item1 {
    grid-column: 1 / 3; /* займає 2 колонки */
    grid-row: 1;        /* перший рядок */
  }
  ```
  
  **Основні переваги:**
  - Повний контроль над двовимірним layout
  - Легке створення сіток
  - Підтримка накладання і проміжків
  - Адаптивність

- **В чому різниця між Grid та Flexbox?**
  
  ```css
  /* Flexbox - одновимірний */
  .flex-container {
    display: flex;
    /* або горизонтально, або вертикально */
  }
  
  /* Grid - двовимірний */
  .grid-container {
    display: grid;
    /* горизонтально І вертикально одночасно */
  }
  ```
  
  **Коли використовувати:**
  
  **Flexbox:**
  - Компоненти (кнопки, картки)
  - Навігація
  - Центрування елементів
  - Однорядні/одноколонні layout
  
  **Grid:**
  - Основна структура сторінки
  - Складні сітки (галереї, дашборди)
  - Коли потрібно контролювати обидві осі

- **Що таке `grid-template-columns` та `grid-template-rows`?**
  
  ```css
  .grid {
    display: grid;
    
    /* Визначення колонок */
    grid-template-columns: 200px 1fr 100px; /* 3 колонки: фіксована, гнучка, фіксована */
    
    /* Визначення рядків */
    grid-template-rows: auto 1fr 50px; /* 3 рядки: авто, гнучкий, фіксований */
  }
  
  /* Одиниці виміру */
  .different-units {
    grid-template-columns:
      100px          /* пікселі */
      20%            /* відсотки */
      1fr            /* частина (вільного місця) */
      2fr            /* 2 частини */
      minmax(100px, 1fr) /* мінімум і максимум */
      repeat(3, 1fr); /* повторення */
  }
  
  /* Скорочення */
  .shortcuts {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* авто-розміщення */
    grid-template-columns: repeat(3, 1fr); /* 3 однакові колонки */
  }
  ```

- **Як працює `grid-area`?**
  
  ```css
  /* Метод 1: через іменовані області */
  .layout {
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar main aside"
      "footer footer footer";
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 80px 1fr 60px;
  }
  
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .main { grid-area: main; }
  .aside { grid-area: aside; }
  .footer { grid-area: footer; }
  
  /* Метод 2: через координати */
  .item {
    /* grid-area: row-start / column-start / row-end / column-end */
    grid-area: 1 / 2 / 3 / 4; /* від 1-го до 3-го рядка, від 2-ї до 4-ї колонки */
    
    /* або окремо */
    grid-column: 2 / 4;  /* колонки від 2 до 4 */
    grid-row: 1 / 3;     /* рядки від 1 до 3 */
  }
  ```
  
  ```html
  <!-- Структура сторінки з іменованими областями -->
  <div class="layout">
    <header class="header">Шапка</header>
    <nav class="sidebar">Навігація</nav>
    <main class="main">Основний контент</main>
    <aside class="aside">Бокова панель</aside>
    <footer class="footer">Підвал</footer>
  </div>
  ```
  
  **Переваги іменованих областей:**
  - Читабельність коду
  - Легкість змін в layout
  - Візуальне уявлення про структуру

### Адаптивна верстка

- **Що таке адаптивна верстка?**
  
  Адаптивна верстка — підхід до створення веб-сайтів, які пристосовуються до різних розмірів екранів.
  
  ```css
  /* Основа адаптивності - гнучка сітка */
  .container {
    width: 100%;           /* гнучка ширина */
    max-width: 1200px;     /* максимальна ширина */
    margin: 0 auto;        /* центрування */
    padding: 0 20px;       /* відступи */
  }
  
  /* Гнучкі елементи */
  .column {
    width: 48%;           /* замість 50% - місце для margin */
    margin: 1%;
    float: left;
  }
  
  /* Мобільні стилі */
  @media (max-width: 768px) {
    .column {
      width: 98%;         /* повна ширина на мобільних */
      float: none;
    }
  }
  ```
  
  **Ключові принципи:**
  - Гнучка сітка (fluid grid)
  - Гнучкі зображення
  - Медіазапити

- **Що таке медіазапити?**
  
  Медіазапити — CSS технологія, яка дозволяє застосовувати стилі залежно від характеристик пристрою.
  
  ```css
  /* Типові брейкпойнти */
  
  /* Мобільні пристрої */
  @media (max-width: 480px) {
    .navigation { display: none; }
    .mobile-menu { display: block; }
  }
  
  /* Планшети */
  @media (min-width: 481px) and (max-width: 768px) {
    .container { padding: 0 15px; }
    .column { width: 48%; }
  }
  
  /* Ноутбуки і десктопи */
  @media (min-width: 769px) {
    .column { width: 30%; }
    .sidebar { display: block; }
  }
  
  /* Висока щільність пікселів (Ретіна) */
  @media (-webkit-min-device-pixel-ratio: 2) {
    .logo { background-image: url('logo@2x.png'); }
  }
  
  /* Орієнтація */
  @media (orientation: landscape) {
    .header { height: 60px; }
  }
  ```

- **В чому різниця між `em`, `rem`, `px`, `%`, `vw/vh`?**
  
  ```css
  .example {
    /* Абсолютні одиниці */
    width: 300px;          /* Пікселі - фіксований розмір */
    
    /* Відносні одиниці */
    font-size: 1.2em;      /* відносно розміру шрифту батька */
    margin: 2rem;          /* відносно root font-size (html) */
    width: 50%;            /* відсоток від батьківського елемента */
    
    /* Відносно viewport */
    height: 100vh;         /* 100% висоти вікна */
    width: 50vw;           /* 50% ширини вікна */
  }
  
  /* Приклад використання */
  html { font-size: 16px; } /* 1rem = 16px */
  .parent { font-size: 20px; }
  .child {
    font-size: 1.5em;     /* 20px * 1.5 = 30px */
    margin: 1rem;          /* 16px * 1 = 16px */
    width: 75%;            /* 75% від батька */
  }
  ```
  
  **Коли використовувати:**
  - **px** — межі, тіні, дрібні елементи
  - **em** — padding/margin, що масштабуються з шрифтом
  - **rem** — розміри шрифтів, компоненти
  - **%** — ширина контейнерів
  - **vw/vh** — повноекранні елементи

- **Що таке Mobile First підхід?**
  
  Mobile First — стратегія розробки, коли спочатку створюють версію для мобільних пристроїв, а потім розширюють для більших екранів.
  
  ```css
  /* Основні стилі - для мобільних */
  .container {
    width: 100%;
    padding: 15px;
  }
  
  .navigation {
    display: none;  /* прихована навігація */
  }
  
  .burger-menu {
    display: block; /* мобільне меню */
  }
  
  .column {
    width: 100%;    /* одна колонка */
    margin-bottom: 20px;
  }
  
  /* Планшети і більше */
  @media (min-width: 768px) {
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .navigation {
      display: flex;
    }
    
    .burger-menu {
      display: none;
    }
    
    .column {
      width: 48%;
      float: left;
      margin-right: 2%;
    }
  }
  
  /* Десктоп */
  @media (min-width: 1024px) {
    .column {
      width: 31%;
    }
  }
  ```
  
  **Переваги:**
  - Краща продуктивність на мобільних
  - Поступове розширення (Progressive Enhancement)
  - Підтримка повільних мереж

- **Як зробити зображення адаптивним?**
  
  ```css
  /* Основне адаптивне зображення */
  img {
    max-width: 100%;       /* не виходить за межі контейнера */
    height: auto;          /* зберігає пропорції */
    display: block;        /* прибирає проміжок знизу */
  }
  
  /* Об'єкт-фіт для контролю */
  .image-container {
    width: 300px;
    height: 200px;
    overflow: hidden;
  }
  
  .fitted-image {
    width: 100%;
    height: 100%;
    object-fit: cover;     /* обрізає, зберігаючи пропорції */
    /* object-fit: contain; містить цілком */
  }
  ```
  
  ```html
  <!-- Різні зображення для різних екранів -->
  <picture>
    <source media="(min-width: 768px)" srcset="large.jpg">
    <source media="(min-width: 480px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Опис">
  </picture>
  
  <!-- Різні роздільні здатності -->
  <img src="image.jpg" 
       srcset="image-480w.jpg 480w, 
               image-800w.jpg 800w, 
               image-1200w.jpg 1200w"
       sizes="(max-width: 480px) 100vw, 
              (max-width: 800px) 80vw, 
              1200px"
       alt="Опис">
  ```
  
  **Методи:**
  - **max-width: 100%** — базова адаптивність
  - **srcset** — різні розміри для різних екранів
  - **picture** — повний контроль art direction
  - **object-fit** — контроль масштабування

### Анімації та переходи

- **В чому різниця між `transition` та `animation`?**
  
  ```css
  /* Transition - переход між станами */
  .button {
    background: blue;
    transition: background 0.3s ease; /* тривалість, властивість, функція */
  }
  
  .button:hover {
    background: red; /* перехід спрацювує при зміні */
  }
  
  /* Animation - ключові кадри, може запускатися автоматично */
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  .pulsing {
    animation: pulse 2s infinite; /* назва, тривалість, повторення */
  }
  
  /* Комплексна анімація */
  .loading {
    animation: 
      spin 1s linear infinite,      /* обертання */
      fade 0.5s ease-in-out;        /* поява */
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  ```
  
  **Основні відмінності:**
  
  **Transition:**
  - Потребує тригера (:hover, :focus, JavaScript)
  - Простіший синтаксис
  - Линійний перехід A → B
  
  **Animation:**
  - Може запускатися автоматично
  - Ключові кадри (keyframes)
  - Складні сценарії
  - Контроль повторень, напрямку

- **Що таке `transform` і які його функції?**
  
  Transform — властивість для трансформацій елементів без впливу на сусідні елементи.
  
  ```css
  .element {
    /* Переміщення */
    transform: translate(50px, 100px);     /* х, у */
    transform: translateX(50px);           /* тільки по х */
    transform: translateY(100px);          /* тільки по у */
    transform: translate3d(50px, 100px, 0); /* 3D переміщення */
    
    /* Масштабування */
    transform: scale(1.5);                 /* збільшити в 1.5 раза */
    transform: scaleX(2);                  /* тільки по ширині */
    transform: scaleY(0.5);                /* тільки по висоті */
    
    /* Обертання */
    transform: rotate(45deg);              /* повернути на 45° */
    transform: rotateX(180deg);            /* обертання по осі X */
    transform: rotateY(90deg);             /* обертання по осі Y */
    
    /* Нахил */
    transform: skew(15deg, 10deg);         /* нахил по х і у */
    transform: skewX(15deg);               /* тільки по х */
    
    /* Комбінації */
    transform: translate(50px, 100px) rotate(45deg) scale(1.2);
    
    /* Центр трансформації */
    transform-origin: center;              /* за замовчуванням */
    transform-origin: top left;            /* лівий верхній кут */
    transform-origin: 50px 100px;          /* конкретні координати */
  }
  ```
  
  **Переваги transform:**
  - Не впливає на layout (сусідні елементи)
  - Оптимізовані GPU обчислення
  - Плавні анімації

- **Як оптимізувати CSS анімації для продуктивності?**
  
  ```css
  /* 1. Використовуйте тільки transform і opacity */
  .good-animation {
    /* Оптимізовані властивості */
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .good-animation:hover {
    transform: translateY(-5px) scale(1.05);
    opacity: 0.8;
  }
  
  /* 2. Уникайте анімації layout властивостей */
  .bad-animation {
    /* Повільні властивості */
    transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
  }
  
  /* 3. Використовуйте will-change */
  .animated-element {
    will-change: transform; /* розказує браузеру про майбутні зміни */
  }
  
  /* 4. Використовуйте 3D акселерацію */
  .gpu-optimized {
    transform: translateZ(0); /* форсує GPU обробку */
    /* або */
    will-change: transform;
    backface-visibility: hidden; /* приховає задню сторону */
  }
  
  /* 5. Обмежуйте кількість одночасних анімацій */
  .performance-first {
    animation: simpleSlide 0.5s ease-out;
  }
  ```
  
  **Ключові правила:**
  - Анімуйте тільки `transform` і `opacity`
  - Уникайте `width`, `height`, `top`, `left`
  - Використовуйте `will-change` обережно
  - Обмежуйте кількість одночасних анімацій
  - Тримайте 60 FPS (16.67ms на кадр)

- **Що таке `will-change`?**
  
  `will-change` — CSS властивість, яка повідомляє браузер про майбутні зміни елемента.
  
  ```css
  /* Правильне використання */
  .hover-element {
    will-change: transform; /* про зміни transform */
  }
  
  .hover-element:hover {
    transform: scale(1.1);
  }
  
  /* Для складних анімацій */
  .complex-animation {
    will-change: transform, opacity; /* кілька властивостей */
  }
  
  /* Автоматичне виявлення */
  .auto-optimize {
    will-change: auto; /* браузер вирішує сам */
  }
  
  /* Очищення після анімації */
  .finished-animation {
    will-change: auto; /* возвращаєм до нормального стану */
  }
  ```
  
  ```javascript
  // Керування через JavaScript
  const element = document.querySelector('.animated');
  
  // Перед анімацією
  element.style.willChange = 'transform';
  
  // Після анімації
  element.addEventListener('transitionend', () => {
    element.style.willChange = 'auto'; // очищуємо
  });
  ```
  
  **Коли використовувати:**
  - Перед складними анімаціями
  - Для елементів, які часто змінюються
  - При проблемах з продуктивністю
  
  **Обережно:**
  - Не залишайте `will-change` назавжди
  - Не використовуйте для всіх елементів
  - Повертайте в `auto` після анімації

### Препроцесори

- **Чи працювали ви з SASS/SCSS?**
  
  Так, SASS/SCSS — один з найпопулярніших CSS препроцесорів, який розширює можливості CSS.
  
  ```scss
  // SCSS синтаксис (схожий на CSS)
  $primary-color: #3498db;
  $font-size: 16px;
  
  .button {
    background: $primary-color;
    font-size: $font-size;
    
    &:hover {
      background: darken($primary-color, 10%);
    }
    
    &--large {
      font-size: $font-size * 1.5;
    }
  }
  
  @media (max-width: 768px) {
    .button {
      font-size: $font-size * 0.9;
    }
  }
  ```
  
  ```sass
  // SASS синтаксис (без фігурних дужок і крапок)
  $primary-color: #3498db
  $font-size: 16px
  
  .button
    background: $primary-color
    font-size: $font-size
    
    &:hover
      background: darken($primary-color, 10%)
    
    &--large
      font-size: $font-size * 1.5
  ```
  
  **Переваги:**
  - Змінні і обчислення
  - Міксини і функції
  - Імпорт і модульність
  - Контрольні структури (@if, @for, @each)

- **Що таке змінні в SASS?**
  
  Змінні в SASS — спосіб зберігання значень для повторного використання.
  
  ```scss
  // Основні змінні
  $primary-color: #3498db;
  $secondary-color: #e74c3c;
  $font-family: 'Roboto', sans-serif;
  $border-radius: 4px;
  
  // Обчислення
  $base-font-size: 16px;
  $large-font-size: $base-font-size * 1.5; // 24px
  $container-width: 1200px;
  $sidebar-width: $container-width / 4;    // 300px
  
  // Булеві і списки
  $enable-rounded: true;
  $breakpoints: (
    mobile: 480px,
    tablet: 768px,
    desktop: 1024px
  );
  
  // Використання
  .header {
    background: $primary-color;
    font-family: $font-family;
    
    @if $enable-rounded {
      border-radius: $border-radius;
    }
  }
  
  // Інтерполяція
  .icon-#{$primary-color} {
    color: $primary-color;
  }
  
  // Локальні змінні
  .component {
    $local-padding: 20px;
    padding: $local-padding;
    
    .inner {
      padding: $local-padding / 2; // доступ до локальної змінної
    }
  }
  ```
  
  **Основні типи змінних:**
  - Кольори, числа, рядки
  - Булеві значення
  - Списки (lists) і мапи (maps)
  - null значення

- **Що таке міксини (mixins)?**
  
  Міксини — блоки CSS коду, які можна повторно використовувати і параметризувати.
  
  ```scss
  // Простий міксин
  @mixin button-style {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  // Міксин з параметрами
  @mixin button-variant($bg-color, $text-color: white) {
    @include button-style; // включаємо базовий міксин
    
    background: $bg-color;
    color: $text-color;
    
    &:hover {
      background: darken($bg-color, 10%);
    }
  }
  
  // Міксин з значеннями за замовчуванням
  @mixin media-query($breakpoint: 768px) {
    @media (max-width: $breakpoint) {
      @content; // місце для контенту
    }
  }
  
  // Використання
  .btn-primary {
    @include button-variant(#3498db);
  }
  
  .btn-danger {
    @include button-variant(#e74c3c, white);
  }
  
  .responsive-container {
    width: 100%;
    
    @include media-query(480px) {
      padding: 10px;
      font-size: 14px;
    }
  }
  
  // Покроковий міксин
  @mixin flex-center($direction: row) {
    display: flex;
    justify-content: center;
    align-items: center;
    
    @if $direction != row {
      flex-direction: $direction;
    }
  }
  ```
  
  **Переваги міксинів:**
  - Повторне використання коду
  - Параметризація
  - Легке оновлення і підтримка
  - DRY (Don't Repeat Yourself) принцип

- **Що таке вкладеність (nesting)?**
  
  Нестинг дозволяє писати CSS селектори вкладеними один в одного, як в HTML.
  
  ```scss
  // SCSS з нестингом
  .navigation {
    background: #333;
    padding: 0 20px;
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      
      li {
        display: inline-block;
        
        a {
          color: white;
          text-decoration: none;
          padding: 15px 20px;
          display: block;
          
          &:hover {
            background: #555;
          }
          
          &.active {
            background: #007bff;
          }
        }
      }
    }
    
    // Медіазапит всередині класу
    @media (max-width: 768px) {
      padding: 0 10px;
      
      ul li {
        display: block;
        
        a {
          padding: 10px;
        }
      }
    }
  }
  ```
  
  ```css
  /* Компіляція в звичайний CSS */
  .navigation {
    background: #333;
    padding: 0 20px;
  }
  
  .navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navigation ul li {
    display: inline-block;
  }
  
  .navigation ul li a {
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    display: block;
  }
  
  .navigation ul li a:hover {
    background: #555;
  }
  
  .navigation ul li a.active {
    background: #007bff;
  }
  ```
  
  ```scss
  // Батьківські селектори (&)
  .button {
    background: blue;
    
    &:hover {          // .button:hover
      background: darkblue;
    }
    
    &:focus {          // .button:focus
      outline: none;
    }
    
    &--large {         // .button--large (BEM методологія)
      font-size: 18px;
    }
    
    &__icon {          // .button__icon
      margin-right: 5px;
    }
    
    .parent & {        // .parent .button
      margin: 10px;
    }
  }
  ```
  
  **Переваги:**
  - Логічна структура, як в HTML
  - Менше повторень
  - Легке читання і підтримка
  
  **Обережно:**
  - Не зловживайте (max 3-4 рівні)
  - Може створювати надмірно специфічні селектори

## JavaScript питання

### Базові концепції

- **Що таке JavaScript і де він використовується?**
  
  JavaScript — високорівнева, інтерпретована мова програмування з динамічною типізацією.
  
  ```javascript
  // Основні можливості
  console.log('Привіт, світ!'); // вивід в консоль
  
  // Змінні і функції
  const name = 'Максим';
  function greet(person) {
    return `Привіт, ${person}!`;
  }
  
  // Робота з DOM
  document.getElementById('myButton').addEventListener('click', function() {
    alert('Кнопку натиснуто!');
  });
  ```
  
  **Місця використання:**
  - **Фронтенд:** інтерактивність веб-сайтів
  - **Бекенд:** Node.js сервери
  - **Мобільні додатки:** React Native, Ionic
  - **Десктоп:** Electron
  - **Машинне навчання:** TensorFlow.js

- **Які типи даних є в JavaScript?**
  
  ```javascript
  // Примітивні типи
  let str = 'рядок';           // string
  let num = 42;                  // number
  let isTrue = true;             // boolean
  let empty = null;              // null
  let notDefined;                // undefined
  let sym = Symbol('id');        // symbol (ES6)
  let bigNum = 123n;             // bigint (ES2020)
  
  // Об'єктні типи
  let obj = { name: 'Максим' };      // object
  let arr = [1, 2, 3];                   // array (особливий вид object)
  let func = function() { return 42; };  // function (особливий вид object)
  
  // Перевірка типів
  console.log(typeof str);       // 'string'
  console.log(typeof num);       // 'number'
  console.log(typeof isTrue);    // 'boolean'
  console.log(typeof empty);     // 'object' (особливість null)
  console.log(typeof notDefined); // 'undefined'
  console.log(typeof obj);       // 'object'
  console.log(typeof arr);       // 'object'
  console.log(typeof func);      // 'function'
  
  // Корисні перевірки
  console.log(Array.isArray(arr));     // true
  console.log(arr instanceof Array);   // true
  console.log(empty === null);         // true
  ```
  
  **Особливості:**
  - JavaScript має динамічну типізацію
  - Автоматичне приведення типів (coercion)
  - `typeof null` повертає 'object' (історична помилка)

- **В чому різниця між `var`, `let`, `const`?**
  
  ```javascript
  // var - старий спосіб (до ES6)
  var oldWay = 'старий спосіб';
  var oldWay = 'можна переоголошувати'; // OK
  
  // let - змінна (ES6)
  let variable = 'можна змінювати';
  variable = 'нове значення'; // OK
  // let variable = 'помилка'; // Error!
  
  // const - константа (ES6)
  const constant = 'не можна змінювати';
  // constant = 'помилка'; // Error!
  
  // Особливості з const і об'єктами
  const user = { name: 'Максим' };
  user.name = 'Анна'; // OK - модифікація вмісту
  // user = {}; // Error - перепризначення
  
  // Область видимості
  function scopeExample() {
    console.log(varVariable); // undefined (не помилка!)
    // console.log(letVariable); // ReferenceError
    
    var varVariable = 'var';
    let letVariable = 'let';
    
    if (true) {
      var varInBlock = 'доступна за межами блоку';
      let letInBlock = 'тільки в блоці';
      const constInBlock = 'тільки в блоці';
    }
    
    console.log(varInBlock); // 'var в блоці'
    // console.log(letInBlock); // ReferenceError
    // console.log(constInBlock); // ReferenceError
  }
  ```
  
  **Основні відмінності:**
  
  | Характеристика | var | let | const |
  |---|---|---|---|
  | Область | Функція | Блок | Блок |
  | Hoisting | Так | Ні | Ні |
  | Переоголошення | Так | Ні | Ні |
  | Модифікація | Так | Так | Ні |

- **Що таке hoisting?**
  
  Hoisting — механізм, за яким JavaScript піднімає оголошення змінних і функцій на верх їхньої області видимості.
  
  ```javascript
  // Як бачить розробник
  console.log(myVar); // undefined (не помилка!)
  console.log(myFunc()); // "Працює!" 
  
  var myVar = 'значення';
  function myFunc() {
    return 'Працює!';
  }
  
  // Як бачить JavaScript (після hoisting)
  var myVar; // undefined
  function myFunc() {
    return 'Працює!';
  }
  
  console.log(myVar); // undefined
  console.log(myFunc()); // "Працює!"
  
  myVar = 'значення';
  
  // let і const не підлягають hoisting
  // console.log(letVar); // ReferenceError: Cannot access before initialization
  let letVar = 'значення';
  
  // Function expressions не підлягають hoisting
  // console.log(funcExpression()); // TypeError: funcExpression is not a function
  var funcExpression = function() {
    return 'функційний вираз';
  };
  ```
  
  **Основні правила:**
  - `var` оголошення піднімаються (значення undefined)
  - Function declarations піднімаються повністю
  - `let`/`const` - Temporal Dead Zone до оголошення
  - Function expressions - як звичайні змінні

- **Що таке область видимості (scope)?**
  
  Scope — область видимості змінних, де змінна доступна для використання.
  
  ```javascript
  // Глобальна область
  let globalVar = 'доступна всюди';
  
  function outerFunction() {
    let outerVar = 'зовнішня функція';
    
    function innerFunction() {
      let innerVar = 'внутрішня функція';
      
      // Може отримати доступ до всіх змінних
      console.log(globalVar);  // ОК
      console.log(outerVar);   // ОК
      console.log(innerVar);   // ОК
    }
    
    innerFunction();
    
    // Може отримати доступ до глобальних і власних
    console.log(globalVar);  // ОК
    console.log(outerVar);   // ОК
    // console.log(innerVar); // ReferenceError
  }
  
  // Блокова область видимості (ES6)
  if (true) {
    let blockVar = 'тільки в блоці';
    const blockConst = 'тільки в блоці';
    var functionVar = 'всюди в функції'; // або глобально
  }
  
  // console.log(blockVar);    // ReferenceError
  // console.log(blockConst);  // ReferenceError
  console.log(functionVar);    // ОК
  
  // Scope chain - ланцюг областей видимості
  let level1 = 'рівень 1';
  
  function level2() {
    let level2Var = 'рівень 2';
    
    function level3() {
      let level3Var = 'рівень 3';
      
      // Пошук: level3 -> level2 -> level1 -> global
      console.log(level1);     // знаходить у глобальній області
      console.log(level2Var);  // знаходить у батьківській функції
      console.log(level3Var);  // знаходить локально
    }
  }
  ```
  
  **Типи scope:**
  - **Глобальний:** доступний усюди
  - **Функційний:** всередині функції
  - **Блоковий:** всередині {} (let/const)
  - **Модульний:** ES6 модулі

### Функції

- **Як оголосити функцію в JavaScript?**
  
  ```javascript
  // 1. Function Declaration (оголошення функції)
  function greet(name) {
    return `Привіт, ${name}!`;
  }
  
  // 2. Function Expression (функційний вираз)
  const sayHello = function(name) {
    return `Hello, ${name}!`;
  };
  
  // 3. Arrow Function (ES6)
  const add = (a, b) => a + b;
  const multiply = (x, y) => {
    return x * y;
  };
  
  // 4. Method (метод об'єкта)
  const calculator = {
    sum: function(a, b) { return a + b; },
    subtract(a, b) { return a - b; } // короткий синтаксис ES6
  };
  ```

- **В чому різниця між function declaration та function expression?**
  
  ```javascript
  // Function Declaration - підлягає hoisting
  console.log(declared(5)); // 25 - працює!
  
  function declared(x) {
    return x * x;
  }
  
  // Function Expression - не підлягає hoisting
  // console.log(expressed(5)); // TypeError: expressed is not a function
  
  const expressed = function(x) {
    return x * x;
  };
  ```

- **Що таке arrow functions і чим вони відрізняються?**
  
  ```javascript
  // Традиційна функція
  function traditional(x) {
    console.log(this); // залежить від контексту
    return x * 2;
  }
  
  // Arrow function
  const arrow = (x) => {
    console.log(this); // успадковує this з місця оголошення
    return x * 2;
  };
  
  // Короткі форми
  const square = x => x * x;                // один параметр
  const sum = (a, b) => a + b;              // скорочення return
  const numbers = [1,2,3].map(n => n * 2);  // [2, 4, 6]
  ```
  
  **Ключові відмінності:**
  - Немає власного `this`
  - Не можна використовувати як конструктор
  - Немає `arguments`
  - Коротший синтаксис

- **Що таке замикання (closure)?**
  
  Замикання - коли внутрішня функція має доступ до змінних зовнішньої функції.
  
  ```javascript
  function counter() {
    let count = 0; // приватна змінна
    
    return function() {
      count++; // зберігає доступ до count
      return count;
    };
  }
  
  const myCounter = counter();
  console.log(myCounter()); // 1
  console.log(myCounter()); // 2
  
  // Практичний приклад - приватні методи
  function createUser(name) {
    let userName = name; // приватна
    let userAge = 0;     // приватна
    
    return {
      getName: () => userName,
      setAge: (age) => userAge = age,
      getAge: () => userAge,
      greet: () => `Привіт, я ${userName}, мені ${userAge} років`
    };
  }
  ```

- **Що таке колбек функції?**
  
  Колбек - функція, яка передається як аргумент іншій функції.
  
  ```javascript
  // Простий колбек
  function processData(data, callback) {
    console.log('Обробка даних...');
    const result = data.toUpperCase();
    callback(result); // виклик callback
  }
  
  processData('привіт', function(result) {
    console.log('Результат:', result); // ПРИВІТ
  });
  
  // Вбудовані колбеки
  [1, 2, 3, 4].forEach(function(item) {
    console.log(item * 2); // 2, 4, 6, 8
  });
  
  // Асинхронні колбеки
  setTimeout(function() {
    console.log('Минуло 1 секунда');
  }, 1000);
  
  // Callback Hell проблема
  getData(function(a) {
    getMoreData(a, function(b) {
      getMoreData(b, function(c) {
        // вложення стає некерованим
      });
    });
  });
  ```

### Об'єкти та масиви

- **Як створити об'єкт в JavaScript?**
  
  ```javascript
  // Літерал об'єкта
  const user = {
    name: 'Максим',
    age: 25,
    greet() { return `Привіт, ${this.name}!`; }
  };
  
  // Конструктор Object
  const obj = new Object();
  obj.name = 'Анна';
  
  // Object.create()
  const person = Object.create(null); // без прототипу
  
  // Класи (ES6)
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  const john = new Person('Джон');
  ```

- **Як додати/видалити властивість об'єкта?**
  
  ```javascript
  const obj = { existing: 'value' };
  
  // Додавання
  obj.newProp = 'нова властивість';
  obj['dynamic-key'] = 'динамічний ключ';
  
  // Видалення
  delete obj.existing;
  delete obj['dynamic-key'];
  
  // Object.defineProperty - довольно рідко
  Object.defineProperty(obj, 'readOnly', {
    value: 'тільки читання',
    writable: false
  });
  ```

- **Які методи масивів ви знаєте?**
  
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  
  // Мутуючі методи (змінюють оригінал)
  arr.push(6);        // додати в кінець
  arr.pop();          // видалити останній
  arr.unshift(0);     // додати на початок
  arr.shift();        // видалити перший
  arr.splice(1, 2);   // видалити/замінити
  
  // Немутуючі методи (повертають новий масив)
  const doubled = arr.map(x => x * 2);     // [2, 4, 6, 8, 10]
  const even = arr.filter(x => x % 2 === 0); // [2, 4]
  const sum = arr.reduce((acc, x) => acc + x, 0); // 15
  const found = arr.find(x => x > 3);      // 4
  const index = arr.findIndex(x => x > 3); // 3
  ```

- **В чому різниця між `map`, `filter`, `reduce`?**
  
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  
  // map - перетворює кожен елемент
  const squared = numbers.map(n => n * n); // [1, 4, 9, 16, 25]
  
  // filter - фільтрує елементи
  const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
  
  // reduce - зводить до одного значення
  const sum = numbers.reduce((acc, n) => acc + n, 0); // 15
  const max = numbers.reduce((max, n) => n > max ? n : max, 0); // 5
  ```

- **Що таке деструктуризація?**
  
  ```javascript
  // Об'єкти
  const user = { name: 'Максим', age: 25, city: 'Київ' };
  const { name, age } = user; // виокремлення властивостей
  const { city: location } = user; // перейменування
  
  // Масиви
  const colors = ['червоний', 'синій', 'зелений'];
  const [first, second, ...rest] = colors;
  
  // Параметри функцій
  function greet({ name, age = 18 }) {
    return `Привіт, ${name}! Вік: ${age}`;
  }
  greet({ name: 'Анна' }); // вік за замовчуванням 18
  ```

### Асинхронність

- **Що таке асинхронний код?**
  
  Асинхронний код виконується не одразу, не блокуючи виконання іншого коду.
  
  ```javascript
  // Синхронний код
  console.log('1');
  console.log('2');
  console.log('3'); // 1, 2, 3 - послідовно
  
  // Асинхронний код
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  console.log('3'); // 1, 3, 2 - не послідовно
  ```

- **Що таке Promise?**
  
  Promise - об'єкт для роботи з асинхронними операціями.
  
  ```javascript
  // Створення Promise
  const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
      if (success) {
        resolve('Успішно!');
      } else {
        reject('Помилка!');
      }
    }, 1000);
  });
  
  // Використання Promise
  myPromise
    .then(result => console.log('Результат:', result))
    .catch(error => console.log('Помилка:', error))
    .finally(() => console.log('Завершено'));
  
  // Promise.all - всі одночасно
  Promise.all([fetch('/data1'), fetch('/data2')])
    .then(responses => console.log('Всі запити виконані'));
  ```

- **В чому різниця між `async/await` та `Promise.then()`?**
  
  ```javascript
  // Promise.then() - ланцюги методів
  fetch('/api/user')
    .then(response => response.json())
    .then(user => fetch(`/api/posts/${user.id}`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));
  
  // async/await - синхронний вигляд
  async function loadUserPosts() {
    try {
      const userResponse = await fetch('/api/user');
      const user = await userResponse.json();
      
      const postsResponse = await fetch(`/api/posts/${user.id}`);
      const posts = await postsResponse.json();
      
      console.log(posts);
    } catch (error) {
      console.error(error);
    }
  }
  ```

- **Що таке callback hell?**
  
  Проблема надмірної вложеності callback-функцій.
  
  ```javascript
  // Callback Hell
  getData(function(a) {
    getMoreData(a, function(b) {
      getEvenMoreData(b, function(c) {
        getFinalData(c, function(d) {
          // код стає нечитабельним
        });
      });
    });
  });
  
  // Рішення через Promise/async-await
  async function loadData() {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    const d = await getFinalData(c);
    return d;
  }
  ```

### ES6+ особливості

- **Що нового в ES6?**
  
  ```javascript
  // Основні новинки
  const name = 'Максим';           // const/let
  const greet = name => `Привіт, ${name}!`; // arrow functions + template literals
  
  class User {                              // класи
    constructor(name) { this.name = name; }
  }
  
  const [first, ...rest] = [1, 2, 3, 4];   // деструктуризація + spread
  
  import { Component } from 'react';        // модулі
  
  const promise = new Promise(resolve => resolve(42)); // Promise
  ```

- **Що таке template literals?**
  
  ```javascript
  const name = 'Максим';
  const age = 25;
  
  // Старий спосіб
  const old = 'Привіт, ' + name + '! Вік: ' + age;
  
  // Template literals
  const modern = `Привіт, ${name}! Вік: ${age}`;
  
  // Мультирядкові рядки
  const html = `
    <div>
      <h1>${name}</h1>
      <p>Вік: ${age}</p>
    </div>
  `;
  ```

- **Що таке spread/rest оператори?**
  
  ```javascript
  // Spread (...) - розпаковує
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, ...obj1 }; // { c: 3, a: 1, b: 2 }
  
  // Rest (...) - збирає
  function sum(...numbers) { // rest parameters
    return numbers.reduce((a, b) => a + b, 0);
  }
  
  const [first, second, ...others] = [1, 2, 3, 4, 5];
  const { name, ...otherProps } = { name: 'Максим', age: 25, city: 'Київ' };
  ```

- **Що таке модулі (import/export)?**
  
  ```javascript
  // utils.js - експорт
  export const PI = 3.14159;
  export function add(a, b) { return a + b; }
  export default function multiply(a, b) { return a * b; }
  
  // main.js - імпорт
  import multiply, { PI, add } from './utils.js';
  import * as utils from './utils.js'; // все як namespace
  
  console.log(add(2, 3));      // 5
  console.log(multiply(4, 5)); // 20
  ```

- **Що таке класи в JavaScript?**
  
  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return `${this.name} видає звук`;
    }
    
    static info() {
      return 'Це клас Animal';
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    
    speak() {
      return `${this.name} гавкає!`;
    }
  }
  
  const dog = new Dog('Барсик', 'Лабрадор');
  console.log(dog.speak()); // Барсик гавкає!
  ```

### DOM маніпуляції

- **Що таке DOM?**
  
  DOM (Document Object Model) - об'єктна модель документа, яка представляє HTML як дерево об'єктів.
  
  ```javascript
  // DOM - це API для взаємодії з HTML
  console.log(document); // об'єкт документа
  console.log(document.body); // елемент body
  console.log(window); // об'єкт вікна браузера
  ```

- **Як вибрати елемент на сторінці?**
  
  ```javascript
  // За ID
  const element = document.getElementById('myId');
  
  // За класом
  const elements = document.getElementsByClassName('myClass');
  
  // За тегом
  const divs = document.getElementsByTagName('div');
  
  // CSS селектори (сучасний спосіб)
  const single = document.querySelector('.class #id');
  const multiple = document.querySelectorAll('div.active');
  ```

- **Як додати/видалити елемент?**
  
  ```javascript
  // Створення і додавання
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Новий елемент';
  newDiv.className = 'my-class';
  document.body.appendChild(newDiv);
  
  // Вставка HTML
  const container = document.getElementById('container');
  container.innerHTML = '<p>Новий контент</p>';
  
  // Видалення
  const toRemove = document.getElementById('remove-me');
  toRemove.remove(); // сучасний спосіб
  // toRemove.parentNode.removeChild(toRemove); // старий
  ```

- **Що таке події (events)?**
  
  ```javascript
  const button = document.querySelector('button');
  
  // Обробка подій
  button.addEventListener('click', function(event) {
    console.log('Кнопку натиснуто!');
    event.preventDefault(); // скасування стандартної поведінки
    event.stopPropagation(); // зупинка спливання
  });
  
  // Різні типи подій
  window.addEventListener('load', () => console.log('Сторінка завантажена'));
  document.addEventListener('DOMContentLoaded', () => console.log('DOM готовий'));
  ```

- **Що таке делегування подій?**
  
  Техніка, коли один обробник на батьківському елементі обробляє події всіх нащадків.
  
  ```javascript
  // Неефективно - окремий обробник на кожну кнопку
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => console.log('Клік!'));
  });
  
  // Ефективно - делегування
  document.body.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      console.log('Кнопку натиснуто:', event.target.textContent);
    }
  });
  
  // Працює навіть для динамічно доданих елементів!
  ```

### Продвинуті теми

- **Що таке `this` і як він працює?**
  
  `this` - спосілання на контекст виклику функції.
  
  ```javascript
  // Глобальний контекст
  console.log(this); // Window (у браузері)
  
  // Метод об'єкта
  const user = {
    name: 'Максим',
    greet() {
      return `Привіт, ${this.name}!`; // this = user
    }
  };
  
  // Конструктор
  function User(name) {
    this.name = name; // this = новий об'єкт
  }
  
  // Arrow functions наслідують this
  const obj = {
    name: 'Об'єкт',
    regular() { console.log(this.name); }, // Об'єкт
    arrow: () => { console.log(this.name); } // undefined (глобальний this)
  };
  ```

- **Що таке прототипи?**
  
  ```javascript
  // Прототип - механізм спадковості
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    return `${this.name} видає звук`;
  };
  
  const cat = new Animal('Мурка');
  console.log(cat.speak()); // Мурка видає звук
  
  // Ланцюг прототипів
  console.log(cat.__proto__ === Animal.prototype); // true
  console.log(Animal.prototype.__proto__ === Object.prototype); // true
  ```

- **Що таке bind, call, apply?**
  
  ```javascript
  const user = { name: 'Максим' };
  
  function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
  }
  
  // call - викликає зразу
  console.log(greet.call(user, 'Привіт', '!')); // Привіт, Максим!
  
  // apply - аргументи як масив
  console.log(greet.apply(user, ['Привіт', '!'])); // Привіт, Максим!
  
  // bind - створює нову функцію
  const boundGreet = greet.bind(user, 'Привіт');
  console.log(boundGreet('!')); // Привіт, Максим!
  ```

- **Що таке strict mode?**
  
  ```javascript
  'use strict'; // вмикає суворий режим
  
  // Основні обмеження:
  
  // 1. Не можна створювати глобальні змінні випадково
  // myVar = 42; // ReferenceError
  
  // 2. this у глобальному контексті = undefined
  function testThis() {
    console.log(this); // undefined (замість Window)
  }
  
  // 3. Не можна видаляти змінні, функції
  // delete myVariable; // SyntaxError
  
  // 4. Однакові назви параметрів заборонені
  // function bad(a, a) {} // SyntaxError
  ```

## React питання

### Базові концепції

- **Що таке React і навіщо він потрібен?**
  
  React - JavaScript бібліотека для створення користувальських інтерфейсів, розроблена Facebook.
  
  Навіщо потрібен:
  - Компонентний підхід - код можна розділити на багаторазові компоненти
  - Virtual DOM - оптимізує оновлення інтерфейсу
  - Однонаправлений потік даних - легше відслідковувати стан додатку
  - Велика екосистема і спільнота розробників

- **Що таке компоненти в React?**
  
  Компоненти - це незалежні частини інтерфейсу, які мають свою логіку і можуть повторно використовуватися.
  
  ```jsx
  // Функціональний компонент
  function Welcome(props) {
    return <h1>Привіт, {props.name}!</h1>;
  }
  
  // Використання
  <Welcome name="Максим" />
  ```

- **В чому різниця між функціональними та класовими компонентами?**
  
  ```jsx
  // Функціональний компонент
  function MyComponent(props) {
    return <div>{props.title}</div>;
  }
  
  // Класовий компонент
  class MyComponent extends React.Component {
    render() {
      return <div>{this.props.title}</div>;
    }
  }
  ```
  
  Відмінності:
  - Функціональні - простіші, використовують hooks для стану
  - Класові - більш багатослівні, мають методи життєвого циклу
  - Функціональні компоненти - сучасний підхід

- **Що таке JSX?**
  
  JSX - синтаксичне розширення JavaScript, яке дозволяє писати HTML-подібний код в JavaScript.
  
  ```jsx
  // JSX
  const element = <h1>Привіт світ!</h1>;
  
  // Компілюється в
  const element = React.createElement('h1', null, 'Привіт світ!');
  ```
  
  Особливості:
  - Використовуємо camelCase для атрибутів (className замість class)
  - Можна вставляти JavaScript вирази в {}
  - Потрібен один батьківський елемент

- **Що таке Virtual DOM?**
  
  Virtual DOM - це JavaScript представлення реального DOM, яке зберігається в пам'яті.
  
  Як працює:
  1. React створює Virtual DOM представлення компонентів
  2. При зміні стану створюється новий Virtual DOM
  3. React порівнює (diff) старий і новий Virtual DOM
  4. Оновлюється тільки те, що змінилося в реальному DOM
  
  Переваги:
  - Швидші оновлення інтерфейсу
  - Батчинг оновлень
  - Передбачуваність

### Props та State

- **Що таке props і як їх передавати?**
  
  Props (properties) - це дані, які передаються від батьківського компонента до дочірнього.
  
  ```jsx
  // Передача props
  function App() {
    return <UserCard name="Максим" age={25} isActive={true} />;
  }
  
  // Отримання props
  function UserCard({ name, age, isActive }) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Вік: {age}</p>
        <p>Статус: {isActive ? 'Активний' : 'Неактивний'}</p>
      </div>
    );
  }
  ```

- **Що таке state і як з ним працювати?**
  
  State - внутрішній стан компонента, який може змінюватися.
  
  ```jsx
  import { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Лічильник: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Збільшити
        </button>
      </div>
    );
  }
  ```

- **В чому різниця між props та state?**
  
  | Props | State |
  |-------|--------|
  | Передаються ззовні | Внутрішній стан компонента |
  | Незмінні (immutable) | Можна змінювати |
  | Контролюються батьківським компонентом | Контролюються самим компонентом |
  | Функціональні аргументи | Локальні змінні компонента |

- **Що таке prop drilling?**
  
  Prop drilling - передача даних через багато рівнів компонентів, навіть якщо проміжні компоненти їх не використовують.
  
  ```jsx
  // Проблема prop drilling
  function App() {
    const user = { name: 'Максим' };
    return <Header user={user} />;
  }
  
  function Header({ user }) {
    return <Navigation user={user} />; // Просто передає далі
  }
  
  function Navigation({ user }) {
    return <UserInfo user={user} />; // Просто передає далі
  }
  
  function UserInfo({ user }) {
    return <span>{user.name}</span>; // Нарешті використовує
  }
  ```
  
  Рішення: Context API, Redux, Zustand

- **Як передати дані від дочірнього до батьківського компонента?**
  
  Через callback функції, які передаються як props.
  
  ```jsx
  // Батьківський компонент
  function Parent() {
    const [message, setMessage] = useState('');
  
    const handleChildData = (data) => {
      setMessage(data);
    };
  
    return (
      <div>
        <p>Повідомлення: {message}</p>
        <Child onSendData={handleChildData} />
      </div>
    );
  }
  
  // Дочірній компонент
  function Child({ onSendData }) {
    const sendData = () => {
      onSendData('Привіт від дочірнього!');
    };
  
    return <button onClick={sendData}>Відправити дані</button>;
  }
  ```

### Hooks

- **Що таке React Hooks?**
  
  Hooks - це функції, які дозволяють використовувати стан і інші React функціональності у функціональних компонентах.
  
  Переваги:
  - Простіший код ніж класові компоненти
  - Легше повторне використання логіки
  - Менше помилок з контекстом (this)
  - Кращий tree shaking

- **Як працює `useState`?**
  
  `useState` - хук для управління локальним станом компонента.
  
  ```jsx
  import { useState } from 'react';
  
  function Example() {
    const [count, setCount] = useState(0); // початкове значення
    const [user, setUser] = useState({ name: '', email: '' });
  
    const increment = () => setCount(count + 1);
    const updateUser = () => setUser({ name: 'Максим', email: 'max@example.com' });
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <p>User: {user.name}</p>
      </div>
    );
  }
  ```

- **Як працює `useEffect`?**
  
  `useEffect` - хук для виконання побічних ефектів (API запити, підписки, DOM маніпуляції).
  
  ```jsx
  import { useState, useEffect } from 'react';
  
  function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
  
    // Викликається після кожного рендеру
    useEffect(() => {
      fetchUser(userId).then(setUser);
    }, [userId]); // залежності
  
    // Ефект з очищенням
    useEffect(() => {
      const timer = setInterval(() => {
        console.log('Timer tick');
      }, 1000);
  
      return () => clearInterval(timer); // очищення
    }, []);
  
    return user ? <div>{user.name}</div> : <div>Loading...</div>;
  }
  ```

- **Що таке `useContext`?**
  
  `useContext` - хук для використання React Context без Consumer компонента.
  
  ```jsx
  import { createContext, useContext } from 'react';
  
  const ThemeContext = createContext();
  
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Header />
      </ThemeContext.Provider>
    );
  }
  
  function Header() {
    const theme = useContext(ThemeContext);
    return <div className={`header ${theme}`}>Header</div>;
  }
  ```

- **Які правила використання хуків?**
  
  1. **Викликайте хуки тільки на верхньому рівні**
     ```jsx
     // ❌ Неправильно
     function BadComponent() {
       if (condition) {
         useState(0); // В умові
       }
       return <div />;
     }
     
     // ✅ Правильно
     function GoodComponent() {
       const [count, setCount] = useState(0);
       if (condition) {
         // логіка тут
       }
       return <div />;
     }
     ```
  
  2. **Викликайте хуки тільки з React функцій**
     ```jsx
     // ✅ З компонентів
     function MyComponent() {
       const [state, setState] = useState();
     }
     
     // ✅ З custom hooks
     function useMyHook() {
       const [state, setState] = useState();
     }
     ```

### Життєвий цикл

- **Які фази життєвого циклу компонента?**
  
  У React є три основні фази життєвого циклу:
  
  1. **Mounting (Монтування)** - компонент створюється і вставляється в DOM
  2. **Updating (Оновлення)** - компонент оновлюється при зміні props або state
  3. **Unmounting (Розмонтування)** - компонент видаляється з DOM
  
  ```jsx
  // У функціональних компонентах з useEffect
  function MyComponent() {
    useEffect(() => {
      // Mounting - викликається один раз
      console.log('Component mounted');
      
      return () => {
        // Unmounting - викликається при видаленні
        console.log('Component will unmount');
      };
    }, []);
  
    useEffect(() => {
      // Updating - викликається при кожному оновленні
      console.log('Component updated');
    });
  }
  ```

- **Коли викликається `useEffect`?**
  
  `useEffect` викликається в різний час залежно від масиву залежностей:
  
  ```jsx
  // 1. Після кожного рендеру (без залежностей)
  useEffect(() => {
    console.log('Після кожного рендеру');
  });
  
  // 2. Тільки один раз після монтування (порожній масив)
  useEffect(() => {
    console.log('Тільки після монтування');
  }, []);
  
  // 3. При зміні конкретних значень
  useEffect(() => {
    console.log('При зміні count або name');
  }, [count, name]);
  ```

- **Як очистити ефект в `useEffect`?**
  
  Повертаємо cleanup функцію з useEffect:
  
  ```jsx
  useEffect(() => {
    // Підписка на події
    const handleScroll = () => console.log('Scrolled');
    window.addEventListener('scroll', handleScroll);
    
    // Таймер
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    
    // Cleanup функція
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
      console.log('Effect cleaned up');
    };
  }, []);
  ```

- **Що таке dependency array?**
  
  Dependency array (масив залежностей) - другий аргумент useEffect, який контролює коли ефект повинен виконуватися.
  
  ```jsx
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Без dependency array - викликається після кожного рендеру
  useEffect(() => {
    document.title = `Count: ${count}, Name: ${name}`;
  });
  
  // Порожній array - викликається один раз
  useEffect(() => {
    fetchInitialData();
  }, []);
  
  // З залежностями - викликається при зміні count
  useEffect(() => {
    if (count > 0) {
      localStorage.setItem('count', count.toString());
    }
  }, [count]);
  
  // Multiple dependencies
  useEffect(() => {
    updateUserProfile(count, name);
  }, [count, name]);
  ```
  
  Важливо включати всі змінні з компонента, які використовуються в ефекті.

### Події та форми

- **Як обробляти події в React?**
  
  Події в React обробляються через event handlers, які передаються як props:
  
  ```jsx
  function Button() {
    const handleClick = (event) => {
      event.preventDefault();
      console.log('Button clicked!');
      console.log('Event type:', event.type);
    };
  
    const handleMouseEnter = () => {
      console.log('Mouse entered!');
    };
  
    return (
      <button 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        Click me
      </button>
    );
  }
  ```
  
  Особливості:
  - Використовуємо camelCase (onClick, onMouseEnter)
  - Event handlers отримують SyntheticEvent
  - Можна передавати додаткові параметри

- **Що таке SyntheticEvent?**
  
  SyntheticEvent - це React обгортка над нативними подіями браузера для забезпечення кросбраузерної сумісності.
  
  ```jsx
  function Input() {
    const handleChange = (syntheticEvent) => {
      // SyntheticEvent властивості
      console.log('Type:', syntheticEvent.type);
      console.log('Target:', syntheticEvent.target.value);
      console.log('Current target:', syntheticEvent.currentTarget);
      
      // Доступ до нативної події
      const nativeEvent = syntheticEvent.nativeEvent;
      console.log('Native event:', nativeEvent);
      
      // Методи
      syntheticEvent.preventDefault();
      syntheticEvent.stopPropagation();
    };
  
    return <input onChange={handleChange} />;
  }
  ```
  
  Переваги:
  - Однакова поведінка в різних браузерах
  - Автоматичне управління пам'яттю
  - Додаткові методи і властивості

- **Як працювати з формами в React?**
  
  ```jsx
  function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Відправка даних на сервер
      submitForm(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ім'я"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Повідомлення"
        />
        <button type="submit">Відправити</button>
      </form>
    );
  }
  ```

- **Що таке контрольовані та неконтрольовані компоненти?**
  
  **Контрольовані компоненти** - React контролює значення через state:
  
  ```jsx
  function ControlledInput() {
    const [value, setValue] = useState('');
  
    return (
      <input
        type="text"
        value={value} // значення контролюється React
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
  ```
  
  **Неконтрольовані компоненти** - DOM контролює значення, React отримує через ref:
  
  ```jsx
  function UncontrolledInput() {
    const inputRef = useRef();
  
    const handleSubmit = () => {
      console.log('Value:', inputRef.current.value);
    };
  
    return (
      <div>
        <input
          type="text"
          ref={inputRef}
          defaultValue="Початкове значення"
        />
        <button onClick={handleSubmit}>Get Value</button>
      </div>
    );
  }
  ```
  
  **Коли використовувати:**
  - Контрольовані: коли потрібна валідація, форматування, умовна логіка
  - Неконтрольовані: для простих форм, інтеграції з non-React кодом

### Рендеринг та оптимізація

- **Коли React перерендерює компонент?**
  
  React перерендерює компонент в таких випадках:
  
  1. **Зміна state:** компонент перерендерюється при зміні власного стану
  2. **Зміна props:** коли батьківський компонент передає нові props
  3. **Батьківський рендер:** якщо батьківський компонент рендериться, дочірні теж
  4. **Context зміни:** при оновленні значення в Context Provider
  
  ```jsx
  function Parent() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <Child name="test" /> {/* Перерендериться при зміні count */}
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
    );
  }
  ```

- **Що таке `React.memo`?**
  
  `React.memo` - це Higher-Order Component для оптимізації функціональних компонентів. Він запобігає перерендеру, якщо props не змінилися.
  
  ```jsx
  // Без оптимізації
  function ExpensiveComponent({ name, data }) {
    console.log('ExpensiveComponent rendered');
    return <div>{name}: {data.length}</div>;
  }
  
  // З React.memo
  const OptimizedComponent = React.memo(function ExpensiveComponent({ name, data }) {
    console.log('OptimizedComponent rendered');
    return <div>{name}: {data.length}</div>;
  });
  
  // З custom comparison
  const CustomMemoComponent = React.memo(ExpensiveComponent, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name && 
           prevProps.data.length === nextProps.data.length;
  });
  ```

- **Що таке `useMemo` та `useCallback`?**
  
  **`useMemo`** - мемоізує результат обчислення:
  
  ```jsx
  function ExpensiveList({ items, filter }) {
    // Без оптимізації - обчислюється при кожному рендері
    const filteredItems = items.filter(item => item.includes(filter));
    
    // З useMemo - обчислюється тільки при зміні залежностей
    const memoizedFilteredItems = useMemo(() => {
      console.log('Filtering items...');
      return items.filter(item => item.includes(filter));
    }, [items, filter]);
  
    return (
      <ul>
        {memoizedFilteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
  ```
  
  **`useCallback`** - мемоізує функцію:
  
  ```jsx
  function Parent({ items }) {
    const [count, setCount] = useState(0);
  
    // Без useCallback - нова функція при кожному рендері
    const handleClick = (id) => {
      console.log('Clicked item:', id);
    };
  
    // З useCallback - та ж функція, якщо залежності не змінилися
    const memoizedHandleClick = useCallback((id) => {
      console.log('Clicked item:', id);
    }, []); // порожні залежності
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        {items.map(item => (
          <MemoizedChild 
            key={item.id}
            item={item}
            onClick={memoizedHandleClick}
          />
        ))}
      </div>
    );
  }
  ```

- **Як оптимізувати продуктивність React додатку?**
  
  1. **Використовуйте React.memo для компонентів:**
     ```jsx
     const MyComponent = React.memo(({ data }) => {
       return <div>{data.name}</div>;
     });
     ```
  
  2. **useMemo для важких обчислень:**
     ```jsx
     const expensiveValue = useMemo(() => {
       return heavyCalculation(props.data);
     }, [props.data]);
     ```
  
  3. **useCallback для event handlers:**
     ```jsx
     const handleClick = useCallback(() => {
       onClick(item.id);
     }, [onClick, item.id]);
     ```
  
  4. **Правильно структуруйте state:**
     ```jsx
     // ❌ Погано - змінює весь об'єкт
     const [state, setState] = useState({ user: {}, posts: [] });
     
     // ✅ Добре - роздільний state
     const [user, setUser] = useState({});
     const [posts, setPosts] = useState([]);
     ```
  
  5. **Використовуйте React.lazy і Suspense:**
     ```jsx
     const LazyComponent = React.lazy(() => import('./LazyComponent'));
     
     function App() {
       return (
         <Suspense fallback={<div>Loading...</div>}>
           <LazyComponent />
         </Suspense>
       );
     }
     ```
  
  6. **Віртуалізація для довгих списків:**
     ```jsx
     import { FixedSizeList } from 'react-window';
     
     function VirtualizedList({ items }) {
       return (
         <FixedSizeList
           height={600}
           itemCount={items.length}
           itemSize={50}
         >
           {({ index, style }) => (
             <div style={style}>{items[index].name}</div>
           )}
         </FixedSizeList>
       );
     }
     ```

## Redux питання

### Базові концепції

- **Що таке Redux і навіщо він потрібен?**
  
  Redux - це бібліотека для управління станом додатку. Вона реалізує архітектуру Flux і забезпечує передбачуване управління станом.
  
  Навіщо потрібен Redux:
  - Централізоване управління станом додатку
  - Передбачувані оновлення стану
  - Легше дебажити (Redux DevTools)
  - Time travel debugging
  - Server-side rendering підтримка
  - Легше тестувати логіку
  
  ```jsx
  // Без Redux - prop drilling проблема
  function App() {
    const [user, setUser] = useState(null);
    return <Header user={user} setUser={setUser} />;
  }
  
  // З Redux - доступ з будь-якого компонента
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  ```

- **Що таке store, action, reducer?**
  
  **Store** - централізоване сховище стану додатку:
  ```javascript
  import { createStore } from 'redux';
  
  const store = createStore(rootReducer);
  
  // Методи store
  store.getState(); // отримати поточний стан
  store.dispatch(action); // відправити дію
  store.subscribe(listener); // підписатися на зміни
  ```
  
  **Action** - об'єкт, який описує що сталося:
  ```javascript
  // Action object
  const addTodo = {
    type: 'ADD_TODO',
    payload: {
      id: 1,
      text: 'Вивчити Redux',
      completed: false
    }
  };
  
  // Action creator
  const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),
      text,
      completed: false
    }
  });
  ```
  
  **Reducer** - чиста функція, яка визначає як стан змінюється у відповідь на action:
  ```javascript
  const todosReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.payload.id);
      default:
        return state;
    }
  };
  ```

- **Який принцип роботи Redux?**
  
  Redux працює за принципом однонаправленого потоку даних:
  
  ```
  UI Component → Action → Reducer → Store → UI Component
  ```
  
  1. **Компонент відправляє Action:** `dispatch(addTodo('New task'))`
  2. **Store передає Action і поточний state в Reducer**
  3. **Reducer повертає новий state** на основі action
  4. **Store зберігає новий state** і повідомляє підписників
  5. **UI оновлюється** з новим state
  
  ```jsx
  function TodoApp() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  
    const handleAddTodo = (text) => {
      dispatch(addTodo(text)); // 1. Відправляємо action
    };
  
    return (
      <div>
        {todos.map(todo => ( // 5. UI оновлюється
          <div key={todo.id}>{todo.text}</div>
        ))}
        <AddTodoForm onAdd={handleAddTodo} />
      </div>
    );
  }
  ```

- **Що таке однонаправлений потік даних?**
  
  Однонаправлений потік даних (Unidirectional Data Flow) - це архітектурний принцип, де дані рухаються тільки в одному напрямку.
  
  **Переваги:**
  - Легше розуміти як працює додаток
  - Менше помилок через передбачуваність
  - Легше дебажити
  - Кращий контроль над станом
  
  ```jsx
  // Однонаправлений потік в Redux
  const Counter = () => {
    const count = useSelector(state => state.count); // Читаємо state
    const dispatch = useDispatch();
  
    const increment = () => {
      dispatch({ type: 'INCREMENT' }); // Відправляємо action
    };
  
    return (
      <div>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  };
  
  // Reducer обробляє action і повертає новий state
  const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  };
  ```
  
  **Порівняння з двонаправленим потоком:**
  ```jsx
  // ❌ Двонаправлений (Angular) - складніше відслідкувати
  // Model ↔ View (зміни можуть йти в обох напрямках)
  
  // ✅ Однонаправлений (Redux) - передбачувано
  // Action → Reducer → Store → View → Action
  ```

### Практичне використання

- **Як підключити Redux до React?**
  
  Для підключення Redux до React використовуємо React-Redux:
  
  ```jsx
  // 1. Встановлення
  npm install redux react-redux @reduxjs/toolkit
  
  // 2. Створення store
  import { configureStore } from '@reduxjs/toolkit';
  import counterReducer from './counterSlice';
  
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      todos: todosReducer
    }
  });
  
  // 3. Підключення до React app
  import { Provider } from 'react-redux';
  
  function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <TodoList />
        </div>
      </Provider>
    );
  }
  
  export default App;
  
  // 4. Використання в компонентах
  import { useSelector, useDispatch } from 'react-redux';
  
  function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    );
  }
  ```

- **Що таке `useSelector` та `useDispatch`?**
  
  **`useSelector`** - хук для читання даних зі store:
  
  ```jsx
  import { useSelector } from 'react-redux';
  
  function MyComponent() {
    // Читаємо конкретну частину state
    const user = useSelector(state => state.user);
    const todos = useSelector(state => state.todos);
    
    // Можна використовувати з обчисленнями
    const completedTodos = useSelector(state => 
      state.todos.filter(todo => todo.completed)
    );
    
    // З функцією порівняння для оптимізації
    const userInfo = useSelector(
      state => ({ name: state.user.name, email: state.user.email }),
      (left, right) => left.name === right.name && left.email === right.email
    );
  
    return <div>{user.name}</div>;
  }
  ```
  
  **`useDispatch`** - хук для відправки actions:
  
  ```jsx
  import { useDispatch } from 'react-redux';
  import { addTodo, deleteTodo } from './todosSlice';
  
  function TodoForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Відправляємо action
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false
      }));
      setText('');
    };
  
    const handleDelete = (id) => {
      dispatch(deleteTodo(id));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
  ```

- **Як обробляти асинхронні дії в Redux?**
  
  Для асинхронних дій використовуємо **Redux Toolkit's createAsyncThunk** або **Redux Thunk**:
  
  ```jsx
  // З Redux Toolkit createAsyncThunk
  import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
  
  // Async thunk для API запиту
  export const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  const usersSlice = createSlice({
    name: 'users',
    initialState: {
      user: null,
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(fetchUserById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    }
  });
  
  // Використання в компоненті
  function UserProfile({ userId }) {
    const { user, loading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchUserById(userId));
    }, [dispatch, userId]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return user ? <div>Hello, {user.name}!</div> : null;
  }
  ```
  
  **З Redux Thunk (старіший підхід):**
  
  ```jsx
  // Thunk action creator
  const fetchUser = (userId) => {
    return async (dispatch, getState) => {
      dispatch({ type: 'FETCH_USER_START' });
      
      try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
      } catch (error) {
        dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
      }
    };
  };
  
  // Використання
  dispatch(fetchUser(123));
  ```

- **Що таке middleware в Redux?**
  
  Middleware - це функції, які розширюють можливості Redux між відправкою action і досягненням reducer.
  
  **Популярні middleware:**
  
  ```jsx
  import { configureStore } from '@reduxjs/toolkit';
  import logger from 'redux-logger';
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true, // для асинхронних дій
        serializableCheck: true, // перевіряє серіалізацію
      }).concat(logger), // додаємо логер
  });
  ```
  
  **Створення власного middleware:**
  
  ```jsx
  // Logger middleware
  const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    console.log('Current state:', store.getState());
    
    const result = next(action);
    
    console.log('Next state:', store.getState());
    return result;
  };
  
  // Error handling middleware
  const errorMiddleware = (store) => (next) => (action) => {
    try {
      return next(action);
    } catch (error) {
      console.error('Redux error:', error);
      // Можна відправити action для обробки помилки
      store.dispatch({ type: 'ERROR_OCCURRED', payload: error.message });
    }
  };
  
  // Використання
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(loggerMiddleware)
        .concat(errorMiddleware)
  });
  ```
  
  **Порядок виконання middleware:**
  
  ```
  dispatch(action) → middleware1 → middleware2 → reducer → store
  ```
  
  Middleware дозволяють:
  - Логувати actions і state changes
  - Обробляти асинхронні дії
  - Валідувати actions
  - Трансформувати actions
  - Обробляти помилки

## TypeScript питання

### Базові концепції

- **Що таке TypeScript і навіщо він потрібен?**
  
  TypeScript - це надмножина JavaScript, яка додає статичну типізацію і компілюється в звичайний JavaScript.
  
  Навіщо потрібен TypeScript:
  - **Статична типізація** - помилки виявляються на етапі розробки
  - **Кращий IntelliSense** - автодоповнення і підказки в IDE
  - **Рефакторинг** - безпечна зміна коду
  - **Документація** - типи служать документацією
  - **Велика команда** - легше розуміти код інших розробників
  - **Менше runtime помилок** - багато помилок ловляться під час компіляції
  
  ```typescript
  // JavaScript - помилка виявиться тільки під час виконання
  function greet(name) {
    return `Hello, ${name.toUpperCase()}`;
  }
  greet(null); // Runtime error!
  
  // TypeScript - помилка виявиться під час компіляції
  function greet(name: string): string {
    return `Hello, ${name.toUpperCase()}`;
  }
  greet(null); // Compile-time error!
  ```

- **В чому різниця між TypeScript та JavaScript?**
  
  | JavaScript | TypeScript |
  |------------|------------|
  | Динамічна типізація | Статична типізація |
  | Помилки під час виконання | Помилки під час компіляції |
  | Слабкі інструменти розробки | Сильні інструменти (IntelliSense) |
  | Менше коду | Більше коду (типи) |
  | Швидший розвиток | Повільніший розвиток, але якісніший |
  | Працює безпосередньо в браузері | Потребує компіляції |
  
  ```typescript
  // JavaScript
  let user = { name: "John", age: 30 };
  user.email = "john@example.com"; // OK, додали нову властивість
  
  // TypeScript
  interface User {
    name: string;
    age: number;
  }
  
  let user: User = { name: "John", age: 30 };
  user.email = "john@example.com"; // Error! Property 'email' does not exist
  ```

- **Що таке статична типізація?**
  
  Статична типізація - це перевірка типів під час компіляції, а не під час виконання програми.
  
  ```typescript
  // Статична типізація - типи перевіряються під час компіляції
  let count: number = 5;
  count = "hello"; // Error: Type 'string' is not assignable to type 'number'
  
  function add(a: number, b: number): number {
    return a + b;
  }
  
  add(5, 10); // OK
  add("5", "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
  ```
  
  **Переваги статичної типізації:**
  - Раннє виявлення помилок
  - Кращий рефакторинг
  - Самодокументований код
  - Кращий IntelliSense
  
  **Недоліки:**
  - Більше коду для написання
  - Крива навчання
  - Час на компіляцію

- **Як оголосити тип змінної?**
  
  ```typescript
  // Явне оголошення типу
  let name: string = "Максим";
  let age: number = 25;
  let isActive: boolean = true;
  let items: string[] = ["apple", "banana"];
  let numbers: Array<number> = [1, 2, 3];
  
  // Автоматичне визначення типу (type inference)
  let city = "Київ"; // TypeScript автоматично визначає тип як string
  let score = 100; // автоматично number
  
  // Множинні типи (Union Types)
  let id: string | number = "user123";
  id = 456; // OK
  
  // Літерні типи
  let status: "pending" | "completed" | "failed" = "pending";
  
  // Об'єкти
  let user: { name: string; age: number } = {
    name: "Іван",
    age: 30
  };
  
  // Функції
  let greet: (name: string) => string = (name) => `Hello, ${name}`;
  
  // Опціональні властивості
  let config: { 
    host: string; 
    port?: number; // опціональна властивість
  } = {
    host: "localhost"
  };
  
  // Тип any (не рекомендується)
  let anything: any = "hello";
  anything = 42; // OK, але втрачаємо переваги типізації
  
  // Тип unknown (безпечніший варіант any)
  let value: unknown = "test";
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK після перевірки
  }
  ```

### Типи

- **Які базові типи є в TypeScript?**
  
  ```typescript
  // Примітивні типи
  let name: string = "Максим";
  let age: number = 25;
  let isActive: boolean = true;
  let nothing: null = null;
  let notDefined: undefined = undefined;
  
  // Масиви
  let colors: string[] = ["red", "green", "blue"];
  let numbers: Array<number> = [1, 2, 3];
  let matrix: number[][] = [[1, 2], [3, 4]];
  
  // Кортежі (Tuples)
  let point: [number, number] = [10, 20];
  let user: [string, number, boolean] = ["John", 30, true];
  
  // Об'єкти
  let person: { name: string; age: number } = {
    name: "Anna",
    age: 25
  };
  
  // Функції
  let add: (a: number, b: number) => number = (a, b) => a + b;
  
  // Enum
  enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
  }
  let favoriteColor: Color = Color.Red;
  
  // Union Types
  let id: string | number = "user123";
  
  // Literal Types
  let status: "loading" | "success" | "error" = "loading";
  
  // Any (уникати)
  let anything: any = "hello";
  
  // Unknown (безпечніший any)
  let value: unknown = getData();
  
  // Never (для функцій, що ніколи не повертають значення)
  function throwError(): never {
    throw new Error("Something went wrong");
  }
  
  // Void (для функцій без return)
  function logMessage(msg: string): void {
    console.log(msg);
  }
  ```

- **Що таке інтерфейси?**
  
  Інтерфейси визначають структуру об'єктів і можуть бути використані для типізації.
  
  ```typescript
  // Базовий інтерфейс
  interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // опціональна властивість
    readonly createdAt: Date; // тільки для читання
  }
  
  // Використання
  const user: User = {
    id: 1,
    name: "Максим",
    email: "max@example.com",
    createdAt: new Date()
  };
  
  // user.createdAt = new Date(); // Error! Cannot assign to 'createdAt'
  
  // Інтерфейс з методами
  interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
  }
  
  class SimpleCalculator implements Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
    
    subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  // Розширення інтерфейсів
  interface Animal {
    name: string;
    age: number;
  }
  
  interface Dog extends Animal {
    breed: string;
    bark(): void;
  }
  
  const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    bark() {
      console.log("Woof!");
    }
  };
  
  // Індексні сигнатури
  interface StringDictionary {
    [key: string]: string;
  }
  
  const dict: StringDictionary = {
    greeting: "Привіт",
    farewell: "До побачення"
  };
  ```

- **В чому різниця між `interface` та `type`?**
  
  ```typescript
  // Interface - для об'єктів, можна розширювати
  interface UserInterface {
    name: string;
    age: number;
  }
  
  // Розширення interface
  interface UserInterface {
    email: string; // додається до існуючого інтерфейсу
  }
  
  interface AdminInterface extends UserInterface {
    permissions: string[];
  }
  
  // Type alias - для будь-яких типів, не можна розширювати
  type UserType = {
    name: string;
    age: number;
  };
  
  // type UserType = { email: string }; // Error! Duplicate identifier
  
  type AdminType = UserType & {
    permissions: string[];
  };
  
  // Type може бути для примітивів і union типів
  type ID = string | number;
  type Status = "loading" | "success" | "error";
  type EventHandler = (event: Event) => void;
  
  // Generics в type
  type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
  };
  
  type UserResponse = ApiResponse<User>;
  ```
  
  **Коли використовувати:**
  - **Interface**: для об'єктів, коли потрібне розширення, публічні API
  - **Type**: для союзних типів, примітивів, складних типів, коли не потрібне розширення

- **Що таке generics?**
  
  Generics дозволяють створювати компоненти, які працюють з різними типами, зберігаючи type safety.
  
  ```typescript
  // Проста generic функція
  function identity<T>(arg: T): T {
    return arg;
  }
  
  let stringResult = identity<string>("hello"); // тип string
  let numberResult = identity<number>(42); // тип number
  let autoResult = identity("hello"); // TypeScript автоматично визначить тип
  
  // Generic інтерфейс
  interface Container<T> {
    value: T;
    getValue(): T;
  }
  
  class NumberContainer implements Container<number> {
    constructor(public value: number) {}
    
    getValue(): number {
      return this.value;
    }
  }
  
  // Multiple type parameters
  interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  let pair: Pair<string, number> = {
    first: "hello",
    second: 42
  };
  
  // Generic constraints
  interface Lengthwise {
    length: number;
  }
  
  function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // OK, тому що T має length
    return arg;
  }
  
  logLength("hello"); // OK
  logLength([1, 2, 3]); // OK
  // logLength(42); // Error! number doesn't have length
  
  // Conditional types
  type IsArray<T> = T extends any[] ? true : false;
  
  type Test1 = IsArray<string[]>; // true
  type Test2 = IsArray<string>; // false
  
  // Utility types з generics
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  type PartialTodo = Partial<Todo>; // всі властивості опціональні
  type TodoTitle = Pick<Todo, 'title'>; // тільки title
  type TodoWithoutId = Omit<Todo, 'id'>; // без id
  ```

- **Що таке union types?**
  
  Union types дозволяють змінній бути одним з декількох типів.
  
  ```typescript
  // Базові union types
  let id: string | number;
  id = "user123"; // OK
  id = 456; // OK
  // id = true; // Error!
  
  // Функція з union типом
  function formatId(id: string | number): string {
    if (typeof id === "string") {
      return id.toUpperCase();
    } else {
      return id.toString();
    }
  }
  
  // Literal union types
  type Theme = "light" | "dark" | "auto";
  type Size = "small" | "medium" | "large";
  
  function setTheme(theme: Theme) {
    document.body.className = `theme-${theme}`;
  }
  
  setTheme("dark"); // OK
  // setTheme("blue"); // Error!
  
  // Union з об'єктами
  type LoadingState = {
    status: "loading";
  };
  
  type SuccessState = {
    status: "success";
    data: any;
  };
  
  type ErrorState = {
    status: "error";
    error: string;
  };
  
  type AppState = LoadingState | SuccessState | ErrorState;
  
  function handleState(state: AppState) {
    switch (state.status) {
      case "loading":
        console.log("Loading...");
        break;
      case "success":
        console.log("Data:", state.data); // TypeScript знає про властивість data
        break;
      case "error":
        console.log("Error:", state.error); // TypeScript знає про властивість error
        break;
    }
  }
  
  // Discriminated unions
  interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  
  type Shape = Circle | Rectangle;
  
  function getArea(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "rectangle":
        return shape.width * shape.height;
    }
  }
  
  // Intersection types (&)
  type Person = {
    name: string;
    age: number;
  };
  
  type Employee = {
    id: number;
    department: string;
  };
  
  type WorkingPerson = Person & Employee;
  
  const worker: WorkingPerson = {
    name: "John",
    age: 30,
    id: 123,
    department: "IT"
  };
  ```

### React + TypeScript

- **Як типізувати props компонента?**
  
  ```tsx
  // Через інтерфейс (рекомендований спосіб)
  interface UserCardProps {
    name: string;
    age: number;
    email?: string; // опціональна властивість
    isActive: boolean;
    hobbies: string[];
    onClick: (id: number) => void;
    children: React.ReactNode; // для дочірніх елементів
  }
  
  function UserCard({ name, age, email, isActive, hobbies, onClick, children }: UserCardProps) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Вік: {age}</p>
        {email && <p>Email: {email}</p>}
        <p>Статус: {isActive ? 'Активний' : 'Неактивний'}</p>
        <ul>
          {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        <button onClick={() => onClick(1)}>Click</button>
        {children}
      </div>
    );
  }
  
  // Через type alias
  type ButtonProps = {
    variant: 'primary' | 'secondary' | 'danger';
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>; // успадковуємо HTML атрибути
  
  function Button({ variant, size, disabled = false, children, ...props }: ButtonProps) {
    return (
      <button 
        className={`btn btn-${variant} btn-${size}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  // Використання
  <UserCard
    name="Максим"
    age={25}
    email="max@example.com"
    isActive={true}
    hobbies={['програмування', 'читання']}
    onClick={(id) => console.log(id)}
  >
    <p>Додаткова інформація</p>
  </UserCard>
  
  <Button variant="primary" size="medium" onClick={handleClick}>
    Натисни мене
  </Button>
  ```

- **Як типізувати useState?**
  
  ```tsx
  import { useState } from 'react';
  
  // Автоматичне визначення типу
  const [count, setCount] = useState(0); // number
  const [name, setName] = useState(''); // string
  const [isVisible, setIsVisible] = useState(true); // boolean
  
  // Явне вказування типу
  const [user, setUser] = useState<User | null>(null);
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const [users, setUsers] = useState<User[]>([]);
  
  // Union types
  type Status = 'idle' | 'loading' | 'success' | 'error';
  const [status, setStatus] = useState<Status>('idle');
  
  // Складні об'єкти
  interface FormData {
    username: string;
    email: string;
    age: number;
  }
  
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    age: 0
  });
  
  // Функціональні оновлення
  const updateUser = (newUser: User) => {
    setUser(prevUser => prevUser ? { ...prevUser, ...newUser } : newUser);
  };
  
  const addUser = (user: User) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };
  
  // Generic useState для переваги використовуваного типу
  function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
  
    const setStoredValue = (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(value) : value;
        setValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [value, setStoredValue] as const; // as const для точних типів
  }
  ```

- **Як типізувати події?**
  
  ```tsx
  import { ChangeEvent, FormEvent, MouseEvent, KeyboardEvent } from 'react';
  
  function FormComponent() {
    // Input change події
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    };
  
    // Textarea change події
    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(e.target.value);
    };
  
    // Select change події
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      console.log(e.target.value);
    };
  
    // Form submit події
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted');
    };
  
    // Button click події
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      console.log('Button clicked');
      console.log(e.currentTarget.name);
    };
  
    // Keyboard події
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        console.log('Enter pressed');
      }
    };
  
    // Generic handler
    const handleGenericClick = (e: MouseEvent<HTMLElement>) => {
      console.log(e.currentTarget.tagName);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        
        <textarea onChange={handleTextareaChange} />
        
        <select onChange={handleSelectChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        
        <button 
          type="submit" 
          onClick={handleClick}
          name="submit-button"
        >
          Submit
        </button>
        
        <div onClick={handleGenericClick}>Click me</div>
      </form>
    );
  }
  
  // Custom event handlers
  interface CustomButtonProps {
    onCustomClick: (data: { id: number; name: string }) => void;
  }
  
  function CustomButton({ onCustomClick }: CustomButtonProps) {
    const handleClick = () => {
      onCustomClick({ id: 1, name: 'test' });
    };
  
    return <button onClick={handleClick}>Custom Click</button>;
  }
  
  // Hook для подій
  function useClickOutside<T extends HTMLElement>(
    callback: () => void
  ) {
    const ref = useRef<T>(null);
  
    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };
  
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }, [callback]);
  
    return ref;
  }
  ```

- **Що таке React.FC?**
  
  `React.FC` (React.FunctionComponent) - це TypeScript тип для функціональних компонентів React.
  
  ```tsx
  // З React.FC
  interface Props {
    name: string;
    age: number;
  }
  
  const UserComponent: React.FC<Props> = ({ name, age }) => {
    return <div>{name} is {age} years old</div>;
  };
  
  // Без React.FC (сучасний підхід)
  function UserComponent({ name, age }: Props) {
    return <div>{name} is {age} years old</div>;
  }
  
  // React.FC автоматично включає children
  const Container: React.FC = ({ children }) => {
    return <div className="container">{children}</div>;
  };
  
  // Без React.FC потрібно явно вказати children
  interface ContainerProps {
    children: React.ReactNode;
  }
  
  function Container({ children }: ContainerProps) {
    return <div className="container">{children}</div>;
  }
  ```
  
  **Переваги React.FC:**
  - Автоматично включає `children` prop
  - Автоматично включає `displayName`, `defaultProps`, та інші static властивості
  - Явно показує, що це React компонент
  
  **Недоліки React.FC:**
  - Автоматично включає `children`, навіть якщо не потрібно
  - Проблеми з generics
  - Складніше з defaultProps
  
  **Сучасний підхід (без React.FC):**
  
  ```tsx
  // Рекомендований сучасний підхід
  interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  function Button({ variant, children, onClick }: ButtonProps) {
    return (
      <button className={`btn-${variant}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  // З defaultProps
  Button.defaultProps = {
    variant: 'primary'
  };
  
  // Generic компонент (складно з React.FC)
  interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  }
  
  function List<T>({ items, renderItem }: ListProps<T>) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }
  
  // Використання
  <List
    items={[1, 2, 3]}
    renderItem={(item) => <span>Number: {item}</span>}
  />
  ```
  
  **Висновок:** Сучасна практика рекомендує не використовувати `React.FC` і писати звичайні функції з явною типізацією props.

## Інструменти розробки

### Git

- Що таке Git і навіщо він потрібен?
- Які основні команди Git ви знаєте?
- Що таке branch і як з ними працювати?
- Що таке merge та rebase?
- Як вирішувати конфлікти?

### Chrome DevTools

- Як дебажити JavaScript код?
- Як перевіряти стилі елементів?
- Як аналізувати продуктивність?
- Як використовувати Network tab?

### Bundlers та Build Tools

- Що таке Webpack?
- Що таке Create React App?
- Що таке npm/yarn?
- Що таке package.json?

## Питання специфічні для вакансії

### Material UI

- Чи працювали ви з Material UI?
- Як кастомізувати компоненти Material UI?
- Що таке Theme в Material UI?

### Форми

- Як створювати та валідувати форми в React?
- Чи працювали з Redux Form або Formik?
- Як обробляти помилки валідації?

### Backoffice системи

- Що таке Backoffice система?
- Які особливості розробки адмін панелей?
- Як організувати роботу з великими таблицями даних?

### Оптимізація

- Як оптимізувати завантаження сторінки?
- Що таке code splitting?
- Як оптимізувати зображення?
- Що таке lazy loading?

## Практичні завдання

### Верстка

- Створіть адаптивну картку товару
- Зверстайте навігаційне меню
- Створіть модальне вікно

### JavaScript

- Напишіть функцію для дебаунсу
- Реалізуйте простий калькулятор
- Створіть слайдер зображень

### React

- Створіть компонент лічильника
- Реалізуйте todo список
- Створіть форму реєстрації з валідацією

### Алгоритми

- Реверс рядка
- Пошук дублікатів в масиві
- Сортування масиву

## Ситуаційні питання

### Технічні проблеми

- Як би ви вирішили проблему повільного рендерингу?
- Що робити, якщо стилі не застосовуються?
- Як дебажити проблему в продакшені?

### Командна робота

- Як ви працюєте в команді?
- Як вирішуєте конфлікти в коді?
- Як отримуєте фідбек від ментора?

### Планування та підходи

- Як ви плануєте роботу над новою функцією?
- Як підходите до рефакторингу коду?
- Як тестуєте свій код?

## Питання про досвід

### Попередні проекти

- Розкажіть про найскладніший баг, який доводилось виправляти
- Який проект вважаєте найуспішнішим і чому?
- З якими технічними викликами стикались?

### Навчання та розвиток

- Як слідкуєте за новинками у фронтенді?
- Які ресурси використовуєте для навчання?
- Над чим працюєте зараз для покращення навичок?

## Питання до компанії

Підготуйте власні питання про:

- Команду та процеси розробки
- Технічний стек та архітектуру проектів
- Можливості росту та навчання
- Культуру компанії
- Конкретні завдання на позиції
