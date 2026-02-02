var myAtoi = function (s) {
    let num = 0
    let sign = 1
    let i = 0

    const INT_MIN = -(2 ** 31)
    const INT_MAX = 2 ** 31 - 1

    // 1️⃣ Skip leading spaces
    while (i < s.length && s[i] === ' ') i++

    // 2️⃣ Handle sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1
        i++
    }

    // 3️⃣ Parse digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i] - '0')

        // 4️⃣ Clamp early (optional but smart)
        if (sign * num <= INT_MIN) return INT_MIN
        if (sign * num >= INT_MAX) return INT_MAX

        i++
    }

    return sign * num
}
