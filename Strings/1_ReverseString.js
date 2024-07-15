//1. Reverse a string.

function reverseString(str) {
  let arr = str.split("");
  return arr.reverse().join("");
}

console.log(reverseString("Hello"));

