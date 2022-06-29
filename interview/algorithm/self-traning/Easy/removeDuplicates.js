/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return {
    k: i + 1,
    nums,
  };
};
console.log('removeDuplicates: ', removeDuplicates([1, 1, 2]));
