const data = [
  { id: 1, name: "capybara", type: "animal" },
  { id: 2, name: "audi", type: "auto" },
  { id: 3, name: "samsung", type: "phone" },
  { id: 4, name: "iphone", type: "phone" },
  { id: 5, name: "vw", type: "auto" },
  { id: 6, name: "bmw", type: "auto" },
  { id: 7, name: "tiger", type: "animal" },
  { id: 8, name: "toyota", type: "auto" },
  { id: 9, name: "badger", type: "animal" },
];

// const normilizedData = {
//   animal: [
//     { id: 1, name: 'capybara', type: 'animal' },
//     { id: 7, name: 'tiger', type: 'animal' },
//     { id: 9, name: 'badger', type: 'animal' },
//   ],
//   auto: [
//     { id: 2, name: 'audi', type: 'auto' },
//     { id: 5, name: 'vw', type: 'auto' },
//     { id: 6, name: 'bmw', type: 'auto' },
//     { id: 8, name: 'toyota', type: 'auto' },
//   ],
//   phone: [
//     { id: 3, name: 'samsung', type: 'phone' },
//     { id: 4, name: 'iphone', type: 'phone' },
//   ],
// };

const animalData = data.filter((item, index) => {
  return item.type === "animal";
});

const autoData = data.filter((item, index) => {
  return item.type === "auto";
});

const phoneData = data.filter((item, index) => {
  return item.type === "phone";
});

// console.log('animal data: ', animalData);
// console.log('auto data: ', autoData);
// console.log('phone data: ', phoneData);

// const normilizedData = {
//   animal: animalData,
//   auto: autoData,
//   phone: phoneData,
// };

let objectData = {};

for (let i = 0; i <= data.length; i++) {
  objectData[data[i].type];
}

const normilizedData = {
  animal: (phoneData = data.filter((item, index) => {
    // return item.type === ;
  })),
  auto: autoData,
  phone: phoneData,
};

console.log(normilizedData);
