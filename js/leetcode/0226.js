// 226. Invert Binary Tree - Easy

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
 * @return {TreeNode}
 */

var invertTree = function (root) {
    if (root === null) return root;

    // stack for dfs, or queue for bfs
    // there is just a diff in order
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (node === null) continue;

        [node.left, node.right] = [node.right, node.left]; // swap left and right
        stack.push(node.left, node.right); // if child-less, be inserted `null` automatically
    }

    return root;
};
