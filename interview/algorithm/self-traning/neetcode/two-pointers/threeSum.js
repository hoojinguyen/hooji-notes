// 15 - leetcode - medium

function threeSum(nums) {
  if (nums.length < 2) return [];

  nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    const target = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const threeSum = nums[left] + nums[right] + target;
      if (threeSum === 0) {
        res.push([target, nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (threeSum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
