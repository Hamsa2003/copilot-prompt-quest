// Few-Shot Prompt Example

/*
Example:
Input: "Hello World"
Output: "hello-world"

Input: "JavaScript Function"
Output: "javascript-function"
*/

function toKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

console.log(toKebabCase("Few Shot Example"));
// Output: few-shot-example