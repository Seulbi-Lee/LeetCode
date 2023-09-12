/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return parseInt(n.toString(2).padStart(32,"0").split('').reverse().join(''), 2)
};

/*
padStart(count, "number") : count만큼 number를 앞쪽부터 빈칸에 채움
.toString(n) : 10진수 > n진수
parseInt(num, 2) : n진수 > 10진수 
*/