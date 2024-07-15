//8. Truncate a string to a specified length and add ellipsis if necessary.

function truncateString(str, pos) {
  return str.slice(0, pos) + "...";
}

console.log(truncateString("anshul", 3));
