// перевірити чи рядок валідний, чи не валідний
// що це означає:
// оце валідний рядок: {()}
// оце НЕ валідний рядок: ((]}
// тобто всі дужки мають мати відкриваючу та закриваючу дужку.

const string = "{()[()]}[{}]";

const stringArr = string.split("");

let newStringArr = [...stringArr];

for (let char of stringArr) {
  if (!newStringArr.includes(char)) {
    continue;
  }

  let findSymbol;

  if (char === "{") {
    findSymbol = newStringArr.find((elem) => elem === "}");
  }

  if (char === "(") {
    findSymbol = newStringArr.find((elem) => elem === ")");
  }

  if (char === "[") {
    findSymbol = newStringArr.find((elem) => elem === "]");
  }
  // }

  // видалення пари
  if (findSymbol && newStringArr.includes(char)) {
    // видалення закриваючої дужки
    let closeIndex = newStringArr.indexOf(findSymbol);
    newStringArr.splice(closeIndex, 1);

    // видалення відкриваючої дужки
    let opendIndex = newStringArr.indexOf(char);
    newStringArr.splice(opendIndex, 1);
  }
}

console.log(newStringArr);
