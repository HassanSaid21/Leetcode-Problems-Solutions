/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canThreePartsEqualSum(arr) {
  const total = arr.reduce((a, b) => a + b, 0);

  if (total % 3 !== 0) return false;

  const target = total / 3;
  let sum = 0;
  let count = 0;

  // stop before last index to keep third part non-empty
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];

    if (sum === target) {
      count++;
      sum = 0;
    }

    if (count === 2) return true;
  }

  return false;
}
