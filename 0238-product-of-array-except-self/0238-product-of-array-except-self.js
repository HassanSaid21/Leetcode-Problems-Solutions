/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let right = nums.length-1
    let left =  0
    let rightProduct = 1
    let leftProduct =  1
   let res = Array.from({ length: nums.length }, () => 1);
    while(right>=0){
        res[left]*= leftProduct
        res[right]*= rightProduct
        leftProduct*= nums[left]
        rightProduct*= nums[right]
        left++
        right--
    }
    return res
};