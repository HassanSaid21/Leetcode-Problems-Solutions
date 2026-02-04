/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let n1 = edges[0]
    let n2 =  edges[1]
   if( n1[0] ===n2[0]  ||n1[0]===n2[1]) return n1[0]

   return n1[1]
};