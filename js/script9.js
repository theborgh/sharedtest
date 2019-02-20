
// FOR OF (on Iterable object)

// basket can be an array or a string (iterable object)
const basket = ["apples", "bananas", "oranges"];

for (item of basket) {
    console.log(item);
} // prints the property values

// FOR IN (on Enumerable object)

const obj = {
    name: "corey",
    age: 22,
    title: "Mr Clean"
}

for (p in obj) {
    console.log(p);
} // prints the object properties

// for in enumerates the properties of an object

// for (item of obj) { // ERROR: an object is not ITERABLE, only ENUMERABLE! No order to the properties!
//     console.log(item);
// }

for(p in basket) { // An array is ITERABLE and, of course, also ENUMERABLE
    console.log(p);
}

const arr = [[0, 1], [2, 3], [4, 5]];

// this is just to test the debugging features on VS Code and DevTools. To actually flatten, use arr.flat()
debugger;
const flattened = arr.reduce((a, b) => a.concat(b), []);

// Maximum stack size depends on the browser
function maxCallStackSize0() {
    try {
        return 1 + maxCallStackSize0();
    } catch (e) {
        return 1;
    }
}
maxCallStackSize0(); // Opera: 36k Chrome: 19k

// ...and of course, on the number of parameters (the stack now also)
// contains pointers to those variables in the heap
function maxCallStackSize3(s1, s2, s3, s4) {
    try {
        return 1 + maxCallStackSize3(s1, s2, s3, s4);
    } catch (e) {
        return 1;
    }
}
maxCallStackSize3("hello", "how", "are", "you"); // Opera: 19k Chrome: 7k
