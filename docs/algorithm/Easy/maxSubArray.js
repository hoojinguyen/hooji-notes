/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];

  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }

  if (max == 0) return Math.max(...nums);

  return max;
};

const arg = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arg1 = [5, 4, -1, 7, 8];
const arg2 = [-2, -1];
const result = maxSubArray(arg);
console.log('🚀 ~ Result', result);
