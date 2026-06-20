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
var reverseEvenLengthGroups = function(head) {
      if( !head || head.next ===null|| head.next.next === null) return head
      let length= 0
      let cur  = head
      while(cur){
        cur= cur.next
        length++
      }
  let group=1
     cur = head 
    let prevGroup = head 
    let prev= null
      while (cur){

        if(group%2===0){
        let tail = cur
        for (let i = 0 ;i<group ; i++){
            let temp= cur.next 
             cur.next  = prev
             prev = cur
             cur =  temp
        }
       prevGroup.next =  prev
        tail.next = cur
        prevGroup= tail
        }
        else 
        for (let i= 0 ; i<group ;  i++){
            
            prevGroup =  cur
            cur = cur.next 

        }
        length-= group
        group  =  group +1 >length ? length : group+1
      }
      return head
};