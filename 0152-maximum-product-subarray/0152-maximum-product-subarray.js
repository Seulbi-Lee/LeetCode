/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = 1
    let min = 1
    let result = nums[0]

    for(let num of nums){
        let newNums = [num, num*max, num*min]
        max = Math.max(...newNums)
        min = Math.min(...newNums)
        result = Math.max(result, max)
    }
    return result
};