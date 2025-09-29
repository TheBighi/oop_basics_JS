const BulkTank  = require('./bulktank');

const tank1 = new BulkTank(100)

console.log(tank1.GetCapacity())
tank1.addToTank(10)
console.log(tank1.GetVolume())
tank1.getFromTank(5)
console.log(tank1.GetVolume())