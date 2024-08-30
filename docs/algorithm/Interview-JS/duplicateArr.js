function duplicate(arr) {
  const dic = {};
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (dic[item] === undefined) {
      res.push(item);
      dic[item] = 1;
    }
  }
  return res;
}

console.log(duplicate([1, 2, 3, 4, 5, 2, 3, 1, 4]));
