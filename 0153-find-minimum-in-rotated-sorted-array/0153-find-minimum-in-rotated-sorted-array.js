/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length
    let start = 0
    let end = n - 1
    let min = nums[0]
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        // 우측으로 증가하는 정렬된 배열에서 기준값이 좌측값보다 작으면 기준값은 최소값
        if(nums[mid-1] > nums[mid]) {
            min = nums[mid]
        }
        
        // 순행구간 체크
        if(nums[mid] < nums[end]) {  // 우측 순행중(우측에서 최소값은 mid)
            end = mid - 1            // 좌측 탐색
        }else {                      // 좌측에서 순행중
            start = mid + 1          // 우측 탐색
        }
    }
    
    return min
};



