//solution 2. Refactored No need to slice the array. We can just check the first and last digit of the subarray.

function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length-2; i++) {
    if(arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count ++
    }
  }
  return count;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))

/*solution 1 not refactored. We are slicing the array from i up to i+3.
function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0 ; i < arr.length-2; i++) {
    let subArray = arr.slice(i, i + 3)
    if(subArray[0] === subArray[2] && subArray[0] !== subArray[1]) {
        count++
    }
  }
 return count;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))
*/

/*
PACER: 

Problem: identify the number of 3 digits subarrays/sequence of numbers that are boomerangs, meaning that the first and the last digit are the same, and the middle digit is different.
Input: array of numbers
Output: integer representing the number of boomerangs in the array. 
Restrictions:
- A single digit is not considered a boomerang
- A 3 digit subarray with the first and last digit being the same is not considered a boomerang

Algorithm:

- create a function called countBoomerangs
- Pass the function an array arr as an argument
- Initizalize a counter variable to 0
- Create a copy of the original array arrCopy
- iterate over the arr using a loop
- slice the current array from i up to i+2 
- assign the sliced array to a variable called subArray
- check if the first element and last element of the subArray are equal and if the middle element is different
- if the condition is true, increment the counter by one
- return the counter 

Code:
function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) {
      count++;
    }
  }
  return count;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))

---------------------------

Number of Boomerangs
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
Notes
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

*/