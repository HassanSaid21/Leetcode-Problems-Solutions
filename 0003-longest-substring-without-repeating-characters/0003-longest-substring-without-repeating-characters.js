/**
 * @param {string} s
 * @return {number}
 */

 // pwwkew
var lengthOfLongestSubstring = function(s) {
    let max = 0
     let i =   0
    let chars  ={}
    let c = 0
    for( c;  c < s.length  ; c++) {
        if(chars[s[c]]===undefined){
            chars[s[c]]=c
           i++ 
            
        }else{
           c = chars[s[c]]+1
             chars={}
             chars[s[c]]=c
            max = i>max ?i :max
            i=1
        }
    }
    console.log(i , chars)
    max=  i>max?i:max
  
  

     return max
    
};