// 49 leetcode - medium

function groupAnagram(strs) {
  const result = {};

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort();
    if (result[key] === undefined) {
      result[key] = [strs[i]];
    } else {
      result[key].push(strs[i]);
    }
  }
  return Object.values(result);
}

console.log(groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
