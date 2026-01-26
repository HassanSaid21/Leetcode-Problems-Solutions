/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    let sign = x < 0 ? -1 : 1
    x = Math.abs(x)

    while (x > 0) {
        const digit = x % 10
        if (res > Math.floor((2**31 - 1) / 10)) return 0

        res = res * 10 + digit
        x = Math.floor(x / 10)
    }

    return res * sign


};