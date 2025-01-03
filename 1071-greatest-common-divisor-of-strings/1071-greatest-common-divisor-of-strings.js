/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 문자열이 같은 패턴이 아닐 경우
    if(str1 + str2 !== str2 + str1) {
        return "";
    }
    
    // 유클리드 호제법 함수
    const gcd = function(a, b) {
        if(b === 0) {
            return a; // gcd 값
        }
        return gcd(b, a % b);
    }
    
    // gcd값 = 동일 패턴의 문자열 길이
    const gcdLength = gcd(str1.length, str2.length);
    
    // 문자열 길이만큼 자르기
    return str1.slice(0, gcdLength);
};