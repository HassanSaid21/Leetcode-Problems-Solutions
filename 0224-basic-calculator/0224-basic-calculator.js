/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let result = 0;
    let number = 0;
    let sign = 1;
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            // Build the current number
            number = number * 10 + Number(ch);
        } else if (ch === '+') {
            // Finish the current number
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (ch === '-') {
            // Finish the current number
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (ch === '(') {
            // Save the current state
            stack.push(result);
            stack.push(sign);

            // Start a new expression
            result = 0;
            sign = 1;
            number = 0;
        } else if (ch === ')') {
            // Finish the expression inside the parentheses
            result += sign * number;
            number = 0;

            // Restore the previous state
            const previousSign = stack.pop();
            const previousResult = stack.pop();

            // Merge
            result = previousResult + previousSign * result;
        }
        // Ignore spaces
    }

    // Finish the last number
    result += sign * number;

    return result;
};