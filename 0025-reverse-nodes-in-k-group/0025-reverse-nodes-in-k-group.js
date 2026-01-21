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
    if(k==1 ||!head ) return head
    let cur = head 
    let dummy= new ListNode(0, head)
    let prevGroup = dummy
    let nextGroup

    while(true){
      let prevGroupTail= prevGroup
        for(let i =  0 ; i<k ; i++){
                prevGroupTail = prevGroupTail.next
                if(!prevGroupTail) return dummy.next
            }
    

         nextGroup = prevGroupTail.next


        cur = prevGroup.next
        let prev = nextGroup

         while(cur!==nextGroup){
            let next = cur.next 
            cur.next = prev
            prev = cur
            cur = next
         }
           let temp = prevGroup.next 
         prevGroup.next =  prev
         prevGroup = temp


}
   

    
};