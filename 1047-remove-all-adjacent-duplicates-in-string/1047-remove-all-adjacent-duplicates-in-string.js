/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    

    let stack =[]
    for(let c of s){
        if(stack[stack.length-1]===c){
            stack.pop()
        }
        else stack.push(c)

    }

    let res=''
for (let i  = 0  ;  i < stack.length ; i++){
    res+= stack[i]
}


return res
};