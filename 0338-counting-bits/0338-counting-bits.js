/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    return Array(n+1).fill(0).map((v, i) => v = i.toString(2).split('0').join('').length)
};