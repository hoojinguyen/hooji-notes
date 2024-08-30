// 1 leetcode - easy

function twoSum(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hash[target - num] !== undefined) return [hash[target - num], i];
    else {
      hash[num] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
