function squareDigits(num) {
    let result = "";
    for (let el of String(num).split("")) {
        result += String(Number(el) ** 2);
    }
    return Number(result);
}

let num = 9119;
console.log(squareDigits(num));