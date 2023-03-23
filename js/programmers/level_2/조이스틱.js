// Lv. 2 조이스틱

/**
 * @param {string} name 만들고자 하는 이름
 * @return {number} 이름에 대한 조이스틱 조작 횟수의 최소값
 */

const solution = (name) => {
    const { length } = name;
    const code = [...name].map((v) =>
        Math.min(v.charCodeAt(0) - 65, 91 - v.charCodeAt(0))
    );

    // maximum touch count is less than total length - 1
    let touch = length - 1;

    // if encounter 'A', compare go front or turn around
    code.forEach((_, i) => {
        let nextLastA = i + 1;

        // counting continuous 'A'
        while (code[nextLastA] === 0 && nextLastA < length) nextLastA++;

        touch = Math.min(
            touch,
            i * 2 + length - nextLastA, // go front from current then turn around to behind
            (length - nextLastA) * 2 + i // go behind first, then turn around go front, like 'BBBAAAAAB'
        );
    });

    return touch + code.reduce((prev, curr) => prev + curr, 0);
};

// test cases
console.log(solution("JAZ")); // 11
console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
console.log(solution("ABA")); // 2
console.log(solution("BAA")); // 1
