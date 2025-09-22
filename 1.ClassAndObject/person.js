class Person {
    #name = "";
    #age = 0;
    #weight = 0
    #height = 0
    constructor(name,age, weight, height){
        this.#name = name;
        this.#age = age;
        this.setWeight(weight)
        this.setHeight(height)
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
    setWeight(weight) {
        if (weight <= 0) {
            console.warn("Invalid weight. Defaulting to 0.");
            this.#weight = 0;
        } else {
            this.#weight = weight;
        }
    }

    getWeight(){
        return this.#weight
    }
    setHeight(height) {
        if (height <= 0) {
            console.warn("Invalid height. Defaulting to 0.");
            this.#height = 0;
        } else {
            this.#height = height;
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
    getBMI() {
            if (this.#height <= 0 || this.#weight <= 0) return 0;
            return Number((this.#weight / (this.#height * this.#height)).toFixed(2));
    }
}

module.exports = Person;
