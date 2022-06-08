// 가장 큰 수
function solution(nums) {
    let result = "";
    const helper = (a, b) => {
        const A = Number(a.toString() + b.toString());
        const B = Number(b.toString() + a.toString());
        return B - A;
    };

    const sortedNums = nums.sort(helper);

    for (const elem of sortedNums) result += elem;

    return result[0] === "0" ? "0" : result;
}
