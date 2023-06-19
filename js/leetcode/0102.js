// 102. Binary Tree Level Order Traversal - Medium

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
 * @return {number[][]}
 */

var levelOrder = function (root) {
    if (!root) return [];

    const queue = [[root]];
    const result = [];

    // iteration for BFS
    const traversal = () => {
        const shifted = queue.shift();

        // push the nodes value of current level
        result.push(shifted.map((node) => node.val));

        const level = [];

        // if be had child nodes at the same level
        shifted.forEach((node) => {
            if (node.left) level.push(node.left);
            if (node.right) level.push(node.right);
        });

        // if be found at least one child node
        if (level.length) queue.push(level);
    };

    while (queue.length) traversal();

    return result;
};
