// 94. Binary Tree Inorder Traversal
const inorderTraversal = (root) => {
    if (root === null) return [];

    const result = [];
    let curr = root;
    const stack = [];

    while (curr || stack.length) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            result.push(curr.val);
            curr = curr.right;
        }
    }

    return result;

    // 재귀 방식
    // const traverse = (node) => {
    //     if (node.left) traverse(node.left);
    //     result.push(node.val);
    //     if (node.right) traverse(node.right);
    // };

    // traverse(curr);
    // return result;
};
