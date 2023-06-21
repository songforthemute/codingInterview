// 98. Validate Binary Search Tree - Medium

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
 * @return {boolean}
 */

var isValidBST = function (root) {
    const values = (function inorder(node) {
        if (!node) return [];

        return [...inorder(node.left), node.val, ...inorder(node.right)];
    })(root);

    for (let i = 1; i < values.length; i++) {
        if (values[i - 1] >= values[i]) return false;
    }

    return true;
};
