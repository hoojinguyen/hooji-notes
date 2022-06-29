/**
 * @param {number} numRows
 * @return {number[][]}
 */

//  Example 1:
//  Input: numRows = 5
//  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//  Example 2:
//  Input: numRows = 1
//  Output: [[1]]

const generate = function (numRows) {
  const arr = [];
  const dic = {
    1: [1],
    2: [1, 1],
  };

  for (let num = 1; num <= numRows; num++) {
    if (dic[num] != undefined) {
      arr.push(dic[num]);
    } else {
      let pairs = num - 2;
      let middle = [];
      const prev = dic[num - 1];
      for (let i = 0; i < pairs; i++) {
        middle.push(prev[i] + prev[i + 1]);
      }

      dic[num] = [1, ...middle, 1];
      arr.push(dic[num]);
    }
  }

  return arr;
};

const numRows = 6;
const result = generate(numRows);
console.log('🚀 ~ result', result);
