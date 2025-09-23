const MyDate = require("./mydate")

const date1 = new MyDate(1,1,1992)
const date2 = new MyDate(1,1,1999)

date1.printDay()
date2.printDay()

console.log(date1.earlier(date2))
console.log(date2.earlier(date1))