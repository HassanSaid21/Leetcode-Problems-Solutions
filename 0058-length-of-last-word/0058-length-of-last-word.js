/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let nonEmpty = true
    let res  =''
    for( let c of s){
        if(c !== ' ' && nonEmpty ){
           res+= c 
        } 
        else if( c===' ') nonEmpty=false
        else {
            res=  ''
            res+= c
            nonEmpty= true
        }
    }
    return res.length

};