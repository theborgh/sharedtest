
/* When a function is time-expensive for any reason (HTTP requests, API, complexity)
it can be a good option to use async/await.
However, Javascript is SINGLE-THREADED. */

// setTimeout() params: function, timeToWait in milliseconds. 

console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3)
debugger;
for(let i = 4; i < 1000; i ++)
    console.log(i);

/* setTimerOut() is part of the WEB API, not JS!
When it's called, it gets passed to the API and is POPped OFF THE CALL STACK!
So, the next instructions can run immediately after, without waiting.
When the timer is up, the API adds the function to the CALLBACK QUEUE. 
The EVENT LOOP checks if the call stack is empty. If it's empty, 
it checks the CALLBACK QUEUE, where it gets back to the CALL STACK
and is finally executed. 

What happens if the second param of setTimeout() is 0?
 */