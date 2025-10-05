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
        return Math.ceil(this.#volume * 10) / 10
    }
    print(){
        console.log("Bulktank: " + parseFloat(this.#volume).toFixed(2) +"/" + parseFloat(this.#capacity).toFixed(2))
    }
    howMuchFreeSpace() {
        return this.#capacity - this.#volume
    }
    addToTank(amount) {
        if (this.#volume + amount > this.#capacity) {
            this.#volume = 0
        }
        else{
            this.#volume += amount;
        }
    }
    getFromTank(amount) {
        if (this.#volume - amount < 0) {
            this.#volume = this.#capacity
        }
        else{
            this.#volume -= amount
        }
    }
}

module.exports = BulkTank;