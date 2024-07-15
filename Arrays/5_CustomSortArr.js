//5. Implement a custom sorting algorithm for an array.

// return a number where:
// A negative value indicates that a should come before b.
// A positive value indicates that a should come after b.
// Zero or NaN indicates that a and b are considered equal.
// To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.

function customSort(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log([2,1,0,43,3,23].sort(customSort));
