/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
    let rows = grid.length
    let cols = grid[0].length
    let row, col
    let answer = Array.from({ length: cols }, () => -1)

    for (let i = 0; i < cols; i++) {
        row = 0
        col = i
        //  we loop on each col until it get stuck or reach the end 
        while (row < rows) {
            //check wether the ball in right diagonal 
            if (grid[row][col] === 1) {
                //check if it stucks by checking on the v shape or it reach end of the wall
                if (grid[row][col] !== grid[row][col + 1] || grid[row][col + 1] === undefined) {
                    break;
                }
                col++

            }
            //checking the left diagonal
            else {
                // now check if it stucks by checking on the v shape or it reach end of the wall
                if (grid[row][col] !== grid[row][col - 1] || grid[row][col - 1] === undefined) {
                    break;
                }

                col--
            }


            row++
            // if the ball get outside  
            // we put the output col in the index of the answer
            if (row === rows) {
                answer[i] = col
                break;
            }




        }

    }
    return answer
};