
if (4 + 3 === 7) {
    console.log("U Smurt!");
}

function sayHi() {
    console.log("Hey");
}

// Anonymous function

var sayBye = function () {
    console.log("Bye");
    return true;
}

console.log(typeof sayBye); // Function object

sayHi();
sayBye();

function checkDriverAge(age) {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge(prompt("What's your age?"));

// array
var animals = ["cat", "dog", "bird", "snake"];

console.log(animals[-1]); // Undefined

// Mixed arrays are allowed
var mixedArr = [234, "sfdoij", true, undefined, function() {console.log("meh");}];

// Function object has its own methods
mixedArr[4].toString();

// every (takes a Function as argument!)
[3, 2, 5].every(function sa(d) {return d > 0}) // true

// some
[3, 2, 5].some(function sa(d) {return d > 5}) // false

// map (takes a Function as argument)
var x = [3, 5, 2].map(function sq(a) {return a*a});

// reduce (takes a Function as argument; parameters of Function must be [accumulator, current])
function getSum(acc, num) {
  return acc + num;
}

[65, 44, 12, 4].reduce(getSum);

// Objects are COLLECTIONS of FIELDS and METHODS

var x = {
    name: "Boby",
    lastName: "Bots",
    id: 24234,
    isSmart: false,
    shout: function() {
        console.log("MY LEGS!!!!");
    }
}

x.shout();

x["name"] === x.name // true