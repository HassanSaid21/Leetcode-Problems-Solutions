/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
      if(x==0 ) return  x
    let reversed = 0 
    let signed = x<0
    signed ?  x*=-1 :x =x
    while (x>0){ 

      reversed  =  reversed*10 +  x%10
      if( reversed >2**31-1||reversed < (-2)**31 )return 0
      x= Math.floor(x/10)
    }


  return signed ? reversed*-1 :reversed

};