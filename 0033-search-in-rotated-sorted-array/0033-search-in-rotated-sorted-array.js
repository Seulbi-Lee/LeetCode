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
            // 순행구간 체크
            if(nums[mid] < nums[end]){  // 우측순행
                if(nums[mid] < target && target <= nums[end]){  // 순행구간 사이에 타겟 존재 여부
                    start = mid + 1     // 있으면 우측탐색
                }else{
                    end = mid -1        // 없으면 좌측탐색
                }
            }else{  // 좌측순행
                if(nums[start] <= target && target < nums[mid]){  // 순행구간 사이에 타겟 존재 여부
                    end = mid -1        // 있으면 좌측탐색
                }else{
                    start = mid + 1     // 없으면 우측탐색
                }
            }
        }
    }

    return result
};



