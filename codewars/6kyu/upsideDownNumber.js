function solve(x, y) {
    const invalid = ["2", "3", "4", "5", "7"];
    let arr = [];
    for (let i = x; i < y; i++) {
        let valid = true;
        invalid.map((n) => {
            if (i.toString().includes(n)) valid = false;
        });
        if (valid) arr.push(i + "");
    }
    return arr.filter(
        (n) =>
        n ===
        n.replace(/6|9/g, (v) => (v === "6" ? "9" : "6")).split ``.reverse().join ``
    ).length;
}

//best practice

function solve(x, y) {
    let upside = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 },
        count = 0;
    for (let i = x; i < y; i++) {
        let s = i.toString(),
            u = s
            .split("")
            .reverse()
            .map((v) => upside[v])
            .join("");
        if (s === u) count++;
    }
    return count;
}