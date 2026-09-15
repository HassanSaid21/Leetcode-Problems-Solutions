var lowestCommonAncestor = function(root, p, q) {

    let current = root;

    while (current) {

        if (current.val>p.val &&current.val>q.val) {
            // go left
                current= current.left
        }
        else if (current.val<p.val &&current.val<q.val) {
            // go right
               current = current.right 
            }
        else {
            return current
        }
        
    }
};