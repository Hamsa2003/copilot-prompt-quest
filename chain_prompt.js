// Chain Prompt Example

/*
Step 1: Explain what kebab-case means.
Step 2: Write the toKebabCase function.
Step 3: Provide 3 examples.
*/

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

console.log(toKebabCase("Hello World"));
console.log(toKebabCase("Chain Prompt Example"));
console.log(toKebabCase("GitHub Copilot Quest"));