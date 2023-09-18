/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1) return n    
    
    let result = [1, 1]
    
    for(let i = 2; i <= n; i++) {
        result.push(result[i-2] + result[i-1])
    }
    
    return result[n]
};