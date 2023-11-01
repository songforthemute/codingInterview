// 25. Reverse Nodes in K-Group - Hard

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const stack = [];
    let newHead = new ListNode(); // memory the starting point
    let tmp = newHead;

    while (head) {
        for (let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next;
        }

        // time to reverse
        if (stack.length === k) {
            while (stack.length) {
                tmp.next = stack.pop();
                tmp = tmp.next;
            }

            // when 1, 2, 3, 4, ...
            // if k === 3 & current === 4,
            // new List 3, 2, 1
            // then 3, 2, 1, and 4 ... around again at 4
            tmp.next = head;
        }
    }

    return newHead.next;
};
