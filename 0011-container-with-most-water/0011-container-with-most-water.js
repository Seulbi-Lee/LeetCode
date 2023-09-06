/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0
    let end = height.length -1
    let max = 0

    while(start <= end){
        let x = end - start
        let y = Math.min(height[start], height[end])
        max = Math.max((x * y), max)

        if(height[start] < height[end]){
            start ++
            y = height[start]
        }else{
            end --
            y = height[end]
        }
    }
    
    return max
};