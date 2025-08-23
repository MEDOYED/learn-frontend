// Find duplicates in array

// Це завдання полягає в тому, щоб знайти всі елементи масиву, які повторюються (зустрічаються більше одного разу).
// Приклад:

// Основні варіанти завдання

// 1) Знайти всі дублікати - повернути масив з елементами, що повторюються
// 2) Перевірити наявність дубліката - повернути true/false
// 3) Видалити дублікати - залишити тільки унікальні елементи
// 4) Підрахувати дублікати - скільки разів кожен елемент повторюється

// const ArrayWithoutDuplicates = new Set(array);
// console.log(ArrayWithoutDuplicates);

const array = [1, 2, 3, 2, 4, 5, 1, 6];

let ArrayWithoutDuplicates: number[] = [];
let isNumInArr: boolean;
let ArrayWithDuplicates: number[] = [];

for (let i = 0; i < array.length; i++) {
  isNumInArr = false;

  for (let number of ArrayWithoutDuplicates) {
    if (array[i] === number) {
      isNumInArr = true;
      break;
    }
  }

  if (isNumInArr === false) {
    ArrayWithoutDuplicates.push(array[i]);
  } else ArrayWithDuplicates.push(array[i]);
}

console.log(ArrayWithoutDuplicates);
console.log(ArrayWithDuplicates);
