//7. Generate all permutations of a string.

let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) != i) continue;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let per of findPermutations(remainingChars))
      permutationsArray.push(char + per);
  }

  return permutationsArray;
};

console.log(findPermutations("aabc"));
