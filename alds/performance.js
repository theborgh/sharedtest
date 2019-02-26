/* eslint-disable no-console */

function isPrime(n) {
    var nIsPrime = true;
    
    for(var i = 2; nIsPrime && i <= Math.sqrt(n); i++)
        if(n % i == 0)
            nIsPrime = false;
    
    return nIsPrime;
}

function primesTo(n) {
    let arr = [];
    for(var i = 2; i <= n; i++) {
        if(isPrime(i))
            arr.push(i);
    }
    return arr;
}

let t0 = performance.now();
primesTo(1000);
let t1 = performance.now();
console.log(t1-t0);

let t2 = performance.now();
primesTo(10000);
let t3 = performance.now();
console.log(t3-t2);

let t4 = performance.now();
primesTo(100000);
let t5 = performance.now();
console.log(t5-t4);

// Now let's try something with a more predictable running time

let arr3 = [];
let arr4 = [];
let arr5 = [];

let time0 = performance.now();
for (let i = 0; i < 1000; i++) {
    arr3.push(i);
}
console.log(performance.now() - time0);

let time1 = performance.now();
for (let i = 0; i < 10000; i++) {
    arr4.push(i);
}
console.log(performance.now() - time1);


let time2 = performance.now();
for (let i = 0; i < 100000; i++) {
    arr5.push(i);
}
console.log(performance.now() - time2);

// 0.10000000474974513
// 1.400000008288771
// 8.90000001527369