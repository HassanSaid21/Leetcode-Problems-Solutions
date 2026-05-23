/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {

    const n = nums.length;

    function nextIndex(i) {
        return ((i + nums[i]) % n + n) % n;
    }

    for (let i = 0; i < n; i++) {

        // already processed
        if (nums[i] === 0) continue;

        let direction = nums[i] > 0;

        let slow = i;
        let fast = i;

        while (true) {

            // move slow
            let nextSlow = nextIndex(slow);

            // invalid direction
            if ((nums[nextSlow] > 0) !== direction) {
                break;
            }

            // self loop
            if (nextSlow === slow) {
                break;
            }

            // move fast first step
            let nextFast = nextIndex(fast);

            if ((nums[nextFast] > 0) !== direction) {
                break;
            }

            if (nextFast === fast) {
                break;
            }

            // move fast second step
            nextFast = nextIndex(nextFast);

            if ((nums[nextFast] > 0) !== direction) {
                break;
            }

            if (nextFast === nextIndex(nextFast)) {
                break;
            }

            slow = nextSlow;
            fast = nextFast;

            // cycle found
            if (slow === fast) {
                return true;
            }
        }

        // mark path as visited
        let current = i;

        while ((nums[current] > 0) === direction) {

            let next = nextIndex(current);

            nums[current] = 0;

            // stop if self-loop
            if (next === current) {
                break;
            }

            current = next;
        }
    }

    return false;
};