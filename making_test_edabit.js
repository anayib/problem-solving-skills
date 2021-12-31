/*
Metaprogramming: Making a Test Case

You are given two values a and b of identical type: numbers, strings or arrays. The result will be:

The sum of a and b if the parameters are numbers.
a = 1 | b = 1 ➞ Result = 2

The join in a single string of a and b if the parameters are strings.
a = "1" | b = "1" ➞ Result = "11"

The concatenation of the values of a and b in a single array if the parameters are arrays.
a = ["String"] | b = ["String"] ➞ Result = ["String", "String"]

In any case, you don't have to simply return the result. This challenge will be a little different from usual because your function is going to return the same Test Case that verifies the correctness of your function!

When you try to solve a challenge your function is passed to a Test function, that accepts three parameters: your function with its related parameters, the expected result, and an optional comment (not used in this exercise).

There are two different types for a Test function:

Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)
This is used when the value type of the expected result is primitive (numbers, strings, booleans or special values like undefined, null and NaN).

Test.assertSimilar(yourFunctionName(firstParameter, ..., lastParameter), result)
This is used when the value type of the expected result is an object (arrays or object literals).

You must return a string containing the Test function that verifies the correctness of the result that you got. See the examples below for a better explanation.

Examples
createTest(1, 1) ➞ 'Test.assertEquals(createTest(1, 1), 2)'
// Parameters are numbers, so result will be their sum: Test function verifies equality.

createTest("a", "b") ➞ 'Test.assertEquals(createTest("a", "b"), "ab")'
// Parameters are strings, so result will be their join: Test function verifies equality.

createTest(["String"], ["String"]) ➞ 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'
// Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity.
Notes
When parameters, results or values inside arrays are strings, they need the double quotation marks " around them in the returned string.
Look at Tests tab if you need help!
_______________

PACER

Problem

Create a function that receives 2 parameters of the same data type and return a string that represents the test case for the received parameters in the form "Test.assertEquals(createTest(<param1>, <param2>), result)" - where result represents the following based on each case:
- If the params are numbers, result represents the addition of the 2 numbers - sum -
- If the params are strings, the result represents the concatenation of both values - join/concatenation -
- If the params are arrays, result represents a new array which elements are the elements of each parameter - concatenation -

Input: string, number or array
Output: string

Rules:
- Both parameters are the same data type.
- If the result of the operation between the two parameters is a primitive value, the string returned should have "Test.assertEquals ..." . If the result of the operation is an object (array) the returned string should include "Test.asserSimilar"
- If the result is an array containing strings, the strings should be wrapped by double quotation marks.


Algorithm

Define a function createTest which receives 2 parameters, a and b.
  declare a constant dataType and assign the data type of a param as its value.
  define a switch statement that receive as a parameter the dataType variable
    define the case one as "Number"
      return `Test.assertEquals(createTest(${a}, ${b}), ${a * b})`
    define the case two as "String"
      return `Test.assertEquals(createTest("${a}", "${b}"), "${a + b}")`
    define the case 3 as "Array"
      declare a constant arrayConcat and assign as its value the concatenation of the elements from a and b - usign the spread operator -
      return `Test.assertSimilar(createTest(${a}, ${b}, ${arrayConcat}))`
    define default
      return "Not a valid case"

Code
Check the code below after the comment.

Execution
Run the code in your console -> $ node making_test_edabit.js
All test cases should return passed

Refactor
Whow might you write a simpler/more efficient code ?
*/

/*
This case works for arrays containing just one element

function createTest(a, b) {
  const dataType = typeof a;
	
  switch(dataType) {
    case "number":
      return `Test.assertEquals(createTest(${a}, ${b}), ${a + b})`;
    case "string":
      return `Test.assertEquals(createTest("${a}", "${b}"), "${a + b}")`
    case "object":
      const arrayConcat = [...a, ...b];(This wont work because of implicit coercion when interpolated in the string)
      const isString = typeof a[0] === "string";
      return isString ?
        `Test.assertSimilar(createTest(["${a}"], ["${b}"]), ["${a}", "${b}"])` :
        `Test.assertSimilar(createTest([${a}], [${b}]), [${a}, ${b}])`;
    default:
      return "Not a valid case";
  }
};

Refactor - Supports one element by array passed as param only - 

const createTest = (a,b) => {
	c = JSON.stringify(a)
	d = JSON.stringify(b)
	if (Array.isArray(a)) return `Test.assertSimilar(createTest(${c}, ${d}), [${JSON.stringify(...a)}, ${JSON.stringify(...b)}])`
	return `Test.assertEquals(createTest(${c}, ${d}), ${JSON.stringify(a+b)})`
}
*/

/*
BONUS
Implement the algorithm so that it is true if the arrays passed as arguments contain more than
one element each
*/

function createTest(a, b) {
  const dataType = typeof a;
	
  switch(dataType) {
    case "number":
      return `Test.assertEquals(createTest(${a}, ${b}), ${a + b})`;
    case "string":
      return `Test.assertEquals(createTest("${a}", "${b}"), "${a + b}")`
    case "object":
      const arrayConcat = [...a, ...b];
      const isString = typeof a[0] === "string";
      if (isString) {
        const transformedArr = arrayConcat.map((e, i) => {
          return i === 0 ? `"${e}"`: ` "${e}"`;
        });

        return `Test.assertSimilar(createTest(["${a}"], ["${b}"]), [${transformedArr}])`
      } else {
        const transformedA = a.map((e, i) => {
          return i === 0 ? `${e}`: ` ${e}`;
        });
        const transformedB = a.map((e, i) => {
          return i === 0 ? `${e}`: ` ${e}`;
        });
        const transformedArr = arrayConcat.map((e, i) => {
          return i === 0 ? `${e}`: ` ${e}`;
        });        
        return `Test.assertSimilar(createTest([${transformedA}], [${transformedB}]), [${transformedArr}])`;
      }
    default:
      return "Not a valid case";
  }
};



console.log(createTest("a", "b") === 'Test.assertEquals(createTest("a", "b"), "ab")'); // true
console.log(createTest("Te", "st") === 'Test.assertEquals(createTest("Te", "st"), "Test")'); // true
console.log(createTest("1", "1") === 'Test.assertEquals(createTest("1", "1"), "11")'); // true
console.log(createTest(1, 1) === 'Test.assertEquals(createTest(1, 1), 2)'); // true
console.log(createTest(99, 1) === 'Test.assertEquals(createTest(99, 1), 100)'); // true
console.log(createTest(0, 0) === 'Test.assertEquals(createTest(0, 0), 0)'); // true
console.log(createTest([1, 2], [1, 2]) === 'Test.assertSimilar(createTest([1, 2], [1, 2]), [1, 2, 1, 2])'); //true
console.log(createTest(["1"], ["1"]) === 'Test.assertSimilar(createTest(["1"], ["1"]), ["1", "1"])'); // true
console.log(createTest(["String"], ["String"]) == 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])');//true

/*
Refactor the previous solution to a cleaner one
*/