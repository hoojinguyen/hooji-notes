// Question: How will you verify a word as palindrome?

// Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.

function isPalindrome(str) {
  let head = 0;
  let tail = str.length - 1;

  while (head != tail) {
    if (str[head] !== str[tail]) {
      return false;
    }
    head++;
    tail--;
  }

  return true;
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('toyota')); // false
