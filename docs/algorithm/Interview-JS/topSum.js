// Question: How would you find the largest sum of any two elements?

// Answer: this is actually very simple and straight forward. Just find the two largest number and return sum of them

function topSum(arr) {
  let max1 = arr[0];
  let max2 = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }

  return max1 + max2;
}

console.log(topSum([1, 5, 2, 6, 9])); // 15
