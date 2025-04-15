// Solution 1. Check if the array has at least 3 consecutive ascending or descending numbers.
function isShuffleWell(arr) {
  for(let i = 0; i < arr.length -2; i++) {
    if(arr[i+1] === arr[i]+1 && arr[i + 2] === arr[i] +2) return false;
    if(arr[i+1] + 1 === arr[i]  && arr[i + 2] === arr[i] - 2) return false;
  }
  return true;
}

console.log(isShuffleWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]))
console.log(isShuffleWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]))
console.log(isShuffleWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]))
console.log(isShuffleWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]))

/*
Problem: check if the array has at least 3 consecutive ascending or descending numbers.
         if so return false, otherwise return true.
Input: array of numbers
Output: boolean value 
Algorithm:

1 Create a fucntion called isShuffleWell that takes an array arr as an argument.
2 Iterate over the array with a for loop.
3 Check if arr[i] + 1 is equal to arr[i+1] and arr[i+2] is equal to arr[i] + 2 
4 If so returns false otherwise
5 check if arr[i] is equal to arr[i-1] and arr[i-1] is equal to arr[i - 2]
6 If so returns false otherwise
7 Return true


Problem Description:
Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.

Examples
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
// 1, 2, 3 appear consecutively

isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
// 9, 8, 7, 6 appear consecutively

isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
// No consecutive numbers appear

isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
// No consecutive numbers appear
Notes
Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
You will get numbers from 1-10.
*/