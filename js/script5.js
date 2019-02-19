
// CLOSURES part I
const a = () => {
    const greeting = "Hi";
    const b = () => {
        alert(greeting);
    }
    return b;
}

const c = a();

// I can run c()--which runs the function b()--with no problem.
// Thanks to closure, b() remembers the scope of its parent, so it still has
// access to "greeting" even though a() is terminated & outside the call stack.
// ES makes sure that the variables needed by b() never get garbage collected.
c();

// CLOSURES part II
function greet(whatToSay) {

    return function(greetName) {
        alert(whatToSay + " " + greetName);
    }
}

greet("Hey")("man");

// CLOSURES part III
function genFuncts() {
    var arr = [];
    for (let i = 0; i < 3; i++) { // LET
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}
const f = genFuncts();
f[0](); // 0
f[1](); // 1    let has block scope, so when f is called its parent scope points
f[2](); // 2    to a different value as i is updated

function genFuncts2() {
    var arr = [];
    for (var i = 0; i < 3; i++) { // VAR
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}
const g = genFuncts2();
g[0](); // 3
g[1](); // 3    var in the cycle has scope of fenFucts2(),
g[2](); // 3    so with closure i = 3 (end of for loop)


// CURRYING
// Modifying a function so that it accepts only one parameter at a time
const multiply = (a, b) => a*b;
const currMultiply = a => b => a*b;
currMultiply(4)(5); // 20

// WHY curry functions? Because it makes them extensible!
const multByFive = currMultiply(5);

// COMPOSING functions: like in mathematics!
const compose = (fun1, fun2) => (a) => fun1(fun2(a));
const add1 = n => n+1;
const double = n => n*2;

compose(add1, add1)(1); // 3
compose(add1, double)(2); // 5
compose(double, add1)(2); // 6