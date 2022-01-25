/*
PROBLEM
Given an array, identify how many nested levels has the array and return the number of levels

input: nested array
output: number
examples
- [1, [2]] // 2
- [1, [2], [3]] // 2
- [1, [2, [3]], [2]] // 3

ALGORITHM

declare a variable levels and set it to 1
declare a fucntion  countLevels that receives an array "arr" as a param
declare a variable newArray and set it to an empty array
decalre a variable addedOne and set it to false (this variable would track if we already added a level to levels when iterating over the elements of the same level)  
iterate over each element of arr
  if the element at i position is an array, push each element of this array to newArray
    if addedOne is false
      add one to levels
      set addedOne to true
if newArray length is biggger than 0
  call counLevels(newArray)
return levels

defien a function resetLevels that set the valuo of levels to 1
call this fucntion after every time countLevels is called
*/



let levels = 1;

function resetLevels() {
  levels = 1;
}

function countLevels(arr) {
  let newArray = [];
  let addedOne = false;
  
  arr.forEach(e => {
    if (Array.isArray(e)) {
      newArray.push(...e);
      if (!addedOne) {
        levels +=1
        addedOne = true
      }
    }
  });

  if (newArray.length > 0) {
    countLevels(newArray)
  } 

  return levels
}

console.log(countLevels([1, [2]])); // 2
resetLevels()
console.log(countLevels([1, [2], [3]] )) // 2
resetLevels()
console.log(countLevels([1, [2, [3]], [2]])) // 3
resetLevels()
console.log(countLevels([1, []])) // 2
resetLevels();
console.log(countLevels([[[[[[]]]]]])) // 6
