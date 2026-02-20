/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head ) return null
    if(head.next ===null || k===0) return head
    let tail
    let cur  = head
    let length = 0
    while( cur ){
     length++
     tail= cur
     cur= cur.next
    }
    //   console.log(cur , tail , length)
    cur = head
    let n = k % length
    if(n===0) return head
        console.log(n , length)
    for(let i = 0 ;  i<length-n-1 ;  i++){
        cur= cur.next
    }
    let temp = cur.next
    cur.next  = null
    tail.next = head
    head= temp
    // console.log(head , temp , cur , tail)
     return head

};