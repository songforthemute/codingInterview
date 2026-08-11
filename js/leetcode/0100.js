// 100. Same Tree

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    /**
     * DFS, BFS 모두 같은 복잡도?
     * 그럼 큐 사용
     */

    const pQueue = [p];
    const qQueue = [q];

    while (pQueue.length && qQueue.length) {
        const pNode = pQueue.shift();
        const qNode = qQueue.shift();

        if (!pNode && !qNode) continue;

        const isExistBoth = pNode && qNode;
        const isSameValue = pNode?.val === qNode?.val;
        
        if (!isExistBoth || !isSameValue) return false;

        pQueue.push(pNode.left, pNode.right);
        qQueue.push(qNode.left, qNode.right);
    }

    return true;
};

// Test cases
console.log(
    isSameTree(
        new TreeNode(1, new TreeNode(2), new TreeNode(3)),
        new TreeNode(1, new TreeNode(2), new TreeNode(3))
    )
); // true

console.log(
    isSameTree(
        new TreeNode(1, new TreeNode(2)),
        new TreeNode(1, null, new TreeNode(2))
    )
); // false

console.log(
    isSameTree(
        new TreeNode(1, new TreeNode(2), new TreeNode(1)),
        new TreeNode(1, new TreeNode(1), new TreeNode(2))
    )
); // false