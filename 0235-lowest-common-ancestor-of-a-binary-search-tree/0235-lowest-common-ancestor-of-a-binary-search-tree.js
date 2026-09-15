/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    

    let stack = []
function sBST(node , key){
    if(node===null) return null
            stack.push(node)
        if(node.val===key){
            return node
        }
        else if(node.val>key){
            
          return  sBST(node.left , key)
        }
        else{
          return  sBST(node.right , key)

        }
}
 sBST(root ,p.val)
 let set=new Set(stack)
 stack= []
 sBST(root , q.val)
  

 while(stack.length>0){
    let node = stack.pop()
    if( set.has(node))
    return node
 }
 return root
};


