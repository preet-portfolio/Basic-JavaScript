const name = "Preet Panchal";
let profession = "Web Developer";

// data Structure
//piece of memory

const str = "A string"; //string
const num = 3; //Number
const flt = 3.14; //float
const bool = true; //boolean
const list = ["Iten 1", 2, "Three", 3.14, []]; //Array = list
const thing = null; // Has noting in it
const notDefined = undefined; //undefined
const getAge = function () {
  return 24;
}; //This is a Function
const obj = {
  name: "Preet",
  profession: "Web Developer",
}; //Object; can be accessed with obj['name']

//conditional statements
const twitter = "@ElonMusk";

if (twitter == "@ipreetpanchal") {
  //Execute this code
  console.log("Twitter handle is @ipreetpanchal");
} else {
  //Else execute this code if it's not @ipreetpanchal
  console.log(twitter, "is the twitter handle");
}

const age = 18;
if (age >= 18) {
  console.log("You are old enough to vote");
}
if (age >= 21) {
  console.log("You can smoke weed");
} else {
  console.log("You can't smoke weed Because you are not old enough");
}

const Name = "Preet";
if (Name == "Mason") {
  console.log("Welcome Mason!");
} else if (Name == "Preet") {
  //do something
  console.log("Welcome Preet!");
} else {
  console.log("Welcome Guest!");
}

//The Document Object Model(DOM)
