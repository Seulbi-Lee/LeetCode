/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = word1.split('');
    let ind = 1;

    for(let el of word2){
        result.splice(ind, 0, el);
        ind += 2;
    }

    return result.join('');
};