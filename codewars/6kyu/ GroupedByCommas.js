function groupByCommas(n) {
    let str = n.toString();
    let result = [];
    let num = str.length % 3;
    let num2 = str.length; //3
    for (let i = 0; i < str.length; i++) {
        if (num !== 0) {
            result.push(str.slice(0, num));
            i += 2;
            num = 0;
        } else {
            result.push(str.slice(i, i + 3));
            i += 3;
        }
    }
    return result.join(",");
}

let n = 35235235;
console.log(groupByCommas(n));