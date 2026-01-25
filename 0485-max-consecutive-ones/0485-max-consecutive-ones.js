/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     let max = 0
     let counter = 0
     for(let n of nums){
    if(n===0){
        max= counter > max ? counter :max
        counter= 0 
    }
    else
    counter++
          
        }
     
     return max>counter?max:counter
};