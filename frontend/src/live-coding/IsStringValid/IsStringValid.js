const string = "{()[()]}[{}]";

const stringArr = string.split("");

let newStringArr = [...stringArr];
let newNewStringArr;
let findSymbol;

for (let i = 0; i < newStringArr.length; i++) {
  // for (i of newStringArr) {
  if (newStringArr[i] === "{") {
    findSymbol = newStringArr.find((elem, index, array) => {
      return elem === "}";

      // return findSymbol.indexOf(elem);
    });

    // console.log(findSymbol);
    // newNewStringArr = newStringArr.slice(newStringArr.indexOf(findSymbol));
  }
  // }
}
newStringArr.splice(7, 1).splice(0, 1);
// newNewStringArr.splice(0, 1);

console.log(newStringArr.indexOf(findSymbol));

console.log(findSymbol);

console.log(newStringArr);
// console.log(newNewStringArr);
