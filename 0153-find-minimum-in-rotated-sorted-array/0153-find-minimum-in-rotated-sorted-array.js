/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0]
    
    for(let num of nums){
        min = Math.min(min, num)
    }
    
    return min
};