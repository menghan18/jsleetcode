// 122. 买卖股票的最佳时机 II
export default (prices) => {
  let count = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }
  return count
}
