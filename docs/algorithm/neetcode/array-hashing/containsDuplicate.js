// 217 leetcode - easy

function containsDuplicate(arr) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (hash[item]) {
      return true;
    } else {
      hash[item] = 1;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 1, 2]));
console.log(containsDuplicate([6, 5, 2, 8]));
console.log(containsDuplicate([6, 5, 2, 8, 1, 2]));
