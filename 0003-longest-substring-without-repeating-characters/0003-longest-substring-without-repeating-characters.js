/**
 * @param {string} s
 * @return {number}
 */

 // pwwkew
var lengthOfLongestSubstring = function(s) {
    let k = []
     let i =   0
    let chars  ={}
    let c = 0
    for(c  ;  c< s.length ;c++) {
        if(chars[s[c]]===undefined){
            chars[s[c]]=c
            
           i++ 
        }else{
            
           c = chars[s[c]]+1
             chars={}
             chars[s[c]]=c
            k.push(i)
            i=1
        }
    }
   k.push(i)
  

     return k.sort((a,b)=>a-b)[k.length-1]
    
};