/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  
     let sum = digits[digits.length-1]+1
     if( sum< 10 ){
     digits[digits.length-1]= sum
      return digits
     }
      
    let carry = 1
     let i = digits.length-1
 while (carry===1){
      let sum = carry
      sum+=digits[i]
       if( i>=0 ){
        digits[i]= sum %10
        carry = Math.floor(sum/10)
       i--
       } 
       else{
        digits.unshift(carry) 
        break
       } 
  
     }
     
  
  return digits
  }
