// 230. Kth Smallest Element in a BST - Medium

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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
    // Elements are located from left to right by ascending in the BST
    const elems = [];

    // search - DFS
    const DFS = (node) => {
        // if found enough amounts, break the searching
        if (elems.length === k) return;

        // DFS - inorder
        if (node.left) DFS(node.left);
        elems.push(node.val);
        if (node.right) DFS(node.right);
    };

    DFS(root);

    return elems[k - 1];
};
