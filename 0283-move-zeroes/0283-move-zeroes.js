/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numInd = 0;
    
    // move numbers, add index
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[numInd] = nums[i];
            numInd++;
        }
    }
    
    // push zeroes
    for(let i = numInd; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
};