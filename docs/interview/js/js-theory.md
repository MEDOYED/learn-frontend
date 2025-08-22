# 📚 JavaScript - Теорія для співбесід

> **Повний гід з JavaScript теорії для Junior Frontend Developer позицій**

---

## 🎯 Як користуватися цим гідом

- **Сині заголовки** - це питання, які можуть задати на співбесіді
- Кожна відповідь містить практичний приклад коду
- В кінці кожного розділу є завдання для самоперевірки
- ⭐ означає ТОП питання, які задають найчастіше

---

## 📖 Модуль 1: Основи мови

### 🔢 Типи даних - ТОП питання

#### <span style="color: #4a90e2">**Які примітивні типи даних є в JavaScript?**</span>

В JavaScript є **7 примітивних типів даних**:

1. **`string`** - рядки тексту
2. **`number`** - числа (цілі та дробові)
3. **`boolean`** - логічні значення (true/false)
4. **`undefined`** - невизначене значення
5. **`null`** - відсутність значення
6. **`symbol`** - унікальні ідентифікатори (ES6+)
7. **`bigint`** - великі цілі числа (ES2020+)

```javascript
// Приклади примітивних типів
let name = "Максим";           // string
let age = 25;                  // number
let isStudent = true;          // boolean
let job;                       // undefined
let car = null;                // null
let id = Symbol('id');         // symbol
let bigNumber = 123n;          // bigint
```

---

#### <span style="color: #4a90e2">**Чим відрізняється `null` від `undefined`?**</span>

**`undefined`** - змінна оголошена, але не ініціалізована:
```javascript
let x;
console.log(x); // undefined - змінна існує, але значення не присвоєно
```

**`null`** - навмисно присвоєне "порожнє" значення:
```javascript
let user = null; // null - явно вказали, що значення відсутнє
```

**Основні відмінності:**
- `undefined` - "система не знає значення"
- `null` - "програміст явно вказав відсутність значення"

```javascript
// Перевірка
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (це баг JS!)

console.log(undefined == null);  // true (приведення типів)
console.log(undefined === null); // false (строга перевірка)
```

---

#### <span style="color: #4a90e2">**Як перевірити тип змінної? (`typeof`)**</span>

Використовуй оператор **`typeof`**:

```javascript
let name = "Іван";
let age = 30;
let isActive = true;
let data;
let info = null;

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isActive);  // "boolean"
console.log(typeof data);      // "undefined"
console.log(typeof info);      // "object" (особливість null)

// Для масивів і об'єктів
console.log(typeof [1, 2, 3]);     // "object"
console.log(typeof {a: 1});        // "object"
console.log(typeof function() {}); // "function"
```

---

#### <span style="color: #4a90e2">**⭐ Що поверне `typeof null`? Чому?**</span> *(дуже популярне питання)*

**`typeof null`** повертає **`"object"`** - це **відома помилка** в JavaScript!

```javascript
console.log(typeof null); // "object" ❌ (неправильно!)
```

**Чому так сталось:**
- Це історична помилка з першої версії JavaScript (1995 рік)
- В оригінальній реалізації `null` мав той же тег типу, що й об'єкти
- Помилку не можна виправити, бо це зламає мільйони сайтів

**Як правильно перевірити `null`:**
```javascript
// ❌ Неправильно
if (typeof value === "object") {
  // це буде true і для null!
}

// ✅ Правильно
if (value === null) {
  console.log("Це null");
}

// ✅ Або комбінована перевірка
if (typeof value === "object" && value !== null) {
  console.log("Це справді об'єкт");
}
```

---

### 🎯 **Завдання для закріплення:**

1. **Визначи тип:** Що поверне `typeof` для кожного значення?
   ```javascript
   typeof "42"
   typeof 42
   typeof true
   typeof undefined
   typeof null
   typeof {}
   typeof []
   typeof function() {}
   ```

2. **Практика:** Напиши функцію `checkType(value)`, яка правильно визначає тип, включаючи `null`:
   ```javascript
   function checkType(value) {
     // твоє рішення
   }
   
   checkType(null);      // повинно повертати "null"
   checkType("hello");   // повинно повертати "string"
   ```

3. **Логіка:** Поясни, чому `null == undefined` дає `true`, а `null === undefined` дає `false`?

---

### 📊 Змінні - ТОП питання

#### <span style="color: #4a90e2">**⭐ Чим відрізняється `var`, `let`, `const`?**</span> *(задають завжди)*

| Характеристика | `var` | `let` | `const` |
|---|---|---|---|
| **Scope (область видимості)** | Function scope | Block scope | Block scope |
| **Hoisting** | Так (undefined) | Так (TDZ) | Так (TDZ) |
| **Переоголошення** | Можна | Не можна | Не можна |
| **Переприсвоєння** | Можна | Можна | Не можна |

```javascript
// 1. SCOPE - Область видимості
function example() {
  if (true) {
    var a = 1;    // function scope
    let b = 2;    // block scope
    const c = 3;  // block scope
  }
  
  console.log(a); // 1 ✅ (доступна)
  console.log(b); // ReferenceError ❌
  console.log(c); // ReferenceError ❌
}

// 2. HOISTING
console.log(x); // undefined (не помилка!)
console.log(y); // ReferenceError ❌
console.log(z); // ReferenceError ❌

var x = 1;
let y = 2;
const z = 3;

// 3. ПЕРЕОГОЛОШЕННЯ
var name = "Іван";
var name = "Петро"; // ✅ Працює

let age = 25;
let age = 30; // ❌ SyntaxError

// 4. ПЕРЕПРИСВОЄННЯ
let count = 1;
count = 2; // ✅ Працює

const PI = 3.14;
PI = 3.15; // ❌ TypeError
```

**Коли що використовувати:**
- **`const`** - за замовчуванням (якщо не потрібно змінювати)
- **`let`** - якщо потрібно переприсвоювати
- **`var`** - не використовуй (застаріло)

---

#### <span style="color: #4a90e2">**⭐ Що таке hoisting?**</span> *(класичне питання)*

**Hoisting** - це "підняття" оголошень змінних і функцій на верх області видимості під час компіляції.

**Як працює з `var`:**
```javascript
// Що ми пишемо:
console.log(x); // undefined
var x = 5;

// Як "бачить" JavaScript:
var x; // hoisting - оголошення піднялось
console.log(x); // undefined
x = 5; // присвоєння залишилось на місці
```

**Як працює з `let`/`const` (Temporal Dead Zone):**
```javascript
// Що ми пишемо:
console.log(y); // ReferenceError ❌
let y = 10;

// JavaScript "бачить" hoisting, але створює TDZ
// let y; // hoisted, але в "мертвій зоні"
// console.log(y); // ReferenceError - не можна використовувати до ініціалізації
// y = 10;
```

**Function hoisting:**
```javascript
// Function Declaration - повністю піднімається
sayHello(); // "Привіт!" ✅ Працює

function sayHello() {
  console.log("Привіт!");
}

// Function Expression - тільки змінна піднімається
sayBye(); // TypeError ❌ (undefined is not a function)

var sayBye = function() {
  console.log("Бувай!");
};
```

---

#### <span style="color: #4a90e2">**Чи можна змінити `const` об'єкт?**</span>

**Коротка відповідь:** Так, **вміст** const об'єкта можна змінювати, але не можна переприсвоїти сам об'єкт.

```javascript
const user = {
  name: "Іван",
  age: 25
};

// ✅ Можна змінювати властивості
user.name = "Петро";
user.city = "Київ";
console.log(user); // { name: "Петро", age: 25, city: "Київ" }

// ✅ Можна додавати/видаляти властивості
delete user.age;
console.log(user); // { name: "Петро", city: "Київ" }

// ❌ НЕ можна переприсвоїти об'єкт
user = {}; // TypeError: Assignment to constant variable

// Те саме з масивами
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Працює
numbers[0] = 10; // ✅ Працює
console.log(numbers); // [10, 2, 3, 4]

// numbers = [5, 6, 7]; // ❌ TypeError
```

**Як зробити об'єкт повністю незмінним:**
```javascript
const user = Object.freeze({
  name: "Іван",
  age: 25
});

user.name = "Петро"; // ❌ Не працює (в strict mode - Error)
console.log(user.name); // "Іван"
```

---

### 🔄 Приведення типів - ТОП питання

#### <span style="color: #4a90e2">**⭐ Різниця між `==` та `===`?**</span> *(100% запитають)*

**`==` (Abstract Equality)** - порівняння з приведенням типів
**`===` (Strict Equality)** - порівняння без приведення типів

```javascript
// Приклади з ==
console.log(5 == "5");    // true ✅ (число приводиться до рядка)
console.log(true == 1);   // true ✅ (boolean приводиться до числа)
console.log(null == undefined); // true ✅ (спеціальне правило)
console.log(0 == false);  // true ✅ (boolean → number)
console.log("" == false); // true ✅ (порожній рядок → false)

// Приклади з ===
console.log(5 === "5");   // false ❌ (різні типи)
console.log(true === 1);  // false ❌ (різні типи)
console.log(null === undefined); // false ❌ (різні типи)
console.log(0 === false); // false ❌ (різні типи)
```

**Правила приведення для `==`:**
1. Якщо типи однакові → порівнюється як `===`
2. `null == undefined` → `true`
3. Number + String → String приводиться до Number
4. Boolean → приводиться до Number
5. Object → викликається `valueOf()` або `toString()`

**Коли що використовувати:**
- **`===`** - завжди (рекомендовано)
- **`==`** - тільки для `null/undefined` перевірки

```javascript
// Єдиний виправданий випадок ==
if (value == null) {
  // перевіряє і null, і undefined
}

// Еквівалентно:
if (value === null || value === undefined) {
  // більш явно
}
```

---

#### <span style="color: #4a90e2">**Що таке falsy values?**</span>

**Falsy values** - значення, які приводяться до `false` в Boolean контексті.

**Всього 8 falsy значень:**
1. **`false`** - логічне false
2. **`0`** - нуль
3. **`-0`** - мінус нуль
4. **`0n`** - BigInt нуль
5. **`""`** - порожній рядок
6. **`null`** - null
7. **`undefined`** - undefined
8. **`NaN`** - Not a Number

```javascript
// Перевірка falsy значень
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Все інше - truthy
console.log(Boolean("0"));       // true (рядок з нулем)
console.log(Boolean("false"));   // true (рядок)
console.log(Boolean([]));        // true (порожній масив)
console.log(Boolean({}));        // true (порожній об'єкт)
console.log(Boolean(42));        // true (число != 0)
```

**Практичне використання:**
```javascript
function checkUser(user) {
  if (!user) {
    return "Користувач не знайдений"; // спрацює для null, undefined, ""
  }
  
  if (!user.name) {
    return "Ім'я обов'язкове"; // спрацює для "", null, undefined
  }
  
  return `Привіт, ${user.name}!`;
}

// Тестування
checkUser(null);           // "Користувач не знайдений"
checkUser({});             // "Ім'я обов'язкове"
checkUser({name: ""});     // "Ім'я обов'язкове"
checkUser({name: "Іван"}); // "Привіт, Іван!"
```

---

### 🎯 **Завдання для закріплення:**

1. **Hoisting:** Що виведе цей код і чому?
   ```javascript
   console.log(a);
   console.log(b);
   console.log(c);
   
   var a = 1;
   let b = 2;
   const c = 3;
   ```

2. **Порівняння:** Поясни результати:
   ```javascript
   console.log([] == false);    // ?
   console.log([] === false);   // ?
   console.log("0" == false);   // ?
   console.log("0" === false);  // ?
   ```

3. **Const об'єкти:** Як зробити цей код валідним?
   ```javascript
   const config = {
     api: "https://api.com",
     timeout: 5000
   };
   
   // Потрібно змінити timeout на 3000
   // config = {...config, timeout: 3000}; // Error!
   ```

4. **Falsy перевірка:** Напиши функцію `isEmpty(value)`, яка перевіряє чи значення "порожнє":
   ```javascript
   isEmpty("");        // true
   isEmpty(0);         // true
   isEmpty(null);      // true
   isEmpty("hello");   // false
   isEmpty([]);        // ? (як ти вирішиш?)
   ```

---

## 🔧 Модуль 2: Функції

### ⚡ Основи функцій

#### <span style="color: #4a90e2">**⭐ Чим відрізняються function declaration від function expression?**</span>

**Function Declaration** - оголошення функції з ключовим словом `function`:
```javascript
// Function Declaration
function sayHello() {
  console.log("Привіт!");
}
```

**Function Expression** - функція як значення змінної:
```javascript
// Function Expression
const sayHello = function() {
  console.log("Привіт!");
};
```

**Основні відмінності:**

| Характеристика | Function Declaration | Function Expression |
|---|---|---|
| **Hoisting** | Повністю піднімається | Тільки змінна піднімається |
| **Виклик до оголошення** | ✅ Можна | ❌ Не можна |
| **Ім'я функції** | Обов'язкове | Опціональне |
| **Область видимості** | Function/Global scope | Де оголошена змінна |

```javascript
// HOISTING - Function Declaration
sayHello(); // ✅ Працює! "Привіт!"

function sayHello() {
  console.log("Привіт!");
}

// HOISTING - Function Expression
sayBye(); // ❌ TypeError: sayBye is not a function

var sayBye = function() {
  console.log("Бувай!");
};

// Еквівалентно:
// var sayBye; // undefined
// sayBye(); // TypeError!
// sayBye = function() {...};
```

**Коли що використовувати:**
- **Function Declaration** - для основних функцій, які потрібні в усій області видимості
- **Function Expression** - для умовних функцій, колбеків, методів об'єктів

```javascript
// Приклад умовного створення функції
let condition = true;

if (condition) {
  // Function Expression - краще
  const helper = function() {
    return "допомога";
  };
  
  // Function Declaration - може працювати непередбачувано
  function badHelper() {
    return "погана допомога";
  }
}
```

---

#### <span style="color: #4a90e2">**⭐ Що таке arrow functions і чим відрізняються від звичайних?**</span>

**Arrow Functions** - скорочений синтаксис функцій з ES6:

```javascript
// Звичайна функція
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Коротка форма (для одного виразу)
const add = (a, b) => a + b;

// Один параметр - дужки необов'язкові
const double = x => x * 2;

// Без параметрів - дужки обов'язкові
const getRandomNumber = () => Math.random();
```

**Основні відмінності:**

| Характеристика | Regular Function | Arrow Function |
|---|---|---|
| **`this` контекст** | Динамічний | Лексичний (успадкований) |
| **`arguments` об'єкт** | ✅ Є | ❌ Немає |
| **Hoisting** | Function Declaration так | ❌ Ні |
| **Конструктор `new`** | ✅ Можна | ❌ Не можна |
| **`prototype`** | ✅ Є | ❌ Немає |

```javascript
// THIS - головна відмінність!
const user = {
  name: "Іван",
  
  // Regular function - свій this
  sayHello: function() {
    console.log(`Привіт, ${this.name}!`); // "Привіт, Іван!"
  },
  
  // Arrow function - this з батьківського контексту
  sayBye: () => {
    console.log(`Бувай, ${this.name}!`); // "Бувай, undefined!"
  },
  
  // Практичний приклад з колбеками
  delayedGreeting: function() {
    setTimeout(function() {
      console.log(`Привіт, ${this.name}!`); // "Привіт, undefined!" (this = window)
    }, 1000);
    
    setTimeout(() => {
      console.log(`Привіт, ${this.name}!`); // "Привіт, Іван!" ✅
    }, 1000);
  }
};
```

**Коли використовувати Arrow Functions:**
- ✅ Колбеки, map, filter, forEach
- ✅ Коли потрібен батьківський `this`
- ✅ Короткі функції-утиліти

**Коли НЕ використовувати:**
- ❌ Методи об'єктів (втрачається `this`)
- ❌ Конструктори
- ❌ Коли потрібен `arguments`

---

### 🎯 Контекст this - ТОП питання

#### <span style="color: #4a90e2">**⭐ Що таке `this` і як визначається його значення?**</span> *(дуже важливо)*

**`this`** - це посилання на об'єкт, в контексті якого викликається функція.

**Правила визначення `this` (в порядку пріоритету):**

**1. Явне прив'язування (`call`, `apply`, `bind`):**
```javascript
const user = { name: "Іван" };

function greet() {
  console.log(`Привіт, ${this.name}!`);
}

greet.call(user);    // "Привіт, Іван!"
greet.apply(user);   // "Привіт, Іван!"
greet.bind(user)();  // "Привіт, Іван!"
```

**2. Неявне прив'язування (виклик через об'єкт):**
```javascript
const user = {
  name: "Петро",
  greet() {
    console.log(`Привіт, ${this.name}!`); // this = user
  }
};

user.greet(); // "Привіт, Петро!"

// Але якщо функцію "відірвати":
const greetFunc = user.greet;
greetFunc(); // "Привіт, undefined!" (this = window/undefined)
```

**3. `new` - створення об'єкта:**
```javascript
function Person(name) {
  this.name = name; // this = новий об'єкт
}

const person = new Person("Марія"); // this буде новим об'єктом
```

**4. За замовчуванням:**
```javascript
function greet() {
  console.log(this); // window (в браузері) або undefined (strict mode)
}

greet(); // window або undefined
```

**Практичні приклади проблем з `this`:**
```javascript
const button = {
  text: "Натисни мене",
  
  handleClick: function() {
    console.log(`Клік: ${this.text}`);
  }
};

// Проблема - втрата контексту
document.addEventListener('click', button.handleClick); 
// "Клік: undefined" ❌

// Рішення 1: bind
document.addEventListener('click', button.handleClick.bind(button));
// "Клік: Натисни мене" ✅

// Рішення 2: arrow function
const button2 = {
  text: "Натисни мене",
  
  handleClick: () => {
    console.log(`Клік: ${this.text}`); // this з батьківського scope
  }
};
```

---

#### <span style="color: #4a90e2">**⭐ Як працює `this` в arrow functions?**</span>

**Arrow functions НЕ МАЮТЬ власного `this`** - вони успадковують `this` з батьківського лексичного контексту.

```javascript
// Глобальний контекст
const globalArrow = () => {
  console.log(this); // window (браузер) або {} (Node.js)
};

// В об'єкті
const user = {
  name: "Олена",
  
  regularMethod: function() {
    console.log(`Regular: ${this.name}`); // "Regular: Олена"
    
    const innerArrow = () => {
      console.log(`Arrow: ${this.name}`); // "Arrow: Олена" (успадкований this)
    };
    
    function innerRegular() {
      console.log(`Inner: ${this.name}`); // "Inner: undefined" (власний this)
    }
    
    innerArrow();  // Працює!
    innerRegular(); // Не працює!
  },
  
  arrowMethod: () => {
    console.log(`Arrow method: ${this.name}`); // "Arrow method: undefined"
    // this = глобальний об'єкт, не user!
  }
};

user.regularMethod();
user.arrowMethod();
```

**Практичний приклад - таймери:**
```javascript
class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  start() {
    // Regular function - втрачає this
    setInterval(function() {
      this.seconds++; // TypeError: Cannot read property 'seconds' of undefined
      console.log(this.seconds);
    }, 1000);
    
    // Arrow function - зберігає this ✅
    setInterval(() => {
      this.seconds++; // Працює!
      console.log(this.seconds);
    }, 1000);
  }
}

const timer = new Timer();
timer.start();
```

---

#### <span style="color: #4a90e2">**Що робить `bind`, `call`, `apply`?**</span> *(базове розуміння)*

Ці методи дозволяють **явно встановити контекст `this`** для функції.

**`call(thisArg, arg1, arg2, ...)`** - викликає функцію з заданим `this`:
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user = { name: "Андрій" };

greet.call(user, "Привіт", "!"); // "Привіт, Андрій!"
```

**`apply(thisArg, [argsArray])`** - те саме, але аргументи як масив:
```javascript
greet.apply(user, ["Доброго дня", "."]); // "Доброго дня, Андрій."

// Корисно для передачі масиву аргументів
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, numbers); // 5
// Сучасний спосіб: Math.max(...numbers)
```

**`bind(thisArg, arg1, arg2, ...)`** - створює нову функцію з закріпленим `this`:
```javascript
const boundGreet = greet.bind(user, "Вітаю");

boundGreet("!!!"); // "Вітаю, Андрій!!!"

// Практичний приклад - обробники подій
const button = {
  text: "Кнопка",
  handleClick: function() {
    console.log(`Натиснуто: ${this.text}`);
  }
};

// Проблема
document.addEventListener('click', button.handleClick); // this = document ❌

// Рішення
document.addEventListener('click', button.handleClick.bind(button)); // ✅
```

**Різниця між ними:**
- **`call`** - викликає зараз, аргументи окремо
- **`apply`** - викликає зараз, аргументи масивом  
- **`bind`** - повертає нову функцію, не викликає

---

### 🔒 Замикання - ТОП питання

#### <span style="color: #4a90e2">**⭐ Що таке closure?**</span> *(обов'язкове питання)*

**Closure (замикання)** - це функція, яка має доступ до змінних з зовнішньої (батьківської) області видимості навіть після того, як батьківська функція завершила виконання.

```javascript
// Базовий приклад
function outerFunction(x) {
  // Зовнішня змінна
  const outerVariable = x;
  
  // Внутрішня функція
  function innerFunction(y) {
    console.log(outerVariable + y); // Доступ до outerVariable
  }
  
  return innerFunction; // Повертаємо функцію
}

const myClosure = outerFunction(10);
myClosure(5); // 15

// outerFunction вже завершилась, але innerFunction
// все ще має доступ до outerVariable!
```

**Практичні приклади:**

**1. Приватні змінні:**
```javascript
function createCounter() {
  let count = 0; // Приватна змінна
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// count недоступний ззовні - інкапсуляція!
console.log(counter.count); // undefined
```

**2. Функції-фабрики:**
```javascript
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Кожна функція "пам'ятає" свій multiplier
```

**3. Модульний патерн:**
```javascript
const myModule = (function() {
  let privateVariable = 0;
  
  function privateFunction() {
    console.log("Приватна функція");
  }
  
  return {
    publicMethod: function() {
      privateVariable++;
      privateFunction();
      return privateVariable;
    }
  };
})();

myModule.publicMethod(); // "Приватна функція", повертає 1
// myModule.privateVariable; // undefined
// myModule.privateFunction(); // TypeError
```

---

#### <span style="color: #4a90e2">**⭐ Класична задача з циклом і setTimeout - як розв'язати?**</span>

**Проблема:**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Виведе: 3, 3, 3 (а очікували 0, 1, 2)
```

**Чому так відбувається:**
1. `var` має **function scope** - одна змінна `i` для всього циклу
2. `setTimeout` виконується **асинхронно** - після завершення циклу
3. Коли колбеки виконуються, `i` вже дорівнює `3`

**Рішення 1: Використати `let` (найпростіше):**
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Виведе: 0, 1, 2 ✅

// let створює нову змінну для кожної ітерації (block scope)
```

**Рішення 2: Closure з IIFE (Immediately Invoked Function Expression):**
```javascript
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(() => console.log(index), 100);
  })(i);
}
// Виведе: 0, 1, 2 ✅

// Кожна IIFE створює свою область видимості з копією i
```

**Рішення 3: `bind`:**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(console.log.bind(null, i), 100);
}
// Виведе: 0, 1, 2 ✅

// bind створює нову функцію з "заморожених" аргументом
```

**Рішення 4: Додаткова функція:**
```javascript
function createLogger(value) {
  return function() {
    console.log(value);
  };
}

for (var i = 0; i < 3; i++) {
  setTimeout(createLogger(i), 100);
}
// Виведе: 0, 1, 2 ✅
```

**Детальне пояснення проблеми:**
```javascript
// Що "бачить" JavaScript:
var i; // hoisting

for (i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
  // Кожен колбек посилається на ту саму змінну i
}

// Після циклу i = 3
// Коли setTimeout спрацьовує, всі колбеки бачать i = 3
```

---

### 🎯 **Завдання для закріплення:**

1. **Function types:** Що виведе цей код?
   ```javascript
   console.log(typeof regularFunc);
   console.log(typeof arrowFunc);
   
   function regularFunc() {}
   const arrowFunc = () => {};
   ```

2. **This context:** Виправи код, щоб виводилось правильне ім'я:
   ```javascript
   const user = {
     name: "Іван",
     greet: () => {
       console.log(`Привіт, ${this.name}!`);
     }
   };
   
   user.greet(); // Повинно вивести "Привіт, Іван!"
   ```

3. **Closure практика:** Створи функцію `createBank()`, яка повертає об'єкт з методами:
   ```javascript
   const bank = createBank();
   bank.deposit(100);    // Додати гроші
   bank.withdraw(30);    // Зняти гроші
   bank.getBalance();    // Показати баланс
   
   // Баланс повинен бути приватним!
   ```

4. **setTimeout fix:** Виправи цей код трьома різними способами:
   ```javascript
   for (var i = 1; i <= 3; i++) {
     setTimeout(() => console.log(`Число: ${i}`), i * 1000);
   }
   // Має виводити: "Число: 1", "Число: 2", "Число: 3"
   ```

---

## ⏰ Модуль 3: Асинхронність

### 🔄 Основи - ТОП питання

#### <span style="color: #4a90e2">**⭐ Що таке Event Loop?**</span> *(базове розуміння)*

**Event Loop** - це механізм, який дозволяє JavaScript виконувати асинхронний код в однопоточному середовищі.

**Як працює:**

1. **Call Stack** - стек виконання синхронного коду
2. **Web APIs** - асинхронні операції (setTimeout, HTTP запити, DOM події)  
3. **Callback Queue** - черга колбеків, готових до виконання
4. **Event Loop** - перевіряє чи порожній Call Stack і переносить колбеки з Queue

```javascript
// Приклад роботи Event Loop
console.log('1'); // Синхронно -> Call Stack

setTimeout(() => {
  console.log('2'); // Асинхронно -> Web API -> Callback Queue
}, 0);

console.log('3'); // Синхронно -> Call Stack

// Результат: 1, 3, 2
// Навіть з timeout 0, колбек виконається після синхронного коду!
```

**Детальний процес:**

```javascript
function first() {
  console.log('First');
}

function second() {
  setTimeout(() => {
    console.log('Second');
  }, 0);
}

function third() {
  console.log('Third');
}

first();    // 1. Додається в Call Stack, виконується -> "First"
second();   // 2. Додається в Call Stack
            //    setTimeout йде в Web API
            //    Колбек буде в Callback Queue після 0ms
third();    // 3. Додається в Call Stack, виконується -> "Third"
            // 4. Call Stack порожній
            // 5. Event Loop бере колбек з Queue -> "Second"

// Результат: First, Third, Second
```

**Мікротаски vs Макротаски:**

```javascript
console.log('1');

// Макротаска (setTimeout)
setTimeout(() => console.log('2'), 0);

// Мікротаска (Promise)
Promise.resolve().then(() => console.log('3'));

console.log('4');

// Результат: 1, 4, 3, 2
// Мікротаски мають вищий пріоритет!
```

**Чому це важливо:**
- Розуміння порядку виконання асинхронного коду
- Уникнення блокування UI
- Правильна робота з Promise, async/await

---

#### <span style="color: #4a90e2">**Що таке callback functions?**</span>

**Callback** - це функція, яка передається як аргумент іншій функції і викликається пізніше.

```javascript
// Простий callback
function greet(name, callback) {
  console.log(`Привіт, ${name}!`);
  callback();
}

function afterGreeting() {
  console.log('Як справи?');
}

greet('Іван', afterGreeting);
// "Привіт, Іван!"
// "Як справи?"
```

**Асинхронні колбеки:**

```javascript
// setTimeout callback
setTimeout(() => {
  console.log('Минуло 2 секунди');
}, 2000);

// Event callback
button.addEventListener('click', (event) => {
  console.log('Кнопку натиснуто');
});

// Array методи з колбеками
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10]

const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4]
```

**Callback Hell (проблема):**

```javascript
// ❌ Callback Hell - важко читати і підтримувати
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getMoreDataAgain(c, function(d) {
        getFinalData(d, function(e) {
          console.log('Готово:', e);
        });
      });
    });
  });
});

// ✅ Сучасне рішення з Promise/async-await
try {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getEvenMoreData(b);
  const d = await getMoreDataAgain(c);
  const e = await getFinalData(d);
  console.log('Готово:', e);
} catch (error) {
  console.error('Помилка:', error);
}
```

**Обробка помилок з колбеками:**

```javascript
// Node.js style callback (error-first)
function fetchUserData(userId, callback) {
  // Симуляція запиту
  setTimeout(() => {
    if (userId > 0) {
      callback(null, { id: userId, name: 'Іван' }); // (error, data)
    } else {
      callback(new Error('Невірний ID користувача')); // (error)
    }
  }, 1000);
}

// Використання
fetchUserData(1, (error, user) => {
  if (error) {
    console.error('Помилка:', error.message);
    return;
  }
  console.log('Користувач:', user);
});
```

---

### 🎯 Promises - ТОП питання

#### <span style="color: #4a90e2">**⭐ Що таке Promise?**</span> *(обов'язково)*

**Promise** - це об'єкт, який представляє результат асинхронної операції, яка може завершитися успішно або з помилкою в майбутньому.

**Стани Promise:**

1. **Pending** - очікування (початковий стан)
2. **Fulfilled** - виконано успішно
3. **Rejected** - відхилено з помилкою

```javascript
// Створення Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve('Операція успішна!'); // Fulfilled
    } else {
      reject(new Error('Щось пішло не так!')); // Rejected
    }
  }, 2000);
});

// Використання Promise
myPromise
  .then((result) => {
    console.log('Успіх:', result); // "Успіх: Операція успішна!"
  })
  .catch((error) => {
    console.error('Помилка:', error.message);
  });
```

**Практичні приклади:**

**1. HTTP запит:**
```javascript
// Симуляція fetch запиту
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: 'Іван', email: 'ivan@example.com' });
      } else {
        reject(new Error('Користувача не знайдено'));
      }
    }, 1000);
  });
}

// Використання
fetchUser(1)
  .then(user => {
    console.log('Знайдено користувача:', user.name);
    return fetchUser(2); // Повертаємо новий Promise
  })
  .then(user => {
    console.log('Другий користувач:', user.name);
  })
  .catch(error => {
    console.error('Помилка:', error.message); // "Користувача не знайдено"
  });
```

**2. Promise статичні методи:**
```javascript
// Promise.resolve() - одразу resolved Promise
const resolvedPromise = Promise.resolve('Готово!');
resolvedPromise.then(result => console.log(result)); // "Готово!"

// Promise.reject() - одразу rejected Promise
const rejectedPromise = Promise.reject(new Error('Помилка!'));
rejectedPromise.catch(error => console.log(error.message)); // "Помилка!"

// Конвертація значення в Promise
Promise.resolve(42)
  .then(value => value * 2)
  .then(result => console.log(result)); // 84
```

**Чому Promise кращі за колбеки:**
- ✅ Уникають callback hell
- ✅ Легша обробка помилок
- ✅ Можна ланцюжити (chaining)
- ✅ Кращий контроль потоку виконання

---

#### <span style="color: #4a90e2">**⭐ Як працює `then`, `catch`?**</span>

**`.then()`** - обробляє успішне виконання Promise  
**`.catch()`** - обробляє помилки

```javascript
const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  
  setTimeout(() => {
    if (random > 0.5) {
      resolve(`Успіх! Число: ${random}`);
    } else {
      reject(new Error(`Помилка! Число: ${random}`));
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log('✅', result); // Якщо resolve
    return result.toUpperCase(); // Повертаємо трансформоване значення
  })
  .then((uppercaseResult) => {
    console.log('Трансформовано:', uppercaseResult);
  })
  .catch((error) => {
    console.error('❌', error.message); // Якщо reject
  });
```

**Ланцюжки Promise (Chaining):**

```javascript
// Кожен .then() повертає новий Promise
fetchUser(1)
  .then(user => {
    console.log('1. Отримано користувача:', user.name);
    return fetchUserPosts(user.id); // Повертаємо Promise
  })
  .then(posts => {
    console.log('2. Отримано пости:', posts.length);
    return posts[0]; // Повертаємо значення
  })
  .then(firstPost => {
    console.log('3. Перший пост:', firstPost.title);
  })
  .catch(error => {
    console.error('Помилка в будь-якому місці:', error);
  });
```

**Важливі особливості:**

```javascript
// 1. .then() завжди повертає Promise
const result = promise.then(() => 'Hello');
console.log(result instanceof Promise); // true

// 2. Якщо в .then() кинути помилку, Promise стане rejected
promise
  .then(() => {
    throw new Error('Щось пішло не так');
  })
  .catch(error => {
    console.log('Спіймали помилку:', error.message);
  });

// 3. .catch() також повертає Promise
promise
  .catch(error => {
    console.log('Обробили помилку');
    return 'Значення за замовчуванням'; // Promise стане resolved
  })
  .then(result => {
    console.log('Продовжуємо:', result);
  });

// 4. finally() - виконується завжди
promise
  .then(result => console.log('Успіх:', result))
  .catch(error => console.log('Помилка:', error))
  .finally(() => console.log('Завершено')); // Завжди виконається
```

---

#### <span style="color: #4a90e2">**⭐ Що таке `Promise.all`?**</span> *(популярне питання)*

**`Promise.all`** - чекає виконання **всіх** Promise і повертає масив результатів. Якщо хоча б один Promise rejected, весь `Promise.all` rejected.

```javascript
// Базовий приклад
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // [3, 'foo', 42]
    // Результати в тому ж порядку, що й Promise
  })
  .catch(error => {
    console.error('Один з Promise failed:', error);
  });
```

**Практичний приклад - паралельні запити:**

```javascript
// Завантаження даних паралельно
async function loadUserData(userId) {
  try {
    // Всі запити йдуть паралельно!
    const [user, posts, comments] = await Promise.all([
      fetchUser(userId),        // 1s
      fetchUserPosts(userId),   // 2s  
      fetchUserComments(userId) // 1.5s
    ]);
    
    // Всі дані готові через ~2s (найдовший запит)
    // Без Promise.all було б 1 + 2 + 1.5 = 4.5s
    
    return {
      user,
      posts,
      comments
    };
  } catch (error) {
    console.error('Помилка завантаження:', error);
    throw error;
  }
}

// Використання
loadUserData(1)
  .then(data => {
    console.log('Всі дані:', data);
  })
  .catch(error => {
    console.error('Не вдалося завантажити дані');
  });
```

**Поведінка при помилках:**

```javascript
const fastPromise = Promise.resolve('Швидко');
const slowPromise = new Promise(resolve => 
  setTimeout(() => resolve('Повільно'), 2000)
);
const failedPromise = Promise.reject(new Error('Помилка'));

Promise.all([fastPromise, slowPromise, failedPromise])
  .then(results => {
    console.log('Всі успішні:', results); // Не виконається
  })
  .catch(error => {
    console.error('Помилка:', error.message); // "Помилка"
    // Promise.all одразу rejected, навіть якщо slowPromise ще виконується
  });
```

**Альтернативи Promise.all:**

```javascript
// Promise.allSettled() - чекає всіх, не важливо успіх чи помилка
Promise.allSettled([
  Promise.resolve('Успіх'),
  Promise.reject('Помилка'),
  Promise.resolve('Інший успіх')
])
.then(results => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: 'Успіх' },
  //   { status: 'rejected', reason: 'Помилка' },
  //   { status: 'fulfilled', value: 'Інший успіх' }
  // ]
});

// Promise.race() - повертає результат першого завершеного Promise
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('Швидкий'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('Повільний'), 2000))
])
.then(result => {
  console.log(result); // 'Швидкий'
});
```

---

### 🚀 Async/Await - ТОП питання

#### <span style="color: #4a90e2">**⭐ Що таке `async/await`?**</span> *(сучасний стандарт)*

**`async/await`** - це синтаксичний цукор над Promise, який робить асинхронний код схожим на синхронний.

**Основи:**

```javascript
// ❌ З Promise
function getUserData() {
  return fetchUser(1)
    .then(user => {
      return fetchUserPosts(user.id);
    })
    .then(posts => {
      return { user, posts };
    })
    .catch(error => {
      console.error('Помилка:', error);
      throw error;
    });
}

// ✅ З async/await
async function getUserData() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchUserPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.error('Помилка:', error);
    throw error;
  }
}
```

**Правила async/await:**

1. **`async`** функція завжди повертає Promise
2. **`await`** можна використовувати тільки в `async` функціях
3. **`await`** чекає resolve/reject Promise

```javascript
// 1. async функція повертає Promise
async function example() {
  return 42; // Автоматично Promise.resolve(42)
}

example().then(result => console.log(result)); // 42

// 2. await "розгортає" Promise
async function demo() {
  const promise = Promise.resolve('Hello');
  const result = await promise; // "Hello", не Promise
  console.log(result); // "Hello"
}

// 3. Еквіваленти
// Це:
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

// Еквівалентно цьому:
function fetchData() {
  return fetch('/api/data')
    .then(response => response.json());
}
```

**Практичні приклади:**

**1. Послідовне виконання:**
```javascript
async function processUserData() {
  console.log('Починаємо...');
  
  const user = await fetchUser(1);        // Чекаємо 1s
  console.log('Користувач:', user.name);
  
  const posts = await fetchUserPosts(1);  // Чекаємо ще 2s
  console.log('Пости:', posts.length);
  
  const profile = await buildProfile(user, posts); // Чекаємо ще 0.5s
  console.log('Профіль готовий');
  
  return profile;
  // Загальний час: ~3.5s
}
```

**2. Паралельне виконання:**
```javascript
async function processUserDataParallel() {
  console.log('Починаємо паралельно...');
  
  // Запускаємо всі Promise одночасно
  const userPromise = fetchUser(1);
  const postsPromise = fetchUserPosts(1);
  const settingsPromise = fetchUserSettings(1);
  
  // Чекаємо результати
  const user = await userPromise;        // ~1s
  const posts = await postsPromise;      // ~2s (але вже виконується)
  const settings = await settingsPromise; // ~1.5s (але вже виконується)
  
  console.log('Всі дані готові');
  return { user, posts, settings };
  // Загальний час: ~2s (найдовший запит)
}

// Або з Promise.all
async function processUserDataWithAll() {
  const [user, posts, settings] = await Promise.all([
    fetchUser(1),
    fetchUserPosts(1),
    fetchUserSettings(1)
  ]);
  
  return { user, posts, settings };
}
```

**3. Цикли з async/await:**
```javascript
// ❌ Неправильно - послідовне виконання
async function processUsersBad(userIds) {
  const users = [];
  
  for (const id of userIds) {
    const user = await fetchUser(id); // Чекає кожного по черзі
    users.push(user);
  }
  
  return users; // Довго!
}

// ✅ Правильно - паралельне виконання
async function processUsersGood(userIds) {
  const promises = userIds.map(id => fetchUser(id));
  const users = await Promise.all(promises);
  return users; // Швидко!
}

// ✅ Також правильно - з map
async function processUsersWithMap(userIds) {
  const users = await Promise.all(
    userIds.map(async (id) => {
      const user = await fetchUser(id);
      return { ...user, processed: true };
    })
  );
  
  return users;
}
```

---

#### <span style="color: #4a90e2">**⭐ Як обробляти помилки з async/await?**</span>

Основний спосіб - **`try/catch`** блоки:

```javascript
// Базова обробка помилок
async function fetchUserSafely(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(userId);
    
    return { user, posts };
  } catch (error) {
    console.error('Помилка:', error.message);
    
    // Можемо повернути значення за замовчуванням
    return { user: null, posts: [] };
    
    // Або пробросити помилку далі
    // throw error;
  }
}

// Використання
const result = await fetchUserSafely(999);
if (result.user) {
  console.log('Користувач знайдений');
} else {
  console.log('Користувач не знайдений, використовуємо дані за замовчуванням');
}
```

**Різні сценарії обробки:**

**1. Обробка кожної операції окремо:**
```javascript
async function fetchUserDataDetailed(userId) {
  let user = null;
  let posts = [];
  let settings = {};
  
  // Обов'язкові дані
  try {
    user = await fetchUser(userId);
  } catch (error) {
    console.error('Не вдалося завантажити користувача:', error);
    throw new Error('Користувач обов\'язковий для роботи');
  }
  
  // Необов'язкові дані
  try {
    posts = await fetchUserPosts(userId);
  } catch (error) {
    console.warn('Не вдалося завантажити пости, використовуємо порожній масив');
    posts = []; // Значення за замовчуванням
  }
  
  try {
    settings = await fetchUserSettings(userId);
  } catch (error) {
    console.warn('Не вдалося завантажити налаштування');
    settings = getDefaultSettings();
  }
  
  return { user, posts, settings };
}
```

**2. Обробка паралельних операцій:**
```javascript
async function fetchMultipleUsersWithErrors(userIds) {
  try {
    // Promise.allSettled не кидає помилок
    const results = await Promise.allSettled(
      userIds.map(id => fetchUser(id))
    );
    
    const users = [];
    const errors = [];
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        users.push(result.value);
      } else {
        errors.push({
          userId: userIds[index],
          error: result.reason
        });
      }
    });
    
    if (errors.length > 0) {
      console.warn('Деякі користувачі не завантажились:', errors);
    }
    
    return users;
  } catch (error) {
    console.error('Критична помилка:', error);
    throw error;
  }
}
```

**3. Повторні спроби (retry pattern):**
```javascript
async function fetchWithRetry(url, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Спроба ${attempt}/${maxRetries}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      lastError = error;
      console.warn(`Спроба ${attempt} не вдалась:`, error.message);
      
      if (attempt < maxRetries) {
        // Чекаємо перед наступною спробою
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }
  
  throw new Error(`Всі ${maxRetries} спроб не вдались. Остання помилка: ${lastError.message}`);
}

// Використання
try {
  const data = await fetchWithRetry('/api/unreliable-endpoint');
  console.log('Дані отримано:', data);
} catch (error) {
  console.error('Не вдалося отримати дані:', error.message);
}
```

**4. Timeout для async операцій:**
```javascript
// Функція timeout
function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error(`Timeout ${timeoutMs}ms`)), timeoutMs)
    )
  ]);
}

// Використання
async function fetchUserWithTimeout(userId) {
  try {
    const user = await withTimeout(fetchUser(userId), 5000); // 5 секунд timeout
    return user;
  } catch (error) {
    if (error.message.includes('Timeout')) {
      console.error('Запит занадто довгий, скасовуємо');
    } else {
      console.error('Інша помилка:', error);
    }
    throw error;
  }
}
```

---

### 🎯 **Завдання для закріплення:**

1. **Event Loop:** Що виведе цей код і в якому порядку?
   ```javascript
   console.log('1');
   
   setTimeout(() => console.log('2'), 0);
   
   Promise.resolve().then(() => console.log('3'));
   
   console.log('4');
   ```

2. **Promise chaining:** Виправи цей код, щоб він працював правильно:
   ```javascript
   function loadUser(id) {
     fetchUser(id).then(user => {
       fetchUserPosts(user.id).then(posts => {
         console.log(user, posts);
       });
     });
   }
   ```

3. **Promise.all практика:** Створи функцію, яка завантажує дані про користувача паралельно:
   ```javascript
   async function getUserDashboard(userId) {
     // Паралельно завантажити:
     // - fetchUser(userId)
     // - fetchUserPosts(userId)  
     // - fetchUserFriends(userId)
     // Повернути об'єкт з усіма даними
   }
   ```

4. **Error handling:** Напиши функцію з правильною обробкою помилок:
   ```javascript
   async function safeApiCall(url) {
     // 1. Зробити fetch запит
     // 2. Якщо статус не 200 - кинути помилку
     // 3. Повернути JSON або null якщо помилка
   }
   ```

---

## 📊 Модуль 4: Масиви

### 🔧 Основні методи - ТОП питання

#### <span style="color: #4a90e2">**⭐ Чим відрізняється `map` від `forEach`?**</span> *(класика)*

**Головна відмінність:** `map` повертає новий масив, `forEach` нічого не повертає.

| Характеристика | `map` | `forEach` |
|---|---|---|
| **Повертає** | Новий масив | `undefined` |
| **Мутує оригінал** | ❌ Ні | ❌ Ні |
| **Призначення** | Трансформація даних | Виконання побічних ефектів |
| **Функціональність** | Чисті функції | Імперативний стиль |

```javascript
const numbers = [1, 2, 3, 4, 5];

// MAP - трансформує кожен елемент і повертає новий масив
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (оригінал не змінився)

// FOREACH - виконує операцію для кожного елементу
const result = numbers.forEach(num => console.log(num * 2));
console.log(result); // undefined (нічого не повертає)
// Виведе: 2, 4, 6, 8, 10 в консоль
```

**Коли використовувати `map`:**

```javascript
// ✅ Трансформація даних
const users = [
  { name: 'Іван', age: 25 },
  { name: 'Марія', age: 30 },
  { name: 'Петро', age: 35 }
];

const userNames = users.map(user => user.name);
// ['Іван', 'Марія', 'Петро']

const userCards = users.map(user => ({
  id: user.name.toLowerCase(),
  displayName: user.name,
  isAdult: user.age >= 18
}));
// [{ id: 'іван', displayName: 'Іван', isAdult: true }, ...]

// ✅ Перетворення типів
const stringNumbers = ['1', '2', '3', '4'];
const actualNumbers = stringNumbers.map(str => Number(str));
// [1, 2, 3, 4]

// ✅ Робота з React компонентами
const items = ['apple', 'banana', 'orange'];
const listItems = items.map(item => 
  <li key={item}>{item}</li>
);
```

**Коли використовувати `forEach`:**

```javascript
// ✅ Побічні ефекти (side effects)
const prices = [100, 200, 300];

// Додавання в DOM
prices.forEach(price => {
  const element = document.createElement('div');
  element.textContent = `$${price}`;
  document.body.appendChild(element);
});

// ✅ Логування
const errors = ['Error 1', 'Error 2', 'Error 3'];
errors.forEach(error => console.error(error));

// ✅ Модифікація зовнішніх змінних
let total = 0;
const amounts = [10, 20, 30];
amounts.forEach(amount => {
  total += amount; // Змінює зовнішню змінну
});
console.log(total); // 60

// ✅ Виклик методів об'єктів
const connections = [connection1, connection2, connection3];
connections.forEach(conn => conn.close()); // Закриваємо з'єднання
```

**Поширені помилки:**

```javascript
// ❌ НЕ використовуй map для побічних ефектів
numbers.map(num => console.log(num)); // Погано! Повертає [undefined, undefined, ...]

// ❌ НЕ ігноруй результат map
numbers.map(num => num * 2); // Втрачається результат

// ✅ Правильно
numbers.forEach(num => console.log(num)); // Для побічних ефектів
const doubled = numbers.map(num => num * 2); // Для трансформації
```

---

#### <span style="color: #4a90e2">**⭐ Як працює `filter`, `find`?**</span>

**`filter()`** - повертає новий масив з елементами, які задовольняють умову  
**`find()`** - повертає перший елемент, який задовольняє умову

```javascript
const users = [
  { id: 1, name: 'Іван', age: 25, active: true },
  { id: 2, name: 'Марія', age: 17, active: false },
  { id: 3, name: 'Петро', age: 30, active: true },
  { id: 4, name: 'Ольга', age: 22, active: true }
];

// FILTER - повертає масив всіх відповідних елементів
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// [
//   { id: 1, name: 'Іван', age: 25, active: true },
//   { id: 3, name: 'Петро', age: 30, active: true },
//   { id: 4, name: 'Ольга', age: 22, active: true }
// ]

const adults = users.filter(user => user.age >= 18);
console.log(adults); // Масив з 3 користувачів

// FIND - повертає перший відповідний елемент
const firstActiveUser = users.find(user => user.active);
console.log(firstActiveUser);
// { id: 1, name: 'Іван', age: 25, active: true }

const userById = users.find(user => user.id === 3);
console.log(userById);
// { id: 3, name: 'Петро', age: 30, active: true }
```

**Відмінності `filter` vs `find`:**

| Метод | Повертає | Кількість результатів | Якщо не знайдено |
|---|---|---|---|
| `filter` | Масив | Всі відповідні | Порожній масив `[]` |
| `find` | Елемент | Перший відповідний | `undefined` |

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// filter - всі парні числа
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// find - перше парне число
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// Якщо не знайдено
const bigNumbers = numbers.filter(num => num > 10);
console.log(bigNumbers); // [] (порожній масив)

const bigNumber = numbers.find(num => num > 10);
console.log(bigNumber); // undefined
```

**Практичні приклади:**

**1. Пошук і фільтрація:**
```javascript
const products = [
  { id: 1, name: 'iPhone', price: 1000, category: 'electronics' },
  { id: 2, name: 'Джинси', price: 80, category: 'clothing' },
  { id: 3, name: 'MacBook', price: 2000, category: 'electronics' },
  { id: 4, name: 'Футболка', price: 25, category: 'clothing' }
];

// Фільтрація за категорією
const electronics = products.filter(product => product.category === 'electronics');
// [iPhone, MacBook]

// Фільтрація за ціною
const affordable = products.filter(product => product.price <= 100);
// [Джинси, Футболка]

// Пошук конкретного товару
const iPhone = products.find(product => product.name === 'iPhone');
// { id: 1, name: 'iPhone', price: 1000, category: 'electronics' }

// Пошук за ID
const productById = (id) => products.find(product => product.id === id);
console.log(productById(2)); // Джинси
```

**2. Комбінування з іншими методами:**
```javascript
// filter + map - отримати імена активних користувачів
const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);
// ['Іван', 'Петро', 'Ольга']

// find + обробка undefined
const findUserByName = (name) => {
  const user = users.find(u => u.name === name);
  return user ? user : { error: 'Користувача не знайдено' };
};

console.log(findUserByName('Іван'));  // { id: 1, name: 'Іван', ... }
console.log(findUserByName('Анна'));  // { error: 'Користувача не знайдено' }
```

**3. Складні умови:**
```javascript
// Множинні умови
const premiumUsers = users.filter(user => 
  user.active && user.age >= 21
);

// Пошук за частковим співпадінням
const searchUsers = (query) => users.filter(user => 
  user.name.toLowerCase().includes(query.toLowerCase())
);

console.log(searchUsers('ів')); // [{ name: 'Іван', ... }]

// Використання з об'єктами
const settings = [
  { key: 'theme', value: 'dark' },
  { key: 'language', value: 'uk' },
  { key: 'notifications', value: true }
];

const getSetting = (key) => {
  const setting = settings.find(s => s.key === key);
  return setting ? setting.value : null;
};

console.log(getSetting('theme')); // 'dark'
```

---

#### <span style="color: #4a90e2">**⭐ Що робить `reduce`?**</span> *(часто питають)*

**`reduce()`** - зводить масив до одного значення, послідовно застосовуючи функцію до кожного елементу.

**Синтаксис:**
```javascript
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // логіка
  return newAccumulator;
}, initialValue);
```

**Базові приклади:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. Сума всіх елементів
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Покроково:
// acc = 0, num = 1 → acc = 0 + 1 = 1
// acc = 1, num = 2 → acc = 1 + 2 = 3  
// acc = 3, num = 3 → acc = 3 + 3 = 6
// acc = 6, num = 4 → acc = 6 + 4 = 10
// acc = 10, num = 5 → acc = 10 + 5 = 15

// 2. Добуток всіх елементів
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

// 3. Найбільший елемент
const max = numbers.reduce((acc, num) => num > acc ? num : acc, -Infinity);
console.log(max); // 5

// Або простіше:
const max2 = numbers.reduce((acc, num) => Math.max(acc, num));
console.log(max2); // 5
```

**Складніші приклади:**

**1. Підрахунок елементів:**
```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }
```

**2. Групування об'єктів:**
```javascript
const people = [
  { name: 'Іван', age: 25, department: 'IT' },
  { name: 'Марія', age: 30, department: 'HR' },
  { name: 'Петро', age: 35, department: 'IT' },
  { name: 'Ольга', age: 28, department: 'Marketing' }
];

// Групування за відділом
const byDepartment = people.reduce((acc, person) => {
  const dept = person.department;
  
  if (!acc[dept]) {
    acc[dept] = [];
  }
  
  acc[dept].push(person);
  return acc;
}, {});

console.log(byDepartment);
// {
//   IT: [{ name: 'Іван', ... }, { name: 'Петро', ... }],
//   HR: [{ name: 'Марія', ... }],
//   Marketing: [{ name: 'Ольга', ... }]
// }
```

**3. Трансформація масиву в об'єкт:**
```javascript
const users = [
  { id: 1, name: 'Іван', email: 'ivan@example.com' },
  { id: 2, name: 'Марія', email: 'maria@example.com' },
  { id: 3, name: 'Петро', email: 'petro@example.com' }
];

// Створення lookup таблиці по ID
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(usersById[2]); // { id: 2, name: 'Марія', email: 'maria@example.com' }

// Створення lookup по email
const usersByEmail = users.reduce((acc, user) => {
  acc[user.email] = user;
  return acc;
}, {});
```

**4. Флетенінг (розгортання) масивів:**
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];

const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Або з spread оператором
const flattened2 = nested.reduce((acc, arr) => [...acc, ...arr], []);
```

**5. Створення pipeline функцій:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Ланцюжок операцій в одному reduce
const result = numbers.reduce((acc, num) => {
  // Фільтруємо парні, подвоюємо і додаємо до суми
  if (num % 2 === 0) {
    return acc + (num * 2);
  }
  return acc;
}, 0);

console.log(result); // 12 (2*2 + 4*2 = 4 + 8 = 12)

// Еквівалентно:
const result2 = numbers
  .filter(num => num % 2 === 0)  // [2, 4]
  .map(num => num * 2)           // [4, 8]
  .reduce((acc, num) => acc + num, 0); // 12
```

**6. Обчислення статистики:**
```javascript
const grades = [85, 90, 78, 92, 88, 76, 95];

const stats = grades.reduce((acc, grade) => {
  acc.sum += grade;
  acc.count++;
  acc.min = Math.min(acc.min, grade);
  acc.max = Math.max(acc.max, grade);
  acc.average = acc.sum / acc.count;
  
  return acc;
}, {
  sum: 0,
  count: 0,
  min: Infinity,
  max: -Infinity,
  average: 0
});

console.log(stats);
// { sum: 604, count: 7, min: 76, max: 95, average: 86.29 }
```

**Поширені помилки з reduce:**

```javascript
// ❌ Забування повертати accumulator
const wrong = numbers.reduce((acc, num) => {
  acc + num; // Не повертається!
}, 0); // undefined

// ✅ Правильно
const correct = numbers.reduce((acc, num) => {
  return acc + num; // Повертається
}, 0);

// ❌ Мутація accumulator (якщо це об'єкт)
const wrongObj = items.reduce((acc, item) => {
  acc.push(item); // Мутує оригінальний acc
  return acc;
}, []);

// ✅ Правильно
const correctObj = items.reduce((acc, item) => {
  return [...acc, item]; // Створює новий масив
}, []);
```

---

#### <span style="color: #4a90e2">**Чим відрізняється `slice` від `splice`?**</span>

**`slice()`** - витягує частину масиву, **НЕ мутує** оригінал  
**`splice()`** - видаляє/додає елементи, **мутує** оригінал

| Характеристика | `slice` | `splice` |
|---|---|---|
| **Мутує оригінал** | ❌ Ні | ✅ Так |
| **Повертає** | Новий масив (копію частини) | Масив видалених елементів |
| **Параметри** | `(start, end)` | `(start, deleteCount, ...items)` |
| **Призначення** | Копіювання частини | Модифікація масиву |

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// SLICE - копіює частину масиву
const sliced = numbers.slice(1, 4); // з індексу 1 до 4 (не включаючи)
console.log(sliced); // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5, 6] (оригінал не змінився)

// SPLICE - змінює оригінальний масив
const spliced = numbers.splice(1, 3); // з індексу 1, видалити 3 елементи
console.log(spliced); // [2, 3, 4] (видалені елементи)
console.log(numbers); // [1, 5, 6] (оригінал змінився!)
```

**Детальне порівняння:**

**`slice(start, end)`:**
```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

// Базове використання
console.log(arr.slice(1, 3)); // ['b', 'c']
console.log(arr.slice(2));    // ['c', 'd', 'e'] (до кінця)
console.log(arr.slice(-2));   // ['d', 'e'] (останні 2)
console.log(arr.slice(-3, -1)); // ['c', 'd'] (з кінця)

// Копіювання всього масиву
const copy = arr.slice();
console.log(copy); // ['a', 'b', 'c', 'd', 'e']
console.log(copy === arr); // false (різні об'єкти)

// Оригінал завжди залишається незмінним
console.log(arr); // ['a', 'b', 'c', 'd', 'e']
```

**`splice(start, deleteCount, ...itemsToAdd)`:**
```javascript
let fruits = ['apple', 'banana', 'orange', 'grape'];

// 1. Видалення елементів
const removed = fruits.splice(1, 2); // Видалити 2 елементи з індексу 1
console.log(removed); // ['banana', 'orange']
console.log(fruits);  // ['apple', 'grape']

// 2. Додавання елементів
fruits.splice(1, 0, 'kiwi', 'mango'); // Вставити в індекс 1, не видаляючи
console.log(fruits); // ['apple', 'kiwi', 'mango', 'grape']

// 3. Заміна елементів
fruits.splice(1, 2, 'pear'); // Видалити 2, вставити 1
console.log(fruits); // ['apple', 'pear', 'grape']

// 4. Додавання в кінець (альтернатива push)
fruits.splice(fruits.length, 0, 'cherry');
console.log(fruits); // ['apple', 'pear', 'grape', 'cherry']

// 5. Видалення з кінця
fruits.splice(-1, 1); // Видалити останній елемент
console.log(fruits); // ['apple', 'pear', 'grape']
```

**Практичні приклади:**

**1. Робота зі списком завдань:**
```javascript
let tasks = [
  { id: 1, text: 'Купити молоко', done: false },
  { id: 2, text: 'Прочитати книгу', done: true },
  { id: 3, text: 'Зробити зарядку', done: false },
  { id: 4, text: 'Подзвонити мамі', done: false }
];

// slice - отримати перші 2 завдання (для пагінації)
const firstTwo = tasks.slice(0, 2);
console.log(firstTwo); // Перші 2 завдання
console.log(tasks.length); // 4 (оригінал не змінився)

// splice - видалити виконане завдання
const doneTaskIndex = tasks.findIndex(task => task.done);
const removedTasks = tasks.splice(doneTaskIndex, 1);
console.log(tasks.length); // 3 (завдання видалено)
console.log(removedTasks); // [{ id: 2, text: 'Прочитати книгу', done: true }]
```

**2. Вставка елементів у відсортований масив:**
```javascript
let sortedNumbers = [1, 3, 5, 7, 9];

function insertInSorted(arr, value) {
  // Знаходимо позицію для вставки
  let insertIndex = 0;
  while (insertIndex < arr.length && arr[insertIndex] < value) {
    insertIndex++;
  }
  
  // Використовуємо splice для вставки
  arr.splice(insertIndex, 0, value);
  return arr;
}

insertInSorted(sortedNumbers, 4);
console.log(sortedNumbers); // [1, 3, 4, 5, 7, 9]

insertInSorted(sortedNumbers, 0);
console.log(sortedNumbers); // [0, 1, 3, 4, 5, 7, 9]
```

**3. Реалізація undo/redo функціональності:**
```javascript
class ActionHistory {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }
  
  addAction(action) {
    // Видаляємо всі дії після поточного індексу (для redo)
    this.history.splice(this.currentIndex + 1);
    
    // Додаємо нову дію
    this.history.push(action);
    this.currentIndex++;
  }
  
  undo() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return null;
  }
  
  redo() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }
  
  // slice для безпечного отримання історії
  getHistory() {
    return this.history.slice(); // Копія, щоб не змінювали ззовні
  }
}
```

**Коли що використовувати:**

```javascript
// ✅ slice для:
const users = getUsers();

// - Пагінації
const page1 = users.slice(0, 10);
const page2 = users.slice(10, 20);

// - Копіювання
const backup = users.slice();

// - Отримання останніх N елементів
const recent = users.slice(-5);

// ✅ splice для:
let playlist = getSongs();

// - Видалення елементів
playlist.splice(2, 1); // Видалити 3-ю пісню

// - Переміщення елементів
const [song] = playlist.splice(0, 1); // Взяти першу пісню
playlist.splice(5, 0, song); // Вставити на 6-те місце

// - Заміни елементів
playlist.splice(1, 1, newSong); // Замінити 2-гу пісню
```

---

### 🎯 **Завдання для закріплення:**

1. **map vs forEach:** Що не так з цим кодом?
   ```javascript
   const numbers = [1, 2, 3];
   const doubled = numbers.forEach(num => num * 2);
   console.log(doubled); // Що виведе?
   ```

2. **filter + find:** Напиши функції:
   ```javascript
   const products = [
     { id: 1, name: 'iPhone', price: 1000, inStock: true },
     { id: 2, name: 'Samsung', price: 800, inStock: false },
     { id: 3, name: 'Pixel', price: 700, inStock: true }
   ];
   
   // Функція для отримання товарів в наявності
   function getAvailableProducts(products) {
     // твоя реалізація
   }
   
   // Функція для пошуку товару за ID
   function findProductById(products, id) {
     // твоя реалізація
   }
   ```

3. **reduce практика:** Реалізуй функції через reduce:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   
   // Знайти максимальне число
   const max = numbers.reduce(/* твоя реалізація */);
   
   // Створити об'єкт {число: число²}
   const squared = numbers.reduce(/* твоя реалізація */, {});
   // Результат: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
   ```

4. **slice vs splice:** Виправи функції:
   ```javascript
   // Функція має повертати копію без першого елементу
   function removeFirstCopy(arr) {
     return arr.splice(1); // ❌ Що не так?
   }
   
   // Функція має видалити елемент за індексом з оригінального масиву
   function removeByIndex(arr, index) {
     return arr.slice(index, 1); // ❌ Що не так?
   }
   ```

---

## 🚀 Модуль 5: ES6+ Features

### 📦 Деструктуризація - ТОП питання

#### <span style="color: #4a90e2">**⭐ Як працює деструктуризація масивів і об'єктів?**</span>

**Деструктуризація** - це синтаксис, який дозволяє витягувати значення з масивів або властивості з об'єктів у окремі змінні.

**Деструктуризація масивів:**

```javascript
// Базовий синтаксис
const numbers = [1, 2, 3, 4, 5];

const [first, second, third] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

// Пропускання елементів
const [a, , c] = [1, 2, 3]; // Пропускаємо другий елемент
console.log(a); // 1
console.log(c); // 3

// Значення за замовчуванням
const [x, y, z = 0] = [10, 20];
console.log(x); // 10
console.log(y); // 20
console.log(z); // 0 (значення за замовчуванням)

// Rest елементи
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
```

**Практичні приклади з масивами:**

```javascript
// 1. Обмін значень змінних
let a = 10, b = 20;
[a, b] = [b, a]; // Обмін без додаткової змінної
console.log(a); // 20
console.log(b); // 10

// 2. Повернення кількох значень з функції
function getCoordinates() {
  return [100, 200];
}
const [x, y] = getCoordinates();

// 3. Робота з split()
const fullName = "Іван Петров";
const [firstName, lastName] = fullName.split(" ");

// 4. Ітерація з entries()
const users = ['Іван', 'Марія', 'Петро'];
for (const [index, user] of users.entries()) {
  console.log(`${index}: ${user}`);
}
// 0: Іван
// 1: Марія  
// 2: Петро
```

**Деструктуризація об'єктів:**

```javascript
// Базовий синтаксис
const person = {
  name: 'Іван',
  age: 25,
  city: 'Київ',
  country: 'Україна'
};

const { name, age, city } = person;
console.log(name); // 'Іван'
console.log(age);  // 25
console.log(city); // 'Київ'

// Перейменування змінних
const { name: personName, age: personAge } = person;
console.log(personName); // 'Іван'
console.log(personAge);  // 25

// Значення за замовчуванням
const { name, age, profession = 'Developer' } = person;
console.log(profession); // 'Developer'

// Комбінування перейменування і значень за замовчуванням
const { name: fullName, salary: currentSalary = 50000 } = person;
console.log(fullName);      // 'Іван'
console.log(currentSalary); // 50000
```

**Вкладена деструктуризація:**

```javascript
const user = {
  id: 1,
  name: 'Іван',
  address: {
    street: 'Хрещатик',
    city: 'Київ',
    zipCode: '01001'
  },
  hobbies: ['читання', 'спорт', 'музика']
};

// Вкладена деструктуризація об'єктів
const {
  name,
  address: { city, zipCode },
  hobbies: [firstHobby, ...otherHobbies]
} = user;

console.log(name);         // 'Іван'
console.log(city);         // 'Київ'
console.log(zipCode);      // '01001'
console.log(firstHobby);   // 'читання'
console.log(otherHobbies); // ['спорт', 'музика']

// УВАГА: address змінна не створюється, тільки її властивості
// console.log(address); // ReferenceError

// Щоб отримати і сам об'єкт, і його властивості:
const {
  address,
  address: { street }
} = user;
console.log(address); // { street: 'Хрещатик', city: 'Київ', zipCode: '01001' }
console.log(street);  // 'Хрещатик'
```

**Деструктуризація параметрів функції:**

```javascript
// Замість передачі багатьох параметрів
function createUser(name, age, email, city) {
  return { name, age, email, city };
}

// Використовуємо деструктуризацію
function createUser({ name, age, email, city = 'Київ' }) {
  return { name, age, email, city };
}

// Виклик
const userData = {
  name: 'Марія',
  age: 28,
  email: 'maria@example.com'
};
const user = createUser(userData);

// Деструктуризація з масивами в параметрах
function processCoordinates([x, y, z = 0]) {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

processCoordinates([10, 20]); // X: 10, Y: 20, Z: 0
```

**Практичні застосування:**

**1. Робота з API відповідями:**
```javascript
// Типова відповідь API
const apiResponse = {
  data: {
    users: [
      { id: 1, name: 'Іван', role: 'admin' },
      { id: 2, name: 'Марія', role: 'user' }
    ]
  },
  meta: {
    total: 2,
    page: 1
  }
};

// Деструктуризація для витягування потрібних даних
const {
  data: { users },
  meta: { total }
} = apiResponse;

console.log(users); // Масив користувачів
console.log(total); // 2
```

**2. Конфігурація компонентів (React):**
```javascript
function UserCard({ name, age, avatar = '/default-avatar.png' }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>Вік: {age}</p>
    </div>
  );
}

// Використання
<UserCard name="Іван" age={25} />
```

**3. Обробка помилок:**
```javascript
try {
  const response = await fetch('/api/user');
  const { data, error } = await response.json();
  
  if (error) {
    const { message, code } = error;
    console.error(`Error ${code}: ${message}`);
  } else {
    const { name, email } = data;
    console.log(`User: ${name} (${email})`);
  }
} catch (err) {
  console.error('Network error:', err);
}
```

**4. Імпорт модулів:**
```javascript
// ES6 імпорти використовують деструктуризацію
import { useState, useEffect } from 'react';
import { map, filter, reduce } from 'lodash';

// Named експорти
export const { PI, E } = Math;
```

**Поширені помилки:**

```javascript
// ❌ Деструктуризація undefined/null
const person = null;
const { name } = person; // TypeError: Cannot destructure property 'name'

// ✅ Захист від undefined/null
const { name } = person || {};
const { name } = person ?? {};

// ❌ Намагання деструктурувати не-ітерабельне
const [a, b] = 123; // TypeError: 123 is not iterable

// ✅ Перевірка типу
const numbers = Array.isArray(data) ? data : [];
const [first] = numbers;

// ❌ Перезаписування існуючих змінних без оголошення
let name = 'Старе ім\'я';
{ name } = person; // SyntaxError

// ✅ Правильне оголошення
let name = 'Старе ім\'я';
({ name } = person); // Потрібні дужки!
```

---

### 🔄 Spread/Rest - ТОП питання

#### <span style="color: #4a90e2">**⭐ Що таке spread operator (...)?**</span>

**Spread operator (...)** - розгортає ітерабельні об'єкти (масиви, рядки, об'єкти) в окремі елементи.

**Spread з масивами:**

```javascript
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// 1. Об'єднання масивів
const combined = [...numbers, ...moreNumbers];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Вставка елементів в середину
const middle = [...numbers, 3.5, ...moreNumbers];
console.log(middle); // [1, 2, 3, 3.5, 4, 5, 6]

// 2. Копіювання масиву (shallow copy)
const copy = [...numbers];
console.log(copy); // [1, 2, 3]
console.log(copy === numbers); // false (різні об'єкти)

// 3. Перетворення NodeList в масив
const divs = document.querySelectorAll('div');
const divsArray = [...divs]; // Тепер можна використовувати map, filter і т.д.

// 4. Розгортання рядка
const str = "Hello";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// 5. Знаходження min/max
const scores = [95, 87, 92, 78, 89];
const maxScore = Math.max(...scores); // 95
const minScore = Math.min(...scores); // 78
```

**Spread з об'єктами:**

```javascript
const person = {
  name: 'Іван',
  age: 25
};

const address = {
  city: 'Київ',
  country: 'Україна'
};

// 1. Об'єднання об'єктів
const fullInfo = { ...person, ...address };
console.log(fullInfo);
// { name: 'Іван', age: 25, city: 'Київ', country: 'Україна' }

// 2. Оновлення властивостей (immutable update)
const updatedPerson = {
  ...person,
  age: 26,
  profession: 'Developer'
};
console.log(updatedPerson);
// { name: 'Іван', age: 26, profession: 'Developer' }
console.log(person); // { name: 'Іван', age: 25 } (оригінал не змінився)

// 3. Порядок має значення (останні властивості перезаписують попередні)
const config = { theme: 'dark', size: 'large' };
const userPrefs = { theme: 'light', animation: true };

const finalConfig = { ...config, ...userPrefs };
console.log(finalConfig);
// { theme: 'light', size: 'large', animation: true }
```

**Практичні застосування Spread:**

**1. React state updates:**
```javascript
// Оновлення стану без мутації
const [user, setUser] = useState({
  name: 'Іван',
  preferences: { theme: 'dark', lang: 'uk' }
});

// Оновлення користувача
setUser(prevUser => ({
  ...prevUser,
  age: 26,
  preferences: {
    ...prevUser.preferences,
    theme: 'light'
  }
}));
```

**2. Функції з довільною кількістю аргументів:**
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

const nums = [1, 2, 3, 4];
console.log(sum(...nums)); // 10
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
```

**3. Клонування з змінами:**
```javascript
const originalTodo = {
  id: 1,
  text: 'Купити молоко',
  completed: false,
  tags: ['grocery', 'urgent']
};

// Shallow copy з оновленнями
const completedTodo = {
  ...originalTodo,
  completed: true,
  updatedAt: new Date()
};

// Deep copy (обережно з вкладеними об'єктами/масивами)
const todoWithNewTag = {
  ...originalTodo,
  tags: [...originalTodo.tags, 'home']
};
```

---

#### <span style="color: #4a90e2">**⭐ Що таке rest parameters?**</span>

**Rest parameters (...)** - збирає залишкові елементи в масив або об'єкт.

**Rest в функціях:**

```javascript
// 1. Збирання параметрів в масив
function sum(first, second, ...rest) {
  console.log('First:', first);     // 1
  console.log('Second:', second);   // 2
  console.log('Rest:', rest);       // [3, 4, 5, 6]
  
  return first + second + rest.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21

// 2. Функція з необмеженою кількістю аргументів
function logger(level, ...messages) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${level.toUpperCase()}:`, ...messages);
}

logger('info', 'User logged in', 'ID: 123');
logger('error', 'Database connection failed', 'Retrying...', 'Attempt 1');

// 3. Wrapper функції
function fetchWithLogging(url, ...fetchOptions) {
  console.log(`Fetching: ${url}`);
  return fetch(url, ...fetchOptions); // Передаємо всі опції далі
}

fetchWithLogging('/api/users', { method: 'POST', body: JSON.stringify(data) });
```

**Rest в деструктуризації масивів:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Перший елемент окремо, решта в масив
const [first, ...remaining] = numbers;
console.log(first);     // 1
console.log(remaining); // [2, 3, 4, 5, 6]

// Перший, останній, та середні
const [head, ...middle, tail] = numbers; // ❌ SyntaxError! Rest має бути останнім

// ✅ Правильно - rest завжди останній
const [head, second, ...tail] = numbers;
console.log(head);   // 1
console.log(second); // 2
console.log(tail);   // [3, 4, 5, 6]

// Практичний приклад - розділення масиву
const [currentUser, ...otherUsers] = users;
const [latestPost, ...olderPosts] = posts.sort((a, b) => b.date - a.date);
```

**Rest в деструктуризації об'єктів:**

```javascript
const user = {
  id: 1,
  name: 'Іван',
  age: 25,
  email: 'ivan@example.com',
  city: 'Київ',
  country: 'Україна'
};

// Витягуємо name та age, решта в rest об'єкт
const { name, age, ...contactInfo } = user;
console.log(name);        // 'Іван'
console.log(age);         // 25
console.log(contactInfo); 
// { id: 1, email: 'ivan@example.com', city: 'Київ', country: 'Україна' }

// Практичне використання - видалення властивостей
const { password, secretKey, ...publicUserData } = userFromDB;
// Тепер publicUserData не містить чутливих даних

// Групування властивостей
const { theme, fontSize, ...otherSettings } = appSettings;
const uiSettings = { theme, fontSize };
const dataSettings = otherSettings;
```

**Різниця між Spread і Rest:**

```javascript
// SPREAD - розгортає колекцію в окремі елементи
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3 (розгорнули)
const newArr = [...arr, 4, 5]; // Розгорнули в новий масив

// REST - збирає окремі елементи в колекцію
function collect(...items) { // Збирає аргументи в масив
  return items;
}
console.log(collect(1, 2, 3)); // [1, 2, 3]

const [first, ...others] = [1, 2, 3, 4]; // Збирає в масив others
```

**Практичні застосування Rest:**

**1. Утилітні функції:**
```javascript
// Функція для створення URL з query параметрами
function createURL(baseURL, ...queryParams) {
  const url = new URL(baseURL);
  queryParams.forEach(param => {
    Object.entries(param).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  });
  return url.toString();
}

const url = createURL(
  'https://api.example.com/users',
  { page: 1, limit: 10 },
  { sort: 'name', order: 'asc' }
);
```

**2. Middleware pattern:**
```javascript
function composeMiddleware(initialValue, ...middlewares) {
  return middlewares.reduce((value, middleware) => {
    return middleware(value);
  }, initialValue);
}

const addOne = x => x + 1;
const double = x => x * 2;
const toString = x => x.toString();

const result = composeMiddleware(5, addOne, double, toString);
// 5 -> 6 -> 12 -> "12"
```

**3. Обробка подій з додатковими даними:**
```javascript
function handleClick(event, ...additionalData) {
  event.preventDefault();
  
  console.log('Click event:', event);
  console.log('Additional data:', additionalData);
  
  // Обробка додаткових даних
  additionalData.forEach(data => {
    if (typeof data === 'function') data();
    else console.log('Data:', data);
  });
}

// Використання
button.addEventListener('click', (e) => 
  handleClick(e, 'user-id-123', () => trackEvent('button-click'))
);
```

---

### 📝 Template Literals

#### <span style="color: #4a90e2">**Що таке template literals?**</span> *(backticks)*

**Template literals** - це рядки з backticks (`) з підтримкою інтерполяції змінних і багаторядкових рядків.

**Базовий синтаксис:**

```javascript
// Звичайні рядки
const name = 'Іван';
const age = 25;
const greeting = 'Привіт, ' + name + '! Тобі ' + age + ' років.';

// Template literals
const greeting2 = `Привіт, ${name}! Тобі ${age} років.`;
console.log(greeting2); // "Привіт, Іван! Тобі 25 років."

// Багаторядкові рядки
const multiline = `
  Це перший рядок
  Це другий рядок
  А це третій рядок
`;

// Порівняйте зі звичайними рядками
const multilineOld = 'Це перший рядок\n' +
                     'Це другий рядок\n' +
                     'А це третій рядок';
```

**Інтерполяція виразів:**

```javascript
const price = 100;
const tax = 0.2;

// Можна використовувати будь-які вирази
const total = `Загальна сума: $${price * (1 + tax)}`;
console.log(total); // "Загальна сума: $120"

// Умовні вирази
const user = { name: 'Іван', isPremium: true };
const message = `Привіт, ${user.name}! ${user.isPremium ? 'Ви Premium користувач' : 'Оновіться до Premium'}`;

// Виклик функцій
function formatDate(date) {
  return date.toLocaleDateString('uk-UA');
}

const today = new Date();
const dateMessage = `Сьогодні: ${formatDate(today)}`;
```

**HTML шаблони:**

```javascript
function createUserCard(user) {
  return `
    <div class="user-card">
      <img src="${user.avatar}" alt="${user.name}" class="avatar">
      <h3 class="name">${user.name}</h3>
      <p class="email">${user.email}</p>
      <div class="stats">
        <span>Постів: ${user.postsCount}</span>
        <span>Підписників: ${user.followersCount}</span>
      </div>
      ${user.isVerified ? '<div class="badge">Верифікований</div>' : ''}
    </div>
  `;
}

const user = {
  name: 'Іван Петров',
  email: 'ivan@example.com',
  avatar: '/avatars/ivan.jpg',
  postsCount: 42,
  followersCount: 1337,
  isVerified: true
};

document.getElementById('user-container').innerHTML = createUserCard(user);
```

**SQL запити:**

```javascript
function getUsersQuery(minAge, city) {
  return `
    SELECT users.id, users.name, users.email, profiles.avatar
    FROM users
    JOIN profiles ON users.id = profiles.user_id
    WHERE users.age >= ${minAge}
      AND profiles.city = '${city}'
    ORDER BY users.created_at DESC
    LIMIT 100
  `;
}

// ⚠️ УВАГА: У реальних додатках використовуйте підготовлені запити!
const query = getUsersQuery(18, 'Київ');
```

**Tagged Template Literals (просунуті):**

```javascript
// Функція-тег для обробки template literal
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const searchTerm = 'JavaScript';
const text = highlight`Вивчаю ${searchTerm} програмування на практиці`;
// "Вивчаю <mark>JavaScript</mark> програмування на практиці"

// Практичний приклад - безпечний HTML
function safe(strings, ...values) {
  return strings.reduce((result, string, i) => {
    let value = values[i] || '';
    // Екрануємо HTML
    if (typeof value === 'string') {
      value = value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    return result + string + value;
  }, '');
}

const userInput = '<script>alert("hack")</script>';
const safeHTML = safe`Користувач ввів: ${userInput}`;
// "Користувач ввів: &lt;script&gt;alert("hack")&lt;/script&gt;"
```

**Практичні застосування:**

**1. Конфігурація та повідомлення:**
```javascript
const config = {
  apiUrl: 'https://api.example.com',
  version: 'v1',
  apiKey: 'abc123'
};

const endpoints = {
  users: `${config.apiUrl}/${config.version}/users?key=${config.apiKey}`,
  posts: `${config.apiUrl}/${config.version}/posts?key=${config.apiKey}`,
  auth: `${config.apiUrl}/${config.version}/auth?key=${config.apiKey}`
};

// Динамічні повідомлення
function createNotification(type, user, action) {
  const messages = {
    success: `✅ ${user.name}, ${action} виконано успішно!`,
    error: `❌ ${user.name}, помилка при ${action}`,
    warning: `⚠️ ${user.name}, увага при ${action}`
  };
  
  return messages[type] || `${user.name}: ${action}`;
}
```

**2. Логування та дебаг:**
```javascript
function debugLog(level, module, message, ...data) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${level.toUpperCase()} ${module}: ${message}`;
  
  console.log(logEntry, ...data);
  
  // Можна відправляти на сервер для збору логів
  if (level === 'error') {
    sendToLogServer(`${logEntry} ${JSON.stringify(data)}`);
  }
}

debugLog('info', 'UserService', 'User login attempt', { userId: 123, ip: '192.168.1.1' });
```

**3. CSS-in-JS (styled-components style):**
```javascript
function createStyles(theme) {
  return `
    .button {
      background-color: ${theme.primary};
      color: ${theme.text};
      border: 1px solid ${theme.border};
      border-radius: ${theme.borderRadius}px;
      padding: ${theme.spacing.small}px ${theme.spacing.medium}px;
      font-size: ${theme.fontSize.base}px;
      transition: all ${theme.transition.fast}ms ease;
    }
    
    .button:hover {
      background-color: ${theme.primaryHover};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px ${theme.shadow};
    }
    
    .button.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `;
}

const lightTheme = {
  primary: '#007bff',
  primaryHover: '#0056b3',
  text: '#fff',
  border: '#007bff',
  borderRadius: 4,
  spacing: { small: 8, medium: 16 },
  fontSize: { base: 14 },
  transition: { fast: 200 },
  shadow: 'rgba(0,123,255,0.3)'
};

const cssStyles = createStyles(lightTheme);
```

---

### 🎯 **Завдання для закріплення:**

1. **Деструктуризація:** Що виведе цей код?
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const [a, , c, ...rest] = arr;
   console.log(a, c, rest);
   
   const obj = { x: 1, y: 2, z: 3 };
   const { x, ...other } = obj;
   console.log(x, other);
   ```

2. **Spread практика:** Напиши функції:
   ```javascript
   // Функція для об'єднання об'єктів з пріоритетом
   function mergeWithPriority(defaultConfig, userConfig) {
     // userConfig має перезаписувати defaultConfig
     // твоя реалізація з spread
   }
   
   // Функція для копіювання масиву без останнього елемента
   function copyWithoutLast(arr) {
     // твоя реалізація з spread
   }
   ```

3. **Rest parameters:** Створи функцію:
   ```javascript
   function createLogger(prefix, ...messages) {
     // Функція має виводити: "[PREFIX] message1 message2 message3"
     // твоя реалізація
   }
   
   createLogger('INFO', 'User', 'logged', 'in');
   // Має вивести: "[INFO] User logged in"
   ```

4. **Template literals:** Створи функцію для генерації HTML:
   ```javascript
   function createProductCard(product) {
     // product = { name, price, image, inStock }
     // Використай template literals для створення HTML картки
     // Якщо inStock === false, додай клас 'out-of-stock'
   }
   ```

---