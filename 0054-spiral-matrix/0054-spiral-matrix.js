/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//     let rows = matrix.length
//     let cols = matrix[0].length
//     let row = 0, col = 0
//     let res = []
//     let colLayer =0 , rowLayer= 0
//     let matrixLength = rows * cols
//     while (res.length < matrixLength) {
//     //to-right
//       while(col<cols){
//       res.push(matrix[row][col])
//             col++
//       }
//       col--
//       row++

//       //to-bottom
//       while(row<rows){
//         res.push(matrix[row][col])
//             row++
//        }
//     row--
//     col--

//       // to-left
//        while(col>=colLayer){
//         res.push(matrix[row][col])
//             col--
//        }
//     col++
//     row--
//      //to-top
//      while(row>rowLayer){
//           res.push(matrix[row][col])
//             row--
//      }
//      row++
//      col++
         
//     rows--
//     cols--
//     colLayer++
//     rowLayer++
//     }

//     while(res.length>matrixLength){
//       res.pop()  
//     } 
//     return res
// };

function spiralOrder(matrix) {    let rows = matrix.length;    let cols = matrix[0].length;    let row = 0;    let col = -1;    let direction = 1;    const result = [];    while (rows > 0 && cols > 0) {        for (let i = 0; i < cols; i++) {            col += direction;            result.push(matrix[row][col]);        }        rows--;        for (let i = 0; i < rows; i++) {            row += direction;            result.push(matrix[row][col]);        }        cols--;        direction *= -1;    }    return result;}


// var spiralOrder = function (matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;

//     let top = 0;
//     let bottom = rows - 1;
//     let left = 0;
//     let right = cols - 1;

//     const res = [];

//     while (top <= bottom && left <= right) {

//         // → Right
//         for (let col = left; col <= right; col++) {
//             res.push(matrix[top][col]);
//         }
//         top++;

//         // ↓ Down
//         for (let row = top; row <= bottom; row++) {
//             res.push(matrix[row][right]);
//         }
//         right--;

//         // ← Left
//         if (top <= bottom) {
//             for (let col = right; col >= left; col--) {
//                 res.push(matrix[bottom][col]);
//             }
//             bottom--;
//         }

//         // ↑ Up
//         if (left <= right) {
//             for (let row = bottom; row >= top; row--) {
//                 res.push(matrix[row][left]);
//             }
//             left++;
//         }
//     }

//     return res;
// };