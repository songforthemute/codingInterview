// 148. Sort List - Medium

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
    if (!head) return head;

    const nodes = []; // get all nodes
    let current = head; // list pointer

    while (current) {
        nodes.push(current);
        current = current.next;
    }

    // sort by ascending order
    nodes.sort((a, b) => a.val - b.val);

    // link node's next chain
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    // last node's next is null
    nodes[nodes.length - 1].next = null;

    // return head
    return nodes[0];
};
