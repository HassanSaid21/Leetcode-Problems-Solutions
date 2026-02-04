/**
 * @param {number[]} digits
 * @return {number[]}
 */

  
   var plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] < 10) return digits
    digits[i] = 0
  }
  digits.unshift(1)
  return digits


  }
