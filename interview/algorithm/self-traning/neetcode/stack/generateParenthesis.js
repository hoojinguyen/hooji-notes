// 22 - leetcode - medium
// https://leetcode.com/problems/generate-parentheses/
// https://www.youtube.com/watch?v=p9cmmU5sacU

function generateParenthesis(n) {
  const ans = [];

  function generate(sofar = '', op = 0, cl = 0) {
    if (op > n) return;
    if (cl > op) return;
    if (op == cl && op == n) ans.push(sofar);

    generate(sofar + '(', op + 1, cl);
    generate(sofar + ')', op, cl + 1);
  }

  generate();

  return ans;
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
