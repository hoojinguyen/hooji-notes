/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
  const len = digits.length - 1;
  let arr = [];
  let temp = 0;
  for (let i = len; i >= 0; i--) {
    let num = digits[i];
    let plus = num + 1;
    if (i == len && temp == 0) {
      if (plus > 9) {
        temp = 1;
        arr.unshift(0);
      } else {
        temp = 0;
        arr.unshift(plus);
      }
    } else if (i != len && temp == 1) {
      if (plus > 9) {
        temp = 1;
        arr.unshift(0);
      } else {
        temp = 0;
        arr.unshift(plus);
      }
    } else {
      arr.unshift(num);
    }
  }

  if (temp == 1) {
    arr.unshift(1);
  }

  return arr;
};

const plusOne2 = (digits) => {
  let sum = 0;

  digits[digits.length - 1] = digits[digits.length - 1] + 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let carry = 0;

    sum += digits[i];

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }

    digits[i] = sum;
    sum = carry;
  }

  if (sum > 0) return [sum, ...digits];

  return digits;
};

const result = plusOne([9, 9, 3, 9]);
console.log('🚀 ~ Result', result);
