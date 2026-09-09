/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
let remainingRows= matrix.length
let remainingCols = matrix[0].length

let col =-1
let row =0
let direction =1
let res = []
while(remainingRows> 0 &&remainingCols>0){

    for(let i = 0 ; i<remainingCols ; i++){
        col+=direction
        res.push(matrix[row][col])
    }
    remainingRows--

    for(let i = 0 ; i<remainingRows ; i++){
   row+=direction
   res.push(matrix[row][col])
    }
      remainingCols--
    direction*=-1
}
return res
}