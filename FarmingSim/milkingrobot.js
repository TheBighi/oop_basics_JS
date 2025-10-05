class MilkingRobot{
    #bulktank = undefined
    constructor(bulktank = undefined){
        this.#bulktank = bulktank
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