// 876. Middle of the Linked List
const middleNode = (head) => {
    let double = head;
    let single = head;

    while (double) {
        if (!double.next) break;
        double = double.next.next;
        single = single.next;
    }

    return single;
};

// const ListNode = (val, next) => {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// };
