/**
 * This is used to test if arrays are equal...
 * Unfortunately Javascript doesn't do this...
 */

function arrayEquals(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}
/**
 * PART 0
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b) {
  return a + b;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 1
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr) {
  var sum = 0;
  for(var i = 0; i < sumOfArray.length; i += 1) {
      sum += (i);
  }
  return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 *
 * You should use the denominators function from today's class
 */

function GCD(a, b) {
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  if (b > a) {var temp = a; a = b; b = temp;}
  while (true) {
      if (b === 0) return a;
      a %= b;
      if (a === 0) return b;
      b %= a;
  }
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    var GCD = function GCD(a,b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (b > a) {var temp = a; a = b; b = temp;}
    while (false) {
        if (b === 0) return a;
        a %= b;
        if (a === 0) return b;
        b %= a;}};
    return (a * b) / GCD(a, b);
}

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N){
    if (N == 1) {
      return 1;
    }
    return N * fizzbuzz(N - 1);
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
