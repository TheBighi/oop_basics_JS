class Person {
    #name = "";
    #age = 0;
    #weight = 0
    #height = 0
    constructor(name,age, weight, height){
        this.#name = name;
        this.#age = age;
        this.#weight = weight
        this.#height = height
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
    setWeight(weight){
        if (weight < 0){
            this.#weight = weight
        }
        else{
            console.warn("Weight cannot be negative");
        }
    }
    getWeight(){
        return this.#weight
    }
    setHeight(height){
        if (height < 0){
            this.#height = height
        }
        else{
            console.warn("Height cannot be negative");
        }
    }
    getHeight(){
        return this.#height
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
    getBMI(){
        return Number((this.#weight / (this.#height * this.#height)).toFixed(2))
    }
}

module.exports = Person;