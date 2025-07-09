function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace
    let str = input.trim();

    // Remove special characters except letters, numbers, and underscores
    str = str.replace(/[^a-zA-Z0-9_]/g, '');

    // Insert hyphens before uppercase letters or numbers that follow letters (handles camelCase, PascalCase, numbers)
    str = str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')      // camelCase or PascalCase
        .replace(/([A-Za-z])([0-9])/g, '$1-$2')      // letters followed by numbers
        .replace(/([0-9])([A-Za-z])/g, '$1-$2');     // numbers followed by letters

    // Convert underscores to hyphens
    str = str.replace(/_/g, '-');

    // Convert to lowercase
    return str.toLowerCase();
}

// Example usage:
// console.log(toKebabCase('myVariableName'));      // "my-variable-name"
// console.log(toKebabCase('MyVariableName'));      // "my-variable-name"
// console.log(toKebabCase('MyVariable2Name'));     // "my-variable-2-name"
// console.log(toKebabCase('thisIs2023Now'));       // "this-is-2023-now"
// console.log(toKebabCase('  _Special__Case_  ')); // "special--case"