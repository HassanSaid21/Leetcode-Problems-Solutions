/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n= nums.length
    let sum1 = 0 , sum2= n

    for(let i = 0 ; i<n  ; i++){
   sum1+= nums[i]
   sum2+=i
    }

    return sum2-sum1

};