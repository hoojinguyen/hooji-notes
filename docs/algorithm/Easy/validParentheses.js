/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  const SYMBOLS = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let sym = s[i];

    if (SYMBOLS[sym]) {
      stack.push(sym);
    } else if (SYMBOLS[stack[stack.length - 1]] == sym) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
};

console.log(isValid('((({}[])))'));
console.log(isValid('([])'));
