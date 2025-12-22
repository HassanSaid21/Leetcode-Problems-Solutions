/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
      let small = 0
      let big =  s.length
      const out = []

      for(const i of s){
              if(i==='D'){
                out.push(big)
                big--
              }
              else{
                out.push(small)
                small++
              }
      }
      out.push(small)
      return out
};