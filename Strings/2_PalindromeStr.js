//2. Check if a string is a palindrome.

function palindromeStr(str) {
  let revStr = str.split("").reverse().join("");
  return str === revStr;
}

console.log(palindromeStr("aaa"));
