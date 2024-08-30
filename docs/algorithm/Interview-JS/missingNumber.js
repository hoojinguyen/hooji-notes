// Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

// Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.

// Answer: You have to act like you are thinking a lot. and then talk about the sum of a linear series of n numbers = n*(n+1)/2

function missingNumber(arr) {
  let len = arr.length + 1;
  let sum = (len * (len + 1)) / 2;
  let currentSum = 0;

  let i = 0;
  while (i < arr.length) {
    currentSum += arr[i];
    i++;
  }

  return sum - currentSum;
}

console.log(missingNumber([5, 2, 6, 1, 3])); // 4
console.log(missingNumber([5, 2, 6, 1, 3, 4, 8])); // 7
