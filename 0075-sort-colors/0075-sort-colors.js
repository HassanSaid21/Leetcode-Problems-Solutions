/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    

    let left = 0 , right = nums.length-1

    for(let i = 0  ; i< nums.length ;  i++){

        while(i<=right){
            if(nums[i]===0){
            [nums[left], nums[i]] =  [nums[i] , nums[left]]
              left++
              i++
            }
         else if(nums[i]=== 2){
            [nums[i], nums[right]] =  [nums[right] , nums[i]]
           right--
         }
         else
        i++
}
    } 
          
          return nums
}