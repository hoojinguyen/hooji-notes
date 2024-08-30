// 150 - leetcode -medium
// https://leetcode.com/problems/evaluate-reverse-polish-notation

function evalRPN(tokens) {
  const stack = [];

  const operations = {
    '+': (a, b) => b + a,
    '-': (a, b) => b - a,
    '/': (a, b) => b / a,
    '*': (a, b) => b * a,
  };

  for (const item of tokens) {
    const operation = operations[item];
    if (operation !== undefined) {
      const a = stack.pop();
      const b = stack.pop();
      const result = operation(a, b);
      stack.push(parseInt(result));
    } else {
      stack.push(parseInt(item));
    }
  }
  return stack[0];
}

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
); // 22
