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
var removeNthFromEnd = function(head, n) {
   if(!head) return undefined
       let p =  head 
       let length = 0
       while(p){
        length++
        p=p.next
       }

       if(length===1||length -n===0){
        head  = head.next 
        return head
       }
       else{
           p =  head 
           for (let i = 0  ; i<length -n-1 ; i++){
            p= p.next
           }
           if(p.next ){
            let temp =  p.next 
            p.next  = temp.next 
            temp.next = null
           }
           else p.next = null
       }
       
    return head
};