/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head
    let slow = head
    let i = n-1    
    while (i) {
        fast = fast.next
        i--
    }
    if(!fast)  return head
    if (!fast.next) { 
        return head.next
     } 

let prev = null
    while (fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next

    }
   
 prev.next  = slow.next
    return head
};