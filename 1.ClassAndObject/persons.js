const Person  = require('./person');

const person1 = new Person("Bob", 21, 80, 1.90);
const person2 = new Person("Spongebob", 23, 40, 1.60);
const person3 = new Person("Alice", 19, 150, 1.50);

//const persons = [person1, person2, person3]

//persons.forEach(person => {
//    if (person.isAdult()){
//        console.log(person.getName() + " is an adult")
//    }
//    else{
//        console.log(person.getName() + " is not an adult")
//    }
//})

console.log(person1.getName() + "'s BMI is: " + person1.getBMI())
console.log(person2.getName() + "'s BMI is: " + person2.getBMI())
console.log(person3.getName() + "'s BMI is: " + person3.getBMI())