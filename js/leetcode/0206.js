// 206. Reverse Linked List

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

var reverseList = function (head) {
    let cur = head,
        pre = null;

    /**
     * e.g.
     *      pre {val: 1, next: {val: 2, next: { ... }}}
     *      cur {val: 2, next: {val: 3, next: { ... }}}
     * Step1: cur.next = pre;
     *      => cur {val: 2, next: {val: 1, next: {val: 2, next: { ... }}}}
     *      => cur.next {val: 1, next: {val: 2, next: { ... }}}
     * Step2: pre = cur;
     *      => pre {val: 2, next: {val: 1, next: {val: 2, next: { ... }}}}
     * Step3: cur = cur.next;
     *      => cur {val: 1, next: {val: 2, next: { ... }}}
     * Swap Completed!
     *
     * cf.
     *  the `next` is need to be referred later.
     *  so keep the origin value of `next`, or swap by using the destructuring
     */

    while (!!cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next];
    }

    return pre;
};

[cur.next, pre, cur] = [pre, cur, cur.next];
