/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//  Example 1:
//  Input: s = ["h","e","l","l","o"]
//  Output: ["o","l","l","e","h"]

//  Example 2:
//  Input: s = ["H","a","n","n","a","h"]
//  Output: ["h","a","n","n","a","H"]

const reverseString = function (s) {
  const len = s.length;
  let j = len - 1;
  for (let i = 0; i < len / 2; i++) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    j--;
  }

  return s;
};

const str = ['h', 'e', 'l', 'l', 'o'];
const result = reverseString(str);
console.log('🚀 ~ result: ', result);
