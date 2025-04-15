/*
PROBLEM:

Input: Array of strings
Output:
Rules:
- If the element is a number, add it to the record
- If the element is a "C", remove the last score from the record
- If the element is a "D", add a new score that is double the previous score
- If the element is a "+", add a new score that is the sum of the previous two scores

Algorithm:
- Initialize a record array
- Iterate over the input array usign an array iterator (for)
- If the element is a "C", remove the last score from the record. You can use the pop method to remove the last element from the array, or the slice lenght -1 to remove the last element from the array
- If the element is a "D", add a new score that is double the previous score. You can use the push method to add a new element to the array: Slice lenght -2, sum the resulting array  and push it to the score to get the last element from the array and multiply it by 2.
- If the element is a "+", add a new score that is the sum of the previous two scores. You can use the push method to add a new element to the array: Slice lenght -2, sum the resulting array  and push it to the score to get the last element from the array and multiply it by 2.
If the element is a number, add it to the record as there is only the previous possibilities or number


CODE:

function baseballScore(ops) {
  let score= [];

  for(let i =0; i < ops.length;i++) {
    if(ops[i] === "C") {
      score.pop()
    } else if (ops[i] === "D") {
      score.push(score[score.length -1] * 2)
    } else if (ops[i] === "+") {
      score.push(score.slice(-2).reduce((acc, curr) => acc + curr, 0))
    }else {
      score.push(parseInt(ops[i]))
    }
  }

  return score.reduce((acc, curr) => acc + curr, 0)
}

*/

//Refactored code:

function baseballScore(ops) {
  let score = [];

  for (let op of ops) {
    if (op === "C") score.pop();
    else if (op === "D") score.push(score[score.length - 1] * 2);
    else if (op === "+") score.push(score.slice(-2).reduce((a, b) => a + b));
    else score.push(+op); // Using unary plus to convert string to number
  }

  return score.reduce((a, b) => a + b, 0);
}

console.log(baseballScore(["5","2","C","D","+"]))
console.log(baseballScore(["5","-2","4","C","D","9","+","+"]))

/*
Baseball Game Algorithm Problem
Problem Statement:

You're keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

Given a list of operations (each representing a round), return the sum of all the scores on the record after applying all the operations.

The operations are defined as follows:

An integer x - Record a new score of x

"+" - Record a new score that is the sum of the previous two scores

"D" - Record a new score that is double the previous score

"C" - Invalidate the previous score, removing it from the record

Example 1:

Copy
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is [5]
"2" - Add 2 to the record, record is [5, 2]
"C" - Invalidate and remove the previous score, record is [5]
"D" - Add 2 * 5 = 10 to the record, record is [5, 10]
"+" - Add 5 + 10 = 15 to the record, record is [5, 10, 15]
Total sum = 5 + 10 + 15 = 30
Example 2:

Copy
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - [5]
"-2" - [5, -2]
"4" - [5, -2, 4]
"C" - [5, -2]
"D" - [5, -2, -4]
"9" - [5, -2, -4, 9]
"+" - [5, -2, -4, 9, 5]
"+" - [5, -2, -4, 9, 5, 14]
Total sum = 5 + -2 + -4 + 9 + 5 + 14 = 27
Constraints:

1 <= ops.length <= 1000

ops[i] is "C", "D", "+", or a string representing an integer in the range [-3×10^4, 3×10^4]
*/