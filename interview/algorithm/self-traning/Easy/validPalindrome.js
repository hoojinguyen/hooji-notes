/**
 * @param {string} s
 * @return {boolean}
 */

//  Example 1:
//  Input: s = "A man, a plan, a canal: Panama"
//  Output: true
//  Explanation: "amanaplanacanalpanama" is a palindrome.

//  Example 2:
//  Input: s = "race a car"
//  Output: false
//  Explanation: "raceacar" is not a palindrome.

//  Example 3:
//  Input: s = " "
//  Output: true
//  Explanation: s is an empty string "" after removing non-alphanumeric characters.
//  Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '');

  let left = 0;
  let right = s.length - 1;
  let middle = s.length / 2;
  while (left < middle) {
    if (s[left] != s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const s = 'race a car';
const result = isPalindrome(s);
console.log('🚀 ~ result', result);
