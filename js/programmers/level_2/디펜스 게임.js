// Lv. 2 디펜스 게임

/**
 * @param {number[]} n 준호가 처음 가지고 있는 병사의 수
 * @param {number[]} k 사용 가능한 무적권의 횟수
 * @param {number[]} enemy 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열
 * @return {number} 준호가 막을 수 있는 최대 라운드 수
 */

const solution = (n, k, enemy) => {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        insert = (elem) => {
            this.heap.push(elem);
            this.bubbleUp();
        };

        bubbleUp = () => {
            let idx = this.heap.length - 1; // new element's index
            const elem = this.heap[idx];

            while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                let parent = this.heap[parentIdx];

                if (elem <= parent) break; // break: val is less than or same as parentVal

                // loop: val is larger than parentVal
                this.heap[parentIdx] = elem;
                this.heap[idx] = parent;
                idx = parentIdx;
            }
        };

        extractMax = () => {
            if (!this.heap.length) return null;

            const max = this.heap[0];
            const end = this.heap.pop();

            if (this.heap.length) {
                this.heap[0] = end;
                this.sinkDown();
            }

            return max;
        };

        sinkDown = () => {
            let idx = 0;
            const elem = this.heap[0];

            while (true) {
                const leftIdx = 2 * idx + 1;
                const rightIdx = leftIdx + 1;

                const leftChild = this.heap[leftIdx];
                const rightChild = this.heap[rightIdx];

                // elem < leftChild, rightChild
                if (elem < leftChild && elem < rightChild) {
                    const biggerIdx =
                        leftChild > rightChild ? leftIdx : rightIdx;
                    this.heap[idx] = this.heap[biggerIdx];
                    this.heap[biggerIdx] = elem;
                    idx = biggerIdx;
                }
                // rightChild <= elem < leftChild
                else if (elem < leftChild) {
                    this.heap[idx] = leftChild;
                    this.heap[leftIdx] = elem;
                    idx = leftIdx;
                }
                // leftChild <= elem < rightChild
                else if (elem < rightChild) {
                    this.heap[idx] = rightChild;
                    this.heap[rightIdx] = elem;
                    idx = rightIdx;
                }
                // leftChild, rightChild <= elem
                else break;
            }
        };
    }

    let rounds = 0;

    const maxHeap = new MaxHeap();

    for (let i = 0; i < enemy.length; i++) {
        maxHeap.insert(enemy[i]);
        n -= enemy[i];

        if (n < 0) {
            if (!k) break; // has not k anymore
            n += maxHeap.extractMax(); // add to maximum by using k
            k--;
        }

        rounds++;
    }

    return rounds;
};

// test cases
console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // 5
console.log(solution(7, 2, [4, 3, 1, 1, 1, 1, 1, 1, 1])); // 9
console.log(solution(2, 4, [3, 3, 3, 3])); // 4
console.log(solution(5, 3, [4, 2, 4, 5, 3, 3, 1])); // 5
console.log(solution(7, 3, [5, 5, 5, 5, 2, 3, 1])); // 5
console.log(solution(1, 6, [2, 2, 2, 2, 3, 3, 1])); // 7
console.log(solution(10, 1, [2, 2, 2, 2, 2, 10])); // 6
console.log(solution(10, 1, [2, 2, 2, 2, 10])); // 5
