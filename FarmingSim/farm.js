const BulkTank  = require('./bulktank.js');
const Cow  = require('./cow.js');
const MilkingRobot  = require('./milkingrobot.js');
const Barn = require('./barn.js')

// Lauda loomine
const barn = new Barn(new BulkTank());
console.log("Barn: " + barn.print());

// Paigalda robot
const robot = new MilkingRobot();
barn.installMilkingRobot(robot);

// Üks lehm
const ammu = new Cow();
ammu.liveHour();
ammu.liveHour();

// Lüpse üksik lehm
barn.takeCareOf(ammu);
console.log("Barn: " + barn.print());

// Loo nimekiri ja toida (elu tunnid) ning lüpsa kõik
const cowList = [ammu, new Cow()];
for (const cow of cowList) {
  cow.liveHour();
  cow.liveHour();
}

// lüpsa kõik
barn.takeCareOfAll(cowList);
// või: barn.takeCareOfCollection(cowList);

console.log("Barn: " + barn.print());