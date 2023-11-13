// Lv. 3 표현 가능한 이진트리

/**
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function solution(numbers) {
    const ZERO = "0";

    // 포화이진트리의 노드 개수 === (2^n)-1
    return numbers
        .map((v) => {
            const bin = v.toString(2);
            const pow = 2 ** Math.ceil(Math.log2(bin.length)) - bin.length;

            return (ZERO.repeat(pow) + bin).substring(1);
        })
        .map((v) => {
            const root = Math.floor(v.length / 2);
            const height = Math.log2(v.length + 1) - 1;

            for (let i = 0; i < v.length; i++) {
                // 자식 노드가 1인데 부모 노드가 0이면 구성 불가
                if (v[i] === "1") {
                    let parent = root;
                    let level = 0;

                    while (parent !== i) {
                        if (v[parent] === "0") return 0;

                        // 리프 노드 탐색을 위해 리프 노드 개수 계산
                        const dist = Math.floor(2 ** (height - 1 - level));
                        // 부모 인덱스 조정 - 자식 인덱스가 부모 인덱스보다 크면 우측으로 이동
                        parent += i > parent ? dist : -dist;
                        level++;
                    }
                }
            }

            return 1;
        });
}

// TEST CASES
console.log(solution([7, 42, 5])); // [1,1,0]
console.log(solution([63, 111, 95])); // [1,1,0]
console.log(solution([1, 2, 8])); // [1,1,1]
