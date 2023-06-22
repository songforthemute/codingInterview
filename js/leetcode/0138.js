// 138. Copy List with Random Pointer - Medium

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
    if (!head) return head;

    // for hash the linked list
    const map = new Map();
    let currNode = head;

    // first, composite list's nodes
    while (currNode) {
        // clone the node and record in map
        const cloneNode = new Node(currNode.val);

        map.set(currNode, cloneNode);
        currNode = currNode.next;
    }

    currNode = head;

    // second, link the nodes and node's properties
    while (currNode) {
        // read and link nodes
        const clonedNode = map.get(currNode);

        clonedNode.next = map.get(currNode.next) || null;
        clonedNode.random = map.get(currNode.random) || null;

        currNode = currNode.next;
    }

    return map.get(head);
};
