/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const leng = nums.length
    const leftPrd = new Array(leng).fill(1)
    const rightPrd = new Array(leng).fill(1)
    const result = new Array(leng).fill(1)

    let leftInit = 1
    for(let i = 0; i < leng; i++){
        leftPrd[i] = leftInit
        leftInit *= nums[i]
    }

    let rightInit = 1
    for(let i = leng-1; i >= 0; i--){
        rightPrd[i] = rightInit
        rightInit *= nums[i]
    }

    for(let i = 0; i < leng; i++){
        result[i] = leftPrd[i] * rightPrd[i]
    }

    return result
}