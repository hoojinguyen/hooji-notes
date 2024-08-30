/**
 * @param {number} n
 * @return {boolean}
 */

//  Example 1:
//  Input: n = 19
//  Output: true
//  Explanation:
//  12 + 92 = 82
//  82 + 22 = 68
//  62 + 82 = 100
//  12 + 02 + 02 = 1

//  Example 2:
//  Input: n = 2
//  Output: false

const isHappyWay1 = function (n) {
  if (n == 1) return true;

  let dic = {};

  while (true) {
    let sum = 0;
    while (n > 0) {
      n = parseInt(n);
      let remain = n % 10;
      sum += remain * remain;
      n = n / 10;
    }

    if (sum == 1) return true;

    if (dic[sum] == undefined) {
      dic[sum]++;
      n = sum;
    } else {
      return false;
    }
  }
};

const isHappyWay2 = function (n) {
  if (n == 1) return true;

  let dic = {};

  while (n != 1) {
    n = n
      .toString()
      .split('')
      .reduce((a, b) => a + b * b, 0);
    if (dic[n] != undefined) return false;
    dic[n]++;
  }

  return true;
};

const n = 5;
const result1 = isHappyWay1(n);
const result2 = isHappyWay2(n);
console.log('🚀 ~ result1', result1);
console.log('🚀 ~ result2', result2);
