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

PEDACER process:

PROBLEM
If a string pass as a parameter contains open brackets of the same type opened and closed in the correct order, return true, toherwise retur false.

what do I need to know
that no type of parenthesis os closed by another type of parenthesis
si un tipo de par[entesis se abre, no puede haber ningún otro tipo de parnehtesis cerrado

Rules and Requirements

- A parenthesys can not be closed by a parenthesys from other type, meaning it can NOT be a closing parenthesys of othe type before closing a pair of parenthesys of other type. Eg: (] doesn't work.
  - How might we track the type of current parenthesys that are open
    we could use a new array to push all new opening parenthesys
  - How might we know if a closing parenthesys can be accepted or is invalid ?
    we could compare the last closing parenthesys in the iteration to the last element in the array tracking the opening parenthesys. If it matches the type, we can continue and also eliminate the last element of the parenthesys, otherwise we return false.
  - How might we know if we are done
    if the length of the array tracking the opening parenthesys is 0 qt the end of the iteration over the string, otherwise we need to return false.
- No parenthesys should be a single parenthesys
- A couple of parenthesys should open with the open bracket and close with the closing bracket, meaning the number of open parenthesys of a kind should corrspond to thae same number closign parenthesys of the same kind.

DATA
input: string
output: boolean
process: array

ALGORITHM
 declare a function isValid that receive a string as paramether - s -
 initialize an empty array openPArenthesys to track all the open parenthesys in the string - s -
 check if the first element of the string is ) or } or ] . Then return false if true.
 iterate over each element of the string -s-
  if the element is an open parenthesys, push it to the openingParenthesys
  if the element is a closing parenthesys validate
    if the last element fro openParenthesys is an opening parenthesys that matches the current closing parenthesys.
    if it matches. Pop the last element from openingParenthesys.
    if the current character is any open parenthesys continue with the iteration.
    otherwise return false.
 when the iteration over the whole string is completed, calculate the length of openingParenthesys
   if the length is 0 return true
   otherwise return false
CODE:
*/

const  matches = (currentChar, openParenthesys, letsContinue) => {
  let lastChar = openParenthesys[openParenthesys.length-1]
  let itMatches =  (lastChar === "(" && currentChar === ")") ||
    (lastChar === "[" && currentChar === "]") ||
    (lastChar === "{" && currentChar === "}")

   if (itMatches) {
      openParenthesys.pop()
   } else if (letsContinue) {
     return true;
   } else {
      return false;
    }

    return true;
  }



const isValid = function(s) {
  let openParenthesys = [];

  if (s[0].match(/[\)\]\}}]/) !== null) return false;

  for (let i = 0; i < s.length; i+=1) {
    let letsContinue = false;
    let currentChar = s[i];

    if (currentChar.match(/[\(\[\{]/)) {
      openParenthesys.push(currentChar);
      letsContinue = true;
    }

    if (!matches(currentChar, openParenthesys, letsContinue)) {
       return false;
    }
  }

  return  openParenthesys.length === 0 ? true : false
}

console.log(isValid('()')); // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true


