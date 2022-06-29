// 121 - leetcode - easy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices) {
  let left = 0;
  let max = 0;

  for (let right = 1; right < prices.length; right++) {
    if (prices[right] < prices[left]) {
      left = right;
    }

    max = Math.max(max, prices[right] - prices[left]);
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // output 5
console.log(maxProfit([7, 6, 4, 3, 1])); // output 0
