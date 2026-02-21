/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function reverseOrder(head){
 
 let prev =  null
 
while(head){
 let   temp = head.next
    head.next = prev
    prev= head
    head= temp
}
// console.log(prev)
return prev


}
var reorderList = function(head) {
    if(!head ||!head.next ||!head.next.next) return head
    
    let fast = head.next
    let slow = head
    let steps=0
    let prev
    while(fast){
        prev= slow
        slow = slow.next
        fast= fast.next?.next
        steps++
    }

    // console.log( prev ,steps , slow)

   if(prev)  prev.next=   reverseOrder(slow)
// console.log(head , steps)
   let cur  = head
    for(let i = 1 ; i<steps ; i++){
       let temp = cur.next
       let temp2= prev.next
       let temp3 = temp2.next
       cur.next = temp2
       temp2.next = temp
       prev.next= temp3
       cur= temp
    }
    return head
};


