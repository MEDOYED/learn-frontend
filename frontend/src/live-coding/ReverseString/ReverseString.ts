// =====================================================
// 🎯 ЗАВДАННЯ ДЛЯ ПРАКТИКИ - REVERSE STRING
// =====================================================

// Рівень 1: БАЗОВІ ЗАВДАННЯ
// -------------------------

// Завдання 1.1: Розгорни простий рядок
// Вхід: "hello"
// Очікуваний результат: "olleh"
function reverseSimpleString(str: string): string {
  const splitString = str.split("");

  let reversSplitString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversSplitString.push(splitString[i]);
  }

  const reverseSimpleString = reversSplitString.join("");

  return reverseSimpleString;
}

console.log(reverseSimpleString("hello world"));

// Завдання 2: Розгорни тільки слова (пробіли залишити на місці)
// Вхід: "hello world"
// Очікуваний результат: "olleh dlrow"
function reverseWordsOnly(str: string): string {
  const wordsArr = str.split(" ");

  let reversedWordsInArray = [];

  for (let i = 0; i < wordsArr.length; i++) {
    const reverseWord = reverseSimpleString(wordsArr[i]);
    reversedWordsInArray.push(reverseWord);
    console.log(wordsArr[i]);
  }

  const reverseWordsOnly = reversedWordsInArray.join(" ");

  return reverseWordsOnly;
}

console.log(reverseWordsOnly("hello boy"));

// Завдання 2.2: Розгорни рядок, ігноруючи розділові знаки
// Вхід: "hello, world!"
// Очікуваний результат: "dlrow, olleh!"
function reverseIgnorePunctuation(str: string): string {
  // TODO: Твоє рішення тут
  return "";
}

// Завдання 2.3: Розгорни тільки літери (цифри та символи на місці)
// Вхід: "a1b2c3"
// Очікуваний результат: "c1b2a3"
function reverseOnlyLetters(str: string): string {
  // TODO: Твоє рішення тут
  return "";
}

// =====================================================
// Рівень 3: СКЛАДНІ ЗАВДАННЯ
// -------------------------

// Завдання 3.1: Розгорни речення (слова в зворотному порядку)
// Вхід: "The quick brown fox"
// Очікуваний результат: "fox brown quick The"
function reverseSentence(str: string): string {
  // TODO: Твоє рішення тут
  return "";
}

// Завдання 3.2: Розгорни кожне слово окремо
// Вхід: "The quick brown fox"
// Очікуваний результат: "ehT kciuq nworb xof"
function reverseEachWord(str: string): string {
  // TODO: Твоє рішення тут
  return "";
}

// Завдання 3.3: Паліндром чекер (перевірити чи є рядок паліндромом)
// Вхід: "racecar"
// Очікуваний результат: true
function isPalindrome(str: string): boolean {
  // TODO: Твоє рішення тут
  return false;
}

// =====================================================
// Рівень 4: ЕКСПЕРТНІ ЗАВДАННЯ
// ----------------------------

// Завдання 4.1: Розгорни Unicode рядок (емодзі, діакритики)
// Вхід: "Hello 👋 World 🌍"
// Очікуваний результат: "🌍 dlroW 👋 olleH"
function reverseUnicode(str: string): string {
  // TODO: Твоє рішення тут
  return "";
}

// Завдання 4.2: Розгорни рядок без використання вбудованих методів
// Можна використовувати тільки: циклі, змінні, базові операції
function reverseManual(str: string): string {
  // TODO: Твоє рішення тут (без .reverse(), .split(), etc.)
  return "";
}

// Завдання 4.3: Розгорни рядок рекурсивно
function reverseRecursive(str: string): string {
  // TODO: Твоє рішення тут
  return "";
}
