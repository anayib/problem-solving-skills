/*
PACER

PROBLEM - Pacer

  Create a function that recieves a nested array and an element as arguments
  and returns a nested array of two dimensions arrays where the firts element represents
  the nested level and the second the times that the element passed as an argument appears at that level in the array passed as argument.

  Examples
    freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
    ➞ [[0, 1], [1, 2], [2, 3]]
    // The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.

    freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
    ➞ [[0, 3], [1, 4], [2, 0]]

    freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
    ➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]

    Desk Check for freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5, 10]], 5)

      Example
        level 0
          [1, 5, 5, [ 5, [ 1, 2, 1, 1 ], 5, 5 ], 5, [ 5, 10 ] ]
        level 1
          [5, [1, 2, 1, 1 ], 5, 5, 5, 10]
        level 2
          [ 1, 2, 1, 1 ]


  Input: nested array
  Output: nested array

  Rules:
    - The default level of an array starts at 0
    - Output the nested levels in order
    - Output 0 for the frequency if a particular level of the nested array has no instances of the element



ALGORITHM - pAcer -

Option 1 WRONG algorithm

Declare a variable "result" and assign as its value an empty array
Declare a variable called level and set it to 0
Define a function freqCount that receives a nested array "arr" and an element "e" as a param
   push a new array to result where the first element is count and the second is 0
  iterate over each element of arr
    if the current element equals "e", add one to result[1]
    if the current element is an array
      add 1 to level
      call freqCount where the first param is arr[i] and the second "e"
  return result
---------------------------------------------------------------------------

Option 2 WRONG algorithm

declare a variable result a set it to an empty array
declare a function freqCount that receives an array arr and a number num as params
  decalre a variable level and set it to 0
  declare a variable levelArr and set it to an array where the first element is level and the second 0
  declare a variable levelCounted and set it to false

  push levelArr to response
  iterate over arr
    if the current element of arr equals number
      add one to levelArr[1]
    else if the current element of arr is an array
      declare a new variable newArr a set it to all the elements of the current element array
      if (!levelCounted === false) {
        levelCounted = true
        add one to level
      }
      call freqCount(newArr, num)

  return result

--------------------------------------------------------
Option 3 This works well

declare a function freqCount that recieves an array arr and a number num as params
  declare a function calculate that receives 3 params, arr, num and a counter which by default is set to zero
    declare a variable levelArray and set it to an array where the first element is counter and the second 0 - counter will track the neting depth of the array -
    declare a variable nextLevelArray and set it to an empty array - nextLevelArray will be set to the next arr passed as a param to the freqCount recursively
      iterate over every element of the array arr
        if the current element e equals n
          add one to levelArray[1]
        otherwise if the current elment is an array
          push every element of the e array to nextLevelArray

      if nextLevelArray lenght equals 0
        return an array which element is levelArray
      otherwise
        return levelArray concatenated to the returned value from calling calculate receiveing as params nextLevelArray, num, and counter += 1
  call calculate passing arr, num and counter set to 0



Lerarnings for recursion
- If you need a counter you need to pass it to the fucntion you are going to be calling recrusively
- If the main function is limitted to some strict number of params, you need to include the function to be called recursively into the body of the main function
- To return an accumulative/reduced result from a recursive function
    - identify the simplest base case. For this problem it is when there is no longer a nextArray, so you retrun the current levelArr
    - identify how to add the next recursive call to the previous returned result


----------------------
CODE - paCer

function freqCount(arr, num) {

  function calculate(arr, num, counter = 0) {

    let levelArr = [counter, 0];
    let nextLevelArray = [];

    arr.forEach( e => {
      if (e === num) {
        levelArr[1] += 1;
      } else if (Array.isArray(e)) {
        nextLevelArray.push(...e);
      }
    });

    return nextLevelArray.length === 0 ? [levelArr] : [levelArr].concat(calculate(nextLevelArray, num, counter + 1));

  }

  return calculate(arr, num, 0);
}

-----------------
REFACTOR - paceR
*/

const freqCount = (arr, num, depth = 0) => 
  !arr.length ? [] : 
  [
	  [depth, arr.filter(e => e === num).length],
	  ...freqCount(arr.filter(Array.isArray).flat(), num, depth + 1)
  ];

console.log(freqCount([2, [1, 2], 2], 2)) // [[0, 2], [1, 1]]
console.log(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5, 10]], 5)); // [[0, 3], [1, 4], [2, 0]]
console.log(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)) // [[0, 1], [1, 2], [2, 3]]
console.log(freqCount([1, 1, 1, 1], 1)); // [[0, 4]]
console.log(freqCount([1, 1, 2, 2], 1)) // [[0, 2]]
