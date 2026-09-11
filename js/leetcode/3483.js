// 3483. Unique 3-Digit Even Numbers

/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    /**
     * 숫자 세 개로 만들 수 있는 3자리 짝수의 개수?
     * pQr, r = 3
     * 
     * 그런데 0으로 시작할 수는 없다.
     * 자릿수-인덱스를 다루어야 하니 배열 or 문자열.
     *  - 3자리는 고정 사이즈.
     *  - JS도 고정 사이즈 배열을 만들 수 있는데 그것이 메모리 효율적인가?
     *  - 그렇지만 문자열은 고정 사이즈 아니고, 배열은 고정 사이즈지만, 참조형.
     * 
     * 그럼
     *  1. 조합을 만든다. -> 순열 X, 조합 O
     *  2. 그 조합이 유효한지 확인한다. -> 0으로 시작하지 않고, '인덱스가' 서로 다른 숫자 3개로 이루어져 있는지 확인
     *  3. 그 조합이 짝수인지 확인한다. -> 맨 마지막 자릿수만 보면 OK
     *  4. 유효하고 짝수이면 카운트한다. -> Set에 넣어서 중복 제거
     */

    function isEven(num = []) {
        return num[2] % 2 === 0;
    }

    let result = 0;
    const set = new Set();

    if (digits.every((v) => v % 2 === 1)) return result;

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                const isZeroFirst = digits[i] === 0;
                const isSameIndex = i === j || j === k || i === k;

                if (isZeroFirst || isSameIndex) continue;
                
                const num = [digits[i], digits[j], digits[k]];
                
                if (isEven(num) && !set.has(num.join(''))) {
                    set.add(num.join(''));
                    result++;
                }
            }
        }
    }

    return result;
};

// Test cases
console.log(
    totalNumbers(
        [1, 2, 3, 4] // 12
    )
)

console.log(
    totalNumbers(
        [0, 2, 2] // 2
    )
)

console.log(
    totalNumbers(
        [6, 6, 6] // 1
    )
)

console.log(
    totalNumbers(
        [1, 3 ,5] // 0
    )
)