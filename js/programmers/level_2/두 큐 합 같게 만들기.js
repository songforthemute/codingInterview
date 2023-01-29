// Lv. 2 두 큐 합 같게 만들기

/**
 * @param {number[]} queue1 길이가 같은 두 개의 큐를 나타내는 정수 배열1
 * @param {number[]} queue2 길이가 같은 두 개의 큐를 나타내는 정수 배열2
 * @return {number} 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수
 */

const solution = (queue1 = [], queue2 = []) => {
    let sum1 = queue1.reduceRight((pre, cur) => pre + cur, 0);
    let sum2 = queue2.reduceRight((pre, cur) => pre + cur, 0);

    if (sum1 === sum2) return 0;
    if ((sum1 + sum2) % 2 === 1) return -1;

    const limit = queue1.length * 3;
    let count = 0;
    let p1 = 0;
    let p2 = 0;

    while (sum1 !== sum2 && count < limit) {
        if (sum1 > sum2) {
            let temp = queue1[p1++];
            queue2.push(temp);

            sum1 -= temp;
            sum2 += temp;
        } else if (sum1 < sum2) {
            let temp = queue2[p2++];
            queue1.push(temp);

            sum2 -= temp;
            sum1 += temp;
        }

        count++;

        if (sum1 === sum2) return count;
    }

    return -1;
};

// test cases
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
console.log(solution([2, 9], [3, 4])); // 1
console.log(solution([101, 100], [102, 103])); // 11
