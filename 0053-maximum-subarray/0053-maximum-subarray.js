/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let max = nums[0]   // 음수 대응
    for(let num of nums){
        // num 과 num+sum 값 중 큰 값을 저장. num+sum보다 num이 더 크면 이전 합 버리고num부터 다시 더함.
        sum = Math.max(num, sum + num)
        max = Math.max(sum, max)
    }
    return max
};
