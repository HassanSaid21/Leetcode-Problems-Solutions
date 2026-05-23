function circularArrayLoop(nums) {
    const n = nums.length;
    const nextIndex = (i) => ((i + nums[i]) % n + n) % n;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;
        
        const direction = nums[i] > 0;
        let slow = i, fast = i;

        while (true) {
            // Move slow 1 step
            const slowNext = nextIndex(slow);
            // 🔧 FIX: nums[slowNext] > 0, NOT slowNext > 0
            if ((nums[slowNext] > 0) !== direction || slowNext === slow) break;
            slow = slowNext;

            // Move fast 1st step
            const fastNext1 = nextIndex(fast);
            if ((nums[fastNext1] > 0) !== direction || fastNext1 === fast) break;
            fast = fastNext1;

            // Move fast 2nd step
            const fastNext2 = nextIndex(fast);
            if ((nums[fastNext2] > 0) !== direction || fastNext2 === fast) break;
            fast = fastNext2;

            // Cycle detected
            if (slow === fast) return true;
        }

        // Mark path as visited
        let cur = i;
        while (nums[cur]>0 !==direction) {
            const next = nextIndex(cur);
            nums[cur] = 0;
            cur = next;
        }
    }
    return false;
}