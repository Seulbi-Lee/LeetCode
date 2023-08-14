/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        prices[i] < buy ? buy = prices[i] : buy = buy
        prices[i] - buy > max ? max = prices[i] - buy : max = max
    }
    return max
};