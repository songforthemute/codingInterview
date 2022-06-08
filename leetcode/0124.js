// 124. Binary Tree Maximum Path Sum
const maxPathSum = (root) => {
    if (root === null) return 0;

    let max = -Infinity;
    const travasal = (node) => {
        if (!node) return 0;

        const left = travasal(node.left),
            right = travasal(node.right);

        max = Math.max(max, left + right + node.val);

        return Math.max(0, left + node.val, right + node.val);
    };

    travasal(root);

    return max;
};
