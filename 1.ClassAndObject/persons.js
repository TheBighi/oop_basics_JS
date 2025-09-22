const { Person }  = require('./person');

const bob = new Person()

console.log(bob)
console.log("Name: " +bob.getName())
console.log("Age: " +bob.getAge())