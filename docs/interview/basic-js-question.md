# Frontend Developer Interview Questions & Answers

# Основи:

- Які типи даних є в JS? (primitive vs reference types)
- Різниця між == і ===?
- Що таке falsy values? (false, 0, "", null, undefined, NaN)
- Різниця між null і undefined?
- Що таке NaN? Як перевірити чи значення NaN?
- Різниця між let, const, var?
- Що таке hoisting?
- Що таке temporal dead zone?

---

## <span style="color: #8B5CF6;">Які типи даних є в JS? (primitive vs reference types)</span>

У JavaScript існує два основні види типів даних:

### Примітивні типи (Primitive Types)

Зберігаються в стеку, передаються по значенню:

1. **Number** - числа (включно з цілими та дробовими)

   ```javascript
   let age = 25;
   let price = 99.99;
   ```

2. **String** - рядки

   ```javascript
   let name = "John";
   let template = `Hello, ${name}`;
   ```

3. **Boolean** - логічні значення

   ```javascript
   let isActive = true;
   ```

4. **Undefined** - неініціалізована змінна

   ```javascript
   let value;
   console.log(value); // undefined
   ```

5. **Null** - навмисна відсутність значення

   ```javascript
   let data = null;
   ```

6. **Symbol** - унікальний ідентифікатор (ES6+)

   ```javascript
   let sym = Symbol("id");
   ```

7. **BigInt** - великі цілі числа (ES2020)
   ```javascript
   let bigNum = 123456789012345678901234567890n;
   ```

### Референсні типи (Reference Types)

Зберігаються в купі, передаються по посиланню:

1. **Object** - об'єкти

   ```javascript
   let person = { name: "John", age: 30 };
   ```

2. **Array** - масиви

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```

3. **Function** - функції
   ```javascript
   function greet() {
     return "Hello";
   }
   ```

### Ключові відмінності:

**Примітивні типи:**

- Копіюються по значенню
- Immutable (незмінні)
- Зберігаються в стеку

```javascript
let a = 5;
let b = a; // копія значення
a = 10;
console.log(b); // 5 (не змінилось)
```

**Референсні типи:**

- Копіюються по посиланню
- Mutable (змінні)
- Зберігаються в купі

```javascript
let obj1 = { value: 5 };
let obj2 = obj1; // копія посилання
obj1.value = 10;
console.log(obj2.value); // 10 (змінилось)
```

---

## <span style="color: #8B5CF6;">Різниця між == і ===</span>

### == (Abstract Equality - м'яке порівняння)

Виконує приведення типів перед порівнянням:

```javascript
console.log(5 == "5"); // true (рядок приводиться до числа)
console.log(true == 1); // true (boolean приводиться до числа)
console.log(null == undefined); // true (спеціальний випадок)
console.log(0 == false); // true (false стає 0)
console.log("" == false); // true (обидва стають 0)
console.log([1] == 1); // true (масив приводиться до рядка "1", потім до числа)
```

### === (Strict Equality - строге порівняння)

Порівнює без приведення типів:

```javascript
console.log(5 === "5"); // false (різні типи)
console.log(true === 1); // false (різні типи)
console.log(null === undefined); // false (різні типи)
console.log(0 === false); // false (різні типи)
console.log("" === false); // false (різні типи)
console.log([1] === 1); // false (різні типи)
```

### Правила приведення типів для ==

1. **Якщо типи однакові** - поведінка як у ===
2. **null == undefined** - завжди true
3. **Число vs Рядок** - рядок приводиться до числа
4. **Boolean vs Будь-який тип** - boolean приводиться до числа
5. **Object vs Primitive** - об'єкт приводиться до примітиву

### Приклади складних випадків:

```javascript
// Підступні випадки з ==
console.log([] == false); // true
console.log([0] == false); // true
console.log([1] == true); // true
console.log([[]] == false); // true

// З === все передбачувано
console.log([] === false); // false
console.log([0] === false); // false
console.log([1] === true); // false
console.log([[]] === false); // false
```

### Найкращі практики:

**Завжди використовуй ===:**

```javascript
// Погано
if (user.age == 18) {
}
if (response.data == null) {
}

// Добре
if (user.age === 18) {
}
if (response.data === null || response.data === undefined) {
}
// або
if (response.data == null) {
} // виняток: перевірка на null/undefined
```

**Винятки для ==:**

- Перевірка на null/undefined одночасно: `value == null`
- Але краще використовувати: `value === null || value === undefined`

### ESLint правило:

```json
{
  "rules": {
    "eqeqeq": ["error", "always"]
  }
}
```

---

## <span style="color: #8B5CF6;">Що таке falsy values?</span>

**Falsy values** - це значення, які приводяться до `false` в boolean контексті.

### Повний список falsy values в JavaScript:

1. **`false`** - логічне false
2. **`0`** - число нуль
3. **`-0`** - негативний нуль
4. **`0n`** - BigInt нуль
5. **`""`** - порожній рядок
6. **`null`** - відсутність значення
7. **`undefined`** - неініціалізоване значення
8. **`NaN`** - Not a Number

### Приклади використання:

```javascript
// Всі ці умови будуть false
if (false) {
} // false
if (0) {
} // false
if (-0) {
} // false
if (0n) {
} // false
if ("") {
} // false
if (null) {
} // false
if (undefined) {
} // false
if (NaN) {
} // false

// Перевірка за допомогою Boolean()
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

### Truthy values

Всі інші значення є **truthy**:

```javascript
// Всі ці умови будуть true
if (true) {
} // true
if (1) {
} // true
if (-1) {
} // true
if ("hello") {
} // true
if (" ") {
} // true (рядок з пробілом)
if ([]) {
} // true (порожній масив)
if ({}) {
} // true (порожній об'єкт)
if (function () {}) {
} // true (функція)

console.log(Boolean("0")); // true (рядок "0")
console.log(Boolean("false")); // true (рядок "false")
console.log(Boolean([])); // true (порожній масив)
console.log(Boolean({})); // true (порожній об'єкт)
```

### Практичні приклади:

```javascript
// Перевірка на існування значення
function processUser(user) {
  if (!user) {
    return "User not provided"; // спрацює для null, undefined, ""
  }
  return `Hello, ${user}`;
}

// Значення за замовчуванням
function greet(name) {
  name = name || "Guest"; // якщо name - falsy, використати "Guest"
  return `Hello, ${name}`;
}

// Сучасний підхід з nullish coalescing
function greetModern(name) {
  name = name ?? "Guest"; // тільки для null/undefined
  return `Hello, ${name}`;
}

console.log(greet("")); // "Hello, Guest" (пусий рядок falsy)
console.log(greetModern("")); // "Hello, " (пустий рядок не null/undefined)
```

### Підступні випадки:

```javascript
// Ці значення truthy, хоча можуть здаватися falsy
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(new Boolean(false))); // true (об'єкт завжди truthy)

// Перевірка порожніх структур
const arr = [];
if (arr.length) {
} // false (length = 0)

const obj = {};
if (Object.keys(obj).length) {
} // false (немає ключів)
```

### Корисні методи для роботи з falsy:

```javascript
// Фільтрація falsy значень
const values = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // [1, 2, 3, 4]

// Знаходження першого truthy значення
function getFirstTruthy(...values) {
  return values.find(Boolean);
}

console.log(getFirstTruthy(0, "", "hello", null)); // "hello"
```

---

## <span style="color: #8B5CF6;">Різниця між null і undefined?</span>

### Основні відмінності:

| Характеристика  | `null`                        | `undefined`                       |
| --------------- | ----------------------------- | --------------------------------- |
| **Значення**    | Навмисна відсутність значення | Неініціалізована змінна           |
| **Тип**         | `object` (історична помилка)  | `undefined`                       |
| **Призначення** | Програміст явно встановлює    | JavaScript встановлює автоматично |

### `undefined` - автоматичне значення:

```javascript
// Неоголошена змінна
let name;
console.log(name); // undefined

// Відсутній параметр функції
function greet(name) {
  console.log(name); // undefined якщо не передати
}
greet();

// Відсутня властивість об'єкта
const user = { age: 25 };
console.log(user.name); // undefined

// Функція без return
function doSomething() {
  // немає return
}
console.log(doSomething()); // undefined

// Елемент масиву поза межами
const arr = [1, 2, 3];
console.log(arr[10]); // undefined
```

### `null` - навмисне значення:

```javascript
// Явне встановлення відсутності значення
let data = null; // програміст вказав, що значення відсутнє

// API часто повертає null
const user = getUserById(123); // може повернути null якщо не знайдено

// Очищення посилання
let element = document.getElementById("myDiv");
element = null; // звільняємо пам'ять

// Ініціалізація змінної до отримання даних
let apiResponse = null;
fetchData().then((response) => {
  apiResponse = response;
});
```

### Перевірка типів:

```javascript
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (історична помилка в JS)

// Правильна перевірка на null
console.log(null === null); // true
console.log(undefined === undefined); // true

// Порівняння між собою
console.log(null == undefined); // true (приведення типів)
console.log(null === undefined); // false (різні типи)
```

### Практичні приклади перевірки:

```javascript
// Перевірка на undefined
function processValue(value) {
  if (value === undefined) {
    return "Value not provided";
  }
  return value;
}

// Перевірка на null
function processUser(user) {
  if (user === null) {
    return "User not found";
  }
  return user.name;
}

// Перевірка на обидва одразу
function handleValue(value) {
  if (value == null) {
    // перевіряє і null, і undefined
    return "No value";
  }
  return value;
}

// Сучасний підхід з nullish coalescing
const name = user?.name ?? "Unknown"; // тільки для null/undefined
const age = user?.age || 0; // для всіх falsy значень
```

### JSON і серіалізація:

```javascript
const obj = {
  name: "John",
  age: undefined,
  city: null,
};

console.log(JSON.stringify(obj));
// {"name":"John","city":null}
// undefined властивості видаляються, null залишається
```

### Найкращі практики:

```javascript
// Використовуй undefined для неініціалізованих змінних
let userData; // undefined поки не завантажено

// Використовуй null для явної відсутності значення
let selectedItem = null; // користувач нічого не вибрав

// Перевірка існування властивості
if ("property" in obj) {
} // властивість існує (може бути undefined)
if (obj.property !== undefined) {
} // властивість має значення

// Безпечне звернення до властивостей
const street = user?.address?.street ?? "Not specified";
```

### Функції для роботи:

```javascript
// Перевірка на null або undefined
function isNullish(value) {
  return value == null; // true для null і undefined
}

// Перевірка тільки на undefined
function isUndefined(value) {
  return value === undefined;
}

// Перевірка тільки на null
function isNull(value) {
  return value === null;
}
```

---

## <span style="color: #8B5CF6;">Що таке NaN? Як перевірити чи значення NaN?</span>

### Що таке NaN?

**NaN** (Not a Number) - це спеціальне числове значення, яке представляє "не число" в JavaScript.

### Коли виникає NaN:

```javascript
// Неможливі математичні операції
console.log(Math.sqrt(-1)); // NaN
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN

// Перетворення нечислових рядків у числа
console.log(Number("hello")); // NaN
console.log(parseInt("abc")); // NaN
console.log(parseFloat("xyz")); // NaN

// Математичні операції з нечисловими значеннями
console.log("hello" * 2); // NaN
console.log("text" - 5); // NaN
console.log("abc" / 2); // NaN

// Операції з undefined
console.log(undefined + 1); // NaN
console.log(undefined * 2); // NaN
```

### Унікальні властивості NaN:

```javascript
// NaN не дорівнює сам собі!
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

// NaN не дорівнює нічому іншому
console.log(NaN === 0); // false
console.log(NaN === undefined); // false
console.log(NaN === null); // false

// Тип NaN - це number
console.log(typeof NaN); // "number"
```

### Способи перевірки на NaN:

#### 1. **Number.isNaN()** - найкращий спосіб (ES6+):

```javascript
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false (не приводить тип)
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN("123")); // false
console.log(Number.isNaN(undefined)); // false

// Надійний і точний
function isActuallyNaN(value) {
  return Number.isNaN(value);
}
```

#### 2. **isNaN()** - глобальна функція (менш надійна):

```javascript
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true (приводить до NaN)
console.log(isNaN("123")); // false
console.log(isNaN(undefined)); // true (undefined -> NaN)
console.log(isNaN({})); // true (об'єкт -> NaN)

// Проблема: приводить типи перед перевіркою
console.log(isNaN("text")); // true (правильно)
console.log(isNaN("123abc")); // true (неочікувано для деяких)
```

#### 3. **Самоперевірка** (використання унікальної властивості):

```javascript
function isNaNValue(value) {
  return value !== value; // тільки NaN не дорівнює сам собі
}

console.log(isNaNValue(NaN)); // true
console.log(isNaNValue("hello")); // false
console.log(isNaNValue(123)); // false
```

### Практичні приклади:

```javascript
// Безпечне перетворення до числа
function safeParseNumber(str) {
  const num = Number(str);
  if (Number.isNaN(num)) {
    return 0; // або будь-яке значення за замовчуванням
  }
  return num;
}

console.log(safeParseNumber("123")); // 123
console.log(safeParseNumber("abc")); // 0

// Валідація числових полів
function validateNumberInput(input) {
  const value = parseFloat(input);

  if (Number.isNaN(value)) {
    return {
      valid: false,
      error: "Введіть правильне число",
    };
  }

  return {
    valid: true,
    value: value,
  };
}

// Фільтрація NaN з масиву
const numbers = [1, NaN, 3, "hello", 5, NaN, 7];
const validNumbers = numbers.filter((num) => !Number.isNaN(num));
console.log(validNumbers); // [1, 3, "hello", 5, 7]

// Якщо потрібні тільки числа
const onlyNumbers = numbers.filter((num) => typeof num === "number" && !Number.isNaN(num));
console.log(onlyNumbers); // [1, 3, 5, 7]
```

### Поширені помилки:

```javascript
// ПОМИЛКА: використання === для перевірки NaN
if (value === NaN) {
} // завжди false!

// ПОМИЛКА: використання isNaN() для рядків
if (isNaN("hello")) {
} // true, але "hello" не NaN, а рядок

// ПРАВИЛЬНО: використання Number.isNaN()
if (Number.isNaN(value)) {
} // тільки для справжнього NaN

// ПРАВИЛЬНО: перевірка на число і NaN одночасно
if (typeof value === "number" && Number.isNaN(value)) {
}
```

### Корисні утиліти:

```javascript
// Перевірка чи значення є валідним числом
function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) && isFinite(value);
}

console.log(isValidNumber(123)); // true
console.log(isValidNumber(NaN)); // false
console.log(isValidNumber(Infinity)); // false
console.log(isValidNumber("123")); // false

// Безпечне додавання чисел
function safeAdd(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return 0; // або throw error
  }

  return numA + numB;
}
```

### В контексті форм та користувацького вводу:

```javascript
// Обробка користувацького вводу
function handleNumberInput(inputValue) {
  // Спочатку очищуємо рядок
  const cleaned = inputValue.trim();

  // Перетворюємо в число
  const number = parseFloat(cleaned);

  // Перевіряємо результат
  if (Number.isNaN(number)) {
    return {
      error: "Невірний формат числа",
      value: null,
    };
  }

  return {
    error: null,
    value: number,
  };
}
```

---

## <span style="color: #8B5CF6;">Різниця між let, const, var?</span>

### Порівняльна таблиця:

| Характеристика     | `var`               | `let`         | `const`       |
| ------------------ | ------------------- | ------------- | ------------- |
| **Scope**          | Function-scoped     | Block-scoped  | Block-scoped  |
| **Hoisting**       | Hoisted (undefined) | Hoisted (TDZ) | Hoisted (TDZ) |
| **Re-declaration** | Дозволено           | Заборонено    | Заборонено    |
| **Re-assignment**  | Дозволено           | Дозволено     | Заборонено    |
| **Initialization** | Необов'язкова       | Необов'язкова | Обов'язкова   |

### 1. Scope (Область видимості):

```javascript
// var - function-scoped
function testVar() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 - доступна поза блоком
}

// let/const - block-scoped
function testLet() {
  if (true) {
    let y = 1;
    const z = 2;
  }
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}

// Цикли
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 0, 1, 2
}
```

### 2. Hoisting (Підняття):

```javascript
// var - hoisted з undefined
console.log(varVariable); // undefined (не помилка)
var varVariable = "Hello";

// let/const - hoisted в Temporal Dead Zone
console.log(letVariable); // ReferenceError
console.log(constVariable); // ReferenceError
let letVariable = "World";
const constVariable = "!";

// Функціональний приклад
function hoistingExample() {
  console.log(a); // undefined
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError

  var a = 1;
  let b = 2;
  const c = 3;
}
```

### 3. Re-declaration (Повторне оголошення):

```javascript
// var - дозволяє повторне оголошення
var name = "John";
var name = "Jane"; // OK
console.log(name); // "Jane"

// let - заборонено в тому ж scope
let age = 25;
let age = 30; // SyntaxError: Identifier 'age' has already been declared

// const - заборонено
const city = "Kyiv";
const city = "Lviv"; // SyntaxError: Identifier 'city' has already been declared

// Різні scopes - OK
function scopeTest() {
  let name = "Local";
  if (true) {
    let name = "Block"; // OK - різний scope
    console.log(name); // "Block"
  }
  console.log(name); // "Local"
}
```

### 4. Re-assignment (Повторне присвоєння):

```javascript
// var і let - дозволяють reassignment
var count = 1;
count = 2; // OK

let score = 10;
score = 20; // OK

// const - заборонено для примітивів
const PI = 3.14;
PI = 3.15; // TypeError: Assignment to constant variable

// const з об'єктами - можна змінювати вміст
const user = { name: "John" };
user.name = "Jane"; // OK - змінюємо властивість
user.age = 25; // OK - додаємо властивість
// user = {}; // Error - не можна змінити посилання

const numbers = [1, 2, 3];
numbers.push(4); // OK - змінюємо масив
numbers[0] = 0; // OK
// numbers = []; // Error - не можна змінити посилання
```

### 5. Temporal Dead Zone (TDZ):

```javascript
// let і const мають TDZ
console.log(typeof x); // "undefined" - x не оголошено
console.log(typeof y); // ReferenceError - y в TDZ

let y = 5;

// Практичний приклад TDZ
function tdzone() {
  console.log(temp); // ReferenceError

  if (true) {
    // TDZ для temp починається тут
    console.log(temp); // ReferenceError
    let temp = "value"; // TDZ закінчується тут
    console.log(temp); // "value"
  }
}
```

### 6. Практичні приклади:

```javascript
// Проблема з var у циклах
const buttons = document.querySelectorAll("button");

// ПРОБЛЕМА з var
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    console.log(i); // завжди буде останнє значення i
  };
}

// РІШЕННЯ з let
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    console.log(i); // правильне значення i для кожної кнопки
  };
}

// РІШЕННЯ з const (якщо не змінюємо i)
buttons.forEach((button, i) => {
  button.onclick = function () {
    console.log(i); // правильне значення
  };
});
```

### 7. Global Object Properties:

```javascript
// var створює властивість глобального об'єкта
var globalVar = "I'm global";
console.log(window.globalVar); // "I'm global" (в браузері)

// let і const не створюють властивості глобального об'єкта
let globalLet = "I'm also global";
const globalConst = "Me too";
console.log(window.globalLet); // undefined
console.log(window.globalConst); // undefined
```

### 8. Найкращі практики:

```javascript
// 1. Завжди використовуй const за замовчуванням
const API_URL = "https://api.example.com";
const users = [];

// 2. Використовуй let тільки якщо потрібно reassignment
let currentIndex = 0;
let isLoading = false;

// 3. Уникай var у сучасному коді
// ❌ Погано
var oldStyle = "avoid this";

// ✅ Добре
const newStyle = "use this";
let mutableValue = "or this if reassignment needed";

// 4. Ініціалізуй змінні при оголошенні
const userName = getUserName();
let counter = 0; // явно встановлюємо початкове значення

// 5. Використовуй описові імена
const MAX_RETRY_ATTEMPTS = 3;
const userPreferences = {};
```

### 9. Помилки та пастки:

```javascript
// Помилка 1: const з об'єктами
const config = { debug: true };
config.debug = false; // OK
config = {}; // Error

// Помилка 2: TDZ з typeof
console.log(typeof undeclaredVar); // "undefined"
console.log(typeof declaredLater); // ReferenceError
let declaredLater;

// Помилка 3: var у циклах з async
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3, 3, 3
}

// Правильно з let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0, 1, 2
}
```

---

## <span style="color: #8B5CF6;">Що таке hoisting?</span>

### Визначення:

**Hoisting** - це механізм JavaScript, при якому оголошення змінних і функцій "піднімаються" на початок їх області видимості під час фази компіляції, до виконання коду.

### Hoisting змінних:

#### 1. var hoisting:

```javascript
// Що ми пишемо:
console.log(x); // undefined (не ReferenceError!)
var x = 5;
console.log(x); // 5

// Як це інтерпретує JavaScript:
var x; // undefined
console.log(x); // undefined
x = 5;
console.log(x); // 5
```

#### 2. let і const hoisting (Temporal Dead Zone):

```javascript
// Що ми пишемо:
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;

// Як це працює:
// let y; // в TDZ
// const z; // в TDZ
// console.log(y); // ReferenceError - TDZ
// console.log(z); // ReferenceError - TDZ
// y = 10; // TDZ закінчується
// z = 20; // TDZ закінчується
```

### Hoisting функцій:

#### 1. Function Declarations (повністю hoisted):

```javascript
// Можемо викликати до оголошення
sayHello(); // "Hello!" - працює!

function sayHello() {
  console.log("Hello!");
}

// JavaScript бачить це так:
function sayHello() {
  console.log("Hello!");
}
sayHello(); // "Hello!"
```

#### 2. Function Expressions (не hoisted):

```javascript
// Спроба виклику до оголошення
sayBye(); // TypeError: sayBye is not a function

var sayBye = function () {
  console.log("Bye!");
};

// JavaScript бачить це так:
var sayBye; // undefined
sayBye(); // TypeError: undefined is not a function
sayBye = function () {
  console.log("Bye!");
};
```

#### 3. Arrow Functions (не hoisted):

```javascript
// Спроба виклику до оголошення
greet(); // ReferenceError: Cannot access 'greet' before initialization

const greet = () => {
  console.log("Hi!");
};
```

### Детальні приклади:

```javascript
// Приклад 1: Змішаний hoisting
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 1;
let b = 2;
const c = 3;

// Приклад 2: Функції та змінні
console.log(typeof foo); // "function"
console.log(typeof bar); // "undefined"

function foo() {
  return "I'm a function declaration";
}

var bar = function () {
  return "I'm a function expression";
};

// Приклад 3: Перевизначення
console.log(myFunc); // function myFunc() { return "second"; }

function myFunc() {
  return "first";
}

function myFunc() {
  return "second"; // ця версія "виграє"
}

var myFunc = "I'm a variable now";
console.log(myFunc); // "I'm a variable now"
```

### Hoisting у різних scopes:

```javascript
// Глобальний scope
console.log(globalVar); // undefined
var globalVar = "global";

function testScope() {
  // Function scope
  console.log(functionVar); // undefined
  console.log(blockVar); // ReferenceError

  var functionVar = "function";

  if (true) {
    // Block scope
    console.log(blockVar); // ReferenceError (TDZ)
    let blockVar = "block";
  }
}

testScope();
```

### Практичні пастки hoisting:

```javascript
// Пастка 1: Циклічний hoisting
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3, 3, 3 (не 0, 1, 2)
  }, 100);
}

// Рішення з let (block scope)
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j); // 0, 1, 2
  }, 100);
}

// Пастка 2: Перевизначення функцій
function getValue() {
  return "original";
}

console.log(getValue()); // "overridden"

function getValue() {
  return "overridden";
}

// Пастка 3: var у блоках
function confusing() {
  if (false) {
    var secretVariable = "secret";
  }
  console.log(secretVariable); // undefined (не ReferenceError!)
}

confusing();
```

### TDZ (Temporal Dead Zone) детально:

```javascript
// TDZ приклад
function tdz() {
  // TDZ починається тут для 'temp'
  console.log(temp); // ReferenceError

  if (true) {
    // TDZ все ще активна
    console.log(temp); // ReferenceError
    let temp = "value"; // TDZ закінчується тут
    console.log(temp); // "value"
  }
}

// TDZ з typeof
console.log(typeof undeclaredVar); // "undefined"
console.log(typeof declaredLater); // ReferenceError (TDZ)
let declaredLater;
```

### class hoisting:

```javascript
// Класи також мають TDZ
console.log(MyClass); // ReferenceError

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

// Class expressions
console.log(MyClassExpr); // ReferenceError
const MyClassExpr = class {
  constructor(name) {
    this.name = name;
  }
};
```

### Найкращі практики:

```javascript
// 1. Оголошуй змінні на початку scope
function goodPractice() {
  // Всі змінні на початку
  const config = getConfig();
  let counter = 0;
  let result;

  // Логіка функції
  // ...
}

// 2. Використовуй function declarations для hoisting
// Якщо потрібно викликати функцію до її оголошення
sayHello(); // працює

function sayHello() {
  console.log("Hello!");
}

// 3. Уникай var, використовуй let/const
// ❌ Погано
if (true) {
  var leaky = "I leak out";
}
console.log(leaky); // "I leak out"

// ✅ Добре
if (true) {
  let contained = "I'm contained";
}
// console.log(contained); // ReferenceError
```

### Інтерв'ю питання:

```javascript
// Що виведе цей код?
var x = 1;
function test() {
  console.log(x); // undefined (не 1!)
  var x = 2;
  console.log(x); // 2
}
test();

// Чому? Hoisting:
function test() {
  var x; // undefined
  console.log(x); // undefined
  x = 2;
  console.log(x); // 2
}
```

### Корисні правила:

1. **var** - hoisted з undefined
2. **let/const** - hoisted в TDZ
3. **function declarations** - повністю hoisted
4. **function expressions** - hoisted як змінні
5. **arrow functions** - hoisted як змінні
6. **classes** - hoisted в TDZ

---

## <span style="color: #8B5CF6;">Що таке Temporal Dead Zone?</span>

### Визначення:

**Temporal Dead Zone (TDZ)** - це період часу між входженням у scope та ініціалізацією змінної, коли доступ до змінної заборонений і викидає ReferenceError.

### Які змінні мають TDZ:

- `let` змінні
- `const` змінні
- `class` декларації
- параметри функцій за замовчуванням

### Базовий приклад TDZ:

```javascript
// TDZ для let
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;

// TDZ для const
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;

// var НЕ має TDZ
console.log(myVar); // undefined (hoisted)
var myVar = 30;
```

### TDZ у різних scopes:

```javascript
function tdExample() {
  // TDZ починається тут для всіх let/const в цій функції

  console.log(a); // ReferenceError - TDZ
  console.log(b); // ReferenceError - TDZ

  if (true) {
    // TDZ все ще активна
    console.log(a); // ReferenceError - TDZ
    console.log(c); // ReferenceError - TDZ для блокової змінної

    let a = 1; // TDZ для 'a' закінчується тут
    const b = 2; // TDZ для 'b' закінчується тут
    let c = 3; // TDZ для 'c' закінчується тут

    console.log(a); // 1 - OK
    console.log(b); // 2 - OK
    console.log(c); // 3 - OK
  }

  console.log(a); // ReferenceError - поза scope блоку
}
```

### TDZ з typeof:

```javascript
// Особливість TDZ з typeof
console.log(typeof undeclaredVariable); // "undefined" - не оголошена взагалі
console.log(typeof declaredButInTDZ); // ReferenceError - в TDZ!

let declaredButInTDZ = "value";
```

### TDZ в циклах:

```javascript
// for циклі
for (let i = 0; i < 3; i++) {
  // кожна ітерація створює новий scope для i
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}

// TDZ помилка в циклі
for (let i = 0, j = i; i < 3; i++) {
  // OK - i вже ініціалізована
  // ...
}

for (let i = j, j = 0; i < 3; i++) {
  // ReferenceError - j в TDZ
  // ...
}
```

### TDZ з параметрами функцій:

```javascript
// TDZ у параметрах за замовчуванням
function example(a = b, b = 2) {
  // ReferenceError - b в TDZ
  return a + b;
}

// Правильний порядок
function example2(a = 1, b = a) {
  // OK - a вже ініціалізована
  return a + b;
}

// Деструктуризація з TDZ
function destructure({ x = y, y = 1 } = {}) {
  // ReferenceError - y в TDZ
  return x + y;
}
```

### TDZ з класами:

```javascript
// Класи також мають TDZ
console.log(MyClass); // ReferenceError

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

// TDZ з наслідуванням
class Child extends Parent {
  // ReferenceError якщо Parent в TDZ
  constructor() {
    super();
  }
}

class Parent {
  constructor() {}
}
```

### Практичні приклади TDZ помилок:

```javascript
// Помилка 1: Використання до оголошення
function getUserData() {
  if (needsValidation) {
    // ReferenceError
    return null;
  }

  let needsValidation = true;
  return userData;
}

// Помилка 2: Циклічна залежність
let a = b; // ReferenceError - b в TDZ
let b = 1;

// Помилка 3: В блоках
if (true) {
  console.log(blockVar); // ReferenceError
  let blockVar = "value";
}
```

### Перевірка TDZ:

```javascript
// Функція для безпечної перевірки змінної
function safeAccess(fn) {
  try {
    return fn();
  } catch (error) {
    if (error instanceof ReferenceError) {
      return "Variable in TDZ or not declared";
    }
    throw error;
  }
}

// Використання
console.log(safeAccess(() => myVariable)); // "Variable in TDZ or not declared"
let myVariable = "value";
console.log(safeAccess(() => myVariable)); // "value"
```

### TDZ vs var hoisting:

```javascript
// var - немає TDZ
console.log(varVariable); // undefined
var varVariable = "I'm hoisted";

// let/const - є TDZ
console.log(letVariable); // ReferenceError
let letVariable = "I'm in TDZ until this line";

// Функції - немає TDZ для function declarations
console.log(myFunction()); // "Hello!" - працює

function myFunction() {
  return "Hello!";
}

// Function expressions - є TDZ
console.log(myArrow); // ReferenceError
const myArrow = () => "Hi!";
```

### Складні випадки TDZ:

```javascript
// TDZ з вкладеними scopes
let x = 1;

function complex() {
  console.log(x); // ReferenceError - локальний x в TDZ

  if (true) {
    let y = x; // ReferenceError - x все ще в TDZ
    let x = 2; // локальний x
  }
}

// TDZ з деструктуризацією
const { a, b = a } = { a: 1 }; // OK
const { c = d, d } = { d: 1 }; // ReferenceError - d в TDZ

// TDZ в switch
switch (true) {
  case true:
    console.log(switchVar); // ReferenceError
    let switchVar = "value";
    break;
}
```

### Найкращі практики для уникнення TDZ:

```javascript
// 1. Оголошуй змінні на початку scope
function goodPractice() {
  const config = getConfig();
  let result;
  let counter = 0;

  // використання змінних
  if (config.enabled) {
    result = process(counter);
  }
}

// 2. Ініціалізуй змінні при оголошенні
const users = []; // краще ніж let users;
let isLoading = false; // явна ініціалізація

// 3. Використовуй правильний порядок у параметрах
function withDefaults(first = 1, second = first * 2) {
  // OK
  return first + second;
}

// 4. Групуй пов'язані оголошення
const API_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const MAX_RETRIES = 3;

let isConnected = false;
let retryCount = 0;
```

### Чому TDZ корисна:

```javascript
// TDZ допомагає знайти помилки
function withoutTDZ() {
  // Якби не було TDZ, це б повернуло undefined
  console.log(userName); // ReferenceError - добре, помилка видна!

  // багато коду...

  let userName = getCurrentUser();
}

// TDZ робить код більш передбачуваним
function predictable() {
  // Ми точно знаємо, що змінна не ініціалізована до цього моменту
  const startTime = Date.now();
  let duration;

  // логіка...

  duration = Date.now() - startTime;
  return duration;
}
```

### Інтерв'ю питання про TDZ:

```javascript
// Що виведе цей код?
var a = 1;
function test() {
  console.log(a); // що тут буде?
  let a = 2;
}
test();

// Відповідь: ReferenceError
// Хоча глобальна 'a' існує, локальна 'a' в TDZ затіняє її
```

---
