// Lv. 2 순위 검색

/**
 * @param {string[]} info 지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열
 * @param {string[]} query 개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열
 * @return {number[]} 각 문의조건에 해당하는 사람들의 숫자를 순서대로 담은 배열
 */

const solution = (info, query) => {
    const map = {};

    for (const str of info) {
        const [lang, part, career, food, score] = str.split(" ");

        if (map[lang + part + career + food]) {
            map[lang + part + career + food].push(+score);
        } else {
            map[lang + part + career + food] = [+score];
        }
    }

    // ascending sort for the binary search
    for (const key of Object.keys(map)) map[key].sort((a, b) => a - b);

    const geneKeys = (label, index) => {
        if (label !== "-") return [label];

        if (index === 0) return ["cpp", "java", "python"];
        else if (index === 1) return ["backend", "frontend"];
        else if (index === 2) return ["junior", "senior"];
        else return ["chicken", "pizza"];
    };

    const lowerBound = (arr, target) => {
        if (arr.length === 1) return arr[0] >= target ? 1 : 0;

        let left = 0;
        let right = arr.length - 1;
        let result = arr.length;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return arr.length - result;
    };

    const result = [];

    for (const q of query) {
        const [lang, , part, , career, , food, score] = q.split(" ");

        let count = 0;

        // generate key candidates considering "-" & check those score
        for (const l of geneKeys(lang, 0)) {
            for (const p of geneKeys(part, 1)) {
                for (const c of geneKeys(career, 2)) {
                    for (const f of geneKeys(food, 3)) {
                        if (!map[l + p + c + f]) continue;
                        // if existed, need to the binary search, cuz could be a lot
                        else count += lowerBound(map[l + p + c + f], +score);
                    }
                }
            }
        }

        result.push(count);
    }

    return result;
};

// test cases
console.log(
    solution(
        [
            "java backend junior pizza 150",
            "python frontend senior chicken 210",
            "python frontend senior chicken 150",
            "cpp backend senior pizza 260",
            "java backend junior chicken 80",
            "python backend senior chicken 50",
        ],
        [
            "java and backend and junior and pizza 100",
            "python and frontend and senior and chicken 200",
            "cpp and - and senior and pizza 250",
            "- and backend and senior and - 150",
            "- and - and - and chicken 100",
            "- and - and - and - 150",
        ]
    )
); // [1,1,1,1,2,4]
