// 이상한 문자 만들기
function solution(s) {
    let result = "";
    const arr = s.split("");

    let i = 0;
    let j = 0;
    while (i !== arr.length) {
        if (arr[i] === " ") {
            result += arr[i];
            i++;
            j = 0;
            continue;
        }

        if (j % 2 !== 1) result += arr[i].toUpperCase();
        else result += arr[i].toLowerCase();

        i++;
        j++;
    }

    return result;
}
