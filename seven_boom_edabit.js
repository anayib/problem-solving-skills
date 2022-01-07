/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

PACER

Problem
Create a function sevenBoom() that returns "Boom!" if 7 is present in any element of the array - including any digit of the element - or return "there is no 7 in the array" otherwise.

Input: array of numbers
Output: String

Restrictions: none

Algorithm:

Define a function sevenBoom() that takes an array of numbers arrNum as a param
  declare a variable str and initialize it to an empty string
  declare a variable reges and initialize it to a new regular expression object "7"
  iterate over every element od arrNum an transfor each element to an string
    add each str element to string
  call the test() RegExp method passing the string as a param
    return "Boom!" if string contains "7" otherwise return "there is no 7 in the array"
*/
/*
function sevenBoom(arrNum) {
  let str = "";
  let regex = new RegExp("7", "g");

  for(let i = 0; i < arrNum.length; i += 1) {
    str += new String(arrNum[i]);
  }

  return regex.test(str) ? "Boom!" : "there is no 7 in the array";
}
*/

// Refactor

function sevenBoom(arrNum) {
  return  new RegExp("7", "g").test(arrNum.map(num => new String(num))) ?
    "Boom!" :
    "there is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
console.log(sevenBoom([8, 100, 33, 6])); // "there is no 7 in the array"
console.log(sevenBoom([2, 55, 60, 97, 86])); // "Boom!"

/*
ADDITIONAL SOLUTIONS:

function sevenBoom(arr) {
	return arr.join("").includes("7") ? "Boom!" : "there is no 7 in the array";
}

const sevenBoom =(arr) =>{
	return arr.toString().includes("7") ? "Boom!":"there is no 7 in the array"
}
*/