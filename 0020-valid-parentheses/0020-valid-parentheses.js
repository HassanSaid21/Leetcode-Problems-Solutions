/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     const openTags ={'(' :')' ,
//       '{': '}','[':']'}
//     //const closedTages  = [')',']','}']
//     const validClosedTags = []
//     for (let i of s){
//         if (openTags.hasOwnProperty(i)){
//             validClosedTags.unshift(openTags[i])
//         }
//         else if(i!==validClosedTags.shift()){
//                     return false
//         }
       
//     }
    
//     return validClosedTags.length===0
     
// };

var isValid = function (s) {
  const openTags = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let char of s) {
    if (Object.hasOwn(openTags, char)) {
      stack.push(openTags[char]); // expect this closing
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

