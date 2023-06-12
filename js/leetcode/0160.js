// 160. Intersection of Two Linked Lists - Easy

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    /**
     * If intersection case is,
     *  [1,2,3,4,5], [5,3,4,5]
     *  1 2 3 4 5 n 5 `3` 4 5 n ...
     *  5 3 4 5 n 1 2 `3` 4 5 n ...
     *
     * If not intersection case is,
     *  [1,2,3,4,5], [5,6,7,8]
     *  1 2 3 4 5 n 5 6 7 8 `n` ...
     *  5 6 7 8 n 1 2 3 4 5 `n` ...
     */

    let [a, b] = [headA, headB];

    while (a !== b) {
        a = a !== null ? a.next : headB;
        b = b !== null ? b.next : headA;
    }

    return a;
};
