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
var oddEvenList = function(head) {
    if(!head ||!head.next)return head
    
    let cur  =  head.next.next //3
    let lastOdd =head  //1
    let lastEven = head.next // 2
    let firstEven = head.next  //2

    // [1,2,3,4,5]
    while (cur ){
        
      let next  = cur?.next?.next // 5  null
      
      let temp  = cur.next   //  4    null
       lastOdd.next =cur     //  1 -> 3 -> 5     
       cur.next = firstEven  //  3 ->5 ->2       
       lastOdd =cur          //  3 - 5
       lastEven.next = temp //   2 -> 4  - 
       lastEven=  lastEven.next  // 4
        cur = next               //5
        
    }
   return head
};