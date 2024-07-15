//8. Find the largest contiguous subarray sum.

//brute force
function bruteForce(arr) {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
        if (sum > maxSum) maxSum = sum;
      }
    }
  }
  return maxSum;
}

console.log(bruteForce([5, 4, -1, 7, 8]));
//console.log(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//kadane's algo
function kadaneSol(arr) {
  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSum = maxSum > sum ? maxSum : sum;
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

//console.log(kadaneSol([5,4,-1,7,8]))
//console.log(kadaneSol([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
