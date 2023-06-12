// 101. Symmetric Tree - Easy

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

var isSymmetric = function (root) {
    if (root === null) return true;

    const recursion = (l, r) => {
        if (l === null && r === null) return true;
        if (l === null || r === null) return false;
        if (l.val !== r.val) return false;

        return recursion(l.left, r.right) && recursion(l.right, r.left);
    };

    return recursion(root.left, root.right);
};
