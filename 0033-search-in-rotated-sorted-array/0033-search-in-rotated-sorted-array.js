/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1
    //  [3, 5, 1]  t =  3
    while (low <= high) {
        let mid = Math.floor((high + low) / 2) // 1

        if (nums[mid] === target) return mid

        if (nums[mid] <= nums[high]) { // false 
            if (nums[mid] > target || nums[high] < target) high = mid - 1
            else
                low = mid + 1
        }

        else if (nums[mid] >= nums[low]) {  //true
            if (nums[mid] < target || nums[low] > target) low = mid + 1
            else high = mid - 1  //  high  =  0
        }


    }
    return -1
};