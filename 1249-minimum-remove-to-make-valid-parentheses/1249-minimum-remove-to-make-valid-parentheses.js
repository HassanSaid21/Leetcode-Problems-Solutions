/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {

    let res = ''

    let openStack = []
    let closeStack = []
    
    for (let i= 0; i<s.length  ;   i++) {
        if (s[i] === '(') {
            openStack.push(i)

        }
       else if (s[i] === ')') {
            closeStack.push(i)

            if (openStack.length !== 0) {
                closeStack.pop()
                openStack.pop()


            }

        }
        
    }
    let set =  new Set ([...openStack , ...closeStack])
    for (let i= 0 ; i<s.length ;i++) {
        if (!set.has(i)) {
            res += s[i]
        }
    }



     return res
};