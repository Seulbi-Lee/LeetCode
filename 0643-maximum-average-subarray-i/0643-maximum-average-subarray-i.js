/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // the first sum
    let sum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
    let max = sum;

    // update the 'sum' through changing the number one by one
    for(let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    
    return max / k;
};
