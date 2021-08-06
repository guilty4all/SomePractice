function middleMe(N, X, Y) {
    let res = "";
    if (N % 2 !== 0) return X;
    res += Y.repeat(N / 2) + X + Y.repeat(N / 2);
    return res;
}

let X = "A";
let Y = "*";
let N = 19;
console.log(middleMe(N, X, Y));