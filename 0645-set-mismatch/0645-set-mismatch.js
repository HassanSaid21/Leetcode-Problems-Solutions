/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const seen = new Set()
    let duplicate = -1
    let actualSum = 0

    for (let num of nums) {
        if (seen.has(num)) {
            duplicate = num
        }
        seen.add(num)
        actualSum += num
    }

    const n = nums.length
    const expectedSum = (n * (n + 1)) / 2

    const missing = expectedSum - (actualSum - duplicate)

    return [duplicate, missing]
};
