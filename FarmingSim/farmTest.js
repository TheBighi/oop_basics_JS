const BulkTank  = require('./bulktank.js');
const Cow  = require('./cow.js');
const MilkingRobot  = require('./milkingrobot.js');
const Barn = require('./barn.js')
const Farm = require('./farm.js')

// 1) Tühi kari
let farm = new Farm("Esko", new Barn(new BulkTank()));
console.log(farm.print());
console.log("");
console.log(farm.getOwner() + " is a tough guy!");
console.log("");

// 2) Kolm lehma, kohe prindi
farm = new Farm("Esko", new Barn(new BulkTank()));
farm.addCow(new Cow());
farm.addCow(new Cow());
farm.addCow(new Cow());
console.log(farm.print());
console.log("");

// 3) Elagu tunnike paar ja siis prindi
farm = new Farm("Esko", new Barn(new BulkTank()));
farm.addCow(new Cow());
farm.addCow(new Cow());
farm.addCow(new Cow());
farm.liveHour();
farm.liveHour();
console.log(farm.print());
console.log("");

// 4) Paigalda robot, lase lehmadel elada, siis lüpsi (manageCows)
farm = new Farm("Esko", new Barn(new BulkTank()));
const robot = new MilkingRobot();
farm.installMilkingRobot(robot);
farm.addCow(new Cow());
farm.addCow(new Cow());
farm.addCow(new Cow());
farm.liveHour();
farm.liveHour();
farm.manageCows();
console.log(farm.print());