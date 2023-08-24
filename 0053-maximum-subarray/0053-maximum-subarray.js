/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let max = nums[0]   // 음수대응
    for(let num of nums){
        sum = Math.max(num, sum + num)
        max = Math.max(sum, max)
    }
    return max
};

/*
Kadane's Algorithm

현재값과 이전의 합과 현재의 값의 합을 비교하여 현재 값이 클 경우 이전의 합은 버리고 현재부터 다시 합

nums = [-2,1,-3,4,-1,2,1,-5,4]

     sum = 아래 둘 중 큰값
     --------
sum  num        max
 0 + -2  = -2   -2  // nums[0] 초기값
-2 +  1  = -1    1  // nums[1] 부터시작
 1 + -3  = -2    1
-2 +  4  =  2    4  // nums[3] 부터시작
 4 + -1  =  3    4
 3 +  2  =  5    5
 5 +  1  =  6    6  // nums[6] 에서끝남
 6 + -5  =  1    6
 1 +  4  =  5    6
 
*/