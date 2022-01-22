/*
PACER METHOD TO SOLVE PROBLEMS
https://github.com/anayib/problem-solving-skills

PROBLEM
Write a function that shortens a string of characters fro a - z as follows:
  if the same character repets consecutively twice, eliminate it from the string.
  return the shortened string

- Input: string
- Output: string
- Examples:
  "aaabccddd" -> "abd"
- Rules:
  the string characters are a-z

ALGORITHM

A1
Define a fucntion that receive a string as a parameter str
  declare a variable shortenedString and assign an empty string as its value
  iterate over every character of the st
    if the character is diferent from the last character of newString, add it to newSting
    otherwise eliminate the last character from newString
  return new String

A2 Regex + recursive

Define a function that receives a string str as a parameter
 declare a regular expresion that math two equal consecutive characters
 call the string match method to see if there is still duplicates.
   if null and str length is 0, return "Empty String"
   if null return str
   otherwise, call the replace method to replace/eliminate the two equal consecutive characters
 call the fucntion recursively with the resulting str as a parameter

*/

/* A1 CODE

function superReducedString(str) {
  let newString = "";

  for(let i = 0; i < str.length; i += 1) {

    if (str[i] === newString[newString.length -1]) {
      newString = newString.slice(0,-1);
    } else {
      newString += str[i];
    }

  };

  return newString[0]  !== newString[1] ? newString : "Empty String";
}

*/

/*
A2 Code

function superReducedString(str) {
  let regex = new RegExp(/([a-z])\1/, "g");

  if (str.match(regex) === null && str.length === 0) {
    return "Empty String";
  } else if (str.match(regex) === null) {
    return str;
  } else {
    return superReducedString(str.replace(regex, ""));
  }
}

*/

/* 
REFACTOR
*/

const regex = /([a-z])\1/g;
const superReducedString = str => regex.test(str) ? superReducedString(str.replace(regex, "")) : str || "Empty String";

console.log(superReducedString("aaabccddd")); // "abc"
console.log(superReducedString("cccxllyyy" )); // "cxy"
console.log(superReducedString("aa")); // "Empty String"
console.log(superReducedString("baab")); // "Empty String"
console.log(superReducedString("fghiiijkllmnnno")); // "fghijkmno"
console.log(superReducedString("chklssstt")); // "chkls"

