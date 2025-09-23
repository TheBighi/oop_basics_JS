class MyDate{
    #day = 0
    #month = 0
    #year = 0
    constructor(day, month, year){
        this.#day = day
        this.#month = month
        this.#year = year
        this.isValid()
    }

    isValid() {
        if (!Number.isInteger(this.#day)) {
            console.log("Päev peab olema täisarv");
            return false;
        }
        if (!Number.isInteger(this.#month)) {
            console.log("Kuu peab olema täisarv");
            return false;
        }
        if (!Number.isInteger(this.#year)) {
            console.log("Aasta peab olema täisarv");
            return false;
        }
        if (this.#month < 1 || this.#month > 12){
            console.log("Kuu peab olema 1 ja 12 vahel")
            return false
        }
        let daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
        if (this.#day > daysInMonths[this.#month-1]){
            return false
        }
        else{
            return true
        }
    }

    setDay(day){
        this.#day = day
        this.isValid()
    }
    setMonth(month){
        this.#month = month
        this.isValid()
    }
    setYear(year){
        this.#year = year
        this.isValid()
    }

    printDay(){
        if(this.isValid()){
            console.log(this.#day+'.'+this.#month+'.'+this.#year)
        }
        else {
            console.log("invalid date")
        }
    }
    earlier(DateToCompare){
        if (this.#year < DateToCompare.#year) { return true }
        else if (this.#month < DateToCompare.#month) { return true }
        else if (this.#day < DateToCompare.#day) { return true }
        else {
            return false
        }
    }
}

module.exports = MyDate