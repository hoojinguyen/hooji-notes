/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let ans = 0;
  if (x < 2) return x;

  for (let i = 1; i * i <= x; i++) {
    ans = i;
  }

  return ans;
};

const result = mySqrt(9);
console.log('Result: ', result);
