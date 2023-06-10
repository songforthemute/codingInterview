// 104. Maximun Depth of Binary Tree

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
var maxDepth = function (root) {
    if (!root) return 0;

    const list = [[root]];

    while (true) {
        const stair = [];

        list[list.length - 1].forEach((curr) => {
            if (curr?.left) stair.push(curr.left);
            if (curr?.right) stair.push(curr.right);
        });

        if (stair.length) list.push(stair);
        else break;
    }

    return list.length;
};
