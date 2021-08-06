function gps(s, x) {
    let arr = [];
    if (x.length <= 1) return 0;
    for (let i = 0; i < x.length - 1; i++) {
        let delta = Math.abs(x[i] - x[i + 1]);
        let speed = (3600 * delta) / s;
        arr.push(Math.floor(speed));
    }
    return Math.max(...arr);
}

const x = [
    0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52,
    3.25,
];
const s = 12;
console.log(gps(s, x));