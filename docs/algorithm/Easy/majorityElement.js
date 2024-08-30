/**
 * @param {number[]} nums
 * @return {number}
 */

//  Example 1:
//  Input: nums = [3,2,3]
//  Output: 3

//  Example 2:
//  Input: nums = [2,2,1,1,1,2,2]
//  Output: 2

const majorityElement = function (nums) {
  const timeAppearances = nums.length / 2;
  console.log('🚀 ~ timeAppearances', timeAppearances);
  const dic = {};

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (dic[item] != undefined) {
      dic[item]++;
      if (dic[item] >= timeAppearances) {
        return item;
      }
    } else {
      dic[item] = 1;
    }
  }

  return nums[0];
};

const nums = [1];
const result = majorityElement(nums);
console.log('🚀 ~ result', result);
