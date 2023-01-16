// Lv. 0 치킨 쿠폰

/**
 * @param {number} chicken
 * @return {number}
 */

const solution = (chicken) => {
    let coupons = chicken;
    let additional = 0;

    while (coupons >= 10) {
        additional += Math.floor(coupons / 10);
        coupons = (coupons % 10) + Math.floor(coupons / 10);
    }

    return additional;
};
