// [PCCP 모의고사 #1] 유전법칙

/**
 * @param {[number, number][]} queries
 * @returns {string[]}
 */

function solution(queries) {
    const query = (gen, idx) => {
        if (gen === 1) return "Rr";

        const parentGen = query(gen - 1, Math.floor(idx / 4));

        if (parentGen === "RR" || parentGen === "rr") return parentGen;

        const currIdx = idx % 4;

        if (currIdx === 0) return "RR";
        else if (currIdx === 1 || currIdx === 2) return "Rr";
        else return "rr";
    };

    // i-1번째
    return queries.map(([g, i]) => query(g, i - 1));
}

console.log(
    solution([
        [3, 1],
        [2, 3],
        [3, 9],
    ])
); // ["RR", "Rr", "RR"]

console.log(solution([[4, 26]])); // ["Rr"]
