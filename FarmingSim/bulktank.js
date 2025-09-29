class BulkTank {
    #capacity = 2000
    #volume = 0
    
    constructor(capacity=2000) {
        this.#capacity = capacity
        this.#volume = 0
    }
    GetCapacity() {
        return this.#capacity
    }
    GetVolume() {
        return this.#volume
    }
    howMuchFreeSpace() {
        return this.#capacity - this.#volume
    }
    addToTank(amount) {
        if (this.#volume + amount > this.#capacity) {
            console.log("Tank cannot fit anymore")
        }
        else{
            this.#volume += amount;
        }
    }
    getFromTank(amount) {
        if (this.#volume - amount < 0) {
            console.log("Cannot take this amount from tank because not enough")
        }
        else{
            this.#volume -= amount
        }
    }
}

module.exports = BulkTank;