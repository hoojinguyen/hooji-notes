/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//  Example 1:
//  Input: nums1 = [1,2,2,1], nums2 = [2,2]
//  Output: [2,2]

//  Example 2:
//  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//  Output: [4,9]
//  Explanation: [9,4] is also accepted.

const intersect = function (nums1, nums2) {
  const arr = [];
  const dic = {};

  for (let i = 0; i < nums1.length; i++) {
    let item = nums1[i];
    if (dic[item] !== undefined) {
      dic[item]++;
    } else {
      dic[item] = 1;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    let item = nums2[j];
    let val = dic[item];
    if (val !== undefined && val > 0) {
      arr.push(item);
      dic[item]--;
    }
  }

  return arr;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
const result = intersect(nums1, nums2);
console.log('🚀 ~ result: ', result);
