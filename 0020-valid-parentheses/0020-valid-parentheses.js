/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openTags ={'(' :')' ,
      '{': '}','[':']'}
    //const closedTages  = [')',']','}']
    const validClosedTags = []
    for (let i of s){
        if (openTags.hasOwnProperty(i)){
            validClosedTags.unshift(openTags[i])
        }
        else if(i!==validClosedTags.shift()){
                    return false
        }
       
    }
    if(validClosedTags.length>0)return false
    return true
     
};
