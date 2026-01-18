/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const dummy1 = new ListNode()
      const dummy2 = new ListNode()
     let p1 = dummy1
      let p2 = dummy2
      let cur = head
while(cur){
    if(cur.val < x){
        p1.next = cur
        p1= p1.next
    }else{
           p2.next = cur
            p2= p2.next
    }
    let next = cur.next 
        cur.next =null 
        cur= next
}
  p1.next = dummy2.next 
  head= dummy1.next
  return head
};