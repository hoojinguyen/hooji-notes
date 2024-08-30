function longestConsecutive(nums) {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let count = 1;
  let longest = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      continue;
    }

    if (nums[i] + 1 == nums[i + 1]) {
      count++;
    } else {
      if (longest < count) {
        longest = count;
      }
      count = 1;
    }
  }

  return longest;
}

function longestConsecutive(nums) {
  const numsSet = new Set(nums);
  const visited = new Set();
  let longest = 0;

  for (n of nums) {
    let count = 1;
    if (!numsSet.has(n - 1)) {
      while (numsSet.has(n + count) && !visited.has(n + count)) {
        visited.add(n + count);
        count++;
      }
      longest = Math.max(longest, count);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7
console.log(longestConsecutive([1, 2, 0, 1])); // 3
console.log(longestConsecutive([])); // 0
