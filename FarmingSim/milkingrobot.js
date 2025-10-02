class MilkingRobot{
    #bulktank = undefined
    constructor(){
        this.#bulktank = undefined
    }
    getBulkTank(){
        this.#bulktank.print()
    }
    setBulkTank(bulktank){
        this.#bulktank = bulktank
    }
    milk(cow){
        const x = cow.milk()
        this.#bulktank.addToTank(x)
    }
}

module.exports = MilkingRobot;