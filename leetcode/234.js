// 234. Palindrome Linked List
const isPalindrome = (head) => {
    const list = [];
    let pointer = head;

    while (pointer) {
        list.push(pointer.val);
        pointer = pointer.next;
    }

    let left = 0,
        right = list.length - 1;

    while (left <= right) {
        if (list[left] !== list[right]) return false;
        else left++, right--;
    }

    return true;
};

console.log(isPalindrome([1, 2, 2, 1]));
