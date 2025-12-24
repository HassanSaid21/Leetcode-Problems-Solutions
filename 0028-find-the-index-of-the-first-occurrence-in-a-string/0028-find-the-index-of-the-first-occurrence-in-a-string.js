/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;

  let index = -1;
  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (j === 0) index = i;
      j++;

      if (j === needle.length) return index;
    } else {
      if (j > 0) {
        i = index; // rewind
      }
      j = 0;
      index = -1;
    }
    i++;
  }

  return -1;
};
