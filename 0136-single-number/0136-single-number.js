/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let n of nums) {
        result ^= n; // XOR cancels out duplicates
    }
    return result;
};