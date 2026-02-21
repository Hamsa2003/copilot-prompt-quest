// Refined Prompt Example

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

console.log(toKebabCase("Refined_Prompt Example!"));
// Output: refined-prompt-example