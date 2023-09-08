/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let num = n.toString(2).split('').reverse()
    let arr = new Array(32).fill(0)
    let result = parseInt((num.join('')), 2)
    
    if(num.length !== arr.length){
        for(let i in num){
            arr[i] = num[i]
        }
        result = parseInt((arr.join('')), 2)
    }
    
    return result
};

/*
.toString(n) : 10진수 > n진수
parseInt(num, 2) : n진수 > 10진수 
*/