/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1) return 1
    
    let step1 = 1
    let step2 = 2

    for(let i = 3; i <= n; i++) {
        let sumStep = step1 + step2
        step1 = step2
        step2 = sumStep
    }
    return step2
};