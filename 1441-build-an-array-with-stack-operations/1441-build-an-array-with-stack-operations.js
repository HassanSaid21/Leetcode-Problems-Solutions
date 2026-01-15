/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const operations= []
    let j =0
    for(let i =  1 ; i<= n; i++){
        operations.push('Push')
        if(i===target[j]){
           j++
        if(target.length===j)
              break
        }
           else{
            operations.push('Pop')
           }

      
    }
          return operations
};