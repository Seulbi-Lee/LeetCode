/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length
    let start = 0
    let end = n-1
    let result = -1

    while(start <= end){
        let mid = Math.floor((start+end) / 2)

        if(nums[mid] === target){
            result = mid
            break
        }else{
            if(nums[mid] < nums[end]){
                if(nums[mid] < target && target <= nums[end]){
                    start = mid + 1
                }else{
                    end = mid -1
                }
            }else{
                if(nums[start] <= target && target < nums[mid]){
                    end = mid -1
                }else{
                    start = mid + 1
                }
            }
        }
    }

    return result
};