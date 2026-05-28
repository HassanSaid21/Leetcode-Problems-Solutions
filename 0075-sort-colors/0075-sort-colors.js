// var sortColors = function(nums) {
//     let low = 0;
//     let mid = 0;
//     let high = nums.length - 1;

//     while (mid <= high) {

//         if (nums[mid] === 0) {

//                // es6 feature 
//             [nums[low], nums[mid]] = [nums[mid], nums[low]];

//             low++;
//             mid++;

//         } else if (nums[mid] === 1) {

//             mid++;

//         } else {

//             [nums[mid], nums[high]] = [nums[high], nums[mid]];

//             high--;
//         }
//     }
// };



function sortColors(nums){
    let c0 = 0   , c1 = 0 , c2 = 0
    for(let n of nums){
        if(n===0)  c0++
        if(n===1)  c1++
        if(n===2)  c2++
    }
    let index =  0
    while(c0--) nums[index++] = 0
    while(c1--) nums[index++] = 1
    while(c2--) nums[index++] = 2
 return nums
}