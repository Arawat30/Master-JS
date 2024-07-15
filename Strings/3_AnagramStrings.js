//3. Check if two strings are anagrams of each other.
function anagramsCheck(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");

  return str1 == str2;
}

console.log(anagramsCheck("ram", "Arm"));
