/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0 , head )
    let first = head
    let last = first?.next
    let prev = dummy
    
    while(first && last){
        first.next = last.next
        last.next = first
       prev.next =  last 
       prev= first
       first = first.next
       last = first?.next
       
    }
    return dummy.next  
    
};