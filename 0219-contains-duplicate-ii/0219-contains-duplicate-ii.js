/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
     
    if(nums.length<=1)return false
     
    let hash ={}
    for (let i =0  ;i < nums.length ; i++){
        if(hash[nums[i]]!==undefined){
           if( i - hash[nums[i]] <= k ) return true
           hash[nums[i]]=i
        }
        else {
            hash[nums[i]]=i
        }
    }
    return false
};