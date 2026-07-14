// 23. Merge k Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    /**
     * 항상 맨 앞만 최솟값을 보장하면 되는 구조: 최소힙
     * 리스트의 헤드 노드들만 최소힙에 넣고, 최소힙에서 뽑은 노드의 next를 다시 최소힙에 넣는 구조
     */

    const result = new ListNode();
    const heap = new MiniHeap();

    let current = result;

    for (const list of lists) {
        heap.push(list);
    }

    while (heap.len()) {
        const node = heap.pop();
        const nextNode = node.next;

        current.next = node;
        current = node;

        heap.push(nextNode);
    }

    return result.next;
};

class MiniHeap {
    constructor() {
        this.heap = [];
    }

    len() {
        return this.heap.length;
    }

    push(elem) {
        if (elem === null || elem === undefined) return;

        this.heap.push(elem);
        this.bubbleUp(this.len() - 1);
    }

    pop() {
        if (this.len() === 0) return;
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const minNode = this.heap[0];
        const lastNode = this.heap.pop();

        this.heap[0] = lastNode;
        this.bubbleDown(0);

        return minNode;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    /**
     * parent: Math.floor((i - 1) / 2)
     * left: i * 2 + 1
     * right: i * 2 + 2
     */
    bubbleUp(idx) {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[parentIdx].val <= this.heap[idx].val) {
                break;
            }

            this.swap(parentIdx, idx);

            idx = parentIdx;
        }
    }

    bubbleDown(idx) {
        const length = this.heap.length;

        while (true) {
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;

            let smallestIdx = idx;

            if (
                leftIdx < length &&
                this.heap[leftIdx].val < this.heap[smallestIdx].val
            ) {
                smallestIdx = leftIdx;
            }

            if (
                rightIdx < length &&
                this.heap[rightIdx].val < this.heap[smallestIdx].val
            ) {
                smallestIdx = rightIdx;
            }

            if (smallestIdx === idx) {
                break;
            }

            this.swap(idx, smallestIdx);

            idx = smallestIdx;
        }
    }
}
