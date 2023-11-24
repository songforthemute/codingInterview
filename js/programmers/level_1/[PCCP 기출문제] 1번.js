// Lv. 1 [PCCP 기출문제] 1번

/**
 *
 * @param {number[]} bandage [시전 시간, 초당 회복량, 추가 회복량]
 * @param {number} health 최대 체력
 * @param {number[][]} attacks [공격 시간, 피해량][]
 * @returns {number} 모든 공격이 끝난 직후 남은 체력, 죽는다면 -1
 */

function solution(bandage, health, attacks) {
    const [time, perHeal, bonusHeal] = bandage;
    let hp = health;
    let bonusTurn = 0;
    let atkTurn = 0;

    for (let i = 0; i <= attacks[attacks.length - 1][0]; i++) {
        if (i === attacks[atkTurn][0]) {
            if (hp <= attacks[atkTurn][1]) return -1;

            hp -= attacks[atkTurn][1];
            bonusTurn = 0;
            atkTurn++;
        } else {
            hp = Math.min(health, hp + perHeal);

            if (bonusTurn + 1 === time) {
                hp = Math.min(health, hp + bonusHeal);
                bonusTurn = 0;
            } else {
                bonusTurn++;
            }
        }
    }

    return hp;
}

// TEST CASES
console.log(
    solution([5, 1, 5], 30, [
        [2, 10],
        [9, 15],
        [10, 5],
        [11, 5],
    ])
); // 5
