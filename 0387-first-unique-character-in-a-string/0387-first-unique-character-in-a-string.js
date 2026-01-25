/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    
    for (let i = 0 ; i<s.length;i++){
        if(!hash[s[i]]){
           hash[s[i]] = [i , 1]
        }
        else
        hash[s[i]][1]= hash[s[i]][1]+1
    }

    for (let c of s){
        if(hash[c][1]===1)return hash[c][0]
    }
    return -1
};