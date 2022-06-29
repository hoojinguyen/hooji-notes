// 125 - leetcode - easy

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  const alphaNum = (str) => {
    const code = str.charCodeAt(0);
    return (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123) // lower alpha (a-z)
    );
  };

  while (left < right) {
    while (!alphaNum(s[left]) && left < right) {
      left++;
    }

    while (!alphaNum(s[right]) && left < right) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true - "amanaplanacanalpanama" is a palindrome.
console.log(isPalindrome('race a car')); // false - "racaecar" is not a palindrome.
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('.,')); // false
console.log(isPalindrome('0P')); // false
