// Lv. 3 표 편집

/**
 * @param {number} n 처음 표의 행 개수를 나타내는 정수
 * @param {number} k 처음에 선택된 행의 위치를 나타내는 정수
 * @param {string[]} cmd 수행한 명령어들이 담긴 문자열 배열
 * @returns {string}  모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 O, 삭제된 행은 X로 표시하여 문자열 형태로 return
 */

class LinkedList {
    constructor(prev, next) {
        this.prev = prev;
        this.next = next;
    }
}

const solution = (n, k, cmd) => {
    const bin = []; // stack for rollback, elem: [srcIndex, poppedNode]
    const data = Array.from(
        Array(n),
        (_, i) => new LinkedList(i ? i - 1 : null, i < n - 1 ? i + 1 : null)
    );

    let idx = k;
    const DIR_ENUM = {
        U: "prev",
        D: "next",
    };

    cmd.forEach((v) => {
        const [command, amount] = v.split(" ");
        const curr = data[idx];

        if (command === "Z") {
            // undo the popped row
            const [srcIdx, popped] = bin.pop();

            if (popped.next !== null) data[popped.next].prev = srcIdx; // Case: Not last row
            if (popped.prev !== null) data[popped.prev].next = srcIdx; // Case: Not first row
        } else if (command === "C") {
            // remove this row
            bin.push([idx, curr]); // record the removed node

            // [prev,cur]-[cur,next]-[next,next2] >>> [prev,next]-[prev,next2]
            if (curr.next !== null) data[curr.next].prev = curr.prev; // Case: Not last row
            if (curr.prev !== null) data[curr.prev].next = curr.next; // Case: Not first row

            if (curr.next !== null) idx = curr.next; // Case: Not last row
            else idx = curr.prev; // Case: Last row
        } else {
            // adjust the index
            for (let i = 0; i < +amount; i++) {
                idx = data[idx][DIR_ENUM[command]];
            }
        }
    });

    const result = Array(n).fill("O");

    bin.forEach(([idx]) => (result[idx] = "X"));

    return result.join("");
};

// test cases
console.log(
    solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
); // "OOOOXOOO"
console.log(
    solution(8, 2, [
        "D 2",
        "C",
        "U 3",
        "C",
        "D 4",
        "C",
        "U 2",
        "Z",
        "Z",
        "U 1",
        "C",
    ])
); // "OOXOXOOO"
