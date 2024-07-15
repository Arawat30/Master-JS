//9. Validate if a string contains only valid characters (e.g., alphanumeric).

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}


console.log(isAlphanumeric("abc123"));  // true
console.log(isAlphanumeric("abc!@#"));  // false
console.log(isAlphanumeric("123456"));  // true
console.log(isAlphanumeric(""));  // false