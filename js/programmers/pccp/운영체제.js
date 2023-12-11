// [PCCP 모의고사 #1] 운영체제

/**
 *
 * @param {number[][]} program
 * @returns {number[]}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }
}

MinHeap.prototype.len = function () {
    return this.heap.length;
};

MinHeap.prototype.swap = function (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
};

MinHeap.prototype.bubbleUp = function () {
    let current = this.len() - 1;
    let parent = Math.floor((current - 1) / 2);

    while (this.heap[current][0] < this.heap[parent]?.[0]) {
        this.swap(current, parent);
        current = parent;
        parent = Math.floor((current - 1) / 2);
    }
};

MinHeap.prototype.input = function (node) {
    this.heap.push(node);
    this.bubbleUp();
};

MinHeap.prototype.sinkDown = function (parent = 0) {
    let left = parent * 2 + 1;
    let right = left + 1;

    let smallest = parent;

    if (this.heap[smallest][0] < this.heap[left]?.[0]) {
        smallest = left;
    }

    if (this.heap[smallest][0] < this.heap[right]?.[0]) {
        smallest = right;
    }

    if (smallest !== parent) {
        this.swap(smallest, parent);
        return this.sinkDown(smallest);
    }
};

MinHeap.prototype.output = function () {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return min;
};

// [점수, 호출시각, 실행시간][]
function solution(program) {
    const h = new MinHeap(),
        times = Array.from({ length: 11 }, () => 0);
    let current = 0;

    program.sort((a, b) => b[1] - a[1]);

    const getProgram = () => {
        while (program.length && program[program.length - 1][1] <= current) {
            h.input(program.pop());
        }
    };

    while (h.len() || program.length) {
        if (!h.len()) {
            current = program[program.length - 1][1];
            getProgram();
        }

        const [prior, call, exec] = h.output();
        times[prior] += current - call;
        current += exec; // 현재 시간에 실행 시간 더하기

        getProgram();
    }

    times[0] = current;

    return times;
}

// console.log(
//     solution([
//         [2, 0, 10],
//         [1, 5, 5],
//         [3, 5, 3],
//         [3, 12, 2],
//     ])
// ); // [20, 5, 0, 16, 0, 0, 0, 0, 0, 0, 0]

console.log(
    solution([
        [3, 6, 4],
        [4, 2, 5],
        [1, 0, 5],
        [5, 0, 5],
    ])
); // [19, 0, 0, 4, 3, 14, 0, 0, 0, 0, 0]

// console.log(
//     solution([
//         [1, 0, 20],
//         [2, 15, 15],
//         [3, 30, 10],
//     ])
// ); // [20, 0, 3, 9, 15, 9, 0, 0, 0, 0, 0]
