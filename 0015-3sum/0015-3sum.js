/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let n = nums.length
    let result = []

    for (let i = 0; i < n-2; i++){
        let j = i + 1
        let k = n - 1
        
        while (j < k){
            if(nums[i] + nums[j] + nums[k] === 0){
                result.push([nums[i],nums[j],nums[k]])
                while(nums[j + 1] === nums[j]) j++;     // 반복된 숫자 스킵
                while(nums[k - 1] === nums[k]) k--;     
            }

            if(-(nums[i]+nums[j]) < nums[k]){   // 찾아야 할 값이 k보다 작으면, 값은 왼쪽에 있을 수 있음.
                k --    // k를 왼쪽으로 순회
            }else{
                j ++    // j를 오른쪽으로 순회(다음 어레이 탐색)
            }
        }

        while (nums[i + 1] === nums[i]) {   // 반복된 숫자 스킵
            i ++
        }
    }

    return result
};

/*
[-4, -1, -1, 0, 1, 2]

nums[i] + nums[j] =  0 - nums[k]

-4 + -1 = 0 - 5
필요한 값 확인 후 오른쪽으로만 탐색

*/
