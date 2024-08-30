/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//  Example 1:
//  Input: haystack = "hello", needle = "ll"
//  Output: 2

//  Example 2:
//  Input: haystack = "aaaaa", needle = "bba"
//  Output: -1

//  Example 3:
//  Input: haystack = "", needle = ""
//  Output: 0

const strStr = function (haystack, needle) {
  //   const index = haystack.indexOf(needle);
  //   return index;

  if (haystack.length == 0 && needle.length == 0) return 0;

  const len1 = haystack.length;
  const len2 = needle.length;

  for (let i = 0; i < len1; i++) {
    let compare = haystack.substring(i, i + len2);
    if (compare == needle) {
      return i;
    }
  }

  return -1;
};

const haystack = 'aaaaa';
const needle = 'bba';

const result = strStr(haystack, needle);
console.log('🚀 ~ result', result);
