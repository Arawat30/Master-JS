//6. Determine if one string is a rotation of another.

function checkRotation(str1, str2) {
  if (str1.length != str2.length) return false;
  let concatStr = str1 + str1;
  if (concatStr.indexOf(str2)) return true;
  else false;
}

console.log(checkRotation("abc", "cab"));
