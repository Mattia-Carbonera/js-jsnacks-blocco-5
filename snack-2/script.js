const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let peopleName = [];
people.forEach((people) => peopleName.push(people.name));

console.log("snack-2");
console.log(`${peopleName[0]}, ${peopleName[1]}, ${peopleName[2]}`);
