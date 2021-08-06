function mxdiflg(a1, a2) {
    let result = 0;
    if ((a1.length == 0) | (a2.length == 0)) {
        return -1;
    }
    for (let char1 of a1) {
        for (let char2 of a2) {
            let abs = Math.abs(char1.length - char2.length);
            if (abs > result) {
                result = abs;
            }
        }
    }
    return result;
}

// Best practice
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
    let l1 = a1.map((str) => str.length);
    let l2 = a2.map((str) => str.length);
    return Math.max(
        Math.max(...l1) - Math.min(...l2),
        Math.max(...l2) - Math.min(...l1)
    );
}