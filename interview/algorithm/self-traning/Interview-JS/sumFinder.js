// Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?

// Answer: Simplest thing in the world. double loop

function sumFinder(arr, sum) {
  let dic = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (sum > num) {
      if (dic[num] !== undefined) return true;
      else {
        dic[sum - num] = true;
      }
    }
  }

  return false;
}

function sumFinder2(arr, number) {
  arr.sort();

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const sum = arr[left] + arr[right];

    if (sum === number) return true;

    if (sum > number) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

function sumFinder3(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) return true;
    }
  }

  return false;
}

console.log(sumFinder([6, 4, 2, 1, 3, 8], 13)); // false
console.log(sumFinder([6, 4, 3, 2, 1, 7], 10)); // true
console.log(sumFinder([6, 4, 3, 2, 1, 7], 5)); // true
console.log(sumFinder([6, 4, 3, 2, 1, 7], 4)); // true
console.log(sumFinder([6, 4, 3, 2, 1, 7], 1)); // false
console.log(sumFinder([6, 4, 3, 2, 1, 7], 18)); // false
console.log(sumFinder([6, 4, 3, 2, 1, 7, 9], 7)); // true
