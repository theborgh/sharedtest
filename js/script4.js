
const obj = {
    name: "gugu",
    age: 2,
    firstword: "gaga"
}

let {name, age} = obj; // same as let name = obj.name, age = obj.age;
const {firstword} = obj;

const field1 = "address";
const field2 = "country";

const obj2 = {
    [field1]: "neverland",
    [field1+"2"]: "paris", // evaluates the expression
    [field2]: "france or something"
}

const a = "firstfield";
const b = "secondfield";
const c = "thirdfield";
const d = 10;

const obj3 = {
    a,  // shorthand of a: a, b: b, c: c
    b,
    c
}

// Template strings
let s = `Hello the first field is ${a} the second is ${b} the third ${c} and the number is ${d+5}`;

// Default arguments
function getGreeting(name="Bobby", age=24, pet="horse") {
    return `Hello ${name} you are almost ${age+1} what a lovely ${pet} you have`;
}

getGreeting("Micky", 12);

// Symbols (normally used as identifiers for object properties)
let s1 = Symbol();
let s2 = Symbol('this is a symbol');
let s3 = Symbol('this is a symbol');

s2 === s3 // false

// Arrow functions
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;