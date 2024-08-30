// 3 - leetcode -medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s) {
  if (!s.length) return 0;
  let longest = 1;
  let left = 0;

  for (let right = 1; right < s.length; right++) {
    let subString = s[left];
    let temp = right;
    while (s[temp] && subString.indexOf(s[temp]) === -1) {
      subString += s[temp];
      temp++;
    }
    left = left + 1;
    right = left;
    longest = Math.max(longest, subString.length);
  }

  return longest;
}

function lengthOfLongestSubstring(s) {
  const charSet = new Set();

  let l = 0;
  let longest = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l += 1;
    }

    charSet.add(s[r]);

    longest = Math.max(longest, r - l + 1);
  }

  return longest;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring(' ')); // 1
console.log(lengthOfLongestSubstring('au')); // 2
console.log(lengthOfLongestSubstring('dvdf')); // 3
