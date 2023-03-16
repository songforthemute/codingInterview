// Lv. 3 다단계 칫솔 판매

/**
 * @param {string[]} enroll 각 판매원의 이름을 담은 배열
 * @param {string[]} referral 각 판매원을 다단계 조직에 참여시킨 다른 판매원의 이름을 담은 배열
 * @param {string[]} seller 판매량 집계 데이터의 판매원 이름을 나열한 배열
 * @param {number[]} amount 판매량 집계 데이터의 판매 수량을 나열한 배열
 * @returns {number[]} 각 판매원이 득한 이익금을 나열한 배열
 */

const solution = (enroll, referral, seller, amount) => {
    class Seller {
        constructor(boss = null) {
            this.earning = 0;
            this.boss = boss;
        }
    }

    // depth first search for sell brush
    const DFS = (name, money) => {
        if (!name || !money) return;

        const current = tree[name];
        const fee = Math.floor(money * 0.1);

        current.earning += money - fee;

        DFS(current.boss, fee);
    };

    // init structure
    const tree = { "-": new Seller() };

    // chaining relation
    for (let i = 0; i < enroll.length; i++) {
        tree[enroll[i]] = new Seller(referral[i]);
    }

    // sell brush
    for (let i = 0; i < seller.length; i++) {
        DFS(seller[i], amount[i] * 100);
    }

    return enroll.map((v) => tree[v].earning);
};

// test cases
console.log(
    solution(
        ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
        ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
        ["young", "john", "tod", "emily", "mary"],
        [12, 4, 2, 5, 10]
    )
); // [360, 958, 108, 0, 450, 18, 180, 1080]

console.log(
    solution(
        ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
        ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
        ["sam", "emily", "jaimie", "edward"],
        [2, 3, 5, 4]
    )
); // [0, 110, 378, 180, 270, 450, 0, 0]
