// 167 - leetcode - medium

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [++left, ++right];

    if (sum > target) right--;
    else left++;
  }
  return [0, 0];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
console.log(twoSum([-3, 3, 4, 90], 0)); // [1,2]
