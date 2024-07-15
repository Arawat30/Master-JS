//9. Check if an array is a palindrome.

function palindrome(arr) {
  if (arr == arr.reverse()) return true;
  else return false;
}

console.log(palindrome([1, 1]));
