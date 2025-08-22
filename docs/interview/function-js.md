# Різниця між function declaration і function expression

## Function Declaration (Оголошення функції)

Function Declaration - це оголошення функції за допомогою ключового слова `function`, після якого йде ім'я функції.

```javascript
function myFunction() {
    console.log("Це function declaration");
}
```

**Основні характеристики:**
- **Hoisting**: Function declarations піднімаються (hoisted) повністю на початок області видимості
- Можна викликати функцію до її оголошення в коді
- Завжди має ім'я
- Створює прив'язку до імені в поточній області видимості

```javascript
// Це працює завдяки hoisting
sayHello(); // "Привіт!"

function sayHello() {
    console.log("Привіт!");
}
```

## Function Expression (Вираз функції)

Function Expression - це створення функції як частини виразу, зазвичай присвоєння змінній.

```javascript
const myFunction = function() {
    console.log("Це function expression");
};
```

**Основні характеристики:**
- **Hoisting**: Тільки оголошення змінної піднімається, але не сама функція
- Не можна викликати до присвоєння
- Може бути анонімною або іменованою
- Створюється під час виконання коду

```javascript
// Це НЕ працює - ReferenceError
sayHello(); // Error!

const sayHello = function() {
    console.log("Привіт!");
};
```

## Ключові відмінності

### 1. Hoisting (Підняття)
```javascript
// Function Declaration
console.log(foo()); // "foo" - працює

function foo() {
    return "foo";
}

// Function Expression
console.log(bar()); // TypeError: bar is not a function

var bar = function() {
    return "bar";
};
```

### 2. Умовне створення
```javascript
// Function Declaration - не рекомендується
if (true) {
    function foo() {
        return "foo";
    }
}

// Function Expression - правильний підхід
let foo;
if (true) {
    foo = function() {
        return "foo";
    };
}
```

### 3. Використання як значення
```javascript
// Function Expression легко використовувати як значення
const operations = {
    add: function(a, b) { return a + b; },
    multiply: function(a, b) { return a * b; }
};

// Або як callback
setTimeout(function() {
    console.log("Виконано через секунду");
}, 1000);
```

## Named Function Expression

Іменований вираз функції - це Function Expression з ім'ям:

```javascript
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};

// Ім'я 'fact' доступне тільки всередині функції
console.log(factorial(5)); // 120
console.log(fact(5)); // ReferenceError: fact is not defined
```

## Arrow Functions

Arrow functions - це особливий тип Function Expression:

```javascript
const arrowFunction = () => {
    console.log("Arrow function");
};

// Короткий синтаксис
const add = (a, b) => a + b;
```

**Відмінності arrow functions:**
- Не мають власного `this`
- Не мають `arguments`
- Не можуть бути конструкторами
- Не підлягають hoisting

## Коли використовувати що?

**Function Declaration використовуйте коли:**
- Потрібна функція доступна в усій області видимості
- Логіка функції важлива для розуміння коду зверху
- Створюєте основні функції модуля

**Function Expression використовуйте коли:**
- Функція використовується як callback
- Потрібне умовне створення функції
- Функція є частиною об'єкта або структури даних
- Працюєте з модульним кодом і хочете контролювати порядок ініціалізації