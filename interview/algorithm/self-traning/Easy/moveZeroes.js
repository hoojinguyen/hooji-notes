/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  Example 1:
//  Input: nums = [0,1,0,3,12]
//  Output: [1,3,12,0,0]

//  Example 2:
//  Input: nums = [0]
//  Output: [0]

const moveZeroes = function (nums) {
  if (nums.length < 2) return nums;

  let head = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // [nums[head], nums[i]] = [nums[i], nums[head]];
      let remain = nums[i];
      nums[i] = nums[head];
      nums[head] = remain;
      head++;
    }
  }

  return nums;
};

const nums = [0, 3, 0, 1, 12];
const result = moveZeroes(nums);
console.log('🚀 ~ result', result);
