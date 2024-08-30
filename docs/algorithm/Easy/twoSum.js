/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const twoSum = function (nums, target) {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const sub = target - nums[i];
    if (dic[cur] !== undefined) return [dic[cur], i];
    else dic[sub] = i;
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log('🚀 ~ result', result);
