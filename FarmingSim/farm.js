const BulkTank  = require('./bulktank.js');
const Cow  = require('./cow.js');

const tank1 = new BulkTank()  // 2000

console.log(tank1.GetCapacity())
tank1.addToTank(7)
tank1.getFromTank(5)
tank1.print()
console.log("-------COW STARTS-------")
const cow = new Cow("Awesome cow");
cow.print();

/** @type {Alive} */ (cow).liveHour();
cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.print();

/** @type {Milkable} */ (cow).milk();
console.log("");

const cow1 = new Cow("Ammu");
cow1.print();
cow1.liveHour();
cow1.liveHour();
cow1.print();
cow1.milk();
cow1.print();