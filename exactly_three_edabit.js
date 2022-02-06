/*

Problem Statement
You are given a number n. Determine whether n has exactly 3 divisors or not.

PACER

PROBLEM - Pacer
For a given number n determine if it has exactly 3 divisors. A divisor of a number is a number you divide another number by and get as a result an integer.
If it has exactly 3 divisors return true otherwise return false.

input: number
output: boolean

Examples:
isExactlyThree(4) ➞ true
// 4 has only 3 divisors: 1, 2 and 4

isExactlyThree(12) ➞ false
// 12 has 6 divisors: 1, 2, 3, 4, 6, 12

isExactlyThree(25) ➞ true
// 25 has only 3 divisors: 1, 5, 25

Rules
- 1 <= n <= 10^12

ALGORITHM - pAcer

define a function isExactlyThree that receives a number n as its param
  declare a variable divisors and set it to 0
  decalre a variable result and set it to true
  define a for loop wher i = 1 and stops when i is bigger than n. Add one to i per iteration
    if counter is bigger than three
      set result to false
      break
    if n/i is integer add one to divisiors othewise continue
  return result

*/

/*
Code option 1
This will raise a time limit exceded for large numbers
The following algorithm woks but it takes too long when using big numbers

function isExactlyThree(n) {
  let divisors = 0;

  for(let i = 1; i <= n; i += 1) {

    if (divisors > 3) {
        break;
    }

    if (Number.isInteger(n/i)) divisors += 1;
  }

  return divisors === 3 ? true: false;
}
*/

/*

Code Option 2

This going to raise a time limit exceded error for large numbersThis algorithms assumes that every number has at least 2 divisors, when it is divided by 1 and
when it is divided by itself you have as a result an integer. Nevertheless, the performance is
pretty poor for large numbers.

function isExactlyThree(n) {
  let divisors = 2;

  for(let i = 2; i < n; i += 1) {



    if (n % i === 0) {
        divisors += 1
    }
  }

  console.log(divisors)
  return divisors === 3 ? true : false;
}

*/

/*Code option 3 - refatored to support large numbers as input -

Razoning:
Any number that is a multiple of ten has more than 3 divisors (1, 2, its half, itselve)

Algorithm
  define a function isExactlyThree that receives one numeric param n
    if n is multiple of 10 return false (all multiples of 10 have more than 3 divisors)
    declare a variable totalDivisors and set it to 0 (this will track the number of divisors)
    decalre a variable nsq and set it to the square root of n
    loop from 1 to a number equal to nsq
      if totalDivisors is grater than 3 break the loop
      if n module the iterator equals 0 (the iterator is a divisor of n)
        if totalDivisors is 0
          add 2 to totalDivisors (evry number has at least 2 divisors 1 and itself)
        otherwise
          add one to totalDivisors

    return true if totalDivisors equals 3, false otherwose. 

This algorithm uses a O(sqr(n))
To understand why we can iterate up to the square root of n instead of up to n
"if you have a divisor d >sqrt(n), 
then its complimentary divisor n/d will be less than n/sqrt(n) which is equal to sqrt(n) 
so you will have already have found n/d by the end of your algo and therefore also n/(n/d) 
which is just d." - 
  https://stackoverflow.com/questions/54844550/why-is-it-required-to-check-for-values-upto-sqrtn-to-determine-divisors-of-a
*/

function isExactlyThree(n) {
  if (n % 10 === 0) return false;
	let totalDivisors = 0;
  let nsq = Math.sqrt(n);

  for (let i = 1; i <= nsq; i += 1) {

    if (totalDivisors > 3) {
      break;
    }

    if (n % i === 0) {
      if(totalDivisors) {
        totalDivisors += 2
      } else {
        totalDivisors += 1
      }

    }
  }

  return totalDivisors === 3 ? true : false;
}

console.log(isExactlyThree(32)) // false
console.log(isExactlyThree(1))  // false
console.log(isExactlyThree(4)) // true
console.log(isExactlyThree(12)) // false
console.log(isExactlyThree(25)) // true
console.log(isExactlyThree(27550356289)) // true
console.log(isExactlyThree(121)) // true
console.log(isExactlyThree(10)) // false

/*
Refactoring: additional algorithms that work

Refactor 1

function isExactlyThree(n) {
	let sqrt = Math.sqrt(n)
	for(let i = 2; i < sqrt; i++)
		if(n % i === 0) return false
	return Number.isInteger(sqrt) && n > 1
}

Refactor 2

function isExactlyThree(n) {
	res = []
  end = Math.floor(Math.sqrt(n));
  for (i = 1; i <= end; i++) {
    if (n % i === 0) {
      res.push(i);
      if (i * i !== n) res.push(n / i);
    }
  }
  return res.length == 3;
}
*/
