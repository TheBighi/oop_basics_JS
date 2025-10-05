const BulkTank  = require('./bulktank.js');
const Cow  = require('./cow.js');
const MilkingRobot  = require('./milkingrobot.js');

const bulktank1 = new BulkTank()
const cow1 = new Cow()
const milkingrobot1 = new MilkingRobot()
milkingrobot1.setBulkTank(bulktank1)

bulktank1.print();

for (let i = 0; i < 2; i++) {
  cow1.print();
  console.log("Living..");
  for (let j = 0; j < 5; j++) {
    cow1.liveHour();
  }
  cow1.print();

  console.log("Milking...");
  milkingrobot1.milk(cow1);
  bulktank1.print();
  console.log("");
}