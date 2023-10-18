// Lv.2 더 맵게

/**
 *
 * @param {number[]} scoville
 * @param {number} K
 * @returns {number} 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }
}

MinHeap.prototype.size = function () {
    return this.heap.length;
};

MinHeap.prototype.swap = function (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
};

MinHeap.prototype.bubbleUp = function () {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (
        this.heap[parentIdx] !== undefined &&
        this.heap[idx] < this.heap[parentIdx]
    ) {
        this.swap(idx, parentIdx);

        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
    }
};

MinHeap.prototype.sinkDown = function (parent = 0) {
    let left = parent * 2 + 1;
    let right = left + 1;

    let smaller = parent;

    if ((this.heap[left] || Infinity) < this.heap[smaller]) {
        smaller = left;
    }

    if ((this.heap[right] || Infinity) < this.heap[smaller]) {
        smaller = right;
    }

    if (smaller !== parent) {
        this.swap(parent, smaller);
        return this.sinkDown(smaller);
    }
};

MinHeap.prototype.set = function (v) {
    this.heap.push(v);
    this.bubbleUp();
};

MinHeap.prototype.get = function () {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return min;
};

function solution(scoville, K) {
    const minHeap = new MinHeap();

    scoville.forEach((v) => minHeap.set(v));

    while (true) {
        let min = minHeap.get();

        if (min >= K) return scoville.length - (minHeap.size() + 1);
        if (!minHeap.size()) return -1;

        minHeap.set(min + minHeap.get() * 2);
    }
}
