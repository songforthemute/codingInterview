// 105. Construct Binary Tree from Preorder and Inorder Traversal - Medium

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
    // hash for optimization
    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    const recursion = (left, right) => {
        // end condition: cannot set child node, return null
        if (left > right) return null;

        // generating new node
        const val = preorder.shift();
        const newNode = new TreeNode(val);
        // find the current node's horizontal order(inorder)
        const current = inorderMap.get(val);
        console.log(val, left, current, right);

        // in inorder, left-side from current is become current's left only
        newNode.left = recursion(left, current - 1);
        // in inorder, right-side from current is become current's right only
        newNode.right = recursion(current + 1, right);

        return newNode;
    };

    return recursion(0, preorder.length - 1);
};
