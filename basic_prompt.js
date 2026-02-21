function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // handle camelCase
    .replace(/[_\s]+/g, '-')            // handle spaces & underscores
    .toLowerCase();
}

module.exports = { toKebabCase };
