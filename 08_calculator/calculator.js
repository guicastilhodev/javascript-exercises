const add = function(n1,n2) {
	return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1 - n2;
};

const sum = function(args) {
  let soma = 0;
      for (let i = 0; i < args.length; i++) {
        soma += args[i];
    }
    return parseInt(soma);
};

const multiply = function(args) {
  let mul = 1;
  for (let i = 0; i < args.length; i++) {
    mul *= args[i];
  }
  return parseInt(mul);
};

const power = function(n1,n2) {
	let pow = 1;
  for (let i = 0; i < n2; i++) {
    pow *= n1;
  }
  return pow;
};

const factorial = function fat(n) {
    if (n == 0 || n == 1) return 1;
    else return n = n * fat(n-1); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
