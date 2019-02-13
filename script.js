
function isPrime(n) {
    var nIsPrime = true;
    
    for(var i = 2; nIsPrime && i <= Math.sqrt(n); i++)
        if(n % i == 0)
            nIsPrime = false;
    
    return nIsPrime;
}

function printPrimesTo(n, sep) {

    for(var i = 2; i <= n; i++) {
        if(isPrime(i))
            document.write(i + sep);
    }
}