// 114. Flatten Binary Tree to Linked List - Medium

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
    if (!root) return root;

    const traversal = (node) => {
        if (!node) return;

        if (node.left) {
            let rightest = node.left;

            // find the most right node from the left of current
            while (rightest.right) {
                rightest = rightest.right;
            }

            const buffer = node.right;

            // transfer left node to the right
            node.right = node.left;
            // attach original current's right node, to the right-side of moved left node
            rightest.right = buffer;
            // process left node as null
            node.left = null;
        }

        traversal(node.right);
    };

    traversal(root);
};
