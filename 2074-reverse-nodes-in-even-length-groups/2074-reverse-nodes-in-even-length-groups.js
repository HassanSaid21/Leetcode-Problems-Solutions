var reverseEvenLengthGroups = function(head) {
    let dummy = new ListNode(0, head);

    let prevGroupTail = dummy;
    let groupSize = 1;

    while (prevGroupTail.next) {

        // group start
        let groupHead = prevGroupTail.next;

        // determine actual length
        let node = groupHead;
        let actualLength = 0;

        while (node && actualLength < groupSize) {
            node = node.next;
            actualLength++;
        }

        // EVEN LENGTH GROUP
        if (actualLength % 2 === 0) {

            let prev = node;
            let cur = groupHead;

            for (let i = 0; i < actualLength; i++) {
                let next = cur.next;

                cur.next = prev;

                prev = cur;
                cur = next;
            }

            prevGroupTail.next = prev;

            prevGroupTail = groupHead;
        }

        // ODD LENGTH GROUP
        else {

            for (let i = 0; i < actualLength; i++) {
                prevGroupTail = prevGroupTail.next;
            }
        }

        groupSize++;
    }

    return dummy.next;
};