/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = 1
    let min = 1
    let result = nums[0]

    for(let num of nums){
        let newNums = [num, num*max, num*min]
        max = Math.max(...newNums)
        min = Math.min(...newNums)
        result = Math.max(result, max)
    }
    return result
};

/*
최소값 = 음수 * 양수
최소값 * 음수 = 최대값
최소값을 min에 담아두고 계속 곱셈 돌리면서 언젠가 나올 또 다른 음수에 대응

nums = [-2, 3, 4, 0, 5, -9]

newNums 계산 값
[num,   num*max,     min*min]       min     max
 -2    -2* 1 = -2   -2* 1 = -2      -2      -2
  3     3*-2 = -6    3*-2 = -6      -6       3
 -4    -4* 3 = -12  -4*-6 =  24     -12      24  // 결과값
  0     0*24 =  0    0*-12=  0       0       0
  5     5* 0 =  0    5* 0 =  0       0       5
 -9    -9* 5 = -45  -9* 0 =  0      -45      5

*/