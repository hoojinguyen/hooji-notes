function threeSum(arr) {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    let target = -arr[i];

    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) {
        result.push([arr[left], arr[right], arr[i]]);
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// [-4, -1, -1, 0, 1, 2]

// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
