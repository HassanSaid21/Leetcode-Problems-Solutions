var rotate = function(matrix) {
    const n = matrix.length;

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top < bottom) {

        for (let i = 0; i < right - left; i++) {

            let temp = matrix[top][left + i];

            // bottom-left → top-left
            matrix[top][left + i] =
                matrix[bottom - i][left];

            // bottom-right → bottom-left
            matrix[bottom - i][left] =
                matrix[bottom][right - i];

            // top-right → bottom-right
            matrix[bottom][right - i] =
                matrix[top + i][right];

            // top-left → top-right
            matrix[top + i][right] =
                temp;
        }

        top++;
        bottom--;
        left++;
        right--;
    }

    return matrix;
};