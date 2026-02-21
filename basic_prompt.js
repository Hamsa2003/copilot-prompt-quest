// Basic Prompt Example

function toKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

console.log(toKebabCase("Hello World"));
// Output: hello-world