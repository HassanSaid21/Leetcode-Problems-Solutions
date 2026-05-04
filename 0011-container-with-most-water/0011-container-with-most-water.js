/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = minHeight * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line inward
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};