/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1]
    if (nums.length === 1) {
        return nums[0] === target ? [0, 0] : [-1, -1]
    }

    let first = binarySearch(nums, target)
    let last = binarySearch(nums, target, 'right')
    return [first, last]


};

const binarySearch = (nums, target, side = 'left') => {
    let left = 0, right = nums.length - 1
    let ans = -1

    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)

        let check = nums[mid]
        if (check === target) {
            ans = mid
            if (side === 'left') 
               right = mid - 1
            else 
            left = mid + 1
        }

        else if (check < target)
            left = mid + 1
        else
            right = mid - 1

    }



    return ans
}