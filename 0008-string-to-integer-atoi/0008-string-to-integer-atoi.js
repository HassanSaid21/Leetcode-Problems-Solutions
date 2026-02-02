/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
let num =0
isfirstSign = true
let isLeadingWhiteSpaces=true
let sign = 1
for(let c of s){
    if(c===' ' && isLeadingWhiteSpaces) continue
    if((c== '-'  ||c=='+') && isfirstSign ){
         if(c==='-')sign =-1 
        isfirstSign= false
        isLeadingWhiteSpaces = false
    }
      
    else if(!Number.isNaN(parseInt(c))){
        isfirstSign=false   
isLeadingWhiteSpaces= false 
        num= num*10 + (+c)
        console.log(num)
    }
    else{
     
        break ;
    }
}

num*= sign
if(num < (-2)**31) return (-2)**31
if(num > (2**31 -1)) return 2**31 -1
return num    
};