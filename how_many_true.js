function countTrue(arr) {
  let count = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === true) count++;
  }
  return count;
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))


/*

PACER:

Problem: get the number of true values in an array. 
input: array of boolean values
output: number of true values in the array

Restrictions:
- Return 0 if given an empty array
- All array items are of the type bool (true or false)

Algorithm:

- Create a fucntion called countTrue
- Pass the array as an argument
- Initialize a counter variable to 0
- Iterate over the array using a for loop
- if the value of the current element is tru, add one to the conter


PROBLEM:
Create a function which returns the number of true values there are in an array.


Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/