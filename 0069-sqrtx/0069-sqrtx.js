/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x <= 1) return x
    if (x === 2 || x === 3) return 1

    let left = 2
    let right =  Math.floor(x/2)

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        let check = mid * mid
        if (check === x) {
            return mid
        }
        else if (check < x) {
            left = mid + 1

        }
        else right = mid - 1

    }
    return right

};