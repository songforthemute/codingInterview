// 543. Diameter of Binary Tree

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
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
    if (!root) return 0;

    let dist = 0;

    // recursive search - dfs
    const recursion = (node) => {
        if (node === null) return 0;

        // at the each node, getting the diameter for compare
        const left = recursion(node.left);
        const right = recursion(node.right);

        // compare and memory it
        if (dist < left + right) dist = left + right;

        // return the max at current node
        // if current is leaf node, return 1 only
        return Math.max(left, right) + 1;
    };

    recursion(root);

    return dist;
};
