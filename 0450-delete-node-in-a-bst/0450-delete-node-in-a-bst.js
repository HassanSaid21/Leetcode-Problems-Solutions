/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root===null ) return null

  /// check wether key is in the left side
    if(root.val>key){
        root.left=deleteNode(root.left,key)
    }else
    {
    // in the right side
     if(root.val<key){
        root.right= deleteNode(root.right , key)
    }
        else if( root.left ===null  && root.right===null){
            root= null
        }
        else if( root.left===null ){
            root = root.right
        }
        else if(root.right==null){
            root= root.left
        }
        else{
            let subTreeMin = minVal(root.right)
        root.val = subTreeMin
        root.right = deleteNode(root.right ,subTreeMin)
            }
        }
    
    return root

};


let minVal= (node)=>{
        if(!node) return null
        let prev
     while (node){
           prev = node
        node = node.left
     
     }

     return prev.val

}