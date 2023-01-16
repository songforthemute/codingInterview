// 21. Merge Two Sorted Lists
const mergeTwoLists = (list1, list2) => {
    let result = new ListNode();
    let current = result;
    let l1 = list1;
    let l2 = list2;

    while (l1 || l2) {
        current.next = new ListNode();
        current = current.next;

        if (l1 && (!l2 || l1.val < l2.val)) {
            current.val = l1.val;
            l1 = l1.next;
        } else {
            current.val = l2.val;
            l2 = l2.next;
        }
    }

    return result.next;
};
