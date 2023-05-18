// Lv. 4 호텔 방 배정

/**
 * @param {number} k 전체 방 개수
 * @param {number[]} room_number 고객들이 원하는 방 번호가 순서대로 들어있는 배열
 * @returns {number[]} 각 고객에게 배정되는 방 번호를 순서대로 배열에 담아 return
 */

const solution = (k, room_number) => {
    const map = new Map(); // for HashMap
    const result = [];

    const query = (n) => {
        const curRoom = map.get(n);

        // if empty current room number
        if (!curRoom) {
            map.set(n, n + 1); // record next room number about the current room number
            return n; // return recorded room number for result
        }

        // if exist current room number
        const newRoom = query(curRoom); // search new empty room number by using HashMap
        map.set(n, newRoom); // record earned room number

        return newRoom; // return recorded room number for result
    };

    room_number.forEach((room) => result.push(query(room)));

    return result;
};

// test cases
console.log(solution(10, [1, 3, 4, 1, 3, 1])); // [1,3,4,2,5,6]
console.log(solution(10, [3, 3, 3, 4, 2, 1])); // [3,4,5,6,2,1]
