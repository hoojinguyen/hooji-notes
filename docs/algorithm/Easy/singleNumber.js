/**
 * @param {number[]} nums
 * @return {number}
 */

//  Example 1:
//  Input: nums = [2,2,1]
//  Output: 1

//  Example 2:
//  Input: nums = [4,1,2,1,2]
//  Output: 4

//  Example 3:
//  Input: nums = [1]
//  Output: 1

const singleNumber = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] == undefined) {
      map[num] = true;
    } else {
      delete map[num];
    }
  }

  return Object.keys(map)[0];
};

const nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
console.log('🚀 ~ result', result);
