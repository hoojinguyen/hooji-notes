/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  Example 1:
//  Input: nums = [1,2,3,1]
//  Output: true

//  Example 2:
//  Input: nums = [1,2,3,4]
//  Output: false

//  Example 3:
//  Input: nums = [1,1,1,3,3,4,3,2,4,2]
//  Output: true

const containsDuplicate = function (nums) {
  const dic = {};

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (dic[item] != undefined) {
      return true;
    } else {
      dic[item]++;
    }
  }

  return false;
};

const nums = [1, 2, 3, 4];
const result = containsDuplicate(nums);
console.log('🚀 ~ result', result);
