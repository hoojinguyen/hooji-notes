// 739 - leetcode - medium
// https://leetcode.com/problems/daily-temperatures

function dailyTemperatures(l) {
  const answers = [];

  for (let i = 0; i < l.length; i++) {
    const tempCur = l[i];
    let countDay = 0;

    for (let j = i + 1; j < l.length; j++) {
      const tempNext = l[j];
      if (tempNext > tempCur) {
        countDay++;
        break;
      } else {
        if (j == l.length - 1) {
          countDay = 0;
          break;
        } else {
          countDay++;
        }
      }
    }

    answers.push(countDay);
  }
  return answers;
}

function dailyTemperatures(l) {
  if (l == null || l.length == 0) return [];

  const stack = []; //store [val, index]
  const res = new Array(l.length).fill(0);
  for (let i = 0; i < l.length; i++) {
    while (stack.length > 0 && l[i] > l[stack[stack.length - 1]]) {
      top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
