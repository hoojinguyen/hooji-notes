function firstNoneRepeating(list, map = new Map()) {
  for (let item of list) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(firstNoneRepeating('aahdfd'));
console.log(firstNoneRepeating([5, 2, 3, 4, 2, 6, 7, 1, 2, 3]));
