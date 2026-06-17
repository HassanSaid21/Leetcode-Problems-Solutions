/**
 * @param {number[]} w
 */
var Solution = function(w) {

   
    let prefixSum = []
    let sum = 0
    for(let n of w){
        sum+=n
        prefixSum.push(sum)
    }
   
    this.prefixSum = prefixSum
    this.total  = sum

};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
   
 // [ 2, 5, 3] =>[2,7,10]
    let randomNumber =Math.floor( Math.random()*this.total )+1
  
    let left = 0 , right  =  this.prefixSum.length -1
     let ans = 0
    while(left<=right){
        let mid =Math.floor((left+right)/2)
        if(this.prefixSum[mid]>= randomNumber)
           {
            ans = mid
            right = mid-1
           }
        else  left = mid+1
    }
    return ans
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */