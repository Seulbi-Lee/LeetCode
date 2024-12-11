/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    // sort numbers in descending order
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length; i += 2) {
        if(nums[i] !== nums[i + 1]) {
            result = nums[i];
            break;
        }
    }
    
    return result;
};