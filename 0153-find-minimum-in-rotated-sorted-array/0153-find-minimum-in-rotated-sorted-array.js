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
        
        // 마지막 위치 값이 기준값 보다 작으면 최소값은 오른쪽에 있게되므로 오른쪽 탐색, 아니면 왼쪽 탐색
        if(nums[mid] > nums[end]) {
            start = mid + 1             // 시작점을 기준값의 우측으로 한 칸 이동 
        }else {
            end = mid - 1               // 시작점을 기준값의 좌측으로 한 칸 이동
        }
    }
    
    return min
};

/*
Binary Search

s     m     e
3, 4, 5, 1, 2
   -  -     -
   4 > 5 : flase
   5 > 2 : true -> start = mid + 1
// start = 1, end = 2, mid = 1, min = 초기값

        s,m e
3, 4, 5, 1, 2
      -  -  -
      5 > 1 : ture -> min = 1
      1 > 2 : flase -> end = mid - 1
// start = 1, end = 5, mid = 5, min = 1

*/


