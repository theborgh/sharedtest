/* eslint-disable no-console */

// A Promise is an OBJECT that may produce a single value sometime in the future, or a reason why a value could not be obtained.

// A Response is also an object. The code inside aPromise.then() gets executed once there is a server response.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data));

/*

fetch() returns a Promise object which gets passed as an argument to the .then() method. In the body of .then(), there can be two functions: the first gets executed if the promise is fulfilled, the second if there is a mistake (code between 200 and 399 === success, over 400 === error).

The body of the first .then() is:

response => response.json()

There is only one function, which gets executed if the Promise is resolved (nothing happens if it's not resolved, because there's second function to provide error handling)

"response" is the result of fetch() that gets passed to then(). The json() method produces yet another Promise object that contains an array of 10 items.

.then(data => console.log(data)

This Promise gets passed as an argument as "data" and gets logged in the console.

The same code with error logging would look like this:

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json(), () => console.log("There was an error fetching the file"))
.then(data => console.log(data), () => console.log("The data could not be converted to JSON format"))

*/

// The then() method is applied to a promise and RETURNS ANOTHER PROMISE, allowing chaining.

/* from stackoverflow.com/questions/3884281/what-does-the-function-then-mean-in-javascript

* Each asynchronous task returns a Promise object.

* Each Promise will have a then() method that can take up to two arguments, a SUCCESS handler and an ERROR handler.

* The success or error handler in the then method will be called ONLY ONCE, AFTER the asynchronous task finishes.

* The then() method will return a promise

* Each handler (success or error) can return a value WHICH WILL BE PASSED AS AN ARGUMENT TO THE NEXT FUNCTION IN THE CHAIN

* If a handler returns a promise (makes another asynchronous request), then the next handler (success or error) will be called only after that request is finished.

*/

const promise = new Promise((resolve, reject) => {
    let cond = true;
    if (cond) {
        resolve('Everything worked');
    } else {
        reject('It didn\'t work');
    }
})

promise.then(result => console.log(result)); // Everything worked

promise
    .then(result => result + "!")
    .then(res => console.log(res));

promise
    .then(result => result + "!")
    .then(res => { 
        throw Error;
        let unreachableCode = true;
        return unreachableCode;
    })
    .catch(() => console.log("An error was thrown")) // only catches errors up to here
    .then(r => r + "?");


// PROMISE.ALL

const prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hi");
});

const prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "How");
});

const prom4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Are");
});

const prom5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "You");
});

Promise.all([prom2, prom3, prom4, prom5])
    .then(values => {
        // Only executes this block when ALL promises are resolved
        // Using the values in the specified order
        console.log(values); 
    });

// A PRACTICAL EXAMPLE

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(urls.map(url => {
    return fetch(url)
        .then(resp => resp.json());
}))
    .then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    })
    .catch(() => console.log("There was an error"));