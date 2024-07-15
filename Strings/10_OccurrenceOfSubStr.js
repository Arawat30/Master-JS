//10. Count the number of occurrences of a substring in a larger string.

function checkOccr(str, substr) {
  return str.split(substr).length - 1;
}

console.log(checkOccr("ab ab ab ab", "a"));
