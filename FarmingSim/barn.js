class Barn{
    #bulktank = undefined
    #milkingrobot = undefined
    constructor(bulktank, milkingrobot=undefined){
        this.#bulktank = bulktank
        this.#milkingrobot = milkingrobot
    }
    getBulkTank(){
        this.#bulktank.print()
    }
    installMilkingRobot(milkingrobot){
        this.#milkingrobot = milkingrobot
        this.#milkingrobot.setBulkTank(this.#bulktank)
    }
    takeCareOf(cow){
        if (!this.#milkingrobot){
            throw new Error("No milking robot");
        }
        this.#milkingrobot.milk(cow)
    }
    takeCareOfAll(cows){
        if (!this.#milkingrobot){
            throw new Error("No milking robot");
        }
        for (const cow of cows) {
            this.#milkingrobot.milk(cow)
        }
    }
    print(){
        return this.#bulktank.print()
    }
}

module.exports = Barn;