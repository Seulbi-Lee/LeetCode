/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b > 0){
        for(let i = 0; i < b; i++){
            a++
        }
    }else{
        for(let i = 0; i > b; i--){
            a--
        }
    }
    return a
};