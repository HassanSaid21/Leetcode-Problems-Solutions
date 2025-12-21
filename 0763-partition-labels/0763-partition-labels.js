/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
   
  const last = {};
  const result = [];

  // Step 1: last occurrence
  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }

  // Step 2: greedy partition
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
}

    
