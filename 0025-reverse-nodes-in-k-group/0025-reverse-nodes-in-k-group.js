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
var reverseKGroup = function(head, k) {
    if(!head ||k===1) return head
  let dummy = new ListNode()
  let prevGroupTail = dummy
  let cur = head 
   
   let length = 0
   
    while(cur){
    length++
     cur = cur.next
    }
    
    cur = head
      while(length>=k){
         let prev = null
         let tail = cur
        for (let i = 0 ; i<k ; i++){
                let temp = cur.next
                cur.next = prev
                prev= cur
                cur = temp
        }
         tail.next = cur
         prevGroupTail.next= prev
         prevGroupTail = tail
         length-=k
      
      }

    return dummy.next
};



















