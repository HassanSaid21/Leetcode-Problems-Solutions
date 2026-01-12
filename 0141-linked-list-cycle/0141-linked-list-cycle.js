/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   if (!head || !head.next) return false;

//   let slow = head;
//   let fast = head;

//   while (fast && fast.next) {
//     slow = slow.next;          // move one step
//     fast = fast.next.next;     // move two steps

//     if (slow === fast) return true; // cycle detected
//   }

//   return false; // no cycle
// };


var hasCycle =(head)=>{
  if(!head || !head.next) return false
  let p1= head.next
  let p2 = head?.next.next
  while(p2&& p2.next){
     if(p1===p2) return true
     p1=p1.next
     p2= p2.next.next
  }
  return false
}

