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
   
   let groups = 0
   let counter  =0
    while(cur){
     counter++
     if(counter ===k){
        counter= 0
        groups++
     }
    
     cur = cur.next
    }
    
    cur = head
      while(groups>0){
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
         groups--
      
      }

    return dummy.next
};



















