// Require asleep 
var asleep = require("asleep");

// A counter
var co = 1;

// A loop that works like an interval
while(1){
  await asleep(2000);
  console.log("Hi there " + co++);
}
