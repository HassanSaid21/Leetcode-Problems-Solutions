/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let row = 0, col = 0
    let res = []
    let colLayer =0 , rowLayer= 0
    let matrixLength = rows * cols
    while (res.length < matrixLength) {
    //to-right
      while(col<cols){
      res.push(matrix[row][col])
            col++
      }
      col--
      row++

      //to-bottom
      while(row<rows){
        res.push(matrix[row][col])
            row++
       }
    row--
    col--

      // to-left
       while(col>=colLayer){
        res.push(matrix[row][col])
            col--
       }
    col++
    row--
     //to-top
     while(row>rowLayer){
          res.push(matrix[row][col])
            row--
     }
     row++
     col++
         
    rows--
    cols--
    colLayer++
    rowLayer++
    }

    while(res.length>matrixLength){
      res.pop()  
    } 
    return res
};