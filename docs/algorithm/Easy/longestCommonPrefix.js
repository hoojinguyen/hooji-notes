/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let i = 0;
  let temp = '';
  while (i < strs[0].length) {
    let j = 1;
    let dem = 0;
    while (j < strs.length) {
      if (strs[0][i] == strs[j][i]) {
        dem++;
      }
      j++;
    }
    if (dem != strs.length - 1) {
      return temp;
    }
    temp += strs[0][i];
    i++;
  }
  return temp;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
