const Person  = require('./person');

const person1 = new Person("Bob", 21);
const person2 = new Person("Spongebob", 23);
const person3 = new Person("Alice", 19);

const persons = [person1, person2, person3]

while (person1.getAge() <= 40){
    person1.becomeOlder();
}

person1.printPerson();
person1.becomeOlder();
person1.printPerson();

console.log(person1.isAdult())

persons.forEach(person => {
    if (person.isAdult()){
        console.log(person.getName() + " is an adult")
    }
    else{
        console.log(person.getName() + " is not an adult")
    }
})