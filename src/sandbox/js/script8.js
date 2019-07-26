/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// ES7
// .includes()

"hello".includes("o"); // true
"hello".includes("e", 1); // true
"hello".includes("e", 2); // false

const pets = ["cat", "dog", "snake"];
pets.includes("snake") // true
pets.includes("caterpillar") // false

// Exponential operator

2 ** 8 // 256

// ES8
// String padding

"hello".padStart(5); // "hello"
"hello".padStart(10); // "     hello"
"hello".padEnd(10); // "hello     "

// trailing commas in function parameter list and calls

const f = (a, b, c, d,) => a-b+c*d 
f(1, 4, 5, 1) // this works
f(1, 4, 5, 1,) // also works

// .values() and .entries()

const obj = {
    name1: "pippo",
    name2: "geordie",
}

Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
});

Object.entries(obj).forEach(e => console.log(e)) // all entries and values

Object.values(obj).forEach(v => console.log(v)); // all values

const obj1 = Object.entries(obj).map(e => {
    return e[1] + e[0].replace("name", "");
});

const obj2 = Object.entries(obj).map((e, i) => {
    let tmp = e;
    tmp[0] = i;
    return tmp;
})

let obj3 = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

// with map/reduce
let s = Object.entries(obj3).map(e => `${e[0]} ${e[1]}`)
                            .reduce((acc, curr) => `${acc} ${curr}`);

// easier way
let s1 = Object.entries(obj3).map(value => value.join(" ")).join(" ");