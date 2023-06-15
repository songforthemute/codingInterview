// 24. Swap Nodes in Pairs - Medium

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

var swapPairs = function (head) {
    // No exist the head node, or exist head node only
    if (!head?.next) return head;

    let curr = head;

    // loop skipping 2 nodes each
    // loop only if be exist the current node
    while (curr?.next) {
        // replace node's value only
        [curr.next.val, curr.val] = [curr.val, curr.next.val];
        curr = curr?.next?.next ?? null;
    }

    return head;
};
