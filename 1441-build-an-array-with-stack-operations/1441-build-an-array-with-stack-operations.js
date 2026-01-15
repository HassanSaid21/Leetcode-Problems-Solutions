/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    if(!target.length) return undefined

    const stack =[]
    const operations= []
    for(let i =  1 ; i<= n; i++){
        stack.push(i)
        operations.push('Push')
        if(!target.includes(i)){
            stack.pop()
            operations.push('Pop')
        }
        if(target.length===stack.length)
              break
    }
          return operations
};