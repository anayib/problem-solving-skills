/*
PROBLEM STATEMENT
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

PACER process:

ALGORITHM

defien a fucntion isValid that receives a string parameter called s
declare an arr variable and assign and empty array as its value
iterate over every char of the s string
  if char equals ( push the ) to the arr
  if char equals [ push the ] to the arr
  if char equals { push the } to the arr
  if the last element of the arr is different from current char return false
  else remove the last element from arri
return true if arr.length equals 0.

*/
var isValid = function(s) {
    let arr = [];
    for (let char of s){
     if (char === "(") {
            arr.push(")");}
     else if ( char === "["){
        arr.push("]")
    }
    else if (char === "{"){
         arr.push("}")
    }
    else{
        if (arr[arr.length-1] !==char) {return false}
        else {arr.pop()}
        }
    }
    return arr.length===0
};

console.log(isValid('()')); // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true


