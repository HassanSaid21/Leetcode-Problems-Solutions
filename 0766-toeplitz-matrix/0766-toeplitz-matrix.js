/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    const rows =  matrix.length
    const cols =  matrix[0].length
    let i =0 , j= 0
    for(i ; i<rows-1 ;i++){
     while(j<cols-1){
        if(matrix[i][j]!==matrix[i+1][j+1]){
           return false
        }
            j++

     } 

      j=0
    }


    return true
};