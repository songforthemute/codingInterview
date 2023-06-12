// 141. Linked List Cycle - Easy

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
    if (!head || !head.next) return false;

    /**
     * Around list by using two pointers,
     *  1. If circular list, then two pointers have to met each other whenever
     *  2. If linear list, then two pointers can't met each other, and the faster pointer is ended first.
     */

    let slower = head;
    let faster = head.next.next;

    while (faster && faster.next) {
        if (slower === faster) return true;

        slower = slower.next;
        faster = faster.next.next;
    }

    return false;
};
