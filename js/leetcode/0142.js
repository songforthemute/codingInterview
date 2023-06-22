// 142. Linked List Cycle II - Medium

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head) {
    // hash for the tracing
    const map = new Map();
    let current = head;

    // around the linked list
    while (current) {
        if (map.has(current)) return current;
        else map.set(current, true);
        current = current.next;
    }

    return null;
};
