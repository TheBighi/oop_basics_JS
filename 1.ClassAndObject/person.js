class Person {
    #name = "";
    #age = 0;
    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    setAge(age){
        this.#age = age;
    }
    getAge(){
        return this.#age;
    }
    printPerson(){
        console.log(`Persons name: ${this.#name}. Persons age: ${this.#age}`)
    }
    becomeOlder(){
        this.#age++;
    }
    isAdult(){
        return this.#age >= 18;
    }
}

module.exports = Person;