// Lv. 2 스킬트리

/**
 * @param {string} skill 선행 스킬 순서
 * @param {string[]} skill_trees 유저가 만든 스킬트리를 담은 배열
 * @return {number} 가능한 스킬트리의 개수
 */

const solution = (skill, skill_trees) => {
    let result = 0;
    const orderedSkill = {};
    [...skill].forEach((v) => (orderedSkill[v] = true));

    for (const candidates of skill_trees) {
        const queue = [...skill];
        let canLearn = true;

        for (const skl of candidates) {
            if (orderedSkill[skl]) {
                if (queue[0] !== skl) {
                    canLearn = false;
                    break;
                }

                queue.shift();
            }
        }

        if (canLearn) {
            result++;
        }
    }

    return result;
};
