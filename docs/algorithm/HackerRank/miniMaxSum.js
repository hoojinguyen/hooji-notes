// Given five positive integers,
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum1(arr) {
  // Write your code here

  // Method 1:
  // sort
  // get 4 number first is min
  // get 4 number end is max

  let max = 0;
  let min = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (i == 0) {
      min += num;
    } else if (i == arr.length - 1) {
      max += num;
    } else {
      min += num;
      max += num;
    }
  }

  return console.log(min, max);
}

function miniMaxSum2(arr) {
  // Write your code here

  // Method 2:
  // calculate sum of array
  // find max number and min number in array
  // => min array = sum - max; max array = sum - min

  let max = 0;
  let min = 0;

  let sum = 0;
  let maxNum = arr[0];
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    sum += num;
    if (num > maxNum) maxNum = num;
    if (num < minNum) minNum = num;
  }

  min = sum - maxNum;
  max = sum - minNum;

  return console.log(min, max);
}

miniMaxSum2([1, 2, 4, 3, 5]);
