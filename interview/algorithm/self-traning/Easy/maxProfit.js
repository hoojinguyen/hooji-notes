/**
 * @param {number[]} prices
 * @return {number}
 */

//  Example 1:
//  Input: prices = [7,1,5,3,6,4]
//  Output: 5
//  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//  Example 2:
//  Input: prices = [7,6,4,3,1]
//  Output: 0
//  Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
  let max_profit = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[right] < prices[left]) {
      left = right;
    } else {
      const profit = prices[right] - prices[left];
      if (profit > max_profit) {
        max_profit = profit;
      }
    }

    right++;
  }

  return max_profit;
};

const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log('🚀 ~ result', result);
