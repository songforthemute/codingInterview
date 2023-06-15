// 19. Remove Nth Node From End of List - Medium

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
    if (head.next === null) return null;

    // for perceive the total length, for break the loop, for adjust the list
    let [pointer, progNode, targetNode] = [0, head, head];

    // loop the list once
    while (progNode.next) {
        progNode = progNode.next;

        // if the distance from current node is as far as 'n', starts out adjusting targetNode
        if (++pointer > n) targetNode = targetNode.next;
    }

    // if the node to be removed is the same as the head node, returns the targetNode's next
    if (pointer + 1 === n) return targetNode.next;
    else targetNode.next = targetNode?.next?.next ?? null;

    return head;
};
