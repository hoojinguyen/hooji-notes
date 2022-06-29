// 704 - leetcode - easy
// https://leetcode.com/problems/binary-search/

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    const num = nums[mid];

    if (target === num) return mid;

    if (target > num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
