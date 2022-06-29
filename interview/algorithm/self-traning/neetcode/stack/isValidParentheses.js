//  20 - leetcode - easy
// https://leetcode.com/problems/valid-parentheses

function isValidParentheses(s) {
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (map[element]) {
      stack.push(element);
    } else if (map[stack[stack.length - 1]] == element) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length == 0;
}

console.log(isValidParentheses('([])')); // true
console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('()[]{}')); // true
console.log(isValidParentheses('(]')); // false
