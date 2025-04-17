// Solution 3:
// - Map how many times appears each number of the first array in all of the arrays
//   Initialize a numbersCounter Map
//   Set every element from firstArray as a key to numbersCounter and their value to 0
//   iterate over the matrix array
//     for each sub-array check if each element matix[i][j] appears in Map -> numbersCounter.has(matrix[i][j]). This could be implemented with nested for loops or one for loop and forEach build in function.
//     if the current element appears in Map numbersCounter, add one to the value of the corresponding key
// - Create an array uniqueNumbers with the numbers that appears exactly matrix.length times
//   Iterate over numbersCounter map and check the values that equals matrix.length . If the previous condition is fulfilled add the corresponding key to the uniqueNumbers array. 
// - Return the minimum number from the previous array. You can use Math.min(...uniqueNumbers)


function minimumInteger(matrix) {
  if(matrix.length === 0 || matrix.some(arr => arr.length === 0)) { 
     return -1;
  };
  
  let firstArray = matrix[0];
  let numbersCounter = new Map();
  let uniqueNumbers = [];
  firstArray.forEach(num => numbersCounter.set(num, 0));
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(numbersCounter.has(matrix[i][j])) {
        numbersCounter.set(matrix[i][j], (numbersCounter.get(matrix[i][j]) || 0) + 1);
      };
    };  
  };
  
  numbersCounter.forEach((value, key) => {
    if(value === matrix.length) uniqueNumbers.push(key);
  }); 

  return uniqueNumbers.length > 0 ? Math.min(...uniqueNumbers) : -1;
};

// test
console.log(minimumInteger([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // -1
console.log(minimumInteger([[1, 2, 3, 5, 8], [2, 5, 7, 8], [1, 3, 5, 7, 9]])); // 5
console.log(minimumInteger([[2, 4, 6, 8], [1, 2, 3, 4, 5, 6], [2, 6, 10]])); // 2 
console.log(minimumInteger([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // -1
console.log(minimumInteger([[1, 1, 2, 3], [1, 2, 3], [1, 3, 4, 5]])); // 3  
console.log(minimumInteger([[]])); // -1
console.log(minimumInteger([[5], [5], [5, 6, 7]])); // 5
console.log(minimumInteger([[], [], []])); // -1


/*
function minimumInteger(matrix) {
   if (matrix.length === 0 || matrix.some(row => row.length === 0)) {
    return -1;
   }

   let firstArray = matrix[0];
   let countIntegers = new Map(); // Declare a Map data Structure to count the number of times each integer appears in the first array.
   firstArray.forEach(e => countIntegers.set(e, 0)) // Initialize the Map with the elements of the first array as keys and 0 as values.
    
   for (let i = 0; i < matrix.length; i++) { // count the number of each element in the subarrays.
     matrix[i].forEach(e => {
        if (countIntegers.has(e)) {
            countIntegers.set(e, (countIntegers.get(e) || 0) + 1)
        }
     })
   }
   
   let uniqueIntegers = [];
   
   countIntegers.forEach((value, key) => {
    if(value === matrix.length) {
        uniqueIntegers.push(key)
    }
   })

   if (uniqueIntegers.length === 0) return -1; // if there are no unique integers, return -1.
   
   return Math.min(...uniqueIntegers); // return the minimum integer in the array.
}

console.log(minimumInteger([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // -1
console.log(minimumInteger([[1, 2, 3, 5, 8], [2, 5, 7, 8], [1, 3, 5, 7, 9]])); // 5
console.log(minimumInteger([[2, 4, 6, 8], [1, 2, 3, 4, 5, 6], [2, 6, 10]])); // 2 
console.log(minimumInteger([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // -1
console.log(minimumInteger([[1, 1, 2, 3], [1, 2, 3], [1, 3, 4, 5]])); // 3  
console.log(minimumInteger([[]])); // -1
console.log(minimumInteger([[5], [5], [5, 6, 7]])); // 5
console.log(minimumInteger([[], [], []])); // -1



Problem: find the smallest integer that appears in all inner arrays. 
Input: two dimensional array of positive integers
Output: integer

BETTER APPROACH Algorithm:
- Create a fucntion that takes a two dimensionnal array as an argument. 
- If the argument matrix length is 0 or some of the subarrays has length 0, return -1. 
- Create a Map of the first array where the keys are the elements of matix[0] and the values are the times each key appears in every subarray.
    use forEach to iterate through the Map. If the Map has the current eleemnt  as a key, add 1 to the value of the current key. 
- Create a uniqueIntegers array initialized to an empty array.
- Iterate through the map and check if the value of the map is equal to the matrix.length.
    
- If it is, push the key to the uniqueIntegers array.
- Return the min integer in the array.

--------------------------------------------------------

BAD APPROACH Algorithm:
1. Create a function minimumInteger that takes as an argument a two dimensional array of positive integers.
2. Validate if the argument.lenght is 0, or some of the inner arrays are empty, return -1.
2. Create a repeatedIntegers array initialized to an empty array.
3. Initialized a variable fistArray and assign it the first array of the outer array.
4. Iterate through the firstArray
5. For each inner array, iterate through the elements and compare each element of the inner array to the element of the firstArray.
6. If the element of the outer array equals the element of the firstArray, push the element to the repeatedIntegers array.
7. If repeatedIntegers lenght is 0 Return -1
8. Otherwise create an array of uninique numbers that are repeated at least matrix.length times and push them to the array.
  create a map of the repeatedIntegers array. Where the key is the integer value and the value is the number of times it appears in the repeatedIntegers array.
  iterate through the map and check if the value of the map is equal to the matrix.length.
  if it is, push the key to the uniqueIntegers array.
9. Return the min integer in the array.

The previous approach is not efficient because its time complexity. 


Given a matrix (2D array) of m subarrays, where each subarray contains positive integers in ascending order, find the smallest positive integer that appears in all of the subarrays.
if no such integer exists, return -1.
const testCases = [
    {
        input: [[1, 2, 3], [2, 3, 4], [1, 2, 3, 5]],
        expected: 2
    },
    {
        input: [[1, 2, 3, 5, 8], [2, 5, 7, 8], [1, 3, 5, 7, 9]],
        expected: 5
    },
    {
        input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        expected: -1
    },
    {
        input: [[2, 4, 6, 8], [1, 2, 3, 4, 5, 6], [2, 6, 10]],
        expected: 2
    },
    {
        input: [[1, 1, 2, 3], [1, 2, 3], [1, 3, 4, 5]],
        expected: 1
    },
    {
        input: [[]],
        expected: -1
    },
    {
        input: [[5], [5], [5, 6, 7]],
        expected: 5
    },
    {
        input: [[], [], []],
        expected: -1
    }
];
*/