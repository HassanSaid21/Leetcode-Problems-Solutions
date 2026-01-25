/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     let max = 0
     let counter = 0
     for(let n of nums){
        counter = n===1 ?counter+1: 0
        max= counter>max ?counter:max
        }
     
     return max
};