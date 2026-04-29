/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    // 🔑 CRITICAL: JS `.sort()` defaults to string comparison! 
    // Must pass a numeric comparator for correct ordering.
    nums.sort((a, b) => a - b);
    
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate starting numbers
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Early exit: since array is sorted, if nums[i] > 0, 
        // all subsequent triplets will sum to > 0
        if (nums[i] > 0) break;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for the left pointer
                while (left < right && nums[left] === nums[left - 1]) left++;
                // Skip duplicates for the right pointer
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }

    return result;
}