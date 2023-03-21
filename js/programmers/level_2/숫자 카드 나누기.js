// Lv. 2 숫자 카드 나누기

/**
 * @param {number[]} arrayA 철수가 가진 카드에 적힌 숫자들을 나타내는 정수 배열
 * @param {number[]} arrayB 영희가 가진 카드에 적힌 숫자들을 나타내는 정수 배열
 * @return {number} 주어진 조건을 만족하는 가장 큰 양의 정수 a, 조건을 만족하는 a가 없다면 0
 */

const solution = (arrayA, arrayB) => {
    // function: get GCD(Greatest Common Divisor)
    const getGCD = (a, b) => {
        if (a === b) return a;
        else if (a > b) {
            return a % b === 0 ? b : getGCD(b, a % b);
        } else {
            return b % a === 0 ? a : getGCD(a, b % a);
        }
    };

    // Check Question's requirements, `1` is unable process
    const isPossible = (num) => {
        if (num === 1) return;

        return (
            (arrayA.every((v) => v % num === 0) &&
                arrayB.every((v) => v % num !== 0)) ||
            (arrayA.every((v) => v % num !== 0) &&
                arrayB.every((v) => v % num === 0))
        );
    };

    let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

    // get GCD from each array
    for (let i = 1; i < arrayA.length; i++) {
        gcdA = getGCD(gcdA, arrayA[i]);
        gcdB = getGCD(gcdB, arrayB[i]);
    }

    let max = 0;

    // check candidates
    for (const n of [gcdA, gcdB]) {
        if (isPossible(n)) max = Math.max(max, n);
    }

    return max;
};

// test cases
console.log(solution([10, 17], [5, 20])); // 0
console.log(solution([10, 20], [5, 17])); // 10
console.log(solution([14, 35, 119], [18, 30, 102])); // 7
