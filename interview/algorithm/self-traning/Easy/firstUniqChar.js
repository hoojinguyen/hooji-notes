/**
 * @param {string} s
 * @return {number}
 */

//  Example 1:
//  Input: s = "leetcode"
//  Output: 0

//  Example 2:
//  Input: s = "loveleetcode"
//  Output: 2

//  Example 3:
//  Input: s = "aabb"
//  Output: -1
const firstUniqChar = function (s) {
  const dic = {};
  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (dic[character] == undefined) {
      dic[character] = 0;
    } else {
      dic[character]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (dic[character] == 0) {
      return i;
    }
  }

  return -1;
};

const s = 'aabb';
const result = firstUniqChar(s);
console.log('🚀 ~ result', result);
