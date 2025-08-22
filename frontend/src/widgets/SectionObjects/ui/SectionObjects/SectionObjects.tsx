type PersonKeys = keyof typeof person;

const person = {
  name: "Max",
  age: 20,
  tempAge: 44,

  substract() {
    return this.tempAge - this.age;
  },
};

for (let key in person) {
  console.log(key);
  console.log(person[key as PersonKeys]);
}

console.log(person.substract());

const SectionObjects = () => {
  return (
    <section>
      <h2>Section Opjects</h2>
    </section>
  );
};

export default SectionObjects;
