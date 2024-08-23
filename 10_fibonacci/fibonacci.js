const fibonacci = function fib(n) {
    if (n == 0) return 0;
    else if (n < 0) return "OOPS";
    else if (n < 3) return 1;
    else return fib(n-2) + fib(n-1); 
};

// Do not edit below this line
module.exports = fibonacci;
