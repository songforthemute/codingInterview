// Lv. 2 [1차] 캐시

/**
 * @param {number} cacheSize
 * @param {string[]} cities
 * @returns {number}
 */

function solution(cacheSize, cities) {
    if (!cacheSize) return cities.length * 5;

    let times = 0;
    let buffer = [];

    for (const city of cities.map((v) => v.toLowerCase())) {
        if (!buffer.includes(city)) {
            if (buffer.length < cacheSize) buffer.push(city);
            else buffer = [...buffer.slice(1), city];
            times += 5;
        } else {
            buffer = [...buffer.filter((v) => v !== city), city];
            times += 1;
        }
    }

    return times;
}
