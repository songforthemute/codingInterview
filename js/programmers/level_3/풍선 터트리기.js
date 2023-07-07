// Lv. 3 풍선 터트리기

/**
 * @param {number[]} a 일렬로 나열된 풍선들의 번호가 담긴 배열
 * @returns {number} 풍선들을 1개만 남을 때까지 터트렸을 때 최후까지 남기는 것이 가능한 풍선들의 개수
 */

function solution(a) {
    if (a.length <= 2) return a.length;

    let [boom, left, right] = [1, 0, a.length - 1];
    let [leftVal, rightVal] = [a[left], a[right]];

    while (left < right) {
        // 좌측 풍선이 우측 풍선보다 클 때
        if (leftVal > rightVal) {
            // 좌측 포인터를 우측으로 한 칸 이동
            left++;

            // 현재 좌측 풍선이, 바로 우측의 풍선보다 클 때
            // 현재 좌측 풍선을 터트릴 수 있다.
            if (leftVal > a[left]) {
                boom++;
                leftVal = a[left];
            }
        }
        // 우측 풍선이 좌측 풍선보다 클 때
        else {
            // 우측 포인터를 좌측으로 한 칸 이동
            right--;

            // 현재 우측 풍선이, 바로 좌측의 풍선보다 클 때
            // 현재 우측 풍선을 터트릴 수 있다.
            if (rightVal > a[right]) {
                boom++;
                rightVal = a[right];
            }
        }
    }

    return boom;
}

// Test Cases
console.log(solution([9, -1, -5])); // 3
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])); // 6
