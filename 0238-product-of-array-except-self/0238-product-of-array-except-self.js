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
        result[i] = leftPrd[i]
    }

    let rightInit = 1
    for(let i = leng-1; i >= 0; i--){
        rightPrd[i] = rightInit
        rightInit *= nums[i]
        result[i] *= rightPrd[i]
    }

    return result
}

/*
num = [1,2,3,4]

1, 2, 3, 4
----------
1, 1, 1, 1 - init value
----------
   1, 1, 1
      2, 2
         3
----------
1, 1, 2, 6 - leftPrd
----------

1, 2, 3, 4
----------
1, 1, 1, 1 - init value
----------
4, 4, 4
3, 3
2, 
----------
24,12, 4, 1 - rightPrd
----------

left * right
----------
24,12, 8, 6
----------

excepted number
----------
1, 2, 3, 4
----------
*/