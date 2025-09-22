const Person  = require('./person');

const bob = new Person("Bob", 21);

console.log(bob);
console.log("Name: " + bob.getName());
console.log("Age: " + bob.getAge());