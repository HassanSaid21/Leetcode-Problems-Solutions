/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n===1) return 1 
   let fast  = squaresSum(n)
   let slow = n
   
   while(fast!== slow){
  fast   =  squaresSum(squaresSum(fast))
   slow =  squaresSum(slow)
 if(fast===1) return true

   }
return false
};


function squaresSum(n){
    let sum=0
    while(n>0){
      sum+= (n%10)**2
        n= Math.trunc(n/10)
    }
    
 return sum
}