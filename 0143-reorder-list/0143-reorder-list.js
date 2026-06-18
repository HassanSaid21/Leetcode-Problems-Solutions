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
var reorderList = function(head) {
    if(!head||!head.next) return
   
   // point to the sconed half
    let fast = head  , slow = head
    while(fast&&fast.next){
        fast=  fast.next.next
        slow =  slow.next

    }
    // reverse the sconed half

    let prev = null
    let cur = slow
    while(cur){
        let temp  = cur.next
        cur.next  = prev
        prev = cur
        cur  =  temp
    }
   // combine two halfs again
   let first  = head  , sconed = prev
   while(sconed &&sconed.next){
     let t1  = first.next 
     let t2   = sconed.next
     first.next = sconed 
     sconed.next = t1
     first = t1
     sconed = t2

   }

};