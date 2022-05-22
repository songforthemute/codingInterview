// 체육복
function solution(n, lost, reserve) {
    let count = 0;
    let result = [];
    let lostStudent = new Set(lost);
    let reserveStudent = new Set(reserve);

    for (const elem of lostStudent) {
        if (reserveStudent.has(elem)) {
            reserveStudent.delete(elem);
            lostStudent.delete(elem);
        }
    }

    reserveStudent = [...reserveStudent];
    lostStudent = [...lostStudent];

    for (let i = 1; i <= n; i++) {
        if (reserveStudent.includes(i)) result.push([i, 2]);
        else if (lostStudent.includes(i)) result.push([i, 0]);
        else result.push([i, 1]);
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i][1] === 0) {
            if (result[i - 1] && result[i - 1][1] === 2) {
                result[i][1]++;
                result[i - 1][1]--;
            } else if (result[i + 1] && result[i + 1][1] === 2) {
                result[i][1]++;
                result[i + 1][1]--;
            }
        }
    }

    result.forEach((e) => {
        if (e[1] >= 1) count++;
    });

    return count;
}
