var reverse = function(x) {
    if (x < 0) {
        let str = x.toString().split("").reverse();
        str.pop();
        str.unshift("-");
        let result = str.join("");
        if (Number(result) >= (-2) ** 31 && Number(result) <= 2 ** 31 - 1) {
            return Number(result);
        } else {
            return 0;
        }
    } else {
        result = Number(x.toString().split("").reverse().join(""));
        if (Number(result) >= (-2) ** 31 && Number(result) <= 2 ** 31 - 1) {
            return result;
        } else {
            return 0;
        }
    }
};

let x = -7591;
console.log(reverse(x));