/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let n = nums.length 
    if(n<k) return -1

    let curSum = 0 
    for(let i = 0 ; i<k ; i++){
        curSum+=nums[i]
    }
  let  curAver =  curSum/k
    let maxAver = curAver
    for(let i =  k ;  i<n ; i++){
        curSum+= nums[i]-nums[i-k]
       curAver =  curSum /k
       maxAver = curAver>maxAver?curAver:maxAver
    }

    return maxAver

};