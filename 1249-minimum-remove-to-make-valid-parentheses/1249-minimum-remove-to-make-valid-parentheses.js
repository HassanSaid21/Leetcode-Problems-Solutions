/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {

    let res = ''

    let stack1 = []
    let stack2 = []
    
    for (let i= 0; i<s.length  ;   i++) {
        if (s[i] === '(') {
            stack1.push(i)

        }
        if (s[i] === ')') {
            stack2.push(i)

            if (stack1.length !== 0) {
                stack2.pop()
                stack1.pop()


            }

        }
        
    }
    let set =  new Set ([...stack1 , ...stack2])
    for (let i= 0 ; i<s.length ;i++) {
        if (!set.has(i)) {
            res += s[i]
        }
        
    }



     return res
};