// Lv. 1 기사단원의 무기

/**
 * @param {number} number
 * @param {number} limit
 * @param {number} power
 * @return {number}
 */

const solution = (number, limit, power) => {
    return Array(number)
        .fill(0)
        .map((_, i) => {
            let knight = i + 1;
            let weapon = 0;

            for (let j = 1; j ** 2 <= knight; j++) {
                if (j ** 2 === knight) weapon++;
                else if (knight % j === 0) weapon += 2;

                if (weapon > limit) return power;
            }

            return weapon;
        })
        .reduceRight((prev, curr) => prev + curr);
};
