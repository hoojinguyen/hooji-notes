/**
 * @param {number} n
 * @return {number}
 */

//  Example 1:
//  Input: n = 2
//  Output: 2
//  Explanation: There are two ways to climb to the top.
//  1. 1 step + 1 step
//  2. 2 steps

//  Example 2:
//  Input: n = 3
//  Output: 3
//  Explanation: There are three ways to climb to the top.
//  1. 1 step + 1 step + 1 step
//  2. 1 step + 2 steps
//  3. 2 steps + 1 step

const climbStairs1 = function (n) {
  if (n < 4) return n;

  return climbStairs1(n - 1) + climbStairs1(n - 2);
};

const climbStairs2 = function (n) {
  if (n < 4) return n;
  const dic = {};
  for (let i = 1; i <= n; i++) {
    if (i < 4) {
      dic[i] = i;
    } else {
      dic[i] = dic[i - 1] + dic[i - 2];
    }
  }

  return dic[n];
};

console.log('Way 1: ', climbStairs1(10));
console.log('Way 2: ', climbStairs2(45));
