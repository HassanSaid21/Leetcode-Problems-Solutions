/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let rows = image.length
    let cols = image[0].length
    let k = cols-1
    for(let i = 0 ; i<rows ;  i++){
        for(let j = 0 ; j<cols ; j++){
            if(j<k){
          [image[i][j] , image[i][k]]=[image[i][k] , image[i][j]]
            k--
            }
          if(image[i][j]===0){
            image[i][j]=1
          }
          else{
            image[i][j]=0
          }
          
        }
        k=cols-1
    }

return image
};