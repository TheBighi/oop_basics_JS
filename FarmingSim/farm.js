const BulkTank  = require('./bulktank.js');
const Cow  = require('./cow.js');
const MilkingRobot  = require('./milkingrobot.js');

const cow = new Cow();
cow.print();

cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.print();

cow.milk();
cow.print();
console.log("");

const cow1 = new Cow("Ammu");
cow1.print();
cow1.liveHour();
cow1.liveHour();
cow1.print();
cow1.milk();
cow1.print();