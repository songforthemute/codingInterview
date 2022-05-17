// [1차] 비밀지도
function solution(n, arr1, arr2) {
    const secretMap = [];
    const result = [];

    for (let i = 0; i < n; i++) {
        secretMap[i] = String((arr1[i] | arr2[i]).toString(2));
        if (secretMap[i].length < n) {
            while (secretMap[i].length !== n) secretMap[i] = "0" + secretMap[i];
        }
    }

    for (const line of secretMap) {
        let temp = "";
        for (const bit of line) bit === "1" ? (temp += "#") : (temp += " ");
        result.push(temp);
    }

    return result;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
