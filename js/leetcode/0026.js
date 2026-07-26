// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    /**
        중복을 없애야 한다.
        정렬은 되어 있다.
        1. 시간
            모두 한 번씩 봐야 하나? 안 볼 수 있는 방법이 있나?
            이진 탐색은 양 끝점을 알아야 한다 -> 양 끝점을 알았다면 굳이 할 필요가 없지 않을까? -> 불가
        2. 공간
            다 저장할 필요가 없다.
            현재 보고 있는 정수를 가리킬 포인터/식별자 하나만 있으면 OK

        포인터를 둔다.
        포인터와 같은 수인 경우: 차감
        포인터와 다른 수인 경우: 포인터 값을 변경하고 넘어감

        반환값이 정수는 맞는데, 원본 배열도 수정해야 하는듯
        투포인터로 잡고 풀면 되지 않나?

        구현이 너무 어렵다.
        일단 중복 개수만큼 잡고 없애고를 반복해보자.

        object key는 문자열이고, 음수가 들어가면 오름차순 정렬이 깨진다.
     */

    const map = {};

    nums.forEach((v) => {
        map[v] ? map[v]++ : (map[v] = 1);
    });

    const keyList = Object.keys(map);
    const result = keyList.length;

    Object.keys(map)
        .sort((a, b) => Number(a) - Number(b))
        .forEach((v, i) => {
            if (map[v] !== 1) {
                nums.splice(i, map[v] - 1);
            }
        });

    return result;
};
